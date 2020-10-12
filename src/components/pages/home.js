import React from 'react'
import NavBar from '../navBar'
import MeatPies from '../../MeatPies.JPG'
import ChickenCorn from '../../ChickenWithCorn.JPG'
import ChickenPotato from '../../ChickenWithPotato.jpg'
import Kabob from '../../RiceWithKabob.jpg'
import Shrimp from '../../ShrimpBlackRice.JPG'
import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom'
import About from './About'

class Home extends React.Component {

    render() {
        return (
            <>
            <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <div className = "visit-us">
                        <h1>Visit Us</h1>
                    </div>
                    <div className = "main-section">
                        <div className = "food">
                            <div className = "food-wording">
                                <h2 className = "food-header">Our Food</h2>
                                <p className = "food-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <img className = "meat-pies" src = {MeatPies} alt= "meat pies"/>
                        </div>
                        <div className = "meat">
                            <div className = "meat-wording">
                                <h2 className= "meat-header">Our Meat</h2>
                                <p className = "meat-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <img className = "chicken-with-corn" src = {ChickenCorn} alt= "chicken with corn"/>
                        </div>
                    </div>
                    <div className = "social-media">
                        <h2 className = "instagram-handle">@MuzoOnFire</h2>
                        <h4 className = "follow-us">Follow us on facebook or instagram</h4>
                        <img className = "social-media-image" src = {Kabob} alt= "Kabob"/>
                        <img className = "social-media-image" src = {ChickenPotato} alt= "chicken with potato"/>
                        <img className = "social-media-image" src = {Shrimp} alt= "shrimp with black rice"/>
                    </div>
                </Route>
                <Route exact path="/about" component = {About} />
            </Switch>
            
            </BrowserRouter>
            </>
        )
    }
}

export default Home;
