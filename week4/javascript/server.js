function server(someObject) {
    let myarray = someObject.url.split('/');
    
    if (myarray[4] == 'get_in') {
        let toreturn;
        toreturn = check_user(someObject.myUser);
        return toreturn;
    }
    else {

        if (myarray[4] == 'get_paste_arr') {
            let toreturn;
            toreturn = return_user(user.current_user);
            return toreturn;
        }
        else {
            if (myarray[4] == 'post_set') {
                let toreturn;
                toreturn = set_user(user.current_user);
            }
            else {
                if (myarray[4] == 'post_save') {
                    let toreturn;
                    toreturn = push_and_save_inArray(someObject.myUser, someObject.arr);
                    return toreturn;
                }
                else {
                    if (myarray[4] == 'put') {
                        let toreturn;
                        toreturn = replace_array(user.current_user, someObject.arr);
                        return toreturn;
                    }
                    else{
                        if (myarray[4] == 'delete') {
                            let toreturn;
                            toreturn = search_and_delete(someObject,someObject.arr);
                            return toreturn;
                        } 
                        else {
                            alert("somethings not right");
                        }
                        
                    }
                   


                }
            }
        }
    }
}
   
