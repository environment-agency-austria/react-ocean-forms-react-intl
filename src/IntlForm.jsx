/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-ocean-forms';
import { injectIntl, intlShape } from 'react-intl';

/**
 * React-intl wrapper for the OceanJS
 * Forms component.
 */
class IntlForm extends React.Component {
  constructor(props) {
    super(props);

    this.formatIntlString = this.formatIntlString.bind(this);
  }

  formatIntlString(id, values) {
    // Return null if no valid id was given
    if (id === null || id === undefined || id === '') {
      console.error('[IntlForm] Invalid id given to formatIntlString');
      return null;
    }

    const { intl } = this.props;
    return intl.formatMessage({ id }, values);
  }

  render() {
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

IntlForm.displayName = 'IntlForm';

IntlForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  intl: intlShape.isRequired,
};

export const BaseIntlForm = IntlForm;
export default injectIntl(IntlForm);
