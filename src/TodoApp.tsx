import React, { useReducer } from "react";
import { FetchGit } from "./API_Git_Hub/FetchGit";

type Actions =
  | { type: "add"; text: string }
  | { type: "remove"; idx: number }
  | { type: "done"; idx: number }
  | { type: "undone"; idx: number };

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    case "done":
      state[action.idx].complete = true;
      return state;
    case "undone":
      state[action.idx].complete = false;
      return state;
    default:
      return state;
  }
};

export const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return <div>TodoApp</div>;
};
