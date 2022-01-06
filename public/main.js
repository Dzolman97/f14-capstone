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
         newDiv.appendChild(bigTitle)
         bigTitle.appendChild(title)
         newsContainer.appendChild(newDiv)

         console.log(newDiv)
      })
}

axios.get('http://localhost:4004/news/api/feed')
   .then(displayNewsCallback)
//


const latestListBtn = document.getElementById("latestList")
const mainContent = document.getElementById("main-content")
const displayLatestCoin = (response) => {
   return response.data.filter((ele, index) => index < 100)
      .map(ele => {
         let newCoinData = document.createElement('section')
         newCoinData.classList.add('coinData')
         let num = document.createElement('div')
         num.classList.add('num')
         num.innerHTML = `<h3>${ele.cmc_rank}</h3>`
         let name = document.createElement('div')
         name.classList.add('name')
         name.innerHTML = `<h3>${ele.name}</h3>`
         let day = document.createElement('div')
         day.classList.add('day')
         day.innerHTML = `<h3>${ele.quote.USD.percent_change_24h}</h3>`
         if(ele.quote.USD.percent_change_24h < 0)
            day.style.color = 'red'
         let week = document.createElement('div')
         week.classList.add('week')
         week.innerHTML = `<h3>${ele.quote.USD.percent_change_7d}</h3>`
         if(ele.quote.USD.percent_change_7d < 0)
            week.style.color = 'red'
         let mcap = document.createElement('div')
         mcap.classList.add('mcap')
         mcap.innerHTML = `<h3>$ ${ele.quote.USD.market_cap}</h3>`
         let vol = document.createElement('div')
         vol.classList.add('vol')
         vol.innerHTML = `<h3>${ele.quote.USD.volume_24h}</h3>`

         newCoinData.appendChild(num)
         newCoinData.appendChild(name)
         newCoinData.appendChild(day)
         newCoinData.appendChild(week)
         newCoinData.appendChild(mcap)
         newCoinData.appendChild(vol)

         mainContent.appendChild(newCoinData)
      })
}

axios.get('http://localhost:4004/market-list/api/latest')
   .then(displayLatestCoin);
//

