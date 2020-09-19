import index from "../src/index";

describe("starter", () => {
  it("should return package name", () => {
    const name = "mandecoisas-api";

    expect(index).toBe(name);
  });
});
