import '../assets/css/style.css';
import avatar from '../assets/image/avatar.jpg';
import mail from '../assets/image/mail.png';
import phone from '../assets/image/phone.jpg';
import address from '../assets/image/address.png';
import * as API from '../assets/js/script';

function SideBar() {
    return (
        <aside class="sidebar" data-sidebar="">

        <div class="sidebar-info">
      
          <figure class="avatar-box">
            <img src={avatar} alt={API.getName()} width="80"></img>
          </figure>
      
          <div class="info-content">
            <h1 class="name" title={API.getName()}>{API.getName()}</h1>
      
            <p class="title">{API.getPosition()}</p>
          </div>

        </div>
      
        <div class="sidebar-info_more">
      
          <div class="separator"></div>
      
          <ul class="contacts-list">
      
            <li class="contact-item">
      
              <div class="icon-box">
                <img src={mail} alt={API.getMail()} width="30"></img>
              </div>
      
              <div class="contact-info">
                <p class="contact-title">Email</p>
      
                <a href={`mailto:${API.getMail()}`} class="contact-link">{API.getMail()}</a>
              </div>
      
            </li>
      
            <li class="contact-item">
      
              <div class="icon-box">
              <img src={phone} alt={API.getPhone()} width="25"></img>
              </div>
      
              <div class="contact-info">
                <p class="contact-title">Phone</p>
      
                <a href={`tel:${API.getPhone()}`} class="contact-link">{API.getPhone()}</a>
              </div>
      
            </li>
      
            <li class="contact-item">
      
              <div class="icon-box">
              <img src={address} alt={API.getAddress()} width="25"></img>
              </div>
      
              <div class="contact-info">
                <p class="contact-title">Location</p>
      
                <address>{API.getAddress()}</address>
              </div>
      
            </li>
      
          </ul>     
        </div>
      
      </aside>
    );
}
  
export default SideBar;