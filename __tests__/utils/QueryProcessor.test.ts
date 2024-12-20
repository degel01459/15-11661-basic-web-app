import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("15-11661"));
    });
    test('should return name as KevinB', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("KevinB");
    });
    test('should calculate 16 plus 73', () => {
        const query = "What is 16 plus 73?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("89");
    });
    test('should identify the largest number among 11, 91, 53', () => {
        const query = "Which of the following numbers is the largest: 11, 91, 53?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("91");
    });

    test('should calculate 62 multiplied by 65', () => {
        const query = "What is 62 multiplied by 65?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("4030");
    });

    test('should find the number that is both a square and a cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 4515, 2744, 1201, 64, 1112, 2025, 4162?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("64");
    });

    test('should identify prime numbers among 29, 78, 72, 61, 11', () => {
        const query = "Which of the following numbers are primes: 29, 78, 72, 61, 11?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("29, 61, 11");
    });

    test('should calculate 16 minus 30', () => {
        const query = "What is 16 minus 30?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-14");
    });
    
});
