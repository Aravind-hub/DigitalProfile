import React, {Component, Fragment} from 'react';
import {Timeline, Event} from 'react-timeline-scribble';
import './index.css';

class Experience extends Component{
    render(){
        return(
            <Fragment>
                <h1>Professional Summary</h1>
                <Timeline>
                <Event interval={"December 2019 – Present"} title={"IVR Developer"} subtitle={"Tata Consultancy Services"}>
                    <ul>
                        <li>Developed IVR front end call flows using Avaya Aura Orchestrator Designer and JAVA.</li>
                        <li>Triggered the Rest APIs based on the front end inputs and writing logics to handle the JSON response to deliver it in the front end IVR call.</li>
                        <li>Utilized Wiremock to create API mock requests/responses to test the developed call flows.</li>
                        <li>Given walkthrough to scrum team members, scrum master and product owner upon developing the IVR call flows.</li>
                        <li>Making use of GIT/GitHub for version controlling and managing the developed project.</li>
                    </ul>
                </Event>
                </Timeline>
                <Timeline>
                <Event interval={"Feb 2018 – November 2019"} title={"Automation Tester"} subtitle={"Tata Consultancy Services"}>
                    <ul>
                        <li>Picked up regression test cases upon liasing with function test team leads and client SMEs which are suitable for automation and prepared test automation matrix at the beginning of each sprint.</li>
                        <li>Automated IVR call flows using Cyara and created Campaings for regression test suite. Made use of Cyara APIs to trigger the Cyara test cases and campaigns automatically using Rest-Assured tool.</li>
                        <li>Used UFT tool to validate the Cyara test results and update the pass/fail status in ALM automatically, along with the required screenshots.</li>
                        <li>Automated Edge(Desktop Apllication) functionalities using UFT. Integrated UFT with ALM and executed the ALM test cases automatically by creating Jenkins Jobs.</li>
                        <li>Automated Rest API unit testing using Rest-Assured and Cucumber framework. Used Postman tool to validate the API results manually.</li>
                        <li>Given walkthrough to client SMEs upon automating the test cases added in the test automation matrix, get it approved and provided knowledge transfer to regression team to make use of developed automation scripts.</li>
                    </ul>
                </Event>
                </Timeline>
                <Timeline>
                <Event interval={"April 2016 – Jan 2018"} title={"Manual Tester"} subtitle={"Tata Consultancy Services"}>
                    <ul>
                        <li>Performed detailed test scenario/test case design, walk through the prepared test design to Client SMEs to seek approval.</li>
                        <li>Back end log validation of IVR calls and Edge functionalities in the Middleware logs by using putty.</li>
                        <li>Raising defects, Administering and Monitoring defect management process by liaising with development team and make sure they are resolved in timely manner.</li>
                        <li>Produced test results/screenshots & upload to ALM. Capture software product defects in ALM and track it to closure.</li>
                        <li>Prepared Daily Status Report and mailed to client SMEs & other stackholders. Prepared EOTR at the end of testing phase and got it signed off with client SMEs.</li>
                    </ul>
                </Event>
                </Timeline>
                <Timeline>
                <Event interval={"May 2015 - Feb 2016"} title={"Linux Administrator"} subtitle={"Poornam InfoVision (Bobcares)"}>
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