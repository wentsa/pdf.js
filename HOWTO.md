### BUILD
remove `./build/*`

run `npm cache clean`

run `gulp dist-install --max_old_space_size=8192` and make sure enough memory is free

### PUBLISH
project is built into `./build/dist`

in `./build/dist/package.json` set

    1) name="@wentsa/pdfjs-dist"
    2) repository.url="https://github.com/wentsa/pdf.js.git"

run `npm publish --access=public ./build/dist`
     