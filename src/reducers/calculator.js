import {
    SET_CURRENCY,
    SET_PAYMENT,
    SET_PERIOD,
    SET_SUM,
    REQUEST_RATES,
    RECEIVE_RATES,
    CATCH_ERROR_RAQUEST_RATES, FIND_RATE,
    CALCULATE_INCOME_END_TERM,
    CALCULATE_INCOME_EVERY_MONTH,
    SAVE_TO_STORE
} from '../actions/calculator';

const store = window.localStorage;
const props = store.getItem('store') ? JSON.parse(store.getItem('store')) : {
    sum: 1500,
    period: 3,
    currency: 'USD',
    payment: 'every_month',
    rate: null,
    income_every_month: null,
    income_end_term: null
};

const initialState = {
    props,
    rates: [],
    isLoading: false,
    isError: false,
    error: null
};

function calculator(state = initialState, action) {
    switch (action.type) {
        case REQUEST_RATES:
            return {
                ...state,
                isLoading: true
            };

        case RECEIVE_RATES:
            return {
                ...state,
                isLoading: false,
                rates: action.rates
            };

        case CATCH_ERROR_RAQUEST_RATES:
            return {
                ...state,
                isError: true,
                isLoading: false,
                error: action.error
            };

        case SET_CURRENCY:
            return {
                ...state,
                props: {
                    ...state.props,
                    currency: action.currency
                }
            };

        case SET_PAYMENT:
            return {
                ...state,
                props: {
                    ...state.props,
                    payment: action.payment
                }
            };

        case SET_PERIOD:
            return {
                ...state,
                props: {
                    ...state.props,
                    period: action.period
                }
            };

        case SET_SUM:
            return {
                ...state,
                props: {
                    ...state.props,
                    sum: action.sum
                }
            };

        case FIND_RATE:
            const {rates, props} = state;
            const obj = rates.find(item => {
                return item.from <= props.period &&
                       item.to >= props.period &&
                       item.payment === props.payment &&
                       item.currency === props.currency;
            });

            return {
                ...state,
                props: {
                    ...props,
                    rate: obj ? obj.rate : null
                }
            };

        case CALCULATE_INCOME_END_TERM:
            const income_end_term = Math.ceil(state.props.sum * ((state.props.rate /100) / 12) * state.props.period);
            return {
                ...state,
                props: {
                    ...state.props,
                    income_end_term
                }
            };

        case CALCULATE_INCOME_EVERY_MONTH:
            const income_every_month = Math.ceil(state.props.sum * ((state.props.rate /100) / 12));
            return {
                ...state,
                props: {
                    ...state.props,
                    income_every_month
                }
            };

        case SAVE_TO_STORE:
            store.setItem('store', JSON.stringify({
                ...state.props
            }));
            return state;

        default:
            return state;
    }
}

export default calculator;
