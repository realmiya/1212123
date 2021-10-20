

let hidden = true;

function read() {

    if (hidden) {
        document.getElementById('moreArticle').style.display = ""
        document.getElementById("readBtn").innerHTML = "Read less"
        hidden = !hidden;
    } else {
        document.getElementById('moreArticle').style.display = "none";
        hidden = !hidden;
    }

}
