import React from 'react';
import { bool } from 'prop-types';

import { accountFormatter, balanceWithCurrency } from '../../util/format';
import { Account, Locale } from '../../util/types';

function AccountDetails({ account, locale, showBalance = true }) {
    const { balance, accountNumber, currencyCode } = account;
    return (
        <div className="ffe-small-text ffe-account-selector__details">
            <div className="ffe-account-selector__details--left">
                {accountFormatter(accountNumber)}
            </div>
            {showBalance && (
                <div className="ffe-account-selector__details--right">
                    {balanceWithCurrency(balance, locale, currencyCode)}
                </div>
            )}
        </div>
    );
}

AccountDetails.propTypes = {
    account: Account.isRequired,
    locale: Locale.isRequired,
    showBalance: bool,
};

export default AccountDetails;
