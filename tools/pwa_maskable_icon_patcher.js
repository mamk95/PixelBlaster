// Inspired by AllanOricil, https://github.com/nuxt-community/pwa-module/issues/259#issuecomment-616136076

const fs = require("fs");

console.log(`Manifest maskable icon patching starting`);

let dir = `${process.cwd()}/dist/_nuxt/`; //this will look for the dist generated after running nuxt build

fs.readdir(dir, (err, files) => {
  if (err) console.error("error: " + err);
  else
    files.forEach((file) => {
      if (file.includes("manifest")) {
        console.log(`Manifest File Name: ${file}`);
        const manifestPath = `${process.cwd()}/dist/_nuxt/${file}`;
        let manifest = fs.readFileSync(manifestPath, "utf8");
        let manifestObj = JSON.parse(manifest);

        manifestObj.icons.push({
          src: "/maskable_icon.png",
          sizes: "1600x1600",
          type: "image/png",
          purpose: "maskable",
        });

        manifest = JSON.stringify(manifestObj);
        fs.writeFileSync(manifestPath, manifest, "utf8");
        manifest = fs.readFileSync(manifestPath, "utf8");

        console.log(`Manifest maskable icon patching completed`);
      }
    });
});
