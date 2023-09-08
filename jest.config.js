/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { useESM: true }],
  },
  collectCoverageFrom: ["./src/**/*.ts"],
  setupFilesAfterEnv: ["<rootDir>/__test__/SetupFile.ts"],
};

export default jestConfig;
