import React ,{Component}from 'react';


class Dog extends Component{
    constructor(){
        super()
        this.state={
            isRunning:false,
            isBarking:false
        }
    }
    bark(){
        console.log('bark')
    }
    run(){
        console.log('run')
    }

    doSome(){        
        this.setState({
            isRunning:!this.state.isRunning,
            isBarking:!this.state.isBarking
        })
        if(this.state.isRunning){
            this.run()
        }
        if(this.state.isBarking){
            this.bark()
        }
    }

    render(){
        return(
            <div>
                <h1 onClick={()=>this.doSome()}>Dog</h1>
            </div>
        )
    }
}

export default Dog;