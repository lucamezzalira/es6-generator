var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: true });
    this.installDependencies({
        npm: true,
        callback: function () {
            console.log('Project ready!');
        }
    });
  },
  writing: {
      config: function(){
          this.fs.copyTpl(
              this.templatePath('package.json'),
              this.destinationPath('package.json'),
              {
                  name: this.appname
              }
          );
          this.fs.copyTpl(
              this.templatePath('index.html'),
              this.destinationPath('index.html'),
              {
                  name: this.appname
              }
          );
          this.fs.copy(
              this.templatePath('src/App.js'),
              this.destinationPath('src/App.js')
          )
      }
  },
  end: {
      dependenciesInstalled: function(){
          this.spawnCommand('mkdir', ['dist']);
      }
  }

});