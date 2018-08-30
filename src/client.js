import * as React from 'react';

import {render} from 'app';
import {reducer} from 'reducer';
import {createStore} from 'redux';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {clientRestoreData} from 'data/clientRestoreData';

/**
 * START WITHOUT STORE
 **/
function start() {
    hydrate(
        render(),
        document.getElementById('root')
    );
}
start();


/**
* START WITH STORE
**/
//
// function start(state) {
//     hydrate(
//         <Provider store={state}>
//             {render()}
//         </Provider>,
//         document.getElementById('root')
//     );
// }
//
// let store = createStore(
//    reducer,
//    clientRestoreData()
// );
//
// start(store);
