import React, { Component } from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <ScrollAnimation animateIn="bounceInLeft" duration="2">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Prabhsimran Singh's Profile Pic"
              />
            </ScrollAnimation>
          </div>
          <div className="nine columns main-col">
            <ScrollAnimation animateIn="bounceInLeft" duration="2">
              <h2>About Me</h2>
              <p>{bio}</p>
            </ScrollAnimation>
            {/*    <div className="row">
              <div className="columns contact-details">
                <ScrollAnimation animateIn="bounceInRight" duration="2">
                  <h2>Email</h2>
                  <p className="address">
                    <span>{email}</span>
                  </p>
                </ScrollAnimation>
              </div>  
              <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> 
            
          </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default About;
