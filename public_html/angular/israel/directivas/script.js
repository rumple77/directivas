angular.module('directivaSimple' , [])
	.controller('Controlador', function ($scope){
		$scope.texto1 = {titulo: 'Elemento ',
						subtitulo: 'template desde archivo html, texto 1'}
		$scope.texto2 = {titulo: 'Directiva',
						subtitulo: 'template desde archivo html, texto 2'}						
	})
	.directive('miEncabezado', function (){
		return {
			//template: '<div class="page-header"><h1> {{texto.titulo}} <small> {{texto.subtitulo}} </small></h1></div>'
			/*todas las directivas por defecto son
			 atributos 'A' <div mi-encabezado></div>
			 para hacerlos elmtos -> restringir 'E' <mi-encabezado> </mi-encabezado>
			*/
			restrict: 'E', // ó 'AE'
			scope: {   // scope aislado q no hereda de directiva padre
				textoVariable: '=texto'
			},
			templateUrl: 'mi-encabezado.html'
		}
	})