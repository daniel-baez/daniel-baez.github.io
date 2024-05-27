
shadow.cljs.devtools.client.env.module_loaded('main');

try { my_app.core.init(); } catch (e) { console.error("An error occurred when calling (my-app.core/init)"); console.error(e); }