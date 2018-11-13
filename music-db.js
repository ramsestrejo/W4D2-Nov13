module.exports = ( function () {

	const pg = require( 'pg' );
	const cfg = require( './config' );

	const config = {
		host : cfg.host,
		database : cfg.database,
		user : cfg.user,
		password : cfg.password,
		port : cfg.port
	};

	const client = new pg.Client( config );
	client.connect( );

	function displayResults( err , results ) {
		console.log( 'error:' , err );
		console.log( results.rows );
	}

	function getAlbumByTitle( title , callback ) {
		client.query( `select title, name from albums alb JOIN artists art 
			ON alb.artist_id = art.id where title = $1::text`, 
			[ title ] , callback );
	}

	function getTracksByAlbumId( id , callback ) {
		client.query( `select t.title from tracks t JOIN albums a 
			ON t.album_id = a.id where a.id = $1::int`, 
			[ id ] , callback );
	}

	return {
		albumByTitle : getAlbumByTitle,
		tracksByAlbumId : getTracksByAlbumId
	}



// getAlbumByTitle( 'Homework' , displayResults );
// getTracksByAlbumId( 5 , displayResults );

})()

// connection to database
// query database
// read parameter for database title