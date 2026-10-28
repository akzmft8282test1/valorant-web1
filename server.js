const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// public 폴더 내 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
