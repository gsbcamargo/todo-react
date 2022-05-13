import React from "react";

const List= () => {
  const tasks = [
    {
    id: 1,
    task: 'React',
    duration: '02:00:00'
  }, {
    id: 2,
    task: 'TypeScript',
    duration: '01:30:00'
  }, {
    id: 3,
    task: 'Elixir',
    duration: '08:00:00'
  }];

  return (
    <aside>
      <h2> Daily studies </h2>
      <ul>
        {tasks.map((item, id) => (
          <li key={id}>
            <h3> {item.task} </h3>
            <span> {item.duration} </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;