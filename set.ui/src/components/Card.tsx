import Color from "../@enumerations/Color";
import Shading from "../@enumerations/Shading";
import Shape from "../@enumerations/Shape";

interface Props {
    color: Color;
    shading: Shading;
    shape: Shape;
}

const Card: React.FC<Props> = ({color, shading, shape}) => {
    
    return (
        <div>
            Card {color} {shading} {shape}
        </div>
    );
}

export default Card;