import React, { useEffect, useState } from "react";
import EditorNavbar from "../components/EditorNavbar";
import EditorComp from "@monaco-editor/react";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";
import TabItem from "../components/TabItem";

const Editor = () => {
  const [tab, setTab] = useState("html");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("body { background-color: red; }");
  const [javascript, setJavascript] = useState("// some comment");

  const changeTheme = () => {
    document.body.classList.toggle("lightMode", !isLightMode);
    setIsLightMode(!isLightMode);
  };

  const run = () => {
    const cssCode = `<style>${css}</style>`;
    const jsCode = `<script>${javascript}</script>`;
    const iframe = document.getElementById("output");
    if (!iframe) return;
    iframe.srcdoc = html + cssCode + jsCode;
  };

  useEffect(() => {
    const timer = setTimeout(run, 200);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, [html, css, javascript, isExpanded]);

  const changeExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen">
      <EditorNavbar />
      <div className="flex flex-1 md:flex-row flex-col">
        <div
          className={`flex-1 ${isExpanded ? "md:w-full" : "md:w-1/2 w-full"}`}
        >
          <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
            <div className="flex items-center gap-2">
              {["html", "css", "js"].map((tabName) => (
                <TabItem
                  key={tabName}
                  name={tabName}
                  active={tab == tabName}
                  handleClick={setTab}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <MdLightMode
                className="text-[20px] cursor-pointer md:block hidden"
                onClick={changeTheme}
              />
              <AiOutlineExpandAlt
                className="text-[20px] cursor-pointer"
                onClick={changeExpand}
              />
            </div>
          </div>
          <EditorComp
            onChange={(e) => {
              if (tab === "html") setHtml(e || "");
              else if (tab === "css") setCss(e || "");
              else setJavascript(e || "");
              run();
            }}
            height="82vh"
            theme={isLightMode ? "vs-light" : "vs-dark"}
            language={tab === "js" ? "javascript" : tab}
            value={tab === "html" ? html : tab === "css" ? css : javascript}
          />
        </div>
        {!isExpanded && (
          <iframe
            title="output"
            id="output"
            className="md:w-1/2 w-full min-h-[82vh] bg-[#fff] text-black"
          />
        )}
      </div>
    </div>
  );
};

export default Editor;
