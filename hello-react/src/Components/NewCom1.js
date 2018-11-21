import React,{Component} from 'react'

//输入数字，转成百分号形式
class Input extends Component {
    constructor(){
        super()
        this.state={
            number:''
        }
    }
    handleNumber(e){
        if(this.props.onSubmit){
            this.props.onSubmit(e.target.value)
        }
        this.setState({
            number:e.target.value
        })
    }
    render () {
      return (
        <div>
          <input type='number' value={this.state.number} onChange={this.handleNumber.bind(this)} />
        </div>
      )
    }
  }
  
  class PercentageShower extends Component {
    render () {
      return (
        <div>{this.props.number}</div>
      )
    }
  }
  
  class PercentageApp extends Component {
      constructor(){
          super()
          this.state={
              number:''
          }
      }
      onSubmit(number){
          number='%'+parseFloat(number)*100
          this.setState({
              number:number
          })
      }
    render () {
      return (
        <div>
            <Input onSubmit={this.onSubmit.bind(this)} />
            <PercentageShower number={this.state.number}/>
        </div>
      )
    }
  }

  export default PercentageApp