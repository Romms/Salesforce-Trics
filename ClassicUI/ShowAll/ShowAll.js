function makeMagick(){
    if(typeof jQuery == 'undefined'){
        setTimeout(makeMagick, 100);
        return;
    }
    $ = jQuery;
<<<<<<< HEAD

    var nextOrPrevPage = $('.withFilter > .next');
    nextOrPrevPage.each(function(){
        $this = $(this);
        $link = $this.find('a');
        if($link.length > 0) {
            $link = $($link.get(0));
            var url = $link.attr('href');

            if(url.match(/(%3Alsr)=[0-9]*/g)){
                var rowsperpage = 0;

                var matches = url.match(/((%3A|&)rowsperpage)=([0-9]*)/);
                if(matches){
                    rowsperpage = matches[3];
                } else {
                    url = url.replace(/([&?]([^&]*)%3Alsr)=[0-9]*/g, "$1&$2%3Arowsperpage=0"); // If delimeter - %3A
                    url = url.replace(/(&lsr=[0-9]*)/g, "$1&rowsperpage=0");                    // If delimeter - &
                }
                url = url.replace(/((%3A|&)rowsperpage)=[0-9]*/g, "$1=1000");

                if('1000' == rowsperpage){
                    $link.parent().prepend('<span>>Showing 1000 records per page</span>&nbsp;|&nbsp;');
                } else {
                    $link.parent().prepend('<a href="'+ url +'">Show 1000 records per page</a>&nbsp;|&nbsp;');
                }
            }
        }
    });

    var links = $('.bPageBlock .pbBody > .fewerMore a:first-child');
    if (links.length) {

        links.each(function(){
            $this = $(this);
            var url = $this.attr('href');
            var matches = url.match(/((%3A|&)rowsperpage)=([0-9]*)/);
            console.log(matches);
            if(matches){
                var rowsperpage = matches[3];
                console.log(rowsperpage);

                if (
                    ('990' == rowsperpage && $this.find('.fewerArrow').length) ||
                    ('1010' == rowsperpage && $this.find('.moreArrow').length)
                ) {
                    $this.parent().append('<br/><span style="color:grey;">Showing 1000 records per page</span>');
                } else {
                    url = url.replace(/((%3A|&)rowsperpage)=[0-9]*/g, "$1=1000");
                    $this.parent().append('<br/><a href="' + url + '">Show 1000 records per page</a>');
                }
            }
        });
    }
=======
    
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
>>>>>>> parent of 315d32f... Tabs removed
};

makeMagick();