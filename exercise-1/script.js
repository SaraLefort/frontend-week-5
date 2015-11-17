

function makeList () {
	var item = document.getElementById("item");
	var toDoList = document.getElementById("todolist");

	var li = document.createElement("li");
	var listContent = document.createTextNode(item.value);

	li.appendChild(listContent);
	toDoList.appendChild(li);

};

document.addEventListener("submit", makeList);