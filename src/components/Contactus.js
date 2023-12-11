import { Component } from "react";
import Navbar1 from "./Navbar1";
import './cssfiles/Contactus.css'
import Card from 'react-bootstrap/Card';
export default class Contactus extends Component{


    constructor(props){
        super (props)
        this.state={
            fullname:"",
            email:"",
            descr:"",
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        const{fullname,email,descr}=this.state;
        console.log(fullname,email,descr);
        fetch("http://localhost:5000/contus",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fullname,
                email,
                descr
              }),
            })
            .then((res) => res.json())
            .then((data) => {
              if(data.status==="ok"){
                alert("submitted successfully");
                window.location.href="./sign-in";
                }  
                 
              
              
        });
    }






  render(){  
  return (
    <div>
    <Navbar1 />



    <form onSubmit={this.handleSubmit}>
                <br></br>
            <Card.Title>Sign-Up  .<i className="fa fa-address-card"></i></Card.Title>
            <br></br>
                <div className="mb-3">
                <Card.Title>Full Name</Card.Title>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full name"
                        onChange={(e)=>this.setState({fullname:e.target.value})}
                    />
                </div>

                <div className="mb-3">
                <Card.Title>Email</Card.Title>
                    <input type="email" className="form-control" placeholder="Enter Email"
                    onChange={(e)=>this.setState({email:e.target.value})} />
    
                </div>


                <div className="mb-3">
                <Card.Title>Description <i class="fa fa-key"></i></Card.Title>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="How can we help you?"
                        onChange={(e)=>this.setState({descr:e.target.value})}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </div>



        </form>





    <div className="bottomg">
        <div className="undersection">
                <div className="leftsection">
                    <h2>
                contact us on our email :-
                 </h2>
            <h3>
                s19_motiwal_soniya@mgmcen.ac.in
            </h3>
                 </div>
            <h2>
                contact us on our number :-
            </h2>

            <h3>
                +91 7588423360
            </h3>

        </div>

    </div>
    
    </div>
  );
}
}