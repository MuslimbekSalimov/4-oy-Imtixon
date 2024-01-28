// Log in Get to
const elButtonExit = document.querySelector('.button__exit')
const token = window.localStorage.getItem('token')


const elList = document.querySelector('.list')
const elTemplate = document.getElementById("template").content


const elListNext = document.querySelector('.list__next')
const elTemplateNext = document.getElementById("template__next").content


const elListCommentNext = document.querySelector('.list__comment')
const elTemplateCommentNext = document.getElementById("template__comment").content


let posts =[];
let comment = [];
let userId = [];

if(!token){
    window.location.replace('login.html')
}

elButtonExit.addEventListener('click', ()=> {
    window.localStorage.removeItem('token')
    window.location.replace('login.html')
})

let boshArr = []

// Users GET API  

function helloUsers(array, node) {
    node.innerHTML = null


    array.forEach(element => {
        const bekkGAming = elTemplate.cloneNode(true)
        bekkGAming.querySelector('.text').textContent = element.id
        bekkGAming.querySelector('.heading__name').textContent = element.name
        bekkGAming.querySelector('.heading__username').textContent = element.username
        bekkGAming.querySelector('.text__email').textContent = element.email
        bekkGAming.querySelector('.button').dataset.userId = element.id;

        elList.appendChild(bekkGAming)
    });

    elListCommentNext.innerHTML = null

}

async function films() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await res.json();
    //   console.log(data);

    helloUsers(data, elList)
    } catch {
      console.log("error");
    } 
  } 
  films()


// Template Next 

function renderPost(array, node) {
    node.innerHTML = null



    array.forEach(why => {
        const Gaming = elTemplateNext.cloneNode(true)
        Gaming.querySelector('.text').textContent = why.id
        Gaming.querySelector('.heading__name').textContent = why.title
        Gaming.querySelector('.heading__username').textContent = why.body
        Gaming.querySelector('.ciqtogo').dataset.postId = why.id;

        elListNext.appendChild(Gaming)
    });


}

async function getPosts(userId) {
    try {
      const respon = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
      const datas = await respon.json();
      // console.log(datas);

    boshArr = datas.filter((arr) => arr.userId == userId);
    renderPost(boshArr, elListNext)
    } catch {
      console.log("error");
    } 
  } 
  getPosts()
  
  elList.addEventListener('click', (evt) => {
    if (evt.target.matches(".button")) {
      elListNext.innerHTML = null;
       userId = evt.target.dataset.userId;
      getPosts (userId);
      elListCommentNext.innerHTML = null
    }


  })

//   Template Finish so:Comments


function renderComment(array, node) {
    node.innerHTML = null



    array.forEach(eli => {
        const Hub = elListCommentNext.cloneNode(true)
        Hub.querySelector('.text').textContent = eli.id;
        Hub.querySelector('.heading__name').textContent = eli.name;
        Hub.querySelector('.heading__username').textContent = eli.email;
        Hub.querySelector('.text__email').textContent = eli.body;

        elListCommentNext.appendChild(Hub)
    });
}

async function getComment(postId) {
    try {
      const respon = await fetch("https://jsonplaceholder.typicode.com/comments/");
      const datalars = await respon.json();
    //   console.log(datas);

    renderComment(datalars, elListCommentNext)
    comment.datalars.filter((commen)=> commen.postId == postId )

    } catch {
      console.log("Kemadi tog'o");
    } 
  } 
  // getComment()


  elListNext.addEventListener("click", (evt) => {
    evt.preventDefault()
    const btnCom = evt.target.matches(".ciqtogo");
    if (btnCom) {
      const isButton = evt.target.dataset.postId;
  
      getComment(isButton);
    }
  });