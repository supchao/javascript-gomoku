/**
 * Created with JetBrains PhpStorm.
 * User: ishowshao
 * Date: 12-9-5
 * Time: 下午10:42
 */
jQuery(function () {
    window.gomoku = new Gomoku();

    var chessboard = jQuery('.chessboard');
    var offset = chessboard.offset();
    jQuery('#log').offset({
        top: offset.top,
        left: offset.left + chessboard.width() + 10
    }).height(chessboard.height() - 2);

    jQuery('#play').click(function () {
        jQuery(this).hide();
        jQuery('#replay').show();
        gomoku.play(jQuery('input[name="black-or-white"]:checked').val());
    });

    jQuery('#replay').click(function () {
        gomoku.replay(jQuery('input[name="black-or-white"]:checked').val());
    });
});