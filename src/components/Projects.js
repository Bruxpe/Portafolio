import { Container,Col,Row, Nav, Tab  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorR from "../Assets/img/colorR.png"
import portada from "../Assets/img/Portada.jpg"
import home from "../Assets/img/index.jpg"
import create from "../Assets/img/create.jpg"

export const Projects =()=>{
    const Projects =[
      
            {
                title: "Portada",
                description: "Pokenon Api",
                imgUrl: portada
            },
            {
                title: "Index Page",
                description: "Pokemon Api",
                imgUrl:home
            },
            {
                title: "Create Page",
                description: "Pokemon Api",
                imgUrl: create
            },
    ];
    return(
        <section className="project" id="projects">
            <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                       
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                                <Nav.Item>
                                        <Nav.Link eventKey="first">Prokemon Api <br></br> React/ Sequealize / Node js</Nav.Link>
                                    </Nav.Item>
                                    
                                    <div className="nav-pills " style={{width:'300px', marginLeft: '30px'}}>Second project: medical page, between patient and doctor. (in progress) </div>
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item> */}
                                    {/* <Nav.Item>
                                        <Nav.Link eventKey="third">Tab three</Nav.Link>
                                    </Nav.Item> */}
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        
                                    </Tab.Pane>
                                    {/* <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                    <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane> */}
                                </Tab.Content>
                        </Nav>
                                        <Row>
                                            {
                                                Projects.map((project, index)=>{
                                                    return(
                                                        <ProjectCard key={index}{...project}/>
                                                    )
                                                })
                                            }
                                        </Row>
                            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            </section>
            <img className="background-image-right" src={colorR}></img>

        </section>
    )
}