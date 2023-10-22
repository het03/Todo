import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Todo-container">
      <h1>To-Do</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="btn-group">
        <button type="toggle-button" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> Tasks</span>
        </button>
        <button type="toggle-button" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> Tasks</span>
        </button>
        <button type="toggle-button" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> Tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul role="list" className="todo-stack-lg" aria-labelledby="list-heading">
        <li className="todo-stack-sm">
          <div className="td">
            <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>

        <li className="todo-stack-sm">
          <div className="td">
            <input id="todo-1" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>

        <li className="todo-stack-sm">
          <div className="td">
            <input id="todo-2" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
