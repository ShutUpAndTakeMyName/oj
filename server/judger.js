/**
 *
 * Created by miloas on 2015/9/8.
 */

exec = Npm.require('child_process').exec;

Meteor.methods({
    judge: function(cmd,statuId){
        exec(cmd, function (error,stdout,stderr) {
		    var jsonResult = JSON.parse(stdout);
		    console.log(jsonResult['testcases']);
            var compilationInfo = jsonResult['compilation']['log'];
            var compilationRet = jsonResult['compilation']['success'];
            if(compilationRet === false) {
                Status.update({_id:statuId},{$set:{statu:"Compile Error"}});
            }else{
                var timeUsed = jsonResult['testcases']['time'];
                var judgeRet = jsonResult['testcases']['result'];
                Status.update({_id:statuId},{$set:{statu:judgeRet,cpu:timeUsed}});
            }
		    //console.log(stdout);
        })
    }
})
