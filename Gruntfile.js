//Стандартный экспорт модуля в nodejs
module.exports = function(grunt) {
  // Инициализация конфига GruntJS
  grunt.initConfig({

    //Склеивание файлов
    concat: {
                dist: {
                    src: [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/angular/angular.js',
                        'bower_components/angular-cookie/angular-cookie.js',
                        'bower_components/angular-resource/angular-resource.js',
                        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                        'js/app.js'
                    ],
                    dest: 'js/production.js',
                }
            },

    //Минимизация файлов
    uglify: {
        build: {
            src: 'js/production.js',
            dest: 'js/production.min.js'
        }
    }

  });

  //Загрузка модулей, которые предварительно установлены

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

  //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
grunt.registerTask('default', ['concat', 'uglify']);
};