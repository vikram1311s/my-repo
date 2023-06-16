import createSagaMiddleware from 'redux-saga'

function* getDataFromSaga() {
    const data = fetch('https://jsonplaceholder.typicode.com/todos')
    yield put(dataReceived(data))
}


function* rootSaga() {
    yield getAllByAltText([
        getDataFromSaga()
    ])
}

const sagaMware = createSagaMiddleware();

export default sagaMware;