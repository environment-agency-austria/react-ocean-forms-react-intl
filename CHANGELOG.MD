# Changelog
All notable changes to this project will be documented in this file.

## [2.0.4] - 2019-04-12
- Disabled `console.error` in `formatIntlString`

## [2.0.3] - 2018-12-16
- Migrated to rollup to improve package size and tree shaking

## [2.0.2] - 2018-12-01
- Moved `@types/react-intl` to peerDependencies due to hoisting issues
- Made production package size smaller
- Enabled tree shaking

## [2.0.1] - 2018-11-28
- Added `@types/react-intl` dependency to fix possible typescript compiler issues

## [2.0.0] - 2018-11-19
### Breaking changes
- IntlForm is now a named export. Use `import { IntlForm } from 'react-ocean-forms-react-intl';` now
- Updated to react-ocean-forms 2.0.0 - [migration guide](https://github.com/environment-agency-austria/react-ocean-forms#upgrading-from-react-ocean-forms-1xx-to-200)

## [1.3.0] - 2018-08-20
- Updated to react-ocean-forms 1.4.0

## [1.2.0] - 2018-08-02
- Updated to react-ocean-forms 1.3.0

## [1.1.0] - 2018-07-25
- Added displayName props
- Updated to react-ocean-forms 1.2.0

## [1.0.3] - 2018-06-27
- Updated react-ocean-forms dependency to 1.1.0

## [1.0.2] - 2018-06-11
- Initial release of the current code base
