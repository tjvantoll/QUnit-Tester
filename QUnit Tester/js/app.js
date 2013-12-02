window.app = {
    loadRepos: function() {
        $.getJSON( "https://api.github.com/orgs/jquery/repos" ) 
            .then( function( data ) {
                var html = "";
                data.forEach(function( repo ) {
                    html += "<li>" + repo.name + "</li>";
                });
                document.querySelector( "#repos" ).innerHTML = html;
            });            
    }
};