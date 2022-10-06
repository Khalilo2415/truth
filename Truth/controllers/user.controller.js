const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.userInfos = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Id unknown :" + err);
  }).select("-password");
};
//PUT function
module.exports.updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id unknown : " + req.params.id);

  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (error) {
    /* return res.status(500).json({ message: error });*/
  }
};
// delete user fonction
module.exports.deleteUsers = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id unknown : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "sucessfuly deleted" });
  } catch (err) {
    if (err) return res.status(500).send({ message: err });
  }
};
//following function
module.exports.follow = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send("Id of the follower unknown : " + req.params.id);
  if (!ObjectId.isValid(req.body.idToFollow))
    return res
      .status(400)
      .send("Id of the user to follow unknown : " + req.body.idToFollow);

  try {
    //add to the followers list
    await  UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { following: req.body.idToFollow } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).json(err);
      }
    ) || /*add to following list*/ UserModel.findByIdAndUpdate(
      req.body.idToFollow,
      { $addToSet: { followers: req.params.id } },
      { new: true, upsert: true },
      (err, docs) => {
        if (err) return res.status(500).json(docs);
      }
    );
  } catch (err) {
    //if (err) return res.status(500).send({ message: err });
  }
};

//unfollowing function
module.exports.unfollow = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send("Id of the follower unknown : " + req.params.id);
  if (!ObjectId.isValid(req.body.idToUnfollow))
    return res
      .status(400)
      .send("Id of the user to unfollow unknown : " + req.body.idToUnfollow);

  try {
    //delete a follower from list
    await UserModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.idToUnfollow } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).json(err);
      }
    );
    //delete to following list
    await UserModel.findByIdAndUpdate(
      req.body.idToUnfollow,
      { $pull: { followers: req.params.id } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);;
      }
    );
  } catch (err) {
    //if (err) return res.status(500).send({ message: err });
  }
};
