!function(){function a(a,b,c,d,e,f,g,h,i,j){var k,l,m=this;m.init=function(){e.getAnimation(f.id,f.category).success(function(b){a.animation=a.findAnimationModel(a.category,a.id),$.extend(a.animation,b),m.populateAnimationModel(a.animation),m.renderUI(),m.bindUI(),m.syncUI(),l=i.cacheTemplates(a.animation,a.globalOptions)})},m.renderUI=function(){$('[data-toggle="tooltip"]').tooltip(),k=CodeMirror($(".m-code-editor .editor")[0],{mode:"css",lineNumbers:!0,beautify:!0})},m.bindUI=function(){var b=new ZeroClipboard($(".copy-button"));b.on("copy",function(a){var b=a.clipboardData;b.setData("text/plain",k.getValue()),$(".tooltip .tooltip-inner").html("Copied!!"),$(".tooltip").css("left","-10px")}),a.$on("change-css-prefixed-options",function(){a.showCSSCode(),l=i.cacheTemplates(a.animation,a.globalOptions)})},m.syncUI=function(){a.showCSSCode(function(){a.$parent.$hideLoading=!0,a.animateAll()})},a.editorMode="css",a.selectedAnimationList=a.$parent.selectedAnimationList,a.category=f.category,a.id=f.id,a.globalOptions=a.$parent.globalOptions,a.animateAll=function(){h.animateItems(".be-animated",a.animation.className),h.animateItems(".m-code-editor",a.animation.className),h.animateItems(".m-button-bar button",a.animation.className)},a.showCSSCode=function(b){i.getTemplate("cssTemplate.html",{animationList:[a.animation],globalOptions:a.globalOptions}).done(function(c){k.setOption("mode","css"),k.setValue(c),m.autoFormatRange(),a.editorMode="css",b&&b()})},a.showHTMLCode=function(){i.getTemplate("htmlTemplate.html",{animationList:[a.animation]}).done(function(b){k.setOption("mode","xml"),k.setOption("alignCDATA",!1),k.setValue(b),a.editorMode="html"})},a.showJQueryCode=function(){i.getTemplate("jQueryTemplate.html",{animationList:[a.animation]}).done(function(b){k.setOption("mode","javascript"),k.setOption("beautify",!0),k.setValue(b),a.editorMode="jquery"})},a.showAniJSCode=function(){i.getTemplate("aniJSTemplate.html",{animationList:[a.animation]}).done(function(b){k.setOption("mode","xml"),k.setOption("beautify",!0),k.setValue(b),a.editorMode="anijs"})},a.shareTwitter=function(b){b.preventDefault(),a.animation.shareUrl=encodeURIComponent(window.location.href),i.getTemplate("twitterTemplate.html",a.animation).done(function(a){window.open(a)})},a.shareGooglePlus=function(b){b.preventDefault(),a.animation.shareUrl=encodeURIComponent(window.location.href),i.getTemplate("gplusTemplate.html",a.animation).done(function(a){window.open(a)})},a.shareFacebook=function(b){b.preventDefault(),a.animation.shareUrl=encodeURIComponent(window.location.href),i.getTemplate("facebookTemplate.html",a.animation).done(function(a){window.open(a)})},a.localSave=function(){var b="css",c=a.editorMode;"anijs"===c||"html"===c?b="text":"jquery"===c&&(b="plain"),window.open("data:text/"+b+";charset=utf-8,"+encodeURIComponent(k.getValue()))},a.editOnCodepen=function(){"resolved"===l.state()&&(a.codepenEditValue=j.getPostToPrefillData(a.animation))},m.populateAnimationModel=function(b){b.getCSSCode=function(){return a.animation.cssCode},b.getHTMLCode=function(){return a.animation.cssCode}},m.autoFormatRange=function(){var a=k.lineCount();k.autoFormatRange({line:0,ch:0},{line:a}),k.doc.setCursor({line:0,ch:0})},m.init()}a.$inject=["$scope","$templateCache","$http","$compile","localAPIRetrieve","$routeParams","collectionHelperService","animateService","templateService","codepenService"],angular.module("collection").controller("detailController",a)}();