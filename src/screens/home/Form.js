import React, { Component, Fragment } from 'react';
import UiRange from '../../components/ui-range/UiRange';
import UiRadio from '../../components/ui-radio/UiRadio';
import UiRadioGroup from '../../components/ui-radio-group/UiRadioGroup';
import SubmitButton from './SubmitButton';

class Form extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {
            isLoading,
            calculator,
            onChangeCurrency,
            onChangeSum,
            onChangePeriod,
            onChangePayment,
            onSubmit
        } = this.props;

        return (
            <div className="form" style={{marginTop: 25}}>
                <div className="layout form__panel">
                    {isLoading ? <p className="text-center">Loading...</p> : (
                        <Fragment>
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--8 form__attention">
                                    Расчитайте <br /> пасивный доход
                                </div>
                                <div className="layout__col layout__col--4">
                                    <UiRadioGroup
                                        name="currency"
                                        selectedValue={calculator.currency}
                                        onChange={onChangeCurrency}>
                                        <UiRadio value={'USD'}>
                                            USD
                                        </UiRadio>
                                        <UiRadio value={'UAH'}>
                                            UAH
                                        </UiRadio>
                                    </UiRadioGroup>
                                </div>
                            </div>
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--3 form__label">
                                    Сумма
                                </div>
                                <div className="layout__col layout__col--9">
                                    <UiRange
                                        min={1000}
                                        max={100000}
                                        step={100}
                                        preFix={calculator.currency === 'USD' && '$'}
                                        suFix={calculator.currency === 'UAH' && ' грн.'}
                                        value={calculator.sum}
                                        onChange={onChangeSum}
                                    />
                                </div>
                            </div>
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--3 form__label">
                                    Срок
                                </div>
                                <div className="layout__col layout__col--9">
                                    <UiRange
                                        min={3}
                                        max={36}
                                        step={1}
                                        suFix={' мес.'}
                                        value={calculator.period}
                                        onChange={onChangePeriod}
                                    />
                                </div>
                            </div>
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--5 form__label">
                                    Выплата процентов
                                </div>
                                <div className="layout__col layout__col--7">
                                    <UiRadioGroup
                                        name="currency"
                                        selectedValue={calculator.payment}
                                        onChange={onChangePayment}>
                                        <UiRadio value={'every_month'}>
                                            ежемесячно
                                        </UiRadio>
                                        <UiRadio value={'end_term'}>
                                            в конце срока
                                        </UiRadio>
                                    </UiRadioGroup>
                                </div>
                            </div>
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--5 form__label">
                                    Процентная ставка
                                </div>
                                <div className="layout__col layout__col--7">
                                    <div className="form__attention">{calculator.rate}%</div>
                                    <div className="form__hint">зависит от срока, валюты и формата выплаты процентов</div>
                                </div>
                            </div>
                            <hr />
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--12">
                                    <div className="form__attention">
                                        <strong>Ваш пассивный доход</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--5">
                                    <div className="form__attention">
                                        {calculator.currency === 'USD' && '$'}{calculator.income_end_term}{calculator.currency === 'UAH' && ' грн.'}
                                    </div>
                                    <div className="form__hint">за весь срок вложение</div>
                                </div>
                                <div className="layout__col layout__col--7">
                                    <div className="form__attention">
                                        {calculator.currency === 'USD' && '$'}{calculator.income_every_month}{calculator.currency === 'UAH' && ' грн.'}
                                    </div>
                                    <div className="form__hint">ежемесячно</div>
                                </div>
                            </div>
                            <div className="layout__row form__group">
                                <div className="layout__col layout__col--12">
                                    <SubmitButton className="button--block" primary={true} onClick={onSubmit}>
                                        Инвестировать
                                    </SubmitButton>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        );
    }
}

export default Form;
