/**
 *
 * Created by miloas on 2015/9/8.
 */

exec = Npm.require('child_process').exec;

Meteor.methods({
    judge: function(){
        exec("ljudge --max-cpu-time 1.0 --max-memory 32m --user-code ~/submitcode/a.c --testcase --input ~/upload/1.in --output ~/upload/1.out", function (error,stdout,stderr) {
		var jsonResult = JSON.parse(stdout);
		console.log(jsonResult['testcases']);
		//console.log(stdout);
        })
    }
})
