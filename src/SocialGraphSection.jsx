import React from 'react';
import "./SocialGraphSection.css";
import SocialGraph from './SocialGraph';
import ChartDemo from './test_highcharts';


export default function SocialsGraph() {
    return(
        <div className='socialGraphSection'>
            <SocialGraph/>
            <ChartDemo/>
        </div>
    )
}