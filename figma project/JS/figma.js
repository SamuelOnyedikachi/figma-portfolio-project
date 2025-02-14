function downloadFile(){
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "Profile.pdf";     link.download="profile.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
