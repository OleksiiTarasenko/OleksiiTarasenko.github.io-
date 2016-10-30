module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

   concat: {
    
    js: {
      src: 'js/*.js',
      dest: 'build/js/production.js', 
     },
    css:{
       src: 'css/*.css',
       dest: 'build/css/production.css'
    },
  },
  uglify: {
    build: {
        src: 'build/js/production.js',
        dest: 'build/js/production.min.js'
    }
  },
  imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/img/'
        }]
    }
  },
  cssmin: {
        my_target: {
            src: 'build/css/production.css',
            dest: 'build/css/production.min.css'
        }
    }
  });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-css');
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify','imagemin','cssmin']);


};


