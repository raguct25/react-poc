import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ReactSortable, Sortable } from "react-sortablejs";
import { MultiDrag, Swap } from "sortablejs";
import styled from "styled-components";
import "./styles.css";
import Test from "./Test";
import Test2 from "./Test2";
import Test3 from "./Test3";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  border-color: blue;
  cursor: move;
  &:hover {
    background: #eeeeee;
  }
`;

const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared",
  removeCloneOnHide: false,
  forceFallback: false,
};

export default function ReactSortableComponent() {
  // const initialState = [
  //   {
  //     id: 1,
  //     content: "item 1",
  //     parent_id: null,
  //     type: "container",
  //     children: [
  //       {
  //         id: 2,
  //         content: "item 2",
  //         width: 3,
  //         type: "text",
  //         parent_id: 1,
  //       },
  //       {
  //         id: 3,
  //         content: "item 3",
  //         width: 3,
  //         type: "text",
  //         parent_id: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     content: "item 2",
  //     parent_id: null,
  //     type: "container",
  //     children: [
  //       {
  //         id: 5,
  //         content: "item 5",
  //         width: 3,
  //         parent_id: 2,
  //         type: "container",
  //         children: [
  //           { id: 8, content: "item 8", width: 6, type: "text", parent_id: 5 },
  //           { id: 9, content: "item 9", width: 6, type: "text", parent_id: 5 },
  //         ],
  //       },
  //       {
  //         id: 6,
  //         content: "item 6",
  //         width: 2,
  //         type: "text",
  //         parent_id: 2,
  //       },
  //       {
  //         id: 7,
  //         content: "item 7",
  //         width: 2,
  //         type: "text",
  //         parent_id: 2,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     content: "item A",
  //     parent_id: null,
  //     type: "text",
  //   },
  // ];

  const initialState = [
    {
      id: 1,
      content: <Test />,
      parent_id: null,
      type: "container",
      children: [],
    },
    {
      id: 4,
      content: <Test3 />,
      parent_id: null,
      type: "text",
    },
    {
      id: 3,
      content: <Test2 />,
      parent_id: null,
      type: "text",
    },
  ];
  const [blocks, setBlocks] = useState(initialState);
  const [list, setList] = useState([
    <div>
      <h1 style={{ color: "green" }}> testing </h1>
    </div>,
    <Test2 />,
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);
  const dragItem: any = useRef();
  const dragOverItem: any = useRef();
  const testRef = useRef();

  const test: any = <Test2 />;

  const dragStart = (e: any, position: any) => {
    // ReactDOM.findDOMNode(test);
    // console.log("e", e);
    // console.log(" ReactDOM.findDOMNode(test)", ReactDOM.findDOMNode(test));

    dragItem.current = position;
    console.log("dragStart - ", typeof e.target.innerHTML);
    const test = e.target.innerHTML;
    const words = test.split("</div>");
    console.log("words", words);
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
    console.log("dragEnter - ", e.target.innerHTML);
  };

  const drop = (e: any) => {
    console.log("list", list);

    const copyListItems = [...list];
    console.log("copyListItems", copyListItems);
    console.log("dragItem.current", dragItem.current);

    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
    console.log("drop - ", e.target.innerHTML);
  };

  return (
    <div>
      <ReactSortable
        list={blocks}
        setList={setBlocks}
        {...sortableOptions}
        onMove={(evt, originalEvent) => {
          console.log("evt", evt);
          console.log("originalEvent", originalEvent);
          return -1;
        }}
      >
        {blocks.map((block, blockIndex) => {
          // console.log("first block", block);
          return (
            <BlockWrapper
              key={block.id}
              block={block}
              blockIndex={[blockIndex]}
              setBlocks={setBlocks}
            />
          );
        })}
      </ReactSortable>
      <div>
        {list &&
          list.map((item, index) => (
            <div
              style={{
                backgroundColor: "lightblue",
                margin: "20px 25%",
                textAlign: "center",
                fontSize: "40px",
              }}
              key={index}
              draggable={true}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

function BlockWrapper({ block, blockIndex, setBlocks }: any) {
  // console.log("BlockWrapper block", block);

  if (!block) {
    // console.log("~~~~~~~~ IF block called ~~~~~~");
    return null;
  }

  if (block.type === "container") {
    return (
      <StyledBlockWrapper className="block">
        Container Component: {block.content}
        <Container
          key={block.id}
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledBlockWrapper>
    );
  } else {
    // console.log("ELse container block");
    return (
      <StyledBlockWrapper className="block" key={block.id}>
        <p style={{ color: "red", margin: 0, padding: 0 }}>
          Child Component: {block.content}
        </p>
      </StyledBlockWrapper>
    );
  }
}

function Container({ block, blockIndex, setBlocks }: any) {
  // console.log("component container test", blockIndex);

  return (
    <>
      <ReactSortable
        key={block.id}
        list={block.children}
        setList={(currentList: any) => {
          // console.log("currentList", currentList);

          setBlocks((sourceList: any) => {
            // console.log("sourceList", sourceList);

            const tempList = [...sourceList];
            // console.log("tempList", tempList);

            const _blockIndex = [...blockIndex];
            // console.log("_blockIndex", _blockIndex);

            const lastIndex = _blockIndex.pop();
            // console.log("lastIndex", lastIndex);

            const lastArr = _blockIndex.reduce((arr, i) => {
              // console.log("arr", arr);
              // console.log("i", i);
              // console.log(" arr[i]", arr[i]["children"]);
              return arr[i]["children"];
            }, tempList);

            lastArr[lastIndex]["children"] = Array.from(new Set(currentList));

            return tempList;
          });
        }}
        {...sortableOptions}
      >
        {block.children &&
          block.children.map((childBlock: any, index: any) => {
            // console.log("blcokchild", childBlock);

            return (
              <BlockWrapper
                key={childBlock.id}
                block={childBlock}
                blockIndex={[...blockIndex, index]}
                setBlocks={setBlocks}
              />
            );
          })}
      </ReactSortable>
    </>
  );
}

// setList={(currentList) => {
//   setBlocks((sourceList) => {
//     const tempList = [...sourceList];
//     const _blockIndex = [...blockIndex];
//     const lastIndex = _blockIndex.pop();
//     const lastArr = _blockIndex.reduce(
//       (arr, i) => arr[i]["children"],
//       tempList
//     );
//     console.log(lastIndex);
//     lastArr[lastIndex]["children"] = currentList;
//     return tempList;
//   });
// }}

// Array.from(new Set(tempList));
