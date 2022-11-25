import "./App.css";
import ReactSortableComponent from "./ReactSortable/ReactSortableComponent";
import { NormalDrag } from "./ReactSortable/NormalDrag";
import UseRefComponent from "./UseRefComponent/useRefComponent";
import LanguageChangeComponent from "./LanguageChangeComponent/LanguageChangeComponent";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function App() {
  // const { i18n }: any = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage("de");
  // }, []);

  return (
    <div className="parent_div">
      <h1>React Project</h1>
      {/* <ReactSortableComponent /> */}
      {/* <NormalDrag /> */}
      {/* <UseRefComponent /> */}
      <LanguageChangeComponent />
    </div>
  );
}
