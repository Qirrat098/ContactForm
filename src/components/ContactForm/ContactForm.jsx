import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/button'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


const ContactForm = () => {
  return <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button text="VIA SUPPORT CHAT"
      icon={<MdMessage fontSize="24px"/>}
      />
      <Button text="VIA CALL"
      icon={<MdCall fontSize="24px"/>}
      />
      </div>
      <Button
      isOutlined={true}
      text="VIA EMAIL FORM"
      icon={<MdOutlineEmail fontSize="24px"/>}
      />
      <form>
        <div className={styles.form_controller}>
        <label htmlFor="name">Name</label>
        <input type="text" />
        </div>

        <div className={styles.form_controller}>
        <label htmlFor="email">Email</label>
        <input type="email" />
        </div>

        <div className={styles.form_controller}>
        <label htmlFor="name">Text</label>
        <textarea name="text"  rows= "8"/>
        </div>
        <div style={{display: "flex", justifycontent: "end"}}>
          <Button text="SUBMIT" />
        </div>
      </form>
    </div>
    <div className={styles.contact_image}>
      <img src="images/service.png" alt="contact" />
    </div>
  </section>
  
}

export default ContactForm
