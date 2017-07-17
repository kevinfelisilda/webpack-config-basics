var $ = require('jquery');
require('./style.css');
var raw = '<div class="name">Kevin</div>';
var obj = require('./parser')(raw);
require('./dbsave')(obj);

$(document).ready(function(){
    $('#title').text('World1111');
});
