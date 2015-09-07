/**
 * Created by miloas on 2015/9/5.
 */
Template.problemSubmit.events({
    'submit form': function(e){
        e.preventDefault();
        var problem = {
            title:$(e.target).find('[name=title]').val(),
            cpu:$(e.target).find('[name=cpu]').val(),
            memory:$(e.target).find('[name=memory]').val(),
            description:$(e.target).find('[name=description]').val(),
            inputspec:$(e.target).find('[name=inputspec]').val(),
            outputspec:$(e.target).find('[name=outputspec]').val(),
            sampleinput:$(e.target).find('[name=sampleinput]').val(),
            sampleoutput:$(e.target).find('[name=sampleoutput]').val(),
            pid:Problems.find({}).count()+1000,
            submitnum:0,
            acnum:0,
            hidden:false
        };
        problem._id = Problems.insert(problem);
        Router.go('problems');
    }
})