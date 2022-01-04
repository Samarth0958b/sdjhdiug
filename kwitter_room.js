
var firebaseConfig = {
      apiKey: "AIzaSyDQn-05xe4n8zn6Rx29Kno9vKyVOvCSpZ0",
      authDomain: "kwitter-p-f781a.firebaseapp.com",
      databaseURL: "https://kwitter-p-f781a-default-rtdb.firebaseio.com",
      projectId: "kwitter-p-f781a",
      storageBucket: "kwitter-p-f781a.appspot.com",
      messagingSenderId: "815317439834",
      appId: "1:815317439834:web:d971735525992b11bb8f63",
      measurementId: "G-72V21S5E47"
    };
firebase.initializeApp(firebaseConfig);
   User_name = localStorage.getItem("User_name");
   console.log("User_name",User_name);

   document.getElementById("User_name").innerHTML="Welcome " + User_name + " !";
   
   function addroom(){
      room_name=document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({
          value : "adding a room name"
      });
      localStorage.setItem("Room_name",room_name);
      window.location="kwitter_page.html"
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_name",room_name)
       row="<div class='room_name' id=" + Room_names + "onclick='redirectTotheRoom(this.id)'>#" + Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

  
 function redirectTotheRoom(name) {
     console.log(name);
     localStorage.setItem("Room_name",name);
     window.location="Kwitter_page.html";
 }

 function logout()
 {
     localStorage.removeItem("Room_name");
     localStorage.removeItem("User_name");
       window.location="index.html";
 }