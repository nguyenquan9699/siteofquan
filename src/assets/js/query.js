// decouple, query api later
import saaImage from '../../assets/image/saa.png'
import soaImage from '../../assets/image/soa.png'
import terraformImage from '../../assets/image/terraform.png'
import clfImage from '../../assets/image/clf.png'
import { apiUrl } from '../../config'

async function fetchData(url, field) {
  const fullUrl = `${url}?field=${field}`;
  console.log(fullUrl);
  const response = await fetch(fullUrl);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

export async function getName() {
  const data = await fetchData(apiUrl, 'name');
  return data['value'];
}

export async function getContact() {
  const data = await fetchData(apiUrl, 'contact');
  return data;
}

export async function getPosition() {
  const data = await fetchData(apiUrl, 'position');
  return data['value'];
}

export async function getIntro() {
  const data = await fetchData(apiUrl, 'intro');
  return data['value'];
}

export async function getMyServices() {
  const data = await fetchData(apiUrl, 'services');
  return data['value'];
}

export async function getTechskills() {
  const data = await fetchData(apiUrl, 'techskills');
  return data['value'];
}

export async function getSomeCode() {
  const data = await fetchData(apiUrl, 'somecode');
  return data['value'];
}

export async function getSoftskills() {
  const data = await fetchData(apiUrl, 'softskills');
  return data['value'];
}

export async function getLangskills() {
  const data = await fetchData(apiUrl, 'langskills');
  return data['value'];
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

export async function getAwards() {
  const data = await fetchData(apiUrl, 'awards');
  return <div dangerouslySetInnerHTML={{ __html: data['value'] }} />
}

export async function getPublication() {
  const data = await fetchData(apiUrl, 'publication');
  return <div dangerouslySetInnerHTML={{ __html: data['value'] }} />
}

export async function getCredit() {
  const data = await fetchData(apiUrl, 'credit');
  return <div dangerouslySetInnerHTML={{ __html: data['value'] }} />
}

export async function getMyEducation(){
  const data = await fetchData(apiUrl, 'education1');
  return data;
}

export async function getMyExp1(){
  const data = await fetchData(apiUrl, 'experience1');
  return data;
}

export async function getMyExp2(){
  const data = await fetchData(apiUrl, 'experience2');
  return data;
}