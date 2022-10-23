import next from "next";
next({dev:true})
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// polyfill necessary for jsdom test environment
// reference: https://stackoverflow.com/a/68468204
import { server } from "./src/mocks/server.ts";
// import { TextDecoder, TextEncoder } from "util";

// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;

// Establish API mocking before all tests.
beforeAll(() => server.listen());

beforeEach(async () => {});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());


