'use strict';

class ArtistSignupController {
  //start-non-standard
  user = {
    //catalyst: true,
    //creative: true
  };
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state, $log, $scope, $http, $timeout) {
    this.Auth = Auth;
    this.$state = $state;
    this.$log = $log;
    this.$scope = $scope;
    this.$http = $http;
    this.$timeout = $timeout;
    this.list = [];
  }

  currentUser() {
    return this.Auth.getCurrentUser;
  }

  // go to content
  register() {
    let context = this;

    this.$http.put('/api/users/' + this.currentUser()._id + '/updateUserInfo', {
        name: this.user.name,
        email: this.user.email,
        bio: this.user.bio
      })
      .then(() => {
        context.$timeout(this.$state.go('artistSignupContent'), 1000);
        this.$state.go('main');
      });

    // refactor to grab from the html forms
    //this.Auth.updateUserInfo({
    //    name: this.user.name
    //    //what properties do we need to grab from
    //  })
    //  .then(() => {
    //    this.$state.go('artistSignupContent');
    //  });

    //this.$state.go('artistSignupContent');

  }

  // go to rewards
  content() {

    // refactor to grab from the html forms
    //this.Auth.updateUserInfo({
    //    name: this.user.name
    //    //what properties do we need to grab from
    //  })
    //  .then(() => {
    //    this.$state.go('artistSignupRewards');
    //  });

    this.$state.go('artistSignupRewards');

  }

  //list(){}

  addField() {
    this.$log.log('this was called');
    this.list.push({});
  };

  // go to main
  rewards() {

    // refactor to grab from the html forms
    //this.Auth.updateUserInfo({
    //    name: this.user.name
    //    //what properties do we need to grab from
    //  })
    //  .then(() => {
    //    this.$state.go('main');
    //  });

    // note about user is becoming a creative change the role,
    // after submit, role changes to artist
    this.done()
  }

  done() {
    this.state.go('main');
  }
}

angular.module('culturalystApp')
  .controller('ArtistSignupController', ArtistSignupController);
