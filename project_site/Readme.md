Here will be the steps how to install the project

If you want to add package to *.json install list then use "--save-dev"
$ npm install --save-dev $package_name
--save means those packages are required locally for the project and listed under the dependencies property.
--save-dev adds the packages locally but as development dependencies. They are listed under devDependencies in package.json.
-g indicates the package should be installed globally; this lets you execute grunt in your terminal, regardless of the current working directory.

Tell npm to install certain version of module
$ npm install --save-dev grunt-contrib-imagemin@0.4.1

What to install:
$ npm install --save-dev grunt
$ npm install -g grunt-cli
$ npm install --save-dev grunt-contrib-jade
$ npm install --save-dev jade
$ npm install --save-dev grunt-contrib-copy
$ npm install --save-dev grunt-contrib-clean
$ npm install --save-dev grunt-contrib-watch
$ npm install --save-dev grunt-mkdir
$ npm install --save-dev grunt-rename

Check installed modules versions
$ npm list --depth=0
$ npm info $YOUR_PACKAGE version
├── grunt@0.4.5
├── grunt-cli@~0.1.13
├── grunt-contrib-copy@0.8.2
├── grunt-contrib-imagemin@0.4.1
├── grunt-contrib-jade@0.15.0
└── jade@~1.11.