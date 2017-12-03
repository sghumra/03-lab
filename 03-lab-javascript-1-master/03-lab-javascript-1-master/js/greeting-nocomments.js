(function(){
    let myName = document.getElementById("my-name");
    let myGreeting = document.getElementById("my-greeting");
    let userName = document.getElementById("user-name"); 
    let getName = document.getElementById("get-name");
    let myHeader = document.getElementById("my-hgreeting");
  
  function PerformGreeting() {
      myName.innerHTML = userName.value;
      myHeader.innerHTML = myGreeting.value;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
