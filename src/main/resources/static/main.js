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
    let newItemTitle = document.getElementById("title").value;
    let response = await fetch("/item", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            title: newItemTitle
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
/*        let item = items[i];*/
        let row = document.createElement("li");
        row.appendChild(document.createTextNode(JSON.parse( items[i].title).title));
        let btn = document.createElement("button");
        btn.appendChild(document.createTextNode("remove"));
        btn.onclick = function() {
            remove(items[i].id);
        };
        row.appendChild(btn);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = items[i].bought;
        checkbox.onclick = function() {
            buyItemById(items[i].id);
        };
        row.insertBefore(checkbox, row.firstChild);
        table.appendChild(row);
    }
}
