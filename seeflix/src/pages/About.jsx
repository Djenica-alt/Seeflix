import "./about.css";
export default function About() {
    return(
        <><section className="hero-s">
            <h1>About SeeFlix</h1>
        </section>

        <div className="mission">
            <img src="logoo.png" alt="logo SeeFlix" className="logoMission"/>
            <div className="mission-text">
                <h2>Our Mission</h2>
                <p>Our mission is to make it easy for everyone to discover great content and enjoy their entertainment experience. Whether you're looking for the latest blockbusters or hidden gems, SeeFlix has got you covered!</p>
            </div>
        </div>
        <div className="values">
            <div>
                 <h2>Our Values</h2>
              <ul>
                <li>Quality Content</li>
                <li>User Satisfaction</li>
                <li>Innovation</li>
                <li>Community & Creativity</li>
              </ul>

            </div>
            

            <img src="values.png" alt="Our Values" className="value"/>
        </div>

        </>
    )
}