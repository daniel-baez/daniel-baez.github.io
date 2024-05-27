import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';  // Import the CSS file

const Profile = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Daniel Baez</h1>
        <p>
          <strong>Senior Software Engineer | Google Cloud Certified</strong><br />
          San Francisco, California, United States<br />
          Email: <a href="mailto:daniel@baezdaniel.cl">daniel@baezdaniel.cl</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/baezdaniel">LinkedIn</a> | Personal Website: <a href="http://baezdaniel.cl/">Personal Website</a>
        </p>
      </div>
      <div className="section">
        <h2>Professional Summary</h2>
        <p>
          Accomplished Senior Software Engineer with over 10 years of experience in developing scalable, high-performance cloud-native solutions with a specialization in IoT, AWS, and GCP. Proven expertise in leading cross-functional teams, driving technology innovation, and implementing best practices in software engineering. Eager to engage in environments that are intrepid in exploring new ventures and creating innovative solutions, valuing rapid iteration and data-driven decision-making. Dedicated to enhancing product reliability and optimizing operational excellence.
        </p>
      </div>
      <div className="section">
        <h2>Professional Experience</h2>
        <h3>Senior Software Engineer, Motive (formerly KeepTruckin) — San Francisco</h3>
        <p><em>October 2019 - Present</em></p>
        <ul>
          <li>Led IoT platform enhancements, focusing on scalability, reliability, and extensibility, driving key competitive advantages.</li>
          <li>Championed architectural updates and the development of a unified code search portal, significantly improving system performance and developer collaboration.</li>
          <li>Introduced agile practices and educational programs, boosting engineering standards and team productivity.</li>
        </ul>
        <h3>Senior Software Engineer, Fitbit (now part of Google) — San Francisco Bay Area</h3>
        <p><em>January 2018 - September 2019</em></p>
        <ul>
          <li>Managed and optimized critical services during peak periods, ensuring robust system performance and scalability.</li>
          <li>Spearheaded the integration of Google Cloud Platform services, enhancing cloud adaptability and service reliability.</li>
        </ul>
        <h3>Senior Software Engineer, The Meet Group — San Francisco Bay Area</h3>
        <p><em>October 2016 - December 2017</em></p>
        <ul>
          <li>Key player in the integration and overhaul of systems post-acquisition, improving system interoperability and user experience.</li>
          <li>Led technical recruitment and training efforts, significantly enhancing team capabilities and integration processes.</li>
        </ul>
      </div>
      <div className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Java, JavaScript, Ruby, Go</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;