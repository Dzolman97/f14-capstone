const newsRouter = require("../routes/news.js")
const newsContainer = document.querySelector("news-container");
const displayNews = () => axios.get('http://localhost:4004/news/api/feed').then(newsRouter2)
const newsRouter2 = (response) => {newsContainer.textContent = `${response.data}`}

newsContainer.addEventListener("load", displayNews)