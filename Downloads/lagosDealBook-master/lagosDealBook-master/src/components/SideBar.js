import React from 'react';
import gptLogo from '../assets/lagosLogo.jpg';

export default function Sidebar() {

 
  return (
    <div className="sideBar" > {/* Add 'open' class to display sidebar */}
      <div className="upperSide">
        <div className="upperSideTop">
          <img src={gptLogo} alt="logo" className="logo" />
          <span className="brand">LagosinvestGPT</span>
        </div>
        
        <div className="upperSideBottom">
          <button className="query">KNOW MORE ABOUT INVESTMENTS IN LAGOS</button>
          <button className="query">ASK ABOUT INVESTMENTS IN LAGOS</button>
        </div>
      </div>
    </div>
  );
}
