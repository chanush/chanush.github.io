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
        <h1>${wedding_day_list[Math.floor(Math.random() * 54)%7]}</h1>    
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
    let random_number=Math.floor(Math.random() * 56)%11;

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
   
  

    }
}

function sign_out() {
    document.getElementById("list_page").style.display = "none";
    document.getElementById("signin").style.display = "block";
}
function toCalendar(){
    document.getElementById("lognin").style.display = "none";
    document.getElementById("signin").style.display = "block";
   
   
}
