/**
 * Created by miloas on 2015/9/8.
 */
Template.outputFileList.helpers({
    files:function(){
        return Files.find({fileType:"outputFile",pid:this.owner});
    }
});