import React, { Component } from 'react';
import './UiRange.css';

class UiRange extends Component {
    state = {
        isFocused: false
    };

    render() {
        const {
            preFix,
            min,
            max,
            suFix,
            step,
            value,
            onChange
        } = this.props;

        let percent = ((Number(value)) / (Number(max) / step));

        if (step === 1) {
            percent = percent - (min / (max / step));
            percent = percent * 100;
        }

        const rangeStyle = {
            '--low': 0,
            '--high': `${percent}%`,
        };

        const classNames = ['ui-range'];

        if (this.state.isFocused) {
            classNames.push('ui-range--focused');
        }

        return (
            <div className={classNames.join(' ')}>
                <div className="ui-range__header">
                    <div className="ui-range__current" style={{left: percent + '%'}}>
                        {preFix}{value}{suFix}
                    </div>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={(e) => typeof onChange === 'function' && onChange(Number(e.target.value))}
                        style={rangeStyle}
                        className="ui-range__control"
                        onFocus={() => this.setState({isFocused: true})}
                        onBlur={() => this.setState({isFocused: false})}
                    />
                </div>
                <div className="ui-range__footer">
                    <div className="ui-range__label ui-range__minimum">
                        {preFix}{min}{suFix}
                    </div>
                    <div className="ui-range__label ui-range__maximum">
                        {preFix}{max}{suFix}
                    </div>
                </div>
            </div>
        );
    }
}

export default UiRange;
