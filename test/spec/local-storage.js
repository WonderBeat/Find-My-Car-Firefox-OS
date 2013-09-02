describe("Local-Storage module test", function() {

  var storage;

	beforeEach(module('LocalStorageModule'));

  beforeEach(inject(function (_localStorageService_) {
    storage = _localStorageService_;
	  storage.clearAll();
  }));
  
  it('should be available', function () {   
    expect(storage).toBeDefined();
  });

	it('save-retrieve', function () {
		storage.add('Favorite Sport','Ultimate Frisbee');
		expect(storage.get('Favorite Sport'), 'Ultimate Frisbee');
	});
  
});
