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
            if(url.match(/(rowsperpage)=[0-9]*/g)){
                url = url.replace(/(rowsperpage)=[0-9]*/g, "$1=1000000");
                
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

            if(url.match(/(rowsperpage)=[0-9]*/g) && url.match(/(Alsr)=[0-9]*/g)){
                url = url.replace(/(rowsperpage)=[0-9]*/g, "$1=1000000");
                url = url.replace(/(Alsr)=[0-9]*/g, "$1=0");
                
                $link.parent().append('&nbsp;|&nbsp;<a href="'+ url +'">SHOW ALL</a>');
                console.log('second' + url);
            }
		}
	});
};

makeMagick();