import React from 'react';
import './History.css';
import img1 from '../assets/img1.png'; // Adjust the path as necessary
import img2 from '../assets/img2.png'; // Adjust the path as necessary
import img3 from '../assets/img3.png'; // Adjust the path as necessary


export default function History() {
  return (
    <div className="history-container">
      <h1>History of the Indian Constitution</h1>

      <section className="history-section">
      <img src={img1} alt="Description of image1" className="history-image" />
        <div className="history-text">
          <h2>Formation of the Constituent Assembly</h2>
          <p>
            The Indian Constitution is one of the longest and most comprehensive in the world. Its origins can be traced
            back to the struggles of Indian nationalists for freedom from colonial rule. The need for a constitution was
            recognized long before India attained independence. The Constituent Assembly was formed in 1946 after the
            British government realized the need for an independent and self-governing India.
          </p>
          <p>
            Dr. B.R. Ambedkar, the principal architect of the Indian Constitution, along with the Drafting Committee, 
            took inspiration from various other constitutions around the world, including those of the United States, 
            the United Kingdom, and Ireland. The assembly met in several sessions over a period of two years, 
            11 months, and 18 days to draft the Constitution.
          </p>
        </div>
      </section>

      <section className="history-section">
        <div className="history-text">
          <h2>The Objectives Resolution</h2>
          <p>
            On 13th December 1946, Jawaharlal Nehru introduced the ‘Objectives Resolution,’ which laid down the principles 
            for the constitution. The resolution highlighted India's determination to secure for all its citizens social, 
            economic, and political justice, liberty of thought, expression, belief, faith, and worship, equality of status 
            and opportunity, and fraternity assuring the dignity of the individual and the unity of the nation.
          </p>
          <p>
            The Objectives Resolution was adopted on 22nd January 1947 and formed the basis for the Preamble to the 
            Indian Constitution, which encapsulates the vision and values of the Republic of India.
          </p>
        </div>
        <img src={img2} alt="Description of image2" className="history-image" />
      </section>

      <section className="history-section">
      <img src={img3} alt="Description of image3" className="history-image" />
        <div className="history-text">
          <h2>Adoption of the Constitution</h2>
          <p>
            The final draft of the Constitution was presented to the Constituent Assembly on 4th November 1947. 
            After extensive debates and revisions, it was signed by the members of the assembly on 26th November 1949. 
            This day is celebrated as Constitution Day in India. The Constitution came into effect on 26th January 1950, 
            marking the birth of the Republic of India.
          </p>
          <p>
            The Indian Constitution is unique in its inclusion of provisions for a federal structure, fundamental rights, 
            directive principles of state policy, and a parliamentary form of government. It has been amended many times 
            to address changing needs, but its core principles remain intact, safeguarding democracy, secularism, and 
            the rule of law in India.
          </p>
        </div>
      </section>
    </div>
  );
}
