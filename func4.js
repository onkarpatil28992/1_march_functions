function checkage(){
    if(age >= 18){
        return true;

    }else{
        return confirm('are you old enough');

    }
}
let age=prompt('enter your age');
if (checkage(age)){
    alert('good to go');

}else{
    alert('go back')
}