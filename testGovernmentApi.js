

const apiKey = config.MY_API_KEY;
const secret = config.MY_API_SECRET;

// const data = {
//     resource_id: 'cb40b01e-3c32-4d79-8950-f097313d5643', // the resource id
//     limit: 5, // get 5 results
//     q: 'jones' // query for 'jones'
// };

const url = 'https://discover.data.vic.gov.au/api/3/action/datastore_search?resource_id=cb40b01e-3c32-4d79-8950-f097313d5643&limit=5'

fetch(url).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
})
