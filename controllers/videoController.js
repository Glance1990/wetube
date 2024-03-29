// Global
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });

// Video

export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload videos" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Details" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Videos" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Videos" });