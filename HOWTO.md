### BUILD
remove `./build/*`

run `npm cache clean --force`


run `gulp dist-install --max_old_space_size=8192` and make sure enough memory is free. Also run with Gulp `3.9.1` and Webpack `4.14.0`

### PUBLISH
project is built into `./build/dist`

in `./build/dist/package.json` set

    1) name="@wentsa/pdfjs-dist"
    2) repository.url="https://github.com/wentsa/pdf.js.git"

run `npm publish --access=public ./build/dist`. If EPERM error occurs, run `npm login` before

### SYNC WITH mozzila/pdf.js

1. Add remote from original repository in your forked repository: 


    git remote add upstream https://github.com/mozilla/pdf.js.git
    git fetch upstream

2. Updating your fork from original repo to keep up with their changes:


    git pull upstream master
     