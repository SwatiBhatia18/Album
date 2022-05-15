import React, { useState,useEffect } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom';
import './SearchBox.css'; 
import {DebounceInput} from 'react-debounce-input'; 
var array = [];
// var a = [];
const SearchBox = ({input , setInput }) => {
  const [array , setArray] = useState([]);
  // function storeInput(input1){
  //   if(input1.length >= 2){
  //     console.log("Ok");
  //     array = [...array, input1];
  //     console.log(array); 
  //   }  
  //   window.localStorage.setItem("search",JSON.stringify(array));
  // }

 
  const [style , setStyle] = useState("searchHide");
  useEffect(() => {
    if(input) 
    {
      setStyle("searchShow");
    }
    if(input.length == 0)
    {
      setStyle("searchHide");
    }

  }, [input]);
  

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('search'));
    window.localStorage.setItem("search",JSON.stringify([]));
    console.log(typeof(data));
    if ( data) setArray(data);
  
  }, []); 

  useEffect(()=>{
    let data = JSON.parse(window.localStorage.getItem("search"));
    window.localStorage.setItem("search",JSON.stringify([...data , input ]));
    // let b = [...data , input];
    // b.toString();
    // if(b.includes(input))
    // {
    //   setArray()
    // }
    setArray([...data , input]);
  },[input])


  function selectItem(item) {
    console.log(item);
    
  }

  const changebg = () => {
    console.log("hovered");
    setStyle("hover");
  }
  
  const clickFunc =(item) =>{
    setInput(item);
  }
  // a=[...b]
//   console.log(a, "check");
//  console.log(typeof(a));
  return (
    <div>
    < DebounceInput 
    minLength={3}
    debounceTimeout={300}
    type="text" 
    placeholder='Type to search photos' 
    className='input'
    value={input}
    onChange={(e)=> {setInput(e.target.value)}}
    />
    <div className={style}  >
       
        {array.map((item) => {
         
          return (
          
           <div onClick={clickFunc(item)}>{item}</div>
           

        )}
       )}
    </div>
    </div>
  )
}

export default SearchBox