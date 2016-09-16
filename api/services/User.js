var schema = new Schema({
  //  ************Login Details*************
  name:String,
  email:{
    type:String,
    validate:validators.isEmail(),
    unique:true
  },
  mobile:{
    type:String,
    validate:validators.isLength(8,14)
  },
  password:String,
  image:String,
  gender:{
    type:String,
    enum:["Male","Female","Other"]
  },
  dob:Date,

// ****************   Address  *********************

    address_address1:String,
    address_address2:String,
    address_town:String,
    address_city:String,
    address_pincode:Number,
    address_country:String,
    address_lat:String,
    address_lng:String,


// ****************   About You  *********************

    dietaryNeeds:[String],
    houseHold:[
      {
      name:String,
       age:{
         type:Number,
         validate:validators.isNumeric()
       }
    }],
    annualIncome:String,
    facebookID:String,
    googleID:String,
    otp:String,

    favorites:[{
      BranchRegistration_id:{
        type: Schema.Types.ObjectId,
      ref: 'BranchRegistration',
      index: true
    }
  }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('User', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
getHouseHold:function(data,callback){
    User.findOne({
    _id:data._id
  }).exec(function(err, found){
    if(err){
      console.log(err);
      callback(err, null);
    }else {
      callback(null,found.houseHold);
    }
  })
},

getOneHouseHold: function(data, callback){
  User.aggregate([{
    $match:{_id:data._id
    }
    }]).exec(function(err, found){
    if(err){
      console.log(err);
      callback(err, null);
    }else {
callback(null, found);
  }});
}

};
module.exports = _.assign(module.exports, exports, model);
