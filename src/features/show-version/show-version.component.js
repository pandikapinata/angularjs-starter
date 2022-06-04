angular.module("showVersion").component("showVersion", {
  templateUrl: "features/show-version/show-version.template.html",
  controller: function ShowVersionController() {
    this.version = "1.8.3";
  },
});
