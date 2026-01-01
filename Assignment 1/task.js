function addTask() {
    var tinput = document.getElementById("tasks").value;

    if (tinput === "") {
        alert("Add a task");
        return;
    }

    var titems = document.getElementById("task-list");

    var lisitems = document.createElement("li");

    var textSpan = document.createElement("span");
    textSpan.innerText = tinput;
    lisitems.appendChild(textSpan);

    titems.appendChild(lisitems);

    var bcontainer = document.createElement("div");
    bcontainer.className = "task-button";
    lisitems.appendChild(bcontainer);

    var delbutton = document.createElement("button");
    delbutton.innerText = "Delete";
    bcontainer.appendChild(delbutton);
    delbutton.onclick = function () {
        titems.removeChild(lisitems);
    };

    var combutton = document.createElement("button");
    combutton.innerText = "Completed";
    bcontainer.appendChild(combutton);
    combutton.onclick = function () {
        textSpan.classList.toggle("Completed_task");
    };

    document.getElementById("tasks").value = "";
}
