/**
 * Created with JetBrains PhpStorm.
 * User: ishowshao
 * Date: 12-9-5
 * Time: 下午10:42
 */
jQuery(function () {
    window.gomoku = new Gomoku();

    if (!console.log) {
        console.log = function () {};
    }

    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback, thisObject) {
            for (var i = 0; i < this.length; i++) {
                callback.call(thisObject || null, this[i], i);
            }
        };
    }

    jQuery('#play').click(function () {
        jQuery(this).hide();
        jQuery('#replay').show();
        gomoku.play(jQuery('input[name="black-or-white"]:checked').val());
    });

    jQuery('#replay').click(function () {
        gomoku.replay(jQuery('input[name="black-or-white"]:checked').val());
    });
});