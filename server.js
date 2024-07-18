const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = 8080;


//pom.xml mvn install -> java
//npm install
//py install
//패키지 관리자

//multer
//커스텀
const uploadDir = path.join(__dirname, 'image');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

//
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
    //파일을 올릴 때 : 오ㄹ날짜 + 파ㄹ이름
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ message: 'Image uploaded successfully!', file: req.file });
});



app.use(express.static(path.join(__dirname, 'html')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
