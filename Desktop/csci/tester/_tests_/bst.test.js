import BST from '../src/bst.js';
import BSTNode from '../src/bst-node.js';

describe('binarySearchTree', () => {
  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });
  test('it should create a new root node', () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insertNode(node);
    expect(bst.root).toEqual(node);
  });
  test('it should add a child node to the right of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(22);
    bst.insert(newNode);
    expect(rootNode.left.data).toEqual(22);
  }); 
  test('it should add a child node to the right of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(48);
    bst.insert(newNode);
    expect(rootNode.right.data).toEqual(48);
  });
}); 