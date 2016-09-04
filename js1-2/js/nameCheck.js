var array = new Array(5)
for (var i = 0; i<=4 ; i++)
	{
	do {
    array[i]=prompt('Введите имя '+(i+1), '');
     } while (array[i]==false);
 	} 
 console.log('Список пользователей:', array);
do {
 var name = prompt('Введите Ваше имя', '');
// if  	( name!=false )
 //{
 //	break;
 //}
 //alert ( 'Повторите ввод!' );
}
while (	name==false );

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