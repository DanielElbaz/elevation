 
 
 
 document.getElementById("searchBtn").addEventListener("click", function () {
            const query = document.getElementById("search").value;
            const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=&limit=5`;

            $.get(url).done(function (data) {
                if (data.data.length > 0) {
                    const gifUrl = data.data[0].embed_url;
                    document.getElementById("gif").src = gifUrl;
                } else {
                    alert("no gif !");
                }
            });
        });
