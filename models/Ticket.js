const shortId = require('shortid')

class Ticket {
    /**
     * @param {string} username 
     * @param {number} price 
     */
    constructor(username, price){
        this.id = shortId.generate()
        this.username = username.toLowerCase()
        this.price = price
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

module.exports = Ticket
