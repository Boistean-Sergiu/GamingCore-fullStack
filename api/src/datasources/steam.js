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
        this.steam.getSchema({
            gameid: 440,
            callback: function (err, data) {
                console.log(data);
            }
        })
        return [{
            ID: "1asdasd1d1d2sada",
            email: "String!",
            username: "@asdad",
            password: "111111",
            created_at: Date.now()
        }]
    }
}
