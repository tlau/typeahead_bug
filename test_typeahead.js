if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.rendered = function() {
    Meteor.typeahead.inject();
  };

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },

    nba: function() {
      return ["Apple", "Banana", "Apple pie"];
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
