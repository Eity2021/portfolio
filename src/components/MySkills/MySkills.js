import React from 'react'
import { Container } from 'react-bootstrap'
import Techstack from '../About/Techstack'

export default function MySkills() {
  return (
    <Container fluid className="about-section ">
       <h1 className="project-heading ">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
    </Container>
  )
}
