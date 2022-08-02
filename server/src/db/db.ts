import mysql from 'mysql2'

export const connect = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'ubyni'
})
 




