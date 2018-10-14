/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { injectIntl } from 'react-intl';
import { Form, IMessageValues } from 'react-ocean-forms';

import { IIntlFormProps } from './IntlForm.types';

/**
 * React-intl wrapper for the OceanJS
 * Forms component.
 */
export class BaseIntlForm extends React.Component<IIntlFormProps> {
  public static displayName: string = 'IntlForm';

  private formatIntlString = (id: string, values: IMessageValues): string => {
    // Return the id if no valid id was given
    if (id === null || id === undefined || id === '') {
      // tslint:disable-next-line:no-console
      console.error('[IntlForm] Invalid id given to formatIntlString');

      return id;
    }

    const { intl } = this.props;

    return intl.formatMessage({ id }, values);
  }

  // tslint:disable-next-line:member-ordering
  public render(): JSX.Element {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Form
        {...rest}
        formatString={this.formatIntlString}
      >
        {children}
      </Form>
    );
  }
}

export const IntlForm = injectIntl(BaseIntlForm);
