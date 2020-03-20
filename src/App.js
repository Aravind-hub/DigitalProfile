import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.jpg'
import RewardsandAchievements from './RewardsandAchievements';
import Experience from './Experience';

class App extends Component {
    state = {displayBio: false};

    // constructor(){
    //     super();
    //     this.state = {displayBio:false};
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio});
    }

    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Aravind Rajendran</h1>
                <h1>Automation Engineer/IVR UI Developer</h1>
                <p>Looking for development projects in technologies such as Java, ReactJs, RPA, Test Automation Frameworks and Spring Boot</p>
                {
                    this.state.displayBio?(
                        <div>
                            <p>Completed my degree - B.Tech IT in 2015 at Adithya Institute of Technlogy, Coimbatore.</p>
                            <p>Passionate towards Automation and interested in learning new automation tools/technologies. Done various POCs along with the journey of automation, demonstrated successfully to clients and implemented in my projects. Currently I am into IVR UI development, where I am working with tools like Avaya Aura Orchestratioon Designer. </p> 
                            <p>Certified Automation Anywhere Essential RPA Professional and Bot Developer.</p>
                            <p>Currently I am working for Tata Consultancy Services at Chennai for past 3.8 years with overall technical experience of 4years and 6 months</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <RewardsandAchievements />
                <hr />
                <Experience />
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}
export default App;