import { TextField } from "./TextField";
import { ReducerExample } from "./ReducerExample";
import { TodoApp } from "./TodoApp";
import { FetchGit } from "./API_Git_Hub/FetchGit";

function App() {
  return (
    <div className="App">
      {/* ele gera um erro quando não passei as propriedades requeridas, e CTRL+espaço mostra as propriedades*/}
      {/* <TextField
        text="hello"
        person={{ firstName: "Lucas", lastName: "Carvalho" }}
        fn={(x) => 3}
        nossa={{ gato: "Mila" }}
      /> */}
      {/* <ReducerExample /> */}
      {/* <TodoApp /> */}
      <FetchGit />
    </div>
  );
}

export default App;
