var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
  //  ************Login Details*************8
  name:{
    type:String,
    validate:validators.isAlpha()
  },
  email:{
    type:String,
    validate:validators.isEmail()
  },
  mobile:{
    type:Number,
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
      }//,
      // age:{
      //   type:Number,
      //   ref:"User"
      // }
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
