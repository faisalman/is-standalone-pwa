const { isStandalonePWA } = require('../dist/cjs');
const assert = require('assert');

describe('isStandalonePWA()', () => {
    describe('Check if running in standalone mode', () => {

        it('Returns `true` when running in standalone mode', () => {
            globalThis.window = {
                matchMedia : () => { return { matches : true }}
            };
            assert.equal(isStandalonePWA(), true);
        });
        
        it('Returns `false` otherwise', () => {
            globalThis.window = false;
            assert.equal(isStandalonePWA(), false);
        });
    });
});