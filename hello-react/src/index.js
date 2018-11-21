import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import Dog from './Components/ComDog';
import Like from './Components/LikeButton';
import LessonsList from './Components/NewCom';
import PercentageApp from './Components/NewCom1';
import Index1 from './Components/NewCom2';
//import Index from './Components/index'
import './App.css'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
class Header extends Component {
    render () {
      const isGoodWord = true;
      const goodWord=<strong>is good</strong>
      const notGoodWord=<string>not a good</string>
      return (
        <div>
            <Title />
          <h1>en~ here are head
          </h1>
        </div>
      )
    }

  }

class Main extends Component{
  render(){
    const name = 'here are main'
    return (
      <div><h2>{name}</h2></div>
    )
  }
}

class Footer extends Component{
  render(){
    const name = 'this is Footer';
    return (
      <div><h1>{name}</h1></div>
    )
  }
}



class Title extends Component{
  handleClickOnTitle(e){
    console.log(e.target.innerHTML)
    console.log('on click me ...')
  }
  render(){
    return(
      <h1 onClick={this.handleClickOnTitle}>Recat Test</h1>
    )
  }
}

//标签可以传递参数，props
// class Index extends Component {
//   render(){
//     return(
//       <div>
//        <LikeButton  wordings={{likedText: '已赞', unlikedText: '赞'}} 
//         onClick={() => console.log('Click on like button!')} />
//       </div>
//     )
//   }
// }
  
// function renderContent(content){
//   ReactDOM.render(
//     <h1>{content}</h1>,
//     document.getElementById('root')
//   )
// }

// renderContent('Hello world')



class Layout extends Component {
  render () {
    return (
      <div className='two-cols-layout'>
        <div className='sidebar'>
          {this.props.children[0]}
        </div>
        <div className='main'>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}
class Card extends Component {
  render () {
    return (
      <div className='card'>
        {this.props.children.map((el,i)=>{
          return (
            <div key={i} className='black'>
              {el}
            </div>
          )
        })}
      </div>
    )
  }
}


//覆盖默认样式   这种的写法我想应该是工厂模式
const getDefaultStyledPost = (defaultStyle) => {
  return (
    class Post extends React.Component {
      render() {
        const style = {...defaultStyle, ...this.props.style}
        console.log(style)
        return (
          <p style={style}>dwdwd</p>
        )
      }
    }
  )
}
const Post = getDefaultStyledPost({ color: 'red' })


  ReactDOM.render(
    <Post style={{ color: 'blue', fontSize: '13px' }} />,
    document.getElementById('root')
  )
