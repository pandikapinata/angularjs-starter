describe("showVersion", function () {
  // Load module
  beforeEach(module("showVersion"));

  // Test Controller
  describe("ShowVersionController", function () {
    it("should show version of defined on controller", inject((
      $componentController
    ) => {
      const ctrl = $componentController("showVersion");

      expect(ctrl.version).toBe("1.8.3");
    }));
  });
});
