module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  collectCoverageFrom: ["./src/**/*.ts"],
  setupFilesAfterEnv: ["<rootDir>/__test__/SetupFile.ts"],
};
