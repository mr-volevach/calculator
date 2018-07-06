import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    Link
} from 'react-router-dom';

class Complete extends Component {
    render() {
        const {
            calculator
        } = this.props;

        return (
            <div className="layout">
                <div className="layout__row">
                    <div className="layout__col layout__col--12">
                        <h1>Информация по вкладу</h1>
                        <table cellPadding={0} cellSpacing={0} style={{width: 320}}>
                            <tbody>
                                <tr>
                                    <th>Сумма вклада</th>
                                    <td>{calculator.sum}</td>
                                </tr>
                                <tr>
                                    <th>Период вклада</th>
                                    <td>{calculator.period}</td>
                                </tr>
                                <tr>
                                    <th>Валюта вклада</th>
                                    <td>{calculator.currency}</td>
                                </tr>
                                <tr>
                                    <th>Периодичность выплат</th>
                                    <td>{calculator.payment === 'end_term' ? 'в конце срока' : 'ежемесячно'}</td>
                                </tr>
                                <tr>
                                    <th>Ставка</th>
                                    <td>{calculator.rate}%</td>
                                </tr>
                                <tr>
                                    <th>Доход ежемесячно</th>
                                    <td>
                                        {calculator.currency === 'USD' && '$'}{calculator.income_every_month}{calculator.currency === 'UAH' && ' грн.'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Доход в конце срока</th>
                                    <td>
                                        {calculator.currency === 'USD' && '$'}{calculator.income_end_term}{calculator.currency === 'UAH' && ' грн.'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="layout__row" style={{marginTop: 20}}>
                    <div className="layout__col layout__col--12">
                        <Link to="/" className="button">
                            Назад
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        calculator: state.calculator.props
    };
})(Complete);
