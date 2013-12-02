window.app = {
    loadRepos: function() {
        $.getJSON( "https://api.github.com/orgs/jquery/repos" ) 
            .then( function( data ) {
                var className,
                	html = "";

                data.forEach(function( repo ) {
                    className = "";
                    if ( repo.stargazers_count > 1000 ) { className = "popular"; }
                    if ( repo.stargazers_count > 5000 ) { className = "very-popular"; }
                    
                    html += "<li class='" + className + "'>" + repo.name + "</li>";
                });
                $( "#repos" ).html( html )
            });            
    }
};