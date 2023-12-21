const database = require("../config/db.config");

// lấy toàn bộ bản ghi về
async function allJobs() {
    const [result] = await database.execute("SELECT * FROM `jobs`");
    return result
}

// thêm mới
async function newJobs (Name) {
    const [result] = await database.execute("INSERT INTO `jobs` ( `Name`) VALUES (?)", [Name])
    return result[0]
}
// xoá
async function deleteJobs (id) {
    const [result] = await database.execute("DELETE FROM jobs WHERE `jobs`.`id` = ?",[id])
    return result
}
async function editJobs (id) {
    const [result] = await database.execute("UPDATE `jobs` SET `compelete` = 'flase' WHERE `jobs`.`id` = ?",[id])
    return result
}
module.exports = {
    allJobs,
    newJobs,
    deleteJobs,
    editJobs
}