$.fn.classer = function (on, off) {
    this.addClass(on);
    if (typeof off != "undefined") {
        spl = off.split(",");
        for (s in spl) {
            this.removeClass(spl[s]);
        }
    }
}
