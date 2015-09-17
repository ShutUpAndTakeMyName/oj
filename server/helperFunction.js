/**
 *
 * Created by miloas on 2015/9/12.
 */
var fs = Npm.require('fs');
var exec = Npm.require('child_process').exec;

Meteor.methods({
    saveCode: function (submitedCode,owner,cpu,memory,inputFileName,outputFileName,statuId) {
        var currentUser = Meteor.user();
        var currentUserInfo = UserInfo.findOne({username:currentUser.username});
        if (currentUserInfo === undefined){
            UserInfo.insert({
                username:currentUser.username,
                solved:[]
            })
        }
        var randomCodeName = Random.id(6) + '.cc';
        fs.writeFile('D:\\'+randomCodeName,submitedCode,function(err){
            var testCasesPath = '~/testCases/';
            var cmdHead = 'ljudge';
            var cpuOption = '--max-cpu-time ' + cpu;
            var memOption = '--max-memory ' + memory + 'm';
            var codeOption = '--user-code ' + '~/submitedCode/' + randomCodeName;
            var inputOption = ' --testcase --input ' + testCasesPath+ inputFileName;
            var outputOption = '--output ' + testCasesPath + outputFileName;
            var cmd = [cmdHead,cpuOption,memOption,codeOption,inputOption,outputOption].join(' ');
            console.log(statuId);
            console.log(cmd);
            //Meteor.call('judge',cmd,statuId);
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
            })

       })
    }
})