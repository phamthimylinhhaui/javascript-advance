// my redux
function createStore(reducer) {
    let state = reducer(undefined, {});
    const subs = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            // console.log(action); action o day chinh la actionDeposit hay actionWithdraw
            state = reducer(state, action)
            // state change => thuc hien thuc thi thong bao den nhung sub
            subs.forEach(sub => sub())
        },
        subscribe(subscriber) {
            // nhieu subscribe deu dc thong bao, deu duoc thuc hien
            subs.push(subscriber)
        }
    }
}

// my app
const initialState = 0;
function bankReducer(state = initialState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAWER':
            return state - action.payload;
        default: return state;
    }
}

// create store
const store = window.store = createStore(bankReducer);

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