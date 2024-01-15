let not_the_time_yet = [
    "😜מידת הסבלנות חשובה מאד בחיי נישואין",
    "🤗נכון שאת כבר מחכה לגלות את ההפתעות שיש בהמשך... אבל לכל זמן ועת",
    "..אם יש לך כוח לחכות לעוד () ימים, מה זה כבר בשבילך לחכות למחר",
    "..ידעת שזה לא ייפתח, אבל כל הכבוד שאת מתעניינת במשפטים המוזרים שחברותייך כתבו",
    "👏👏👏👏👏👏👏👏👏👏👏<br>\
😜😜😜😜😜😜😜😜😜😜<br>\
🥱🥱🥱🥱🥱🥱🥱🥱🥱<br>\
🫣🫣🫣🫣🫣🫣🫣🫣<br>\
🤫🤫🤫🤫🤫🤫🤫<br>\
🫢🫢🫢🫢🫢<br>\
🤭🤭🤭🤭<br>\
🤣🤣🤣<br>\
😂😂<br>\
😅<br>\
🤗טוב שפתחת, רק רצינו שתצחקי",
    "💯<br>\
!!!<br><br><br><br>\
לאאאאא<br>\
...אל תדאגי החתונה לא עוד מאה יום",
    "?אז מה התכונה הכי בולטת בדבורה'<br>\
       '?הסבלנות האין סופית שלה, הנכונות התמידית לעזור או העובדה שהיא תמיד מחייכת<br>\
      ' 🤣😂🙃...תשובה:'טוב, סבלנות אין לה...תראה, עוד פעם היא ניסתה לפתוח אותי\
       ",
    "😉🥳...נו....כבר למדת לאהוב הפתעות? כי יש כאן עוד אחת",
    "'??למה כל פעם יש כאן משפט אחר'",
    "😠...עד שאמרנו עלייך בשידוכים שיש לך סבלנות",
    "😉...אולי אחרי שתלחצי עוד אינסוף פעמים יהיה כאן משהו חדש"






]

let wedding_day_list = [
    "😠😤?!למה את בכלל מנסה",
    "לאאאאאאאאאאאאאאאאאאאאאאאאאאאאאאאא\
        <br>\
                !!!זה עוד לא הזמן\
             ",
    "  !?למה סתם להלחיץ😱😵‍💫",
    "...חכי חכי...רק עוד קצת",
    "...תנשמי עמוק😮‍💨 בסוף זה יגיע",
    "??שכחת איזה יום היום😂🤣",
    "😠אין כניסה לפני החופה"

]

let congratulations = {
    0: [
        `<iframe src="../pdf/מהחתן.pdf" width="90%" height="500" style="border:none;"></iframe>`
    ],
    1: [],
    2: [`<iframe src="../pdf/אביגיל.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    3: [`<iframe src="../pdf/חני-גיסה.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    4: [],
    5: [`<video src="../videos/בת דודה5.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    6: [`<video src="../videos/יעל.mp4" style ="width: 100%;
    height: 520px;"  controls="" class="congratulations" name="1"></video>`],
    7: [`<img src="../pdf/לחברה הכי הכי שלי!!.jpg" class="relative congratulations current" width="600" height="400" name="0">`],
    8: [`<video src="../videos/דודה.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    9: [`<video src="../videos/בן דוד.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    10: [`<video src="../videos/בת דודה6.MOV" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    11: [],
    12: [`<video src="../videos/בת שבע.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    13: [`<video src="../videos/יהודה_2.mp4" style ="width: 100%;
    height: 520px;"  controls="" class="congratulations" name="1"></video>`],
    14: [`<iframe src="../pdf/נעמי דריין.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    15: [`<iframe src="../pdf/אפרת בצון.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    16: [`<iframe src="../pdf/משה.pdf" width="90%" height="500" style="border:none;"></iframe>`],
    17: [`<iframe src="../pdf/ליאורה ורפאל.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    18: [],
    19: [`<video src="../videos/בת דודה2.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    20: [`<video src="../videos/בת דודה3.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    21: [`<iframe src="../pdf/רינה.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    22: [`<iframe src="../pdf/נעמה וענונו.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    23: [`<video src="../videos/בת דודה4.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    24: [`<iframe src="../pdf/חני-בת דודה.pdf" width="100%" height="500" style="border:none;"></iframe>`],
    25: [`<h1></h1>`],
    26: [`<video src="../videos/שרה.mp4" style ="width: 100%;
    height: 520px;"  controls="" class="congratulations" name="1"></video>`],
    27: [`<video src="../videos/בת דודה1.mp4" style ="width: 100%;
    height: 520px;" controls="" class="congratulations" name="1"></video>`],
    28: [`<video src="../videos/דיתי.mp4" style ="width: 100%;
    height: 520px;"  controls="" class="congratulations" name="1"></video>`],
    29: [`<video src="../videos/יהודה ושרה.mp4" style ="width: 100%;
    height: 520px;"  controls="" class="congratulations" name="1"></video>`],
    30: [],
    31: [],



}