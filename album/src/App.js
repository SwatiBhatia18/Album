import React,{ useState ,useEffect} from 'react'
import SearchBox from "./Components/SearchBox";
import './App.css'
import Gallery from "./Components/Gallery";


function App() {
  const [input , setInput] = useState("");

  let array = [];
  // useEffect (()=> console.log("Value check", page),[page])
  return (

    <center >
      <div className="header">
        <h2>Search Photos</h2>
        <SearchBox input={input} setInput={setInput} array={array}/>
      </div>
      <Gallery query={input} />
    </center>
    
  );
}

export default App;
