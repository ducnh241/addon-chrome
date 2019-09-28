log = function() {
    for(i = 0; i < document.anchors.length; i++) console.debug(document.anchors[i]);
}

highlight = function() {
    var anchors = document.querySelectorAll('.list-items .list-item .product-img a');
    var hrefs = [];
	for(var i=0; i < anchors.length; i++){
	  if(1/* add filtering here*/)
	    hrefs.push(replaceAbc(anchors[i].href));
	}
	console.log(hrefs.join("\n"));
	document.getElementById('root').innerHTML ="<p style='width:100%;padding:100px'>" + hrefs.join("<br>") + "</p>";
}

function replaceAbc(text){
	var fixed;
	    fixed = text.replace(/\.html\?[\&,a-z0-9_=-]+/g, '.html');
	return fixed;
}

log();
highlight();