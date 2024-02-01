'use client'
import SkillItem from "@/components/skill-item"
import { Accordion } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Skills() {
  return (
    <div id="skills">
      <div className="container">
        <div className="title-section">
          <h2>Habilidades</h2>
        </div>
        <p className="mb-0 color-blue">Na minha carreira trabalhei com algumas linguagens e frameworks, como Java, PHP, Laravel, WordPress, Angular, Vue, React Native, e etc. Mas as habilidades que tenho mais foco sao essas:</p>

        <div className="row mt-4 d-none d-md-flex">
          <div className="col-12">
            <Tabs
              defaultActiveKey="devlopment"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="devlopment" title="Desenvolvimento/Programação">
                <div className="row">
                  <SkillItem skillsType="devlopment" />
                </div>
              </Tab>
              <Tab eventKey="design" title="Design e prototipagem">
                <div className="row">
                  <SkillItem skillsType="design" />
                </div>
              </Tab>
              <Tab eventKey="videoedit" title="Edição e criação de video">
                <div className="row">
                  <SkillItem skillsType="videoedit" />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

        <div className="row mt-3 d-md-none">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Desenvolvimento/Programação</Accordion.Header>
              <Accordion.Body>
                <SkillItem skillsType="devlopment" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Design e prototipagem</Accordion.Header>
              <Accordion.Body>
                <SkillItem skillsType="design" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Edição e criação de video</Accordion.Header>
              <Accordion.Body>
                <SkillItem skillsType="videoedit" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}