# GeoChart Component

This project is the GeoChart Component (not to be confused with the [GeoView GeoChart Plugin](https://github.com/Canadian-Geospatial-Platform/geoview/tree/develop/packages/geoview-geochart)).

IMPORTANT: This component uses react-chart-js which also has a react dependency. For compatibility reasons:
  1) The [webpack.common.js](https://github.com/Canadian-Geospatial-Platform/geochart/blob/main/webpack.common.js#L22) file has property to exclude react and react-dom from the packages
  
     ![image](https://github.com/Canadian-Geospatial-Platform/geochart/assets/94073946/0559b31d-97bb-451c-bf8b-70c3a73991a5)
     
  2) cgpv-main.js in the [index.html](https://github.com/Canadian-Geospatial-Platform/geochart/blob/main/index.html#L16) file is referenced via the github url hostname (not the localhost, nor 127.0.0.1, nor an url tricked via the hosts file, etc) - any of those may result in react hook issues.
  
     ![image](https://github.com/Canadian-Geospatial-Platform/geochart/assets/94073946/9bbe481f-f51d-432c-a34a-f669dacaf87e)

[Demo](https://canadian-geospatial-platform.github.io/geochart/)

```html
The viewer is being loaded in public/index.html as a script tag

<script src="https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js"></script>
```

## How it works

Developpers can import this project from their package.json directly and then import the [Chart component](https://github.com/Canadian-Geospatial-Platform/geochart/blob/main/src/chart.tsx).

Alternatively, developpers can run this project standalone to play with the `data` and the `options` JSON values to send to the Chart via the user interface.

## Running the project

### First clone this repo

```
$ git clone https://github.com/Canadian-Geospatial-Platform/geochart.git
```

### Go to the directory of the cloned repo

```
cd geochart
```

### Install dependencies

```
$ npm install
```

### Run the project

```
$ npm run serve
```

## Building the project

```
$ npm run build
```
