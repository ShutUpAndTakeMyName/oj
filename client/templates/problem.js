/**
 * Created by miloas on 2015/9/5.
 */

Template.problem.onCreated(function () {
    var template = this;
    template.autorun(function () {
        template.subscribe('problems',1,Router.current().params._id);
    });
});

Template.problem.helpers({
    isLogin: function () {
        return Meteor.user()?true:false;
    }
})

Date.prototype.format = function(format) //author: meizz
{
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(),    //day
        "h+" : this.getHours(),   //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length==1 ? o[k] :
                ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

Template.problem.events({
    'submit form': function (e) {
        e.preventDefault();
        var text = $(e.target).find('[name=submitedCode]').val();
        var inputFileObj = Files.findOne({fileType:"inputFile",pid:this.pid});
        var inputFileName = 'files-' + inputFileObj._id + '-' + inputFileObj.name();
        var outputFileObj = Files.findOne({fileType:"outputFile",pid:this.pid});
        var outputFileName = 'files-' + outputFileObj._id + '-' + outputFileObj.name();
        var currentTime = new Date().format("yyyy-MM-dd hh:mm:ss");
        var statuId = Status.insert({
            author:Meteor.user().username,
            submitTime:currentTime,
            proId:this.pid,
            cpu:'-',
            memory:'-',
            lang:'-',
            statu:'-',
            owner:this.owner
        });
        console.log(statuId);
        Meteor.call('saveCode',text,this.pid,this.cpu,this.memory,inputFileName,outputFileName,statuId);
    }
})
