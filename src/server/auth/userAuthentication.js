/*
 * @file: file description
 * @author: your name
 * @Date: 2022-01-09 16:29:57
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 19:39:34
 */

// function login(email, password, callback) {
//   const bcrypt = require('bcrypt');
//   const MongoClient = require('mongodb@3.1.4').MongoClient;
//   const client = new MongoClient('mongodb://user:configuration.MONGO_PASSWORD@localhost');

//   client.connect(function (err) {
//     if (err) return callback(err);

//     const db = client.db('playlist_manager');
//     const users = db.collection('users');

//     users.findOne({ email: email }, function (err, user) {
//       if (err || !user) {
//         client.close();
//         return callback(err || new WrongUsernameOrPasswordError(email));
//       }

//       bcrypt.compare(password, user.password, function (err, isValid) {
//         client.close();

//         if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

//         return callback(null, {
//             user_id: user._id.toString(),
//             nickname: user.nickname,
//             email: user.email
//           });
//       });
//     });
//   });
// }



