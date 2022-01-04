const newsContainer = document.getElementById("news-container");
const displayNews = () => axios.get("https://f14-crypto-current.herokuapp.com/news/api/feed");
newsContainer.addEventListener("load", displayNews);