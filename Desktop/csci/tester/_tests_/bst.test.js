import BST from "../src/bst.js";
import BSTNode from "../src/bst-node";

describe("binarySearchTree", () => {
  const pbst = new BST();

  beforeEach(() => {
    pbst.insert(new BSTNode(4));
    pbst.insert(new BSTNode(2));
    pbst.insert(new BSTNode(6));
    pbst.insert(new BSTNode(1));
    pbst.insert(new BSTNode(3));
    pbst.insert(new BSTNode(5));
    pbst.insert(new BSTNode(7));
    pbst.insert(new BSTNode(8));
  });

  test("should initialize a binary search tree with a root of null", () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });

  test("it should create a new root node", () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insert(node);
    expect(bst.root).toEqual(node);
  });

  test("it should add a child node to the left of the root node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(22);
    bst.insert(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test("it should add a child node to the right of the root node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(48);
    bst.insert(newNode);
    expect(rootNode.right.data).toEqual(48);
  });

  test("it should add a child node to the left of the root node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(22);
    bst.insert(node2);
    let node3 = new BSTNode(11);
    bst.insert(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });

  test("it should add a child node to the right of the root node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(48);
    bst.insert(node2);
    let node3 = new BSTNode(55);
    bst.insert(node3);
    expect(rootNode.right.right.data).toEqual(55);
  });

  test("it should add a child to left or right of a node", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(22);
    bst.insert(node2);
    let node3 = new BSTNode(33);
    bst.insert(node3);
    expect(rootNode.left.right.data).toEqual(33);
  });
  test("it should not add duplicate nodes", () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(36);
    expect(bst.insert(node2)).toEqual({
      root: { data: 36, left: null, right: null },
    });
  });
  test("it should return true if the root node is equal to 4", () => {
    expect(pbst.search(4)).toEqual(true);
  });

  test("it should return false if the root node is not equal to 31", () => {
    expect(pbst.search(31)).toEqual(false);
  });

  test("it should return if the value 0 is not in the tree", () => {
    expect(pbst.search(0)).toEqual(false);
  });

  test("it should return true if the tree includes 7", () => {
    expect(pbst.search(7)).toEqual(true);
  });

  test("it should return true if the tree includes 5", () => {
    expect(pbst.search(5)).toEqual(true);
  });

  test("should return false if the node to be removed doesnt exist in the tree", () => {
    expect(pbst.remove(99)).toEqual(false);
  });

  test("should remove a leaf node", () => {
    expect(pbst.remove(1)).toEqual({ data: null, left: null, right: null });
  });

  test("should remove a node with one child", () => {
    expect(pbst.removeOne(7)).toEqual({
      root: {
        data: 4,
        left: {
          data: 2,
          left: {
            data: null,
            left: null,
            right: { data: 1, left: null, right: null },
          },
          right: { data: 3, left: null, right: null },
        },
        right: {
          data: 6,
          left: { data: 5, left: null, right: null },
          right: {
            data: 8,
            left: null,
            right: { data: null, left: null, right: null },
          },
        },
      },
    });
  });

  test("should remove a node with 2 children", () => {
    expect(pbst.removeTwo(2)).toEqual({
      root: {
        data: 4,
        left: {
          data: null,
          left: {
            data: null,
            left: null,
            right: { data: 1, left: null, right: null },
          },
          right: { data: 3, left: null, right: null },
        },
        right: {
          data: 6,
          left: { data: 5, left: null, right: null },
          right: {
            data: 8,
            left: { data: 7, left: null, right: null },
            right: { data: null, left: null, right: null },
          },
        },
      },
    });
  });
});
