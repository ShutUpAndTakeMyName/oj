/**
 * Created by miloas on 2015/9/5.
 */
Template.problem.helpers({
    isLogin: function () {
        return Meteor.user()?true:false;
    }
})

Template.problem.events({
    'submit form': function (e) {
        e.preventDefault();
        var text = $(e.target).find('[name=submitedCode]').val();
        Meteor.call('saveCode',text,this.pid,this.cpu,this.memory);
    }
})
