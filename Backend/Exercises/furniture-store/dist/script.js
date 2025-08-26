function Search(){
    let input=$("#name-input").val()

    $.get(`priceCheck/${input}`,(data)=>{
        $("body").append(`<div>${input} : ${data.price}$ </div>`)
    })
}