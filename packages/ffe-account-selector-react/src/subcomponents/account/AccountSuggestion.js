import React from 'react';
import { bool, arrayOf, string } from 'prop-types';
import classNames from 'classnames';

import { accountFormatter, balanceWithCurrency } from '../../util/format';
import { Account, Locale } from '../../util/types';

const AccountSuggestionItem = ({
    item,
    isHighlighted,
    locale,
    dropdownAttributes,
}) => {
    const { accountNumber, balance, name, currencyCode } = item;
    return (
        <div
            className={classNames(
                'ffe-account-suggestion ffe-account-suggestion__account',
                {
                    'ffe-account-suggestion--highlighted': isHighlighted,
                },
            )}
        >
            <span className="ffe-account-suggestion__name ffe-link-text ffe-link-text--no-underline">
                {name}
            </span>
            <div className="ffe-account-suggestion__details">
                <span className="ffe-account-suggestion__number">
                    {accountFormatter(accountNumber)}
                </span>
                {dropdownAttributes.includes('balance') && (
                    <span className="ffe-account-suggestion__balance">
                        {balanceWithCurrency(balance, locale, currencyCode)}
                    </span>
                )}
            </div>
        </div>
    );
};

AccountSuggestionItem.propTypes = {
    item: Account.isRequired,
    locale: Locale.isRequired,
    isHighlighted: bool.isRequired,
    dropdownAttributes: arrayOf(string).isRequired,
};

export default AccountSuggestionItem;
