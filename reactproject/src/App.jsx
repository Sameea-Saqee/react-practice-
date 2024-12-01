import FragmentComponent from "./components/FragmentComponent";
import Message from "./components/Message";
import Table from "./components/Table";
import Parent from "./components/Parent";
function App() {
  return (
    <div className="App">
      <Message /> 
      <FragmentComponent />
      <Table></Table>
      <Parent />
    </div>
  );
}

export default App;
