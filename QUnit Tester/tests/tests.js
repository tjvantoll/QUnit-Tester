test( "Test that passes", function() {
	expect( 6 );
	var repos = $( "<ul id='repos'></ul>" ).appendTo( "#qunit-fixture" ),
		savedGetJSON = $.getJSON;

	$.getJSON = function() {
		return $.Deferred().resolve([
			{ name: "Test 1", stargazers_count: 1 },
			{ name: "Test 2", stargazers_count: 999 },
			{ name: "Test 3", stargazers_count: 1000 },
			{ name: "Test 4", stargazers_count: 4999 },
			{ name: "Test 5", stargazers_count: 5000 }
		]);
	};

	app.loadRepos();

	equal( repos.find( "li" ).length, 5 );
	equal( repos.find( "li" ).eq( 0 ).css( "color" ), "rgb(0, 0, 0)" );
	equal( repos.find( "li" ).eq( 1 ).css( "color" ), "rgb(0, 0, 0)" );
	equal( repos.find( "li" ).eq( 2 ).css( "color" ), "rgb(255, 165, 0)" );
	equal( repos.find( "li" ).eq( 3 ).css( "color" ), "rgb(255, 165, 0)" );
	equal( repos.find( "li" ).eq( 4 ).css( "color" ), "rgb(255, 0, 0)" );

	$.getJSON = savedGetJSON;
});