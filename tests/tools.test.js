import "chai/register-should";
import { test } from "vitest";
import { beadsCol, randomNumber } from "../src/tools/helpers";

test("generate random number", () => {
  const number = randomNumber(1, 10);
  number.should.be.a("number");
  number.should.be.within(1, 10);
});

test("generate random number", () => {
  const number = randomNumber(-100, -50, true);
  number.should.be.within(-1002, -50);
});

test("generate random number", () => {
  const number = randomNumber(100, 200, true);
  number.should.be.within(100, 200);
});

test("generate random number", () => {
  const number = randomNumber(1000, 1002, true);
  number.should.be.within(1000, 1002);
});

test("generate random number", () => {
  const number = randomNumber(1, -50, true);
  number.should.be.within(-50, 1);
});

test("generate random number", () => {
  const number = randomNumber(-1, 1, true);
  number.should.be.within(-1, 1);
});

test("generate random number", () => {
  const number = randomNumber(-1, 1, false);
  number.should.be.within(-1, 1);
  number.should.not.equal(0);
});

test("beads show 0", () => {
  const beads = beadsCol(0);
  beads.should.deep.equal([false, true, true, true, true]);
});

test("beads show 1", () => {
  const beads = beadsCol(1);
  beads.should.deep.equal([false, false, true, true, true]);
});

test("beads show 7", () => {
  const beads = beadsCol(7);
  beads.should.deep.equal([true, false, false, true, true]);
});
