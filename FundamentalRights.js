// src/components/FundamentalRights.js
import React, { useState } from 'react';
import './FundamentalRights.css';

const rightsData = {
  children: {
    title: "Rights for Children",
    details: [
      { number: "Article 21A", text: "Right to Education: Free and compulsory education for children between 6 to 14 years." },
      { number: "Article 24", text: "Prohibition of child labour: No child under 14 years in hazardous jobs." },
      { number: "Article 39(e)", text: "Protection against abuse: The State shall ensure children are not abused." },
      { number: "Article 39(f)", text: "Protection of childhood: Children are given opportunities and facilities for development." },
      { number: "Article 45", text: "Early childhood care: State shall provide care and education for children below 6 years." },
      { number: "Article 47", text: "Nutrition and public health: State's duty to raise the level of nutrition and standard of living." },
      { number: "Article 51A(k)", text: "Duty of parents: Every parent/guardian shall provide opportunities for education to children." },
      { number: "Article 23", text: "Prohibition of human trafficking and forced labour, including children." },
      { number: "Article 14", text: "Right to Equality: Children have the right to equality before the law." },
      { number: "Article 15(3)", text: "Special provisions for children: The State can make special provisions for children." }
    ]
  },
  women: {
    title: "Rights for Women",
    details: [
      { number: "Article 14", text: "Right to Equality: Equal treatment of women and men before the law." },
      { number: "Article 15", text: "Prohibition of discrimination based on gender." },
      { number: "Article 15(3)", text: "State empowerment: State may make special laws for the advancement of women." },
      { number: "Article 16", text: "Equality of opportunity: Equal opportunities for women in employment." },
      { number: "Article 39(a)", text: "Right to adequate livelihood: Equal right for women to an adequate means of livelihood." },
      { number: "Article 39(d)", text: "Equal pay: Equal wages for equal work for men and women." },
      { number: "Article 42", text: "Maternity relief: The State shall make provisions for securing just and humane conditions of work and maternity relief." },
      { number: "Article 51A(e)", text: "Fundamental duty: Renouncing practices derogatory to the dignity of women." },
      { number: "Article 243D(3)", text: "Reservation for women in Panchayats." },
      { number: "Article 243T(3)", text: "Reservation for women in Municipalities." }
    ]
  },
  marriedWomen: {
    title: "Rights for Married Women",
    details: [
      { number: "Article 14", text: "Right to Equality: Equality before the law for married women." },
      { number: "Article 15", text: "Prohibition of discrimination: No discrimination against married women." },
      { number: "Article 15(3)", text: "State provisions: State can make special provisions for married women." },
      { number: "Article 16", text: "Equality of opportunity: Married women have the right to employment." },
      { number: "Article 21", text: "Right to life and personal liberty: Married women have the right to live with dignity." },
      { number: "Article 23", text: "Protection from trafficking and forced labor: Married women are protected under this article." },
      { number: "Article 39", text: "Equal pay and right to livelihood for married women." },
      { number: "Article 42", text: "Maternity benefits: Special protection and provisions for maternity leave and benefits." },
      { number: "Article 51A", text: "Fundamental duties: Equal responsibility for upholding family values." },
      { number: "Article 44", text: "Uniform Civil Code: Ensures equal rights to maintenance and inheritance for married women." }
    ]
  },
  others: {
    title: "Other Rights",
    details: [
      { number: "Article 19(1)(a)", text: "Freedom of Speech and Expression." },
      { number: "Article 19(1)(b)", text: "Right to assemble peacefully." },
      { number: "Article 19(1)(c)", text: "Right to form associations or unions." },
      { number: "Article 19(1)(d)", text: "Right to move freely throughout the territory of India." },
      { number: "Article 19(1)(e)", text: "Right to reside and settle in any part of the country." },
      { number: "Article 19(1)(g)", text: "Right to practice any profession or carry on any occupation, trade, or business." },
      { number: "Article 25", text: "Freedom of Religion: Right to profess, practice, and propagate religion." },
      { number: "Article 29", text: "Protection of minorities: Right to conserve distinct languages, scripts, and cultures." },
      { number: "Article 30", text: "Right of minorities to establish and administer educational institutions." },
      { number: "Article 32", text: "Right to Constitutional Remedies: The right to move the Supreme Court to enforce Fundamental Rights." }
    ]
  }
};

const FundamentalRights = () => {
  const [selectedRight, setSelectedRight] = useState(null);

  const handleRightClick = (rightKey) => {
    setSelectedRight(rightsData[rightKey]);
  };

  return (
    <div className="fundamental-rights-container">
      <h1>Fundamental Rights</h1>
      <div className="rights-links">
        <button onClick={() => handleRightClick('children')}>Rights for Children</button>
        <button onClick={() => handleRightClick('women')}>Rights for Women</button>
        <button onClick={() => handleRightClick('marriedWomen')}>Rights for Married Women</button>
        <button onClick={() => handleRightClick('others')}>Other Rights</button>
      </div>
      {selectedRight && (
        <div className="rights-content">
          <h2>{selectedRight.title}</h2>
          <ul>
            {selectedRight.details.map((right, index) => (
              <li key={index}>
                <strong>{right.number}:</strong> {right.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FundamentalRights;
