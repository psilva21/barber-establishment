export default {
  moduleFileExtensions: [
    "js",
    "ts",
  ],
  roots: [
    "<rootDir>/src",
    "<rootDir>/tests",
  ],
  testMatch: [
    "**/tests/**/*.ts",
    "**/?(*.)+(spec|test).ts"
  ],
  testEnvironment: "node",
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  verbose: true,
};
