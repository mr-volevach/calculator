import React from 'react';
import UiRadio from '../ui-radio/UiRadio';
import './UiRadioGroup.css';

class UiRadioGroup extends React.Component {
    constructor (props) {
        super(props);

        const options = this.props.children || this.props.options;

        this.state = {
            values: options.map((child, index, arr) => {
                return {
                    id: index,
                    value: child.props ? child.props.value : child.value,
                    prev: index === 0 ? arr.length - 1 : index - 1,
                    next: index === arr.length - 1 ? 0 : index + 1
                };
            })
        };

        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onPrev() {
        const selectedValue = this.state.values.find((item) => item.value === this.props.selectedValue);
        this.props.onChange(this.state.values[selectedValue.prev].value);
    }

    onNext() {
        const selectedValue = this.state.values.find((item) => item.value === this.props.selectedValue);
        this.props.onChange(this.state.values[selectedValue.next].value);
    }

    renderChildren() {
        return this.props.children.map((child, index) => (
            React.cloneElement(child, {
                key: index,
                name: this.props.name,
                onChange: this.props.onChange,
                checked: child.props.value === this.props.selectedValue,
                onPrev: this.onPrev,
                onNext: this.onNext
            })
        ));
    }

    renderOptions() {
        return this.props.options.map((option, index) => (
            <UiRadio
                key={index}
                name={this.props.name}
                value={option.value}
                checked={option.value === this.props.selectedValue}
                onChange={this.props.onChange}
                onPrev={this.onPrev}
                onNext={this.onNext}
                className={this.props.optionClassName}>
                {option.title}
            </UiRadio>
        ));
    }

    render() {
        return (
            <div
                className={`ui-radio-group ${this.props.className || ''}`}
                role="radiogroup">
                {this.props.children ? this.renderChildren() : this.renderOptions()}
            </div>
        );
    }
}

export default UiRadioGroup;