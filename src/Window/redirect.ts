function redirect(url: any) {

  window.location.replace(url);
    
}

function redirectTimer(url: any, time: number){
    
  setTimeout("window.location.href = " + url , time );

}