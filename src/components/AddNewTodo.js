import React , {useState,Fragment} from "react";
import styles from './AddNewTodo.module.css';

const AddNewTodo = (props) => {

    const [newTask,setNewTask] = useState('');
    const [taskDate,setTaskDate] = useState(2020);
    const [otherDate,setOtherDate] = useState('');
    const [isEditing,setIsEditing] = useState(false);

    const data = {
        tasks:newTask,
        date:taskDate,
        otherDate:otherDate,
        id:Math.random().toString(),
        newImportantValue: newTask + otherDate
    }
    const inputHandler = (e) => {
        setNewTask(e.target.value);
    }
    const saveNewTask = () => {
        if (newTask.trim() !== '' && taskDate !== 2020){
            props.onReceiveData(data);
            setNewTask('')
        } else if (newTask.trim() === '' || taskDate === 2020){
            props.onModal(true);
        }
    }
    const cancelHandler = () => {
        setIsEditing(false)
    }
    const editHandler = () => {
        setIsEditing(true);
    }
    const clearAllHandler = () => {
        props.onClearAll(true);
        props.onPassYear(props.thisYear)
        setNewTask('');
    }
    const pickDateHandler = (e) => {
        setTaskDate(new Date(e.target.value).getFullYear())
        setOtherDate(e.target.value);
        props.onGetDate(e.target.value);
    }
    const checkEnter = (e) => {
        if (e.keyCode === 13){
            if (newTask !== '' && taskDate !== 2020){
                props.onReceiveData(data);
                setNewTask('')
            }
        }
    }


    if (isEditing === false){
        return (
            <div className={styles.parentBox}>
                <button className={`${styles.AddBtn} ${styles.btn} ${styles.newBtn}`} onClick={editHandler}>Add new task</button>
            </div>
        )
    }
    return (
        <Fragment>
            <input value={newTask} className={styles.input}  type='text' onChange={inputHandler} onKeyUp={checkEnter} placeholder='type some thing that you have to do...'/>
            <input className={styles.dateInput} type='date' min='2021-01-01' max='2025-12-31' onChange={pickDateHandler}/>
            <button className={`${styles.AddBtn} ${styles.btn}`} onClick={saveNewTask}>Add task</button>
            <button className={`${styles.btn} ${styles.CancelBtn}`} onClick={cancelHandler}>Cancel</button>
            <button className={`${styles.btn} ${styles.CancelBtn}`} onClick={clearAllHandler}>Clear all</button>
        </Fragment>
    )
}
export default AddNewTodo;