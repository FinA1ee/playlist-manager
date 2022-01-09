/*
 * @file: file description
 * @author: your name
 * @Date: 2021-12-26 19:12:21
 * @LastEditors: your name
 * @LastEditTime: 2021-12-26 19:13:22
 */

const net = require('net');

const checkPortAvailable = (port) => {
  const server = net.createServer().listen(port);

  return new Promise((resolve, reject) => {
    server.on('listening', function() {
      // 执行这块代码说明端口未被占用
      server.close(); // 关闭服务
      resolve(port);
    });

    server.on('error', function(err) {
      if (err.code === 'EADDRINUSE') {
        // 端口已经被使用
        console.log('端口【' + port + '】被占用, 检测端口【' + (Number(port) + 1) + '】');
      }
      reject();
    });
  });
}


const getAvailablePort = async (port = 3000) => {
  let PORT = Number(port);

  while (PORT) {
    try {
      await checkPortAvailable(PORT);
      console.log('端口【' + PORT + '】可用');
      return PORT;
    } catch (error) {
      PORT = PORT + 1;
    }
  }
}

module.exports = {
  checkPortAvailable,
  getAvailablePort
}