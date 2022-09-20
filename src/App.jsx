import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
class App extends Component {
   constructor(){
    super()
    this.state={
        fullName:'',
        username:'',
        email:'',
        password:''
     }
     this.changefullname=this.changefullname.bind(this)
     this.changeusername=this.changeusername.bind(this)
     this.changeemail=this.changeemail.bind(this)
     this.changepassword=this.changepassword.bind(this)
     this.onSubmit=this.onSubmit.bind(this)
   }
   changefullname(event){
    this.setState({
        fullName:event.target.value
    })
   }
   changeusername(event){
    this.setState({
        username:event.target.value
    })
   }
   changeemail(event){
    this.setState({
        email:event.target.value
    })
   }
   changepassword(event){
    this.setState({
        password:event.target.value
    })
   }
   onSubmit(event){
    event.preventDefault()
    const reg={
        fullName:this.state.fullName,
        username:this.state.username,
        email:this.state.email,
        password:this.state.password
    }
    axios.post('http://localhost:4000/app/signup',reg)
    .then(res =>console.log(res.data))
    this.setState({
        fullName:'',
        username:'',
        email:'',
        password:''
    })
   }
    render() { 
        return (
           <div>
             <div className="container">
                <div className="form-div">
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                        placeholder="Full Name"
                        onChange={this.changefullname}
                        value={this.state.fullName}
                        className="form-control form-group"/>
                    
                        <input type="text"
                         placeholder="Username"
                         onChange={this.changeusername}
                         value={this.state.username}
                        className="form-control form-group"/>

                        <input type="text"
                        placeholder="E-mail"
                        onChange={this.changeemail}
                        value={this.state.email}
                        className="form-control form-group"/>


                        <input type="password"
                        placeholder="Password"
                        onChange={this.changepassword}
                        value={this.state.password}
                        className="form-control form-group"/>
                        <input type="submit" className="btn btn-danger btn-block" value="submit" />
                    </form> 
                </div>

             </div>


           </div>





        );
    }
}
 
export default App;