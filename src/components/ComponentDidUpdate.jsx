import { Component } from 'react'

export default class ComponentDidUpdate extends Component {

    constructor() {
        super();
        this.state = { counter: 0 };
    }
    componentDidUpdate(pP, pS, sS) {
        console.log("Component was updated", pS);
    }
    render() {
        return (
            <div>
                <h1> Couter : {this.state.counter}</h1>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click me to  update the count</button>
            </div >
        )
    }
}
