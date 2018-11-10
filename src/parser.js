const babelParser = require('@babel/parser');

const getTree = (content) => {
  const ast = babelParser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx'],
  });

  const a = ast.program.body.find(
    (astNode) => astNode.type === 'ExportNamedDeclaration',
  ).declaration.declarations[0].init.body.body[0].argument;

  function showStuff(oldNode, currentNode) {
    let someThingPushed = false;

    var element = {};
    if (
      currentNode &&
      'type' in currentNode &&
      currentNode.type === 'JSXElement' &&
      oldNode
    ) {
      element = {
        name: currentNode.openingElement.name.name,
        children: [],
      };
      oldNode.push(element);
      someThingPushed = true;
    }
    if (
      currentNode &&
      typeof currentNode === 'object' &&
      'children' in currentNode &&
      currentNode.children.length
    ) {
      currentNode.children.forEach((node) => {
        if (someThingPushed) {
          return showStuff(element.children, node);
        } else {
          return showStuff(oldNode, node);
        }
      });
    } else {
      return oldNode;
    }
  }

  var newStuff = [];
  showStuff(newStuff, a);
  return newStuff;
};

module.exports = getTree;
