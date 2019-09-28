log = function() {
    for(i = 0; i < document.anchors.length; i++) console.debug(document.anchors[i]);
}

highlight = function() {
    var anchors = document.querySelectorAll('.list-items .list-item .product-img a');
    var hrefs = [];
	for(var i=0; i < anchors.length; i++){
	  if(1/* add filtering here*/)
	    hrefs.push(anchors[i].href);
	}
	alert(hrefs.join("\n"));
}

log();
highlight();