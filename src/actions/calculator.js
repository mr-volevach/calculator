export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_SUM = 'SET_SUM';
export const SET_PERIOD = 'SET_PERIOD';
export const SET_PAYMENT = 'SET_PAYMENT';
export const FIND_RATE = 'FIND_RATE';
export const REQUEST_RATES = 'REQUEST_RATES';
export const RECEIVE_RATES = 'RECEIVE_RATES';
export const CATCH_ERROR_RAQUEST_RATES = 'CATCH_ERROR_RAQUEST_RATES';
export const CALCULATE_INCOME_END_TERM = 'CALCULATE_INCOME_END_TERM';
export const CALCULATE_INCOME_EVERY_MONTH = 'CALCULATE_INCOME_EVERY_MONTH';
export const SAVE_TO_STORE = 'SAVE_TO_STORE';

export function calculateIncomeEndTerm() {
    return {
        type: CALCULATE_INCOME_END_TERM
    };
}

export function saveToStore() {
    return {
        type: SAVE_TO_STORE
    };
}

export function calculateIncomeEveryMonth() {
    return {
        type: CALCULATE_INCOME_EVERY_MONTH
    };
}

export function setCurrency(currency) {
    return {
        type: SET_CURRENCY,
        currency
    };
}

export function setSum(sum) {
    return {
        type: SET_SUM,
        sum
    };
}

export function setPeriod(period) {
    return {
        type: SET_PERIOD,
        period
    };
}

export function setPayment(payment) {
    return {
        type: SET_PAYMENT,
        payment
    };
}

export function findRate() {
    return {
        type: FIND_RATE
    };
}

export function calculate() {
    return function (dispatch) {
        dispatch(findRate());
        dispatch(calculateIncomeEndTerm());
        dispatch(calculateIncomeEveryMonth());
    }
}

export function changeCurrency(currency) {
    return function (dispatch) {
        dispatch(setCurrency(currency));
        dispatch(calculate());
    }
}

export function changeSum(sum) {
    return function (dispatch) {
        dispatch(setSum(sum));
        dispatch(calculate());
    }
}

export function changePeriod(period) {
    return function (dispatch) {
        dispatch(setPeriod(period));
        dispatch(calculate());
    }
}

export function changePayment(payment) {
    return function (dispatch) {
        dispatch(setPayment(payment));
        dispatch(calculate());
    }
}

export function requestRates() {
    return {
        type: REQUEST_RATES
    };
}

export function didErrorRequestRates(error) {
    return {
        type: CATCH_ERROR_RAQUEST_RATES,
        error
    };
}


export function receiveRates(json) {
    return {
        type: RECEIVE_RATES,
        rates: json
    };
}

export function fetchRates() {
    return function (dispatch) {
        dispatch(requestRates());

        return fetch(`/calculator/rates.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveRates(json)))
            .then(() => dispatch(findRate()))
            .then(() => dispatch(calculate()))
            .catch(err => dispatch(didErrorRequestRates(err)));
    }
}