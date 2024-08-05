import { useCards } from "../context/CardsContext";
import Card from "./Card";

const Board: React.FC = () => {
    const { cards } = useCards();

    return (
        <div>
            Board
            {cards.map((card) => <Card color={card.Color} shading={card.Shading} shape={card.Shape}/>)}
        </div>
    );
}

export default Board