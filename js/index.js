/**
 * Created with JetBrains PhpStorm.
 * User: ishowshao
 * Date: 12-9-5
 * Time: 下午10:42
 */
jQuery(function () {
    window.gomoku = new Gomoku();

    jQuery('#play').click(function () {
        jQuery(this).hide();
        gomoku.play(jQuery('input[name="black-or-white"]:checked').val());
    });

    jQuery('#replay').click(function () {
        gomoku.replay(jQuery('input[name="black-or-white"]:checked').val());
    });
});