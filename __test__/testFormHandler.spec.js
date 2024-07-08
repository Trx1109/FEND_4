import { handleSubmit } from "../src/client/js/formHandler"


describe("Testing the submit functionality", () => {
    beforeAll(() => {
        global.Client = {
            checkValidUrl: jest.fn()
        }
    })
    document.body.innerHTML = `
        <div>
            <form id="urlForm">
                <input id="name" type="text" name="url" placeholder="Enter URL" required>
                <button id="submitButton" type="submit">Submit</button>
                <p id="error"></p>
            </form>    
            <div id="results"></div>
        </div>
    `
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })

    test("Testing the handleSubmit() function when receive invalid value", () => {
        expect(handleSubmit).toBeDefined();
        handleSubmit({ preventDefault: jest.fn() })
        let errElement = document.getElementById("error")
        expect(errElement.innerHTML).toEqual("Invalid Input")
    })
});