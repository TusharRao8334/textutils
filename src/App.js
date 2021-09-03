import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text-utils" />
      <div className="container my-3">
        <TextForm heading="Manipulate Your Text Here" />
      </div>
    </>
  );
}

export default App;
