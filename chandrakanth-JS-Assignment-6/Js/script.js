let users ;
function openmodal() { // to open dialog box 
  var modal = document.querySelector("#modalcreate");
  modal.showModal();
}

function closeModal() { // to close the dialog box 
  var modal = document.querySelector("#modalcreate");
  modal.close();
}
function renerlist(){

  const tablemod = document.querySelector(".tables");
  
  tablemod.innerHTML=`  <tr>
  <th>Name  </th>
  <th>State</th>
  <th>Age</th>
  <th>Functions</th>
</tr>`;
  
  for(let i of users){
const row = document.createElement('tr');
  row.innerHTML=` <td>${i.Name}</td>
  <td>${i.State}</td>
  <td>${i.Age}</td>
 
  <td>
      <span class="icons">
              <i class="fa-solid fa-pen-to-square" data-id=${i.id} onclick="addedittopage(event)" ></i>//
              <i class="fa-solid fa-trash" id=${i.id} onclick= "deleteUser(event)"></i>
      </span>
  </td>`;
  tablemod.append(row);// appending every row to the output;
  }
}


function fetchUsers() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() { 
  if (this.readyState== 4 && this.status == 200) {
  users=JSON.parse((this.responseText));
  renerlist();
}

};
xhttp.open("GET",
"https://64de03df825d19d9bfb1e17a.mockapi.io/data", true);
xhttp.send();
}
function addUser() {
  let name =document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let state = document.getElementById("state").value;
  if(age=="" || name=="" || state==""){
    alert("enter valid data");
    return;
  }
  
var xhttp = new XMLHttpRequest(); 
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
   closeModal();
}

};
xhttp.open("POST",
"https://64de03df825d19d9bfb1e17a.mockapi.io/data", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(JSON.stringify({"Name":name,"Age":age,"State":state}));
closeModal();
renerlist();
}
function addedittopage(event){
  let rowid = event.target.dataset.id;// fecting the element that event triggered 
  let row = event.target.parentNode.parentNode.parentNode;
  let cells = row.querySelectorAll("td");
  let name = cells[0].innerText;
  let state = cells[1].innerText;
  let age = cells[2].innerText;// to get context of td in the table ;
  cells[0].innerHTML =`<input type='text' id = "r1" value=${name}>` ;
  cells[1].innerHTML =`<input type='text' id ="r2" value=${state}>`;
   cells[2].innerHTML=`<input type='text' id="r3" value=${age}>`;
   let button = document.createElement("button");
   button.id="updatebutton";
   button.innerText="savechanges";
   console.log(rowid);
   button.addEventListener('click',function(){
    updateUser(rowid)})
   
   document.body.append(button);

}




function updateUser(rowid) {

  let x = document.getElementById("r1").value;
  let y = document.getElementById("r2").value;
  let z = document.getElementById("r3").value;
  console.log(x);
  console.log(rowid);
  

var xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
  console.log("hlo");
    fetchUsers();
}

};
xhttp.open("PUT",
`https://64de03df825d19d9bfb1e17a.mockapi.io/data/${rowid}`, true);
xhttp.setRequestHeader("Content-type", "application/json");
 xhttp.send(JSON.stringify({"Name":x,"State":y,"Age":z}));
 
}


function deleteUser(event) {// deleting the particular 
  let id = event.target.id;//event.target refers to the DOM (Document Object Model) element that triggered a specific event. 
  //The event object contains information about the event that occurred, such as a click, key press, or other types of interactions.
  console.log(id);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) { 
  alert("Deleted sucuessfully");
  renerlist();
  fetchUsers();
}
};
xhttp.open("DELETE",
`https://64de03df825d19d9bfb1e17a.mockapi.io/data/${id}`, true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();

}
fetchUsers();

