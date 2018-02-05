//one global variable
var articles = document.getElementsByTagName("article");

// reveals div corresponding to id and hides others
// deactivates link corresponding to id-link and activates others
function select(id) {
  var selectionMade = false;
  for ( i = 0 ; i < articles.length; i++ ) {
    link = document.getElementById("table-of-contents").getElementsByTagName('li')[i];
    if ( articles[i].id != id ) {
      articles[i].style.display = 'none';
      link.className = "linklike";
    } else {
      articles[i].style.display = 'block';
      link.className = "";
      selectionMade = true;
    } // end if...else
  } // end for

  if (selectionMade == false) {
    select(articles[0].id);
  }
} // end select

// initialize page by building table of contents and hiding other divs
// deletes html in table-of-contents and rebuilds it from the body
window.onload = function() {
var rewriteContents = function(){};
var addCSS = function(){};

//add CSS class
addCSS = function (selector, styles) {
  if ( arguments.length = 2 ) {
    var css = document.getElementsByTagName("style")[0];
    css.type = "text/css";
    css.innerHTML = css.innerHTML + selector + " { " + styles + " } ";
  } else {
    throw new Error('not exactly 2 args into addCSS');
  }//end if..else
}//end addCSS

//rewrite table of contents
rewriteContents = function () {  
  var list = document.getElementById("table-of-contents");
  var makeLink = function (article) {
    var title = article.getElementsByTagName("h2")[0].innerHTML;
    var link = document.createElement("li");
    link.setAttribute( 'onclick', 'javascript: select(\"'+ articles[i].id +'");');
    link.appendChild(document.createTextNode(title));
    return link;
  }//end makeLink

  list.innerHTML = "";

  for ( i = 0 ; i < articles.length ; i++ ) {
    list.appendChild(makeLink(articles[i]));
  }//end for
}//end rewriteContents

//      rewriteContents();
//      select(location.search.substring(1));
  addCSS(".linklike","color: blue; cursor: pointer;");
  addCSS(".linklike:hover","text-decoration: underline;");
}    
