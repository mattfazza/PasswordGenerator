import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Generator extends React.Component {


    // var upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
    // var lower = "qwertyuiopasdfghjklzxcvbnm"
    // var combined = ''

    constructor(props) {


        super(props)

        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.generate = this.generate.bind(this)
        this.numbers = "0123456789"
        this.specials = "!@#$%^&*()_+=-{}|\][:?><,."
        this.upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
        this.lower = "qwertyuiopasdfghjklzxcvbnm"


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
    }

    //TODO handle input box

    getLength() {
        if (this.state.checkboxGroup.option1 == true) {
            return Math.floor(Math.random() * 16) + 8
        } else {
            return Math.floor(Math.random() * 32) + 8
        }
    }

    generate(e) {
        e.preventDefault()
        var combined = ''

        if (!this.state.checkboxGroup["option2"] && !this.state.checkboxGroup["option3"]) {
            combined = this.numbers + this.lower + this.specials
        } else if (!this.state.checkboxGroup["option2"] && this.state.checkboxGroup["option3"]) {
            combined = this.numbers + this.lower + this.upper + this.specials
        } else {
            combined = this.numbers + this.lower + this.upper
        }

        let realLength = this.getLength()
        console.log(realLength);

        let shuffled = combined.split('').sort(function () { return 0.5 - Math.random() }).join('')
        let password = shuffled.substr(0, realLength)

        document.getElementById("theInput").value = password;

    }


    render() {
        return (
            <div>
                Please, select what your password should look like, and click generate
                <form>
                    <input type="text" id="theInput"></input>
                    <Button color="fff" style={{ color: "rgb(216, 214, 99)", fontWeight: "normal" }} onClick={this.generate}>Generate</Button>
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


