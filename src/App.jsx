import Dropdownsample from "./Dropdownsample.jsx";
import Tictactoesample from "./Ticktacktoesample.jsx"

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-6xl">React study</h1>
      <div className="text-3xl font-light mt-6 mb-3">#Dropdown</div>
      <Dropdownsample />
      <div className="text-3xl font-light mt-6 mb-3">#Tic-Tac-Toe</div>
      <Tictactoesample/>
    </div>
  );
}

export default App;