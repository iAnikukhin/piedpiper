/* first test */
var arr = document.getElementsByClassName("tests-title");
arr[1].innerHTML = "Первый тест, выбрал элемент по class и изменил его";
/* second test */
var elem = document.getElementById("tests-title");
elem.innerHTML = "Второй тест, выбрал элемент по id и изменил его";
/* third test */
var arr = document.getElementsByTagName("h2");
arr[6].innerHTML = "Третий тест, выбрал элемент по tag name и изменил его";
