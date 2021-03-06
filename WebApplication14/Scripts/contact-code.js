﻿// 18-JUNE-2016
// ANGULAR CODE TO DO A CONTACTUS FORM
// ERIC DELL'ORO


var app = angular.module("ContactApp" , []);

app.service("ContactService", function ($http) {
  
    this.getInfo = function (id) {
        var req = $http.get('/api/ContactUpdates/' + id);
        return req;
};
 
    this.getAppInfo = function () {
        var req = $http.get('/api/ContactUpdates');
        return req;
}
 
    this.postInfo = function (ContactInfo) {

        var req = $http.post('/api/ContactUpdates', ContactInfo);
        return req;
};
 
});

app.controller('ContactController', function ($scope,ContactService) {
   
    //FUNCTION TO RESET SCOPE VARIABLES
    function initialize() {
        $scope.Id = ""; //AUTO INCREMENT
        $scope.ContactName = "";
        $scope.EmailAddress = "";
        $scope.TelephoneNumber = "";
        $scope.Message = "";
    }
 
    //FUNCTION TO SUBMIT THE FORM
    $scope.submitWEBAPI = function (formValid) {

        var Contact = {};

        Contact.ContactName = $scope.ContactName;
        Contact.EmailAddress = $scope.EmailAddress;
        Contact.TelephoneNumber = $scope.TelephoneNumber;
        Contact.Message = $scope.Message;
     
        var promisePost = ContactService.postInfo(Contact);

        promisePost.then(function (d) {
            $scope.Id = d.data.Id;
            alert("Your request has been submitted.");
            initialize();

        }, function (err) {
            alert("An error occured saving the request.");
        });
    };

    //FUNCTION TO CANCEL FORM
    $scope.resetPage = function () {
        initialize();
    };
});

