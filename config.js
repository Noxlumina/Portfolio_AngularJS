const setEnv = () => {
  const fs = require("fs");
  const writeFile = fs.writeFile;
  const targetPath = "./src/environments/environment.ts";
  require("dotenv").config({
    path: "src/environments/.env",
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
        pexelApiUrl: '${process.env.pexelApiUrl}',
        pexelApiKey: '${process.env.pexelApiKey}',
        to_email: '${process.env.to_email}',
        service_id: '${process.env.service_id}',
        template_id: '${process.env.template_id}',
        public_key: '${process.env.public_key}',
    production: true,
    };
    `;
  writeFile(targetPath, envConfigFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    }
  });
  setEnv();
};
