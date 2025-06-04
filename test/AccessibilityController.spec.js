import { jest } from '@jest/globals';
import { AccessibilityController } from "../src/index.js";

describe("AccessibilityController", () => {
  it("should throw an error if the input contains unrecognized options", () => {
    expect(() => {
      new AccessibilityController({ invalidOption: true });
    }).toThrow();
  });

  it("should initialize properly with recognized options", () => {
    const controller = new AccessibilityController({ largerText: true });
    expect(controller).toBeInstanceOf(AccessibilityController);
  });

  it("should initialize properly with no options", () => {
    const controller = new AccessibilityController();
    expect(controller).toBeInstanceOf(AccessibilityController);
  });
});

