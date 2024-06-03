module.exports = {
  setupFilesAfterEnv: ["./test/jest-setup.js"],
  resetMocks: true,
  moduleNameMapper: {
    'icons/(.*)\.(png|svg)$': '<rootDir>/__mocks__/lazySvgMock.js',
    '\\.(png|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
};
