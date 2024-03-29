import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var roomDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(roomDomElement);

var reactHeading = React.createElement('h1', {}, 'Hello from JSX!');
var reactSecondHeading = React.createElement('h2', {}, 'The best syntax ever!');
var header = React.createElement('header', { className: 'site-header' }, reactHeading, reactSecondHeading);

var headerJSX = React.createElement(
    'header',
    { className: 'site-header' },
    React.createElement(
        'h1',
        null,
        'Hello from JSX!'
    ),
    React.createElement(
        'h2',
        null,
        'The best syntax ever!'
    )
);

root.render(headerJSX);