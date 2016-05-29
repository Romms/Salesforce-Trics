function makeMagick(){
    if(typeof jQuery == 'undefined'){
        setTimeout(makeMagick, 100);
        return;
    }
    $ = jQuery;
    
    var arrows = $('.bPageBlock .pbBody > .fewerMore a > .moreArrow');
    if (arrows.length) {
        var links = arrows.parent();
                
        links.each(function(){
            $this = $(this);
            var url = $this.attr('href');
            if(url.match(/(%3Arowsperpage)=[0-9]*/g)){
                url = url.replace(/(%3Arowsperpage)=[0-9]*/g, "$1=1000000");
                url = url.replace(/(%3Alsr)=[0-9]*/g, "$1=0");
                
                $this.parent().append('&nbsp;<a href="'+ url +'">SHOW ALL</a>');
                console.log(url);
            }
        });
    }
    
    var nextOrPrevPage = $('.withFilter > .next');
    nextOrPrevPage.each(function(){
        $this = $(this);
        $link = $this.find('a');
        if($link.length > 0) {
            $link = $($link.get(0));
            var url = $link.attr('href');

            if(url.match(/(%3Alsr)=[0-9]*/g)){
                url = url.replace(/(%3Alsr)=[0-9]*/g, "$1=0");
                
                console.log('second' + url);

                if(url.match(/(%3Arowsperpage)=[0-9]*/g)){
                    url = url.replace(/(%3Arowsperpage)=[0-9]*/g, "$1=1000000");
                } else {
                    url = url.replace(/([&?]([^&]*%3A)(lsr)=[0-9]*)/g, "$1&$2rowsperpage=1000000");
                }
                
                $link.parent().append('&nbsp;|&nbsp;<a href="'+ url +'">SHOW ALL</a>');
                console.log('second' + url);
            }
        }
    });
};

makeMagick();