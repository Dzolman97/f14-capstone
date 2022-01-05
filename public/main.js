const newsBtn = document.getElementById("news");
const newsContainer = document.getElementById("container")
const displayNewsCallback = (response) => {
   return response.data.filter((ele, index) => index < 20)
      .map(ele => {
         let newDiv = document.createElement('div')
         newDiv.classList.add('line')
         let title = document.createElement('a')
         title.innerHTML = ele.title
         title.id = "newsRes"
         title.href = ele.url
         title.target = "_blank"
         let bigTitle = document.createElement('h3')
         // let currency = document.createElement()
         newDiv.appendChild(bigTitle)
         bigTitle.appendChild(title)
         console.log(newDiv)
         newsContainer.appendChild(newDiv)
      })
}
axios.get('http://localhost:4004/news/api/feed')
   .then(displayNewsCallback)
newsBtn.addEventListener("click", displayNews)


