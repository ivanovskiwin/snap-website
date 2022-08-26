import React from "react";
import './Home.css';
function Home(){

    return (
        <section className="main">
            <div className="content">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <a className="learnMoreButton" href='#'>Learn more</a>
                <div className="sponsorsContainer">
                    <img src='/assets/images/client-databiz.svg' alt='databiz'/>
                    <img src='/assets/images/client-audiophile.svg' alt='audiophile'/>
                    <img src='/assets/images/client-meet.svg' alt='meet'/>
                    <img src='/assets/images/client-maker.svg' alt='maker'/>
                </div>
            </div>
            <div className="imageContainer">
                <img src='/assets/images/image-hero-desktop.png' alt='heroimage'/>
            </div>
        </section>
    );
}

export default Home;