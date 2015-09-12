/**
 * Created by miloas on 2015/9/7.
 */
Meteor.subscribe('files')
Template.inputFileList.helpers({
    files:function(){
        return Files.find({fileType:"inputFile",pid:this.owner});
    }
});