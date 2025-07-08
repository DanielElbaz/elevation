const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]
i=0;

for(const post of posts){
    if (post.id===2){
        break;
    }
    i++;
}
posts.splice(i,1);

for(const post of posts){
    console.log(post);
}
