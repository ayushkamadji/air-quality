# BBC Software Engineer Test - Air Quality Index

## Prerequisites
- Requires node js and npm installed for build system
- Pre-built static `dist` folder requires a web server. If you have node js, you may use `npx serve`.

## Build Instructions
1. Clone the repository
```
git clone https://github.com/ayushkamadji/air-quality.git
```
2. Run npm install
```
cd air-quality
npm install
```
3. Run build and export
```
npm run build
npm run export
```
4. To serve the dist folder see **Serving**

## Serving
In order to serve the `dist` folder you will need a static web server. For node js you can use `serve` package
```
cd dist
npx serve
```

## Testing
Limited tests are provided for data parsing functionality. To run test simply run via npm. (you will need to have installed packages already)
```
npm install
npm test
```