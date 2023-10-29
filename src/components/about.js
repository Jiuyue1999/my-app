import React from 'react';

function About() {
  // Define an array of team members with their information
  const teamMembers = [
    {
      name: 'ARan',
      jobTitle: 'Chief Technology Officer',
      education: 'Master\'s in Computer Science, The Ohio State University',
      experience: 'Over 15 years of experience in software development and technology leadership.',
      colorClass: 'bg-primary', // Blue
    },
    {
      name: '65536',
      jobTitle: 'Lead Designer',
      education: 'Bachelor\'s in Game Design, The Ohio State University',
      experience: '10 years of experience in graphic design with a talent for turning ideas into visually stunning designs.',
      colorClass: 'bg-success', // Green
    },
    {
      name: 'Hong',
      jobTitle: 'Marketing Manager',
      education: 'Bachelor\'s in Computer Engineering, The Ohio State University',
      experience: 'Marketing expert with a deep understanding of consumer behavior and a track record of successful campaigns.',
      colorClass: 'bg-warning', // Yellow
    }
  ];

  return (
    <div className="container">
      <h1 className="mt-4">About Us</h1>

      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4">
            <div className={`card mb-4 ${member.colorClass}`}>
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
  );
}

export default About;
