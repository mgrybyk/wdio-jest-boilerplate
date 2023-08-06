/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    testMatch: ['**/test/specs/**/*.ts'],
    setupFilesAfterEnv: ['./jest.setup.after-env.ts'],
    testEnvironment: 'node',
    preset: 'ts-jest/presets/default-esm',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.[jt]s$': '$1',
    },
}
