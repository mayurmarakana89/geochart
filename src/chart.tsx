import { Box } from '@mui/material';
import { ChartData, ChartOptions, DefaultDataPoint } from 'chart.js';
import { GeoChartOptions, GeoChartType, GeoChartData} from './chart-types';
import { ChartDoughnut } from './charts/chart-doughnut';
import { ChartBarsVertical } from './charts/chart-bars-vertical';
import { ChartPie } from './charts/chart-pie';
import { ChartLine } from './charts/chart-line';
import styles from './chart.module.css';

/**
 * Main props for the Chart
 */
export interface TypeChartChartProps<TType extends GeoChartType> {
  style?: any;
  data?: GeoChartData<TType>;
  options?: GeoChartOptions;
  redraw?: boolean;
  handleSliderXChanged?: (value: number | number[]) => void;
  handleSliderYChanged?: (value: number | number[]) => void;
}

/**
 * Create a customized Chart UI
 *
 * @param {TypeChartChartProps} props the properties passed to the Chart element
 * @returns {JSX.Element} the created Chart element
 */
export function Chart(props: TypeChartChartProps<GeoChartType>): JSX.Element {
  // Fetch cgpv
  const w = window as any;
  const { cgpv } = w;
  const { Slider } = cgpv.ui.elements;
  const { style, data, options, redraw } = props;
  
  const _handleSliderXChange = (value: number | number[]) => {
    // If callback set
    if (props.handleSliderXChanged) {
      props.handleSliderXChanged!(value);
    }
  };

  const _handleSliderYChange = (value: number | number[]) => {
    // If callback set
    if (props.handleSliderYChanged) {
      props.handleSliderYChanged!(value);
    }
  };

  /**
   * Renders the Chart JSX.Element itself using Line as default
   * @returns The Chart JSX.Element itself using Line as default
   */
  const renderChart = (): JSX.Element => {
    // Depending on the type of chart
    switch (options!.geochart.chart) {
      case 'bar':
        // Vertical Bars Chart
        return (
          <ChartBarsVertical
            type="bar"
            data={data as ChartData<'bar', DefaultDataPoint<'bar'>, string>}
            options={options as ChartOptions<'bar'>}
            redraw={redraw}
          />
        );

      case 'pie':
        // Pie Chart
        return (
          <ChartPie
            type="pie"
            data={data as ChartData<'pie', DefaultDataPoint<'pie'>, string>}
            options={options as ChartOptions<'pie'>}
            redraw={redraw}
          />
        );

      case 'doughnut':
        // Doughnut Chart
        return (
          <ChartDoughnut
            type="doughnut"
            data={data as ChartData<'doughnut', number[], string>}
            options={options as ChartOptions<'doughnut'>}
            redraw={redraw}
          />
        );

      default:
        // Line Chart is default
        return (
          <ChartLine
            type="line"
            data={data as ChartData<'line', DefaultDataPoint<'line'>, string>}
            options={options as ChartOptions<'line'>}
            redraw={redraw}
          />
        );
    }
  };

  /**
   * Renders the X Chart Slider JSX.Element or an empty div
   * @returns The X Chart Slider JSX.Element or an empty div
   */
  const renderXSlider = () : JSX.Element => {
    const { xSlider } = options!.geochart;
    if (xSlider?.display) {
      return (
        <Box sx={{ height: '100%' }}>
          <Slider
            sliderId="sliderHorizontal"
            min={xSlider.min || 0}
            max={xSlider.max || 100}
            value={xSlider.value || 0}
            track={xSlider.track || false}
            customOnChange={_handleSliderXChange}
          />
        </Box>
      );
    }
    // None
    return <div />;
  }

  /**
   * Renders the Y Chart Slider JSX.Element or an empty div
   * @returns The Y Chart Slider JSX.Element or an empty div
   */
  const renderYSlider = (): JSX.Element => {
    const { ySlider } = options!.geochart;
    if (ySlider?.display) {
      return (
        <Box sx={{ height: '100%' }}>
          <Slider
            sliderId="sliderVertical"
            min={ySlider.min || 0}
            max={ySlider.max || 100}
            value={ySlider.value || 0}
            track={ySlider.track || false}
            orientation="vertical"
            customOnChange={_handleSliderYChange}
          />
        </Box>
      );
    }
    return <div />;
  };

  /**
   * Renders the whole Chart container JSX.Element or an empty div
   * @returns The whole Chart container JSX.Element or an empty div
   */
  const renderChartContainer = (): JSX.Element => {
    if (options && options.geochart && options.geochart.chart) {
      return (
        <div style={style} className={styles.chartContainer}>
          <div className={styles.chartContainerGrid1}>{renderChart()}</div>
          <div className={styles.chartContainerGrid2}>{renderYSlider()}</div>
          <div className={styles.chartContainerGrid3}>{renderXSlider()}</div>
          <div className={styles.chartContainerGrid4} />
        </div>
      );
    }
    return <div />;
  }

  return renderChartContainer();
}
