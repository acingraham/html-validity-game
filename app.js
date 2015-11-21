var json = [
             {
               "valid": true,
               "html": "<strong>Content</strong>",
               "msg": "It's valid!"
             },
             {
               "valid": false,
               "html": "<strong>Content<strong>",
               "msg": "The end tag is missing a '/'"
             }
           ];

function MyCtrl($scope) {
  // TODO - Check json length

  var questionNumber = 0;
  $scope.setQuestion = function() {
    $scope.question = json[questionNumber];
    questionNumber = (questionNumber + 1) % json.length;
  };

  $scope.setQuestion();

  $scope.no = function() {
    
    $scope.setQuestion();
  };

  $scope.yes = function() {

    $scope.setQuestion();
  }
}

angular.module('MyApp', [])
.controller('MyCtrl', [
  '$scope',
  MyCtrl
]);