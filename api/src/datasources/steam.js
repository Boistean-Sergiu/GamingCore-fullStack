const { RESTDataSource } = require('apollo-datasource-rest')
const steam = require('steam-web')
const config = require('../../config/config')

module.exports = class SteamAPI {
    constructor() {
        this.steam = new steam({
            apiKey: config.steamKey,
            format: 'json'
        })
    }

    getSteamAPIList() {
        this.steam.getSupportedAPIList({
            callback: function (err, data) {
                console.log('este!')
            }
        })
        return [{
            ID: "1",
            email: "String!",
            username: "@asdad",
            password: "111111",
            created_at: Date.now()
        }]
    }
}
