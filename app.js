

const internetStatus = document.getElementById("internetStatus");

window.addEventListener('load', function(event){
    detectInternet();
});
window.addEventListener('online', function(event){
    detectInternet();
});
window.addEventListener('offline', function(event){
    detectInternet();
});

function detectInternet(){

  if(navigator.onLine){
     internetStatus.textContent="You are back online";
     internetStatus.style.backgroundColor="green";
  }else{
    internetStatus.textContent="No Internet Connection";
    internetStatus.style.backgroundColor="red";
  }
}
