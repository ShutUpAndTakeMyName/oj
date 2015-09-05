/**
 * Created by miloas on 2015/9/3.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/problems',{name: 'problems'});
/*
Router.route("/problems/:_id",{
    name:"problem",
    data:function() { return Problems.findOne(this.params._id); }
});
*/
Router.route('/problems/1000',{
    name:'problem'
});

Router.route('/problemSubmit',{
    name: 'problemSubmit'
});