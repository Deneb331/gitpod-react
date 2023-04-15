import React from "react";

class EventBinding extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
        //Best way of binding for performance
        //this.handleClick = this.handleClick.bind(this)
    }

//    handleClick() {
//        this.setState((prevState, prevProps)=> {
//            console.log("Previous state: " + prevState)
//            console.log("Previous props: " + prevProps)
//            return {
//                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
//                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
//            }
//        })
//    }

    //Binding by defining the handler as an arrow function
    handleClick = () => {
        this.setState((prevState, prevProps)=> {
            console.log("Previous state: " + prevState)
            console.log("Previous props: " + prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }
    
    render() {
        return(
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                {/*<button onClick={() => this.handleClick()}>*/}
                {/*<button onClick={this.handleClick.bind(this)}>*/}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        ) 
    }
}

export default EventBinding;