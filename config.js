const newsURL = (newsApi) => `https://cryptopanic.com//api/v1/posts/?auth_token=${newsApi}&public=true`

module.exports = {
   newsURL
}