var item_name = document.getElementById("item_name");
var item_price = document.getElementById("item_price");
var item_quantity = document.getElementById("item_quantity");
var item_total = document.getElementById("item_total");
var total_items = document.getElementById("total_items");
var total_price = document.getElementById("total_price");
var add_item = document.getElementById("add_item");
var item_list = document.getElementById("item_list");




item_quantity.oninput = function() {
    switch (item_name.value) {
        case "Laptop Charger":
            item_price.value = 100 * item_quantity.value;
            break;
        case "Wireless Mouse":
            item_price.value = 50 * item_quantity.value;
            break;
        case "Laptop Stand":
            item_price.value = 150 * item_quantity.value;
            break;
        case "External Hard Drive":
            item_price.value = 200 * item_quantity.value;
            break;
        case "USB Hub":
            item_price.value = 250 * item_quantity.value;
            break;
        default:
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
        <td>${item_price_value}</td>
        <td class="text-center"><button class="btn btn-danger rounded-2" onclick="delete_item_function(${row_number})">Delete</button></td>
        </tr>`;

        item_name.value = "";
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
                total_price_value += parseInt(item_list.rows[i].cells[2].innerHTML);
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
    total_price.textContent = total_price.textContent - parseInt(item_list.rows[row_number].cells[2].innerHTML);
    
}
