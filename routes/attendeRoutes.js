import {deleteAttendeeCon, getAttendeesCon, getSingleAttendeeCon, insertAttendeeCon, updateAttendeeCon} from '../controller/attendenceCon.js'
import express from "express"


const router = express.Router()

router.get('/', getAttendeesCon )
router.get ('/:attendee_id',getSingleAttendeeCon )
router.post('/',insertAttendeeCon )
router.delete('/:attendee_id',deleteAttendeeCon )
router.patch('/:attendee_id', updateAttendeeCon)



export default router