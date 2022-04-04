function protochain(){
    this.name='protochain';

}
protochain.prototype.name='java';
protochain.prototype.age=20;

const p1 = new protochain();

console.log(p1.name);
console.log(p1.age);
console.log(p1._proto_);