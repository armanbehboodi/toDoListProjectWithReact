import React , {Fragment} from "react";
import styles from './TodoDate.module.css'

const TodoDate = (props) => {
    const userDate = new Date(props.receivedDate);
    const year = userDate.getFullYear();
    const monthIndex = userDate.getMonth();
    const day = userDate.getDate();
    let month = '';

    switch (monthIndex){
        case 0:month = 'Jan';break;
        case 1:month = 'Feb';break;
        case 2:month = 'Mar';break;
        case 3:month = 'Apr';break;
        case 4:month = 'May';break;
        case 5:month = 'Jun';break;
        case 6:month = 'Jul';break;
        case 7:month = 'Aug';break;
        case 8:month = 'Sep';break;
        case 9:month = 'Oct';break;
        case 10:month = 'Nov';break;
        case 11:month = 'Dec';break;
    }

    return (
        <Fragment>
            <div className={styles.box}>
                <p className={styles.yearStyle}>{year}</p>
                <p>{day}</p>
                <p>{month}</p>
            </div>
        </Fragment>
    )
}

export default TodoDate;