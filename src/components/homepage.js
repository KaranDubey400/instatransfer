import React from 'react';
import mazeWebpImage from '../images/mazze.webp'; // Import your images
import mazeImage from '../images/maze.webp';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const HomePage = () => {
  return (
    <section id="title">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/">
            <h6 className="navbar-heading">Maze Bank </h6>
            <img className="m-img" src={mazeWebpImage} alt="Maze Bank Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/customer-list">View Customers</Link>

                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Bank</Link>
              </li>
              <li className="nav-item">
              <Link to="/contact-us" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
         <h1> create by karan dubey </h1> <br /> <br / >
        <h2 className="big-heading">"Invest in the red, it's in your interest" </h2>
        <h2>The headquarters of the company, the Maze Bank Tower, is located in Pillbox Hill, Downtown Los Santos. This skyscraper is the tallest building in San Andreas and the West Coast of the United States of America. The company also sponsors the Maze Bank Arena in La Puerta, the city's main stadium, and sponsors the Richards Majestic Productions film Meltdown.</h2>
        <br />
        <Link  className="nav-link" to="/customer-list"><button type="button" className="btn btn-outline-light" name="button">Customer List</button></Link> <br />
        
        <Link to="/transaction-history">
          <button className="btn btn-outline-light">View Transaction History</button>
        </Link>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="description">BASIC BANKING SYSTEM</h1>
            <h1 className="description">Safe and Secure Transactions</h1>
          </div>
          <div className="col-lg-6">
            <img className="m-img" src={mazeImage} alt="mobilebanking" />
            <p>Maze Bank West on Prosperity Street, Del Perro.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
