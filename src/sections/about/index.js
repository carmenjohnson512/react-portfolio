import React from 'react';
import Particles from 'react-particles-js';
import Progress from 'components/progress';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ThemeContext from '../../context';
import './styles.scss';

class Hero extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>Techie, Mom, Wife, Full Stack web developer</h3>
                            <div className="separator" />
                            <p>
                            I'm a tech professional, singer, wife, mom, and developer living in Austin, TX (hook 'em!) 
                            I love advocating for customers and products, creating music, and coding. Take a look at some of my favorite creations!
                            </p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/carmenjohnson512')}/>
                                <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://twitter.com/carmenj512')} />
                                {/* <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} /> */}
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/carmenjohnson512/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Web Design" value={75} delay={1100} />
                                <Progress name="Frontend Development" value={90} delay={1100} />
                                <Progress name="Backend Development" value={50} delay={1100} />
                                <Progress name="React" value={85} delay={1100} />
                                <Progress name="Redux" value={85} delay={1100} />
                                <Progress name="MongoDB" value={50} delay={1100} />
                                <Progress name="MySQL" value={50} delay={1100} />
                                <Progress name="JavaScript" value={90} delay={1100} />
                                <Progress name="jQuery" value={90} delay={1100} />
                                <Progress name="CSS" value={95} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero;