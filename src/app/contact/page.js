'use client';

import styles from '@/styles/contact.module.css';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-mail';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    sendEmail(data);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.credentials}>
          <input {...register('name', { required: true })} type="text" placeholder="Nom" />
          <input {...register('email', { required: true })} type="email" placeholder="E-mail" />
        </div>
        <textarea {...register('message', { required: true })} placeholder="Message" className={styles.message}></textarea>
        <input className={styles.send} type="submit" value="Envoyer" />
      </form>
    </main>
  );
};

export default Contact;
