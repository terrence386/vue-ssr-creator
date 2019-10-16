'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chalk = require('chalk');
var fs = require('fs-extra');
var inquirer = require('inquirer');
var memFs = require('mem-fs');
var memFsEditor = require('mem-fs-editor');
var path = require('path');
var copyFile = require('./copy');

var Creator = function () {
  function Creator() {
    _classCallCheck(this, Creator);

    // 创建内存store
    var store = memFs.create();
    this.fs = memFsEditor.create(store);

    this.options = {
      name: '',
      description: ''
    };

    this.rootPath = path.resolve(__dirname, '../');
    this.tplDirPath = path.join(this.rootPath, 'template');
  }

  _createClass(Creator, [{
    key: 'init',
    value: function init() {
      var _this = this;

      console.log(chalk.green('开始创建vue服务端渲染项目...'));
      console.log();
      this.ask().then(function (answers) {
        _this.options = Object.assign({}, _this.options, answers);

        _this.write();
      });
    }
  }, {
    key: 'ask',
    value: function ask() {
      // 问题
      var prompt = [];

      prompt.push({
        type: 'input',
        name: 'name',
        message: '请输入项目名称',
        validate: function validate(input) {
          if (!input) {
            return '请输入项目名称!';
          }

          if (fs.existsSync(input)) {
            return '项目名已重复!';
          }

          return true;
        }
      });

      prompt.push({
        type: 'input',
        name: 'description',
        message: '请输入项目描述'
      });

      // 返回promise
      return inquirer.prompt(prompt);
    }
  }, {
    key: 'write',
    value: function write() {
      console.log(chalk.green('进行中...'));
      // const tplBuilder = require('../template/index.js');
      console.log('this.options', this.options);

      copyFile(this.tplDirPath, this.options.name);
      // tplBuilder(this, this.options, () => {
      console.log(chalk.green('vue服务端项目构建完成...'));
      console.log(chalk.grey('\u5F00\u59CB\u9879\u76EE:  cd ' + this.options.name + ' && npm install'));
      // });
    }
  }, {
    key: 'getTplPath',
    value: function getTplPath(file) {
      return path.join(this.tplDirPath, file);
    }
  }, {
    key: 'copyTpl',
    value: function copyTpl(file, to) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var tplPath = this.getTplPath(file);
      this.fs.copyTpl(tplPath, to, data);
    }
  }, {
    key: 'copy',
    value: function copy(file, to) {
      var tplPath = this.getTplPath(file);
      this.fs.copy(tplPath, to);
    }
  }]);

  return Creator;
}();

module.exports = Creator;