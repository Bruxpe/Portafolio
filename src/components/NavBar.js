import { useEffect, useState } from "react"
import { Navbar, Container,Nav } from "react-bootstrap"
import logo from "../Assets/img/logo.png"
import faceboook from "../Assets/img/facebook.png"
import  github from "../Assets/img/github.png"
import linkendin from "../Assets/img/linkendin.png"
import cv  from "./CV_Gonzales_Bruno.pdf"


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY >50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink =(value)=>{


        setActiveLink(value); 
        
    }

 return(
    <Navbar expand="md" className={scrolled ? "scrolled":""}>
        <Container>
       
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink ==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Homes</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink ==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink ==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.facebook.com/bruno.gonzales.58a"><img src={faceboook} alt="" /></a>
                        <a href="https://github.com/Bruxpe"><img src={github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/bruno-gonzales-lorena-1110131b8/"><img src={linkendin} alt="" /></a>
                    </div>
                    <a href={cv} download>
                    <button className="cv" ><span>Descargar Cv</span></button>
                    </a>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
 )
} 