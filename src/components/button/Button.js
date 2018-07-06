import React from 'react';
import './Button.css'

const Button = (props) => {
    const {
        type,
        className,
        onClick,
        disabled,
        primary,
        children
    } = props;

    const classNames = ['button', className];

    if (disabled === true) {
        classNames.push('button--disabled');
    }

    if (primary === true) {
        classNames.push('button--primary');
    }

    return (
        <button
            type={type}
            className={classNames.join(' ')}
            onClick={onClick}
            disabled={disabled === true}>
            {children}
        </button>
    );
};

export default Button;
