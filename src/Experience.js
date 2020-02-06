import React, {Component, Fragment} from 'react';
import {Timeline, Event} from 'react-timeline-scribble';
import './index.css';

class Experience extends Component{
    render(){
        return(
            <Fragment>
                <h1>Professional Summary</h1>
                <Timeline>
                <Event interval={"April 2016 – Present"} title={"System Engineer"} subtitle={"Tata Consultancy Services"}>
                    <ul>
                        <li>Performed detailed test scenario/test case design, walk through the prepared test design to Client SMEs to seek approval and based on the SMEs approval executed test cases as per the priority.</li>
                        <li>Involved in Test Automation (Automated regression test cases using UFT and Cyara), Test Execution (System Integration Testing, Functional testing and Regression testing) and Test Design (Test Scenario, Test Case preparation and test Case Walk- Through to clients), RTM and EOTR preparation.</li>
                        <li>Back end log validation of IVR calls and Edge functionalities in the Middleware logs by using putty.</li>
                        <li>Raising defects, Administering and Monitoring defect management process by liaising with development team and make sure they are resolved in timely manner.</li>
                        <li>Automated regression test cases and delivered the same to regression team along with KT.</li>
                        <li>Developing IVR front end call flows using AAOD and JAVA. Utilizing Wiremock responses to test the developed call flows.</li>
                    </ul>
                </Event>
                </Timeline>
                <Timeline>
                <Event interval={"May 2015 - Feb 2016"} title={"Jr.Software Engineer"} subtitle={"Poornam InfoVision (Bobcares)"}>
                    <ul>
                        <li>Worked for Web Hosting client and as per the orders, provisioned Virtual Private Server(VPS) both Windows and Linux servers using VMware.</li>
                        <li>Managed the billing system for the client and the support facility (Chats and Tickets) available in the Hosting Website.</li>
                        <li>Along with server provisioning; performed server migration, backups, password management, configuration management, tools installation like Wordpress, Joomla, etc. and other relatives activities.</li>
                        <li>Responded to all customer requests according to defined SLAs, ensured with accuracy and customer satisfaction.</li>
                    </ul>
                </Event>
                </Timeline>
            </Fragment>
        )
    }
}

export default Experience;