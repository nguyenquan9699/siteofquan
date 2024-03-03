import '../assets/css/style.css'
import avatar from '../assets/image/avatar.png'
import mail from '../assets/image/mail.jpg'
import phone from '../assets/image/phone.jpg'
import address from '../assets/image/address.png'
import telegram from '../assets/image/telegram.png'
import github from '../assets/image/github.png'
import * as API from '../assets/js/query'
import React, { useState, useEffect } from 'react';

function SideBar() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedName = await API.getName();
        const fetchedContact = await API.getContact();
        const fetchedPosition = await API.getPosition();
        setName(fetchedName);
        setContact(fetchedContact);
        setPosition(fetchedPosition);
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <aside class="sidebar" data-sidebar="">
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src={avatar} alt={name} width="80"></img>
        </figure>

        <div class="info-content">
          <h1 class="name" title={name}>
            {name}
          </h1>

          <p class="title">{position}</p>
        </div>
        <button class="info_more-btn" data-sidebar-btn="">
          Show Contacts
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <ContactItem data={contact['mail']} image={mail} title="Email" method={`mailto:${contact['mail']}`}/>
          <ContactItem data={contact['phone']} image={phone} title="Phone" method={`tel:${contact['phone']}`}/>
          <ContactItem data={contact['telegram']} image={telegram} title="Telegram" method={`https://${contact['telegram']}`}/>
          <ContactItem data={contact['github']} image={github} title="Github" method={`https://${contact['github']}`}/>
          <ContactItem data={contact['address']} image={address} title="Location" method="#"/>
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
