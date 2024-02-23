// decouple, query api later
import saaImage from '../../assets/image/saa.png'
import soaImage from '../../assets/image/soa.png'
import terraformImage from '../../assets/image/terraform.png'
import clfImage from '../../assets/image/clf.png'
//import jetbrainsImage from '../../assets/image/jetbrains.png';
import springerImage from '../../assets/image/springer.jpg'

export function getName() {
  return 'Nguyen Minh Quan'
}

export function getPosition() {
  return 'DevOps Engineer'
}

export function getMail() {
  return 'nguyenquan9699@gmail.com'
}

export function getPhone() {
  return '+84966159365'
}

export function getAddress() {
  return 'Ho Chi Minh City, Vietnam'
}

export function getIntro() {
  return (
    <p>
      I am a DevOps/Cloud Engineer proficient with Amazon Web Service, Linux, and
      CI/CD. I participated in different roles in software development. My
      previous experience also includes a pentester role at Viettel Cyber
      Security, providing a good background in security.<br></br> I am a fast
      learner and always maintain an open mindset and eagerness to acquire new
      technology skills for enhancing product delivery. I can work
      independently, also a team player.
    </p>
  )
}

export function getMyServices() {
  return ['Web Developing', 'Automation Tools/Bot Developing', 'Integrating CI/CD', 'Optimize costs, deploy on Cloud / VPS']
}

export function getTechskills() {
  return ['Python', 'Amazon Web Service', 'Linux', 'Git', 'Infrastructure as Code: Terraform, Ansible', 'Containerization: Docker, Docker Compose', 'CI/CD: Jenkins, Github Actions']
}

export function getSomeCode() {
  return [['This Page CI/CD', 'https://github.com/nguyenquan9699/siteofquan-FE/tree/main/.github/workflows'], ['This Page Infrastructure', 'https://github.com/nguyenquan9699/siteofquan-infra'], ['This Page Source', 'https://github.com/nguyenquan9699/siteofquan-FE'], ['My Graduate Plugin Project', 'https://plugins.jetbrains.com/plugin/17142-9fix'], ['Some Fun Mini Project Demos', 'https://www.youtube.com/watch?v=lijx1dan17Q&list=PLn6LVePqCRFdYKbVK3lPLYAe5WW3tKr50']]
}

export function getSoftskills() {
  return ['Eager to Learn Attitude', 'Fast Learner / Adaptability', 'Problem-solving', 'Empathy']
}

export function getLangskills() {
  return ['Vietnamese - Native', 'English']
}

export function getCertificates() {
  return (
    <ul class="clients-list">
      <li class="clients-item">
        <a href="https://www.credly.com/badges/6810366a-6a22-40ca-a356-0216c7b12c53/public_url">
          <img src={saaImage} alt="client logo" width="150" height="150"></img>
        </a>
      </li>
      <li class="clients-item">
        <a href="https://www.credly.com/badges/cdc0e6c2-9bde-4f8b-bd47-1ac32dd1bd87/public_url">
          <img src={soaImage} alt="client logo" width="150" height="150"></img>
        </a>
      </li>
      <li class="clients-item">
        <a href="https://www.credly.com/badges/fc59dff5-dba3-4929-9007-9733e629008a/public_url">
          <img
            src={terraformImage}
            alt="client logo"
            width="150"
            height="150"
          ></img>
        </a>
      </li>
      <li class="clients-item">
        <a href="https://www.credly.com/badges/5c7da753-7c9e-4a7e-9f80-2045fa5da1c0/public_url">
          <img src={clfImage} alt="client logo" width="150" height="150"></img>
        </a>
      </li>
    </ul>
  )
}

export function getAwards() {
  return (
    <p>
      Employee of the month of Viettel Cyber Security <br></br>
      Top 5 VCS newcomer's CTF
    </p>
  )
}

export function getPublication() {
  return (
    <a href="https://www.springerprofessional.de/en/security-issues-in-android-application-development-and-plug-in-f/19864406">
      <p class="about-text">
        Plug-in for Android Studio to Support Secure Programming (2021) at
        Springerprofessional
      </p>
      <br></br>
      <img src={springerImage} alt="client logo" width="134" height="100"></img>
    </a>
  )
}

export function getCredit() {
  return (
    <p>
      This portfolio based on {' '}
      <a
        style={{ display: 'inline' }}
        class="about-text"
        href="https://github.com/codewithsadee/vcard-personal-portfolio"
      >
        THIS
      </a>
      {' '}source code. I modified and modularized it using React
    </p>
  )
}

export function getMyEducation(){
  return ['Ho Chi Minh City University of Science', 'Honors Program, Faculty of Information Technology', '2017 — 2021', 'During my university studies, I actively engaged in scientific research, notably contributing to the publication of a paper titled "Security Issues in Android Application Development and Plug-in for Android Studio to Support Secure Programming." Additionally, I undertook various mini-projects, including demos to further explore and apply theoretical knowledge. For my graduation project, I focused on the development of an Android Studio Static Code Analysis Plugin, aimed at enhancing security by identifying and fixing vulnerabilities in code. These experiences not only deepened my understanding of security issues in Android development but also honed my practical skills in developing solutions to address them.']
}

export function getMyExp1(){
  return ['Self-Employed', 'Software developer (Cloud)', '2023 - 2023', 'In my role, I managed AWS resources and optimized costs effectively for the team while also provisioning platforms and integrating CI processes using Gitlab, Jenkins, Docker, AWS, and Terraform. Additionally, I played a key role in the featured project involving Real Estate Data Crawling, Classification, and Storage, contributing to the development and deployment of web applications and automation tools. Furthermore, I conducted security research to fortify systems against potential threats and vulnerabilities, ensuring robust protection of sensitive data.']
}

export function getMyExp2(){
  return ['Viettel Cyber Security', 'Web Pentester', '2020 - 2021', 'During my tenure at my previous company, I completed an intensive training program in Sysadmin and Security, equipping myself with essential skills in these areas. I took on the responsibility of conducting Web penetration tests and audits for a wide range of clients, which included banking institutions and government-owned entities. In addition to executing these tests, I meticulously documented my findings in detailed pentest reports, ensuring clear communication of vulnerabilities and recommendations for mitigation. Furthermore, my role involved proactive research, leading to the identification and presentation of one-day vulnerabilities, contributing to the enhancement of our overall security posture.']
}