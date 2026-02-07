// Only open internal sections in a new tab
document.querySelectorAll("nav a").forEach(link => {

    // If the link is to another page (login/register), allow normal behavior
    if (link.getAttribute("href").includes(".html")) {
        return;
    }

    link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").replace("#", "");
        openInNewPage(sectionId);
    });
});
