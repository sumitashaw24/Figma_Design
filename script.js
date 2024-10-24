const mid = document.querySelector(".mid")
const navArr = ["Home","Shop","About","Contact"]

navArr.map((i)=>{
    const navLists = document.createElement("li")
    navLists.innerText = i
    mid.append(navLists)
})

const icons = document.querySelector(".icons")
const iconsArr = ["Product", "Price", "Quantity", "Subtotal"]

iconsArr.map((i)=>{
    const eachIcon = document.createElement("p")
    eachIcon.innerText = i
    icons.append(eachIcon)
})

const subtotalCart = document.querySelector("#subtotal")

const inp=document.querySelector("input")
inp.value=1
const subtotal=document.querySelector(".subtotal")

const remove=document.querySelector(".remove")
const product=document.querySelector(".product")

const cartsubtotal=document.querySelector(".cartsubtotal")
const total = document.querySelector(".total")

const fdata = async()=>{
    const data = await fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889")
    
    const res = await data.json()
    console.log(res);
    console.log(res.items[0].handle);
    

    const imageUrl = res.items[0].image;
    // console.log(imageUrl);
    document.getElementById('apiImage').src = imageUrl;

    const product_title=res.items[0].product_title
    document.getElementById("sofaName").innerHTML=product_title
    // console.log(product_title);

    const product_price=res.items[0].price
    document.getElementById("productPrice").innerHTML=product_price
    // console.log(product_price);
  
    const checkout = document.querySelector(".checkout")
    checkout.addEventListener("click", ()=>{
        alert(` Total Price Rs.${inp.value*product_price}`)
    })

    inp.addEventListener("change",()=>{
        // console.log(inp.value*product_price);
        subtotal.innerText=`Rs.${inp.value*product_price}`
        subtotalCart.innerText = `Rs.${inp.value*product_price}`
        total.innerText = `Rs.${inp.value*product_price}`
    })

    remove.addEventListener("click",()=>{
        product.style.display="none"
    })
    
}
fdata()






