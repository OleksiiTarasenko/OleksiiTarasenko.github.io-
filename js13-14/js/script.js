 $(function() {
   'use strict';  
   
   var test = [
     
      {
      question: 'Чему равно поле prototype у любого объекта (не функции)?',
      answers: [
                { option: 'undefined', correct: true },
                { option: 'Object', correct: false },
                { option: '__proto__', correct: false },
      ]
      },
      {
      question: 'Какое поле объекта ссылается на его прототип?',
      answers: [
                { option: ' __proto__', correct:  true},
                { option: ' constructor', correct: false },
                { option: 'prototype', correct: false },
      ]
    },
    {
      question: 'Чему равен this внутри конструктора?',
      answers: [
                { option: 'Самой функции-прототипу', correct: false },
                { option: 'Объекту, создаваемому при помощи данного конструктора ', correct: true  },
                { option: 'Прототипу объектов, созданных при помощи данного конструктора.', correct: false},
      ]
  }
  ];
 // save to local storage
  var testContent = JSON.stringify(test),
      testLocal = localStorage.setItem("test", testContent);

  //  load from local storage
  var testLoaded = localStorage.getItem("test"),
      testReady = JSON.parse(testLoaded);
      console.log( testReady);
 // template
  var html = $('#tmpl').html(),
      content = tmpl(html, {
        data: testReady
      });

  $('body').append(content);
// get answers
  $('input:checkbox').on( 'click', function() {
    $(this).parent().siblings().children().each(function(){
      ($(this).attr('checked')) ? $(this).attr('checked', true) : $(this).attr('checked', false);
    });
});
// get correct answers
  $('#button').on('click', function(e) {
    e.preventDefault();
    var correctAnswers = [];
    function getCorrectAnswers() {
      for (var i = 0; i < testReady.length; i++) {
        var testAnswers = testReady[i].answers;
        for (var j = 0; j < testReady.length; j++) {
          var currentAnswer = testReady[i].answers[j].correct;
          correctAnswers.push(currentAnswer);
        }
      }
    };
     
    // put answers to array
    var givenAnswers = [];
    function getGivenAnswers() {
      $('input:checkbox').each(function () {
        ($(this).prop('checked')) ? givenAnswers.push(true) : givenAnswers.push(false);
      });
    };

    // compare correct answers with given 
    var answered = 0;
    var wrongAnswers =[];
    function check() {
      for (var i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i] === true) {
          if (correctAnswers[i] === givenAnswers[i]) {
            answered++;
          } else wrongAnswers.push(Math.floor(i/3)+1);
        }
      }
    };

    var testEnd;
    function testPassed() {
      testEnd = (answered == testReady.length) ? true : false;
    };

    getCorrectAnswers();
    getGivenAnswers();
    check();
    testPassed();
  
    // modal
    var modal;
   
   modal = (testEnd) ? ('<div class="modal-inner"><h1>Поздравляем! <br>Все ответы правильны!</h1></div>') : ('<div class="modal-inner"><h1>Попробуй еще раз!</h1><p> Не верны ответы на следующие вопросы: '+wrongAnswers+'</p></div>');
   var modalLayout= '<div class="modal"></div>';
   var exitButton = '<a class="center-block btn btn-primary" id="exit">Выход</a>';
    $('body').append(modalLayout);
    $('.modal').append(modal);
    $('.modal-inner').append(exitButton);

    $('#exit').on('click', function() {
      $('input:checkbox').prop('checked', false);
      $('.modal').remove();
      localStorage.clear();
      console.clear();
      return false;
    });

  });


});

