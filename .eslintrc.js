// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'new-parens': 2,
    'no-array-constructor': 2, //禁止使用数组构造器
    'no-caller': 2, //禁止使用arguments.caller或arguments.callee
    'no-console': 'off', //禁止使用console
    'no-class-assign': 2, //禁止给类赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-control-regex': 0, //禁止在正则表达式中使用控制字符
    'no-delete-var': 2, //不能对var声明的变量使用delete操作符
    'no-dupe-args': 2, //函数参数不能重复
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-empty-character-class': 2, //正则表达式中的[]内容不能为空
    'no-empty-pattern': 2,
    'no-eval': 2, //禁止使用eval
    'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
    'no-extend-native': 2, //禁止扩展native对象
    'no-extra-bind': 2, //禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, //禁止不必要的bool转换
    'no-extra-parens': [2, 'functions'], //禁止非必要的括号
    'no-fallthrough': 2, //禁止switch穿透
    'no-floating-decimal': 2, //禁止省略浮点数中的0 .5 3
    'no-func-assign': 2, //禁止重复的函数声明
    'no-implied-eval': 2, //禁止使用隐式eval
    'no-inner-declarations': [2, 'functions'], //禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2, //禁止无效的正则表达式
    'no-irregular-whitespace': 2, //不能有不规则的空格
    'no-iterator': 2, //禁止使用__iterator__ 属性
    'no-label-var': 2, //label名不能与var声明的变量名相同
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }], //禁止标签声明
    'no-lone-blocks': 2, //禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, //禁止混用tab和空格
    'no-multi-spaces': 2, //不能用多余的空格
    'no-multi-str': 2, //字符串不能用\换行
    'no-multiple-empty-lines': [2, {
      'max': 1
    }], //空行最多不能超过2行
    'no-native-reassign': 2, //不能重写native对象
    'no-negated-in-lhs': 2, //in 操作符的左边不能有!
    'no-new-object': 2, //禁止使用new Object()
    'no-new-require': 2, //禁止使用new require
    'no-new-symbol': 2,
    'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
    'no-obj-calls': 2, //不能调用内置的全局对象，比如Math() JSON()
    'no-octal': 2, //禁止使用八进制数字
    'no-octal-escape': 2, //禁止使用八进制转义序列
    'no-path-concat': 2, //node中不能使用__dirname或__filename做路径拼接
    'no-proto': 2, //禁止使用__proto__属性
    'no-redeclare': 2, //禁止重复声明变量
    'no-regex-spaces': 2, //禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-return-assign': [2, 'except-parens'], //return 语句中不能有赋值表达式
    'no-self-assign': 2,
    'no-self-compare': 2, //不能比较自身
    'no-sequences': 2, //禁止使用逗号运算符
    'no-shadow-restricted-names': 2, //严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2, //禁止稀疏数组， [1,,2]
    'no-this-before-super': 2, //在调用super()之前不能使用this或super
    'no-throw-literal': 2, //禁止抛出字面量错误 throw "error";
    'no-trailing-spaces': 2,
    'no-undef': 2, //不能有未定义的变量
    'no-undef-init': 2, //变量初始化时不能直接给它赋值为undefined
    'no-unexpected-multiline': 2, //避免多行表达式
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }], // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unreachable': 2, //不能有无法执行的代码
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }], //不能有声明后未被使用的变量或参数
    'no-useless-call': 2, //禁止不必要的call和apply
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2, //禁用with
  }
}
