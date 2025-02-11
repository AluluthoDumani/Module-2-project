import express from 'express';
import {
  fetchAllLeaves,
  fetchSingleLeave,
  createLeave,
  removeLeave,
  modifyLeave,
  approveLeaveRequest,
  rejectLeaveRequest
} from '../controller/leaveCon.js';

const router = express.Router();

router.get('/', fetchAllLeaves);
router.get('/leave/:leave_id', fetchSingleLeave);
router.post('/leave', createLeave);
router.delete('/leave/:leave_id', removeLeave);
router.put('/leave/:leave_id', modifyLeave);
router.patch('/leave/:leave_id', (req, res) => {
  console.log("PATCH request to approve leave with ID:", req.params.leave_id);
  approveLeaveRequest(req, res);
});
router.patch('/leave/:leave_id', rejectLeaveRequest);

export default router;
