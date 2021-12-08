import React, { Component } from 'react';

export default class AddEventsClass extends Component {
    shoot() {
        alert("Class Component Shot!");
    }

    render(){
        return (
            <div>
                <button onClick={this.shoot}>Take the class shot!</button>
            </div>
        );
    }
}