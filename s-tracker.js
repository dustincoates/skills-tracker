Skills = new Mongo.Collection('skills');

if (Meteor.isClient) {
  Template.body.helpers({
    skills: function(){
      return Skills.find({});
    }
  });

  Template.body.events({
    'submit .add-skill': function(event){
      event.preventDefault();

      Meteor.call('addSkill', event.target.name.value);

      event.target.name.value = '';
    }
  });

  Template.skill.events({
    'click .increment-score': function(event){
      Meteor.call('incrementScore', this);
    }
  });

  // meteor add accounts-ui accounts-password
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// Make sure to run: $meteor remove insecure
// This makes sure that not every user can invoke everything everywhere
Meteor.methods({
  addSkill: function(name){
    // This makes sure that we have a logged in user.
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Skills.insert({
      name: event.target.name.value,
      score: 0,
      // Make sure to run: $meteor reset
      owner: Meteor.userId(),
      username: Meteor.user().username,
      createdAt: new Date()
    });
  },
  incrementScore: function(target){
    Skills.update(target._id, {$inc: {score: 1}});
  }
});
