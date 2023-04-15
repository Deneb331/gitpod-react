import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps)=> {
            console.log("Previous state: " + prevState)
            console.log("Previous props: " + prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    incrementClick() {
        this.setState((prevState, prevProps)=>{
            console.log("Previous state: " + prevState)
            console.log("Previos props: " + prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <button onClick={() => this.incrementClick()}>
                    Increment
                </button>
                <p>You've clicked the increment button {this.state.count} times</p>
            </div>
        ) 
    }
}

export default StatefulGreeting;