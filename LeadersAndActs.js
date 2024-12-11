import React, { useState } from "react";

const LeadersAndActs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const leaders = [
    {
      name: "Dr. B.R. Ambedkar",
      role: "Chairman of the Drafting Committee",
      contribution: "Played a pivotal role in drafting the Indian Constitution and ensuring provisions for social justice.",
      acts: ["Hindu Code Bill", "Indian Constitution Draft"],
    },
    {
      name: "Jawaharlal Nehru",
      role: "First Prime Minister of India",
      contribution: "Introduced the Objective Resolution, which formed the basis of the Constitution.",
      acts: ["Objective Resolution", "Industrial Policy Resolution 1956"],
    },
    {
      name: "Sardar Vallabhbhai Patel",
      role: "Deputy Prime Minister",
      contribution: "Worked for the integration of over 500 princely states into India.",
      acts: ["Constitutional Integration Acts", "States Reorganization Act 1956"],
    },
    {
      name: "Maulana Abul Kalam Azad",
      role: "Freedom Fighter and Educationist",
      contribution: "Focused on promoting secularism and modern education reforms.",
      acts: ["University Grants Commission Act 1956", "Educational Reforms Acts"],
    },
    {
      name: "Rajendra Prasad",
      role: "First President of India",
      contribution: "Ensured effective implementation of constitutional principles as the head of the state.",
      acts: ["Revenue Settlement Acts", "Land Reforms Acts"],
    },
    {
      name: "Sarojini Naidu",
      role: "Freedom Fighter and Advocate for Women’s Rights",
      contribution: "Focused on promoting women's rights and labor welfare.",
      acts: ["Women’s Suffrage Acts", "Labor Welfare Acts"],
    },
    {
      name: "C. Rajagopalachari",
      role: "First Indian Governor-General",
      contribution: "Worked on administrative reforms and supported linguistic reorganization of states.",
      acts: ["Judicial Reforms Acts", "Linguistic States Acts"],
    },
    {
      name: "Mahatma Gandhi",
      role: "Father of the Nation",
      contribution: "Advocated for non-violence, equality, and the removal of untouchability.",
      acts: ["Harijan Welfare Acts", "Fundamental Rights Advocacy"],
    },
    {
      name: "Hansa Mehta",
      role: "Social Reformer and Member of the Constituent Assembly",
      contribution: "Championed women's rights and fought for gender equality in the Constitution.",
      acts: ["Equal Rights Advocacy", "Women's Empowerment Acts"],
    },
    {
      name: "B. Pattabhi Sitaramayya",
      role: "Freedom Fighter and Historian",
      contribution: "Played a vital role in framing the administrative and financial structure of India.",
      acts: ["Administrative Reforms Acts", "Banking Sector Reforms"],
    },
    {
      name: "K.M. Munshi",
      role: "Member of the Drafting Committee",
      contribution: "Worked on cultural and educational rights, and strongly advocated for the Fundamental Duties.",
      acts: ["Fundamental Duties Clause", "Cultural Rights Acts"],
    },
    {
      name: "T.T. Krishnamachari",
      role: "Finance Minister and Member of the Constituent Assembly",
      contribution: "Contributed to the financial structure and budgetary provisions of the Constitution.",
      acts: ["Finance Acts", "Budgetary Reforms"],
    },
    {
      name: "Bal Gangadhar Tilak",
      role: "Freedom Fighter and Social Reformer",
      contribution: "Promoted the idea of Swaraj (self-rule) and laid the foundation for constitutional reforms.",
      acts: ["Home Rule Movement", "Advocacy for Swaraj Acts"],
    },
    {
      name: "Annie Besant",
      role: "Social Reformer and Advocate of Indian Independence",
      contribution: "Fought for the independence of India and supported the rights of women and education.",
      acts: ["Educational Reforms", "Women's Welfare Acts"],
    },
  ];

  const filteredLeaders = leaders.filter((leader) =>
    leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leader.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leader.contribution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    leader.acts.some((act) => act.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Leaders and Acts</h1>
      <input
        type="text"
        placeholder="Search leaders or acts..."
        style={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={styles.results}>
        {filteredLeaders.length > 0 ? (
          filteredLeaders.map((leader, index) => (
            <div key={index} style={styles.card}>
              <h2 style={styles.leaderName}>{leader.name}</h2>
              <p style={styles.role}><strong>Role:</strong> {leader.role}</p>
              <p style={styles.contribution}>
                <strong>Contribution:</strong> {leader.contribution}
              </p>
              <p style={styles.acts}>
                <strong>Acts:</strong> {leader.acts.join(", ")}
              </p>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No results found.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    maxWidth: "8000px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#f5f5f5", // Light grey background
    borderRadius: "8px", // Optional: Rounded corners
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Subtle shadow for better aesthetics
  },
  title: {
    fontSize: "2rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  searchBar: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  results: {
    display: "grid",
    gap: "20px",
  },
  card: {
    padding: "15px",
    border: "1px solid #e1e1e1",
    borderRadius: "5px",
    textAlign: "left",
    backgroundColor: "#ffffff",
  },
  leaderName: {
    fontSize: "1.5rem",
    color: "#2980b9",
    marginBottom: "10px",
  },
  role: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#34495e",
  },
  contribution: {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  acts: {
    fontSize: "1rem",
    color: "#7f8c8d",
  },
  noResults: {
    fontSize: "1rem",
    color: "#e74c3c",
  },
};

export default LeadersAndActs;
