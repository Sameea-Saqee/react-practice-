import FragmentComponent from "./components/FragmentComponent";
import Message from "./components/Message";
import Table from "./components/Table";
function App() {
  return (
    <div className="App">
      <Message /> 
      <FragmentComponent />
      <Table></Table>
    </div>
  );
}

export default App;
