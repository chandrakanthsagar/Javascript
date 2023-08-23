function loadData() {
  const data = {
    "abhi@gmail.com": {
      "firstName": "Abhishek",
      "lastName": "Verma",
      "mobile": "9012345678",
      "age": 25,
      "city": "Delhi"
    },
    "john@example.com": {
      "firstName": "John",
      "lastName": "Doe",
      "mobile": "9876543210",
      "age": 30,
      "city": "New York"
    },
    "alice@gmail.com": {
      "firstName": "Alice",
      "lastName": "Smith",
      "mobile": "8765432109",
      "age": 28,
      "city": "London"
    },
    "raj@example.com": {
      "firstName": "Raj",
      "lastName": "Kumar",
      "mobile": "7654321098",
      "age": 35,
      "city": "Mumbai"
    },
    "mary@example.com": {
      "firstName": "Mary",
      "lastName": "Johnson",
      "mobile": "6543210987",
      "age": 27,
      "city": "Los Angeles"
    },
    "jane@gmail.com": {
      "firstName": "Jane",
      "lastName": "Williams",
      "mobile": "5432109876",
      "age": 32,
      "city": "Toronto"
    },
    "sam@example.com": {
      "firstName": "Sam",
      "lastName": "Lee",
      "mobile": "4321098765",
      "age": 29,
      "city": "Sydney"
    },
    "sara@gmail.com": {
      "firstName": "Sara",
      "lastName": "Taylor",
      "mobile": "3210987654",
      "age": 26,
      "city": "Paris"
    },
    "mike@example.com": {
      "firstName": "Mike",
      "lastName": "Miller",
      "mobile": "2109876543",
      "age": 31,
      "city": "Berlin"
    },
    "linda@gmail.com": {
      "firstName": "Linda",
      "lastName": "Brown",
      "mobile": "1098765432",
      "age": 33,
      "city": "Amsterdam"
    },
    "tom@example.com": {
      "firstName": "Tom",
      "lastName": "Smith",
      "mobile": "9876543210",
      "age": 30,
      "city": "Chicago"
    },
    "emma@gmail.com": {
      "firstName": "Emma",
      "lastName": "Davis",
      "mobile": "8765432109",
      "age": 28,
      "city": "Tokyo"
    }
  };
  

  if (!localStorage.getItem('Usersdata')) {
      localStorage.setItem('Usersdata', JSON.stringify(data));
  }

  const userList = document.getElementById('userList');
  const storedData = JSON.parse(localStorage.getItem('Usersdata'));

  for (const [email, user] of Object.entries(storedData)) {
    const userItem = document.createElement('li');
    userItem.classList.add('user-item');
    const space ='   ';
    const userInfo = document.createElement('span');
    userInfo.textContent = `${user.firstName} ${space} ${user.lastName}   ${user.age}   ${email}   ${user.mobile}`;
    


    userItem.appendChild(userInfo);
    userList.appendChild(userItem);
}
}

window.onload = function () {
  loadData();
};
