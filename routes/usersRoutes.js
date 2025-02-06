import {deleteUsersCon, getUsersCon, getSingleUserCon, insertUsersCon, updateUsersCon} from '../controller/usersCon.js'
import express from "express"


const router = express.Router()

router.get('/', getUsersCon )
router.get ('/:contact',getSingleUserCon )
router.post('/',insertUsersCon )
router.delete('/:contact',deleteUsersCon )
router.patch('/:contact', updateUsersCon)



export default router