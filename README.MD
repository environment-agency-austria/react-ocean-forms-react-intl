# react-ocean-forms-react-intl
[![npm](https://img.shields.io/npm/v/react-ocean-forms-react-intl.svg)](https://www.npmjs.com/package/react-ocean-forms-react-intl)
[![GitHub license](https://img.shields.io/github/license/environment-agency-austria/react-ocean-forms-react-intl.svg)](https://github.com/environment-agency-austria/react-ocean-forms-react-intl/blob/master/LICENSE)
[![travis](https://travis-ci.com/environment-agency-austria/react-ocean-forms-react-intl.svg?branch=master)](https://travis-ci.com/environment-agency-austria/react-ocean-forms-react-intl)
[![Greenkeeper badge](https://badges.greenkeeper.io/environment-agency-austria/react-ocean-forms-react-intl.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/environment-agency-austria/react-ocean-forms-react-intl/badge.svg?branch=master)](https://coveralls.io/github/environment-agency-austria/react-ocean-forms-react-intl?branch=master)

`react-ocean-forms-react-intl` works with [react-ocean-forms](https://github.com/environment-agency-austria/react-ocean-forms)
to enable `react-intl` support in the forms.

[API Documentation and Showcase](https://environment-agency-austria.github.io/forms-showcase/#/)

## Features
* Plug and play extension for multi-language support

## Install
```npm install react-ocean-forms-react-intl```

```yarn add react-ocean-forms-react-intl```

## Usage
Simply swap out any existing `Form` references with `IntlForm` from this package.

```js
import { IntlForm } from 'react-ocean-forms-react-intl';
```

Then replace the existing form tags.

```jsx
<IntlForm onSubmit={this.handleSubmit}>
  <Input
    name="name"
    label="demo_name"
  />

  <button type="submit">Submit</button>
</IntlForm>
```

IntlForm passes all props to `Form`. You can find a detailed documentation
in the [react-ocean-forms](https://github.com/environment-agency-austria/react-ocean-forms) repository.
