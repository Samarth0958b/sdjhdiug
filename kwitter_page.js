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

   user_name=localStorage.getItem("User_name");
   room_name=localStorage.getItem("Room_name");

   function send()
   {
         msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
            name:user_name,
            meassage:msg,
            like:0
        });
        document.getElementById("msg").value=" ";
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
