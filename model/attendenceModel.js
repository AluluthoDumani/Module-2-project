import {pool} from '../config/config.js'

const getAttendees = async ()=>{
    let [data] = await pool.query('SELECT*FROM attendance')
    return data  
  }

const getSingleAttendee = async (attendance_id)=>{
    let [data] = await pool.query('SELECT * FROM attendance WHERE attendance_id =?',[attendance_id])
    return data
}
 
 const insertAttendee = async (attendance_id,employee_id,date,status) => {
     await pool.query('INSERT INTO attendance (attendance_id,employee_id,date,status) VALUES (?, ?, ?, ?)',[attendance_id,employee_id,date,status])
    return 'attendee added succesfully!'
}

const deleteAttendee = async(attendance_id)=>{
    await pool.query('DELETE FROM attendance WHERE (attendance_id = ?)',[attendance_id])
    return 'attendee deleted'
}

const updateAttendee = async(attendance_id,employee_id,date,status)=>{
    await pool.query('UPDATE attendance SET name = ?, position = ?, department_id =? WHERE (attendance_id = ?)',[attendance_id,employee_id,date,status])
    return await getattendees()
}

export{getAttendees,getSingleAttendee, insertAttendee,deleteAttendee, updateAttendee}