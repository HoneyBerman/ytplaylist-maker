var txt = "Your search term(s) here, e.g. Numb,Papercut";
var timeOut;
var txtLen = txt.length;
var char = 0;

setTimeout(function(){
let viewheight=window.visualViewport.height;
let viewwidth=window.visualViewport.width;
let viewport=document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
},300);

$('.main-search').attr('placeholder', '|');
(function typeIt() {
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
    timeOut = setTimeout(function () {
        char++;
        var type = txt.substring(0, char);
        $('.main-search').attr('placeholder', type + '|');
        typeIt();

        if (char == txtLen) {
            $('.main-search').attr('placeholder', $('.main-search').attr('placeholder').slice(0, -1)) // remove the '|'
            clearTimeout(timeOut);
        }

    }, humanize);
}());