import React , {Fragment} from "react";
import steve from '../images/steve.png'
import styles from './OfflineTodo.module.css';

const OfflineTodo = (props) => {
    return (
        <Fragment>
            <div className={`${styles.mainBox} ${!props.checkMe && styles.visible}`}>
                <img className={styles.steve} src={steve} alt='404Error'/>
                <p className={styles.para}>Oops! there is NO task</p>
            </div>
        </Fragment>
    )
}

export default OfflineTodo;