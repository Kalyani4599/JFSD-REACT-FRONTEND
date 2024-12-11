import React from 'react';

const stateData = [
  {
    state: 'Andhra Pradesh',
    cm: 'Chandra Babu Naidu',
    acts: [
      'Andhra Pradesh Reorganization Act, 2014',
      'Scheduled Areas Land Transfer Regulation, 1959',
    ],
  },
  {
    state: 'Arunachal Pradesh',
    cm: 'Pema Khandu',
    acts: ['North-East Frontier Agency (NEFA) Act, 1954'],
  },
  {
    state: 'Assam',
    cm: 'Himanta Biswa Sarma',
    acts: [
      'Assam Accord, 1985',
      'Assam Reorganisation Act, 1963',
    ],
  },
  {
    state: 'Bihar',
    cm: 'Nitish Kumar',
    acts: [
      'Bihar Panchayati Raj Act, 2006',
      'Bihar Land Reforms Act, 1950',
    ],
  },
  {
    state: 'Chhattisgarh',
    cm: 'Bhupesh Baghel',
    acts: ['Chhattisgarh Land Revenue Code, 1959'],
  },
  {
    state: 'Goa',
    cm: 'Pramod Sawant',
    acts: ['Goa Daman and Diu Reorganisation Act, 1987'],
  },
  {
    state: 'Gujarat',
    cm: 'Bhupendra Patel',
    acts: ['Gujarat Panchayat Act, 1993'],
  },
  {
    state: 'Haryana',
    cm: 'Manohar Lal Khattar',
    acts: ['Haryana Land Ceiling Act, 1972'],
  },
  {
    state: 'Himachal Pradesh',
    cm: 'Sukhvinder Singh Sukhu',
    acts: ['Himachal Pradesh Tenancy and Land Reforms Act, 1972'],
  },
  {
    state: 'Jharkhand',
    cm: 'Hemant Soren',
    acts: [
      'Chotanagpur Tenancy Act, 1908',
      'Santhal Parganas Tenancy Act, 1949',
    ],
  },
  {
    state: 'Karnataka',
    cm: 'Siddaramaiah',
    acts: [
      'Karnataka Forest Act, 1963',
      'Karnataka Land Revenue Act, 1964',
    ],
  },
  {
    state: 'Kerala',
    cm: 'Pinarayi Vijayan',
    acts: [
      'Kerala Land Reforms Act, 1963',
      'Kerala Education Act, 1958',
    ],
  },
  {
    state: 'Madhya Pradesh',
    cm: 'Shivraj Singh Chouhan',
    acts: ['Madhya Pradesh Reorganization Act, 2000'],
  },
  {
    state: 'Maharashtra',
    cm: 'Eknath Shinde',
    acts: [
      'Bombay Reorganization Act, 1960',
      'Maharashtra Rent Control Act, 1999',
    ],
  },
  {
    state: 'Manipur',
    cm: 'N. Biren Singh',
    acts: ['Manipur Reorganization Act, 1971'],
  },
  {
    state: 'Meghalaya',
    cm: 'Conrad Sangma',
    acts: ['Meghalaya Reorganization Act, 1971'],
  },
  {
    state: 'Mizoram',
    cm: 'Zoramthanga',
    acts: ['Mizoram Peace Accord, 1986'],
  },
  {
    state: 'Nagaland',
    cm: 'Neiphiu Rio',
    acts: ['Nagaland State Act, 1962'],
  },
  {
    state: 'Odisha',
    cm: 'Naveen Patnaik',
    acts: ['Odisha Scheduled Areas Act, 1956'],
  },
  {
    state: 'Punjab',
    cm: 'Bhagwant Mann',
    acts: ['Punjab Reorganization Act, 1966'],
  },
  {
    state: 'Rajasthan',
    cm: 'Ashok Gehlot',
    acts: ['Rajasthan Tenancy Act, 1955'],
  },
  {
    state: 'Sikkim',
    cm: 'Prem Singh Tamang',
    acts: ['Sikkim Accession Act, 1975'],
  },
  {
    state: 'Tamil Nadu',
    cm: 'M. K. Stalin',
    acts: ['Tamil Nadu Land Reforms Act, 1961'],
  },
  {
    state: 'Telangana',
    cm: 'K. Chandrashekar Rao',
    acts: ['Telangana State Act, 2014'],
  },
  {
    state: 'Tripura',
    cm: 'Manik Saha',
    acts: ['Tripura Land Revenue Act, 1960'],
  },
  {
    state: 'Uttar Pradesh',
    cm: 'Yogi Adityanath',
    acts: ['Uttar Pradesh Zamindari Abolition Act, 1950'],
  },
  {
    state: 'Uttarakhand',
    cm: 'Pushkar Singh Dhami',
    acts: ['Uttarakhand Reorganization Act, 2000'],
  },
  {
    state: 'West Bengal',
    cm: 'Mamata Banerjee',
    acts: ['West Bengal Land Reforms Act, 1955'],
  },
];

const StateDetails = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1>Indian States, Chief Ministers, and Legislative Acts</h1>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                textAlign: 'left',
                backgroundColor: '#f2f2f2',
              }}
            >
              State
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                textAlign: 'left',
                backgroundColor: '#f2f2f2',
              }}
            >
              Chief Minister
            </th>
            <th
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                textAlign: 'left',
                backgroundColor: '#f2f2f2',
              }}
            >
              Key Acts
            </th>
          </tr>
        </thead>
        <tbody>
          {stateData.map((state, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                {state.state}
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                {state.cm}
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                  {state.acts.map((act, actIndex) => (
                    <li key={actIndex}>{act}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateDetails;
