import { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount() {
        console.log('component will unmount')
    }
    render() {
        return (
            <div>
                <h2>Child Component</h2>
            </div>
        )
    }
}
