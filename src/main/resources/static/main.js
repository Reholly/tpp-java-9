getItems().then(data => {display(data);});
async function getItems() {
    let response = await fetch("/item",
    {
            method: 'GET'
        }
    );

    return response.json();
}
async function createItem() {
    let title = document.getElementById("title").value;
    let response = await fetch("/item", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            name: title
            }
        )
    });

    getItems().then(data => {display(data);});
}
async function remove(id) {
    let response = await fetch("/item/" + encodeURIComponent(id),
        { method: 'DELETE' }
    );

    getItems().then(data => {display(data);});
}
async function buyItemById(id) {
    let response = await fetch('/item/' + encodeURIComponent(id), { method: 'PUT'});

    getItems().then(data => {display(data);});
}
function display(items) {
    let table = document.getElementById("items");
    table.innerHTML = "";
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        console.log(item)
        let row = document.createElement("li");
        row.appendChild(document.createTextNode(item.title));

        let btn = document.createElement("button");
        btn.appendChild(document.createTextNode("remove"));
        btn.onclick = function() {
            remove(item.id);
        };
        row.appendChild(btn);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.checked = item.bought;
        checkbox.onclick = function() {
            buyItemById(item.id);
        };
        row.insertBefore(checkbox, row.firstChild);

        table.appendChild(row);
    }
}
