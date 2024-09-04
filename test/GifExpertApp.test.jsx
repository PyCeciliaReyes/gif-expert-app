import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueba en el componente <GifExpertApp/>', () => {
    test('debe de retornar onAddCategory', () => {
        render(<GifExpertApp />)
    });
});