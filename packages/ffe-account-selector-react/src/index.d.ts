import * as React from 'react';

export interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: string;
    balance?: number;
}

interface ListElementBodyProps {
    item: Account;
    isHighlighted: boolean;
    locale: string;
    dropdownAttributes: string[];
}

interface NoMatch {
    text: string;
    dropdownList?: Account[];
}

export interface AccountSelectorProps {
    accounts: Array<Account>;
    className?: string;
    id: string;
    locale: string;
    noMatches?: NoMatch;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    onAccountSelected: (account: Account) => void;
    onReset: () => void;
    selectedAccount?: Account;
    showBalance?: boolean;
    formatAccountNumber?: boolean;
    labelId: string;
    allowCustomAccount?: boolean;
    listElementBody?: (props: ListElementBodyProps) => React.FC<HTMLDivElement>;
    withSpaceForDetails?: boolean;
    ariaInvalid: boolean;
}

declare class AccountSelector extends React.Component<AccountSelectorProps> {}

export interface AccountSelectorMultiProps {
    accounts?: Array<Account>;
    id: string;
    isLoading?: boolean;
    locale: Array<string>;
    noMatches?: string;
    onAccountSelected: (account: Account) => void;
    onBlur: Function;
    onSelectAll: Function;
    selectedAccounts?: Array<Account>;
    showSelectAllOption?: boolean;
    value?: string;
    highCapacity?: boolean;
}

declare class AccountSelectorMulti extends React.Component<
    AccountSelectorMultiProps,
    any
> {}

export interface BaseSelectorProps {
    suggestions: Array<any>;
    suggestionsFilter: Function;
    onSelect: Function;
    value: string;
    locale: Array<String>;
    shouldHideSuggestionsOnSelect: boolean;
    shouldSelectHighlightedOnTab: boolean;
    shouldHideSuggestionsOnBlur: boolean;
    shouldHideSuggestionsOnReset: boolean;
    shouldShowSuggestionsOnFocus?: boolean;
    onSuggestionSelect: Function;
    onChange?: React.ChangeEventHandler<Element>;
    onBlur?: Function;
    onClick?: Function;
    onReset?: Function;
    onFocus?: Function;
    onSuggestionListChange?: Function;
    placeholder?: string;
    ariaInvalid?: boolean;
    suggestionsHeightMax?: number;
    id?: string;
    name?: string;
    readOnly?: boolean;
    highCapacity?: boolean;
}

declare class BaseSelector extends React.Component<BaseSelectorProps, any> {}

export { AccountSelector, AccountSelectorMulti, BaseSelector };
