import * as React from 'react';
import {LoadableSecondComponent} from "./LoadableSecondComponent";

export class DynamicComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSecondComponentVisible: false
        };

        this.showSecondComponent = this.showSecondComponent.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseOver() {
        LoadableSecondComponent.preload();
    };

    showSecondComponent() {
        this.setState({isSecondComponentVisible: true});
    }

    render() {
        return (
            <div className="section">
                {
                    this.state.isSecondComponentVisible ?
                        <LoadableSecondComponent/> :
                        <button className="section__title" onClick={this.showSecondComponent}>Загрузить</button>
                }
            </div>
        )
    }
}
