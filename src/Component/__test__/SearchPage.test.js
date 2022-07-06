import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchPage from "../SearchPage/SearchPage";

const {dictionaryapi} = require('../../Action/SearchAPI');


describe("Test the Search Component",()=>{
    test('render button in the document', async ()=>{
        render(<SearchPage/>);
        const buttonList = await screen.findAllByRole('button');
        expect(buttonList).toHaveLength(1);
    })
    test('render button in the document', async ()=>{
        render(<SearchPage/>);
        const inputList = await screen.findAllByTestId('input');
        expect(inputList).toHaveLength(1);
    })
    test("should be able to search",()=>{
        const { getByTestId }=render(<SearchPage/>);
        const searchbutton=getByTestId('search')
        const textValue=getByTestId('input')
        userEvent.type(textValue,"do")
    })

    test('return array of search result',async()=>{
        const title = await dictionaryapi();  // Run the function
        expect(title).toHaveLength(title.length);
    })
})