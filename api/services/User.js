var schema = new Schema({
  //  ************Login Details*************
  name:{
    type:String,
    validate:validators.isAlpha()
  },
  email:{
    type:String,
    validate:validators.isEmail()
  },
  mobile:{
    type:String,
    validate:validators.isLength(8,14)
  },
  password:{
    type:String
  },


  image:{
    type:String
  },
  gender:{
    type:String,
    enum:["Male","Female","Other"]
  },
  dob:{
    type:Date
  },

// ****************   Address  *********************

  address:{
    address1:{
      type:String
    },
    address2:{
      type:String
    },
    countytown:{
      type:String
    },
    city:{
      type:String
    },
    pin:{
      type:Number
    },
    country:{
      type:String
    }
  },

// ****************   About You  *********************
  aboutYou:{
    dietaryNeeds:[
      {
        type:String
      }
    ],
    houseHold:[
      {
      name:{
        type:String
      },
       age:{
         type:Number,
         validate:validators.isNumeric()
       }
    }],
    annualIncome:{
      type:String
    }
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('User', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
