import { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    constructor() {
        super();
        console.log("invoke from  constructor");
        this.state = { data: false };
    }

    componentDidMount() {

        console.log("invoke from  componentDidMount")
        // this.setState({ data: "true" });
    }



    render() {
        console.log('invoke  from render');
        return (
            <div>
                <h1>ReactLifeCycle</h1>
                {this.state.data ? <Child /> : null}
                <button onClick={() => this.setState({ data: !this.state.data })}>click me!</button>
            </div >
        )
    }
}
