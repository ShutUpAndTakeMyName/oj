/**
 *
 * Created by miloas on 2015/9/5.
 */
Meteor.subscribe('problems');
Template.problems.helpers({
    problems:Problems.find({}),
    isAdmin:function(){
        if(Meteor.user()&&Meteor.user().username=='admin')return true;
        else return false;
    }
});