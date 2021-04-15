(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
    $(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(400);
            
        },
        function(){
            $(this).children('.sub-menu').slideUp(400);
        }
    );
    
    }); 
    $(function() {
    $( 'nav a' ).hover(
        function(){
            $(this).animate({color:"#244c64", backgroundColor:"#87CEEB"},400);
            
        },
        function(){
             $(this).animate({color: "#fff", backgroundColor:"#244c64"},400);
        }
    );
    
    }); 
    $(document).ready(function() {
    $('select').niceSelect();
    });
})(jQuery);