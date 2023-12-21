const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { userManagerRouter } = require("./src/routers/user-manager.routers");

// cấu hinh kết nối
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// đường dẫn router
userManagerRouter(app)


//chạy cổng
app.listen(8080, () => {
    console.log(`ĐANG CHẠY CỔNG ${8080}`);
})