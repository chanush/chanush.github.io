init();

function init() {
    let d = new Date()
    let da = new Date('2024-2-14')
    let today = diference_between_two_dates(d, da)
    if (today !== 0) {
        document.getElementById(today).style.backgroundColor = "rgba(8, 245, 8, 0.826)";
        document.getElementById(today).style.borderRadius = "50%";
        document.getElementById(today).style.width = "19px";
    }
}
let user = {
    username: '',
    password: '',
    current_user: '',
    myownarray: []
}

function diference_between_two_dates(date1, date2) {
    var timeDiff = Math.abs(date1.getTime() - date2.getTime());
    let today = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return today
}

function Today(t) {

    let d = new Date(t)
    let da = new Date('2024-2-14')
    let today = diference_between_two_dates(d, da)
    console.log(today)
    let element = document.getElementById("mydate");
    let inethtml = `
    <div>
        <h1 class=" inhtml" id="date">עוד </h1>
        <div>
            <h1 class=" inhtml" style="vertical-align: middle;
            display: inline-block;
            padding-bottom: 171px;
            ">יום</h1>
            <img class="gold" src=${`../pictures/${today}_gold.png`}>
        </div>
        <h1 class=" inhtml" style="margin-top: -120px; font-size: 60px;border-bottom: 4px double black; ">!!!! החתונה</h1>
    </div>`
    element.innerHTML =inethtml;
    if (today===1) {
        let inethtml = `
        <div>
            <h1 class=" inhtml" id="date">עוד </h1>
            <div>
                <h1 class=" inhtml" style="vertical-align: middle;
                display: inline-block;
                padding-bottom: 171px;
                ">יום</h1>
                <img class="gold" src=${`../pictures/${today}_gold.png`}>
            </div>
            <h1 class=" inhtml" style="margin-top: -182px ; font-size: 40px;border-bottom: 4px double black; ">  !!..החתונה !!!! ויש לך בונוס מיוחד</h1>
            <h1 class=" inhtml" style="margin-top: -32px; font-size: 60px;border-bottom: 4px double black; ">! יומיים נפתחים לך ביום אחד </h1>
        
            </div>`
        element.innerHTML =inethtml;
    }
    let pdf_video = document.getElementById("pdf_video");
    let inerthtml = `
    <div>
        ${ congratulations[today][0]}
    </div>`
    pdf_video.innerHTML =inerthtml;
    


}

function congratulations_onclick(){
    document.getElementById("lognin").style.display = "none";
    document.getElementById("signin").style.display = "block";
   


    // let pdf_video=document.getElementById("pdf_video");
    // let innerHTML=`
    
    // `
    // pdf_video.innerHTML=innerHTML
}
function congratulations_onclick(number){
    let index_number= document.getElementsByClassName("current").named

}

function infoOnClick(){
    var infomodal = document.getElementById("infomodal");
    let closeinfo = document.getElementsByClassName("closeinfo")[0];
    infomodal.style.display = "block";
    closeinfo.onclick = function() {
        infomodal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == infomodal) {
            infomodal.style.display = "none";
        }
    }
    let element = document.getElementById("myinfo");
    let inethtml = `
    <div>
        <h1 class=" inhtml" >!!לדבורה-כלה מהממת שלנו</h1>
        <h1 class=" inhtml" >!ברוכה הבאה ללוח ספירת הגומר שלך</h1>
        <h3>
            (:כדי למנוע את הרס אפקט ההפתעה לא תינתן אפשרות לצפיה בתאריכים אשר יבואו בעתיד
           <br>
                😉 אך מומלץ* לנסות בכל זאת
             <br>
                ❣️❣️תהני
        </h3>
        <h4>.כל המומלצים הם בגדר חובה*</h4>
        <h4>.אזהרה למשתמש: האתר עשוי להכיל תכנים הגורמים לצחוק רב. אנא שמרו על ערנותכם**</h4>
         </div>`
    element.innerHTML =inethtml;

}
function date_has_not_passed(today,pressed_date){
    let element = document.getElementById("mydive");
    let inethtml;
    let wedding_day = new Date('2024-2-14')

    if(diference_between_two_dates(pressed_date,wedding_day)<=0){
        inethtml = `
        <div>
        <h1>${wedding_day_list[Math.floor(Math.random() * 39)%7]}</h1>    
        </div>`
    }
    else{
    if(diference_between_two_dates(today,pressed_date)==1){
        inethtml = `
        <div>
        <h1>${not_the_time_yet[2].replace('()',diference_between_two_dates(today,new Date('2024-2-14')))}</h1>    
        </div>`
    }
   else{
    let random_number=Math.floor(Math.random() * 30)%10;

    random_number=random_number==2?random_number+1:random_number
    console.log('num: '+random_number)
    inethtml = `
    <div>
    <h1>${not_the_time_yet[random_number]}</h1>    
    </div>`
   }
}
    element.innerHTML =inethtml;
}

function span(num) {
    let today = new Date()
    let date = new Date(num)
    let wedding_day = new Date('2024-2-13')

    if (date > today && today < wedding_day) { //date has not passed yet
        date_has_not_passed(today,date)
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {        //date has passed 
        Today(num)
        var datemodal = document.getElementById("dateus");
        let spandate = document.getElementsByClassName("closedate")[0];
        datemodal.style.display = "block";
        spandate.onclick = function() {
            datemodal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == datemodal) {
                datemodal.style.display = "none";
            }
        }
        document.getElementById("signin").style.display = "none";
        document.getElementById("lognin").style.display = "block";
    //     let element = document.getElementById("pdf_video");
    //     let inethtml = `
    //     <div>
    // ${
    //     congratulations[0][0]
    // }
    //          </div>`
    //     element.innerHTML =inethtml;

    }
}

function sign_out() {
    document.getElementById("list_page").style.display = "none";
    document.getElementById("signin").style.display = "block";
}
function toCalendar(){
    document.getElementById("lognin").style.display = "none";
    document.getElementById("signin").style.display = "block";
   
    // let pdf_video=document.getElementById("pdf_video");
    // let innerHTML=`
    
    // `
    // pdf_video.innerHTML=innerHTML
}

// function submitLog(eventArgs) {
//     eventArgs.preventDefault();
//     let request = new FXmlHttpRequest();
//     let bool = true;
//     try {
//         user.current_user = document.getElementById("email1").value;
//         user.password = document.getElementById("passl").value;
//         user.username = document.getElementById("lusername").value;
//         if (user.current_user == "" || user.password == "" || user.username == "") {
//             throw new RangeError('the input is empty.please fill in the details');
//         }
//         //   else {
//         //     let reg_exp_email = user.current_user.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//         //     let reg_exp_password = user.password.match(/\W/g);//searches for what is not sopposed to be there
//         //     if (reg_exp_email < 0 || reg_exp_password.length > 0) {
//         //       document.getElementById("email1").value = '';
//         //       document.getElementById("passl").value = '';
//         //       throw new RangeError('the email or password are not valid.');
//         //     }
//         //   }
//     } catch (ex) {

//         if (ex instanceof RangeError) {
//             bool = false;
//             alert(ex); // statements to handle this very common expected error
//         }
//     }
//     if (bool == true) {
//         let reg_exp_email = user.current_user.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//         let reg_exp_password = user.password.match(/\W/g);
//         let url_log = 'https://js/chaniandchaya/get_in';
//         request.open('GET', user, url_log);
//         if (request.send() == false) {

//             document.getElementById("lusername").value = '';
//             document.getElementById("passl").value = '';
//             document.getElementById("email1").value = '';
//             alert("user has not been found,please sign in");
//         } else {
//             if (reg_exp_email != null && reg_exp_password == null) {
//                 //שליחה לפונקציה
//                 document.getElementById("lusername").value = '';
//                 document.getElementById("passl").value = '';
//                 document.getElementById("email1").value = '';
//                 app.nav(eventArgs);
//             } else {
//                 alert("email or password are ot valid");
//             }
//         }
//     } else {
//         bool = true;
//     }
// }

// function submitSignin(eventArgs) {
//     eventArgs.preventDefault();
//     let request_again = new FXmlHttpRequest();
//     let bool = true;
//     try {
//         user.username = document.getElementById('susername').value;
//         user.password = document.getElementById('passs').value;
//         user.current_user = document.getElementById("gemail").value;
//         if (user.current_user == "" || user.password == "" || user.username == "") {
//             throw new RangeError('the input is empty.please fill in the details');
//         }
//     } catch (ex) {

//         if (ex instanceof RangeError) {
//             bool = false;
//             alert(ex); // statements to handle this very common expected error
//         }
//     }
//     if (bool == true) {
//         let reg_exp_email = user.current_user.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//         let reg_exp_password = user.password.match(/\W/g);
//         let url_sign = 'https://js/chaniandchaya/get_in';
//         request_again.open('GET', user, url_sign);
//         //האם המשתמש נמצא?
//         if (request_again.send() == false) {
//             if (reg_exp_email != null && reg_exp_password == null) {
//                 let url_new = 'http://js/chaniandchaya/post_set'
//                     //מגדיר משתמש חדש
//                 request_again.open("POST", user.current_user, url_new);
//                 request_again.send();
//                 //שליחה לפונקציה
//                 document.getElementById("susername").value = '';
//                 document.getElementById("passs").value = '';
//                 document.getElementById("gemail").value = '';
//                 app.nav(eventArgs);
//             } else {
//                 alert("the email or password are not valid.");
//             }
//         } else {
//             document.getElementById("susername").value = '';
//             document.getElementById("passs").value = '';
//             document.getElementById("gemail").value = '';
//             alert("please go to the log in button");
//         }
//     } else {
//         bool = true;
//     }
// }

// function open_text() {
//     document.getElementById("textbox").style.display = "block";
//     document.getElementById("cancle").addEventListener('click', cancle_btn);
//     document.getElementById("save").addEventListener('click', save_btn);
// }

// function botton_delete_pressed(eventArgs) {
//     eventArgs.preventDefault();
//     let btn2 = eventArgs.currentTarget.id;
//     document.getElementById("current_list").innerHTML = "";
//     let request_1 = new FXmlHttpRequest();
//     let url_2 = 'http://js/chaniandchaya/get_paste_arr'
//     let another_user;
//     request_1.open("POST", user, url_2);
//     another_user = request_1.send();
//     let returned_user = JSON.parse(another_user);
//     let help_user = returned_user;
//     if (returned_user && help_user.myownarray) {
//         for (var i = 0; i < help_user.myownarray.length; i++) {
//             if (help_user.myownarray[i]._code === btn2) {
//                 help_user.myownarray.splice(i, 1);
//             }
//         }
//     }
//     let url_delete = 'http://js/chaniandchaya/delete'
//     let arr_2;
//     let request_again6 = new FXmlHttpRequest();
//     request_again6.open("PUT", returned_user, url_delete, help_user);
//     arr_2 = request_again6.send();
//     current_list();
// }

// function current_list() {
//     document.getElementById("current_list").innerHTML = '';
//     let check = array_object.current_list_isitClicked++;
//     if (check % 2 == 0) {
//         document.getElementById("current_list").style.display = 'none';
//     } else {
//         document.getElementById("current_list").style.display = 'block';
//     }
//     let request_again2 = new FXmlHttpRequest();
//     let url_pastearr = 'http://js/chaniandchaya/get_paste_arr'
//     let paste;
//     request_again2.open("GET", user.current_user, url_pastearr);
//     paste = request_again2.send();
//     let obj = JSON.parse(paste);
//     if (check % 2 == 0) {
//         document.getElementById("current_list").style.display = 'none';
//     } else {
//         document.getElementById("current_list").style.display = 'block';
//     }
//     loop_index(obj.myownarray);
// }

// function loop_index(newarrray) {
//     newarrray.forEach((element) => {
//         let mydiv;
//         let mysection;
//         mydiv = document.querySelector('#current_list');
//         mysection = ` <section class="divs" id="tasks${element._code}">
//      <p>${element._content}</p>
//      <p>${element._time}</p>
//      <p>${element._date}</p>
//      <button class="btn" id=${element._code}>Delete</button>
//      <button class="btn" id="put${element._code}">Update</button>
//      </section>`;
//         mydiv.insertAdjacentHTML('beforeend', mysection);
//         //attach click event to the button
//         let btn = document.getElementById(`${element._code}`);
//         btn.addEventListener('click', botton_delete_pressed);
//         let btn_update = document.getElementById(`put${element._code}`);
//         btn_update.addEventListener('click', update_content);
//     });
// }

// function cancle_btn() {
//     document.getElementById("time").value = '';
//     document.getElementById("date").value = '';
//     document.getElementById("content").value = '';
//     document.getElementById("textbox").style.display = "none";
// }
// function save_btn() {
//     const date_time = new Date();
//     let mycontents = document.getElementById("content").value;
//     let mytimes = document.getElementById("time").value;
//     let dates = document.getElementById("date").value;
//     if (mytimes == '' || dates == '') {
//         if (mytimes == '') {
//             document.getElementById("time").value = `${date_time.getHours()}:${date_time.getMinutes()}`;
//         }
//         if (dates == '') {
//             document.getElementById("date").value = `${date_time.getDay()}${date_time.getDay()}/${date_time.getMonth() + 1}${date_time.getMonth() + 1}/${date_time.getFullYear()}`;
//         }
//         mycontents = document.getElementById("content").value;
//         mytimes = document.getElementById("time").value;
//         dates = document.getElementById("date").value;
//     }
//     if (mycontents == '') {
//         document.getElementById("content").value = '';
//         alert('content is not valid.please try again')
//     } else {

//         let netask = new array_object(mycontents, mytimes, dates);
//         document.getElementById("time").value = '';
//         document.getElementById("date").value = '';
//         document.getElementById("content").value = '';
//         document.getElementById("textbox").style.display = "none";
//         let request_again3 = new FXmlHttpRequest();
//         let url_pastearr = 'http://js/chaniandchaya/post_save'
//         let arr_1;
//         request_again3.open("POST", user, url_pastearr, netask);
//         arr_1 = request_again3.send();
//         // } else {
//     }
//     if (dates.match(/(?=\d{2}([/-/.])\d{2}([/-/.])\1\d{4}$)/) == null) {} else {
//         document.getElementById("date").value = '';
//         alert('date is not valid.please try again');
//     }
//     if (mytimes.match(/(?=\d{2}([:])\d{2}$)/) != null) {} else {
//         document.getElementById("time").value = '';
//         alert('time is not valid.please try again')
//     }
// }

// function update_content(eventArgs) {
//     eventArgs.preventDefault();
//     let btn3 = eventArgs.currentTarget.id;
//     let hash = btn3.replace('put', '');
//     document.getElementById("textbox").style.display = "block";
//     document.getElementById("current_list").innerHTML = "";
//     let request_2 = new FXmlHttpRequest();
//     let url_3 = 'http://js/chaniandchaya/get_paste_arr'
//     let another_user1;
//     request_2.open("POST", user, url_3);
//     another_user1 = request_2.send();
//     let returned_user1 = JSON.parse(another_user1);
//     let help_user1 = returned_user1;
//     if (returned_user1 && help_user1.myownarray) {
//         for (var i = 0; i < help_user1.myownarray.length; i++) {
//             if (help_user1.myownarray[i]._code === hash) {
//                 document.getElementById("time").value = help_user1.myownarray[i]._time;
//                 document.getElementById("date").value = help_user1.myownarray[i]._date;
//                 document.getElementById("content").value = help_user1.myownarray[i]._content;
//                 help_user1.myownarray.splice(i, 1);
//             }
//         }
//     }
//     document.getElementById("cancle").addEventListener('click', cancle_btn);
//     document.getElementById("save").addEventListener('click', save_btn);
//     let url_delete1 = 'http://js/chaniandchaya/delete'
//     let arr2;
//     let request_again7 = new FXmlHttpRequest();
//     request_again7.open("PUT", returned_user1, url_delete1, help_user1);
//     arr2 = request_again7.send();
//     current_list();
// }