const routes = require('./fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js';

Routing.setRoutingData(routes);
window.Routing = Routing;