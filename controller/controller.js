// const { response } = require("express");
// const USER = require("../model/user");

// const sendUssd = async (req, res) => {
//   const { sessionId, text, phoneNumber } = req.body;
//   let response;

//   if (text === "") {
//     console.log("1");
//     response = "CON Enter your first name";
//   }

//   if (text !== "") {
//     let array = text.split("*");
//     if (array.length === 1) {
//       response = "CON Enter your id number";
//     } else if (array.length === 2) {
//       //id number
//       if (parseInt(array[1]) > 0) {
//         response =
//           "CON Please comfirm is if you want to save the data. \n1.  Confirm \n2.  Cancel \n3  View all users";
//         if (parseInt(array[2]) === 1) {
//           let data = new USER();

//           data.fullname = array[0];
//           data.phoneNumber = array[1];
//           data.save(() => {
//             response = "END your data was saved successfully";
//           });
//         } else if (parseInt(array[2]) === 2) {
//           response = "END, Sorry, Data was not saved";
//         } else if (parseInt(array[2] === 3)) {
//           response = "CON view all user";
//           USER.find((err, users) => {
//             let users_data = `${
//               users.length > 0
//                 ? `No data found`
//                 : `${users.map((item) => {
//                     `${index + 1}. ${item.fullname}`;
//                   })}`
//             }`;

//             response = `END current users.\n ${users_data.fullname}`;
//           });
//         } else {
//           response = "END  Network error , Please try again";
//         }
//       } else {
//         response = "END Network error, Please try again";
//       }
//     } else {
//       response = "END Network error, Please try again ";
//     }
//   }

//   setTimeout(() => {
//     res.send(response);
//     res.end();
//   }, 2000);
// };

// module.exports = sendUssd;
