import React, { Component } from 'react';
import axios from 'axios';
import './playground.css';

export default class PlayGround extends Component {

    state = {
        question : "",
        options : [],
        answer: "",
        score: 0,
        level: 1
    }

    componentWillMount() {
        this.fetchLevel();
    }

    fetchLevel = () => {
        axios.get(`http://localhost:3000/l${this.state.level}`)
        .then((response)=>{
            this.setState({
                question: response.data.q,
                options: response.data.o,
                answer: response.data.a
            });
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    handleClick = (e) => {
        const selectedAnswer = e.target.innerText;

        if(selectedAnswer) {
            
            this.setState({
                level: this.state.level + 1
            })

            if(selectedAnswer === this.state.answer) {
                this.setState({
                    score: this.state.score + 1
                })
            }
            setTimeout(() => {
                this.fetchLevel();
            }, 1000);
        }
    }
    
    
    render() {
        return (
            <div className="playground">
                <div className="question">{this.state.question}</div>

                <div className="options">
                    <div onClick={this.handleClick} className="choose">{this.state.options[0]}</div>
                    <div onClick={this.handleClick} className="choose">{this.state.options[1]}</div>
                    <div onClick={this.handleClick} className="choose">{this.state.options[2]}</div>
                    <div onClick={this.handleClick} className="choose">{this.state.options[3]}</div>
                </div>

                <div className="score">
                   Score: {this.state.score}
                </div>
            </div>
        )
    }
}
