
$(document).ready(function() {

    //runs on document load
    adjust_box_height();
    fix_button_box();

});

function adjust_box_height() {

    //save initial image dimensions
    let size = get_img_dim();

    //grab every box-third
    let boxes = document.getElementsByClassName("box-third");

    //find maximum height
    let max = 0;
    for(each of boxes) {
        let h = $(each).height();
        max = h>max ? h : max;
    }

    //set new box height to previous maximum
    $(".box-third").css("min-height", max+"px");

    //add padding to image height since it does not have padding
    let padding = Number($(".box-third").css("padding").replace("px",""));
    $("#panel-3").css("height", Number(max+2*padding)+"px");

    //resize width of boxes to match box-third proportions
    let wid1 = (max)/size.height * size.width,
        wid2 = (max+2*padding)/size.height * size.width;
    $(".box-third").css("max-width", wid1+"px");
    $("#panel-3").css("max-width", wid2+"px");


}

function get_img_dim() {
    return {
        height: $("#link-img").height(),
        width: $("#link-img").width()
    }
}

function fix_button_box() {

    //fetch width of panel boxes
    let wid = $(".box-third").width(),
        padding = Number($(".box-third").css("padding").replace("px","")),
        marginText = $(".box-third").css("margin"),
        marginIndex = marginText.lastIndexOf(" "),
        margin = Number(marginText.slice(marginIndex+1).replace("px","")),
        buttonpad = Number($("#button-box").css("padding").replace("px",""))
        boxwid = wid*3+padding*6+margin*4-buttonpad*2+10;

    //set button box to width
    $("#button-box").css("max-width", boxwid+"px");

    //set button width
    $(".button-col:not(:last-child)").css("width", wid*1+padding*2+margin*2);

}
