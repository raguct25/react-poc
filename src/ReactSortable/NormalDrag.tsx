import React, { FC, forwardRef, ReactElement, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import "./styles.css";
import Test from "./Test";
import Test2 from "./Test2";
import Test3 from "./Test3";

interface ItemType {
  id: number;
  component: ReactElement;
  filtered?: boolean;
}

// export const NormalDrag: FC = (props) => {
//   const initialState = [
//     { id: 1, component: <Test /> , filtered: false},
//     { id: 2, component: <Test2 /> },
//     { id: 3, component: <Test3 /> },
//   ];
//   const [state, setState] = useState<ItemType[]>(initialState);

//   return (
//     <ReactSortable list={state} setList={setState}>
//       {state.map((item, index) => (
//         <div className="div_class" key={item.id}>
//           {item.component}
//           index: {index}
//         </div>
//       ))}
//     </ReactSortable>
//   );
// };

// This is just like a normal component, but now has a ref.
const CustomComponent = forwardRef<HTMLDivElement, any>((props, ref) => {
  // console.log("ref", props);
  return <div ref={ref}>{props.children}</div>;
});

export const NormalDrag: FC = (props) => {
  const initialState = [
    { id: 1, component: <Test /> },
    { id: 2, component: <Test2 /> },
    { id: 3, component: <Test3 /> },
  ];
  const [state, setState] = useState<ItemType[]>(initialState);

  return (
    <ReactSortable tag={CustomComponent} list={state} setList={setState}>
      {state.map((item) => (
        <div className="div_class" key={item.id}>
          {item.component}
        </div>
      ))}
    </ReactSortable>
  );
};
