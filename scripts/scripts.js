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