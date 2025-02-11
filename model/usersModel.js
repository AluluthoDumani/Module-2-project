import {pool} from '../config/config.js'

const getUsers = async ()=>{
    let [data] = await pool.query('SELECT*FROM users_')
    return data  
  }

const getSingleUser = async (contact)=>{
    let [data] = await pool.query('SELECT * FROM users_ WHERE contact =?',[contact])
    return data
}


 
const insertUsers = async (contact, role, password) => {
    await pool.query('INSERT INTO users_ (contact, role, password) VALUES (?, ?, ?)', [contact, role, password]);
    return 'User added successfully!';
};


const deleteUsers = async(users_id)=>{
    await pool.query('DELETE FROM users_ WHERE (users_id = ?)',[users_id])
    return 'users deleted'
}

const updateUsers = async (users_id, contact, role, password) => {
    await pool.query(
        'UPDATE users_ SET contact = ?, role = ?, password = ? WHERE users_id = ?',
        [contact, role, password, users_id]
    );
    return await getUsers();
};

export{getUsers,getSingleUser, insertUsers,deleteUsers, updateUsers}