//javascript, jQuery

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=GZDmnGJcUw5nIhUiwcqJ9C9dJjwzndHi&limit=5");
xhr.done(function (data) { 
    console.log("success got data", data);
    const gif=data.data[0].embed_url
    console.log(gif)
    const id=document.getElementById('gif');
    id.src=gif;
    
});