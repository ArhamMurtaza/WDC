const item_name = document.getElementById("item_name");
const item_pip = document.getElementById("price_per_piece")
const item_price = document.getElementById("item_price");
const item_quantity = document.getElementById("item_quantity");
const item_total = document.getElementById("item_total");
const total_items = document.getElementById("total_items");
const total_price = document.getElementById("total_price");
const add_item = document.getElementById("add_item");
const item_list = document.getElementById("item_list");


function update_price() {
    switch (item_name.value) {
        case "Laptop Charger":
            item_pip.value = 750;
            item_price.value = 750 * item_quantity.value;
            break;
        case "Wireless Mouse":
            item_pip.value = 500;
            item_price.value = 500 * item_quantity.value;
            break;
        case "Laptop Stand":
            item_pip.value = 1500;
            item_price.value = 1500 * item_quantity.value;
            break;
        case "External Hard Drive":
            item_pip.value = 1000;
            item_price.value = 1000 * item_quantity.value;
            break;
        case "USB Hub":
            item_pip.value = 1200;
            item_price.value = 1200 * item_quantity.value;
            break;
        default:
            item_pip.value = 0;
            item_price.value = 0;
    }
}


function add_item_function() {
    if (item_name.value == "") {
        alert("Please select an item");
    } else if (item_quantity.value == "") {
        alert("Please enter a quantity");
    } else {
        var item_name_value = item_name.value;
        var item_quantity_value = item_quantity.value;
        var item_price_value = item_price.value;
        var row_number = item_list.rows.length;

        item_list.innerHTML +=
        `<tr>
        <td>${item_name_value}</td>
        <td>${item_quantity_value}</td>
        <td>${item_price_value / item_quantity_value}</td>
        <td>${item_price_value}</td>
        <td class="text-center"><button class="btn btn-danger rounded-2" onclick="delete_item_function(${row_number})">Delete</button></td>
        </tr>`;

        item_name.value = "";
        item_pip.value = "";
        item_quantity.value = "";
        item_price.value = "";

        total_items.textContent = function() {
            var total_items_value = 0;
            for (let i = 0; i < item_list.rows.length; i++) {
                total_items_value += parseInt(item_list.rows[i].cells[1].innerHTML);
            }
            return total_items_value;
        }();
        total_price.textContent = function() {
            var total_price_value = 0;
            for (let i = 0; i < item_list.rows.length; i++) {
                total_price_value += parseInt(item_list.rows[i].cells[3].innerHTML);
            }
            return total_price_value;
        }();
    }
}


function delete_item_function(row_number) {
    if (item_list.rows.length == 1) {
        total_items.textContent = 0;
        total_price.textContent = 0;
    }
    if (item_list.rows.length == 1) {
        item_list.deleteRow(row_number - 1);
    } else {
        item_list.deleteRow(row_number);
    }
    total_items.textContent = total_items.textContent - parseInt(item_list.rows[row_number].cells[1].innerHTML);
    total_price.textContent = total_price.textContent - parseInt(item_list.rows[row_number].cells[3].innerHTML);
    
}


function clear_all() {
    item_list.innerHTML = "";
    total_items.textContent = 0;
    total_price.textContent = 0;
}


item_quantity.oninput = update_price;
item_name.oninput = update_price;