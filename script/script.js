// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyByGRzvYTCA9GjHpVTnBy1idGBESB1JmEQ",
    authDomain: "rest-apiwdb.firebaseapp.com",
    databaseURL: "https://rest-apiwdb.firebaseio.com",
    projectId: "rest-apiwdb",
    storageBucket: "rest-apiwdb.appspot.com",
    messagingSenderId: "528249096849",
    appId: "1:528249096849:web:0bbcc6dcd24dde4ed58d30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// </script>

let btnGetData = document.querySelector('#btnGetData');

function getData() {
    firebase.database().ref('User').set({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    })    
    setData();
}

function setData() {
    firebase.database().ref("/").once("value", function(params) {
        params.forEach(element => {
            let getDataFromDBKey = element.key;
            let dataDiv = document.getElementById('data');
            let dataDiv2 = document.getElementById('data2');
            console.log(dataDiv);
            let getDataFtomDBData = element.val();
            dataDiv.innerHTML = getDataFtomDBData["name"];
            dataDiv2.innerHTML = getDataFtomDBData["email"]
            
        });        
    })
    
}
btnGetData.onclick = getData;

