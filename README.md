# NPM skeleton for developing jsmacros scripts

## Basic usage:
1. Clone the project
1. Run `npm install`
1. Create a subfolder in src (f.ex. see src/helloWorld)
1. Ensure that the subfolder has an index.ts file
1. Run `npm run build:watch`
1. In game, select the file from the dist folder
1. Edit your code, webpack will automatically recompile whenever you save any of the source files
## To use a different project structure
1. Tweak the `entry` field in webpack.config.js

## To update the typings
Get new ts files from [JsMacros-Examples#typescriptdev/headers][wag-examples] 
and put them in the `typedef` folder (really anywhere in src should work)

## Prior work
Project bootstrapped with [typescript-webpack-starter][ts-starter]\
JSMacros typedefs taken from [JsMacros-Examples][wag-examples]\
Intended to develop scripts for the [JsMacros][jsmacros] mod

[wag-examples]: https://github.com/wagyourtail/JsMacros-Examples/tree/typescriptenv/headers
[jsmacros]: https://github.com/wagyourtail/JsMacros
[ts-starter]: https://github.com/nobrainr/typescript-webpack-starter