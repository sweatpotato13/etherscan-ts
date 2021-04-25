module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
      'ts-jest': {
          tsConfig: '<rootDir>/tsconfig.json',
          diagnostics: false,
      },
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  roots: ['<rootDir>/test/'],
  clearMocks: true,

  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],

  coverageProvider: 'v8',

  testPathIgnorePatterns: ['/node_modules/'],
};
