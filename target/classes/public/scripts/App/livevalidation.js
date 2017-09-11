jQuery.fn.liveValidation=function(t){var e=jQuery.extend({validIco:"",invalidIco:"",valid:"Valid",invalid:"Invalid",validClass:"valid",invalidClass:"invalid",required:[],optional:[],fields:{}},t),i=jQuery.extend({name:/^\S.*$/,content:/^\S.*$/m,dimensions:/^\d+x\d+$/,price:/^\d+$/,url:/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"input-email":/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},e.fields);i.website=i.url,i.title=i.author=i.name,i.message=i.comment=i.description=i.content;var s=jQuery.merge(e.required,e.optional);if(!s.length)return this;for(var n in s)s[n]=':input[id="'+s[n]+'"]:not([disabled])';return s=s.join(","),this.each(function(){jQuery(s,this).each(function(){var t=jQuery(this),s=!1,n=t.attr("id");for(var a in e.optional)if(n==e.optional[a]){s=!0;break}if(!t.is(".jquery-live-validation-on")){t.addClass("jquery-live-validation-on");var r=s?"valid":"invalid",o=jQuery('<img src="'+e[r+"Ico"]+'" alt="'+e[r]+'" />').insertAfter(t.addClass(e[r+"Class"])),l=function(){var n=t.attr("id"),a=t.val(),r=t.attr("title");a=r==a?"":a,o.css("display",""),s&&""==a||a.match(i[n])?o.attr("alt")!=e.valid&&(o.attr("src",e.validIco),o.attr("alt",e.valid),t.removeClass(e.invalidClass).addClass(e.validClass)):o.attr("alt")!=e.invalid&&(o.attr("src",e.invalidIco),o.attr("alt",e.invalid),t.removeClass(e.validClass).addClass(e.invalidClass))};l(),t.change(l),t.focus(function(){var t=$("img",$(this).parent());"Invalid"==t.attr("alt")&&t.css("display","none")})}}),jQuery("form",this).submit(function(){return!jQuery(this).find('img[alt="'+e.invalid+'"]').length})})};