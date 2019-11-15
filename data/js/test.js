function sun (a, b) {
    let args = Array.prototype.slice.call(arguments);
    console.log(typeof args)
}

sun(1, 2)