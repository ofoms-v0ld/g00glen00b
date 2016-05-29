angular.module("myApp.filters", []).filter("markdown", function($sce) {
	var converter = new showdown.Converter(); // if will be fails, you need replace new Showdown.converter() 
	return function(value) {
		var html = converter.makeHtml(value || '');
        return $sce.trustAsHtml(html);
	};
});