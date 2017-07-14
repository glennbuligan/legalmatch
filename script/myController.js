angular
	.module("myApp", [])
	.controller('myController', function($scope){
		$scope.zips = [
		{
			"code": "00000",
			"city": "Nowheresville, XX"
		},
		{
			"code": "00001",
			"city": "Ohio, YY"
		}
		];

		
		$(document).ready(function(){
			$('#input').change(function(){
				$id = $("#categoryList option[value='" + $('#input').val() + "']").attr('id');
				if($id === '1'){
					$('#familyModal').modal();
				}
			});
		});
	});