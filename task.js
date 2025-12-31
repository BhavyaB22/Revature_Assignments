function addTask() {
    const input = document.getElementById("tasks"); // FIXED ID
    const task = input.value;

    if (task === "") return;

    const li = document.createElement("li");
    li.innerText = task;

    document.getElementById("task-list").appendChild(li);
    input.value = ""; // clear input
}
