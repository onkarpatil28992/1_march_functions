function employee(name,designation,yearofbirth){
    this.name= name;    //properties from line 2-4
    this.designation=designation;
    this.yearofbirth=yearofbirth;
    //method:
    employee.prototype.calculateage = function(){
        console.log('the current age is : ' +(2022-this.yearofbirth));
    }
}
    console.log(employee.prototype);

    //object
    let emp1= new employee('alex', 'jr dev','1999');
    console.log(emp1);
    emp1.calculateage();
    let emp2= new employee('ross', 'sr dev','1989');
    console.log(emp2);
    emp2.calculateage();



