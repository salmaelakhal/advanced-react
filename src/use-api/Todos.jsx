import React, { useEffect, useState } from "react";
import customAxios from "./axios/customAxios";
import axios from "axios";
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const url = "https://jsonplaceholder.typicode.com/todos?start=0&_limit=10";

  const fetchDataWithFetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTodos(data);
  };

  // const fetchDataWithAxios = async () => {
  //   axios.all([
  //       customAxios.get('/todos'),
  //       customAxios.get('/users'),
  //       customAxios.get('/comments'),
  //     ]).then(
  //       axios.spread((todoData, usersData, commentData) => {
  //         // console.log(todoData.data, usersData.data, commentData.data);
  //         console.log(usersData.data);
  //         setTodos(todoData.data)
  //       })
  //     );
  // };
  
  const fetchDataWithAxios = async () => {
    try {
      const response = await customAxios.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    // fetchDataWithFetchApi()
    fetchDataWithAxios();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Liste des Todos</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <span
                  className={`badge rounded-5 border-1 bg-${
                    todo.completed ? "success" : "danger"
                  }`}
                >
                  &nbsp;
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
