init();

window.PASS = "Debora&Israel_CountDown"

function init() {
    
}

function password() {
    let element = document.getElementById("password")

    if (window.PASS == element.value) {
        // change file path by local path!!!
        window.location.assign('file:///C:/Users/Chani/Desktop/%D7%90%D7%99%D7%A9%D7%99/%D7%90%D7%AA%D7%A8%20%D7%9C%D7%93%D7%91%D7%95%D7%A8%D7%94%20%D7%90%D7%95%D7%9C%D7%992/html/onepage.html');
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