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
        var inputFileObj = Files.findOne({fileType:"inputFile",pid:this.pid});
        var inputFileName = 'files-' + inputFileObj._id + '-' + inputFileObj.name();
        var outputFileObj = Files.findOne({fileType:"outputFile",pid:this.pid});
        var outputFileName = 'files-' + outputFileObj._id + '-' + outputFileObj.name();
        Meteor.call('saveCode',text,this.pid,this.cpu,this.memory,inputFileName,outputFileName);
    }
})
