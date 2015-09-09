/**
 * Created by miloas on 2015/9/10.
 */
Template.layout.helpers({
    isAdmin:function(){
        if(Meteor.user()&&Meteor.user().username === 'admin')return true;
        return false;
    }
})