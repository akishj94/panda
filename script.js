function random(num) {
    return Math.floor(Math.random()*num)
  }
  
  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5)+5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in forwards
    `
  }  
  function createBalloons(num) {
    var balloonContainer = document.getElementById("balloon-container")
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();           
        balloonContainer.append(balloon);
    }
  }  
window.onload = function() {
    createBalloons(30);
} 
document.addEventListener('DOMContentLoaded', ()=>{
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    let age = getAge('1997/07/04');
    document.querySelector('h3 span.age').innerHTML = age;
    let loaderText = gsap.timeline();
        loaderText.from('span.animMask', {
            duration: 1,
            yPercent: 200,
            ease: "easeInOut",
            skewY: 7,
            stagger: {
                amount: 0.2
            }
    });
    
});