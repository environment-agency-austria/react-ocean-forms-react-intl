import * as FormComponents from './index';

describe('Index', () => {
  describe('Component exports', () => {
    const components = [
      'IntlForm',
    ];

    components.forEach((component) => {
      it(`Should export ${component}`, () => {
        // @ts-ignore
        expect(FormComponents[component]).toBeTruthy();
      });
    });
  });
});
