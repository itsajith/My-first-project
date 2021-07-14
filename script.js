

// Add post to local storage
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("post-title");
  let addTxt = document.getElementById("post-text");
  
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Please add user and Details")
    }

  let posts = localStorage.getItem("posts");
  if (posts == null) {
    postsObj = [];
  } else {
    postsObj = JSON.parse(posts);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  postsObj.push(myObj);
  localStorage.setItem("posts", JSON.stringify(postsObj));
  addTxt.value = "";
  addTitle.value = "";
//   console.log(postsObj);
  showPosts();
});

// Function to show elements from localStorage
function showPosts() {
  let posts = localStorage.getItem("posts");
  if (posts == null) {
    postsObj = [];
  } else {
    postsObj = JSON.parse(posts);
  }
  let html = "";
  postsObj.forEach(function(element, index) {
    html += `
        <div class="post">
            <p class="post-counter">Post ${index + 1}</p>
            <h3 class="post-title"> ${element.title} </h3>
            <p class="post-text"> ${element.text}</p>
            <button id="${index}"onclick="deletePost(this.id)" class="post-btn">Delete Post</button>
            <button id="${index}"onclick="editPost(this.id)" class="post-btn edit-btn">Edit Post</button>
        </div>
            `;
  });
  let postsElm = document.getElementById("posts");
  if (postsObj.length != 0) {
    postsElm.innerHTML = html;
  } else {
    postsElm.innerHTML = `No Posts Yet!`;
  }
}

// Function to delete a post
function deletePost(index) {
//   console.log("I am deleting", index);
    let confirmDel = confirm("Delete this post?");
    if (confirmDel == true) {
        let posts = localStorage.getItem("posts");
        if (posts == null) {
            postsObj = [];
        } else {
            postsObj = JSON.parse(posts);
        }

        postsObj.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(postsObj));
        showPosts();
    }
  
}

// Function to Edit the post
function editPost(index) {
    let posts = localStorage.getItem("posts");
    let addTitle = document.getElementById("post-title");
    let addTxt = document.getElementById("post-text");

    if (addTitle.value !== "" || addTxt.value !== "") {
      return alert("Please clear the form before editing a post")
    } 

    if (posts == null) {
      postsObj = [];
    } else {
      postsObj = JSON.parse(posts);
    }
    console.log(postsObj);

    postsObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addTxt.value = element.text;
    })
    postsObj.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(postsObj));
        showPosts();
}


showPosts();