function showSuccess(msg){
    noty({
        text: msg,
        type: 'success',
        layout: 'topCenter',
        timeout: 3000
    })
}

function showError(msg){
    noty({
        text: msg,
        type: 'error',
        layout: 'topCenter',
        timeout: 3000
    })
}
