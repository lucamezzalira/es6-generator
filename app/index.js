var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: true });
    this.installDependencies({
        npm: true,
        bower: false,
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
          );
          this.fs.copy(
              this.templatePath('webpack.config.js'),
              this.destinationPath('webpack.config.js')
          );
          this.fs.copy(
              this.templatePath('.babelrc'),
              this.destinationPath('.babelrc')
          )
      }
  },
  end: {
      dependenciesInstalled: function(){
          this.spawnCommand('mkdir', ['dist']);
      }
  }

});