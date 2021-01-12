// ==UserScript==
// @name         芋道源码
// @namespace    http://www.jiangyixin.top/
// @version      0.1
// @description  清理芋道源码多余文字，并设置标题
// @author       jiangyixin
// @match        *://svip.iocoder.cn/*
// @resource     https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function() {
        function set_timer(name, clas) {
        	window[name] = window.setInterval(function () {
        		if ($(clas).length == 1) {
        			$(clas).remove();
        			window.clearInterval(window[name]);
        		}
        	}, 1000);
        }
        var title = $('head > meta:nth-child(7)').attr('content')
        console.log(title)
        $('head > title').text(title)
        $('#wrap > div > div').remove()
        $('#header').remove()
        $('#footer').remove()
    }
})();