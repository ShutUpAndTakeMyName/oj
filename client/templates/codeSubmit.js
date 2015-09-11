/**
 * Created by miloas on 2015/9/11.
 */
Template.codeSubmit.events({
    'click #codeSubmitButton': function (e) {
        e.preventDefault();
        var text = document.getElementById('submitedCode').val();
        confirm(text);
    }
})