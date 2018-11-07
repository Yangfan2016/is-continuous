let expect=require("chai").expect;
let isContinous=require("../dist/isContinuous.min.js");

describe("Robustness",function () {
    it("The illegal input e.g. 'isContinous(NaN)'",function () {
        expect(isContinous(NaN))
        .to
        .be
        .equal(false);
    });
    it(`The illegal input e.g. 'isContinous("123456",NaN)'`,function () {
        expect(isContinous("123456",NaN))
        .to
        .be
        .equal(false);
    });
    it(`The type of return is boolean`,function () {
        expect(isContinous("123456",NaN))
        .to
        .be
        .an('boolean');
    });
});

describe("Default and border",function () {
    it("'12345' default step is 6",function () {
        expect(isContinous('12345'))
        .to
        .be
        .equal(false);
    });
    it(`The length of the string must be greater than 1, e.g. isContinous("")`,function () {
        expect(isContinous(""))
        .to
        .be
        .equal(false);
    });
    it(`The length of the string must be greater than 1, e.g. isContinous("s")`,function () {
        expect(isContinous("s"))
        .to
        .be
        .equal(false);
    });
    it(`The step must be greater than 1, e.g. 'isContinous("123456",1)'`,function () {
        expect(isContinous("123456",1))
        .to
        .be
        .equal(false);
    });
    it(`The step must be greater than 1, e.g. 'isContinous("123456",0)'`,function () {
        expect(isContinous("123456",0))
        .to
        .be
        .equal(false);
    });
});

describe("Availability",function () {
    it("'123456' number",function () {
        expect(isContinous('123456'))
        .to
        .be
        .equal(true);
    });
    it("'abcdef' character",function () {
        expect(isContinous('abcdef'))
        .to
        .be
        .equal(true);
    });
    it("'654321' reverse",function () {
        expect(isContinous('654321'))
        .to
        .be
        .equal(true);
    });
    it("'fedcba' reverse",function () {
        expect(isContinous('fedcba'))
        .to
        .be
        .equal(true);
    });
    it("'123456' set step is 7",function () {
        expect(isContinous('123456',7))
        .to
        .be
        .equal(false);
    });
    it("'1234567' set step is 7",function () {
        expect(isContinous('1234567',7))
        .to
        .be
        .equal(true);
    });
    it("'a123456'",function () {
        expect(isContinous('a123456'))
        .to
        .be
        .equal(true);
    });
    it("'aaaaaa123456'",function () {
        expect(isContinous('aaaaaa123456'))
        .to
        .be
        .equal(true);
    });
});