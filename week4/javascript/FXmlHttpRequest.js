
class FXmlHttpRequest {
    constractor() {

    }
    open(method,myUser, url,arr=null) {
        this.method = method;
        this.url = url;
        this.myUser=myUser;
        if(arr!=null){
            this.arr=arr;
        }
    }
    send(){
        let toreturn;
        toreturn=mynetwork(this);
        return toreturn;
    }


}