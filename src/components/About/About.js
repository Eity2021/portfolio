import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function About() {
   const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 95 },
    { name: "Javascript", level: 90 },
    { name: "React", level: 90 },
    { name: "Next", level: 80 },
    { name: "TypeScript", level: 50 },
    { name: "Node", level: 50 },
    { name: "Express", level: 60 },
    { name: "Mongodb", level: 50 },
    { name: "Photoshop", level: 60 },
    { name: "Illustrator", level: 60 },
    { name: "Figma", level: 50 },
    { name: "Github version", level: 70 },
    { name: "Docker", level: 50 },

  ];
  return (
    <main className="min-h-screen  text-white p-4 md:p-8 lg:p-16" style={{background:'#0c0c0c'}}>
      <Container className="max-w-6xl mx-auto">
        <h1 className="text-start font-bold"  style={{marginBottom:"70px", marginTop:'70px' , fontSize:"70px"}}>About me</h1>

        <hr className="my-8 bg-gray-700" />

        <Row style={{marginBottom:'150px',marginTop:'100px'}}>
          <Col md={6}>
            <h2 className="text-start  text-2xl md:text-3xl font-light">about my self</h2>
          </Col>
          <Col md={6}>
            <p className="text-start text-base md:text-lg" style={{fontSize:"16px"}}>
              I&apos;m a passionate Frontend Engineer with a strong focus on building dynamic and user-friendly web
              applications. My journey began with HTML, CSS, and JavaScript, and I hold a B.Sc. in Computer Science.
              Currently, I&apos;m excelling at Kompass Technology Limited, where I specialize in the MERN stack
              (MongoDB, Express.js, React, Node.js) along with MySQL. I&apos;m always eager to learn, grow, and bring
              ideas to life through clean, efficient code.
            </p>
          </Col>
        </Row>

        <Row className="mb-16">
          <Col md={6}>
            <h2 className="text-start text-2xl md:text-3xl font-light">Skills</h2>
          </Col>
          <Col md={6}>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="d-flex justify-content-between" style={{marginTop:'10px'}}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar now={skill.level} style={{height:'6px ', marginTop:"30px"}} variant="bg-white" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row style={{marginBottom:'50px',marginTop:'100px'}}>
          <Col md={6}>
            <h2 className="text-start text-2xl md:text-3xl font-light">services</h2>
          </Col>
          <Col md={6}>
            <div className="space-y-6">
              <p className="text-start text-base md:text-lg" style={{fontSize:"20px"}}>
              Responsive Website Design
            </p>
            <hr className="my-2 bg-gray-700" />
              <p className="text-start text-base md:text-lg" style={{fontSize:"16px"}}>
            Designing responsive websites that adapt seamlessly to all devices, ensuring user-friendly 
            experiences, modern layouts, and mobile-first performance with efficiency.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;
