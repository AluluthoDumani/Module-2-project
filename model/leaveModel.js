import {pool} from '../config/config.js'

const getLeaves = async ()=>{
    let [data] = await pool.query('SELECT * FROM `leave`')
    return data  
  }

const getSingleLeave = async (leave_id)=>{
    let [data] = await pool.query('SELECT * FROM `leave` WHERE leave_id =?',[leave_id])
    return data
}
 
 const insertLeave = async (leave_id,employee_id,leave_date,reason,status) => {
     await pool.query('INSERT INTO `leave` (leave_id,employee_id,leave_date,reason,status) VALUES (?, ?, ?, ?,?,?)',[leave_id,employee_id,leave_date,reason,status])
    return 'Leave added succesfully!'
}

const deleteLeave = async(leave_id)=>{
    await pool.query('DELETE FROM `leave` WHERE (leave_id = ?)',[leave_id])
    return 'Leave deleted'
}

const updateLeave = async(leave_id,employee_id,leave_date,reason,status)=>{
    await pool.query('UPDATE `leave` SET leave_date = ?, reason = ?, status =? WHERE (leave_id = ?)',[leave_id,employee_id,leave_date,reason,status])
    return await getLeaves()
}

export{getLeaves,getSingleLeave, insertLeave,deleteLeave, updateLeave}