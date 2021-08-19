import {all} from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() { // generator"function*" mesmo que async
  yield all([
    cart,
  ]) // "yield" mesmo que await
} 