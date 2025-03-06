import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        {/* First Section: Main Image & Paragraph */}
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-6 text-center">
            <img src="img/about.jpg" className="img-responsive" alt="About us" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Quiénes somos</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Second Section: Misión, Visión, Valores + Another Image */}
        <div className="row align-items-center mt-5">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>Misión</h3>
              <p>{props.data ? props.data.mission : "loading..."}</p>

              <h3>Visión</h3>
              <p>{props.data ? props.data.vision : "loading..."}</p>

              <h3>Valores</h3>
              <div className="list-style">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Switched Image to the Right */}
          <div className="col-xs-12 col-md-6 text-center">
          <img src="img/about.jpg" className="img-responsive" alt="About us" />
          </div>
        </div> 
      </div>
    </div>
  );
};