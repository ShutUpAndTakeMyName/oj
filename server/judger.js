/**
 *
 * Created by miloas on 2015/9/8.
 */

exec = Npm.require('child_process').exec;

Meteor.methods({
    judge: function(cmd){
        exec(cmd, function (error,stdout,stderr) {
		    var jsonResult = JSON.parse(stdout);
		    console.log(jsonResult['testcases']);
            var compilationInfo = jsonResult['compilation']['log'];
            var compilationRet = jsonResult['compilation']['success'];
		    //console.log(stdout);
        })
    }
})
