
const musicdb = require( './music-db' );

	function displayResults( err , results ) {
		console.log( 'error:' , err );
		console.log( results.rows );
	}

musicdb.albumByTitle( 'Homework' , displayResults );
musicdb.tracksByAlbumId( 6 , displayResults );