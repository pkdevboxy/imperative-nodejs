try {
    require("fs").symlinkSync("../lib", "./node_modules/imp", "dir");
    console.log("Symlinked ./node_modules/imp to ./lib");
} catch(error) {
    console.log("./node_modules/imp already linked");
}
