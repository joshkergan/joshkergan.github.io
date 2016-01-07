var host = "joshkergan.github.io";

if ((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}
