function getUrl(emoji) {
    let url = "https://www.dropbox.com/s/v0pxvw5bp4ffdan/newFriend.png?raw=1";
    if (emoji === "homie") {
        url = "https://www.dropbox.com/s/fm8vurruc9h5gtz/homie.png?raw=1";
    } else if (emoji === "dear") {
        url = "https://www.dropbox.com/s/st884b1gigvc350/dear.png?raw=1";
    } else if (emoji === "family") {
        url = "https://www.dropbox.com/s/o8phvvtmad1cl3p/family.png?raw=1";
    } else if (emoji === "colleague") {
        url = "https://www.dropbox.com/s/iydzojfzl38grdg/colleague.png?raw=1";
    } else if (emoji === "significantOther") {
        url =
            "https://www.dropbox.com/s/9dela5ueptao89q/significantother.png?raw=1";
    } else {
        url = "https://www.dropbox.com/s/w6e6epwzlcr7pe4/bestfriend.png?raw=1";
    }
    return url;
}

// export
module.exports = {
    getUrl,
};
