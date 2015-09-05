/**
 * Created by miloas on 2015/9/5.
 */
Template.problemEdit.events({
    'submit form': function (e) {
        e.preventDefault();
        var newProblem = {
            title:$(e.target).find('[name=title]').val(),
            cpu:$(e.target).find('[name=cpu]').val(),
            memory:$(e.target).find('[name=memory]').val(),
            description:$(e.target).find('[name=description]').val(),
            inputspec:$(e.target).find('[name=inputspec]').val(),
            outputspec:$(e.target).find('[name=outputspec]').val(),
            sampleinput:$(e.target).find('[name=sampleinput]').val(),
            sampleoutput:$(e.target).find('[name=sampleoutput]').val(),
            pid:this.pid,
            submitnum:this.submitnum,
            acnum:this.acnum,
            hidden:document.getElementById('hidden').checked
        };
        Problems.update(this._id,{$set: newProblem}, function (error) {
            if(error){
                alert(error.reason);
            }else {
                Router.go('problems');
            }
        })
    },
    'click .negative': function (e) {
        e.preventDefault();
        if(confirm("Delete this problem?")){
            Problems.remove(this._id);
            Router.go('problems');
        }
    }
})