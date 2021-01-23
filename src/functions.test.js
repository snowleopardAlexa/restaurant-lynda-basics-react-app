// TEST DRIVEN DEVELOPMENT
import {timesTwo} from "./functions";

// the syntaxt comes form JEST library
test("Multiple by two", () => {
    expect(timesTwo(4)).toBe(8);
});

