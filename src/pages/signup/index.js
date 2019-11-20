import React, { Component } from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Input from '../../components/Inputs/index';
import {color3Dark, primaryColor, secondaryColor} from '../../themes/colors';
import {Link} from 'react-router-dom';
import Steps from '../../components/steps/index';
import Message from '../../components/Message';
import SideBanner from '../../components//SIdeBanner/index';
import * as UI from './style';

export default class SignUp extends Component {

    state ={
        name:'',
        email:'',
        phone:'',
        password:'',
        validation:'',
        country: '', region: ''
    }

    selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }

    handleInput = (e,item)=>{
        const value = e.target.value;
        switch(item){
            case 'name':
                this.setState({
                    name: value
                })
            break;

            case 'email':
                this.setState({
                    email: value
                })
            break;
            case 'phone':
                this.setState({
                    phone: value
                })
            break;
            case 'password':
                this.setState({
                    password: value
                })
            break;
        }
        
    }

    handleSubmit = () =>{
        const {name,email, phone,password} = this.state
        if(name === '' || email === '' || phone === '' || password === ''){
            this.setState({
                validation:'Input fields cannot be empty!'
            })
        }else{
            localStorage.setItem('name',name)
            localStorage.setItem('email',email)
            localStorage.setItem('phone',phone)
            localStorage.setItem('password',password)
            this.props.history.push('/signup2')
        }
    }

    clearMessage = () =>{
        this.setState({
            validation:''
        })
    }
    render() {
        console.log(this.state.validation)
        return (
            <UI.Container>
                {this.state.validation !== '' ? <Message message={this.state.validation} clearMessage={this.clearMessage}/>: null}
                <UI.Left>
                    <SideBanner/>
                </UI.Left>

                <UI.Right>
                   <div className="steps">
                        <Progress type="circle" percent={0} status="active" width={100} />
                        <p className="step-no">Step 1</p>
                    </div>
                    <div className="form-card">
                    
                        {/* <Steps/> */}

                        <h2>Sign Up</h2>
                        <p className="small-text">Sign up today to enjoy our great services</p>

                        <form>
                            <div className="form-field">
                                {/* <span className="fa fa-user"></span> */}
                                <Input placeholder="Name" type="text" label="Name" value={this.state.name} handleInput={this.handleInput} name="name"/>
                            </div>

                            <div className="form-field">
                                <Input placeholder="Email" type="email" label="Email" value={this.state.email} handleInput={this.handleInput} name="email"/>
                            </div>

                            <div className="form-field">
                                <Input placeholder="Phone Number"  type="text" label="Phone" value={this.state.phone} handleInput={this.handleInput} name="phone"/>
                            </div>

                            <div className="form-field">
                                <Input placeholder="Password" type="password" label="Password" value={this.state.password}handleInput={this.handleInput} name="password"/>
                            </div>
                            
                            {/* <Link to="" onClick={this.handleSubmit}> */}
                                <p className="next" onClick={this.handleSubmit}>Next</p>
                            {/* </Link> */}

                        </form>
                    </div>

                    
                </UI.Right>
            </UI.Container>
        )
    }
}
