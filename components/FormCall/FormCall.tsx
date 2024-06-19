'use client';

import { useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { Button } from '@/components';
import styles from './FormCall.module.scss';

export const FormCall = ({ onSuccess }: any) => {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const digitOnlyValue = phone.replace(/\D/g, '');

    if (digitOnlyValue.length === 11) {
      try {
        const response = await axios.post(
          'https://formsubmit.co/ajax/kryukova.marie@gmail.com',
          {
            phone,
          }
        );

        console.log(response.data);
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
        setIsSubmitted(true);
      } catch (error) {
        console.error(error);
        setIsSubmitted(true);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isSubmitted ? (
        <h3 className={styles.formHeading}>
          Спасибо, мы свяжемся с Вами в ближайшее время!
        </h3>
      ) : (
        <>
          <h3 className={styles.formHeading}>Получить консультацию</h3>
          {/* <h3 className={styles.formHeading}>Подберем автомобиль для Вас!</h3> */}
          <label>
            Свяжитесь с нами, и наши эксперты помогут подобрать автомобиль для
            Вас!
            <InputMask
              mask="+7 (999) 999-9999"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Телефон"
              required
            />
          </label>
          <Button type="submit">Отправить</Button>
        </>
      )}
    </form>
  );
};
