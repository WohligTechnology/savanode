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
  }
};
module.exports = _.assign(module.exports, controller);
