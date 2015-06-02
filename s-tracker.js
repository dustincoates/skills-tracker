Skills = new Mongo.Collection('skills');

if (Meteor.isClient) {
  Template.body.helpers({
    skills: function(){
      return Skills.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
