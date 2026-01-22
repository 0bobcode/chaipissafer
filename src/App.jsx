import React,
 { useState,
   useEffect } from 'react';
import { Camera,
   User,
   Sprout } from 'lucide-react'

// This component "Reactifies" the GenAI logic
function App() {
  
  const students = {
    'Bob': { 'age': 9,
       'grade': 9,
       'English': 'IXL',
       'Math': 'Cuemath',
       'Comp-sci': 'MIT',
       'Genetic Engineering': 'IISC',
       'Certificate(s)': { 1: 'Stanford Computer Science 101',
       2: 'Harvard Introduction to Computer Science',
       3: 'MIT Becoming an Entrepreneur',
       4: 'Introduction to Computer science | MIT',
       5: 'CS50s Introduction to Programing with Python',
       6: 'CS50s Introduction to Artificial Intelligence',
       7: 'CS50s Introduction to Web Development',
       8: 'Wharton Entrepreneurship 1: Innovation Development',
       9: 'Wharton Entrepreneurship 2: Lab to Market',
       10: 'Wharton Entrepreneurship 3: Growth Strategies',
       11: 'Wharton Entrepreneurship 4: Financing and Profitability',
       12: 'Wharton Capstone',
       13: 'Machine Learning from Harvard' } },


    'Max': { 'age': 7,
       'grade': 7,
       'English': 'IXL',
       'Math': 'Cuemath',
       'Compsci': 'Harvard',
       'Certificates': { 1: 'Introduction to Computer Science Stanford',
       2: 'Introduction to programming with scratch MIT',
       3: 'Fullstack Honors From Duke University',
       4: 'Introduction to programming with Python | MIT',
       5: 'MIT Becoming an Entrepreneur',
       6: 'Wharton Entrepreneurship 1: Innovation Development' } },


    'Lilly': { 'age': 6,
       'grade': 1,
       'English': 'IXL',
       'Math': 'Cuemath',
       'Compsci': 'Harvard',
       'Certificates': { 1: 'Scratch',
       2: 'Intro to comp-sci',
       3: 'Harvard somethings' } },


    // 20 new students
    'Alex': { 'age': 10,
       'grade': 10,
       'English': 'IXL',
       'Math': 'Khan Academy',
       'Comp-sci': 'Stanford',
       'Physics': 'MIT',
       'Certificates': { 1: 'Stanford Algorithms Specialization',
       2: 'MIT Introduction to Computational Thinking',
       3: 'Python for Data Science | IBM',
       4: 'Web Development Bootcamp',
       5: 'AI For Everyone | DeepLearning.AI' } },


    'Sophia': { 'age': 8,
       'grade': 8,
       'English': 'Duolingo',
       'Math': 'Cuemath',
       'Comp-sci': 'Harvard',
       'Art': 'RISD',
       'Certificates': { 1: 'Creative Coding with p5.js',
       2: 'Digital Painting Fundamentals',
       3: 'Harvard CS50',
       4: 'Introduction to Game Development' } },


    'Ethan': { 'age': 11,
       'grade': 11,
       'English': 'IXL',
       'Math': 'Brilliant',
       'Comp-sci': 'MIT',
       'Robotics': 'CMU',
       'Certificates': { 1: 'MIT Robotics: Science and Systems',
       2: 'Self-Driving Cars Specialization',
       3: 'ROS for Beginners',
       4: 'Advanced Python Programming',
       5: 'Computer Vision Basics' } },


    'Mia': { 'age': 9,
       'grade': 9,
       'English': 'IXL',
       'Math': 'Cuemath',
       'Comp-sci': 'Stanford',
       'Biology': 'Johns Hopkins',
       'Certificates': { 1: 'Bioinformatics Specialization',
       2: 'Python for Genomic Data Science',
       3: 'Introduction to Genetics',
       4: 'Data Science in Healthcare' } },


    'Noah': { 'age': 7,
       'grade': 7,
       'English': 'Khan Academy',
       'Math': 'IXL',
       'Comp-sci': 'MIT',
       'Music': 'Berklee',
       'Certificates': { 1: 'Music Production with Python',
       2: 'Digital Music Programming',
       3: 'MIT Scratch Programming',
       4: 'Introduction to Sound Design' } },


    'Olivia': { 'age': 12,
       'grade': 12,
       'English': 'IXL',
       'Math': 'Cuemath',
       'Comp-sci': 'Harvard',
       'Business': 'Wharton',
       'Certificates': { 1: 'Harvard Business Analytics',
       2: 'Digital Marketing Specialization',
       3: 'Data-Driven Decision Making',
       4: 'Entrepreneurial Finance' } },


    'Liam': { 'age': 8,
       'grade': 8,
       'English': 'Duolingo',
       'Math': 'Brilliant',
       'Comp-sci': 'Stanford',
       'Astronomy': 'Caltech',
       'Certificates': { 1: 'Data Science Astronomy',
       2: 'Python for Astronomy',
       3: 'Machine Learning in Space Science',
       4: 'Introduction to Astrophysics' } },


    'Ava': { 'age': 10,
       'grade': 10,
       'English': 'IXL',
       'Math': 'Cuemath',
       'Comp-sci': 'MIT',
       'Chemistry': 'UC Berkeley',
       'Certificates': { 1: 'Computational Chemistry',
       2: 'Python for Chemical Engineers',
       3: 'Data Analysis in Chemistry',
       4: 'Bioinformatics Fundamentals' } },


    'Lucas': { 'age': 9,
       'grade': 9,
       'English': 'Khan Academy',
       'Math': 'IXL',
       'Comp-sci': 'Harvard',
       'Sports Science': 'Stanford',
       'Certificates': { 1: 'Sports Analytics with Python',
       2: 'Data Science in Sports',
       3: 'Statistics for Sports Analysis',
       4: 'Performance Tracking Systems' } },


    'Isabella': { 'age': 11,
       'grade': 11,
       'English': 'IXL',
       'Math': 'Brilliant',
       'Comp-sci': 'MIT',
       'Environmental Science': 'Yale',
       'Certificates': { 1: 'Climate Change Data Analysis',
       2: 'GIS and Remote Sensing',
       3: 'Sustainable Energy Systems',
       4: 'Environmental Data Science' } },


    'Mason': { 'age': 7,
       'grade': 7,
       'English': 'Duolingo',
       'Math': 'Cuemath',
       'Comp-sci': 'Stanford',
       'Game Design': 'USC',
       'Certificates': { 1: 'Unity Game Development',
       2: 'C# Programming for Games',
       3: 'Game Design Principles',
       4: '3D Modeling Basics' } },


    'Charlotte': { 'age': 10,
       'grade': 10,
       'English': 'IXL',
       'Math': 'Khan Academy',
       'Comp-sci': 'Harvard',
       'Psychology': 'Princeton',
       'Certificates': { 1: 'Data Science in Psychology',
       2: 'Cognitive Science Computing',
       3: 'Statistical Analysis for Social Sciences',
       4: 'Research Methods with Python' } },


    'Elijah': { 'age': 12,
       'grade': 12,
       'English': 'IXL',
       'Math': 'Brilliant',
       'Comp-sci': 'MIT',
       'Economics': 'Chicago',
       'Certificates': { 1: 'Econometrics with Python',
       2: 'Financial Data Analysis',
       3: 'Algorithmic Trading Basics',
       4: 'Economic Forecasting Models' } },


    'Amelia': { 'age': 8,
       'grade': 8,
       'English': 'Duolingo',
       'Math': 'Cuemath',
       'Comp-sci': 'Stanford',
       'Linguistics': 'MIT',
       'Certificates': { 1: 'Natural Language Processing',
       2: 'Computational Linguistics',
       3: 'Speech Recognition Systems',
       4: 'Language Data Analysis' } },


    'James': { 'age': 9,
       'grade': 9,
       'English': 'IXL',
       'Math': 'Khan Academy',
       'Comp-sci': 'Harvard',
       'Architecture': 'Cornell',
       'Certificates': { 1: 'Computational Design',
       2: 'Python for Architects',
       3: '3D Printing and CAD',
       4: 'Sustainable Building Analytics' } },


    'Harper': { 'age': 11,
       'grade': 11,
       'English': 'IXL',
       'Math': 'Brilliant',
       'Comp-sci': 'MIT',
       'Fashion Tech': 'Parsons',
       'Certificates': { 1: 'Wearable Technology',
       2: 'Fashion Data Analytics',
       3: '3D Fashion Design',
       4: 'Sustainable Fashion Tech' } },


    'Benjamin': { 'age': 10,
       'grade': 10,
       'English': 'Duolingo',
       'Math': 'Cuemath',
       'Comp-sci': 'Stanford',
       'Agriculture': 'UC Davis',
       'Certificates': { 1: 'Precision Agriculture Tech',
       2: 'Drone Data Analysis',
       3: 'IoT in Agriculture',
       4: 'Farm Management Systems' } },


    'Evelyn': { 'age': 7,
       'grade': 7,
       'English': 'IXL',
       'Math': 'Khan Academy',
       'Comp-sci': 'Harvard',
       'Marine Biology': 'Scripps',
       'Certificates': { 1: 'Ocean Data Science',
       2: 'Marine Robotics',
       3: 'Underwater Sensor Networks',
       4: 'Coastal Analytics' } },


    'Daniel': { 'age': 11,
       'grade': 11,
       'English': 'IXL',
       'Math': 'Brilliant',
       'Comp-sci': 'MIT',
       'Medicine': 'Harvard Medical',
       'Certificates': { 1: 'Medical Data Analysis',
       2: 'Healthcare AI Applications',
       3: 'Biomedical Signal Processing',
       4: 'Clinical Trial Analytics' } },


    'Abigail': { 'age': 9,
       'grade': 9,
       'English': 'Duolingo',
       'Math': 'Cuemath',
       'Comp-sci': 'Stanford',
       'Journalism': 'Columbia',
       'Certificates': { 1: 'Data Journalism',
       2: 'News Analytics',
       3: 'Social Media Data Analysis',
       4: 'Digital Storytelling Tech' } },


    'Logan': { 'age': 8,
       'grade': 8,
       'English': 'IXL',
       'Math': 'Khan Academy',
       'Comp-sci': 'Harvard',
       'Urban Planning': 'MIT',
       'Certificates': { 1: 'Smart City Analytics',
       2: 'Urban Data Science',
       3: 'Transportation Systems Analysis',
       4: 'City Planning Algorithms' } },


    'Emily': { 'age': 10,
       'grade': 10,
       'English': 'IXL',
       'Math': 'Brilliant',
       'Comp-sci': 'MIT',
       'Archaeology': 'Oxford',
       'Certificates': { 1: 'Digital Archaeology',
       2: 'GIS for Historical Sites',
       3: '3D Reconstruction Tech',
       4: 'Cultural Heritage Analytics' } }
  };
  const studentArray = Object.entries(students);
  return (
    <span>
      
      <h1><Sprout /> Ivyschool.ai</h1>
      <div>
        <h2><User/>Hello Bob</h2>
        <h1 >My courses</h1>
        <div class='hidden'>
          <h1>Aws cloud practiontioner</h1>
          <button><a href="https://meet.google.com/hnn-iwpe-zbg?ijlm=1768897733221&hs=185">Continue class</a></button>
        </div>
      </div>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Programs</th>
            <th>Certificates</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(students).map(([name, data]) => {
            // Extract non-certificate fields
            const { Certificates, Certificate, ...fields } = data;
            return (
              <tr key={name}>
                <td>{name}</td>
                <td>{data.age}</td>
                <td>{data.grade}</td>
                <td>
                  {/* render key → value pairs like English: IXL */}
                  <ul style={{ margin: 0, paddingLeft: "15px" }}>
                    {Object.entries(fields)
                      .filter(([k]) => k !== "age" && k !== "grade")
                      .map(([k, v]) => (
                        <li key={k}>
                          <strong>{k}:</strong> {v}
                        </li>
                      ))}
                  </ul>
                </td>
                <td>
                  <ul style={{ margin: 0, paddingLeft: "15px" }}>
                    {Object.entries(data.Certificates || data["Certificate(s)"] || {})
                      .map(([i, cert]) => (
                        <li key={i}>{cert}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </span>
  );

  console.log(`hi ${students.slam}`)
  console.error(`error: ${error}`)
 
  
};

export default App;
