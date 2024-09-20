const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
    it("float whole numbers", () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    });

    it("rounding down 1 float and 1 fractional number", () => {
        assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });

    it("rounding 2 fractional numbers", () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });

    it("rounding fractional numbers with trailing 9's", () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });
});
