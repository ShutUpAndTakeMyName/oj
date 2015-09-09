/**
 * Created by miloas on 2015/9/5.
 */
Template.problem.helpers({
    isLogin: function () {
        return Meteor.user()?true:false;
    }
})