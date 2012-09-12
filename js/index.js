/**
 * Created with JetBrains PhpStorm.
 * User: ishowshao
 * Date: 12-9-5
 * Time: 下午10:42
 */
if (!console || !console.log) {
    console = {};
    console.log = function () {};
}

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisObject) {
        for (var i = 0; i < this.length; i++) {
            callback.call(thisObject || null, this[i], i);
        }
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var findIndex = -1;
        for (var i = fromIndex || 0; i < this.length; i++) {
            if (this[i] === searchElement) {
                findIndex = i;
                break;
            }
        }
        return findIndex;
    };
}

jQuery(function () {
    window.gomoku = new Gomoku();

    jQuery('#play').click(function () {
        jQuery(this).hide();
        jQuery('#replay').show();
        gomoku.play(jQuery('input[name="black-or-white"]:checked').val());
    });

    jQuery('#replay').click(function () {
        gomoku.replay(jQuery('input[name="black-or-white"]:checked').val());
    });
});