import React from 'react';
import Skill from './Skill';

const Skills = ({skills}) => 
  <section className="skills">
    <ul className="skills__list">
      {
        skills.map((skill, i) => 
          <Skill key={i} skill={skill} />
      )}
    </ul>
  </section>
    

  export default Skills;