/**
 * Created by miloas on 2015/9/5.
 */
Meteor.publish('problems',function(){
    return Problems.find();
});