class Kawabu {
    constructor() {
      this.blocks = {};
  
      this.create = function (blockName) {
        this.blocks[blockName] = {};
      };
  
      this.set = function (blockName, key, value) {
        this.blocks[blockName][key] = value;
      };
  
      this.put = function (blockName, elementName, content) {
        if (!this.blocks[blockName]) {
          this.create(blockName);
        }
        if (!this.blocks[blockName].elements) {
          this.blocks[blockName].elements = {};
        }
        this.blocks[blockName].elements[elementName] = content;
      };
  
      this.render = function () {
        let html = `<!DOCTYPE html>\n<html lang="en">\n\n<head>\n`;
        html += `<meta charset="UTF-8">\n`;
        html += `<meta http-equiv="X-UA-Compatible" content="IE=edge">\n`;
        html += `<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1">\n`;
        html += `<link href="fonts/kawai-font.otf" rel="stylesheet">\n`;
        html += `<title>${this.blocks.title}</title>\n`;
        html += `<link rel="stylesheet" href="assets/css/kawai.css">\n`;
        html += `<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />\n`;
        html += `<script src="assets/js/kawai.js" defer></script>\n`;
        html += `</head>\n\n<body>\n<div class="block-o">\n`;
  
        for (const blockName in this.blocks) {
          if (blockName !== "title" && this.blocks.hasOwnProperty(blockName)) {
            html += `<div class="${blockName}">\n`;
            const elements = this.blocks[blockName].elements;
            for (const elementName in elements) {
              if (elements.hasOwnProperty(elementName)) {
                html += `<div class="${elementName}">${elements[elementName]}</div>\n`;
              }
            }
            html += `</div>\n`;
          }
        }
  
        html += `</div>\n</body>\n\n</html>`;
  
        return html;
      };
    }
  }

  const kawabu = new Kawabu();
  
  kawabu.create("topbar-o");
  kawabu.put("topbar-o", "la block-text", "Kawai");
  kawabu.put("topbar-o", "top-tab-block", `
    <div class="top-tab-block-e block-text lc">Home</div>
    <div class="top-tab-block-e block-text lc">Docs</div>
    <div class="top-tab-block-e block-text lc">Contact</div>
  `);
  kawabu.put("topbar-o", "toggle-menu-block", "");
  
  kawabu.create("coll-lo");
  kawabu.put("coll-lo", "block-l el-9 shadow", `<div class="block-text la">Hi from Kawai</div>
  <div class="block-text lb">Kawai - is the world famous framework for build anything that you want is one sec! Kawaii style is known for its adorable and playful design, which can add a fun and lively touch to any website.</div>`);
  
  kawabu.create("coll-lo");
  kawabu.put("coll-lo", "block-card el-4", `<div class="block-text lb">User experience</div>
  <div class="block-text lc">The playful and cute elements of a kawaii website .</div>
  <br>
  <div class="block-button" onclick="OpenPopup('test-modal-1')">How it works</div>`);
  
  kawabu.put("coll-lo", "block-card el-4", `<div class="block-text lb">Increase brand loyalty</div>
  <div class="block-text lc">A kawaii website can make .</div>`);
  
  kawabu.create("coll-lo");
  kawabu.put("coll-lo", "block-card el-4", `<div class="block-text">
    <div class="block-text lb">Appeal to a younger audience</div>
    <div class="block-text lc">Kawaii is popular among .</div>
  </div>`);
  
  kawabu.put("coll-lo", "block-card el-4", `<div class="block-text lb">Pricing</div>
  <div class="block-text lc">Its open source - no do not need to pay for it, just use and enjoy! Also you can collabare on GitHub</div>`);
  
  kawabu.create("coll-lo");
  kawabu.put("coll-lo", "block-l el-9 shadow", `<div class="block-text la center">Easy to Use</div>`);
  
  kawabu.create("coll-lo");
  kawabu.put("coll-lo", "block-card el-4", `<div class="block-text lb">Speed and Lightweight</div>
  <div class="block-text lc">Kawai is designed to be .</div>`);
  
  kawabu.put("coll-lo", "block-card el-4", `<div class="block-text lb">Responsive SEO-friendly Design</div>
  <div class="block-text lc">Kawai's responsive </div>`);
  
  kawabu.create("coll-lo");
  kawabu.put("coll-lo", "block-l el-9 shadow", `<div class="block-text la center">Get started</div>`);
  
  kawabu.create("coll-lo");
  kawabu.put("coll-lo", "block-l el-9", `<div class="block-text la">Read documentation</div>
  <div class="block-text lc">With all these !</div>
  <div class="block-button">Link</div>`);
  
  console.log(kawabu.render());
  document.getElementsByTagName('body')[0].innerHTML = kawabu.render();
  