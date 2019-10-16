
const fs = require('fs');
const path = require('path');
var child_process = require('child_process');
const chalk = require('chalk');
// 递归创建目录 异步方法  
function mkdirs(dirname, callback) {  
    fs.exists(dirname, function (exists) {  
        if (exists) {  
            callback();  
        } else {  
            // console.log(path.dirname(dirname));  
            mkdirs(path.dirname(dirname), function () {  
                fs.mkdir(dirname, callback);  
                console.log(chalk.green('在' + path.dirname(dirname) + '目录创建好' + dirname  +'目录'));
            });  
        }  
    });  
} 
const copyFile = function (srcPath, tarPath, filter = []) {
    child_process.spawn('cp', ['-r', srcPath, tarPath]);
    // fs.readdir(srcPath, function (err, files) {
    //   console.log(files)
    // //   if (err === null) {
    //     files.forEach(function (filename) {
    //       let filedir = path.join(srcPath,filename);
    //       let filterFlag = filter.some(item => item === filename)
    //       if (!filterFlag) {
    //         fs.stat(filedir, function (errs, stats) {
    //           let isFile = stats.isFile()
    //           if (isFile) {                                    // 复制文件
    //             const destPath = path.join(tarPath,filename);
    //             console.log('destPath',destPath)
    //             fs.writeFileSync(destPath, fs.readFileSync(filedir));
    //             // fs.copyFile(filedir, destPath, (err) =>  { 
    //             //     if(err) console.log(err)
    //             // })
    //           } else {                                        // 创建文件夹
    //             let tarFiledir = path.join(tarPath,filename);
    //             mkdirs(tarFiledir)
    //             // fs.mkdir(tarFiledir,(err) =>  { 
    //             //     if(err) console.log('------',err)
    //             // });
    //             copyFile(filedir, tarFiledir, filter)                 // 递归
    //           }
    //         })
    //       }
    //     })
    // //   } else {
    // //     if (err) console.error(err);
    // //   }
    // })
  }
  module.exports = copyFile;