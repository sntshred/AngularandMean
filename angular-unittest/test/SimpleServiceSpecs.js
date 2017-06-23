describe("SimpleService", function(){

    beforeEach(module("app"));

    var service;

    beforeEach(inject(function(SimpleService){
       service = SimpleService;
    }));

    describe("getData", function(){
        it("should return an array of items", function(){
            expect(service.getData()).toBeDefined();
        });
    });
	
	describe("getData", function(){
        it("should return an array of items", function(){
			var obj = service.getData();
			expect(obj[0].id).toBe(1);
			expect(obj[0].name).toBe("Naresh");
          expect(obj[1].id).toBe(2);
			expect(obj[1].name).toBe("IT");
        });
    });
});