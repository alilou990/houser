const getHouses = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_houses()
        .then((houses) => res.status(200).send(houses))
        .catch(error => {
            res.sendStatus(500)
            console.log(error)
        })
}

const addHouse = (req, res) => {
    const dbInstance = req.app.get('db')
    const {name, address, city, state, zip} = req.body
    dbInstance.add_house([name, address, city, state, zip])
        .then(() => res.status(200).send('House was added!'))
        .catch(error => {
            res.sendStatus(500)
            console.log(error)
        })
}

module.exports = {
    getHouses,
    addHouse
}