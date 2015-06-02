if (Meteor.isClient) {
  Template.body.helpers({
    skills: [
      {name: 'JavaScript', score: 0},
      {name: 'HTML', score: 0},
      {name: 'CSS', score: 0}
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
