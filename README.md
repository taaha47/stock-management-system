### Stock Management System

happily made with
- cli-vue-plugin
- cli-vue-plugin-electron-builder
- @vue/cli-plugin-typescript

##### To generate project starter:
    - npm install -g @vue/cli
    - vue create app-name
    - cd app-name
    - vue add electron-builder
    - vue add vuetify
    - vue add @vue/typescript

##### Project setup
    - install dependencies                     : npm install
    - compile and hot reload for development   : npm run eletron:serve
    - Generate build for production            : npm run electron:build
    - build for windows                        : npm run electron:build-win
    - postinstall package dependencie s        : npm run postinstall
    - postinstall for windows                  : npm run postinstall-win
    - run unit tests                           : npm run test
    - linting                                  : npm run lint
    - migration                                : npm run typeorm:cli -- migration:run

##### useful links:
    - https://nklayman.github.io/vue-cli-plugin-electron-builder/
    - https://medium.freecodecamp.org/creating-an-electron-app-using-angular-and-sqlite3-24ca7d892810
