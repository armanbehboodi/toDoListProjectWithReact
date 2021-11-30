import React, {useState,Fragment} from "react";
import TodoItem from "./TodoItem";
import styles from './Todo.module.css';

const Todo = (props) => {

    const filteredTasks = props.newTask.filter((task) => {
        return task.date === props.filterYear;
    })
    if (filteredTasks[0] === undefined){
        props.onCheckOffline(true);
        return (
                <p className={styles.para}>There is no task here yet to add a new task click  &nbsp;'Add new task'&nbsp; button</p>
        )
    }
    if (filteredTasks[0] !== undefined){
        props.onCheckOffline(false)
    }
    if (props.makeClear === true){
        for (let task of props.newTask){
            if (task.date === props.filterRemoveYear){
                props.newTask.splice(props.newTask.indexOf(task),1)
            }
        }
        props.onReset(false);
    }

    return (
        <Fragment>
            {filteredTasks.map((task) => (
                <TodoItem newTask={task.tasks} newDate={task.otherDate} key={task.id} newImportantValue={task.newImportantValue}/>
            ))}
        </Fragment>
    )

}
export default Todo;