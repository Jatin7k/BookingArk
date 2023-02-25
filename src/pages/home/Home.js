import React from 'react';
import "./home.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import ListProperties from '../../components/ListProperties/ListProperties';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Home Guests Love</h1>
        <ListProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
