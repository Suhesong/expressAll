import React,{Component} from 'react'


//组件点赞LikeButton
class LikeButton extends Component {
    constructor(){
        super()
        this.state = { 
            isLiked:false,
            name:'Tony',
            num:0,
            likedText: '取消',
            count:0
        }
    }
    //添加默认属性的值
    //默认属性不可显性修改
    static defaultProps = {
        
        unlikedText: '点赞'
      }
    
    handleClickOnLikeButton(){
        this.setState({
            isLiked:!this.state.isLiked,
            likedText:'哈哈'
        })
        if (this.props.onClick) {
                this.props.onClick()
          }
    }
    render(){
        //接受传递的属性
        // const wordings = this.props.wordings || {
        //     likedText: '取消',
        //     unlikedText: '点赞'
        //   }
        return(
            <div>
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
            {this.state.isLiked?this.state.likedText:this.props.unlikedText}👍
            </button>
            <h1>{this.state.name}</h1>
            </div>
        )
    }
}


//组件电脑和屏幕，进行电脑开关
class Computer extends Component{
    constructor(){
        super()
        this.state={
            status:'off',
            showContent:''
        }
    }
    handleScreen(){
        if(this.state.status==='off'){
            this.setState({
                status:'on',
                showContent:'显示器亮了'
            })
        }else{
            this.setState({
                status:'off',
                showContent:'显示器灭了'
            })
        }
        

    }
    render(){
        return (
            <div>
                <button onClick={this.handleScreen.bind(this)}>开关</button>
                <Screen showContent={this.state.showContent}></Screen>
            </div>
        )
    }
}

class Screen extends Component{
    render(){
        const showContent = this.props.showContent||'无内容'
        return (
            <div className='screen'>{showContent}</div>
        )
    }
}


//组件Like，进行对外传递组件
class Like extends Component{
    render(){
        return (
            <div>
                <Computer></Computer>
            </div>
        )
    }
}

export default Like