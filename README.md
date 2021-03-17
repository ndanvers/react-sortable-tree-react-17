###### React-sortable-tree with patch for React 17
The current build for React-sortable-tree is broken for React 17 due to event deligation changes.

The core of the issue is located in the implementation of "frontend-collective-react-dnd-scrollzone".

Manually applying patch using patch-package resolves the issue, all credit to Timothy Armes for resolving this issue.

npm start (default localhost:3000)

