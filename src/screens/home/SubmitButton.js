import React from 'react';
import Button from '../../components/button/Button';
import {withRouter} from 'react-router-dom';

const SubmitButton = withRouter((props) => {
    const {
        history,
        onClick,
        className,
        primary,
        children
    } = props;

    const handlerClick = () => {
        onClick();
        history.push('/complete');
    };

    return (
        <Button
            className={className}
            primary={primary}
            onClick={handlerClick}>
            {children}
        </Button>
    );
});

export default SubmitButton;
