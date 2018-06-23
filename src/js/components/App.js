import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            value: null,
            displayValue : "0",
            operand: false,
            operator: null
        }
    }
    clearAll(){
        this.setState({
            value: null, 
            displayValue : "0",
            operand:false,
            operator:null
        })
    }
    inputDigit(digit){
        const { displayValue, operand } = this.state
        if(operand){
            this.setState({
                displayValue: String(digit),
                operand:false
            })
        }
        else {
            this.setState({
                displayValue: displayValue === "0" ? String(digit) : displayValue + digit,
                operand:false
            })
        }
    }
    inputDot(){
        const { displayValue, operand } = this.state
        if(operand){
            this.setState({
                displayValue:'.',
                operand:false
            })
        }
        else if(displayValue.indexOf('.') === -1){
            this.setState({
                displayValue: displayValue + '.',
                operand:false
            })
            
        }
    }
    toggleMinus(){
        const { displayValue }  = this.state

        this.setState({
            displayValue : displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
        })
    }
    percentage(){
        const { displayValue }  = this.state
        let val = parseFloat(displayValue);

        this.setState({
            displayValue : String(val/100)
        })
    }
    delete(){
        const { displayValue, operator } = this.state
        if(!operator){
        this.setState({
           displayValue : displayValue.substr(0, displayValue.length-1)
        })
        }   
    }

    operations(nextOperator){
        const { displayValue, operator, value } = this.state
        const next = parseFloat(displayValue)
        const operations = {
            '/' : (prev, next) => prev / next,
            '*' : (prev, next) => prev * next,
            '-' : (prev, next) => prev - next,
            '+' : (prev, next) => prev + next,
            '=' : (prev, next) => prev
        }
        if(value == null){
            this.setState({
                value: next
            })
        }
        else if(operator){
            const currentValue = value || 0
            const newValue = operations[operator](currentValue, next)
            this.setState({
                value: newValue,
                displayValue: String(newValue)
            })
        }
        //const prev = ???
        
        
       // const Value = currentOperation[operator](prev,next)

    
        this.setState({
            operand : true,
            operator : nextOperator
        })
    }
    render() {
        return (
            <div id="Calculator">
                <div class="row justify-content-center">
               
                    <input id="result" value = { this.state.displayValue } disabled = "true" class="col-xl-3 col-md-6" />
                </div>
                <div class="row justify-content-center">
                    <div id="buttonContainer" class="col-xl-3 col-md-6">
                        <div class="row justify-content center">
                            <button onClick = {()=> this.clearAll()} class="numoperan col-3">AC</button>
                            <button onClick = {()=> this.toggleMinus()} class="numoperan col-3">±</button>
                            <button onClick = {()=> this.operations('*')} class="numoperan col-3">*</button>
                            <button onClick = {()=> this.operations('/')} class="numoperan col-3">/</button>
                        </div>
                        <div class="row justify-content center">
                            <button onClick = {()=> this.inputDigit(7)} class="numoperan col-3">7</button>
                            <button onClick = {()=> this.inputDigit(8)} class="numoperan col-3">8</button>
                            <button onClick = {()=> this.inputDigit(9)} class="numoperan col-3">9</button>
                            <button onClick = {()=> this.operations('-')} class="numoperan col-3">-</button>
                        </div>
                        <div class="row justify-content center">
                            <button onClick = {()=> this.inputDigit(4)} class="numoperan col-3">4</button>
                            <button onClick = {()=> this.inputDigit(5)} class="numoperan col-3">5</button>
                            <button onClick = {()=> this.inputDigit(6)} class="numoperan col-3">6</button>
                            <button onClick = {()=> this.operations('+')} class="numoperan col-3">+</button>
                        </div>
                        <div class="row justify-content center">
                            <button onClick = {()=> this.inputDigit(1)} class="numoperan col-3">1</button>
                            <button onClick = {()=> this.inputDigit(2)} class="numoperan col-3">2</button>
                            <button onClick = {()=> this.inputDigit(3)} class="numoperan col-3">3</button>
                            <button onClick = {()=> this.operations('=')} class="numoperan col-3">=</button>
                        </div>
                        <div class="row justify-content center">
                            <button onClick = {()=> this.inputDot()} class="numoperan col-3">.</button>
                            <button onClick = {()=> this.inputDigit(0)} class="numoperan col-3">0</button>
                            <button onClick = {()=> this.percentage()} class="numoperan col-3">%</button>
                            <button onClick = {()=>  this.delete()} class="numoperan col-3">del</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}