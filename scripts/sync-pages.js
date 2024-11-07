const fs = require('fs');
const path = require('path');

const businessModules = ['product', 'smart-order'];
const pagesJsonPath = path.join(__dirname, '..', 'apps', 'my-miniprogram', 'pages.json');
const pagesJson = require(pagesJsonPath);

businessModules.forEach(module => {
  const modulePagesPath = path.join(__dirname, '..', 'packages', module, 'src', 'pages');
  const modulePages = fs.readdirSync(modulePagesPath).map(page => ({
    path: `/${module}/${page.replace('.vue', '')}`,
    style: {
      navigationBarTitleText: `${module.charAt(0).toUpperCase() + module.slice(1)} Page`
    }
  }));
  pagesJson.pages = [...pagesJson.pages, ...modulePages];
});

fs.writeFileSync(pagesJsonPath, JSON.stringify(pagesJson, null, 2));