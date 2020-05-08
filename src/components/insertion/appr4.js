import React, { useState } from "react";
import RacingBarChart from "./racingbar4";


function App() {
  const [iteration, setIteration] = useState(0);
  const [names, setnames] = useState(0);
  const [colors,setcolors] =useState(["	coral","lemonchiffon","greenyellow","paleturquoise",
  "lavender","burlywood","lightpink","fuchsia","palegreen","olivedrab",
  "antiquewhite","	yellow","lightsteelblue","lightsalmon"])
  const [start, setStart] = useState(false);
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
      value: 105,
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
      <h1>Insertion sort algorithm</h1>
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
      <button onClick={()=>{
           
let i=1;
let key;
let j;
setInterval(()=>{
if(i<data.length)
{
    key = data[i];
    j=i-1;
    while(j>=0&&data[j].value>key.value)
    {
                let temp1 = data[j];
                let temp2= data[j+1];
                data[j+1]=temp1;
                data[j]=temp2;
                setIteration(iteration =>iteration+1);
                setData(data.map((entry,index)=>index===j?temp2 :entry))
                setData(data.map((entry,index)=>index===j+1?temp1 :entry))
                j=j-1;
    }
    data[j+1]=key
    
    setData(data.map((entry,index)=>index===j+1?key :entry))
    
i++
}
},1000)
}}>Insertion Sort</button>


<button onClick={()=>{
           
           let i=1;
           let key;
           let j;
          
           if(i<data.length)
           {
               key = data[i];
               j=i-1;
               setInterval(()=>{
               if(j>=0&&data[j].value>key.value)
               {
                           let temp1 = data[j];
                        //    let temp2= data[j+1];
                        data[j+1]=temp1;
                        //    data[j]=temp2;
                        //    setData(data.map((entry,index)=>index===j?temp2 :entry))
                           setData(data.map((entry,index)=>index===j+1?temp1 :entry))
                           j=j-1;
               }else{

                data[j+1]=key
               setData(data.map((entry,index)=>index===j+1?key :entry))
               
                    i++
                    key = data[i];
                    j=i-1;
               }
            },3000)
               
           }
           
           }}>try</button>

<button onClick={()=>{
           
           let i=1;
           let key;
           let j;
          
           if(i<data.length)
           {
               key = data[i];
               j=i-1;
               setInterval(()=>{
               if(j>=0&&data[j].value>key.value)
               {
                           let temp1 = data[j];
                           let temp2= data[j+1];
                        data[j+1]=temp1;
                            data[j]=temp2;
                            setData(data.map((entry,index)=>index===j?temp2 :entry))
                           setData(data.map((entry,index)=>index===j+1?temp1 :entry))
                           setIteration(iteration =>iteration+1);
                           j=j-1;
               }else{

                data[j+1]=key
               setData(data.map((entry,index)=>index===j+1?key :entry))
               setIteration(iteration =>iteration+1);
               
                    i++
                    key = data[i];
                    j=i-1;
               }
            },3000)
               
           }
           
           }}>try2</button>
      <p>Iteration: {iteration}</p>
      <h3 id="final" Style="background-color:green"></h3>
      <h5 id="st" Style="background-color:green"></h5>
      <h5 id="ins" Style="background-color:yellow"></h5>
          <div className="card post" Style="text-align:center; background-color:	wheat" > 
  
      <div id="screen">mark first element as sorted <br/>

for each unsorted element X <br/>

  'extract' the element X <br/>

  for j = lastSortedIndex down to 0 <br/>

    if current element j > X <br/>

      move sorted element to the right by 1 <br/>

    break loop and insert X here <br/>
</div></div>
    
      </div>
    </React.Fragment>
  );
}

export default App;