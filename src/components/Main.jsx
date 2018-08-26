import React from 'react';

import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Main = (data) => 

  <main className="resume-main">
    <Sidebar />
    <MainContent {...data}/>
  </main>


export default Main;