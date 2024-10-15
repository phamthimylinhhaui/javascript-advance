// Overview
//
import { createStore } from 'https://cdn.skypack.dev/redux';

// reducer
const initialState = 0;
function reducer(state = 0, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAWER':
            return state - action.payload;
        default: return state;
    }
}

// create store
const store = window.store = createStore(reducer);

// action
function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: 'WITHDRAWER',
        payload
    }
}

// dom event
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');

deposit.onclick = function () {
    store.dispatch(actionDeposit(10))
}
withdraw.onclick = function () {
    store.dispatch(actionWithdraw(10))
}

// listener
store.subscribe(() => {
    render();
})

function render() {
    const output = document.getElementById('output');
    output.innerText = store.getState();
}

render();
