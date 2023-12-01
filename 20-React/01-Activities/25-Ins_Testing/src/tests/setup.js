import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});

/* NOTES: 
- 'cleanup()' is a function imported from the @testing-library/react package. 
    This function is specifically used in testing React components to clean up the testing environment, 
    especially after rendering components and interacting with the DOM.

*/ 