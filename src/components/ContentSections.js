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
          {TimelineItem(...API.getMyEducation())}
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
          {TimelineItem(...API.getMyExp1())}

          {TimelineItem(...API.getMyExp2())}
        </ol>
      </section>
    </>
  )
}

export function SkillsSections() {
  const [techSkills, setTechSkills] = useState('');
  const [softSkills, setSoftSkills] = useState('');
  const [langSkills, setLangSkills] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTechSkills = await API.getTechskills();
        const fetchedSoftSkills = await API.getSoftskills();
        const fetchedLangSkills = await API.getLangskills();
        setTechSkills(fetchedTechSkills);
        setSoftSkills(fetchedSoftSkills);
        setLangSkills(fetchedLangSkills);
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

        {ListOfDemos(API.getSomeCode())}
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
  return (
    <>
      <section class="about-text">
        <h3 class="h3 service-title">Certificates</h3>
        {API.getCertificates()}
      </section>

      <section class="about-text">
        <h3 class="h3 service-title">Awards</h3>
        {API.getAwards()}
      </section>

      <section class="about-text">
        <h3 class="h3 service-title">Publication</h3>
        {API.getPublication()}
      </section>
    </>
  )
}

export function CreditSections() {
  return <section class="about-text">{API.getCredit()}</section>
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
  return (
    <ul className="skills-list content-card">
      {listofDemos.map((item, index) => (
        <li className="skills-item" key={item[1]}>
          <a href={item[1]} style={{ textDecoration: 'none' }}>
            <div className="title-wrapper" style={{ transition: 'background-color 0.3s' }}>
              <h5 className="h5" style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                <span style={{ marginRight: '0.5em' }}>{item[0]}</span>
                <span style={{ marginLeft: 'auto' }}>➔</span>
              </h5>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}


function TimelineItem(title, subtitle, time, ...contents) {
  return (
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">
        {title}
      </h4>
      <h5 class="h5 timeline-item-title">
        {subtitle}
      </h5>
      <span>{time}</span>

      {Object.values(contents).map((content, index) => (
          <p key={index} className="timeline-text">{content}</p>
      ))}
    </li>
  );
}