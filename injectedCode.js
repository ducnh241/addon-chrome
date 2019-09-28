log = function() {
    for(i = 0; i < document.links.length; i++) console.debug(document.links[i]);
}

highlight = function() {
    var links = document.querySelectorAll('#categories ul li a');
    console.log(links[0]);
    var length=links.length>10 ? 10 : links.length;
    for(var i = 0; i < length; i++) {
    	// alert(i);
    	links[i].style.backgroundColor = '#F00';
    }
}

log();
highlight();