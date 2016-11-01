$(function(){
  

  var xmlhttp = new XMLHttpRequest();

  function getJson(keyword, counter){

    xmlhttp.open('GET', 'https://www.googleapis.com/customsearch/v1?key=AIzaSyC8gmSpszCPsLDlSwkHHPYILpLpjCIsY00&cx=002517062426508094744:0v3xwchzpjo&q='+keyword);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var response = JSON.parse(xmlhttp.responseText);
          console.log (response);   
       $('.search').append('<div class="search__summary">There are ' + response.queries.request[0].totalResults + ' results in total</div>');
       if (response.items ==null) {
        
        return;  
       }
       var html='';
       for (var i = 0; i < response.items.length; i++){
        var item = response.items[i];
        var title = item.htmlTitle;
        
        html += "<p><a class='searchLink' href='" + item.link + "'> " + title + "</a><br>";
        html += item.snippet + "<br>";
        html += item.link + " - <a href='http://www.google.com/search?q=cache:"+item.cacheId+":"+item.displayLink+"'>Cached</a></p>";
        }
        console.log (html);
         $("#output").html(html);
        } else if (xmlhttp.status != 200) {
          alert('Error XMLHttpRequest. The server is temporarily unavailable.');
        }
      }
    };

    xmlhttp.send();

  }

  $('#inputText').on('keydown', function (e) {
    if (e.which == 13) {
      $(this).parent().find('#inputSubmit').trigger('click');
      return false;
    }
  });

  $('#inputSubmit').on('click', function(){
    $('.search__summary').text('');
     $("#output").text('');
    var inputText = $('#inputText').val();
    getJson(inputText, 9);
    $('#inputText').val('');
  });

  });
