import React, {useState,Fragment} from "react";
import Todo from "../components/Todo";
import TodoNavbar from "../components/TodoNavbar";
import AddNewTodo from "../components/AddNewTodo";
import OfflineTodo from "../components/OfflineTodo";
import ModalTodo from "../components/ModalTodo";

const App = () => {

  const DUMMY_DATA = [];
  const [data,setData] = useState(DUMMY_DATA);
  const [clear,setClear] = useState(false);
  const [date,setDate] = useState('');
  const [filteredYear,setFilteredYear] = useState(2021);
  const [offline,setOffline] = useState(false);
  const [removeYear,setRemoveYear] = useState(1999);
  const [modalHandler,setModalHandler] = useState(false);

  const receiveData = (e) => {
      setData((prevData) => {
          return [e,...prevData];
      });
  }
  const clearAll = (e) => {
      setClear(e);
  }
  const reset = (e) => {
      setClear(e);
  }
  const getDate = (NewDate) => {
      setDate(NewDate);
  }
  const filterYear = (e) => {
      setFilteredYear(e);
  }
  const checkOffline = (e) => {
      setOffline(e);
  }
  const passYear = (e) => {
      setRemoveYear(e);
  }
  const modalShow = (e) => {
      setModalHandler(e);
  }
  const removeModal = (e) => {
      setModalHandler(e);
  }
  if (data[0] === undefined){
      localStorage.clear();
  }

  return (
    <Fragment>
        <TodoNavbar onFilterYear={filterYear}/>
        <Todo newTask={data} makeClear={clear} onReset={reset} filterYear={filteredYear} onCheckOffline={checkOffline} filterRemoveYear={removeYear}/>
        <AddNewTodo onReceiveData={receiveData} onClearAll={clearAll} onGetDate={getDate} thisYear={filteredYear} onPassYear={passYear} onModal={modalShow}/>
        <OfflineTodo checkMe={offline} />
        <ModalTodo showOrHide={modalHandler} onRemoveModal={removeModal} />
    </Fragment>
  );
}

export default App;
