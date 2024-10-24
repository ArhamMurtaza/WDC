const cards = document.getElementById("cards");

var card = [
    {
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Usman',
    phone_number : '0341-3835774',
    roll_number : '1'
    },{
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Subhan',
    phone_number : '0341-1234567',
    roll_number : '2'
    },{
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Yasir',
    phone_number : '0341-3835774',
    roll_number : '3'
    },{
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Hassan',
    phone_number : '0341-7654321',
    roll_number : '4'
    },{
    img_path : 'img/sidebar-img.jpg',
    stuName : 'Arham',
    phone_number : '0341-1234567',
    roll_number : '5'
    }
]


var stuNames = [];
for(var i = 0; i < card.length; i++){
    stuNames.push(card[i].stuName.trim())
}
stuNames.sort();
// console.log(stuNames);


for(var i = 0; i < card.length; i++){

    cards.innerHTML += 
    `<div class="col-sm-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <img src="${card[i].img_path}" alt="" class="card-img-top mb-2">
                        <h5 class="card-title">Name:<br>${stuNames[i]}</h5>
                        <p class="card-text">Phone no.<br>${card[i].phone_number}</p>
                        <p class="card-text">Roll no: ${card[i].roll_number}</p>
                    </div>
                </div>
            </div>`
    
}