module.exports = {
  setupFilesAfterEnv: ["./test/jest-setup.js"],
  resetMocks: true,
  moduleNameMapper: {
    'icons/(.*)\.svg$': '<rootDir>/__mocks__/lazySvgMock.js',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
    '^axios$': 'axios/dist/node/axios.cjs',
    // Load the ESM lib/ build of rjsf v6 packages instead of the esbuild CJS dist.
    // The CJS dist uses __toESM(require(...), 1) (isNodeMode=1) which incorrectly
    // wraps @mui/material CJS-with-__esModule modules as { default: wholeObject },
    // causing "Element type is invalid: got object" in FieldTemplate.
    // The lib/ ESM files are Babel-transformed, which handles __esModule interop
    // correctly via _interopRequireDefault().default.
    '^@rjsf/mui$': '<rootDir>/node_modules/@rjsf/mui/lib/index.js',
    '^@rjsf/core$': '<rootDir>/node_modules/@rjsf/core/lib/index.js',
    '^@rjsf/utils$': '<rootDir>/node_modules/@rjsf/utils/lib/index.js',
    '^@rjsf/validator-ajv8$': '<rootDir>/node_modules/@rjsf/validator-ajv8/lib/index.js',
  },
  testEnvironment: 'jsdom',  testEnvironmentOptions: {
    customExportConditions: ['require', 'default'],
  },  transformIgnorePatterns: [
    // Transform @rjsf (lib/ ESM files), @x0k/json-schema-merge (pure ESM),
    // @mui/material (ESM subpath imports used by @rjsf/mui lib/), and lodash-es
    // (pure ESM used throughout @rjsf/utils and @rjsf/core lib/ files).
    '/node_modules/(?!(@x0k/json-schema-merge|@rjsf|@mui|lodash-es)/)',
  ],
};

