import '../assets/css/style.css'
import avatar from '../assets/image/avatar.png'
import mail from '../assets/image/mail.jpg'
import phone from '../assets/image/phone.jpg'
import address from '../assets/image/address.png'
import telegram from '../assets/image/telegram.png'
import github from '../assets/image/github.png'
import * as API from '../assets/js/query'

function SideBar() {
  return (
    <aside class="sidebar" data-sidebar="">
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src={avatar} alt={API.getName()} width="80"></img>
        </figure>

        <div class="info-content">
          <h1 class="name" title={API.getName()}>
            {API.getName()}
          </h1>

          <p class="title">{API.getPosition()}</p>
        </div>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <ContactItem data={API.getMail()} image={mail} title="Email" method={`mailto:${API.getMail()}`}/>
          <ContactItem data={API.getPhone()} image={phone} title="Phone" method={`tel:${API.getPhone()}`}/>
          <ContactItem data={API.getTelegram()} image={telegram} title="Telegram" method={API.getTelegram()}/>
          <ContactItem data={API.getGithub()} image={github} title="Github" method={API.getGithub()}/>
          <ContactItem data={API.getAddress()} image={address} title="Location" method="#"/>
        </ul>
      </div>
    </aside>
  )
}

function ContactItem({data, image, title, iconWidth, method}){
  return (
    <li class="contact-item">
      <div class="icon-box">
        <img src={image} alt={data} width='25'></img>
      </div>

      <div class="contact-info">
      <p class="contact-title">{title}</p>

      <a href={method} class="contact-link">
        {data}
      </a>
      </div>
    </li>
  );
}

export default SideBar
