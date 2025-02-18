import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverage: true,
  rootDir: './',
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true,
  testMatch: [
    '<rootDir>/(__tests__|tests)/**/*.(test|spec).(ts|js)',
  ],
};

export default config;