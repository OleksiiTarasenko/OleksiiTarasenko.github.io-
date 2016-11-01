
$(function()
{
function Human(name, age, gender, height, weight) {
  this.name = name|| 'Jane';
  this.age= age|| 45;
  this.gender=gender|| 'female';
  this.height=height || 160;
  this.weight=weight|| 54;
  };

function Worker(job, wage,name, age, gender, height, weight) {
  
  this.job = job ||'SCM';
  this.wage = wage || 10000;
  Human.apply(this, [name, age, gender, height, weight]);
  };
Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.working = function() {
      console.log(this.name + ' is working at ' + this.job);
};

  function Student(uni, salary, name, age, gender, height, weight) {
  this.uni = uni||'MIT';
  this.salary =salary||600; 
  Human.apply(this, [name, age, gender, height, weight]);
};
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.watching = function() {
      console.log(this.name + ' is watching series');
};

 var human = new Human('Vasja', 45, 'male', 172, 90);
 var worker_1 = new Worker('BBC', 9000);
 var worker_2 = new Worker('IBM', 300000,'Dick', 50, 'male', 195, 120);
 var student_1 = new Student('DPI',0,'Peter', 16, 'male', 168, 68 );
 var student_2 = new Student('Oxford',545,'Mary', 21, 'female', 179, 68 );

  
  console.log('Human - ', human);
  console.log('Worker - ', worker_1);
  worker_1.working();
  console.log('Worker - ', worker_2);
  console.log('Student - ', student_1);
  console.log('Student - ', student_2);
  student_2.watching();
});

