import babelParser from '@babel/parser';

const reduceAstNode = (oldNode, currentNode) => {
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
          ? reduceAstNode(element.children, node)
          : reduceAstNode(oldNode, node),
    );
  }
  return oldNode;
};

export const getTree = (content) => {
  const rawAst = babelParser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx'],
  });
  const initialAst = rawAst.program.body.find(
    (astNode) => astNode.type === 'ExportNamedDeclaration',
  ).declaration.declarations[0].init.body.body[0].argument;

  return reduceAstNode([], initialAst);
};

export default {
  getTree,
};
