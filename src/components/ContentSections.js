import '../assets/css/style.css'
import * as API from '../assets/js/query'
import React, { useState, useEffect } from 'react';

export function AboutSections() {
  const [intro, setIntro] = useState('');
  const [services, setServices] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedIntro = await API.getIntro();
        const fetchedServices = await API.getMyServices();
        setIntro(fetchedIntro);
        setServices(fetchedServices);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchData();
  }, []);
  const introParagraphs = intro.split('\\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));
  return (
    <>
      <section class="about-text">{introParagraphs}</section>

      <section class="about-text">
        <h3 class="h3 service-title">What I can provide?</h3>
        {ListOfService(services)}
      </section>
    </>
  )
}

export function ResumeSections() {
  const [education1, setEducation1] = useState('');
  const [exp1, setExp1] = useState('');
  const [exp2, setExp2] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEdu1 = await API.getMyEducation();
        const fetchedExp1 = await API.getMyExp1();
        const fetchedExp2 = await API.getMyExp2();
        setEducation1(fetchedEdu1);
        setExp1(fetchedExp1);
        setExp2(fetchedExp2);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box" style={{ background: '#CEB152' }}>
            <ion-icon
              name="book-outline"
              role="img"
              class="md hydrated"
              aria-label="book outline"
            ></ion-icon>
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
          {TimelineItem(education1)}
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box" style={{ background: '#CEB152' }}>
            <ion-icon
              name="book-outline"
              role="img"
              class="md hydrated"
              aria-label="book outline"
            ></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          {TimelineItem(exp1)}

          {TimelineItem(exp2)}
        </ol>
      </section>
    </>
  )
}

export function SkillsSections() {
  const [techSkills, setTechSkills] = useState('');
  const [softSkills, setSoftSkills] = useState('');
  const [langSkills, setLangSkills] = useState('');
  const [demos, setDemos] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTechSkills = await API.getTechskills();
        const fetchedSoftSkills = await API.getSoftskills();
        const fetchedLangSkills = await API.getLangskills();
        const fetchedDemos = await API.getSomeCode();
        setTechSkills(fetchedTechSkills);
        setSoftSkills(fetchedSoftSkills);
        setLangSkills(fetchedLangSkills);
        setDemos(fetchedDemos);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      <section class="skill">
        <h3 class="h3 skills-title">Technical skills</h3>

        {ListOfSkills(techSkills)}
      </section>

      <br></br>

      <section class="skill">
        <h3 class="h3 skills-title">More details</h3>

        {ListOfDemos(demos)}
      </section>

      <br></br>

      <section class="skill">
        <h3 class="h3 skills-title">Soft skills</h3>

        {ListOfSkills(softSkills)}
      </section>

      <br></br>

      <section class="skill">
        <h3 class="h3 skills-title">Languages</h3>

        {ListOfSkills(langSkills)}
      </section>
    </>
  )
}

export function AchievementsSections() {
  const [awards, setAwards] = useState('');
  const [publication, setPublication] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAwards = await API.getAwards();
        const fetchedPublication = await API.getPublication();
        setAwards(fetchedAwards);
        setPublication(fetchedPublication);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section class="about-text">
        <h3 class="h3 service-title">Certificates</h3>
        {API.getCertificates()}
      </section>

      <section class="about-text">
        <h3 class="h3 service-title">Awards</h3>
        {awards}
      </section>

      <section class="about-text">
        <h3 class="h3 service-title">Publication</h3>
        {publication}
      </section>
    </>
  )
}

export function CreditSections() {
  const [credit, setCredit] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCredit = await API.getCredit();
        setCredit(fetchedCredit);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchData();
  }, []);
  return <section class="about-text">{credit}</section>
}

function ListOfSkills(listOfSkills) {
  const skillItems = [];
  for (let i = 0; i < listOfSkills.length; i++) {
    skillItems.push(
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">{listOfSkills[i]}</h5>
        </div>
      </li>
    );
  }
  return (
    <ul className="skills-list content-card" style={{cursor: 'default'}}>
      {skillItems}
    </ul>
  )
}

function ListOfService(listOfServices) {
  const serviceItems = [];
  for (let i = 0; i < listOfServices.length; i++) {
    serviceItems.push(
      <li className="timeline-item" key={i}>
        <h4 className="timeline-text">
          {listOfServices[i]}
        </h4>
      </li>
    );
  }
  return (
    <ol className="timeline-list">
      {serviceItems}
    </ol>
  )
}

function ListOfDemos(listofDemos) {
  const serviceItems = [];
  for (let i = 0; i < listofDemos.length; i++) {
    serviceItems.push(
      <li className="skills-item" key={listofDemos[i]['title']}>
        <a href={listofDemos[i]['url']} style={{ textDecoration: 'none' }}>
          <div className="title-wrapper" style={{ transition: 'background-color 0.3s' }}>
            <h5 className="h5" style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
              <span style={{ marginRight: '0.5em' }}>{listofDemos[i]['title']}</span>
              <span style={{ marginLeft: 'auto' }}>➔</span>
            </h5>
          </div>
        </a>
      </li>
    );
  }
  return (
    <ul className="skills-list content-card">
      {serviceItems}
    </ul>
  );
}


function TimelineItem(data) {
  const timeLineParagraphs = data && data['content'] ? 
    data['content'].split('\\n').map((line, index) => (
        <p key={index} className="timeline-text">{line}</p>
    )) : [];
  return (
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">
        {data['title']}
      </h4>
      <h5 class="h5 timeline-item-title">
        {data['subtitle']}
      </h5>
      <span>{data['time']}</span>
      {timeLineParagraphs}
    </li>
  );
}