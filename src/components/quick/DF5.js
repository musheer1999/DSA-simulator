import React, { useState } from "react";
import App from './appr5'
import { partition } from "d3";

// function swap(x,y,z,j,setData){
//     let temp1 = x;
//     let temp2= y;
//     z[j+1]=temp1;
//     z[j]=temp2;
//     setData(z.map((entry,index)=>index===j?temp2 :entry))
//     setData(z.map((entry,index)=>index===j+1?temp1 :entry))

// }
// function clear(){
//     clearInterval(c)
// }

function partitions(data,low,high,setData,setIteration,setleft,setright,left,right,res){

   let pivot=data[high];
    let i=(low-1)
    let j=low
  
    var c=setInterval(()=>{
        if(j<=high-1){
            console.log(`compare ${data[j].value} and ${pivot.value}`)
            document.getElementById("compare").style.backgroundColor="green"
            setTimeout(() => {

                document.getElementById("compare").style.backgroundColor="wheat"
            },100);
            document.getElementById("ins").innerHTML=`Compare ${data[j].value} and ${pivot.value}`
        if(data[j].value<pivot.value){
            i++;
         
            let temp1 = data[i];
            let temp2= data[j];
            data[j]=temp1;
            data[i]=temp2;
            setIteration(iteration=>iteration+1)
            setData(data.map((entry,index)=>index===i?temp2 :entry))
            setData(data.map((entry,index)=>index===j?temp1 :entry))
            let temps = data;
            
        }
   } if(j>high-1){

    console.log("1st swap comp")
    clearInterval(c)
    let temp3 = data[i+1];
    let temp4= data[high];
    data[i+1]=temp4;
    data[high]=temp3;
    temp4.color="green"
    setIteration(iteration=>iteration+1)
    setData(data.map((entry,index)=>index===high?temp3 :entry))
   
    setData(data.map((entry,index)=>index===i+1?temp4 :entry))
  
   console.log(`the pivot is ${temp4.value}`)
   res()
  
   
  
  DF(data,setData,low,i,setIteration,setleft,setright,left,right).then(function(){
      return DF(data,setData,i+2,high,setIteration,setleft,setright,left,right)
  })
   
   
    
    // return(i+1)
    
   } j++},1000)
  
        }


function DF(data,setData,low,high,setIteration,setleft,setright,left,right){

    
  

return new Promise(function(res,rej){
       
    console.log(`the value of low is ${low}`)
    console.log(`the value of high is ${high}`)
    if(low<high){
     
        let pi= partitions(data,low,high,setData,setIteration,setleft,setright,left,right,res);
        
    }else {
        res()
    }
 
   
})
         
    }

export default DF;