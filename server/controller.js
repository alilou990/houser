const getHouses = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_houses()
        .then((houses) => res.status(200).send(houses))
        .catch(error => {
            res.sendStatus(500)
            console.log(error)
        })
}

module.exports = {
    getHouses
}