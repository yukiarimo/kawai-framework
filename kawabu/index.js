class Kawabu {
  constructor() {
    this.blocks = {};

    this.create = function (blockName, id) {
      this.blocks[id] = {
        name: blockName,
        elements: {},
      };
    };

    this.put = function (parentId, childId, elementType, content) {
      if (!this.blocks[parentId]) {
        console.error(`Parent with ID ${parentId} does not exist.`);
        return;
      }
      this.blocks[parentId].elements[childId] = {
        type: elementType,
        content,
      };
    };

    this.render = function () {
      let html = '<div class="coll-lo" id="1">\n';

      for (const parentId in this.blocks) {
        if (this.blocks.hasOwnProperty(parentId)) {
          const parent = this.blocks[parentId];
          html += `  <div class="${parent.name}" id="${parentId}">\n`;
          for (const childId in parent.elements) {
            if (parent.elements.hasOwnProperty(childId)) {
              const child = parent.elements[childId];
              html += `<div class="${child.type}" id="${childId}">${child.content}</div>\n`;
            }
          }
          html += '  </div>\n';
        }
      }
      html += '</div>';

      return html;
    };
  }
}