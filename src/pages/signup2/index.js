import React, { Component } from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import styled from 'styled-components';
import Input from '../../components/Inputs/index';
import SideBanner from '../../components//SIdeBanner/index';
import SideBanner2 from '../../components/SideBanner2/index';
import {color3Dark, primaryColor} from '../../themes/colors';
import {Link} from 'react-router-dom';
import Steps from '../../components/steps/index';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import * as UI from './style';
import Message from '../../components/Message';

export default class SignUp2 extends Component {

    state ={
        companyName:'',
        address:'',
        staffs:'',
        workingDays:'',
        setDefault:false,
        workWeek:'',
        validation:'',
        logo:'',
        country: '', region: ''
    }
    componentWillMount(){
        if(localStorage.getItem('name') == null || localStorage.getItem('email') == null || localStorage.getItem('phone') == null || localStorage.getItem('password') == null){
            this.props.history.push('/signup')
            console.log('empty')
        }
    }
    handleInput = (e,item)=>{
        const value = e.target.value;
       
        switch(item){
            case 'companyName':
                this.setState({
                    companyName: value
                })
            break;

            case 'address':
                this.setState({
                    address: value
                })
            break;
            case 'staffs':
                this.setState({
                    staffs: value
                })
            break;
            case 'workingDays':
                this.setState({
                    workingDays: value
                })
            break;
            case 'setDefault':
                this.setState({
                    setDefault: !this.state.setDefault
                })
            break;
            case 'workWeek':
                this.setState({
                    workWeek: value
                })
            break;
            case 'logo':
                this.setState({
                    logo: value
                })
            break;
        }
        console.log(this.state)
        
    }

    handleSubmit = () =>{
        const {companyName,address, staffs,workingDays, country, region, logo, workWeek, setDefault} = this.state
        if(companyName === '' || address === '' || staffs === '' || workingDays === '' || country === '' || region === '' || logo ==="" || workWeek === ""){
            this.setState({
                validation:'Input fields cannot be empty!'
            })
        }else{
            localStorage.setItem('Company Name',companyName)
            localStorage.setItem('Address',address)
            localStorage.setItem('No of staffs',staffs)
            localStorage.setItem('No of Working Days',workingDays)
            localStorage.setItem('Country',country)
            localStorage.setItem('Region',region)
            localStorage.setItem('Logo',logo)
            localStorage.setItem('Work week',workWeek)
            localStorage.setItem('Set as default business',setDefault)
            this.props.history.push('/signup3')
        }
    }

    clearMessage = () =>{
        this.setState({
            validation:''
        })
    }
    
    selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }
    render() {
        
        const {companyName,address, staffs,workingDays,logo, workWeek, setDefault} = this.state
        return (
            <UI.Container>
                {this.state.validation !== '' ? <Message message={this.state.validation} clearMessage={this.clearMessage}/>: null}
               <UI.Left>
                    <SideBanner2/>
                </UI.Left>

                <UI.Right>
                   <div className="steps">
                        <Progress type="circle" percent={50} status="active" width={100} />
                        <p>Step 2</p>
                    </div>
                    <div className="form-card">
                        <h2>Busines Details</h2>
                            <div className="form-field">
                                <div className="half">
                                    <Input placeholder="Company Name" value={companyName} type="email" label="Company Name"  handleInput={this.handleInput} name="companyName"/>
                                </div>
                                <div className="half">
                                    <Input placeholder="Company Address" value={address} type="email" label="Address"  handleInput={this.handleInput} name="address"/>
                                </div>
                            </div>

                            <div className="form-field">
                            
                                <div className="half">
                                    <CountryDropdown className="select"
                                        value={this.state.country}
                                        onChange={(val) => this.selectCountry(val)} 
                                    />
                                </div>

                                <div className="half">
                                    <RegionDropdown className="select"
                                        country={this.state.country}
                                        value={this.state.region}
                                        onChange={(val) => this.selectRegion(val)} 
                                    />
                                    
                                </div>
                            </div>

                            <div className="form-field">
                                <div className="half">
                                    <Input placeholder="No of staffs" type="number" value={staffs} label="No of staffs"  handleInput={this.handleInput} name="staffs"/>
                                </div>
                                <div className="half">
                                    <Input placeholder="No of working days in a month" value={workingDays} type="number" label="No of working days in a month"  handleInput={this.handleInput} name="workingDays"/>
                                </div>
                            </div>

                            <div className="form-field" style={{alignItems: 'flex-end'}}>
                                <div className="half">
                                    <div className="file">
                                        <label>Upload Business logo</label>
                                        <input type="file" placeholder="choose file" value={logo} onChange={(e) => (this.handleInput(e,"logo"))}/>
                                    </div>
                                    
                                </div>

                                <div className="half">
                                    <select className="select" value={workWeek} onChange={(e) => (this.handleInput(e,"workWeek"))}>
                                        <option>Select work week</option>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-field">
                                <div className="">
                                    <input type="checkbox" className="checkbox" name="setDefault" value={true} onChange={(e) => (this.handleInput(e,"setDefault"))}/>
                                    <label>Set as default business</label>
                                </div>
                            </div>

                            <p className="next" onClick={this.handleSubmit}>Next</p>
                    </div>
                </UI.Right>
            </UI.Container>
        )
    }
}
