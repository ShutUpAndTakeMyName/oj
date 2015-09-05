/**
 * Created by miloas on 2015/9/3.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/problems',{
    name: 'problems',
});

Router.route('/problems/:_id',{
    name:'problem',
    data:function() { return Problems.findOne(this.params._id); }
});

Router.route("/problems/:_id/edit",{
    name:'problemEdit',
    data:function() { return Problems.findOne(this.params._id); }
})

Router.route('/problemSubmit',{
    name: 'problemSubmit'
});

var requireLogin = function () {
   if(!Meteor.user()){

   }
}