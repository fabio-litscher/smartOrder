if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.navigation.helpers({
    name: function () {

    }
  });

  Template.navigation.events({
    '': function () {

    }
  });

  Template.navigation.rendered = function () {
    $(".button-collapse").sideNav();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
