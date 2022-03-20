const User = require("../model/user");
const Input = require("../model/RequestInput");

const UssdController = async (req, res) => {
  let { phoneNumber, text, sessionId, serviceCode } = req.body;
  let response;

  const userExist = await User.findOne({ phoneNumber });

  if (text.split("*").includes("00")) {
    console.log("setting text to empty");
    text = "";
  }
  console.log(text);
  // if (text.split("*").includes("0") && text.length <= 3) {
  //   text = "";
  // } else if (text.split("*").includes("0")) {
  //   let back = text.substring(0, text.length - 4);
  //   text = back;
  // }

  if (text === "1*4*2*1*1*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 5,
    });
    response = `CON you fertilizer is on it way, you will get it in 72 hours
      00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*3*2") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 10,
    });
    response = `CON your 10kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 15,
    });
    response = `CON your 25kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 50,
    });
    response = `CON your 50kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*1*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "NPK",
      quantity: 100,
    });
    response = `CON your 100kg of NPK is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 5,
    });
    response = `CON your 5kg UREA is on it way, you will get it in 72 hours
      00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 10,
    });
    response = `CON your 10kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 15,
    });
    response = `CON your 25kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 50,
    });
    response = `CON your 50kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*2*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "UREA",
      quantity: 100,
    }).then((res) => console.log(res));
    response = `CON your 100kg of UREA is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*1*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 5,
    }).then((res) => console.log(res));
    response = `CON your 5kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 10,
    }).then((res) => console.log(res));
    response = `CON your 10kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 15,
    }).then((res) => console.log(res));
    response = `CON your 15kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 50,
    }).then((res) => console.log(res));
    response = `CON your 50kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*2*3*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Calcium",
      quantity: 100,
    }).then((res) => console.log(res));
    response = `CON your 100kg of Calcium is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*1*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 25,
    }).then((res) => console.log(res));
    response = `CON your 25kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*2*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 50,
    }).then((res) => console.log(res));
    response = `CON your 50kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*3*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 100,
    }).then((res) => console.log(res));
    response = `CON your 100kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*4*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 150,
    }).then((res) => console.log(res));
    response = `CON your 150kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*5*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 200,
    }).then((res) => console.log(res));
    response = `CON your 200kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  } else if (text === "1*4*1*1*6*1") {
    await Input.create({
      phoneNumber: phoneNumber,
      input: "Compost",
      quantity: 250,
    }).then((res) => console.log(res));
    response = `CON your 250kg of Compost is on it way, you will get it in 72hours
    00. Home
    `;
    res.send(response);
  }

  // case "1*4*1*1*1":
  //   response = `CON You're ordering for 25kg of Compost
  //     1. Yes
  //     2. No
  //     0. Back
  //     `;
  //   res.send(response);
  //   break;

  if (userExist) {
    switch (text) {
      case "":
        response = `CON Welcome to the Agribarter Portal
            Please select an option
    
            1. Request inputs
            2. Report harvest
            3. Support
            4. Sell produce
            9, Exit
    
            `;
        res.send(response);
        break;

      case "1":
        response = `CON Please select input
              1. Seeds
              2. Herbicide
              3. Pesticide
              4. Fertilizer
              0. Back
              00. Main menu
              `;
        res.send(response);
        break;

      case "2":
        response = `END you Choose report harvest`;
        res.send(response);
        break;
      case "3":
        response = `END  you selected Support`;
        res.send(response);
        break;
      case "4":
        response = "END  selected Sell product";
        res.send(response);
        break;
      case "9":
        response = "END Have a nice day from Agribarter ";
        res.send(response);
        break;
      case "1*1":
        response = `CON Please select input.
              1. beans seed
              2. cool seed
              3. whatever seed
              4. kohol seed
              0. Back
              00. Main menu
            `;
        res.send(response);
        break;
      case "1*2":
        response = "END you selected Herbicide";
        res.send(response);
        break;
      case "1*3":
        response = "END you selected Pesticide";
        res.send(response);
        break;
      case "1*4":
        response = `CON Select fertilizer.
              1. Organic
              2. Inorganic
              0. Back
              00. Home
             `;
        res.send(response);
        break;
      case "1*0":
        response = "END bye from Agribarter";
        res.send(response);
        break;
      case "1.6":
        response = "CON thank you from Agribarter";
        res.send(response);
        break;

      case "1*4*1":
        response = `CON Select an Organic Manure.
        1. Compost
        `;
        res.send(response);
        break;

      case "1*4*1*1":
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
        break;

      case "1*4*1*1*1":
        response = `CON You're ordering for 25kg of Compost
          1. Yes
          2. No
          0. Back
          `;
        res.send(response);
        break;

      case "1*4*1*1*2":
        response = `CON You're ordering for 50kg of Compost
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*1*1*3":
        response = `CON You're ordering for 100kg of Compost
              1. Yes
              2. No
              0. Back
              00. Home

              `;
        res.send(response);
        break;

      case "1*4*1*1*4":
        response = `CON You're ordering for 150kg of Compost
              1. Yes
              2. No
              0. Back
              00. Home

              `;
        res.send(response);
        break;

      case "1*4*1*1*5":
        response = `CON You're ordering for 200kg of Compost
                1. Yes
                2. No
                0. Back
                00. Home
                `;
        res.send(response);
        break;

      case "1*4*1*1*6":
        response = `CON You're ordering for 250kg of Compost
                  1. Yes
                  2. No
                  0. Back
                00. Home

                  `;
        res.send(response);
        break;

      case "1*4*2":
        response = `CON Select the inorganic fertilizer.
              1. NPK
              2. Urea
              3. Calcium
              4. Back
              00. Main menu
            `;
        res.send(response);
        break;

      case "1*4*2*1":
        response = `CON Select the inorganic fertilizer.
          1. 5kg
          2. 10kg
          3. 25kg
          4. 50kg
          5. 100kg
          0. Back
          00. Main menu `;
        res.send(response);
        break;

      case "1*4*2*1*1":
        response = `CON You're ordering for 5kg of NPK
          1. Yes
          2. No
          0. Back
          `;
        res.send(response);
        break;

      case "1*4*2*1*2":
        response = `CON You're ordering for 10kg of NPK
          1. Yes
          2. No
          0. Back
          `;
        res.send(response);
        break;

      case "1*4*2*1*3":
        response = `CON You're ordering for 25kg of NPK
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*1*4":
        response = `CON You're ordering for 50kg of NPK
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*1*5":
        response = `CON You're ordering for 100kg of NPK
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*1*4*2":
        response = `CON Sorry an error occured, try again
              00. Main menu
              `;
        res.send(response);
        break;

      case "1*4*2*1*1*2":
        response = `CON No option selected 
            00. Main menu
            `;
        res.send(response);
        break;

      case "1*4*2*1*1*2":
        response = `CON No option selected 
              00. Main menu
              `;
        res.send(response);
        break;

      case "1*4*2*1*1*2":
        response = `CON No option selected 
                00. Main menu
                `;
        res.send(response);
        break;

      case "1*4*2*1*1*2":
        response = `CON No option selected 
                  00. Main menu
                  `;
        res.send(response);
        break;

      case "1*4*2*5*1*2":
        response = `CON No option selected 
                    00. Main menu
                    `;
        res.send(response);
        break;

      case "1*4*2*2":
        response = `CON Select UREA quantity.
            1. 5kg
            2. 10kg
            3. 25kg
            4. 50kg
            5. 100kg
            0. Back
            00. Main menu `;
        res.send(response);
        break;

      case "1*4*2*2*1":
        response = `CON You're ordering for 5kg of UREA
          1. Yes
          2. No
          0. Back
          `;
        res.send(response);
        break;

      case "1*4*2*2*2":
        response = `CON You're ordering for 10kg of UREA
          1. Yes
          2. No
          0. Back
          `;
        res.send(response);
        break;

      case "1*4*2*2*3":
        response = `CON You're ordering for 25kg of UREA
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*2*4":
        response = `CON You're ordering for 50kg of UREA
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*2*5":
        response = `CON You're ordering for 100kg of UREA
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*2*1*2":
        response = `CON No option selected 
                        00. Main menu
                        `;
        res.send(response);
        break;

      case "1*4*2*2*2*2":
        response = `CON No option selected 
                          00. Main menu
                          `;
        res.send(response);
        break;

      case "1*4*2*2*3*2":
        response = `CON No option selected 
                            00. Main menu
                            `;
        res.send(response);
        break;

      case "1*4*2*2*4*2":
        response = `CON No option selected 
                        00. Main menu
                        `;
        res.send(response);
        break;

      case "1*4*2*2*5*2":
        response = `CON No option selected 
                      00. Main menu
                      `;
        res.send(response);
        break;

      case "1*4*2*3":
        response = `CON Select Calcium quantity.
            1. 5kg
            2. 10kg
            3. 25kg
            4. 50kg
            5. 100kg
            0. Back
            00. Main menu `;
        res.send(response);
        break;

      case "1*4*2*3*1":
        response = `CON You're ordering for 5kg of Calcium
          1. Yes
          2. No
          0. Back
          `;
        res.send(response);
        break;

      case "1*4*2*3*2":
        response = `CON You're ordering for 10kg of Calcium
          1. Yes
          2. No
          0. Back
          `;
        res.send(response);
        break;

      case "1*4*2*3*3":
        response = `CON You're ordering for 25kg of Calcium
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*3*4":
        response = `CON You're ordering for 50kg of Calcium
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*3*5":
        response = `CON You're ordering for 100kg of Calcium
            1. Yes
            2. No
            0. Back
            `;
        res.send(response);
        break;

      case "1*4*2*3*1*2":
        response = `CON No option selected
           00. Main menu
                          `;
        res.send(response);
        break;

      case "1*4*2*3*2*2":
        response = `CON No option selected
             00. Main menu
                            `;
        res.send(response);
        break;

      case "1*4*2*3*3*2":
        response = `CON No option selected
               00. Main menu
                              `;
        res.send(response);
        break;

      case "1*4*2*3*4*2":
        response = `CON No option selected
                 00. Main menu
                                `;
        res.send(response);
        break;

      case "1*4*2*3*5*2":
        response = `CON No option selected
             00. Main menu
                            `;
        res.send(response);
        break;

      case "1*4*1*1*1*2":
        response = `CON No option selected
          00. Main menu
                         `;
        res.send(response);
        break;

      case "1*4*1*1*2*2":
        response = `CON No option selected
            00. Main menu
                           `;
        res.send(response);
        break;

      case "1*4*1*1*3*2":
        response = `CON No option selected
              00. Main menu
                             `;
        res.send(response);
        break;

      case "1*4*1*1*4*2":
        response = `CON No option selected
          00. Main menu
                         `;
        res.send(response);
        break;

      case "1*4*1*1*5*2":
        response = `CON No option selected
          00. Main menu
                         `;
        res.send(response);
        break;

      case "1*4*1*1*6*2":
        response = `CON No option selected
        00. Main menu
                       `;
        res.send(response);
        break;

      default:
        response = "END Network error, Please try again";
      // res.send(response);
    }
  }

  if (!userExist || userExist === null) {
    response = "End sorry you're not a registered customer";
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
