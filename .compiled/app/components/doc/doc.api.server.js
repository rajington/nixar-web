// Generated by LiveScript 1.3.1
module.exports = function(repo, p){
  return {
    commands: function(callback){
      repo.docs.forEach(function(item){
        var apply;
        apply = function(command){
          return command.examples = item.files;
        };
        return p.each(apply)(
        p.filter(function(it){
          return it.name === item.name;
        })(
        repo.commands));
      });
      return callback(repo.commands);
    }
  };
};