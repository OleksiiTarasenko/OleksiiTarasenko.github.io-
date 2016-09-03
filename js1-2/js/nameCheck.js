var array = new Array(5)
for (var i = 0; i<=4 ; i++)
	{
    array[i]=prompt('Введите имя', '');
 	} 
 console.log('Список пользователей:', array);
do {
 var name = prompt('Введите Ваше имя', '');
 if  	( name!=false )
 {
 	break;
 }
 alert ( 'Повторите ввод!' );
}
while (	true )

 for (var i = 0; i<=4 ; i++)
	{
		if (array[i] === name)  {
			alert ( name+', вы успешно вошли!' );
			console.log( name+', вы успешно вошли!' );
			break;
		}
		if (i==4) {
			alert ( 'Ошибка!' );
			console.log ( 'Ошибка!' );
		}
}