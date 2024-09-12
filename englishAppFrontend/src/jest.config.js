module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest', // Ensure this line is included
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    collectCoverage: true,
    coverageReporters: ['html', 'text-summary'],
    testEnvironment: 'jsdom', // Set this for Angular projects
  };
  