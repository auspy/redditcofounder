import { MongoClient } from "mongodb";
import {
  setPassword,
  validatePassword,
  resetPassword,
} from "@/lib/license/password.operations";
import * as bcrypt from "bcryptjs";

// Mock the database module
jest.mock("@/adapters/license.db", () => {
  const mockCollection = {
    findOne: jest.fn(),
    updateOne: jest.fn(),
  };
  return {
    getLicensesCollection: jest.fn().mockResolvedValue(mockCollection),
    mockCollection, // Export for test access
  };
});

// Mock bcryptjs
jest.mock("bcryptjs", () => ({
  hash: jest.fn().mockResolvedValue("hashed_password"),
  compare: jest.fn().mockResolvedValue(true),
}));

describe("Password Operations", () => {
  const mockLicense = {
    licenseKey: "5C0B-7F6D-CF72-6F3F",
    email: "test@example.com",
    status: "active",
  };

  // Get access to the mock collection
  const { mockCollection } = require("@/adapters/license.db");

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe("setPassword", () => {
    it("should set password successfully", async () => {
      mockCollection.findOne.mockResolvedValueOnce(mockLicense);
      mockCollection.updateOne.mockResolvedValueOnce({ modifiedCount: 1 });

      const result = await setPassword({
        licenseKey: mockLicense.licenseKey,
        email: mockLicense.email,
        password: "ValidPass123!",
      });

      expect(result).toBe(true);
      expect(mockCollection.findOne).toHaveBeenCalledWith({
        licenseKey: mockLicense.licenseKey,
        email: mockLicense.email,
      });
      expect(mockCollection.updateOne).toHaveBeenCalled();
    });

    it("should throw error for invalid license", async () => {
      mockCollection.findOne.mockResolvedValueOnce(null);

      await expect(
        setPassword({
          licenseKey: "INVALID",
          email: "invalid@example.com",
          password: "ValidPass123!",
        })
      ).rejects.toThrow("Invalid license key or email");
    });

    it("should throw error for weak password", async () => {
      await expect(
        setPassword({
          licenseKey: mockLicense.licenseKey,
          email: mockLicense.email,
          password: "weak",
        })
      ).rejects.toThrow("Password must be at least 8 characters");
    });
  });

  describe("validatePassword", () => {
    it("should validate password successfully", async () => {
      mockCollection.findOne.mockResolvedValueOnce({
        ...mockLicense,
        passwordHash: "hashed_password",
      });
      mockCollection.updateOne.mockResolvedValueOnce({ modifiedCount: 1 });

      const result = await validatePassword({
        email: mockLicense.email,
        password: "ValidPass123!",
      });

      expect(result).toEqual({
        licenseKey: mockLicense.licenseKey,
        email: mockLicense.email,
        status: mockLicense.status,
      });
    });

    it("should throw error for invalid email", async () => {
      mockCollection.findOne.mockResolvedValueOnce(null);

      await expect(
        validatePassword({
          email: "invalid@example.com",
          password: "ValidPass123!",
        })
      ).rejects.toThrow("Invalid email or password not set");
    });
  });

  describe("resetPassword", () => {
    it("should reset password successfully", async () => {
      mockCollection.findOne.mockResolvedValueOnce(mockLicense);
      mockCollection.updateOne.mockResolvedValueOnce({ modifiedCount: 1 });

      const result = await resetPassword({
        licenseKey: mockLicense.licenseKey,
        email: mockLicense.email,
        newPassword: "NewValidPass123!",
      });

      expect(result).toBe(true);
      expect(mockCollection.findOne).toHaveBeenCalledWith({
        licenseKey: mockLicense.licenseKey,
        email: mockLicense.email,
      });
      expect(mockCollection.updateOne).toHaveBeenCalled();
    });

    it("should throw error for invalid license during reset", async () => {
      mockCollection.findOne.mockResolvedValueOnce(null);

      await expect(
        resetPassword({
          licenseKey: "INVALID",
          email: "invalid@example.com",
          newPassword: "NewValidPass123!",
        })
      ).rejects.toThrow("Invalid license key or email");
    });
  });
});
