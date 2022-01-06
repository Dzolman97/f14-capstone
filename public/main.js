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
         let source = document.createElement('p')
         source.innerHTML = `Source: ${ele.source.domain}`
         let coinsAttributed = document.createElement('p')
         coinsAttributed.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

   
         newDiv.appendChild(source)
         newDiv.appendChild(bigTitle)
         newDiv.appendChild(coinsAttributed)
         
         bigTitle.appendChild(title)
         
         newsContainer.appendChild(newDiv)

         // console.log(newDiv)
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
         let price = document.createElement('div')
         price.classList.add('price')
         price.innerHTML = `<h3>$ ${ele.quote.USD.price}</h3>`
         let day = document.createElement('div')
         day.classList.add('day')
         day.innerHTML = `<h3>${ele.quote.USD.percent_change_24h}</h3>`
         let week = document.createElement('div')
         week.classList.add('week')
         week.innerHTML = `<h3>${ele.quote.USD.percent_change_7d}</h3>`
         if(ele.quote.USD.percent_change_7d < 0)
            week.style.color = '#AF1308'
         let mcap = document.createElement('div')
         mcap.classList.add('mcap')
         mcap.innerHTML = `<h3>$ ${ele.quote.USD.market_cap}</h3>`
         let vol = document.createElement('div')
         vol.classList.add('vol')
         vol.innerHTML = `<h3>$ ${ele.quote.USD.volume_24h}</h3>`

         if(ele.quote.USD.percent_change_24h < 0){
            day.style.color = '#AF1308'
            price.style.color = '#AF1308'
            mcap.style.color = '#AF1308'
            vol.style.color = '#AF1308'
         }

         newCoinData.appendChild(num)
         newCoinData.appendChild(name)
         newCoinData.appendChild(price)
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




// const addtolistForm = document.getElementById('addCurrency-Watchlist')

// addtolistForm.addEventListener('submit', newCoinCardHandler)

// const wantedCoin = document.getElementById('currency-name')

// const addCoinCard = (response) => {
//    return response.data.filter((ele, index) => index < 100)
//       .map(ele => {
//          let searchedFor = wantedCoin
//          if(ele.name === searchedFor){
            
//          }
//       })
// }

// console.log(addCoinCard)

// axios.get('http://localhost:4004/market-list/api/latest')
//    .then(addCoinCard)
// // function newCoinCardHandler(e){
// //    e.preventdefault();
// //    let wantedCoin = document.getElementById('currency-name')

// //    let wantedCoinObj = {
// //       name: wantedCoin.value,
// //    }

// //    addNewCoinCard(wantedCoinObj)

   
// // }

// // const addNewCoinCard = 






// // const wantedCoin = (e) => {
// //    e.preventDefault();
// //    let coin = document.getElementById('currency-name')

// //    return coin.value
// // }
// // const displayWantedCoin = (response) => {
// //    console.log(response.data.filter((ele) => ele.name))
// // }

// // axios.put('http://localhost:4004/market-list/api/latest/quote')
// //    .then(displayWantedCoin);

// // addtolist.addEventListener('click', wantedCoin)