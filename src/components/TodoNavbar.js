import React , {useState,Fragment} from "react";
import styles from './TodoNavbar.module.css';
import burgerButton from '../images/burgerMenu.png';
import crossMark from '../images/crossMark.png';
import logo from '../images/logo.png'

const TodoNavbar = (props) => {

    const [datePicker,setDatePicker] = useState(false)
    const showDatePicker = () => {
        setDatePicker(true);
    }
    const hideDatePicker = () => {
        setDatePicker(false);
    }
    const filterYearHandler = (e) => {
        props.onFilterYear(new Date(e.target.value).getFullYear())
    }

    if (datePicker === true){
        return (
            <div className={styles.nav}>
                <img alt='image' src={crossMark} width="30" height="30" onClick={hideDatePicker}/>
                <p className={styles.para} style={{marginRight:0}}>Choose a date</p>
                <input className={styles.date} type='date' min='2021-01-01' max='2025-12-31' onChange={filterYearHandler}/>
                <img alt='logo' src={logo} className={styles.logo}/>
            </div>
        )
    }
    return (
        <Fragment>
            <div className={styles.nav}>
                <img alt='image' src={burgerButton} width="30" height="30" onClick={showDatePicker}/>
                <p className={styles.para}>Quick find</p>
                <img alt='logo' src={logo} className={styles.logo}/>
            </div>
        </Fragment>
    )
}
export default TodoNavbar;