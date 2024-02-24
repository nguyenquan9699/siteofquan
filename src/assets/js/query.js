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

export function getTelegram() {
  return 't.me/w3bqq'
}

export function getGithub() {
  return 'github.com/nguyenquan9699'
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
  return ['Web Developing', 'Automation Tools/Bot Developing', 'Integrating CI/CD', 'Optimizing costs, deploy on Cloud / VPS']
}

export function getTechskills() {
  return ['Python', 'Amazon Web Service', 'Linux', 'Git', 'Infrastructure as Code: Terraform, Ansible', 'Containerization: Docker, Docker Compose', 'CI/CD: Jenkins, Github Actions']
}

export function getSomeCode() {
  return [['Check This Page CI/CD Pinelines', 'https://github.com/nguyenquan9699/siteofquan-FE/tree/main/.github/workflows'], ['Check This Page Infrastructure', 'https://github.com/nguyenquan9699/siteofquan-infra'], ['Check This Page Source', 'https://github.com/nguyenquan9699/siteofquan-FE'], ['Check My Graduation Plugin Project', 'https://plugins.jetbrains.com/plugin/17142-9fix'], ['Some College Project Demos', 'https://www.youtube.com/watch?v=lijx1dan17Q&list=PLn6LVePqCRFdYKbVK3lPLYAe5WW3tKr50']]
}

export function getSoftskills() {
  return ['Eager to Learn Attitude', 'Fast Learner / Adaptability', 'Problem-solving', 'Empathy']
}

export function getLangskills() {
  return ['Vietnamese - Native', 'English']
}

export function getCertificates() {
  return (
    <><p>
      AWS Certified Solutions Architect - Associate<br></br>
      AWS Certified Sysops Administrator - Associate<br></br>
      HashiCorp Certified: Terraform Associate<br></br>
      AWS Certified Cloud Practitioner
    </p>
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
    </ul></>
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
        THIS SOURCE CODE
      </a>
      {' '}. <br></br>I am modifying and modularizing it using React.
    </p>
  )
}

export function getMyEducation(){
  return ['Ho Chi Minh City University of Science', 'Honors Program, Faculty of Information Technology', '2017 — 2021', 'During college, I participated in the honors program and learned programming with different technologies. For each subject and in my free time, I have written some projects such as an Android app that helps unlock Linux like a car remote key, a learning website, and games written in C++ on the terminal and so on.','I have been involved in scientific research, in major contributing to the publication of a paper titled "Security Issues in Android App Development and Plug-ins for Android Studio to Support Secure Programming " at Springer. That was also my graduation project, developing the Static Code Analysis Plugin, to help Android programmers write safer code, quite similar to SonarLint with flexible custom rules and recommended fixes.']
}

export function getMyExp1(){
  return ['Viettel Cyber Security', 'Web Pentester', '2020 - 2021', 'While working at my previous company, I completed a training program on SysAdmin and Security knowledge to improve my Linux, Python skills. I was responsible for performing web penetration tests and testing backend code (mostly PHP and Java) with my mentor for a variety of clients, including banking institutions and government-owned entities.', 'My responsibilities also include writing detailed reports on found vulnerabilities, including critical bugs, for customers. I was also assigned the task of learning more and giving a presentation about the 1-day vulnerability.']
}

export function getMyExp2(){
  return ['Self-Employed', 'Software developer | Cloud Engineer', '2023', 'I work as a freelancer, developing web applications and automated tools as required. My feature project is to develop a tool to get real estate trade data from different sources serving filter and retrieve. Occasionally I also spot and submit some vulnerabilities in the wild.', 'Then I knew that using Amazon Web Services properly would save costs in some cases, as well as improve my capabilities, so I taught myself and applied it along with other DevOps skills. like Docker, Terraform, CI/CD with Jenkins.']
}