function birinci(callback) {
    setTimeout(function () {
        console.log("Birinci ");
        callback(ucuncu);
    },1000);
}

function ikinci(callback) {
    setTimeout(function () {
        console.log("İkinci ");
        callback();
    },1000);
}

function ucuncu() {
    console.log("Üçüncü ");
}


birinci(ikinci);
