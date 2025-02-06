import {getAttendees,getSingleAttendee, insertAttendee,deleteAttendee, updateAttendee} from '../model/attendenceModel.js'
const getAttendeesCon = async(req,res)=>{
    res.json({Attendees: await getAttendees()})
}

export {getAttendeesCon, insertAttendeeCon, getSingleAttendeeCon,deleteAttendeeCon, updateAttendeeCon}

const getSingleAttendeeCon = async(req,res)=>{
    res.json({emp: await getSingleAttendee(req.params.attendance_id)})
}


const insertAttendeeCon = async (req,res)=>{
    let {attendance_id,employee_id,date,status} = req.body
  res.json({Attendees: await insertAttendee(attendance_id,employee_id,date,status)
    
  })

}

const deleteAttendeeCon = async (req,res) => {
    res.json({Attendeedel: await deleteAttendee(req.params.attendance_id)})
    
}

// This only updates name,position and department id 
const updateAttendeeCon = async(req,res)=>{
    let {attendance_id,employee_id,date,status} = req.body
    res.json({Attendee :await updateAttendee(attendance_id,employee_id,date,status)})
}