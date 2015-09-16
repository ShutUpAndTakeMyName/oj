/**
 * Created by miloas on 2015/9/5.
 */
Meteor.publish('problems',function(skipCount){
    var positiveIntegerCheck = Match.Where(function(x){
        check(x,Match.Integer);
        return x>=0;
    });
    check(skipCount,positiveIntegerCheck);
    Counts.publish(this,'problemsCount',Problems.find(),{
        noReady: true
    });
    return Problems.find({},{
        limit: 100,
        skip: skipCount
    });
});

Meteor.publish('files', function () {
   return Files.find();
});

Meteor.publish('userinfo', function () {
    return UserInfo.find();
});

Meteor.publish('status', function (skipCount,statusType) {
    var positiveIntegerCheck = Match.Where(function(x){
        check(x,Match.Integer);
        return x>=0;
    });
    check(skipCount,positiveIntegerCheck);
    Counts.publish(this,'statusCount',Status.find(),{
        noReady: true
    });
    return Status.find({owner:statusType},{
        limit: 20,
        skip: skipCount
    });
});