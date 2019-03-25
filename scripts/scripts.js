/* JavaScript tests */
/* first test */
var arr = document.getElementsByClassName("tests-title");
arr[0].style.color = "#007765";
arr[1].innerHTML = "Первый тест, выбрал элемент по class и изменил его";
/* second test */
var elem = document.getElementById("tests-title");
elem.innerHTML = "Второй тест, выбрал элемент по id и изменил его";
elem.style.fontSize ="36px";
/* third test */
var arr = document.getElementsByTagName("h2");
arr[6].innerHTML = "Третий тест, выбрал элемент по tag name и изменил его";
arr[6].style.fontSize = "42px";
/* add style to js-tests section */
var arr = document.getElementsByClassName("js-tests");
arr[0].style.display = "flex";
arr[0].style.justifyContent = "center";
/* add new element */
/* first */
var p1 = document.createElement("p");
p1.className = "js";
var node1 = document.createTextNode("Создал новый элемент p, присвоил ему класс js, написал текст и добавил его в конец существующего div");
p1.appendChild(node1);
var arr = document.getElementsByClassName("box");
arr[6].appendChild(p1);
var arr = document.getElementsByClassName("js");
arr[0].style.fontSize = "24px";
arr[0].style.fontStyle = "italic";
/* second */
var p2 = document.createElement("p");
p2.className = "js";
var node2 = document.createTextNode("Создал второй элемент p, присвоил ему класс js, написал текст и добавил его в конец существующего div, НО ПОСЛЕ ПЕРВОГО p");
p2.appendChild(node2);
var arr = document.getElementsByClassName("box");
arr[6].appendChild(p2);
var arr = document.getElementsByClassName("js");
arr[1].style.fontSize = "18px";
arr[1].style.fontWeight = "bold";
/* third */
var p3 = document.createElement("p");
p3.className = "js";
var node3 = document.createTextNode("Создал третий элемент p");
p3.appendChild(node3);
var arr = document.getElementsByClassName("box");
arr[6].appendChild(p3);
/* remove second element */
var arr = document.getElementsByClassName("box");
arr[6].removeChild(p2);
/* replace element */
var p4 = document.createElement("p");
p4.className = "js";
var node4 = document.createTextNode("Создал четвертый элемент p и заменил им третий p")
p4.appendChild(node4);
arr[6].replaceChild(p4, p3);
/* jQuery tests */
/* first */
$(function(){
    $("#jq-title").html("Нет, здесь я буду тестировать jQuery!");
});
 /* second */
$(function(){
    $("#jq-a").attr("href", "https://jquery.com/");
});
/* third */
$(function(){
    $("#jq-title").append(" Добавил этот текст в конец выбранного элемента спомощью метода append");
});
$(function(){
    $("#jq-title").prepend("Начали! ");
});
/* fourth */
$(function(){
    $("#jq-title").before("Метод before позволяющий добавлять контент до выбранного элемента");
});
$(function(){
    $("#jq-title").after("А это метод after, он добавляет контент после выбранного элемента<br/>");
});
/* add element */
$(function(){
    let el = $("<p></p>").text("Создал новый элемент p, написал текст и вложил его в переменную el");
    $(el).addClass("jq-p");
    $("#jq-a").after(el);
});
/* css */
$(function(){
    $("#jquery-tests").css({"display":"flex", "justify-content":"center"});
});
$(function(){
    $("#jq-title").css({"color":"#007765"});
});
/* remove element */
$(function(){
    $(".jq-p").remove();
});
/* menu button */
$("#menu-button").click(function(){
    $("header").slideToggle();
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 325) {
      $("header").slideUp();
    } else {
      $("header").slideDown();
    }
});