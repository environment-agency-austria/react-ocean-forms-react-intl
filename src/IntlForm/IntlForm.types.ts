import { InjectedIntlProps } from 'react-intl';
import { Form, PropsOf } from 'react-ocean-forms';

type TFormProps = JSX.LibraryManagedAttributes<typeof Form, PropsOf<typeof Form>>;

/**
 * Props for the IntlForm component
 */
export interface IIntlFormProps extends TFormProps, InjectedIntlProps { }
