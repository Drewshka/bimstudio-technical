/*

You have been asked to write an endpoint which returns a list of buildings.
This data is currently stored in a JSON file within the 'data' folder in the backend.

You notice that there is a 'secretInformation' key within each 'building' object.
The team leader tells you that we do not want to expose this information in this endpoint.

*/

const router = require('express').Router();

router.get('/all', (req, res) => {

    // SAMPLE RESPONSE, REPLACE WITH YOUR CODE
    res.status(200).json({
        buildings: [
            {
                "company": "Green Dot LLC",
                "address": "2842 Feathers Hooves Drive",
                "city": "New York",
                "state": "NY"
            }
        ]
    });

});

module.exports = router;