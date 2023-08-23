
document.addEventListener("click", function() 
{
	var datepicker = document.getElementById("datepicker");
    var displayDate = document.getElementById("displayDate");
    datepicker.addEventListener("input", function() 
	{
      var dateselected = datepicker.value;
      displayDate.textContent = dateselected;
    });
  });

function validateForm() {
    const firstName = document.getElementsByName("f-name")[0].value;
    const lastname = document.getElementsByName("l-name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const number = document.getElementsByName("phone-number")[0].value;
    const position = document.getElementsByName("appliedposition")[0].value;
    const name_pattern = /^[A-Za-z\s]+$/;
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const number_pattern = /^[0-9]{10}$/;
    var flag = true;
  
    if (!name_pattern.test(firstName) || !name_pattern.test(lastname)) {
      flag = false;
      alert("Invalid Name Format, check and submit again");
    }
  
    if (!email_pattern.test(email)) {
      flag = false;
      alert("Invalid Email Format,check and submit again");
    }
  
    if (!number_pattern.test(number)) {
      flag = false;
      console.log("wrong number");
      alert("Invalid number length, check and submit again");
    }
  
    if (!name_pattern.test(position)) {
      flag = false;
      alert("Invalid applied position, check and submit again");
    }
  
    if (flag) {
      localStorage["firstName"] = firstName;
      localStorage["lastname"] = lastname;
      localStorage["mailid"] = email;
      localStorage["number"] = number;
      localStorage["positionname"] = position;
      alert("You have successfully applied for the"+position+" job");
    }
  
    return flag;
  }
  
window.onload = function() {
    const firstName = document.getElementsByName("f-name")[0];
    const lastname = document.getElementsByName("l-name")[0];
    const email = document.getElementsByName("email")[0];
    const num = document.getElementsByName("phone-number")[0];
    const position = document.getElementsByName("appliedposition")[0];
  
    var data = localStorage.getItem('firstName');
    if (data !== null) {
      firstName.value = data;
      data = localStorage.getItem('lastname');
      lastname.value = data;
      data = localStorage.getItem('mailid');
      email.value = data;
      data = localStorage.getItem('number');
      num.value = data;
      data = localStorage.getItem('positionname');
      position.value = data;
    }
  }
  