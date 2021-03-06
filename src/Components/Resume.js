import React, { Component } from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function(skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>My Favorite stack </span>
            </h1>
          </div>

          <div className="bars">
            <ScrollAnimation animateIn="zoomIn" duration="2">
              <div className="rowTech">
                <div className="column">
                  <img
                    className="images"
                    src="../../images/React-logo.jpg"
                    alt="Forest"
                  />
                </div>
                <div className="column">
                  <img
                    className="images"
                    src="../../images/java.png"
                    alt="Snow"
                  />
                </div>
                <div className="column">
                  <img
                    className="images"
                    src="../../images/spring-framework.png"
                    alt="Forest"
                  />
                </div>
                <div className="column">
                  <img
                    className="images"
                    src="../../images/aws.png"
                    alt="Forest"
                  />
                </div>
              </div>
              <div className="rowTech">
                <div className="column">
                  <img className="images" src="../../images/JS.png" alt="" />
                </div>
                <div className="column">
                  <img
                    className="images"
                    src="../../images/docker.jpg"
                    alt="Forest"
                  />
                </div>
                <div className="column">
                  <img
                    className="images"
                    src="../../images/rest.png"
                    alt="Forest"
                  />
                </div>
                <div className="column">
                  <img
                    className="images"
                    src="../../images/Git.jpg"
                    alt="Forest"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
