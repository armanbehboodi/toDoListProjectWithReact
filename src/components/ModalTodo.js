import React , {Fragment} from "react";
import ReactDOM from 'react-dom';
import styles from './ModalTodo.module.css'


const ModalOverlay = (props) => {

    const removeModalHandler = () => {
        props.onRemoveModal(false);
    }

    return (
        <div className={`${styles.mainBox} ${props.showOrHide && styles.show}`}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <p className={styles.modalHeaderTxt}>Something went wrong!</p>
                </div>
                <p className={styles.text}>please type some thing in that input and set a Date for that</p>
                <button className={styles.button} onClick={removeModalHandler}>Okay</button>
            </div>
        </div>
    )
}

const ModalTodo = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay onRemoveModal={props.onRemoveModal} showOrHide={props.showOrHide}/>,document.getElementById('ModalOverlay__root'))}
        </Fragment>
    )
}

export default ModalTodo;