const cards = document.getElementById("cards");
const total_price = document.getElementById("total_price");
const total_items = document.getElementById("total_items");
const cart_items = document.getElementById("cart_items");
const remove_item = document.getElementById("remove_item");
const add_item = document.getElementById("add_item");
const cart_items_head = document.getElementById("cart_items_head");
const cart_items_body = document.getElementById("cart_items_body");
const cart_table = document.getElementById("cart_table");
const cart_counter = document.getElementById("cart_counter");

var item_id;

var card = [
    {
    item_id : 0,
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Usman',
    phone_number : '0341-3835774',
    roll_number : '1',
    fee : 100
    },{
    item_id : 1,
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Subhan',
    phone_number : '0341-1234567',
    roll_number : '2',
    fee : 100
    },{
    item_id : 2,
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Yasir',
    phone_number : '0341-3835774',
    roll_number : '3',
    fee : 100
    },{
    item_id : 3,
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Hassan',
    phone_number : '0341-7654321',
    roll_number : '4',
    fee : 100
    },{
    item_id : 4,
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Arham',
    phone_number : '0341-1234567',
    roll_number : '5',
    fee : 100
    }
]



for(var i = 0; i < card.length; i++){

    cards.innerHTML += 
    `<div class="col-sm-4">
        <div class="card mb-4">
            <div class="card-body">
                <img src="${card[i].img_path}" alt="" class="card-img-top mb-2">
                <h5 class="card-title">Name:<br>${card[i].stuName}</h5>
                <p class="card-text">Phone no.<br>${card[i].phone_number}</p>
                <p class="card-text">Roll no: ${card[i].roll_number}</p>
                <button class="btn btn-primary" id="add_item" onclick="addItem(${card[i].item_id})">Add to Cart</button>
            </div>
        </div>
    </div>`
    
}

function addItem(item_id){
    cart_counter.innerHTML = Number(cart_counter.innerHTML) + 1;
    cart_empty.classList.add("d-none");
    cart_items_head.classList.remove("d-none");
    cart_items_body.innerHTML += 
    `<tr class="text-center">
        <td><img src="${card[item_id].img_path}" alt="" class="cart_img" style="width: 60px; height: 60px;"></td>
        <td><span class="fw-bold">${card[item_id].stuName}</span></td>
        <td><span class="fw-bold">${card[item_id].fee}</span></td>
        <td><button class="btn btn-danger btn-sm" id="remove_item" onclick="removeItem(${item_id})">Remove</button></td>
    </tr>`
    total_price.innerHTML = Number(total_price.innerHTML) + Number(card[item_id].fee);
    total_items.innerHTML = Number(total_items.innerHTML) + 1;
}

function removeItem(item_id){
    cart_counter.innerHTML = Number(cart_counter.innerHTML) - 1;
    while(item_id >= cart_items_body.rows.length || item_id != 0){
        item_id--;
    }

    cart_items_body.deleteRow(item_id);

    if(cart_items_body.rows.length == 0){
        cart_items_head.classList.add("d-none");
        cart_empty.classList.remove("d-none");
    }

    total_price.innerHTML = Number(total_price.innerHTML) - Number(card[item_id].fee);
    total_items.innerHTML = Number(total_items.innerHTML) - 1;
}