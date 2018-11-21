import React ,{Component}from 'react';
import ReactDOM from 'react-dom';

class House extends Component{
    render(){
        const house = "a big house "
        return (
            <div>
                <h1>{house}</h1>
                <Room />
            </div>
        )
    }
}

class Room extends Component {
    render(){
        const room = "i am in house"
        return (
            <div>
                <h1>{room}</h1>
                <Bathroom></Bathroom>
            </div>
        )
    }
}

class Bathroom extends Component{
    render (){
        const bathroom="a room has a bashroom"
        return (
            <div>
                <h1>{bathroom}</h1>
            </div>
        )
    }       
}

class Man extends Component{
    render(){
        const man="I am man , I am Strong,I have a dog"
        return (
            <div>
                <h1>{man}</h1>
                <Dog></Dog>
            </div>
        )
    }
}

class Dog extends Component{
    render(){
        const dog="I am a dog ,my name is wangcai"
        return (
            <div>
                <h1>{dog}</h1>
            </div>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <Man></Man>
                <House></House>
            </div>
        )
    }
}

export default Index