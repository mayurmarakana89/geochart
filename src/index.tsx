export * from './chart-types';
export * from './chart';

import App from './app';

// Search for a special root in case we are loading the geochart standalone
const root = document.getElementById("root2aca7b6b288c") as HTMLElement;
if (root) {
    // Fetch the cgpv module
    const w = window as any;
    const cgpv = w['cgpv'];
    const { react, createRoot } = cgpv;
    const container = createRoot(root);

    // Render
    container.render(
        <react.StrictMode>
            <App />
        </react.StrictMode>
    );
}
