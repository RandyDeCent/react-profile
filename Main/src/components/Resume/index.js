import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="https://github.com/RandyDeCent">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>

          <li>CSS</li>

          <li>JavaScript</li>

          <li>jQuery</li>

          <li>responsive design</li>

          <li>React</li>

          <li>Bootstrap</li>

        </ul>

        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs calls</li>

          <li>Node.js</li>

          <li>Express.js</li>

          <li>MySQL noSQL</li>

          <li>Mongoose</li>

          <li>REST</li>
          
          <li>GraphQL</li>

        </ul>
      </div>
    </section>
  );
}

export default Resume;

