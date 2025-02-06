import {pool} from '../config/config.js'

const getUsers = async ()=>{
    let [data] = await pool.query('SELECT*FROM users_')
    return data  
  }

const getSingleUser = async (contact)=>{
    let [data] = await pool.query('SELECT * FROM modern_technology_database.users_ WHERE contact =?',[contact])
    return data
}


 
 const insertUsers = async (contact,role,password) => {
     await pool.query('INSERT INTO users_ (contact,role,password) VALUES (?, ?, ?, ?,?,?)',[contact,role,password])
    return 'users added succesfully!'
}

const deleteUsers = async(users_id)=>{
    await pool.query('DELETE FROM users_ WHERE (users_id = ?)',[users_id])
    return 'users deleted'
}

const updateUsers = async(contact,role,password)=>{
    await pool.query('UPDATE users_ SET contact = ?, role = ?, password =? WHERE (contact = ?)',[contact,role,password])
    return await getUsers()
}

export{getUsers,getSingleUser, insertUsers,deleteUsers, updateUsers}