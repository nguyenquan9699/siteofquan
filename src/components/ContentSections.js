import '../assets/css/style.css'
import * as API from '../assets/js/query'

export function AboutSections() {
  return (
    <>
      <section class="about-text">{API.getIntro()}</section>

      <section class="about-text">
        <h3 class="h3 service-title">What I can provide?</h3>
        {API.getMyServices()}
      </section>
    </>
  )
}

export function ResumeSections() {
  return (
    <>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
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
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Ho Chi Minh City University of Science
            </h4>
            <h5 class="h5 timeline-item-title">
              Honors Program, Faculty of Information Technology
            </h5>
            <span>2017 — 2022</span>

            <p class="timeline-text">
              <ul>
                <li>
                  + Participated in scientific research and published paper:
                  Security Issues in Android Application Development and Plug-in
                  for Android Studio to Support Secure Programming
                </li>
                <li>+ Some mini-projects: Demos</li>
                <li>
                  + Graduation project: Android Studio Static Code Analysis
                  Plugin 9Fix
                </li>
              </ul>
            </p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
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
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Junior Flutter Developer - NOA Experience Colombia
            </h4>

            <span>May 2023 — Present</span>

            <p class="timeline-text">
              During this time, I've learned to work with technologies like
              Riverpod, BLoC, Freezed, JsonSerializable, and I've delved into
              clean architecture, implemented animations, and worked with
              websockets and streams. Every day is an opportunity to grow and
              learn as I build solutions in the exciting world of mobile
              programming.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Mine Operations Supervisor - Alpayana Mining Company
            </h4>

            <span>Oct 2021 — Jan 2023</span>

            <p class="timeline-text">
              In my role as a Mine Operations Supervisor, I had the
              responsibility of leading and coordinating the daily activities of
              the team of workers under my supervision. I worked closely with
              the production staff to ensure efficient and safe mining
              operations.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Planning and Productivity - Volcan Mining Company
            </h4>

            <span>Sep 2019 — Sep 2021</span>

            <p class="timeline-text">
              During my time at the company, I played a key role in cost
              reduction by implementing effective measures to decrease
              explosives consumption in mining operations. My focus was on
              optimizing blasting processes by applying innovative techniques
              and efficient strategies.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Mining Planning - Buenaventura Mining Company
            </h4>

            <span>Nov 2018 — Aug 2019</span>

            <p class="timeline-text">
              I developed and created computer applications using Python in the
              mining software Minesight to automate block handling. Improved
              efficiency and precision in mining planning, reduced processing
              times, and minimized human errors.
            </p>
          </li>
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

        {listOfSkill(API.getTechskills())}
      </section>

      <br></br>

      <section class="skill">
        <h3 class="h3 skills-title">Soft skills</h3>

        {listOfSkill(API.getSoftskills())}
      </section>
      <br></br>
      <section class="skill">
        <h3 class="h3 skills-title">Languages</h3>

        {listOfSkill(API.getLangskills())}
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

function listOfSkill(listOfSkills) {
  return (
    <ul className="skills-list content-card">
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
