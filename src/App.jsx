import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompletedTodo } from "./components/IncompletedTodo";
import { CompletedTodo } from "./components/CompletedTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompletedTodo, setIncompletedTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompletedTodo, todoText];
    setIncompletedTodo(newTodo);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompletedTodo];
    newTodo.splice(index, 1);
    setIncompletedTodo(newTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompletedTodo];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completedTodo, incompletedTodo[index]];
    setIncompletedTodo(newIncompleteTodo);
    setCompletedTodo(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...completedTodo];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodo = [...incompletedTodo, completedTodo[index]];
    setCompletedTodo(newCompleteTodo);
    setIncompletedTodo(newIncompleteTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompletedTodo.length >= 5}
      />
      {incompletedTodo.length >= 5 && (
        <p style={{ color: "red" }}>The number of TODO list is limited!!</p>
      )}
      <IncompletedTodo
        todo={incompletedTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompletedTodo todo={completedTodo} onClickBack={onClickBack} />
    </>
  );
};
