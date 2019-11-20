import React, { Component } from 'react'
import * as UI from './style';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import {data} from './data';
import ScrollAnimation from 'react-animate-on-scroll';

export default class index extends Component {

    state ={
        showNav:false
    }

    toggleNav = () =>{
        this.setState({
            showNav:!this.state.showNav
        })
    }

    renderFeatures = () =>{ 
        
        return data.map((item,i)=>{
            console.log(`item ${item.heading}`)
            return(
                <div className="col-lg-4 col-md-6">
                    <div className="feature-card">
                        <div className="feature-icon">
                               <img src={require(`../../assets/img/${item.icon}`)} />
                        </div>

                        <div className="feature-heading">
                            <h6>{item.heading}</h6>
                        </div>

                        <div className="feature-body">
                            <p>{item.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        
        return (
            <UI.Container id="home" className="content">
                <Banner toggleNav = {this.toggleNav} showNav = {this.state.showNav}/>

                <UI.Company id='company'>
                    <div className="bg-img">
                        <img src={require('../../assets/img/team.svg')} alt="team" />
                    </div>
                    <div className="text">
                        <h3>Our Company</h3>
                        <p>Technology alone is not enough
                            You need technology plus expertise, at every level and at every stage, to keep your human resources software modern and adaptable. You need expertise before you make a purchase when you’re working to identify the right HR solution for your business. You need expertise throughout implementation.</p>
                            
                            <p>And you need ongoing support, not impersonal, 1-800 number call centres. To succeed, you need a dedicated team of experts that not only understands HR software but are also intimately familiar with your business. </p>
                        
                    </div>
                    
        
                </UI.Company>

                <UI.Features id='features'>
                    <h3>Features</h3>

                    <div className="container">
                        <div className="row">
                            {this.renderFeatures() }
                        </div>
                    </div>
        
                </UI.Features>

                <div className="na-map" id='contact'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9708174403368!2d3.388600821296056!3d6.525369450232914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d02b6ca16e7%3A0x3610432dc686ed6!2s10%20Obayan%20St%2C%20Akoka%20100001%2C%20Lagos!5e0!3m2!1sen!2sng!4v1574218667858!5m2!1sen!2sng" frameborder="0" allowfullscreen=""></iframe>
                </div>

                <Footer/>
            </UI.Container>
        )
    }
}
