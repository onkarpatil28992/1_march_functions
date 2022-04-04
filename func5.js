//constructor function
function emp(){
    this.name =  'onii',
    this.nmae =22,
    this.data = function(){
        console.log('hello');
    }
}
//createe a object
const emp1=new emp();
const emp2=new emp()

//access the properties
console.log(emp1.name);
console.log(emp2.name);

function product(pro_name, pro_price,pro_type){
    //assigning parameter value to calling object
    this.pro_name=pro_name;
    this.pro_price= pro_price;
    this.pro_type=pro_type;
this.greet=function(){
    return('product detail ->' + ' +this.pro_name+' +'this.pro_price' + 'this.pro_type' );
}   
const pro1 = new product('laptop', 400000, 'electric');
const pro2 = new product('mobile', 20000, 'digital'); 

console.log(pro1.pro_name, pro1.pro_price, pro1.pro_type);
console.log(pro2.pro_name, pro2.pro_price, pro2.pro_type);

}