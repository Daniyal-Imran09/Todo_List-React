
import './App.css';
import Header from './mycomponenets/Header';
import Todos from './mycomponenets/todos';
import Footer from './mycomponenets/footer';
import Addtodo from './mycomponenets/addtodo'
import About from './mycomponenets/about'
import React, { useState, useEffect } from 'react';

function App() {
  let inittodo;
  if (localStorage.getItem("item") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("item"));
  }
  const ondelete = (todo) => {
    console.log(" i am on delete");

    setitem(item.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("item", JSON.stringify(item));
  }
  const addTodo = (title, desc) => {
    console.log("i am adding this ", title, desc);
    let sno;
    if (item.length === 0) {
      sno = 0;
    }
    else {
      sno = item[item.length - 1].sno1 + 1;
    }

    const mytodo = {
      sno1: sno,
      title: title,
      desc: desc
    }
    setitem([...item, mytodo]);

  }

  const [item, setitem] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [inittodo]);
 
  return (
    <>
      <Header title="mytodos-list" />
        <Addtodo addTodo={addTodo} />
            <Todos todos={item} ondelete={ondelete} />
      <Footer />
     
    </>
  );
}

export default App;
