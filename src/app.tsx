import { Chart } from './chart';

/**
 * Create a container to visualize a GeoChart in a standalone manner.
 *
 * @returns {JSX.Elemet} the element that has the GeoChart
 */
const App = (): JSX.Element => {

    // Fetch the cgpv module
    const w = window as any;
    const cgpv = w['cgpv'];
    const { react } = cgpv;
    const { useEffect, useState } = react;
    
    // Wire handler
    const [data, setData] = useState({});
    const [options, setOptions] = useState({});

    const handleChartLoad = (e: Event) => {
        const ev = e as CustomEvent;
        if (ev.detail.data) {
            setData(ev.detail.data)
        }
        if (ev.detail.options) {
            setOptions(ev.detail.options)
        }
    };

    const handleChartXAxisChanged = () => {
        console.log("Handle Chart X Axis");
    };

    const handleChartYAxisChanged = () => {
        console.log("Handle Chart Y Axis");
    };

    // Effect hook to add and remove event listeners
    useEffect(() => {
        window.addEventListener("chart/load", handleChartLoad);
        return () => {
            window.removeEventListener("chart/load", handleChartLoad);
        };
    });
    
    // Render
    return (
        <Chart
            style={{ width: 800 }}
            data={data}
            options={options}
            //redraw={shouldRedraw}
            handleSliderXChanged={handleChartXAxisChanged}
            handleSliderYChanged={handleChartYAxisChanged}
        />
    );
  };
  
  export default App;
  