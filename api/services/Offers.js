var schema = new Schema({
  offerType:String,
  loyaltyProgramName:String,
  pointsOrStampsToGive:String,
  basis:[String],
  forEvery:Number,
  minBillAmount:String,
  promoImage:String,
  addHeadlines:String,
  total:Number,
  real:Number,
  minSpendOf:Number,
  startFrom:{
    date:Date,
    time:Date
  },
  endTo:{
    date:Date,
    time:Date
  },
  isRedemptionOffer:{
    type:String,
    enum:["Yes","No"]
  },
  costInPoints:{
    type:Number
  },
  canBeUsed:Number,
  validOn:{
    type:String,
    enum:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],
  },
  targetAudiance:{
    location:String,
    age:{
      greaterThen:Number,
      lowerlimit:Number,
      upperlimit:Number
    },
    minBalance:Number,
    lastActivity:Date,
    sex:{
      type:String,
      enum:["male","female"]
    },
    lifeTimePoints:Number,
    birthday:{
      from:Date,
      to:Date
    },
    anniversary:[Date],
    childrenAgeRange:{
      from:Number,
      to:Number
    },
    nationality:String,
    mostVisitedBranch:String,
    visitIn3Month:Number,
    city:String
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Offers', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
