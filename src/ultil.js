import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class App extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.doSomething = this.doSomething.bind(this);
    }

    doSomething() {
        console.log(1)
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

