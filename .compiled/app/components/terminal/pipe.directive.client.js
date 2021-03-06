// Generated by LiveScript 1.3.1
angular.module('app').directive('pipe', function(){
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs){
      return $attrs.$observe('pipe', function(value){
        var tagsToReplace, escape, transform;
        tagsToReplace = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;'
        };
        escape = function(tag){
          var ref$;
          return (ref$ = tagsToReplace[tag]) != null ? ref$ : tag;
        };
        transform = function(value, index){
          if (index === 0) {
            return " " + value + " ";
          } else {
            return " <span class='pipe'>" + value + "</span> ";
          }
        };
        return $element.html(value.replace(/[&<>]/g, escape).split('|').map(function(it){
          return it.trim().split(' ').map(transform).join(' ');
        }).join('|'));
      });
    }
  };
});