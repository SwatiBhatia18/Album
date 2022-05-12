import React, { useState,useEffect } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom';
import './SearchBox.css'; 
import {DebounceInput} from 'react-debounce-input'; 
var array = [];
// var a = [];
const SearchBox = ({input , setInput }) => {
 
  function storeInput(input1){
    if(input1.length >= 2){
      console.log("Ok");
      array = [...array, input1];
      console.log(array); 
    }  
    window.localStorage.setItem("search",JSON.stringify(array));
  }

 
  const [style , setStyle] = useState("searchHide");
  useEffect(() => {
    if(input) 
    {
      setStyle("searchShow");
    }

  }, [input]);
  
  let a=[]
  const b = window.localStorage.getItem("search");
  // a=[...b]
  // console.log(a, "check");
 
  return (
    <div>
    < DebounceInput 
    minLength={3}
    debounceTimeout={300}
    type="text" 
    placeholder='Type to search photos' 
    className='input'
    value={input}
    onChange={(e)=> {setInput(e.target.value); storeInput(input)}}
    />
    <div className={style}>

        {a.map((item) => (
          
           <div>{item}</div>
          
        )
       )}
    </div>
    </div>
  )
}

export default SearchBox