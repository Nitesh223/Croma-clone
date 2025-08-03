var Productarr = [
    {
        "Name": "Apple iPhone",
        "Description": "16(128GB,Teal)",
        "Price": 90000,
        "Offerprice": 75000,
        "Image": "Products/Mobiles/309695_0_peotee.webp"
    },

    {
        "Name": "OnePlus Nord CE4 Lite",
        "Description": "5G(8GB RAM,256GB)",
        "Price": 23999,
        "Offerprice": 20999,
        "Image": "Products/Mobiles/307504_0_ivzvgp.webp"
    },

    {
        "Name": "Redmi 13 5G",
        "Description": " (6GB RAM,128GB,Orchid Pink)",
        "Price": 17999,
        "Offerprice": 12499,
        "Image": "Products/Mobiles/307691_0_jtjpit.webp"
    },

    {
        "Name": "realme 14x 5G ",
        "Description": " (6GB RAM,128BG,Golden Glow)",
        "Price": 16999,
        "Offerprice": 14999,
        "Image": "Products/Mobiles/312422_0_hxo2mn.webp"
    },

    {
        "Name": "Nothing CMF Phone 1",
        "Description": " 5G(6GB RAM,128GB,Black) ",
        "Price": 28999,
        "Offerprice": 16499,
        "Image": "Products/Mobiles/308330_0_li240c.webp"
    }

]

function showproduct() {
    var product_container_div = document.getElementById("mobile-container")
    var result = ""
    Productarr.map((product) => {
        result += `<div class="product-card">
                <a href=""><img src= ${product.Image} alt="Laptop"></a>
                <div class="product-title ">${product.Name} ${product.Description}</div>
                <div class="price">₹${product.Offerprice} <span><s style="color: gray; font-size:small; ">₹${product.Price}</s></span>
                </div>
                <div class="stars">★★★★★ <span><Button class="product-button">Add to cart</Button></span></div>
            </div>`
    })
    product_container_div.innerHTML = result
}


showproduct()

var Headsetarr = [
    {
        "Id": 100,
        "Name": "Apple AirPods 4 Active Noise Cancellation",
        "Offerprice": 17990,
        "Price": 17900,
        "Image": "Products/Headset/309237_0_jytqwr.webp"
    },

    {
        "Id": 200,
        "Name": "OnePlus Nord Buds 3 Pro TWS Earbuds with Active",
        "Offerprice": 2999,
        "Price": 3299,
        "Image": "Products/Headset/308631_0_fholdl.webp"
    },

    {
        "Id": 300,
        "Name": "realme T310 TWS Earbuds with Hybrid Noise",
        "Offerprice": 2199,
        "Price": 2999,
        "Image": "Products/Headset/308611_lcp1t9.webp"
    },

    {
        "Id": 400,
        "Name": "Products/Headset/308611_lcp1t9.webp",
        "Offerprice": 4299,
        "Price": 4999,
        "Image": "Products/Headset/308484_uiqvir.webp"
    },

    {
        "Id": 500,
        "Name": "Sony WH-1000XM5 Bluetooth Headphone with ...",
        "Offerprice": 29990,
        "Price": 34990,
        "Image": "Products/Headset/262565_0_gsz0tr.webp"
    }
]

function displayheadset() {
    var headset_container = document.getElementById("headset_container")
    var result = ""
    Headsetarr.map((product) => {
        result += `<div class="product-card">
                <a href=""><img src= ${product.Image}></a>
                <div class="product-title ">${product.Name}</div>
                <div class="price">${product.Offerprice} <span><s style="color: gray; font-size:small; ">${product.Price}</s></span>
                </div>
                <div class="stars">★★★★★<span><Button class="product-button" onclick=addtocart({"Name" :  ${product.Name}}) >Add to cart</Button></span></div>
            </div>`
    })
    headset_container.innerHTML = result

}

// displayheadset()

// function hello(){
//     alert("digital watch")
// }

//  var watches = document.getElementById("digitalwatch")
//  watches.addEventListener("click",function(){
//     alert("Hello")
//  })

function addtocart(Id) {
    console.log(Id)
    alert(Id)
}