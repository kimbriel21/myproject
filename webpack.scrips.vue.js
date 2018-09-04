
function getVendorJs() {
    return [
        'node_modules/vue/dist/vue.js',
        'node_modules/axios/dist/axios.js',
        'node_modules/element-ui/lib/index.js',
    ];
}

function getVendorCss(){
    return [
        'node_modules/element-ui/lib/theme-chalk/index.css',
    ];
}

function getVueJs(){
    return [
        'resources/src/vue/event-bus.js',
        'resources/src/vue/Login/login.js',
        'resources/src/vue/Register/register.js' ,
        'resources/src/vue/app_root.js' ,
    ];
}

module.exports = {
    getVendorJs: getVendorJs,
    getVueJs: getVueJs,
    getVendorCss : getVendorCss
};