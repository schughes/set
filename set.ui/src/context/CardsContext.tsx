import { createContext, useContext } from "react";
import ICard from "../@interfaces/ICard";
import Color from "../@enumerations/Color";
import Shading from "../@enumerations/Shading";
import Shape from "../@enumerations/Shape";

interface ICardsContext {
    cards: ICard[];
}

const initialCardsContext: ICardsContext = {
    cards: []
}

export const CardsContext = createContext<ICardsContext>(initialCardsContext);

export const CardsProvider = (props: any) => {
    const cards: ICard[] = [];
    for (let i = 0; i < 3; i++) {
        for (const color of Object.values(Color).filter(value => typeof value === 'number') as Color[]) {
            for (const shade of Object.values(Shading).filter(value => typeof value === 'number') as Shading[]) {
                for (const shape of Object.values(Shape).filter(value => typeof value === 'number') as Shape[]) {
                    cards.push({
                        Color: color,
                        Shading: shade,
                        Shape: shape,
                        Number: i + 1,
                    });
                }
            }
        }
    }

    // console.log('cards provider', cards);

    return (
        <CardsContext.Provider value={{cards}} {...props}/>
    )
}

export const useCards = () => {
    const context = useContext<ICardsContext>(CardsContext);
    if (typeof context === "undefined") {
        throw new Error("useCardsContext must be used within a CardsProvider");
    }
    return context;
}