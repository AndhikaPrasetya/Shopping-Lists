import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Container from "./component/Container/Index";
import SearchInput from "./component/SearchInput/Index";
import Info from "./component/Info/Index";
import Todos from "./component/Todos/Index";
import Empty from "./component/Empty/Index";
// import classNames from classNames

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "susu ultra", count: 1 },
    { title: "Tahu sumedang", count: 1 },
    { title: "pasta gigi", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Input tidak boleh kosong");
      return; // Hentikan fungsi handleSubmit jika input kosong
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];
    setTodos(addedTodos);
// agar ketika telah berhasil menambahkan input kolom isi menjadi kosong
    setValue("");
  };

  const handleCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];
    //selama jumlah count masih diatas 0 bisa lakukan pengurangan : kalo udah 0 dan masih dikurangi hapus array value dengan index yang sesuai dengan array.splice
if(newTodos[index].count > 0){
  newTodos[index].count = newTodos[index].count -1
} else { 
  newTodos.splice(index, 1)
}
    setTodos(newTodos);
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCounts;
  };

  

  return (
    <div>
     <Navbar />
     
      <Container>

       <SearchInput 
       onSubmit = {handleSubmit}
       value = {value}
       onChange= {(e)=>{
        setValue(e.target.value)
       }}
       />

        <Info
        todos = {todos.length}
        getTotalCounts = {getTotalCounts()}
        onClick = {() => {
          setTodos([])}}
        />

        {todos.length > 0 ? (
         <Todos 
         todos = {todos}
         handleCount = {(index)=>{
          handleCount(index)
         }}
         handleSubstractionCount = {(index)=>{
          handleSubstractionCount(index)
         }}
         />
        ) : (
          <Empty/>
        )}
      </Container>
    </div>
  );
};

export default App;
