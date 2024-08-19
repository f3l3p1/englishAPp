module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'html'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest'
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    collectCoverage: true,
    coverageReporters: ['html', 'text-summary'],
  };
  