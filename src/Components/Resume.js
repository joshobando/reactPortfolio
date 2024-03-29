import React, { Component } from 'react';

class Resume extends Component {
  render() {
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
                <div className="twelve columns">
                  <div key="Rutgers bootcamp">
                      <h3>Rutgers Coding Bootcamp</h3>
                      <p className="info">Full Stack Developer Certificate <span>&bull;</span><em className="date">2020</em></p>
                      <p></p>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
          <div key="UniQlo"><h3>Uniqlo</h3>
          <p className="info">Sales Associate<span>&bull;</span> <em className="date">3 years</em></p>
          <p>Ensured customer satisfaction with effective service</p>
      </div>
      </div>
      </div>
        <div className="row skill">

          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

              <p>Tech Skills learned</p>

            <ul className="skills">
            <li key="javascript"><em>CSS</em></li>
            <li key="javascript"><em>Javascript</em></li>
            <li key="javascript"><em>React</em></li>
            {/* <li key="javascript"><em>javascript</em></li>
            <li key="javascript"><em>javascript</em></li>
            <li key="javascript"><em>javascript</em></li> */}
            </ul>
        </div>
      </div>
   </section>
    );
  }
}

export default Resume;
