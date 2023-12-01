# GeoChart Component

## Overview

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
There are 3 essential props for this component: inputs, data and options.
- `inputs` is the main one and accepts an elaborate configuration json detailed below;
- `data` is the equivalent of the ChartJS `data` props, to bypass the `inputs` and play with ChartJS directly;
- `options` is the equivalent of the ChartJS `options` props, to bypass the `inputs` props and play with ChartJS directly;
 
### The 'inputs` configuration is detailed like so:
```
{
    chart: 'line',
    title: 'Line Chart with time on x and sliders',
    query: {
      type: "esriRegular",
      url: "https://maps-cartes.services.geo.ca/server_serveur/rest/services/HC/airborne_radioactivity_en/MapServer/3",
      queryOptions: {
        whereClauses: [
          {
            field: "Location_Emplacement",
            prefix: "'",
            valueFrom: "Location_Emplacement",
            suffix: "'"
          }],
          orderByField: "CollectionStart_DebutPrelevement"
      }
    },
    geochart: {
      borderWidth: 2,
      useSteps: "after",
      xAxis: {
        type: 'time',
        property: 'CollectionStart_DebutPrelevement',
        label: 'Collected date',
        usePalette: false
      },
      yAxis: {
        type: 'linear',
        property: 'Activity_Activite_mBqm3',
        label: 'Activity mBqm3',
        tooltipSuffix: "mBqm3"
      }
    },
    category: {
      property: 'Radionuclide_Radionucleide',
      usePalette: false
   },
     ui: {
      xSlider: {
        display: true,
      },
      ySlider: {
        display: true,
        step: 0.1
      },
      stepsSwitcher: true,
      resetStates: true,
      description: 'This is a description text',
      download: true
    },
    datasources: [{
      display: "Saskatoon",
      sourceItem: {
        Location_Emplacement: "Saskatoon"
      }
    },{
      display: "Vancouver",
      sourceItem: {
       Location_Emplacement: "Vancouver"
       }
   }],
     chartjsOptions: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  }
```

#### Chart property
- chart: is the type of chart to build - supported values are: `'line'`, `'bar'`, `'pie'` and `'doughnut'`;

#### Query property
- query: groups information on how the data should be queried in the table source;
- query.type?: indicates the kind of query to perform - supported values are: `'esriRegular'`, `'ogcAPIFeatures'` and `'json'`;
- query.url?: indicates the url where to fetch the data to build the chart with - supported urls are Esri services, OGC API Features services or urls pointing to a .json file built on the GeoJson format;
- query.queryOptions.whereClauses?: indicates how to generate the where clause to fetch the correct data in the table source. This is an array to support filtering on more than 1 field. The `and` operator is implicit;
- query.queryOptions.whereClauses.field: indicates the field name, in the table source, on which to filter;
- query.queryOptions.whereClauses.prefix/suffix: indicates the prefix/suffix to use to build the query (useful to support single-quotes when the attribute to query is a string);
- query.queryOptions.whereClauses.valueIs: indicates the value as a literal information (not read from a property name from the datasource);
- query.queryOptions.whereClauses.valueFrom: ***{tricky one}*** indicates the property name, in the datasource(!) (detailed below), to use to query the table source (the url);
- query.queryOptions.orderByField?: indicates the property on which to order the results of the data coming from the table source;

#### Geochart property
- geochart: groups information on how to build the chart;
- geochart.borderWidth?: indicates the thickness of the borders (or lines in the `line` chart);
- geochart.useSteps?: indicates if the line chart should use steps - supported values are: `'before'`, `'middle'`, `'after'`, `false`;
- geochart.tension?: indicates if the line chart should use tension when drawing the line between the values;
- geochart.xAxis: groups information on the x axis;
- geochart.xAxis.property: indicates the property name on which to read the information from the table source;
- geochart.xAxis.label?: indicates the name of the axis to be displayed under the line chart;
- geochart.xAxis.type?: indicates the type of the x axis - supported values are:  `'linear'`, `'time'`, `'timeseries'`, `'logarithmic'`, `'category'`;
- geochart.xAxis.usePalette?: indicates if a pre-determined (GeoChart specific) color palette should be used;
- geochart.xAxis.paletteBackgrounds?: indicates the array of rgba color values to use as the palette for background coloring;
- geochart.xAxis.paletteBorders?: indicates the array of rgb color values to use as the palette for border coloring;
- geochart.xAxis.tooltipSuffix?: indicates the suffix to use on for the values when displayed in the tooltip;
- geochart.yAxis: groups information on the y axis;
- geochart.yAxis.property: indicates the property name on which to read the information from the table source;
- geochart.yAxis.label?: indicates the name of the axis to be displayed under the line chart;
- geochart.yAxis.type?: indicates the type of the y axis - supported values are:  `'linear'`, `'time'`, `'timeseries'`, `'logarithmic'`, `'category'`;
- geochart.yAxis.usePalette?: indicates if a pre-determined (GeoChart specific) color palette should be used;
- geochart.yAxis.paletteBackgrounds?: indicates the array of rgba color values to use as the palette for background coloring;
- geochart.yAxis.paletteBorders?: indicates the array of rgb color values to use as the palette for border coloring;
- geochart.yAxis.tooltipSuffix?: indicates the suffix to use on for the values when displayed in the tooltip;

#### Category property
- category?: indicates how the data from the table source should be categorized (this creates the datasets aka the legend);
- category.usePalette?: indicates if a pre-determined (GeoChart specific) color palette should be used;
- geochart.yAxis.paletteBackgrounds?: indicates the array of rgba color values to use as the palette for background coloring;
- geochart.yAxis.paletteBorders?: indicates the array of rgb color values to use as the palette for border coloring;

#### UI property
- ui?: indicates what ui elements to show with the chart;
- ui.xSlider?: groups information on the x slider;
- ui.xSlider.display?: indicates if the slider should be displayed;
- ui.xSlider.step?: indicates the steps the slider should jump when sliding;
- ui.xSlider.min?: indicates the minimum value for the slider;
- ui.xSlider.max?: indicates the maximum value for the slider;
- ui.ySlider?: groups information on the y slider;
- ui.ySlider.display?: indicates if the slider should be displayed;
- ui.ySlider.step?: indicates the steps the slider should jump when sliding;
- ui.stepsSwitcher?: indicates if the select drop down to switch the steps on-the-fly is displayed;
- ui.resetStates?: indicates if the button to reset the states is displayed;
- ui.description?: indicates the description text to show at the bottom of the chart;
- ui.download?: indicates if a download button should be displayed;

#### Datasources property
- datasources: groups information on the datasources to build the datasource drop down and the chart;
- datasources.display: indicates the string to be displayed in the drop down;
- datasources.value: indicates the inner value used for the `sourceItem`;
- datasources.sourceItem: indicates the source item used as reference to query the data from. This property has an object with a property that should equal the property in `query.queryOptions.whereClauses.valueFrom`;
- datasources.items?: indicates the actual `items`, associated with the `datasources.sourceItem`, used to build the chart with. When `items` is specified, the data isn't fetched with the `query.url`;

#### chartjsOptions property
- chartjsOptions?: indicates further `ChartJS specific` `options` to open the door to further customization when natively supported by `ChartJS` (ref: [here](https://www.chartjs.org/docs/latest/general/options.html));

*Note: `?` represents optional configuration properties.*

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

## Building the project

```
$ npm run build
```

### Run the project

```
$ npm run serve
```
