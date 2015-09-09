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
        //Meteor.call('judge');
        if(confirm("Delete this problem?")){
            Problems.remove(this._id);
            Router.go('problems');
        }
    },
    'change .inputFiles': function(e) {
        var files = e.target.files;
        var problemTitle = document.getElementsByName('title')[0].value;
        var inputFileName = Problems.findOne({title:problemTitle}).pid;
        for (var i= 0,ln=files.length;i<ln;++i){
            var newFile = new FS.File(files[i]);
            newFile.fileType = "inputFile";
            Files.insert(newFile, function (err,fileObj) {
                fileObj.name(inputFileName+'.in');
            });
        }
    },
    'click .removeInputFile': function (e) {
        if(confirm("Delete this file?")){
            var f = Files.findOne(this._id).remove();
        }

    },
    'change .outputFiles': function(e) {
        var files = e.target.files;
        var problemTitle = document.getElementsByName('title')[0].value;
        var outputFileName = Problems.findOne({title:problemTitle}).pid;
        for (var i= 0,ln=files.length;i<ln;++i){
            var newFile = new FS.File(files[i]);
            newFile.fileType = "outputFile"
            Files.insert(newFile, function (err,fileObj) {
                fileObj.name(outputFileName+'.out');
            });
        }
    },
    'click .removeOutputFile': function (e) {
        if(confirm("Delete this file?")){
            var f = Files.findOne(this._id).remove();
        }
    }
});