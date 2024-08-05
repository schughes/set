import Color from "../@enumerations/Color";
import Shading from "../@enumerations/Shading";
import Shape from "../@enumerations/Shape";

export default interface ICard {
    Color: Color;
    Number: number;
    Shading: Shading;
    Shape: Shape;
}