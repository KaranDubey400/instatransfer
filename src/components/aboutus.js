import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import '../styles/style.css';
import mazeWebpImage from '../images/mazze.webp'; // Import your images
import investinred from '../images/invest.webp';
import orlando from '../images/orlando.webp';
import tower from '../images/tower.webp';

const AboutUs = () => {
  return (
    <section id="title">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/"> {/* Use Link component for the Home */}
            <h2 className="navbar-heading">MAZE BANK</h2>
            <img className="m-img" src={mazeWebpImage} alt="Maze Bank Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link> {/* Use Link component for the Home */}
              </li>
              <li className="nav-item">
              <Link  className="nav-link" to="/customer-list">View Customers</Link>
                
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="about.html">About Bank</a>
              </li>
            </ul>
          </div>
        </nav>

         <div className="heading text-center my-5">
          <img className="m-img" src={investinred} alt="Invest" />
          <h1>ABOUT US</h1>
          <p>Welcome to <b>MAZE BANK</b>, where your financial needs are our top priority. With a commitment to excellence and a focus on customer satisfaction, we strive to provide innovative banking solutions tailored to meet your individual needs.</p>
          <p><b>Our Mission</b><br />
            At <b>MAZE BANK</b>, our mission is to empower our customers to achieve their financial goals by providing reliable, secure, and convenient banking services. We aim to build lasting relationships with our customers based on trust, integrity, and transparency.</p>
          <p><b>Our Values</b><br />
            Customer-Centricity: We prioritize the needs and preferences of our customers in everything we do.<br />
            Integrity: We conduct business with honesty, transparency, and ethical practices.<br />
            Innovation: We continuously seek innovative solutions to enhance our services and improve customer experience.<br />
            Security: We maintain the highest standards of security to safeguard our customers' financial information and assets.<br />
            Community Engagement: We actively support and contribute to the communities we serve through various initiatives and partnerships.</p>
          <p><b>Our Transaction Services</b><br />
            <b>MAZE BANK</b> offers a wide range of transaction services to facilitate seamless financial transactions for our customers:<br />
            - Online Banking<br />
            - Mobile Banking<br />
            - ATM Services<br />
            - Wire Transfers<br />
            - Bill Payment<br />
            - Person-to-Person (P2P) Transfers<br />
            - Merchant Services</p>
          <p>At <b>MAZE BANK</b>, we are committed to providing you with the tools and resources you need to manage your finances efficiently and securely. Experience the convenience of banking with us today!</p>
          <h2 className="big-heading">basic banking system By karan dubey</h2>
          <img className="m-img" src= {orlando} alt="Maze Bank branch on Bay City Avenue, Del Perro" />
          <h4>Maze Bank branch on Bay City Avenue, Del Perro.</h4>
          <img className="m-img" height="700px" width="500px" src={tower} alt="Maze Bank Tower" />
          <h4>The Maze Bank Tower</h4>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;