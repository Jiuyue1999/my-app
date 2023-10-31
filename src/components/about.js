import React from 'react';
import logo from '../images/wang.11537.png';
import logo1 from '../images/zhang.9041.png';
import logo2 from '../images/hongchen.png';

function About() {
  // Define an array of team members with their information
  const teamMembers = [
    {
      name: 'ARan',
      jobTitle: 'Chief Technology Officer',
      education: "Master's in Computer Science, The Ohio State University",
      experience: 'Over 15 years of experience in software development and technology leadership.',
      colorClass: 'bg-primary', // Blue
      imageSrc: logo,
    },
    {
      name: '65536',
      jobTitle: 'Lead Designer',
      education: 'Bachelor\'s in Game Design, The Ohio State University',
      experience: '10 years of experience in graphic design for turning ideas into visuals.',
      colorClass: 'bg-success', // Green
      imageSrc: logo1,
    },
    {
      name: 'Hong',
      jobTitle: 'Marketing Manager',
      education: 'Bachelor\'s in Computer Engineering, The Ohio State University',
      experience: 'Marketing expert with a deep understanding of consumer behavior.',
      colorClass: 'bg-warning', // Yellow
      imageSrc: logo2,
    }
  ];

  return (
    <div className="container">
      <h1 className="mt-4">About Us</h1>

      <div className="scrollable-content" style={{ maxHeight: '500px', overflow: 'auto' }}>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className={`card mb-4 ${member.colorClass}`}>
                <div className="image-container">
                  <img src={member.imageSrc} alt={member.name} className="img-fluid" width="300" height="200" />
                </div>
                <div className="card-body">
                  <h2 className="card-title text-white">{member.name}</h2>
                  <p className="card-text text-white"><strong>Job Title:</strong> {member.jobTitle}</p>
                  <p className="card-text text-white"><strong>Education:</strong> {member.education}</p>
                  <p className="card-text text-white"><strong>Experience:</strong> {member.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
