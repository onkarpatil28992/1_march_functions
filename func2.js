let username = 'onkar'; //outer variable

function showdetail(){
    username='onkar patil'; //modified outer variable
    let detail='candidate '  + username;
    alert(detail);
}
alert(username);
showdetail();
alert(username);