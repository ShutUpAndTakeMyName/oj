/**
 *
 * Created by miloas on 2015/9/14.
 */
Template.status.onCreated(function () {
    var template = this;
    var statusType = '-'; //normal status
    template.autorun(function () {
        var currentPage = parseInt(Router.current().params.page) || 1;
        var skipCount = (currentPage - 1) * 20;
        template.subscribe('problems',skipCount,statusType);
    });
});

Template.status.helpers({
    judgeRet: function () {
       return Status.find({owner:'-'},{sort:{date_created: -1}});
    },
    prevPage: function () {
        var previousPage = currentPage() === 1 ? 1 : currentPage() - 1;
        return Router.routes.status.path({page: previousPage});
    },
    nextPage: function() {
        var nextPage = hasMorePages() ? currentPage() + 1 : currentPage();
        return Router.routes.status.path({page: nextPage});
    },
    prevPageClass: function() {
        return currentPage() <= 1 ? "disabled" : "";
    },
    nextPageClass: function() {
        return hasMorePages() ? "" : "disabled";
    }
});

var hasMorePages = function () {
    var totalStatus = Counts.get('statusCount');
    return currentPage() * 20 < totalStatus;
}

var currentPage = function() {
    return parseInt(Router.current().params.page) || 1;
}