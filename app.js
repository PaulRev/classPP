class Person {
  constructor(names, age, height){
    this.names = names;
    this.age = age;
    this.height = height;
  }
  showdata() {
    return `[Name is: ${this.names}] 
            [Age is: ${this.age}] 
            [Height is: ${this.height}]`;
  }
  heightFun(){
    switch(person1.height){
        case 170:
            return `It is equal to 170 cm`;
            break;
        case 175:
            return `It is equal to 175 cm`; 
            break;
        default:
            return `different
                    different
                    different
                    different
                    `;       
    }
  }

}
const person1 = new Person("Piero", 22, 170);

console.log(person1.showdata());
console.log(person1.heightFun());
