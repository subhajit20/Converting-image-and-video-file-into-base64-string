import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [file, setFile] = useState();
  const [str, setStr] = useState('');

  function getimg() {
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setStr(reader.result); //base64encoded string
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    } else {
      setStr('Please Select a file...');

      setTimeout(() => {
        setStr('');
      }, 3000);
    }
  }
  return (
    <div className="App">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" onClick={getimg}>
        Submit
      </button>

      <p style={{ width: '300px', height: '300px' }}>
        {str != null ? str : str}
      </p>
    </div>
  );
}

export default App;
