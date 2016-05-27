function makeMagick(){
    if(typeof jQuery == 'undefined'){
        setTimeout(makeMagick, 100);
        return;
    }
    $ = jQuery;
    
    var arrows = $('.fewerMore a > .moreArrow');
    if (arrows.length) {
        var links = arrows.parent();
        var links_tags = '';
                
        links.each(function(){
            $this = $(this);
            var url = $this.attr('href');
            if(url.match(/(rowsperpage)=[0-9]*/g)){
                url = url.replace(/(rowsperpage)=[0-9]*/g, "$1=1000000");
                // var header = $this.closest('* > h1, * >  h2, * > h3');
                // console.log(header);
                
                links_tags += '<a href="'+ url +'">Show All</a>';
                
    
                console.log(url);
            }
        });
        
        $('body').append(''+
            '<div class="MoreLinksBlock" style="display: none;">' +
                links_tags +
                '<a href="#" class="close">x</a>' +
            '</div>' +
        '');    
        
        $('.MoreLinksBlock').stop().slideDown(100);
        
        $('.MoreLinksBlock .close').click(function(){
            $(this).closest('.MoreLinksBlock').slideUp(100);
            return false;
        });
        
        setTimeout(function(){
            $('.MoreLinksBlock').stop().slideUp(100);
        }, 8000);
    }
};

makeMagick();