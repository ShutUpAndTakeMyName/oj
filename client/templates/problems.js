/**
 *
 * Created by miloas on 2015/9/5.
 */
Meteor.subscribe('problems');
Template.problems.helpers({
    problems:Problems.find({}),
    isDisplay:function(hidden){
        if(!hidden || (Meteor.user()&&Meteor.user().username==='admin'))return true;
        return false;
    }
});