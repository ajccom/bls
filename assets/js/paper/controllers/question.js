app.controller('QuestionCtrl',['$scope','$http','$routeParams','$location','paper',function(scope,http,routeParams,location,paper){
  scope.$on('unload',function(e){
    if(scope.qform.$dirty)
      e.preventDefault();
  });

  scope.$watch('question',function(question){
    scope.qform.$setPristine();
      // scope.question = question;
  });

  scope.$on('save-question',function(){
    paper.saveQuestion(scope.question).then(function(){
      scope.qform.$setPristine();
      scope.$emit('question-saved');
    });
  });

  scope.$watch('qform.$dirty',function(value){
    scope.$emit('dirty-state-change',value);
  });

  scope.$watch('question.Body',function(value){
    var temp = $(value);
    temp.find('.math').mathquill();
    temp.find('.selectable').remove();
    scope.question.Excerpt = temp.text().substring(0,20);
    temp.remove();
  });
}]);

app.controller('MultipleChoiceCtrl',['$scope',function(scope){
  scope.removeChoice = function(i){
    scope.question.Choices.splice(i,1);
  };
  scope.addChoice = function(){
    scope.question.Choices = scope.question.Choices || [];
    scope.question.Choices.push({body:''});
  };
  var nCount = scope.$eval('question.Choices.length');
  if(!nCount){
    for(var i=0;i<4;i++){
      scope.addChoice();
    }
    scope.answer = 'A';
  }
}]);

app.controller('FillinBlanksCtrl',['$scope',function(scope){

}]);