module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  collectCoverageFrom: ["./src/**/*.ts"],
  setupFilesAfterEnv: ["<rootDir>/__test__/SetupFile.ts"],
};
