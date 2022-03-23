const User = require("../model/user");
const Input = require("../model/RequestInput");

const UssdController = async (req, res) => {
  let { phoneNumber, text, sessionId, serviceCode } = req.body;
  let response;

  const userExist = await User.findOne({ phoneNumber });
  const { _id: user } = userExist;
  // console.log(user);

  // console.log(text);
  // // console.log(text.length);

  // if (text.split("*").includes("00")) {
  //   text = "";
  // }

  // if (text.split("*").includes("0")) {
  //   text = text.substring(0, text.length - 4);
  //   console.log(text.substring(0, text.length - 4), "afer back one staep");
  //   if (text.length <= 3 && text.split("*").includes("0")) {
  //     text = "";
  //   }
  // }

  // console.log(text.split("*"));
  console.log(text);

  if (text === "") {
    response = `CON Welcome to the Agribarter Portal
          Please select an option
  
          1. Request inputs
          2. Report harvest
          3. Support
          4. Sell produce
          9. Exit
  
          `;
    res.send(response);
  } else if (text === "1") {
    response = `CON Please select input
          1. Seeds
          2. Herbicide
          3. Pesticide
          4. Fertilizer

          00. Main menu
          `;
    res.send(response);
  } else if (text === "2") {
    response = `END You Choose report harvest`;
    res.send(response);
  } else if (text === "3") {
    response = `END  You selected Support`;
    res.send(response);
  } else if (text === "4") {
    response = "END  Selected Sell product";
    res.send(response);
  } else if (text === "9") {
    response = "END Have a nice day from Agribarter ";
    res.send(response);
  } else if (text === "1*1") {
    response = `CON Please select input.
          1. Beans seed
          2. cool seed
          3. whatever seed
          4. kohol seed
          0. Back
          00. Main menu
        `;
    res.send(response);
  } else if (text === "1*2") {
    response = "END You selected Herbicide";
    res.send(response);
  } else if (text === "1*3") {
    response = "END You selected Pesticide";
    res.send(response);
  } else if (text === "1*4") {
    response = `CON Select fertilizer.
          1. Organic
          2. Inorganic
          0. Back
          00. Home
         `;
    res.send(response);
  } else if (text === "1*0") {
    response = "END Bye from Agribarter";
    res.send(response);
  } else if (text === "1*6") {
    response = "CON Thank you from Agribarter";
    res.send(response);
  } else if (text === "1*4*1") {
    response = `CON Select an Organic Manure.
        1. Compost
        `;
    res.send(response);
  } else if (text === "1*4*1*1") {
    response = `CON Select compost quantity.
           1. 25kg
           2. 50kg
           3. 100kg
           4. 150kg
           5. 200kg
           6. 250kg
           0. Back
           00. Home
           `;
    res.send(response);
  } else if (text === "1*4*1*1*1") {
    response = `CON You're ordering for 25kg of Compost
            1. Yes
            2. No
            0. Back
            `;
    res.send(response);
  } else if (text === "1*4*1*1*2") {
    response = `CON You're ordering for 50kg of Compost
            1. Yes
            2. No
            0. Back
            `;
    res.send(response);
  } else if (text === "1*4*1*1*3") {
    response = `CON You're ordering for 100kg of Compost
              1. Yes
              2. No
              0. Back
              00. Home
              `;
    res.send(response);
  } else if (text === "1*4*1*1*3") {
    response = `CON You're ordering for 100kg of Compost
              1. Yes
              2. No
              0. Back
              00. Home
              `;
    res.send(response);
  } else if (text === "1*4*1*1*4") {
    response = `CON You're ordering for 150kg of Compost
                1. Yes
                2. No
                0. Back
                00. Home
                `;
    res.send(response);
  } else if (text === "1*4*1*1*5") {
    response = `CON You're ordering for 200kg of Compost
                1. Yes
                2. No
                0. Back
                00. Home
                `;
    res.send(response);
  } else if (text === "1*4*1*1*6") {
    response = `CON You're ordering for 250kg of Compost
                  1. Yes
                  2. No
                  0. Back
                00. Home

                  `;
    res.send(response);
  } else if (text === "1*4*2") {
    response = `CON Select the inorganic fertilizer.
              1. NPK
              2. Urea
              3. Calcium
              4. Back
              00. Main menu
            `;
    res.send(response);
  } else if (text === "1*4*2*1") {
    response = `CON Select the inorganic fertilizer.
          1. 5kg
          2. 10kg
          3. 25kg
          4. 50kg
          5. 100kg
          0. Back
          00. Main menu `;
    res.send(response);
  } else if (text === "1*4*2*1*1") {
    response = `CON You're ordering for 5kg of NPK
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*1*2") {
    response = `CON You're ordering for 10kg of NPK
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*3*1*2") {
    response = `CON No option selected
           00. Main menu
                          `;
    res.send(response);
  } else if (text === "1*4*2*3*2*2") {
    response = `CON No option selected
             00. Main menu
                            `;
    res.send(response);
  } else if (text === "1*4*2*3*3*2") {
    response = `CON No option selected
               00. Main menu
                              `;
    res.send(response);
  } else if (text === "1*4*2*3*4*2") {
    response = `CON No option selected
                 00. Main menu
                                `;
    res.send(response);
  } else if (text === "1*4*2*3*5*2") {
    response = `CON No option selected
             00. Main menu
                            `;
    res.send(response);
  } else if (text === "1*4*1*1*1*2") {
    response = `CON No option selected
          00. Main menu
                         `;
    res.send(response);
  } else if (text === "1*4*1*1*2*2") {
    response = `CON No option selected
            00. Main menu
                           `;
    res.send(response);
  } else if (text === "1*4*1*1*3*2") {
    response = `CON No option selected
              00. Main menu
                             `;
    res.send(response);
  } else if (text === "1*4*1*1*4*2") {
    response = `CON No option selected
          00. Main menu
                         `;
    res.send(response);
  } else if (text === "1*4*1*1*5*2") {
    response = `CON No option selected
          00. Main menu
                         `;
    res.send(response);
  } else if (text === "1*4*1*1*6*2") {
    response = `CON No option selected
        00. Main menu
                       `;
    res.send(response);
  } else if (text === "1*4*2*1*3") {
    response = `CON You're ordering for 25kg of NPK
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*1*4") {
    response = `CON You're ordering for 50kg of NPK
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*1*5") {
    response = `CON You're ordering for 100kg of NPK
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*1*4*2") {
    response = `CON Sorry an error occured, try again
            00. Main menu
            `;
    res.send(response);
  } else if (text === "1*4*2*1*1*2 ") {
    response = `CON No option selected 
          00. Main menu
          `;
    res.send(response);
  } else if (text === "1*4*2*1*1*2") {
    response = `CON No option selected 
            00. Main menu
            `;
    res.send(response);
  } else if (text === "1*4*2*1*1*2") {
    response = `CON No option selected 
              00. Main menu
              `;
    res.send(response);
  } else if (text === "1*4*2*1*1*2") {
    response = `CON No option selected 
                00. Main menu
                `;
    res.send(response);
  } else if (text === "1*4*2*5*1*2") {
    response = `CON No option selected 
                  00. Main menu
                  `;
    res.send(response);
  } else if (text === "1*4*2*2") {
    response = `CON Select UREA quantity.
          1. 5kg
          2. 10kg
          3. 25kg
          4. 50kg
          5. 100kg
          0. Back
          00. Main menu `;
    res.send(response);
  } else if (text === "1*4*2*2*1") {
    response = `CON You're ordering for 5kg of UREA
        1. Yes
        2. No
        0. Back
        `;
    res.send(response);
  } else if (text === "1*4*2*2*2") {
    response = `CON You're ordering for 10kg of UREA
        1. Yes
        2. No
        0. Back
        `;
    res.send(response);
  } else if (text === "1*4*2*2*3") {
    response = `CON You're ordering for 25kg of UREA
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*2*4") {
    response = `CON You're ordering for 50kg of UREA
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*2*5") {
    response = `CON You're ordering for 100kg of UREA
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*2*1*2") {
    response = `CON No option selected 
                      00. Main menu
                      `;
    res.send(response);
  } else if (text === "1*4*2*2*2*2") {
    response = `CON No option selected 
                        00. Main menu
                        `;
    res.send(response);
  } else if (text === "1*4*2*2*3*2") {
    response = `CON No option selected 
                          00. Main menu
                          `;
    res.send(response);
  } else if (text === "1*4*2*2*4*2") {
    response = `CON No option selected 
                      00. Main menu
                      `;
    res.send(response);
  } else if (text === "1*4*2*2*5*2") {
    response = `CON No option selected 
                    00. Main menu
                    `;
    res.send(response);
  } else if (text === "1*4*2*3") {
    response = `CON Select Calcium quantity.
          1. 5kg
          2. 10kg
          3. 25kg
          4. 50kg
          5. 100kg
          0. Back
          00. Main menu `;
    res.send(response);
  } else if (text === "1*4*2*3*1") {
    response = `CON You're ordering for 5kg of Calcium
        1. Yes
        2. No
        0. Back
        `;
    res.send(response);
  } else if (text === "1*4*2*3*2") {
    response = `CON You're ordering for 10kg of Calcium
        1. Yes
        2. No
        0. Back
        `;
    res.send(response);
  } else if (text === "1*4*2*3*3") {
    response = `CON You're ordering for 25kg of Calcium
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*3*4") {
    response = `CON You're ordering for 50kg of Calcium
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*3*5") {
    response = `CON You're ordering for 100kg of Calcium
          1. Yes
          2. No
          0. Back
          `;
    res.send(response);
  } else if (text === "1*4*2*1*1*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 5,
      farmerId: user,
    });
    response = `CON Your fertilizer is on it way, you will get it in 72 hours
      00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*3*2") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 10,
      userId: user,
    });
    response = `CON Your 10kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 15,
      farmerId: user,
    });
    response = `CON Your 25kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 50,
      farmerId: user,
    });
    response = `CON Your 50kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 100,
      farmerId: user,
    });
    response = `CON Your 100kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 5,
      farmerId: user,
    });
    response = `CON Your 5kg UREA is on it way, you will get it in 72 hours
      00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 10,
      farmerId: user,
    });
    response = `CON Your 10kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 15,
      farmerId: user,
    });
    response = `CON Your 25kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 50,
      farmerId: user,
    });
    response = `CON Your 50kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 100,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 100kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*1*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 5,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 5kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 10,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 10kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 15,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 15kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 50,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 50kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 100,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 100kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*1*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 25,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 25kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 50,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 50kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 100,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 100kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 150,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 150kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 200,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 200kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*6*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 250,
      farmerId: user,
    }).then((res) => console.log(res));
    response = `CON Your 250kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else {
    response = "END Network error, Please try again";
    res.send(response);
  }
};

const getAllInput = async (req, res) => {
  try {
    const get = await Input.find();
    res.json(get);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { UssdController, getAllInput };
