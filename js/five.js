Array.prototype.coordinate = function (coordinate) {
    var r;
    if (this[coordinate[0]]) {
        r = this[coordinate[0]][coordinate[1]];
    }
    return r;
};

