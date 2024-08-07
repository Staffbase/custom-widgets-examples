module.exports = {
  setupFilesAfterEnv: ["./test/jest-setup.js"],
  resetMocks: true,
  moduleNameMapper: {
    'icons/(.*)\.svg$': '<rootDir>/__mocks__/lazySvgMock.js',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
    '^axios$': 'axios/dist/node/axios.cjs'
  },
  testEnvironment: 'jsdom',
};
