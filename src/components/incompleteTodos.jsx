import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickDel, onClickComp } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      {todos.map((todo, index) => {
        return (
          <ul key={todo} className="list-row">
            <li>{todo}</li>
            <li>
              <button onClick={() => onClickComp(index)}>完了</button>
            </li>
            <li>
              <button onClick={() => onClickDel(index)}>削除</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
