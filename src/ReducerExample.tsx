import React from "react";
import { useReducer } from "react";

type Actions =
  | { type: "add"; text: string }
  | { type: "remove"; idx: number }
  | { type: "done"; idx: number };

interface Todo {
  text: string;
  complete: boolean;
}

//O tipo "State" é uma array de "Todo"'s
// type State = Array<Todo>;
type State = Todo[];

//Estou definindo que meu Reducer vai receber o estado do tipo "State" e as ações do tipo "Actions" (definidos acima)
const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    case "done":
      state[action.idx].complete = true;
      return state;
    default:
      return state;
  }
};

export const ReducerExample: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "..." });
        }}
      >
        Cria tarefa "...".
      </button>
      <button
        onClick={() => {
          dispatch({ type: "done", idx: 0 });
        }}
      >
        Tarefa completa.
      </button>
    </div>
  );
};
