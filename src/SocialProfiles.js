import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){
        const {image, link} = this.props.socialProfile;
        return(
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{width:35, height:35, margin:5}} /></a>
            </span>
        )
    }
}

class SocialProfiles extends Component{
    
    render(){
        return(
            <social>
            <section id="sociaprofile">
                <div>
                    <h2>Connect with me!</h2>
                    <div>
                        {
                            SOCIAL_PROFILES.map(SOCIAL_PROFILE=>{
                                return(
                            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        );
                    })
                }
                    </div>
                </div>
            </section>
            </social>

            
        )
    }
}


export default SocialProfiles;