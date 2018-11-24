import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const appState={
    title:{
        text:'React.js 小书',
        color:'red'
    },
    content:{
        text:'React.js 小书内容',
        color:'blue'
    }
}

function renderApp(appState){
    renderTitle(appState.title)
    renderContent(appState.content)
}
function renderTitle(title){
    const titleDOM=document.getElementById('title')
    titleDOM.innerHTML=title.text
    titleDOM.style.color=title.color
}
function renderContent(content){
    const contentDOM=document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}
function createStore(state,stateChanger){
    const getState=()=>state
    const dispatch=(action)=>stateChanger(state,action)
    return {getState , dispatch }
}
function stateChanger(state,action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
        state.title.text = action.text
        break
        case 'UPDATE_TITLE_COLOR':
        state.title.color = action.color
        default:
        break
    }
}

renderApp(appState)
const store = createStore(appState , stateChanger);
store.dispatch({type:'UPDATE_TITLE_TEXT',text:"123react 小书"})
renderApp(appState)