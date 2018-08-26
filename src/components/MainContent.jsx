import React from 'react';
import Skills from './Skills';

const MainContent = (data) =>

  <section className="main-content">
    <Skills {...data}/>  
  </section>

export default MainContent;