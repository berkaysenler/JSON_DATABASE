const { readDb, writeDb } = require("./db_functions");

// const dataObj = {
//     name: 'Kaissu',
//     favorite_numbers: [120,3],
//     fav_game: 'lol'
// }

// writeDb(dataObj)

// console.log(readDb())

const saved_data = readDb()

saved_data['main_character'] = 'Lucian'

writeDb(saved_data)