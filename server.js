import express from 'express';
import { formatFileSize } from './formatter.js';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { fileSize: '' });
});

app.post('/', (req, res) => {
  const fileSizeBytes = parseInt(req.body.fileSizeInput);
  const formattedSize = formatFileSize(fileSizeBytes);
  res.render('index', { fileSize: formattedSize });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});