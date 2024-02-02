import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiGit, DiIntellij } from "react-icons/di";
import "../style/tech-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import {
    DiMongodb,
    DiMysql,
    DiPostgresql
  } from "react-icons/di";
  import {
    SiNeo4J
  } from "react-icons/si";
  
  import {
    DiJavascript1,
    DiPython,
    DiJava,
    DiAndroid,
    DiPhp
  } from "react-icons/di";
  import {
    SiTypescript
  } from "react-icons/si";
  
  import {
    DiReact,
    DiNodejs,
    DiAngularSimple,
    DiDocker,
    DiDjango
  } from "react-icons/di";
  import {
    SiSpringboot,
    SiKubernetes,
    SiNextdotjs,
    SiLaravel,
    SiTravisci,
    SiGithubactions,
    SiHelm,
    SiOctopusdeploy,
    SiIstio
  } from "react-icons/si";
  
  import {
    IoLogoGitlab
  } from "react-icons/io5";
  

function Skills() {


  return (
    <div>
         <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        Programming Languages
      </h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
  <DiJavascript1 style={{ fontSize: "2.5em" }} />
  <p style={{ fontSize: "14px", paddingTop: "1rem" }}>Javascript</p>
</Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>PHP</p>
      </Col>
    </Row>

    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Databases
      </h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiMongodb style={{ fontSize: "2.5em" }}/>
      <p style={{fontSize: "14px", paddingTop: "1rem"}}>MongDB</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiMysql style={{ fontSize: "2.5em" }}/>
      <p style={{fontSize: "14px", paddingTop: "1rem"}}>MySQL</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiPostgresql style={{ fontSize: "2.5em" }}/>
      <p style={{fontSize: "14px", paddingTop: "1rem"}}>PostgreSQL</p>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiNeo4J style={{ fontSize: "2.5em" }}/>
      <p style={{fontSize: "14px", paddingTop: "1rem"}}>Neo4j</p>
    </Col>
  </Row>
  <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Professional Technologies
      </h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>React.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDocker style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Kubernetes</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Helm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOctopusdeploy style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>ArgoCD</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIstio style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Istio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoGitlab style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>GitLab</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Github Actions</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTravisci style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>TravisCI</p>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Laravel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Angular.js</p>
      </Col>
    </Row>

    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Tools I use
      </h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>IntelliJ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ fontSize: "2.5em" }}/>
        <p style={{fontSize: "14px", paddingTop: "1rem"}}>Git</p>
      </Col>
    </Row>
  </div>
  )
}

export default Skills