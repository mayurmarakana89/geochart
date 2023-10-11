import {
  Chart as ChartJS,
  DefaultDataPoint,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, ChartProps } from 'react-chartjs-2';

/**
 * Create a customized Chart Line UI
 *
 * @param {TypeChartLineProps} props the properties passed to the Chart element
 * @returns {JSX.Element} the created Chart element
 */
export function ChartLine(props: ChartProps<'line', DefaultDataPoint<'line'>>): JSX.Element {
  const { data, options, redraw, style } = props;

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return <Line style={style} data={data} options={options} redraw={redraw} />;
}
