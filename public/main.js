const newsContainer = document.getElementById("newsRes");
const newsBtn = document.getElementById("news")
const displayNews = () => axios.get('http://localhost:4004/news/api/feed').then(displayNewsCallback)
const displayNewsCallback = (response) => {newsContainer.textContent = `${response.data}`}

newsBtn.addEventListener("click", displayNews)