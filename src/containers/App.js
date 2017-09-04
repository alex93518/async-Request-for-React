import React, { Component } from 'react'
import CounterContainer from './CounterContainer'
import * as posts from '../modules/post'

class App extends Component {
    componentDidMount() {
       posts.getPost(2);
    }

    render() {
        return (
            <div>
                <CounterContainer/>
            </div>
        );
    }
}

export default App;