import React, { Component} from 'react';
import Card from 'react-bootstrap/Card';
import './cssfiles/Estimate.css';
import Modifednav from './Modifednav';
import RangeSlider from 'react-bootstrap-range-slider';


export default class Estimate extends Component{
    constructor(props){
        super(props)
        this.state={
            userData:"",
            area:"",
            cararea:"",
            compoundfeet:"",
            balcony:"",
            slider:""   
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch("http://localhost:5000/userData",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
               token:window.localStorage.getItem("token"),
              }),
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userData");
              this.setState({userData:data.data})
              
        });
    }
    logOut=()=>{
         window.localStorage.clear();
         window.location.href="./sign-in";
    }


    handleSubmit(e){
        e.preventDefault();
        const{userfname,area,cararea,compoundfeet,balcony}=this.state;
        fetch("http://localhost:5000/estimatecalculate",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userfname:this.state.userData.fname,
                area,
                cararea,
                compoundfeet,
                balcony
              }),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status==="error"){
                  alert("some error occured")
                  window.location.href="./Services";
                }
                if(data.status==="ok"){
                  alert("details filled succcessfully");
                  window.location.href="./Estimate";
                  }  
                
                
          });
    }

    render() {
        return(
            <div>
              <Modifednav />
                
              <h1>Welcome {this.state.userData.fname}</h1>
                <div className="outerdiv2">
                <Card style={{ width: '40rem' }}>
                <form onSubmit={this.handleSubmit}>
        <h3>House construction cost calculator</h3>
        

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Complete name"
            value={this.state.userData.fname}
            onChange={(e)=>this.setState({userfname:e.target.value})}
          />
        </div>


        <div className="mb-3">
          <label>Construction area in sq.ft.</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter area"
            onChange={(e)=>this.setState({area:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Car parking area in square feet? (optional)</label>
          <input type="number" 
          className="form-control" 
          placeholder="Enter area" 
          onChange={(e)=>this.setState({cararea:e.target.value})} />
        </div>

        <div className="mb-3">
          <label>How much feet length compound wall do you require?</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter feet length"
            onChange={(e)=>this.setState({compoundfeet:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Balcony & Utility Area (sq.ft)*</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter area"
            onChange={(e)=>this.setState({balcony:e.target.value})}
          />
        </div>

        <RangeSlider
        value={this.slider}
      onChange={(e)=>this.setState({slider:e.target.value})}
    />

        <div className="d-grid">
          <button type="submit" className="btn btn-secondary">
            Submit details
          </button>
        </div>

      </form>
      </Card>
            </div>
            </div>
            
        )
    }
}