Template.home.helpers({
  scenes: function () {
    // all frozen scenes
    return Scenes.find({}, {sort: {createdAt: -1}});
  },
  calendar: function (date) {
    return moment(date).calendar();
  }
});

Template.home.events({
  "click .new-scene": function () {
    Meteor.call("newScene", function (error, newId) {
      Router.navigate("/scene/" + newId, { trigger: true });
    });
  }
});

UI.body.helpers({
  sceneLoaded: function () {
    return !! Session.get("sceneId");
  },
  buildMode: Utils.buildMode
});
