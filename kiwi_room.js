var firebaseConfig = {
      apiKey: "AIzaSyDFqA03mzxpnqGAiQch3YYlVla0z7SKkFw",
      authDomain: "kwitter-rules.firebaseapp.com",
      databaseURL: "https://kwitter-rules-default-rtdb.firebaseio.com",
      projectId: "kwitter-rules",
      storageBucket: "kwitter-rules.appspot.com",
      messagingSenderId: "832010304945",
      appId: "1:832010304945:web:e12ef570aff95b61d0d190"
    };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      localStorage.setItem("room_name",name);
      window.location="kiwi_page.html";
}

function addUser(){
      user_name=document.getElementById("user_name").value ;
      localStorage.setItem("user_name",user_name);
      window.location="kiwi_room.html";
  }
  
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }

  function addRoom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name);
window.location="kiwi_page.html";
}