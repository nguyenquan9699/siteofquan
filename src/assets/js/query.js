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
      I am a DevOps engineer proficient with Amazon Web Service, Linux, and
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
  return (
    <ul>
      <li>service 1</li>
      <li>service 2</li>
      <li>service 3</li>
    </ul>
  )
}

export function getTechskills() {
  return ['Python', 'Git']
}

export function getSoftskills() {
  return ['Dance', 'Sing']
}

export function getLangskills() {
  return ['Vietnamese', 'English']
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
      This portfolio based on source code from{' '}
      <a
        style={{ display: 'inline' }}
        class="about-text"
        href="https://github.com/codewithsadee/vcard-personal-portfolio"
      >
        THIS
      </a>
      . I modified and modularized it using React
    </p>
  )
}
