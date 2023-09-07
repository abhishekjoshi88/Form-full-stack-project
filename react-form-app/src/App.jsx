import "./App.css";
import Form from "./Form";
import FormList from "./FormList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/form-list" element={<FormList />} />
      </Routes>
    </div>
  );
}

export default App;
