const { generateToken, validateToken } = require("../../../src/utils/jwt");
const { sign, verify } = require("jsonwebtoken");
jest.mock("jsonwebtoken");

describe("jwt utils", () => {
  const payload = { id: 1, username: "ollie" };
  const JWT_KEY = "secret";
  const token = "jwt-token";

  it("should return a token if given a payload", () => {
    sign.mockImplementation((payload) => token);
    generateToken(payload);
    expect(sign).toReturnWith(token);
  });

  it("should return payload if given jwt-token", () => {
    verify.mockImplementation((token) => payload);
    validateToken(token);
    expect(verify).toReturnWith(payload);
  });

  it("should return null if jwt verify throw error", () => {
    verify.mockImplementation((token, JWT_KEY) => {
      throw new Error();
    });
    validateToken(token);
    expect(verify).toThrow(new Error());
  });
});
