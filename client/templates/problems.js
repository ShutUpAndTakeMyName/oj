/**
 *
 * Created by miloas on 2015/9/5.
 */
Template.problems.onCreated(function () {
    var template = this;
    template.autorun(function () {
        var currentPage = parseInt(Router.current().params.page) || 1;
        var skipCount = (currentPage - 1) * 100;
        template.subscribe('problems',skipCount,-1);
    });
});

Template.problems.helpers({
    problems:Problems.find({}),
    isDisplay:function(hidden){
        if(!hidden || (Meteor.user()&&Meteor.user().username==='admin'))return true;
        return false;
    },
    problemsPages: function () {
        var cc = Counts.get('problemsCount');
        var len = cc/100;
        var ret = [];
        for(var i = 1; i <= len+1; ++i){
           ret[i]={
               idx:i
           };
        }
        return ret;
    }
});