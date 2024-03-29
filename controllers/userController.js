// Global
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });

// Users
export const users = (req, res) => res.render("users", { pageTitle: "Users" }); 
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User details" }); 
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit profile" }); 
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change password" }); 