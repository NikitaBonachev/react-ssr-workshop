import * as React from 'react';

import {StaticHelloWorld} from 'components/StaticHelloWorld/StaticHelloWorld';
import {DynamicCounterExample} from 'components/DynamicCounterExample/DynamicCounterExample';
import {DataComponentConnected} from './components/DataComponent/DataComponent';

import './app.css';

export function render() {
    return <StaticHelloWorld />
    // return <DynamicCounterExample />
    // return <DataComponentConnected />
}
