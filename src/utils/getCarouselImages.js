const fs = require('fs');
const path = require('path');

export default function getCarouselImages(folderPath) {
  const imageExtensions = ['.jpg'];

  const files = fs.readdirSync(folderPath);

  const imageFiles = files.filter(file => {
    const extension = path.extname(file).toLowerCase();
    return imageExtensions.includes(extension);
  });

  return imageFiles;
}

// 使用示例
// const folderPath = '../../static/img/carouselImages/'; // 文件夹路径
// const imageFiles = getAllImageFiles(folderPath);
// console.log(imageFiles);