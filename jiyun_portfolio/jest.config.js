const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "node", // Next.js API Routes 테스트 시 필요
};

module.exports = createJestConfig(customJestConfig);
