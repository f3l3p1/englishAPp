// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: true, // This speeds up the tests and works well with Jest
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!@ionic/core|@ionic/angular|@stencil/core|@angular|rxjs)',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@env/(.*)$': '<rootDir>/src/environments/$1', // Adjust alias for environments
  },
  testEnvironment: 'jsdom', // Use jsdom to simulate the browser environment
};
