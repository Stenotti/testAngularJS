var services = angular.module('services', []);

/*
 * Problema con chiamate cross-domain. 
 * Come politica di sicurezza i recenti browser non permetto al codice js di invocare un servizio da un indirizzo diverso da quello del server da cui hanno scaricato il suddetto codice
 * JSONP e CORS (Cross-origin resource sharing) sono esplicite autorizzazioni dei server a farlo
 * 
 * Se non si ha accesso al server bisogna crearsi un proprio server che fa la chiamata e ritorna il risultato
 */

/*
 * Ci sono diversi modi di dichiarare i servizi:
 * module.service('myService', MyFunc); -> Con i service AngularJS vi fornirà un’istanza singleton chiamando “new” della funzione passata ad argomento
 * module.factory('myService', MyFunc); -> Con i factory AngularJS vi fornirà il valore restituito dalla funzione passata ad argomento
 */
services.factory('Customer', ['$resource', function($resource) {
	return $resource(
			'https://public-api.wordpress.com/rest/v1.1/sites/',  // Base URL
			null, // Default Params (ad esempio se la risorsa si riferisce ad un 
		    {
	        	'getCustomers': { method:'GET', 
	        					  url: 'https://public-api.wordpress.com/rest/v1.1/sites/:site', 
	        					  params: { site: '@site' }}
		    }
		);
	}]
);