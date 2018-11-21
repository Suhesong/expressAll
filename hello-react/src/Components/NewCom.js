import React, { Component } from 'react';


//打印users
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class Love extends Component {
    render() {
        return (
            <div>
                {users.map((user, i) =>
                    <User key={i} user={user} />
                )
                }
            </div>
        )
    }
}

class User extends Component {
    render() {
        const { user } = this.props
        return (
            <div >
                <div >姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别: {user.gender}</div>
                <hr></hr>
            </div>
        )

    }
}

//打印题目列表
const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

class Lesson extends Component {
    /* TODO */


    handleTitle() {
        console.log(this.props.index, this.props.lesson.title)
    }
    render() {
        const { lesson } = this.props;
        return (
            <div>
                <h1 onClick={this.handleTitle.bind(this)}>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}

class LessonsList extends Component {
    /* TODO */
    render() {
        return (
            <div>
                {lessons.map((lesson, i) => <Lesson key={i} index={i} lesson={lesson} />)}
            </div>
        )
    }
}

export default LessonsList
