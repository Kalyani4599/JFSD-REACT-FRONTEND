// src/components/FAQ.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 900px;
  margin: 40px auto;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 25px;
`;

const FAQList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
`;

const FAQItem = styled.div`
  background-color: #f0f2f5;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: calc(33.333% - 20px);
  box-sizing: border-box;
  padding: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.1rem;
`;

const AnswerButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FAQAnswer = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is the Indian Constitution?", answer: "Document" },
    { question: "Who is the father of the Constitution?", answer: "Ambedkar" },
    { question: "What are Fundamental Rights?", answer: "Rights" },
    { question: "What is the significance of the Preamble?", answer: "Introduction" },
    { question: "What is the role of the President?", answer: "Head" },
    { question: "What is the Parliamentary system?", answer: "Government" },
    { question: "What is the difference between Union and State Laws?", answer: "Jurisdiction" },
    { question: "How can amendments be made?", answer: "Procedure" },
    { question: "What is the Supreme Court?", answer: "Judiciary" },
    { question: "What are Directive Principles?", answer: "Guidelines" },
    { question: "What is the role of the Election Commission?", answer: "Elections" },
    { question: "What are the duties of a citizen?", answer: "Responsibilities" },
    { question: "What is a Constitutional Amendment?", answer: "Change" },
    { question: "What is the significance of the 42nd Amendment?", answer: "Important" },
    { question: "What is the concept of Fundamental Duties?", answer: "Obligations" },
    { question: "What are the types of emergencies?", answer: "Situations" },
    { question: "What is the Basic Structure Doctrine?", answer: "Principle" },
    { question: "What is a Writ?", answer: "Order" },
    { question: "Who can issue a Writ?", answer: "Court" },
    { question: "What is the procedure for impeachment?", answer: "Removal" },
    { question: "What is the difference between a bill and an act?", answer: "Legislation" },
    { question: "What are the types of elections?", answer: "Processes" },
    { question: "What is the significance of the 73rd Amendment?", answer: "Panchayati Raj" },
    { question: "What is the role of the Governor?", answer: "State Head" },
    { question: "What are the provisions for the rights of children?", answer: "Protection" },
    { question: "What is the role of the Prime Minister?", answer: "Leader" },
    { question: "What are the functions of the Cabinet?", answer: "Decision-Making" },
    { question: "What is a no-confidence motion?", answer: "Parliamentary Tool" },
    { question: "What are the duties of the Speaker?", answer: "House Management" },
    { question: "What is the significance of the 44th Amendment?", answer: "Change" },
    { question: "What is the concept of secularism in India?", answer: "Religion" },
    { question: "What is the role of the Lok Sabha?", answer: "House" },
    { question: "What are the rights of women in India?", answer: "Equality" },
    { question: "What is the concept of social justice?", answer: "Fairness" },
    { question: "What is the procedure for a constitutional review?", answer: "Process" },
    { question: "What is the role of the judiciary?", answer: "Law Enforcement" },
    { question: "What are the provisions for minority rights?", answer: "Protection" },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            onClick={() => toggleAnswer(index)}
          >
            <FAQQuestion>
              <span>{faq.question}</span>
              <AnswerButton>Answer</AnswerButton>
            </FAQQuestion>
            {openIndex === index && (
              <FAQAnswer>{faq.answer}</FAQAnswer>
            )}
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;
