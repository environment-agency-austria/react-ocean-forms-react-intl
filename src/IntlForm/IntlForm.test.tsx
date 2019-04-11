import * as React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { InjectedIntl } from 'react-intl';
import { TSTringFormatter } from 'react-ocean-forms';

import { BaseIntlForm } from './IntlForm';

describe('<IntlForm />', () => {
  interface ISetupResult {
    wrapper: ShallowWrapper;
    intl: InjectedIntl;
    formatIntlString: TSTringFormatter;
  }

  const setup = (): ISetupResult => {
    const intl: InjectedIntl = {
      formatDate: jest.fn(),
      formatTime: jest.fn(),
      formatRelative: jest.fn(),
      formatNumber: jest.fn(),
      formatPlural: jest.fn(),
      formatMessage: jest.fn().mockImplementation((value: { id: string }) => value.id),
      formatHTMLMessage: jest.fn(),
      locale: 'en',
      formats: null,
      messages: {},
      defaultLocale: 'en',
      defaultFormats: null,
      now: jest.fn(),
      onError: jest.fn(),
    };

    const wrapper = shallow((
      <BaseIntlForm
        intl={intl}
      />
    ));

    const formatIntlString = wrapper.find('Form').prop<TSTringFormatter>('formatString');

    return {
      wrapper,
      intl,
      formatIntlString,
    };
  };

  it('should render without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass a formatString method to the base form', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Form').prop('formatString')).toBeInstanceOf(Function);
  });

  describe('formatIntlString', () => {
    it('should pass the message id to intl.formatMessage and return the result', () => {
      const { intl, formatIntlString } = setup();

      const mockMessage = 'mock';
      const result = formatIntlString(mockMessage);

      expect(intl.formatMessage).toHaveBeenCalledWith({ id: mockMessage }, undefined);
      expect(result).toBe(mockMessage);
    });

    it('should pass the message params as well', () => {
      const { intl, formatIntlString } = setup();

      const mockMessage = 'mock';
      const mockParams = {
        foo: 'bar',
      };

      formatIntlString(mockMessage, mockParams);
      expect(intl.formatMessage).toHaveBeenCalledWith({ id: mockMessage }, mockParams);
    });

    describe('error cases', () => {
      const cases: [string, null | undefined | string][] = [
        [ 'null', null ],
        [ 'undefined', undefined ],
        [ 'empty', '' ],
      ];

      describe.each(cases)('called with "%s"', (name, value) => {
        const { intl, formatIntlString } = setup();

        let consoleErrorSpy: jest.SpyInstance;

        beforeAll(() => {
          consoleErrorSpy = jest.spyOn(console, 'error');
        });

        afterAll(() => {
          consoleErrorSpy.mockClear();
        });

        it('should return the passed value as-is', () => {
          const result = formatIntlString(value as string);
          expect(result).toBe(value);
        });

        it('should not call intl.formatMessage', () => {
          expect(intl.formatMessage).not.toHaveBeenCalled();
        });

        it('should write an error on console.error', () => {
          expect(consoleErrorSpy).toHaveBeenCalledWith('[IntlForm] Invalid id given to formatIntlString');
        });
      });
    });
  });
});
