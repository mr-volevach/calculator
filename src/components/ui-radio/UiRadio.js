import React from 'react';
import './UiRadio.css'

const KEY_CODES = Object.freeze({
    'RETURN': 13,
    'SPACE': 32,
    'END': 35,
    'HOME': 36,
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40
});

class UiRadio extends React.Component {
    onKeyDown(event) {
        const {
            onPrev,
            onNext
        } = this.props;

        switch (event.keyCode) {
            case KEY_CODES.UP:
                onPrev();
                break;

            case KEY_CODES.DOWN:
                onNext();
                break;

            case KEY_CODES.LEFT:
                onPrev();
                break;

            case KEY_CODES.RIGHT:
                onNext();
                break;
            default:
                break;
        }
    }

    onClick() {
        const {
            value,
            checked,
            onChange,
            onChecked
        } = this.props;

        if (!checked) {
            if (onChecked && typeof onChecked === 'function') {
                onChecked();
            }
            onChange(value);
        }
    }

    render() {
        return (
            <div
                className={`ui-radio ${this.props.className}`}
                role="radio"
                tabIndex={this.props.checked ? 0 : -1}
                aria-checked={this.props.checked ? "true" : "false"}
                onClick={() => this.onClick()}
                onKeyDown={this.onKeyDown.bind(this)}
                style={this.props.style || {}}>
                {this.props.children}
            </div>
        );
    }
}

export default UiRadio;
