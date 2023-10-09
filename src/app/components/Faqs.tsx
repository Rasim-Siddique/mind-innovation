
'use client'
import React, { useState } from 'react';
import styles from '@/app/styles/Faqs.module.css';

const Faqs = () => {
  const [faqData, setFaqData] = useState([
    {
      question: 'What services does Mind Innovation offer?',
      answer:
        'Mind Innovation offers a range of services, including Mobile App Development, Web Development, Artificial Intelligence solutions, IT Project Outsourcing, and Staff Augmentation. We tailor our services to meet your specific needs, ensuring a customized approach for your projects.',
      isOpen: false,
    },
    {
      question: 'How can I contact Mind Innovation?',
      answer:
        'You can reach out to us through our contact page on our website, where you will find a contact form, or you can directly email us at info@mindinnovation.co. You can also call us at +92-3345550977 for immediate assistance.',
      isOpen: false,
    },
    {
      question: 'What industries does Mind Innovation serve?',
      answer:
        ' We have experience working across various industries, including healthcare, finance, e-commerce, education, and more. Our diverse expertise allows us to adapt our solutions to meet the unique challenges of different sectors.',
      isOpen: false,
    },
    {
      question: 'Do you work with startups and established businesses?',
      answer:
        ' Yes, we work with both startups and established businesses. We offer scalable solutions that can be tailored to the specific needs and budgets of businesses at various stages of development.',
      isOpen: false,
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        " The timeline for each project varies depending on its complexity and scope. We work closely with you to define project milestones and timelines to ensure timely delivery. Rest assured, we're committed to delivering your project on time and within budget.",
      isOpen: false,
    },
    {
      question: 'What sets Mind Innovation apart from other tech companies?',
      answer:
        ' Mind Innovation stands out due to our deep expertise, commitment to innovation, proven track record of delivering results, and unwavering dedication to client success. We prioritize your goals and work collaboratively to achieve them.',
      isOpen: false,
    },
    {
      question: 'Can I see examples of your previous work?',
      answer:
         "Yes, you can view our portfolio on our website to see some of our past projects. These case studies highlight our capabilities and the successful outcomes we've achieved for our clients.",
      isOpen: false,
    },
    {
      question: 'Is my project idea safe with Mind Innovation?',
      answer:
          "Absolutely, our commitment doesn't end with project delivery. We offer ongoing maintenance and support services to ensure that your solution remains up-to-date, secure, and optimized for performance.",
      isOpen: false,
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer:
         "Absolutely, our commitment doesn't end with project delivery. We offer ongoing maintenance and support services to ensure that your solution remains up-to-date, secure, and optimized for performance.",
      isOpen: false,
    },
    {
      question: "How can I stay updated with Mind Innovation's latest news and insights?",
      answer:
        ' You can subscribe to our newsletter on our website to receive the latest tech trends, insights, and updates from Mind Innovation directly in your inbox.',
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
          <div  onClick={() => toggleAccordion(index)} className={`${styles.item} ${faq.isOpen ? styles.active : ''}`} key={index}>
            <p className={styles.number}></p>
            <h2 className={styles.button_acc}>
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