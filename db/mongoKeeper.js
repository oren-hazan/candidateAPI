const CreateAction = require("./usersAction");


const user_keeper=async (personalId, email, linkedinUrl, phone)=>{

  const action = await CreateAction.create({personalId, email, linkedinUrl, phone});
  return action;
  
};

const get_all_candidates = async () => {

  const actions=await CreateAction.find({});
  return actions

}

module.exports={
  user_keeper,
  get_all_candidates
}