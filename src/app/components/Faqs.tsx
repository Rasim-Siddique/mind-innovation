'use client'
import React, { useState } from 'react';
import styles from '@/app/styles/Faqs.module.css';

const Faqs = () => {
  const [faqData, setFaqData] = useState([
    {
      question: 'Can I use PureVPN on any device?',
      answer:
        'Yes. PureVPN is supported on a wide range of devices, including: Windows, Mac, Android, iOS, Linux, Chrome, Amazon Fire TV, Playstation, and more.',
      isOpen: false,
    },
    {
      question: 'What devices do PurePrivacy, PureKeep, and PureEncrypt support?',
      answer:
        'We offer multiple solutions in plans for different devices, so you can enjoy online freedom with broader security, no matter which platform you use. PurePrivacy is available for iOS and Android devices, while PureKeep is supported on Windows and Mac. If you’re looking to encrypt your files, PureEncrypt is the perfect solution and is supported on both Windows and Mac devices.',
      isOpen: false,
    },
    {
      question: 'What is the refund policy?',
      answer:
        'PureVPN offers a 31-day money-back guarantee to all its users. If you’re not satisfied with the service for any reason, which is hardly the case, you can request a refund within 31 days of your purchase. The refund policy applies to all subscription plans, excluding monthly plans. To initiate a refund, you can simply contact the PureVPN support team via live chat or email and they’ll process your request in a timely manner.',
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index:any) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <>
      <div className={styles.accordion}>
        <h1 className={styles.faqs_main_head}>Frequently Asked Questions</h1>

        {faqData.map((faq, index) => (
          <div className={`${styles.item} ${faq.isOpen ? styles.active : ''}`} key={index}>
            <p className={styles.number}></p>
            <h2 className={styles.button_acc} onClick={() => toggleAccordion(index)}>
              {faq.question}
            </h2>
            <div className={styles.iconOpen + ' ' + (faq.isOpen ? styles.hidden : '')}>
              <span className={styles.icon_plus_minus}> {faq.isOpen?"-":'+'}</span>
            </div>
           

            <div className={styles.hiddenbox}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faqs;
