const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]


let i=0;
let j=0;
for (const post  of posts){
    if (post.id===2){
        break;
    }
    i++;
} 
for(const comment of posts[i].comments){
    if (comment.id===3){
        break;
    } j++;
}

posts[i].comments.splice(j,1);
for(const comment of posts[i].comments){
    console.log(comment.id,comment.text);
}