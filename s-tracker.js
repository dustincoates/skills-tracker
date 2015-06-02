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

      Skills.insert({
        name: event.target.name.value,
        score: 0,
        createdAt: new Date()
      });

      event.target.name.value = '';
    }
  });

  Template.skill.events({
    'click .increment-score': function(event){
      Skills.update(this._id, {$inc: {score: 1}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
