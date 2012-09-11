Array.prototype.coordinate = function (coordinate) {
    var r;
    if (this[coordinate[0]]) {
        r = this[coordinate[0]][coordinate[1]];
    }
    return r;
};
Array.prototype.coordinateAdd = function (coordinate) {
    return [this[0] + coordinate[0], this[1] + coordinate[1]];
};
var inside = function (coordinate, width, height) {
    return coordinate[0] >= 0 && coordinate[0] < height && coordinate[1] >= 0 && coordinate[1] < width;
};

