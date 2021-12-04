$(document).ready(()=> {
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
        $('body').css('background', '#0c0c0c')
    }
})
