
// function pow
function pow(a, b) {  
  var result = a;

  for (var i = 1; i < b; i++) {
    result *=a;
 	} 
 //проверка знака показателя степени
 
 if (b > 0) { 
 	result=result;
	} else { 
	    if (b==0) {
		  if (a==0) {
			 result=0;
		  } else {
		  	  result=1;
			}
		  }	else { 
			  if (a!=0) {
				  result=1/pow (a, -b);
			  } else {
				  result=0;
				}
			  }
  }
  //вывод результата
  return result;
}
// ввод аргументов функции
var a = prompt('Введите число', 0);
var b = prompt ('Введите показатель степени', 1);


//вывод на экран
var pow = pow (a, b)	;	
 alert ( pow );
 //вывод в консоль
console.log( a,' степени',b ) 
console.log( '************************************************************************************' );
console.log( 'Результат = ', pow );
console.log( '************************************************************************************' );