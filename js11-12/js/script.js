$(function() {
    $('.carousel-wrapper').carousel();

    var template = $('#tmpl_item').html(),
      data = {
        title: 'Тарасенко Алексей Владимирович',
        link: [
          'img/img0.jpg',
          
          'https://www.facebook.com/profile.php?id=100003839317784',
        ],
        alt: 'мы с любимой женой',
        text: [
          'Преподаватель в ДонДУУ',
          'Я учу Fronend потому что: ',
          'Это весело',
          'Это интересно',
          'Это перспективно',
          'Мой контактный телефон',
          '+380634710390',
          'Моя страничка на Facebook ',
          'www.facebook.com',
           'Мой фидбек',
           'Frontend - вещь хорошая!'
        ]
      }
      content = tmpl(template, data);

  $('body').append(content);
});
