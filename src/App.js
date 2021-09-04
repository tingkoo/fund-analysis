import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let url = 'http://localhost:3000/fund/1';
        axios
            .get(url)
            .then(res => {
                let data = res.data;
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Test API</button>
            </div>
        );
    }
}

// function App() {
//     return (

//     );
// }

export default App;
