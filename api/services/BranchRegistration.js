var schema = new Schema({
      branchName:String,
      branchId:String,
      address:String,
      contactNumber:[Number],
      numberOfEmployee:Number,
      photo:[String],
      hours:[{
        name:String,
        time:[{
          from:String,
          to:String
        }]
      }],
      eastablishmentType:String,
      cuisines:[String],
      collections:{
        type:Boolean,
        default:false
      },
      typeOfAppoinment:{
        type:String,
        enum:["a","b","c"]
      },
      paymentMethods:[String],
      avgCost:Number,
      tags:[String]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('BranchRegistration', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
