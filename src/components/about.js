import React from 'react';

function About() {
  // Define an array of team members with their information
  const teamMembers = [
    {
      name: 'ARan',
      jobTitle: 'Chief Technology Officer',
      education: 'Master\'s in Computer Science, The Ohio State University',
      experience: 'Over 15 years of experience in software development and technology leadership.'
    },
    {
      name: '65536',
      jobTitle: 'Lead Designer',
      education: 'Bachelor\'s in Game Design, The Ohio State University',
      experience: '10 years of experience in graphic design with a talent for turning ideas into visually stunning designs.'
    },
    {
      name: 'Hong',
      jobTitle: 'Marketing Manager',
      education: 'Bachelor\'s in Computer Engineering, The Ohio State University',
      experience: 'Marketing expert with a deep understanding of consumer behavior and a track record of successful campaigns.'
    }
  ];

  return (
    <div className="about-us">
      <h1>About Us</h1>

      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <h2>{member.name}</h2>
          <p><strong>Job Title:</strong> {member.jobTitle}</p>
          <p><strong>Education:</strong> {member.education}</p>
          <p><strong>Experience:</strong> {member.experience}</p>
        </div>
      ))}
    </div>
  );
}

export default About;
