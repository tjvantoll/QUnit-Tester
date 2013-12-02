test( "Test that passes", function() {
	var repos = $( "<ul id='repos'></ul>" ).appendTo( "#qunit-fixture" ),
		savedGetJSON = $.getJSON;

	$.getJSON = function() {
		return $.Deferred().resolve([
			{ name: "jQuery" },
			{ name: "jQuery UI" }
		]);
	};

	app.loadRepos();
	equal( repos.find( "li" ).length, 2 );

	$.getJSON = savedGetJSON;
});