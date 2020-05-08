import React, { useState } from "react";
import RacingBarChart from "./racingchart";



function App() {
  const [iteration, setIteration] = useState(0);
  const [names, setnames] = useState(0);
  const [start, setStart] = useState(false);
  const [colors,setcolors] =useState(["	coral","lemonchiffon","greenyellow","paleturquoise",
  "lavender","burlywood","lightpink","fuchsia","palegreen","olivedrab",
  "antiquewhite","	yellow","lightsteelblue","lightsalmon"])
  const [data, setData] = useState([
    {
      name: "alpha",
      value: 95,
      color: "#f4efd3"
    },
    {
      name: "beta",
      value: 72,
      color: "#cccccc"
    },
    {
      name: "charlie",
      value: 45,
      color: "#c2b0c9"
    },
    {
      name: "delta",
      value: 8,
      color: "#9656a1"
    },
    {
      name: "echo",
      value: 90,
      color: "#fa697c"
    },
    {
      name: "foxtrot",
      value: 50,
      color: "#fcc169"
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
      <h1>Selection sort algorithm</h1>
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
      <div Style="heigt:500px">
      <RacingBarChart data={data} />
      </div>
      
      <button onClick={()=>{

let i =0;
let j=i+1
let mi =i
document.getElementById("st").innerHTML =`let ${data[i].value} is minimum`
document.getElementById("set").style.backgroundColor="green"
setTimeout(() => {
  document.getElementById("set").style.backgroundColor="wheat"
}, 100);
let c=setInterval(()=>{
if(i<data.length-1){
   
     
      
     
        if(j<data.length){
          document.getElementById("sets").style.backgroundColor="green"
                document.getElementById("if").style.backgroundColor="wheat"
            if(data[j].value< data[mi].value){
              document.getElementById("st").innerHTML =`let ${data[j].value} is new minimum because ${data[j].value} < ${data[mi].value} `
                mi=j
                document.getElementById("if").style.backgroundColor="green"
                document.getElementById("sets").style.backgroundColor="wheat"
            }
            j++
        }
       if(j>=data.length){
        let temp1 = data[i];
        let temp2= data[mi]; 
       data[mi]=temp1;
       data[i]=temp2;

      
        setData(data.map((entry,index)=>index===i?temp2 :entry))
        setData(data.map((entry,index)=>index===mi?temp1 :entry))
        j=i+1;
        i++
        document.getElementById("st").innerHTML =`let ${data[i].value} is minimum`
        document.getElementById("set").style.backgroundColor="green"
setTimeout(() => {
  document.getElementById("set").style.backgroundColor="wheat"
}, 100);
       }
          
           
    // this.setState({c:this.state.c})
   
}if(i===data.length-1){
  document.getElementById("st").innerHTML =`array is sorted`
  document.getElementById("if").style.backgroundColor="wheat"
  document.getElementById("sets").style.backgroundColor="wheat"
}

},1000)
}}>Selection sort</button>
      <p>Iteration: {iteration}</p>
      <h3 id="final" Style="background-color:green"></h3>
      <h5 id="st" Style="background-color:green">.</h5>
      <h5 id="ins" Style="background-color:yellow">.</h5>
<div className="card post" Style="text-align:center; background-color:	wheat">
repeat (numOfElements - 1) times <br/>
<span id="set">
set the first unsorted element as the minimum <br/>
</span>


for each of the unsorted elements <br/>
<span id="if">
if currentMinimum > element  <br/>
</span>
 
<span id="sets">
set element as new minimum <br/>
</span>
    
<span id="swap"> swap minimum with first unsorted position <br/></span>

</div>

      
      </div>
    </React.Fragment>
  );
}

export default App;
