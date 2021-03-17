import React from "react";
import SortableTree from "react-sortable-tree";
import './App.css';
import 'react-sortable-tree/style.css';

function App() {
  const [selectedNodeId, setSelectedNodeId] = React.useState("");
  const [sortableTreeData, setSortableTreeData] = React.useState([
    {
      id: "d06faed0-80e3-4163-8d56-6074bcf47ef8",
      title: "Programs",
      children: [
        {
          id: "54d90e23-34a3-4c26-9ed8-8040ddb2ee24",
          title: "Learning",
          children: [
            {
              id: "8f53cee2-d5d6-48fa-9a52-37a8c4bd9974",
              title: "Diverse Learning"
            }
          ]
        }
      ]
    },
    {
      id: "f7af091f-bc7a-47e9-8887-ef902994d6d2",
      title: "About",
      children: [
        { id: "4f7a893d-1ab3-4b8e-bfa3-daa22677d846", title: "Our parish" }
      ]
    }
  ]);

  const generateNodeProps = (node, path) => {
    let nodeProps = {
      onClick: (event) => nodeClicked(event, node),
      className: ""
    };
    console.log(node.node.id);
    if (selectedNodeId === node.node.id) {
      console.log(nodeProps);
      nodeProps.className = "selected-tree-node";
      console.log(nodeProps.className);
    }
    return nodeProps;
  };

  const nodeClicked = (event, node) => {
    if (
        event.target.className.includes("collapseButton") ||
        event.target.className.includes("expandButton")
    ) {
      // ignore the event
    } else {
      console.log(node, "node data");
      setSelectedNodeId(node.node.id);
    }
  };

  return (
    <div className="App">
      <div style={{ height: 400 }}>
        <SortableTree
            treeData={sortableTreeData}
            onChange={(treeData) => setSortableTreeData(treeData)}
            generateNodeProps={generateNodeProps}
        />
      </div>
    </div>
  );
}

export default App;
