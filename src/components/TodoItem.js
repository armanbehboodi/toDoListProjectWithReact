import React , {useState,useEffect,Fragment} from "react";
import styles from './TodoItem.module.css';
import TodoDate from "./TodoDate";

const TodoItem = (props) => {

    const [newStyle,setNewStyle] = useState(!!localStorage.getItem(props.newImportantValue))
    const checkBoxHandler = (e) => {
        if (e.target.checked === true) {
            localStorage.setItem(props.newImportantValue,'true')
            setNewStyle(!!localStorage.getItem(props.newImportantValue))
        }else {
            localStorage.removeItem(props.newImportantValue)
            setNewStyle(!!localStorage.getItem(props.newImportantValue))
        }
    };


    return (
        <Fragment>
            <div  className={styles.box}>
                <div className={styles.parentBox}>
                    <input className={`${styles.checkBox} ${newStyle && styles.newChecked}`} type='checkBox' onClick={checkBoxHandler} />
                    <p className={`${styles.text} ${newStyle && styles.line}`}>{props.newTask}</p>
                    <TodoDate receivedDate={props.newDate}/>
                </div>
            </div>
        </Fragment>
    )
};

export default TodoItem;