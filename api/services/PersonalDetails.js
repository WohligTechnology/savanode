var schema = new Schema({
  image:{
    type:String
  },
    title:{
      type:String,
    enum:["Mr","Mrs","Ms"]
    },
    firstName :{
      type:String
    },
    lastName :{
      type:String
    },
    dob:{
      type:Date
    },
    
    address_address1:String,
    address_address2:String,
    address_town:String,
    address_city:String,
    address_pincode:Number,
    address_country:String,
    address_lat:String,
    address_lng:String,

    securityQuestion:{
      question:{
        type:String,
        enum:["A","B","C","D","E","F","G"]
      },
      answer:{
        type:String
      }
    },
    buisnessName:{
      type:String,
      unique:true
    },
    buisnessAddress:{
      type:String
    },
    mobile:{
      type:String,
      unique:true
    },
    buisnessType:{
      type: Schema.Types.ObjectId,
      ref:"Categories"
    },
    registrationAuthority:{
      type:String
    },
    vatRegistrationNumber:{
      type:String
    },
    numberOfBranches:{
      type:Number
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('PersonalDetails', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
