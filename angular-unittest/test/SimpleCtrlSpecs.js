describe("app module testing", function () {
    beforeEach(module("app"));

    describe("SimpleCtrl", function () {
        var scope,controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should assign message to Welcome Angular JS", function () {
            controller("SimpleCtrl", {$scope: scope});

            expect(scope.message).toBe("Hello Angular JS");
        });
    });
});