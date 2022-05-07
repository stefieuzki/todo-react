import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickUndo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      {todos.map((todo, index) => {
        return (
          <ul key={todo} className="list-row">
            <li>{todo}</li>
            <li>
              <button onClick={() => onClickUndo(index)}>戻す</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
