import React from "react";

function TodoList() {
  return (
    <>
      <h2 className="text-primary"> Todo List</h2>
      <hr />
      <table className="table table-responsive text-center">
        <thead className="thead-inverse">
          <tr>
            <th>#id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {TodoList.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <span
                  className={`badge bg-${
                    todo.completed ? "success" : "denger"
                  } rounded-5 border-1`}
                >
                  &nbsp;
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
