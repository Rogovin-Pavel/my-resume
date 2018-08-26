import React from 'react';
import Star from './Star';

const Skill = ({skill}) =>
  <li className="skills__item">
    <p>{skill.title}</p>
    <Star {...skill} />
  </li>

  export default Skill;