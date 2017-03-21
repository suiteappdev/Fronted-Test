'use strict';

/**
 * @ngdoc service
 * @name marvelComicsWebappApp.comics
 * @description
 * # comics
 * Service in the marvelComicsWebappApp.
 */
angular.module('marvelComicsWebappApp')
  .service('comics', function ( $http, APIKEY, BASEAPI ) {
    return {
    	getHeroes  : function(val){
	        var timeStamp=  Date.now();
		    return $http.get(BASEAPI, {
		      params: {
		        nameStartsWith: val,
		        limit: 10,
		        ts: timeStamp,
		        apikey: APIKEY
		      }
		    });
    	},

    	getById  : function(id){
	        var timeStamp=  Date.now();
		    return $http.get(BASEAPI +'/' + id , {
		      params: {
		        ts: timeStamp,
		        apikey: APIKEY
		      }
		    });	
    	},

    	getComic : function(comic){
	        var timeStamp=  Date.now();
		    return $http.get(comic.resourceURI, {
		      params: {
		        ts: timeStamp,
		        apikey: APIKEY
		      }
		    });
    	}
    }
  });
