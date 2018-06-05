import React from 'react'
import PropTypes from 'prop-types'
import Blockies from 'react-blockies'
import classnames from 'classnames'

import './Account.css'

const Account = ({
    name,
    balance,
    isActive
}) => (
    <div className={classnames('account', { 'active': isActive })}>
        <Blockies seed={name} />
        <div>{name}</div>
        <div className="account--item--balance__container">
            {balance}
        </div>
    </div>
)

Account.propTypes = {
    balance: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default Account
