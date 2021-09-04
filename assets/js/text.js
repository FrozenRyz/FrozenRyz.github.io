$(function () {
    var title = document.title
        , animSeq = ["/", "$", "\\", "|", "$"]
        , animIndex = 0
        , titleIndex = 0;

    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 250);
});
$(function () {
    $(".typed").typed({
        strings: ['fro0zzy', "Kto eto?", "VLad", "13 y.o", "nedo-past3r", "html/css/js noob"],
        typeSpeed: 100,
        loop: true,
        cursorChar: "|",
    });
});
