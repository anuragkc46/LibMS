// issuedBooklist.js - Modified to prevent duplicate loading
document.addEventListener('DOMContentLoaded', () => {
  const issuedBooksList = document.getElementById('issued-books-list');
  const loadBtn = document.getElementById('load-issued-books');
  let isLoaded = false; // Flag to track if data is already loaded

  loadBtn.addEventListener('click', () => {
    // Prevent loading multiple times
    if (isLoaded) return;
    
    issuedBooksList.innerHTML = ""; // Clear previous
    isLoaded = true; // Set flag to prevent future loads

    fetch('https://randomuser.me/api/?results=320&nat=us,gb,in,ca,au')
      .then(res => res.json())
      .then(data => {
        const collegeList = ["ABC College","XYZ University","LMN Institute","PQR College","Harvard University","Oxford University","Tokyo University"];
        const books = ["Java Programming","Database Systems","Web Development","Python Programming","Data Structures","Algorithms","C Programming","Networking","DBMS","Operating Systems"];

        const members = data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          mobile: "9" + Math.floor(100000000 + Math.random() * 900000000),
          college: collegeList[Math.floor(Math.random() * collegeList.length)]
        }));

        const shuffledMembers = members.sort(() => 0.5 - Math.random());
        const numIssued = Math.floor(Math.random() * 11) + 30;
        const recentlyIssued = shuffledMembers.slice(0, numIssued);

        // Create table
        const table = document.createElement('table');
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";
        table.innerHTML = `
          <thead>
            <tr style="background-color:#3498db; color:white;">
              <th style="padding:10px; border:1px solid #ddd;">Book Name</th>
              <th style="padding:10px; border:1px solid #ddd;">Issued To</th>
              <th style="padding:10px; border:1px solid #ddd;">Mobile</th>
              <th style="padding:10px; border:1px solid #ddd;">College</th>
            </tr>
          </thead>
          <tbody></tbody>
        `;

        const tbody = table.querySelector('tbody');
        recentlyIssued.forEach((member, i) => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td style="padding:8px; border:1px solid #ddd;">${books[i % books.length]}</td>
            <td style="padding:8px; border:1px solid #ddd;">${member.name}</td>
            <td style="padding:8px; border:1px solid #ddd;">${member.mobile.slice(0,4)}XXXX${member.mobile.slice(-2)}</td>
            <td style="padding:8px; border:1px solid #ddd;">${member.college}</td>
          `;
          tbody.appendChild(tr);
        });

        issuedBooksList.appendChild(table);
      })
      .catch(err => console.error(err));
  });
});