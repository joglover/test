/*
Author: Ashwin Agarwal
Contributors: Tom McGinn, Suresh Mohan
Last updated: 9-Oct-2020
Version: 20.2.24
*/
console.log("main.js loaded");
"use strict";

var showdown="https://oracle.github.io/learning-library/common/redwood-hol/js/showdown.min.js";

let main=function(){
	
	let e="manifest.json";
	const t=[{url:"https://myservices.us.oraclecloud.com/mycloud/signup",inParam:"customTrackingParam",outParam:"sourceType"}],
	n={"#last":2,"#next":1,"#prev":-1,"#first":-2};
	let o;
	
	$.ajaxSetup({cache:!0}),$(document).ready(function(){let t;L("manifest")&&(e=L("manifest")),$.when($.getJSON(e,function(n){void 0!==n.workshoptitle&&(document.getElementsByClassName("hol-Header-logo")[0].innerText=n.workshoptitle),console.log("Manifest file loaded!"),L("manifest")&&$(n.tutorials).each(function(){-1==$(this)[0].filename.indexOf("http")&&($(this)[0].filename=e.substring(0,e.lastIndexOf("/")+1)+$(this)[0].filename)});for(let e in n.include)$.get(n.include[e],function(t){n.include[e]=t});o=t=n})).done(function(){i();let e=d(t),n=document.createElement("article");a(n,e,t,c),s(t),setTimeout(function(){location.hash.slice(1)&&E($("li[data-unique='"+location.hash.slice(1)+"']")),$("#leftNav-toc").hasClass("scroll")&&$(".selected")[0].scrollIntoView(!0)},1e3)})}),
	
	$(window).scroll(function(){$("#contentBox").outerHeight()+$("header").outerHeight()+$("footer").outerHeight()>$(window).outerHeight()?($("#leftNav-toc").addClass("scroll"),$(window).scrollTop()+$(window).height()>$("footer").offset().top?$("#leftNav-toc").css("max-height",$("footer").offset().top-$("#leftNav-toc").offset().top):$("#leftNav-toc").css("max-height",$(window).height()-$("header").height())):$("#leftNav-toc").removeClass("scroll");try{document.querySelector(".selected .active").getBoundingClientRect().y+document.querySelector(".selected .active").clientHeight>$(window).height()&&$("#leftNav-toc").hasClass("scroll")&&$(".selected .active")[0].scrollIntoView(!1)}catch(e){}let e=$("#contentBox").find("[data-unique]").first();$("#contentBox").find("[data-unique]").each(function(){$(this).offset().top-$(window).scrollTop()-$("header").height()<Math.abs($(e).offset().top-$(window).scrollTop())&&(e=$(this))}),$(".selected .toc .toc-item").removeClass("active"),$(".selected .toc").find('[data-unique="'+$(e).attr("data-unique")+'"]').addClass("active")}),
	
	$(window).on("hashchange",function(e){try{let t=n[e.target.location.hash];void 0!==t&&u(A(h(o,t).title))}catch(e){}});
	
	let i=function(){$("#mySidenav")&&$("#mySidenav").hide(),$(".hol-Header-actions").prependTo(".hol-Header-wrap").show(),$('<div id="tutorial-title"></div>').appendTo(".hol-Header-logo")[0],$("#openNav").click(function(){let e=L("nav");e&&"open"!==e?"close"===e&&window.history.pushState("","",H(window.location.href,"nav","open")):window.history.pushState("","",H(window.location.href,"nav","close")),c()}),$(".hol-Footer-topLink").after($(document.createElement("a")).addClass("hol-Footer-rightLink hide")),$(".hol-Footer-topLink").before($(document.createElement("a")).addClass("hol-Footer-leftLink hide")),$("#contentBox").css("min-height",$(window).height()-$("header").outerHeight()-$("footer").outerHeight())},
	
	
	a=function(e,t,n,o=null){
		$.get(t.filename,function(o){
			console.log(t.filename+" loaded!"),
			o=O(o,t.type),
			o=l(o,n.include),
			o=S(o),o=f(o,t.filename),
			o=r(o),
			
			
			$(e).html(o),
			
			
			e=M(e,n),e=N(e),e=p(e),e=m(e),e=g(e),e=w(e,t.filename),e=I(e),e=v(e),e=x(e),e=q(e),e=P(e),y(t,n.workshoptitle),"true"==L("qa")&&(e=B(e,o))}).done(function(){$("main").html(e),setTimeout(b,0),"true"==L("qa")?function(e){var t=0,n=0,o=0,i=0;document.getElementById(e.id+"header")?(document.getElementById(e.id+"header").onmousedown=a,$("#qa-reportheader").dblclick(function(){$("#qa-reportbody").fadeToggle()})):e.onmousedown=a;function a(e){(e=e||window.event).preventDefault(),o=e.clientX,i=e.clientY,document.onmouseup=r,document.onmousemove=l}function l(a){(a=a||window.event).preventDefault(),t=o-a.clientX,n=i-a.clientY,o=a.clientX,i=a.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function r(){document.onmouseup=null,document.onmousemove=null}}(document.getElementById("qa-report")):C($("#module-content h2:not(:eq(0))"),"none"),o&&o()}).fail(function(){console.log(t.filename+" not found! Please check that the file is available in the location provided in the manifest file.")})},
	
	l=function(e,t){for(let n in t)e=e.split("[](include:"+n+")").join(t[n]);return e},
	
	r=function(e){let t,n=new RegExp(/\[(?:.+?)\]\((&type=(\S*?))\)/g);do{null!==(t=n.exec(e))&&(e=e.replace(t[1],H(window.location.href,"type",t[2])))}while(t);return e},
	

s=function(e){let t,n=new RegExp(/^<h2>(.*?)<\/h2>/gm);$(e.tutorials).each(function(o,i){let a,r=document.createElement("div");$(r).attr("id","toc"+o).addClass("toc"),$.get(i.filename,function(o){o=O(o,i.type),o=l(o,e.include);do{null!==(t=n.exec(o))&&(a=document.createElement("ul"),$(a).append($(document.createElement("li")).addClass("toc-item").text(t[1].replace(/\**/g,"").replace(/\##/g,"")).attr("data-unique",R(t[1]))),$(a).click(function(){$(this).parent().parent().parent().hasClass("selected")?(location.hash=R($(this).text()),E($(this).find("li").attr("data-unique"))):u(A($(this).parent().parent().find("span").text()),R($(this).text()))}),$(a).appendTo(r))}while(t)}),$(".hol-Nav-list li")[o].append(r)}),setTimeout(function(){let e=$('.selected li[data-unique="'+location.hash.slice(1)+'"]');0!==e.length&&$(e)[0].click()},1e3),$(".hol-Nav-list>li").wrapInner("<div></div>"),$(".hol-Nav-list>li>div").prepend($(document.createElement("div")).addClass("arrow").text("+")),$(".hol-Nav-list > li > div .arrow").click(function(){"-"===$(this).text()?($(this).next().next().fadeOut("fast",function(){$(window).scroll()}),$(this).text("+")):($(this).next().next().fadeIn("fast",function(){$(window).scroll()}),$(this).text("-"))}),$(".selected div.arrow").text("-"),$(".hol-Nav-list > li:not(.selected) .toc").hide()},
	
	c=function(){let e=L("nav");e&&"open"!==e?"close"===e&&($(".hol-Nav-list > li:not(.selected)").attr("tabindex","-1"),$("#leftNav-toc, #leftNav, #contentBox").addClass("close").removeClass("open")):($(".hol-Nav-list > li:not(.selected)").attr("tabindex","0"),$("#leftNav-toc, #leftNav, #contentBox").addClass("open").removeClass("close")),setTimeout(function(){$(window).scroll()},100)},
	
	d=function(e){
		let t=$(document.createElement("div")).attr("id","leftNav-toc"),
		n=$(document.createElement("ul")).addClass("hol-Nav-list");
		
		return $(e.tutorials).each(function(e,t){
			let o=A(t.title);
			$(document.createElement("li")).each(function(){$(this).click(function(e){if(!$(e.target).hasClass("arrow")&&!$(e.target).hasClass("toc-item")&&!$(e.target).hasClass("toc-item active"))if($(e.target).parent().parent().hasClass("selected"))try{$(".selected .arrow").click()}catch(e){}else u(o)}),$(this).attr("id","tut-"+o.replace(/[\(\)]+?/g,"")),$(this).text(t.title).wrapInner("<span></span>"),$(this).appendTo(n),$(this).keydown(function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),u(o))})})}),$(n).appendTo(t),$(t).appendTo("#leftNav"),h(e)},
	
	h=function(e,t=0){if($("#tut-"+L("lab").toString().replace(/[\(\)]+?/g,"")).addClass("selected"),$(".selected").unbind("keydown"),-2===t)return e.tutorials[0];if(2===t)return e.tutorials[e.tutorials.length-1];for(var n=0;n<e.tutorials.length;n++)if(L("lab")===A(e.tutorials[n].title))return e.tutorials[n+t];return $(".hol-Nav-list").find("li:eq(0)").addClass("selected"),e.tutorials[0+t]},
	
	u=function(e,t=""){""!==t&&(t="#"+t),location.href=unescape(H(window.location.href,"lab",e)+t)},
	
	f=function(e,t){let n,o=new RegExp(/!\[.*?\]\((.*?)\)/g),i=[];t=t.substring(0,t.lastIndexOf("/")+1);do{if(null===(n=o.exec(e)))return $(i).each(function(t,n){e=e.replace(n.replace,n.with)}),e;n[1]=n[1].split(" ")[0],-1===n[1].indexOf("http")&&i.push({replace:"("+n[1],with:"("+t+n[1].trim()})}while(n)},
	
	p=function(e){return $("#tutorial-title").text("\t\t›\t\t"+$(e).find("h1").text()),e},
	
	m=function(e){return $(e).find("h2").each(function(){$(this).nextUntil("h2").andSelf().wrapAll("<section></section>")}),e},
	
	g=function(e){return $(e).find("img").on("load",function(){if($(this)[0].width>100||$(this)[0].height>100||void 0!==$(this).attr("title"))if($(this).wrap("<figure></figure>"),$.trim($(this).attr("title"))){let e=$(this).attr("src").split("/").pop().split(".").shift();$(this).parent().append('<figcaption><a href="files/'+e+'.txt">Description of illustration ['+e+"]</figcaption>")}else $(this).removeAttr("title")}),e},
	
	w=function(e,t){return-1!==t.indexOf("/")&&(t=t.replace(/\/[^\/]+$/,"/"),$(e).find("a").each(function(){-1===$(this).attr("href").indexOf("http")&&0!==$(this).attr("href").indexOf("?")&&0!==$(this).attr("href").indexOf("#")&&$(this).attr("href",t+$(this).attr("href"))})),e},
	
	v=function(e){return $(e).find('a[href^="#"]').each(function(){let e=$(this).attr("href");"#"!==e&&$(this).click(function(){E(e.split("#")[1])})}),e},
	
	x=function(e){return $(e).find("a").each(function(){0===$(this).attr("href").indexOf("http")&&-1==$(this).attr("href").indexOf("&type=")&&$(this).attr("target","_blank")}),e},
	
	y=function(e,t){document.title=void 0!==t?t+" | "+e.title:e.title;const n=[{name:"contentid",content:e.contentid},{name:"description",content:e.description},{name:"partnumber",content:e.partnumber},{name:"publisheddate",content:e.publisheddate}];$(n).each(function(e,t){if(t.content){let e=document.createElement("meta");$(e).attr(t).prependTo("head")}})},
	
	b=function(){$("#module-content h2:eq(1)").before('<button id="btn_toggle" class="hol-ToggleRegions plus">Expand All Steps</button>').prev().on("click",function(e){"Expand All Steps"===$(this).text()?k($("#module-content h2:not(:eq(0))"),"show"):C($("#module-content h2:not(:eq(0))"),"hide"),T()}),$("#module-content h2:not(:eq(0))").click(function(e){$(this).hasClass("plus")?k(this,"fade"):C(this,"fade"),T()}),$("#module-content h2:not(:eq(0))").attr("tabindex","0"),$("#module-content h2:not(:eq(0))").keydown(function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),$(this).hasClass("plus")?k($(this),"fade"):C($(this),"fade"))}),window.scrollTo(0,0)},
	
	k=function(e,t){"show"===t?$(e).nextUntil("#module-content h1, #module-content h2").show("fast",function(){$(window).scroll()}):"fade"===t&&$(e).nextUntil("#module-content h1, #module-content h2").fadeIn("fast",function(){$(window).scroll()}),$(e).addClass("minus"),$(e).removeClass("plus")},
	
	C=function(e,t){"hide"===t?$(e).nextUntil("#module-content h1, #module-content h2").hide("fast",function(){$(window).scroll()}):"fade"===t?$(e).nextUntil("#module-content h1, #module-content h2").fadeOut("fast",function(){$(window).scroll()}):"none"==t&&$(e).nextUntil("#module-content h1, #module-content h2").attr("style","display:none;"),$(e).addClass("plus"),$(e).removeClass("minus")},
	
	T=function(){$("#module-content h2.minus").length<=$("#module-content h2.plus").length?($("#btn_toggle").text("Expand All Steps"),$("#btn_toggle").addClass("plus"),$("#btn_toggle").removeClass("minus")):($("#btn_toggle").text("Collapse All Steps"),$("#btn_toggle").addClass("minus"),$("#btn_toggle").removeClass("plus"))},
	
	E=function(e){let t=$('div[name="'+e+'"]').next();$(t).hasClass("hol-ToggleRegions")&&(t=$(t).next());try{"H2"!==t[0].tagName&&(t=$(t).siblings("h2")),($(t).hasClass("minus")||$(t).hasClass("plus"))&&k(t,"fade"),$(t)[0].scrollIntoView(),window.scrollTo(0,window.scrollY-$(".hol-Header").height()),T()}catch(e){}},
	
	q=function(e){return $(e).find("pre code").each(function(){let e=$(document.createElement("code")).html($(this).text());$(e).has("copy").length&&($(e).find("copy").contents().unwrap().wrap('<span class="copy-code">'),$(this).html($(e).html()),$(this).before('<button class="copy-button" title="Copy text to clipboard">Copy</button>'))}),$(e).find(".copy-button").click(function(){let e=$(this).next().find(".copy-code").map(function(){return $(this).text().trim()}).get().join("\n"),t=$("<textarea>").val(e).appendTo(this).select();document.execCommand("copy"),$(t).remove(),$(this).parent().animate({opacity:.2}).animate({opacity:1})}),e},
	
	N=function(e){return $(e).find('a[href^="youtube:"]').each(function(){$(this).after('<div class="video-container"><iframe src="https://www.youtube.com/embed/'+$(this).attr("href").split(":")[1]+'" frameborder="0" allowfullscreen></div>'),$(this).remove()}),e},
	
	O=function(e,t){let n,o=new RegExp(/<\s*if type="([^>]*)">([\s\S|\n]*?)<\/\s*if>/gm),i=[];!1!==L("type")&&(t=L("type")),"array"!==$.type(t)&&(t=Array(t));do{if(null===(n=o.exec(e)))return $(i).each(function(t,n){e=e.replace(n.replace,n.with)}),e;-1===$.inArray(n[1],t)?i.push({replace:n[0],with:""}):i.push({replace:n[0],with:n[2]})}while(n)},
	
	S=function(e){let t=new RegExp(/<copy>([\s\S|\n]*?)<\/copy>/gm);return e=e.replace(t,function(e){return"<copy>"+(e=(e=(e=(e=e.replace("<copy>","")).replace("</copy>","")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).trim()+"</copy>"})},
	
	P=function(e){window.location.href;return $(t).each(function(t,n){let o=L(n.inParam);o&&$(e).find('a[href*="'+n.url+'"]').each(function(){let e=$(this).attr("href");$(this).attr("href",unescape(H(e,n.outParam,o)))})}),$(t).each(function(t,n){let o=L(n.inParam);o&&$(e).find('a[href*="?lab="]').each(function(){let e=$(this).attr("href")+"&"+n.inParam+"="+o;$(this).attr("href",unescape(e))})}),e},
	
	H=function(e,t,n){let o=e.split("?")[0].split("#")[0],i=e.replace(o,"").split("#")[0],a=e.replace(o+i,"");a="";let l=L(t);return l?o+i.replace(t+"="+l,t+"="+n)+"":0===i.length||1===i.length?o+"?"+t+"="+n:o+i+"&"+t+"="+n},
	
	L=function(e){let t=window.location.search.substring(1).split("&");for(var n=0;n<t.length;n++)if(t[n].split("=")[0]==e)return t[n].split("=")[1];return!1},
	
	A=function(e){if(!e)return console.log("The title in the manifest file cannot be blank!"),"ErrorTitle";let t=e.toLowerCase().replace(/ /g,"-").trim().substr(0,50);return $.each(["<",">",":",'"',"/","\\\\","|","\\?","\\*","&","\\.",","],function(e,n){t=t.replace(new RegExp(n,"g"),"")}),$.each(["-a-","-in-","-of-","-the-","-to-","-an-","-is-","-your-","-you-","-and-","-from-","-with-"],function(e,n){t=t.replace(new RegExp(n,"g"),"-")}),t.length>40&&(t=t.substr(0,t.lastIndexOf("-"))),t},
	
	M=function(e,t){return void 0!==h(t,n["#next"])&&$(".hol-Footer-rightLink").removeClass("hide").addClass("show").attr({href:"#next",title:"Next"}).text("Next"),void 0!==h(t,n["#prev"])&&$(".hol-Footer-leftLink").removeClass("hide").addClass("show").attr({href:"#prev",title:"Previous"}).text("Previous"),e},
	
	I=function(e){return $(e).find("h2").each(function(){$(this).before($(document.createElement("div")).attr({name:R($(this).text()),"data-unique":R($(this).text())}))}),e},
	
	R=function(e){return e.replace(/[^[A-Za-z0-9:?\(\)]+?/g,"")},
	
	B=function(e,t){let n=$(document.createElement("div")).attr("id","qa-report").html("<div id='qa-reportheader'></div><div id='qa-reportbody'><ol></ol></div>");let o=function(e,t){$.ajax({type:"HEAD",url:e,success:function(){t(!0)},error:function(){t(!1)}})},i=function(e,t="",o=!1){o?$(n).find("ol").append("<li class="+t+">"+e+" <small onclick=\"window.scrollTo({top:$('."+o+"').offset().top - ($('header').outerHeight() + 10), behavior: 'smooth'});\">(show)</small></li>"):$(n).find("ol").append("<li class="+t+">"+e+"</li>")},a=function(e){$(n).find("#qa-reportheader").html("Total Issues: "+$(n).find("li").length),$(n).find("li").length?($(n).find("#qa-reportbody").show(),0===$(n).find("#qa-reportbody p").length&&$(n).find("#qa-reportbody").append("<p>Please see <a href='https://confluence.oraclecorp.com/confluence/x/ep81Y' target='_blank'>using the LiveLabs template</a> for more information.</p>")):$(n).find("#qa-reportbody").hide()},l=function(e,t){0===$(e).find('div[name="'+R(t)+'"]').length&&i("You are missing <strong>"+t+"</strong> section.")},r=function(){return"error_"+$(n).find("li").length};var s;return s=e,1!==$(s).find("h1").length&&(i("Only a single title is allowed, please edit your Markdown file and remove or recast other content tagged with a single #.","major-error"),$(s).find("h1").addClass("error")),function(e){let t=(e.match(new RegExp("<a href=","g"))||[]).length;1==t?i("There is "+t+" occurrence of HTML (for example: &lt;a href=...&gt;) in your Markdown. Please do not embed HTML in Markdown."):t>1&&i("There are "+t+" occurrences of HTML (for example: &lt;a href=...&gt;) in your Markdown. Please do not embed HTML in Markdown.")}(t),function(e){$(e).find("img").each(function(){try{if(0!==$(this).attr("src").split("/")[$(this).attr("src").split("/").length-2].indexOf("images"))return i("Your images must be in an <strong>images</strong> folder. Please rename the folder and update your Markdown."),!1}catch(e){return i("Your images must be in an <strong>images</strong> folder. Please rename the folder and update your Markdown."),!1}})}(e),function(e){let t=(e.match(/\````/g)||[]).length;1==t?i("Your Markdown file has "+t+" codeblock with 4 (````). This should be changed to 3 (```). Please review your Markdown and make the necessary changes."):t>1&&i("Your Markdown file has "+t+" codeblocks with 4 (````). This should be changed to 3 (```). Please review your Markdown and make the necessary changes.")}(t),function(e){0!==$(e).find("h2:eq(1)").text().substr(0,4).indexOf("STEP")&&($(e).find("h2:eq(1)").addClass(r()),i("The second H2 tag (##) of your Markdown file should be labeled with STEP (in all caps).","",r()))}(e),function(e){let t=0;$(e).find("pre > code").each(function(){0==$(this).find(".copy-code").length&&(t+=1,$(this).addClass(r()),i("You have a code block (```) without a &lt;copy&gt; tag. Please review your Markdown and make the necessary changes.","",r()))})}(e),!window.location.href.indexOf("localhost")&&window.location.href.indexOf("127.0.0.1")&&function(e){$(e).find("a").each(function(){let e=$(this).attr("href"),t=$(this).text();o(e,function(n){n||($('a[href$="'+e+'"]').addClass("error "+r()),i("This URL may be broken: <a href='"+e+"' target='_blank'>"+t+"</a>","major-error",r()),a())})})}(e),function(e){$(e).find("img").each(function(){let e=$(this).attr("src"),t=$(this).attr("src").split("/")[$(this).attr("src").split("/").length-1];o(e,function(n){n||($('img[src$="'+e+'"]').addClass("error "+r()),i("The link to image <strong>"+t+"</strong> is broken.","major-error",r()),a())})})}(e),l(e,"Acknowledgements"),l(e,"See an issue?"),function(e){$(e).find("section:not(:first-of-type)").each(function(){let e=[];0==$(this).find("h2").text().toUpperCase().trim().indexOf("STEP")&&($(this).children().each(function(){e.push($(this).prop("tagName"))}),-1!==$.inArray("UL",e)&-1==$.inArray("OL",e)&&(i("In section <strong>"+$(this).find("h2").text()+"</strong>, your steps are not numbered. Numbered steps should follow your STEP element.","minor-error"),$(this).find("h2").addClass("format-error")),$.inArray("PRE",e)>$.inArray("OL",e)&&($(this).children("pre").addClass("format-error "+r()),i("Your codeblock is not indented correctly. Add spaces to indent your codeblock.","minor-error",r())),$(this).find("img").each(function(){-1==$(this).parent().parent().prop("tagName").indexOf("LI")&&-1==$(this).parent().parent().prop("tagName").indexOf("OL")&&-1==$(this).parent().parent().prop("tagName").indexOf("UL")&&($(this).addClass("format-error "+r()),i("The image <strong>"+$(this).attr("src").split("/")[$(this).attr("src").split("/").length-1]+"</strong> is not aligned with your text blocks. Add spaces to indent your image.","minor-error",r()))}))})}(e),a(),$(e).prepend(n)}
	
	}(),
	
	download=function(){$.when($("img").each(function(){$(this).css("max-width","75%"),-1==$(this).attr("src").indexOf("http")&&$(this).attr("src",location.protocol+"//"+location.host+location.pathname+$(this).attr("src"))}),$("pre button").remove(),$("pre").attr("style","white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word; max-width: 80%;"),$("#module-content h2:not(:eq(0))").nextAll().show("fast"),$("h2").removeClass("plus minus"),$("#btn_toggle").remove()).done(function(){!function(e,t){let n=document.createElement("a");if(n.setAttribute("href","data:html/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),document.createEvent){let e=document.createEvent("MouseEvents");e.initEvent("click",!0,!0),n.dispatchEvent(e)}else n.click()}($(".selected span").text().replace(/[^[A-Za-z0-9:?]+?/g,"")+".html",'<html><head><link rel="stylesheet" href="https://oracle.github.io/learning-library/common/redwood-hol/css/style.min.css" /><link rel="shortcut icon" href="https://oracle.github.io/learning-library/common/redwood-hol/img/favicon.ico" /></head><body style="padding-top: 0px;">'+$("#contentBox")[0].outerHTML+"</body></html>")})};