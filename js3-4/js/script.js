var createDOM ={
	createTitle: function (tagName, tagText, tagClass, tagType) {
		var x = document.createElement (tagName);
		x.innerHTML = tagText;
		x.className = tagClass;
		x.setAttribute ('type', tagType);
		document.body.appendChild (x);
		},
	createList: function (tagText, tagClass) {
		var list = document.createElement ('ul');
		list.className = 'list';
		for (var i = 0; i <= (Questions.length-1); i++) {
				
		
				var listElement = document.createElement ('ul');
				listElement.className= 'listElement'
				listElement.innerHTML =(i+1)+'.'+ Questions [i];
				list.appendChild (listElement);
				
				
				for (var j = 0; j <=(Answers.length-1) ; j++) {
						var listQuestElement = document.createElement ('li');
						listQuestElement.className= 'listQuestElement'
						var listInput  = document.createElement ('input');
						listInput.setAttribute ('type', 'checkbox');
						listQuestElement.innerHTML = '<span>' + Answers[j] +'</span>';
						listQuestElement.insertBefore (listInput, listQuestElement.children[0]);
						list.appendChild (listQuestElement);
				}
				
				
		}
		document.body.appendChild (list);
	}

}


var titleTag = 'h1';
var titleClass = 'h1';
var titleText = ' Тест по программированию';
createDOM.createTitle (titleTag , titleText, titleClass);



var listElementName = 'Вопрос';
var listInput = 'Вариант ответа';
var listElementClass ='list';
var Questions = ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'];
var Answers = [' Вариант ответа №1', ' Вариант ответа №2',' Вариант ответа №3'];
createDOM.createList (listElementName, listElementClass);

var titleTag = 'button';
var titleClass = 'button';
var titleText = ' Проверить мои результаты';
var titleType = 'submit';
createDOM.createTitle (titleTag , titleText, titleClass, titleType);