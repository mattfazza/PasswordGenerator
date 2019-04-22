import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Generator extends React.Component {



    constructor(props) {

        super(props)

        this.handleCheckbox = this.handleCheckbox.bind(this)

        this.state = {
            checkboxGroup: {
                option1: false,
                option2: false,
                option3: false
            }
        }
    }

    handleCheckbox(event) {
        let obj = Object.assign(this.state.checkboxGroup)
        obj[event.target.value] = event.target.checked
        this.setState({ checkboxGroup: obj })
        console.log(this.state.checkboxGroup);

    }

    getLength(limit) {
        if (limit) {
            return Math.floor(Math.random() * 16) + 8
        } else {
            return Math.floor(Math.random() * 32) + 8
        }
    }

    render() {
        return (
            <div>
                Please, select what your password should look like, and click generate
                <form>
                    <input type="text"></input>
                    <Button color="fff" style={{ color: "black" }}>Generate</Button>{' '}
                    <p />
                    <input type="checkbox" name="checkboxGroup" value="option1" checked={this.state.checkboxGroup['option1']} onChange={this.handleCheckbox}></input>
                    Passoword must be between 8 and 16 characters
                <p />
                    <input type="checkbox" name="checkboxGroup" value="option2" checked={this.state.checkboxGroup['option2']} onChange={this.handleCheckbox}></input>
                    Password cannot include some special characters
                <p />
                    <input type="checkbox" name="checkboxGroup" value="option3" checked={this.state.checkboxGroup['option3']} onChange={this.handleCheckbox}></input>
                    Password must have at least one upper case and one number
                </form>
            </div>
        );
    }
}

export default Generator;


