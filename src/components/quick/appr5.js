import React, { useState } from "react";
import RacingBarChart from "./racingbar2";

import DF from './DF5'




function App() {
  const [iteration, setIteration] = useState(0);
  const[left,setleft] =useState(1)
  const[right,setright] =useState(1)
  const [names, setnames] = useState(0);
  const [colors,setcolors] =useState(["	coral","lemonchiffon","greenyellow","paleturquoise",
  "lavender","burlywood","lightpink","fuchsia","palegreen","olivedrab",
  "antiquewhite","	yellow","lightsteelblue","lightsalmon"])
  const [start, setStart] = useState(false);
  const [data, setData] = useState([
    {
      name: "alpha",
      value: 9,
      color: "#f4efd3"
    },
    {
      name: "beta",
      value: 7,
      color: "#cccccc"
    },
    {
      name: "charlie",
      value: 5,
      color: "#c2b0c9"
    },
    {
      name: "delta",
      value: 11,
      color: "#9656a1"
    },
    {
      name: "echo",
      value: 12,
      color: "#fa697c"
    },
    {
      name: "foxtrot",
      value: 2,
      color: "#fcc169"
    },{
      name: "foxtrotnew",
      value: 14,
      color: "blue"
    },{
      name: "foxtrotnew2",
      value: 3,
      color: "orange"
    },{
      name: "foxtrotnew3",
      value: 10,
      color: "grey"
    },{
      name: "foxtrotnew4",
      value: 6,
      color: "yellow"
    }
    
  ]);

  let onSubmit=(e)=>{
    e.preventDefault();
  
  }
  let c = data.map(x=>{
    return(
      
        
          <td Style="border:1px solid black">{x.value}</td>
        
    
      ) 
})


  return (
    <React.Fragment>
      <div className="container">
      <h1>Quick sort algorithm</h1>
      <td> <p id="it"></p>
      <form onSubmit={onSubmit} Style="height:15px">
      <button onClick={()=>{
        data.pop()
        setData(data.map((entry)=>entry ))
      }}>Delete </button>
      
      <button onClick={()=>{
  let y = document.getElementById("array").value;
  let c = parseInt(y)
  let col = colors[Math.floor(Math.random()*13)]
  let na = names.toString()
  console.log(names)
  setnames(names+1)
  
  let z = {
    name: na,
    value: c,
    color: col
  }
  data.push(z)
console.log(data)
setData(data.map((entry)=>entry ))

}}>Put value inside the table</button>
<input id="array" type="text" Style="width:100px;height:25px; background-color:	cornsilk;" ></input>
      </form>
     </td>
     <table Style="border:1px solid black"><tr>{c}</tr></table>
          
          <RacingBarChart data={data} />
        
     
      
    <button onClick={()=>DF(data,setData,0,data.length-1,setIteration,setleft,setright,left,right)}>Qick sort</button>
      <p>Iteration: {iteration}</p>
      <h3 id="final" Style="background-color:green"></h3>
      <h5 id="st" Style="background-color:green"></h5>
      <h5 id="ins" Style="background-color:yellow"></h5>
          <div className="card post" Style="text-align:center; background-color:	wheat" > 
  
      <div id="screen">for each (unsorted) partition<br/>

set first element as pivot <br/>

  storeIndex = pivotIndex + 1<br/>

  for i = pivotIndex + 1 to rightmostIndex<br/>
<span id="compare">
    if  element[pivot] > element[i]  <br/>
    </span>
      swap(i, storeIndex); storeIndex++<br/>

  swap(pivot, storeIndex - 1)<br/>
</div></div>
      </div>
    </React.Fragment>
  );
}

export default App;

