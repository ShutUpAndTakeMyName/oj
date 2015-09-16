/**
 * Created by miloas on 2015/9/3.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/problems/:page?',{
    name: 'problems'
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

Router.route('/status/:page?',{
    name: 'status'
});

Router.onBeforeAction(function(){
    if(!Meteor.user() || Meteor.user().username !== 'admin'){
        this.render('problems');
    } else {
        this.next();
    }
},{
    only:['problemSubmit','problemEdit']
});

