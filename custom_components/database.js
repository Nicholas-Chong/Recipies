import { openDatabase } from 'react-native-sqlite-storage'

function ExecuteQuery (sql, params = []) {
  return new Promise((resolve, reject) => {
    let db = openDatabase({name : "recipies_db.sqlite3", createFromLocation: '~www/recipies_db.sqlite3', location: 'Default'})
    db.transaction((trans) => {
      trans.executeSql(sql, params, (trans, results) => {
        // console.log(results)
        resolve(results);
      },
        (error) => {
          reject(error);
        });
    });
  });
}
  
export async function SelectQuery(){
  let selectQuery = await ExecuteQuery("SELECT * FROM saved_recipies",[]);
  var rows = await selectQuery.rows;
  var results = []
  for (let i = 0; i < rows.length; i++) {
      var item = rows.item(i);
      results.push(item)
  }
  return results
}