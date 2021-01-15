import React from 'react';

function AboutPage() {
  return (
    <>
      <div className='about-page'>
        <h1>Classic Cars</h1>
        <h2>About Us</h2>
        <div className='about-site'>
          <h2>Why Classic Cars?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='about-team'>
          <h2>Meet the Team!</h2>
          <ul>
            <li>Alexis Nathavong</li>
            <li>Diana Grams</li>
          </ul>
        </div>
        <div className='about-tech'>
          <h2>Our Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
