import {deleteLeaveCon, getLeavesCon, getSingleLeaveCon, insertLeaveCon, updateLeaveCon} from '../controller/leaveCon.js'
import express from "express"


const router = express.Router()

router.get('/', getLeavesCon )
router.get ('/:Leave_id',getSingleLeaveCon )
router.post('/',insertLeaveCon )
router.delete('/:Leave_id',deleteLeaveCon )
router.patch('/:Leave_id', updateLeaveCon)



export default router
