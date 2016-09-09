var schema = new Schema({
  programmeName:String,
  buisnessProgramme:String,
  toIssue:{
    type:String,
    enum:["Points","Stamps"]
  },
  conversionRate:{
    reward:Number,
    currency:String,
    rate:Number
  },
  totalReward:Number,
  offer:[{
    pointsOrStamps:Number
  }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Loyalty', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
