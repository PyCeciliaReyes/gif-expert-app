import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prueba en GifItem', () => {
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'
    test('debe de hacer el match con el snapshot', () => {
        const {container} =render( <GifItem title={title} url={url}/> )
        expect (container).toMatchSnapshot();
    });

    // test('debe de salir error por el PropType requerido', () => {

    // });
});