const User = require("../models/usersSchema");
const parsedAndCreate = require("../parser")

const create = async (req, res) => {
  try {
    //req.body = candidate;
      candidate = await parsedAndCreate();
      //console.log(candidate)
        const { PersonalId, Email, LinkedinUrl, Phone} = candidate;
      const user = await new User({
        personalId: PersonalId, 
        email: Email,
        linkedinUrl: LinkedinUrl,
        phone: Phone,
        timestamp: new Date()
    }).save();
    res.status(201).json(user); 
    console.log("User saved successfully");
  } catch (err) {
      console.error(err);
      res.status(500).send("Server error in creating A candidate")
  };
};

module.exports = create;



