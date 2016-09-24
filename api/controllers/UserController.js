module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

  getHouseHold:function(req,res){
    if(req.body){
      User.getHouseHold(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  getOneHouseHold:function(req,res){
    if(req.body){
      User.getOneHouseHold(req.body,res.callback);
    }
    else {
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  savehouseHold:function(req,res){
    if(req.body){
      User.savehouseHold(req.body,res.callback);
    }
    else{
      res.json({value:false,data:{message:"Invalid Request"}})
    }
  },
  deleteHouseHold: function(req, res) {
if (req.body) {
if (req.body._id && req.body._id !== "") {
//	console.log("not valid");
User.deleteHouseHold(req.body, function(err, respo) {
if (err) {
res.json({
value: false,
data: err
});
} else {
res.json({
value: true,
data: respo
});
}
});
} else {
res.json({
value: false,
data: "Invalid Id"
});
}
} else {
res.json({
value: false,
data: "Invalid call"
});
}
}
};
module.exports = _.assign(module.exports, controller);
