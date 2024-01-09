//prints all messages of the current user to the screen
function check_user(myCurrUser) {
    let local=localStorage.getItem(myCurrUser.current_user);
    let j=JSON.parse(local);
    if (local&&j.password==myCurrUser.password) {
        
        return true;
    } 
    else {
        return false ;
    }
}
function return_user(email){
    let arr=localStorage.getItem(email);
    return arr;
}
//saves a new message in the array
function push_and_save_inArray(user,curent_object) {
  let use=localStorage.getItem(user.current_user) ;
  let another=JSON.parse(use);
  another.myownarray.push(curent_object);
    localStorage.setItem(user.current_user,JSON.stringify(another));
}
function set_user(email){
let myjson=JSON.stringify(user);
localStorage.setItem(email, myjson);
}
function replace_array(email,arr){
   let jas=JSON.stringify(arr);
   let h=localStorage.getItem(email);
   let e=JSON.parse(h);
    localStorage.setItem(e.myownarray,jas );
}
function search_and_delete(myusernow,delete_from_array){
    let jaons=JSON.stringify(delete_from_array);
        localStorage.setItem(myusernow.myUser.current_user,jaons);
}