import Leave from '../models/Leave.js';
import Employee from '../models/Employee.js';

const getLeaves = async (req, res) => {
    try {
        const leaves = await Leave.find()
            .populate({
                path: 'employeeId',
                populate: {
                    path: 'userId',
                    select: 'name email'
                }
            })
            .sort({ appliedAt: -1 });
        return res.status(200).json({ success: true, leaves });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const addLeave = async (req, res) => {
    try {
        const { employeeId, leaveType, startDate, endDate, reason } = req.body;

        const leave = new Leave({
            employeeId,
            leaveType,
            startDate,
            endDate,
            reason
        });
        await leave.save();

        return res.status(201).json({ success: true, leave });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const getLeave = async (req, res) => {
    try {
        const { id } = req.params;
        const leave = await Leave.findById(id)
            .populate({
                path: 'employeeId',
                populate: {
                    path: 'userId',
                    select: 'name email'
                }
            });
        return res.status(200).json({ success: true, leave });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const updateLeave = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const leave = await Leave.findByIdAndUpdate(id, {
            status,
            updatedAt: Date.now()
        }, { new: true });

        return res.status(200).json({ success: true, leave });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

export { getLeaves, addLeave, getLeave, updateLeave };
