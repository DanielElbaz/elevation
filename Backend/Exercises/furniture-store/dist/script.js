function Search(){
    let input=$("#name-input").val()

    $.get(`priceCheck/${input}`,(data)=>{
        $("body").append(`<div>${input} : ${data.price}$ </div>`)
    })
}

function Buy(){
   let input=$("#name-input").val()
   $.get(`/buy/${input}`,(data)=>{
    $("body").append(`<div>Congratulations, you've just bought a ${input} for ${data.price}$. There are ${data.inventory} left now in the store. </div>`)
   })
}