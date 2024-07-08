import { checkValidUrl } from "../src/client/js/checkValidUrl"


describe("Testing the validate functionality", () => {
    test("Testing the checkValidUrl function", () => {
        expect(checkValidUrl).toBeDefined();
    })

    test("Testing the checkForName function when it return true", () => {
        let result = checkValidUrl("http://google.com")
        expect(result).toBeTruthy()
    })

    test("Testing the checkForName function when it return false", () => {
        let result = checkValidUrl("TEST")
        expect(result).toBeFalsy()
    })
});