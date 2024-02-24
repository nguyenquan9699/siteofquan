import '../assets/css/style.css'
import * as API from '../assets/js/query'

export function AboutSections() {
  return (
    <>
      <section class="about-text">{API.getIntro()}</section>

      <section class="about-text">
        <h3 class="h3 service-title">What I can provide?</h3>
        {ListOfService(API.getMyServices())}
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
  return (
    <>
      <section class="skill">
        <h3 class="h3 skills-title">Technical skills</h3>

        {ListOfSkills(API.getTechskills())}
      </section>

      <br></br>

      <section class="skill">
        <h3 class="h3 skills-title">More details</h3>

        {ListOfDemos(API.getSomeCode())}
      </section>

      <br></br>

      <section class="skill">
        <h3 class="h3 skills-title">Soft skills</h3>

        {ListOfSkills(API.getSoftskills())}
      </section>

      <br></br>

      <section class="skill">
        <h3 class="h3 skills-title">Languages</h3>

        {ListOfSkills(API.getLangskills())}
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
  return (
    <ul className="skills-list content-card" style={{cursor: 'default'}}>
      {listOfSkills.map((skill, index) => (
        <li key={index} className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">{skill}</h5>
          </div>
        </li>
      ))}
    </ul>
  )
}

function ListOfService(listOfServices) {
  return (
    <ol class="timeline-list">
      {listOfServices.map((service) => (
      <li class="timeline-item">
        <h4 class="timeline-text">
          {service}
        </h4>
      </li>
      ))}
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