# MfeAppRemote

```
ng build --output-path=dist/mfe-app@1.0.0
```
build command for version and use this to import the component from that.

after installing http-server to serve the build 
```
npm install -g http-server
```

Run command to serve the build on a port 
```
http-server dist/mfe-app@1.0.0 --port 4400 -cors
```

or you can use serve 
npx serve -s dist/mfe-app@1.0.0 -l 4400 --cors

to use this you first need to install this using 
npm install -g serve