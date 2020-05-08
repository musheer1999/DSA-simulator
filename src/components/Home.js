import React,{Component} from 'react'
import Selection from './selection.png'
import Selection2 from './ss.JPG'
class Home extends Component{
    render(){
        return(
                <div Style="margin-top:150px" >
                    <div className="container">
                    <div className="card small">
<div className="card-image">
  <img src={Selection2} Style="height:200px" />

  <span class="card-title" Style="color:black " ><b>Selection Sort</b></span>
</div>
  
<div className="card-action">
  <a href="/selection"><b>Selection Sort</b></a>
  
</div>
</div>
<br/><br/>
<div class="card small">
<div class="card-image">
<img src={Selection2} Style="height:200px" />
  
  <span class="card-title" Style="color:black"><b>Bubble Sort</b></span>
</div>
  
<div class="card-action">
  <a href="/bubble">Bubble Sort</a>
  
</div>
</div>
<br/><br/>
<div class="card small">
<div class="card-image">
<img src={Selection2} Style="height:200px" />

  <span class="card-title" Style="color:black"><b>Insertion Sort</b></span>
</div>
 
<div class="card-action">
  <a href="/insertion">Insertion Sort</a>
  
</div>
</div>
<br/><br/>

<div class="card small">
<div class="card-image">
<img src={Selection2} Style="height:200px" />

  <span class="card-title" Style="color:black"><b>Quick Sort</b></span>
</div>
 
<div class="card-action">
  <a href="/quick">Quick Sort</a>
  
</div>
</div>

                    </div>
                </div>

        )
    }
}

export default Home