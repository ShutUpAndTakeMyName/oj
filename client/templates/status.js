/**
 *
 * Created by miloas on 2015/9/14.
 */
Meteor.subscribe('status');
Template.status.helpers({
    judgeRet: function () {
       return Status.find({},{sort:{date_created: -1}});
    }
})