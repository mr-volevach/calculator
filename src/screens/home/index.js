import { connect } from 'react-redux';
import Form from './Form';
import {
    changeSum,
    changePayment,
    changePeriod,
    changeCurrency,
    fetchRates,
    saveToStore
} from '../../actions/calculator';

const mapStateToProps = (state) => {
    return {
        calculator: state.calculator.props,
        isLoading: state.calculator.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSum: (sum) => dispatch(changeSum(sum)),
        onChangePeriod: (period) => dispatch(changePeriod(period)),
        onChangePayment: (payment) => dispatch(changePayment(payment)),
        onChangeCurrency: (currency) => dispatch(changeCurrency(currency)),
        onSubmit: () => dispatch(saveToStore()),
        fetchData: () => dispatch(fetchRates())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
