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
import PaystackButton from 'react-paystack';

export default class SignUp extends Component {

    state ={
        key: "pk_test_6a392d48212624003c75a15d8f4c294ec91def92", //PAYSTACK PUBLIC KEY
    	email: "hiloryolamide@gmail.com",  // customer email
    	amount: 30000, //equals NGN100,
    }

    callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    handleInput = (e,item)=>{
        const value = e.target.value;
        switch(item){
            case 'name':
                this.setState({
                    name: value
                })
            break;
        }
        
    }

    getDetails = () =>{
        const name =  localStorage.getItem('name')
        const email = localStorage.getItem('email')
        const phone = localStorage.getItem('phone')
        const password = localStorage.getItem('password')
        const companyName = localStorage.getItem('Company Name')
        const address = localStorage.getItem('Address')
        const staffs = localStorage.getItem('No of staffs')
        const workingDays = localStorage.getItem('No of Working Days')
        const country = localStorage.getItem('Country')
        const region = localStorage.getItem('Region')
        const logo = localStorage.getItem('Logo')
        const workWeek = localStorage.getItem('Work week')
        const defaultBusiness = localStorage.getItem('Set as default business')

        const details = [
            {
                item:"Name",
                details:name
            },
            {
                item:"Email",
                details:email
            },
            {
                item:"Phone",
                details:phone
            },
            {
                item:"Password",
                details:password
            },
            {
                item:"Company Name",
                details:companyName
            },
            {
                item:"Address",
                details:address
            },
            {
                item:"No of staffs",
                details:staffs
            },
            {
                item:"No. of working days",
                details:workingDays
            },
            {
                item:"Country",
                details:country
            },
            {
                item:"State",
                details:region
            },
            {
                item:"Logo",
                details:logo
            },
            {
                item:"Work week",
                details:workWeek
            },
            {
                item:"Set as default business",
                details:defaultBusiness
            },
        ]
           
        return details;
    }

    renderTable = (element) =>{
        const details = this.getDetails()
        return details.map((item,i) =>{
            return(
                <tr>
                    <td>{item.item}</td>
                    <td>{item.details}</td>
                </tr>
            )
        })
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
                {/* {this.state.validation !== '' ? <Message message={this.state.validation} clearMessage={this.clearMessage}/>: null} */}
                <UI.Left>
                    <SideBanner/>
                </UI.Left>

                <UI.Right>
                   <div className="steps">
                        <Progress type="circle" percent={100} status="success" width={100} />
                        <p className="step-no">Step 3, Final step</p>
                    </div>
                    <div className="form-card">
                    
                        {/* <Steps/> */}

                        <h2>Subscribe</h2>
                        <p className="small-text">Pay of token of #300 to subscribe</p>
                        <div>
                            <p>
                            <PaystackButton
                                text="Make Payment"
                                class="payButton"
                                callback={this.callback}
                                close={this.close}
                                // disabled={true} 
                                
                                embed={true} 
                                reference={this.getReference()}
                                email={this.state.email}
                                amount={this.state.amount}
                                paystackkey={this.state.key}
                                tag="button"
                            />
                            </p>
                        </div>

                        <div className="details-list">
                            <h4>Details</h4>
                            <div className="table-responsive">
                                <table className="table-striped table-bordered">
                                    <th>
                                        <td>Item</td>
                                        <td>Detail</td>

                                        {this.renderTable()}
                                    </th>
                                </table>
                            </div>

                            
                        </div>

                    </div>

                    
                </UI.Right>
            </UI.Container>
        )
    }
}
