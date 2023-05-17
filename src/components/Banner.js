import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../Assets/img/headerImg.svg"
import {ArrowRightCircle} from "react-bootstrap-icons"; 
import { useState, useEffect } from "react";
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import { FaJava } from "react-icons/fa";
import git from "../Assets/img/marginalia-programming.gif"


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer", "Web Designer", "Industrial Engineer"];
    const [text, setText]= useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)}
    },[text])

    const tick=()=>{
        let i= loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=> prevDelta /2 )
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >

                        <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible?"animate__animated animate__flash":""}>
                            <span className="tagline">Welcome to my portafolio </span>
                            <h1>{`Hi I'm Bruno G. `}<br></br><span className="wrap">{text}|</span></h1>
                        </div>}
                        </TrackVisibility>

                        <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible?"animate__animated animate__backInLeft":""}>
                            <p>Soy un apasionado del desarrollo web con habilidades en Java, SQL, JavaScript, React, Express, PostgreSQL, Linux básico y MySQL. A través de mi experiencia en el desarrollo de proyectos personales desafiantes, he demostrado mi capacidad para crear soluciones innovadoras y creativas en el mundo digital. Además, tengo habilidades en Excel con macros, lo que me permite automatizar tareas y crear informes precisos y eficientes.Mi formación en Ingeniería Industrial me ha dado una perspectiva única para abordar problemas y encontrar soluciones eficientes y efectivas. Soy un colaborador comprometido y un comunicador efectivo, capaz de trabajar en equipo para lograr los objetivos comunes.</p>
                            <a href="https://wa.me/948011119" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360" alt="WhatsApp" style={{maxWidth: '45px'}}/>
                            </a>  
                        </div>}
                        </TrackVisibility>
                            {/* <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle  size={25}/> </button> */}

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={git} alt="Headder Img"/>    
                    </Col>
                </Row>
            </Container>
        </section> 
    )
}