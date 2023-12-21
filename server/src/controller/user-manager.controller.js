const { allJobs, newJobs, deleteJobs, editJobs } = require("../repository/user-managet.repository")

async function getAllJobs (req,res) {
    const listJobs = await allJobs()
    res.status(200).json(listJobs)
}
// thêm
async function addJobs (req,res) {
    const {Name}= req.body;
    const result = await newJobs(Name);
    res.status(200).json({message : "Thêm thành công"})

}
// xoá
async function dropJobs (req,res) {
    const {id} = req.params;
    const result = await deleteJobs(id)
    res.status(200).json({message : "xoá thành công"})
}
// sửa
async function updateJobs (req,res) {
    const {id} = req.params;
    const result = await editJobs(id)
    res.status(200).json({message : "sửa thành công"})
}
module.exports = {
    getAllJobs,
    addJobs,
    dropJobs,
    updateJobs
}