const babelParser = require('@babel/parser');

const reduceAst = (oldNode, currentNode) => {
  let element = {};
  if (currentNode.type === 'JSXElement') {
    element = {
      name: currentNode.openingElement.name.name,
      children: [],
    };
    oldNode.push(element);
  }
  if ('children' in currentNode) {
    currentNode.children.forEach(
      (node) =>
        oldNode.length > 0
          ? reduceAst(element.children, node)
          : reduceAst(oldNode, node),
    );
  }
  return oldNode;
};

const getTree = (content) => {
  const ast = babelParser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx'],
  });
  const initialAst = ast.program.body.find(
    (astNode) => astNode.type === 'ExportNamedDeclaration',
  ).declaration.declarations[0].init.body.body[0].argument;

  return reduceAst([], initialAst);
};

module.exports = getTree;
