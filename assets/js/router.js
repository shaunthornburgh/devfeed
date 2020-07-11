const routes = require('../js/fos_js_routes.json');
const router = require('../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js');

router.setRoutingData(routes);
module.exports = router;