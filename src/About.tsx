import React from "react";

import "./App.css";

function About() {
    return (
        <section id="about">
        <div className="container">
            <div className="about-wrapper">
                <div className="after"><h1>About us</h1></div>
                <div className="content">
                    <h5 className="title mb-3">Powerful Alliance Driving Business Success</h5>
                    <div className="row">
                        <div className="col">
                            <p>Robusoft Limited was founded in 2021 when we decided to go independent and unlock our full potential as a team.</p>                        
                            <p>We have 26 years of IT experience encompassing the entire Software Development Life Cycle (SDLC) from requirements gathering, analysis and design to development, QA, deployment and ongoing production support.</p>
                            <p>We have been exposed to different technologies along the way with the most recent being microservices, Apache Kafka, and Amazon / Azure cloud.</p>
                        </div>
                        <div className="col">
                            <p>By incorporating microservices, Apache Kafka, and Amazon / Azure cloud into our technological landscape: </p>
                            <p>We have embraced innovative solutions that empower us to develop scalable and efficient software architectures, leverage the benefits of cloud computing, and handle large volumes of data with high throughput and low latency. These technologies equip us with the tools necessary to adapt to the ever-changing business landscape and deliver cutting-edge solutions to our customers.</p>
                        </div>
                    </div>                  
                </div>
            </div>         
        </div>         
     </section>

    );
}

export default About;