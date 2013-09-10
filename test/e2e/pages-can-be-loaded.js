describe('Application pages', function() {

	it('main page should contain two buttons at least', function() {
		browser().navigateTo('/');
		expect(element('button').count()).toBeGreaterThan(1);
	});

	it('should go to another page on button click', function() {
		browser().navigateTo('/');
		expect(browser().window().hash()).toBe('/');
		element('button').click();
		expect(browser().window().hash()).not().toBe('/');
	});
});
