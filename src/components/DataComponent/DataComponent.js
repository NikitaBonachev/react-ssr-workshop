import * as React from 'react';
import {connect} from 'react-redux';

const stateToProps = (state) => ({
    user: state.user
});

const DataComponent = ({user}) => {
    return (
        <section className="section">
            <h1 className="section__title">Hello, {user}!</h1>
        </section>
    );
};

export const DataComponentConnected = connect(stateToProps)(
    ({user}) => <DataComponent user={user}/>
);
