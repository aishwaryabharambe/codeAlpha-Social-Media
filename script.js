let likes = 0;

function likePost(){
likes++;
document.getElementById("likes").innerHTML =
"Likes: " + likes;
}

function addComment(){
let comment =
document.getElementById("commentBox").value;

document.getElementById("comments").innerHTML +=
"<br>" + comment;
}