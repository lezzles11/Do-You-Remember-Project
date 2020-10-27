Example 1
```
  add(note, user) {
    // Where In claus broken...
    // let query = this.knex.select('notes.content', 'notes.user_id')
    // .from
    // ('notes')
    // .where('users.id', 1)
    //                 .whereIn('notes.user_id', function (){
    //                      this.select('id').from('users')
    //                 })
    //                 console.log('okay')
    //                 console.log(note, user)
    //                 // console.log(query)
    //                 return query.then((rows)=>{
    //                     console.log('getting here')
    //                     console.log(rows, 'these are rows?')
    //                     return rows
    //                 })

    // where is actually a subquery - it first runs the subquery returning an array, then rest of the conditionas are applied
    let query = this.knex
      .select("id")
      .from("users")
      .where("users.username", user);

    return query.then((rows) => {
      console.log(rows[0].id, "<==== this is the id");
      if (rows.length === 1) {
        return this.knex
          .insert({
            content: note,
            user_id: rows[0].id,
          })
          .into("notes");
      } else {
        throw new Error(`Cannot add a note to a user that doesn't exist!`);
      }
    });
  }
  ```
list the user 
  ```
    list(user) {
    if (typeof user !== "undefined") {
      let query = this.knex
        .select("notes.id", "notes.content")
        .from("notes")
        .innerJoin("users", "notes.user_id", "users.id")
        .where("users.username", user)
        .orderBy("notes.id", "asc");

      return query.then((rows) => {
        console.log(rows, "pp");
        return rows.map((row) => ({
          id: row.id,
          content: row.content,
        }));
      });
    } else {
      let query = this.knex
        .select("users.username", "notes.id", "content")
        .from("notes")
        .innerJoin("users", "notes.user_id", "users.id");

      return query.then((rows) => {
        console.log(rows);
        const result = {};
        rows.forEach((row) => {
          if (typeof result[row.username] === "undefined") {
            result[row.username] = [];
          }
          result[row.username].push({
            id: row.id,
            content: row.content,
          });
        });
        return result;
      });
    }
  }
  ```