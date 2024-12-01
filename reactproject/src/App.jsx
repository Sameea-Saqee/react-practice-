import FragmentComponent from "./components/FragmentComponent";
import Message from "./components/Message";
import Table from "./components/Table";
import Parent from "./components/Parent";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <Message /> 
      <FragmentComponent />
      <Table></Table>
      <Parent />
      <Modal />
    </div>
  );
}

export default App;
