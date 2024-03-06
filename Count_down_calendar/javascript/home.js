init();

window.PASS = "Debora&Israel_CountDown"

function init() {
    
}

function password() {
    let element = document.getElementById("password")

    if (window.PASS == element.value) {
        // change file path by local path!!!
        window.location.assign('../html/onepage.html');
   } else {

    }
}

function invatation_click() {
    
    let element = document.getElementById("invited")

    let inethtml = `
    <div >
     <input id="password" class="input_invatation"  placeholder="password" type="password" onKeyUp="password()" >
     
    <label class="input_invatation" style="margin-left: 26px;padding-top:19px; padding-bottom:19px;padding-left:5px;padding-right:5px">...ססמא לא נכונה עדיין</label>
    </div>
    `
    element.innerHTML = inethtml;







}
