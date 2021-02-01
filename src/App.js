import React,{Component} from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

export default class App extends Component{
    state = {tasks:[
        {id:'001',name:'read',done:false},
        {id:'002',name:'sleep',done:true},
        {id:'003',name:'lunch',done:true}
      ]}
    addTask = (task)=>{
        let {tasks} = this.state
        this.setState({tasks:[task,...tasks]})
    }
    taskChange = (id,done) =>{
        let {tasks} = this.state
        let newTasks = tasks.map((task) =>{
            if(task.id === id) return {...task,done}
            else return task
        })
        this.setState({tasks:newTasks})
    }

    taskDel = (id) =>{
        let {tasks} = this.state
        let newtasks = tasks.filter((task) =>{
            return task.id !== id
        })
        this.setState({tasks:newtasks})
    }

    taskCheck = (flag) =>{
        let {tasks} = this.state
        let newtasks
        if(flag === 1){
            newtasks = tasks.map((task) =>{
                return {...task,done:true}
            })
        }else {
            newtasks = tasks.map((task) =>{
                return {...task,done:false}
            })
        }
        console.log(newtasks)
        this.setState({tasks:newtasks})
        
    }
    render() {
        return (
            <div>
                <Header addTask={this.addTask}/>
                <List tasks={this.state.tasks} taskChange={this.taskChange} taskDel={this.taskDel}></List>
                <Footer allTaskNum={this.state.tasks.length} checkTaskNum={1} taskCheck={this.taskCheck}></Footer>
            </div>
        )
    }
}
