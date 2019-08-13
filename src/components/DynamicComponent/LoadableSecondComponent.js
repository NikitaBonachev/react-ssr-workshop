import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadableSecondComponent = Loadable({
    loader: () => import('./SecondComponent'),
    loading: (props) => {
        if (props.error) {
            return <div>Error! <button onClick={props.retry}>Retry</button></div>;
        } else {
            return <div>Loading...</div>;
        }
    }
});
