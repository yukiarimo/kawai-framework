/*
    COPYRIGHT BY YUKI ARIMO
    KAWAI FRAMEWORK
*/

import { SiteModel } from './kawai-config.js'
import { SiteBlocks } from './kawai-config.js'

var sidebar = SiteModel[0].sidebar
var topbar = SiteModel[0].topbar
var blocks = SiteBlocks[0]

var sidebarSetup = SiteModel[0].sidebarConfig[0]
var topbarSetup = SiteModel[0].topbarConfig[0]

var addElementBlockl = `
<div class="block-l">

</div>
`

var addElementTextBlock = `
<div class="text-block">

</div>
`

function kawaiConstructorBlocks() {
  var addBlock = ``;

  for (let step = 0; step<Object.keys(SiteBlocks[0]).length; step++) {
    var blockName = blocks[Object.keys(SiteBlocks[0])[step]][0].col;
    var addBlockInside = ``;
    
    for (let shag = 0; shag<blockName.length; shag++) {
      var blockInfo = blockName[shag];
      var totalElements = blockInfo.config.length;
      var insideDoubleFlorAddElement = ``

      for (let step2 = 0; step2<totalElements; step2++) {
        insideDoubleFlorAddElement = insideDoubleFlorAddElement +`
        <div class="${blockInfo.config[step2]}">
          ${blockInfo.content[step2]}
        </div>
        `
      }

      var addBlockInside = addBlockInside + `
      <div class="${blockInfo.name}">
        ${insideDoubleFlorAddElement}
      </div>
      `
    }

    addBlock = addBlock + `<div class="coll-lo">${addBlockInside}</div>`;
  }

  return addBlock;
}

function kawaiConstructorSidebar(data) {
  var createSidebarTabs = ``;
  for(let step = 0; step<Object.keys(sidebarSetup.links[0]).length; step++) {
    createSidebarTabs = createSidebarTabs + `<div class="side-tab-block-e" OpenTab("${sidebarSetup.links[0][Object.keys(sidebarSetup.links[0])[step]]}")>${Object.keys(sidebarSetup.links[0])[step]}</div>`
  }
    var createSidebar = `<div class="sidebar-o">
        <div class="text-block la">${sidebarSetup.logo}</div>
        <div class="side-tab-block">
          ${createSidebarTabs}</div></div>`
    return createSidebar
}

function kawaiConstructorTopbar(data) {
    var createTopbar = `<div class="topbar-o">
      <div class="la text-block">Kawai</div>
      <div class="toggle-menu-block"></div>
      <div class="top-tab-block">
        <div class="top-tab-block-e">Home</div>
        <div class="top-tab-block-e">About</div>
      </div></div>`
    return createTopbar
}

function kawaiConstructorBlocko() {
  var createTopbarElement = kawaiConstructorTopbar();
  var createBlockElements = kawaiConstructorBlocks();
  var createBlocko = `
  <div class="block-o">
    ${createTopbarElement}
    ${createBlockElements}
  </div>
  `
  return createBlocko
}

var createSidebar = kawaiConstructorSidebar();
var createBlocko = kawaiConstructorBlocko();
var kawaiCompile = kawaiCompiler();

function kawaiCompiler() {
  if (sidebar == true) {
    var compileKawaiElements = createSidebar + createBlocko;
  } else {
    var compileKawaiElements = createBlocko;
  }
  return compileKawaiElements
}
document.getElementsByTagName('body')[0].innerHTML = kawaiCompile;

/*
    COPYRIGHT BY YUKI ARIMO
    KAWAI FRAMEWORK
*/