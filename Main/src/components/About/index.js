import React from 'react';
import propic from '../../assets/images/propic.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "108x" }}></i>
        </div>
        <img src={propic} alt="propic.jpg"></img>
        
        <p>
welcome to my page 

      </p>
      </div>
    </section>
  );
}

export default About;
