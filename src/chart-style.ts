/**
 * SX Classes for the Chart
 */
import { Theme } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getSxClasses = (theme: Theme) => {
  return {
    mainContainer: {
      fontFamily: theme.typography.body1.fontFamily,
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
      fontFamily: theme.typography.h5.fontFamily,
      fontWeight: theme.typography.h5.fontWeight,
      fontSize: theme.typography.h5.fontSize,
      textAlign: 'center',
      margin: '10px 0px',
    },
    xAxisLabel: {
      fontFamily: theme.typography.body1.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.body1.fontSize,
      textAlign: 'center',
      margin: '10px 0px',
    },
    yAxisLabel: {
      fontFamily: theme.typography.body1.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.body1.fontSize,
      position: 'relative',
      margin: 'auto',
      writingMode: 'vertical-rl',
      transform: 'rotate(-180deg)',
      transformOrigin: 'bottom center',
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
      fontFamily: theme.typography.body1.fontFamily,
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
