import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  borderRadius: "8px"
};

export const CompletedTodo = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">Completed Todo</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>Back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
