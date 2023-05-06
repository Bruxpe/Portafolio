import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mySql from "../Assets/img/MySql.png";
import react from "../Assets/img/react.png";
import javaS from "../Assets/img/javaSS.png"
import java from "../Assets/img/java.png"
import python from "../Assets/img/python.png"
import colorS from "../Assets/img/coloS.png";
import posgrest from "../Assets/img/posgrest.png"
import node from "../Assets/img/nodes.png"
import sequelize from "../Assets/img/seque.png"
import { FaJava } from "react-icons/fa";


export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna vel eros varius consectetur. Maecenas sagittis lectus vel bibendum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eleifend urna sed velit tempor dignissim. Mauris euismod, tortor vitae ultrices commodo, quam augue suscipit mi, sit amet sagittis nulla sapien eu augue. Nam auctor interdum mauris, eget ullamcorper nulla consequat vel. Proin molestie dui quis eros finibus, quis pulvinar massa semper. Aliquam commodo nibh ac mauris luctus, quis pellentesque dolor malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p> */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">    
                                    <img src={mySql} alt="Image"/>
                                    <h5>MySQL </h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={javaS} alt="Image"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Image"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={posgrest} alt="Image"/>
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={sequelize} alt="Image"/>
                                    <h5>Sequelize</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Image"/>
                                    <h5>Node</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorS} />
        </section>
      )
}