/**
 *
 * Created by miloas on 2015/9/8.
 */

exec = Npm.require('child_process').exec;

Meteor.methods({
    judge: function(){
        exec("ls", function (error,stdout,stderr) {
            console.log('stdout: '+ stdout);
            console.log('stderr: '+ stderr);
            console.log('里其余');
        })
    }
})
