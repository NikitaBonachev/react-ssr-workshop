import * as React from 'react';

// Именно default!
export default class SecondComponent extends React.Component {
    render() {
        return (
            <div className="section">
                <h2 className="section__title">Новый компонент загрузился из сети!</h2>
            </div>
        )
    }
}
