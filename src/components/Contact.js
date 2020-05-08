import React, { Component } from 'react'
import axios from 'axios'
import Image from './photo.jpg'
import Gmail from './Gmail.png'
import Twitter from './twitter.png'
import Linkedin from './linkedin.jpg'
import Facebook from './facebook2.png'
import Github from './github.png'
import { Link } from 'react-router-dom'
class Contact extends Component {

    
 
       
   
         

    render(){
    
 
        return(
                <div Style="padding-top:200px;padding-bottom:200px">
                  
                    <div className="container" >
                      
                    <img src={Image} alt="" Style="height:300px; width:300px;"className="responsive-img circle" alt=""></img>
                    <h3>Musheer Ahmad|<span Style="font-size:30px;color:grey">Full stack developer</span></h3>
                    <p> I am Computer Engineering Student Who loves programming and learningn new concepts
             and developing websites using MERN.  </p>
                    <h4>Contact</h4>
                  
                    <table Style="width:400px">
                        <tr><td><img src={Gmail} Style="width:30px;height:30px"></img></td>
                        <td>  musheerahmad.710@gmail.com</td>
                        </tr>
                        </table>
                        <table Style="width:400px">
                        <tr>
                            <td><a href="https://twitter.com/Musheer42771775"><img src={Twitter} Style="width:30px;height:30px"></img></a></td>
                            <td><a href="https://www.linkedin.com/in/musheer-ahmad-03b984141/"><img src={Linkedin} Style="width:30px;height:30px"></img></a></td>
                            <td><a href="https://github.com/musheer1999"><img src={Github} Style="width:30px;height:30px"></img></a></td>
                        </tr>
                        
                    </table>
                    <p> </p>
                    
            
</div>
</div>
               


        )
    }
}

export default Contact



{/* <div class="card horizontal" Style="margin:auto;" >
<div className="card-image" Style="margin:auto">
  <img src={Image} />

  
</div>

<div  className="card-stacked">
  <span className="card-title center"></span>
  <div className="card-content">
      <h3>Musheer Ahmad|<span Style="font-size:30px">Full stack developer</span></h3>
        <p>Full Stack Developer</p>
        <br></br>
        <hr></hr>
        
        <p> I am Computer Engineering Student Who loves programming and learningn new concepts
             and developing websites using MERN.  </p>
             <h5>Skills</h5>
            
      
  
</div>
</div>
</div> */}