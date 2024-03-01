/**
 * SX Classes for the Chart
 */
import { Theme } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getSxClasses = (theme: Theme) => {
  return {
    mainContainer: {
      borderColor: theme.palette.geoViewColor.primary.main,
      borderWidth: '2px',
      borderStyle: 'solid',
      overflowY: 'auto',
    },
    mainGeoChartContainer: {
      padding: '20px',
      display: 'flex',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
    },
    datasourceSelector: {
      minWidth: '150px',
      marginRight: '10px',
      '& .MuiSelect-select': {
        padding: '8px 12px !important',
      },
    },
    uiOptionsStepsSelector: {
      minWidth: '100px',
      '& .MuiSelect-select': {
        padding: '8px 12px !important',
      },
    },
    downloadButton: {
      marginLeft: 'auto',
      '& button': {
        height: '40px',
        textTransform: 'capitalize',
        backgroundColor: theme.palette.geoViewColor?.bgColor.dark[100],
        color: theme.palette.geoViewColor.textColor.main,
        '&:hover': {
          backgroundColor: theme.palette.geoViewColor?.bgColor.dark[50],
          color: theme.palette.geoViewColor.textColor.main,
        },
      },
    },
    dataset: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.palette.geoViewFontSize.lg,
      textAlign: 'center',
      margin: '10px 0px',
    },
    xAxisLabel: {
      textAlign: 'center',
      margin: '10px 0px',
      fontWeight: 'bold',
    },
    yAxisLabel: {
      position: 'relative',
      margin: 'auto',
      writingMode: 'vertical-rl',
      transform: 'rotate(-180deg)',
      transformOrigin: 'bottom center',
      fontWeight: 'bold',
      marginTop: '-15%',
    },
    uiOptionsResetStates: {
      display: 'inline-flex',
      width: '40px',
      textTransform: 'capitalize',
      margin: '10px',
    },
    checkDatasetWrapperLabel: {
      display: 'inline-block',
      padding: '10px',
    },
    checkDatasetWrapper: {
      display: 'inline-block',
      '& .Mui-checked': {
        color: `${theme.palette.geoViewColor.primary.main} !important`,
      },
    },
    checkDatasetLabel: {
      display: 'inline-flex',
      verticalAlign: 'middle',
      marginRight: '20px !important',
    },
    chartContent: {
      position: 'relative',
    },
    xSliderWrapper: {
      '& .MuiSlider-root': {
        color: theme.palette.geoViewColor.primary.main,
      },
    },
    ySliderWrapper: {
      height: '75%',
      textAlign: 'center',
      '& .MuiSlider-root': {
        color: theme.palette.geoViewColor.primary.main,
      },
    },
    loadingDatasource: {
      backgroundColor: 'transparent',
      zIndex: 0,
    },
    chartError: {
      fontStyle: 'italic',
      color: 'red',
    },
  };
};
