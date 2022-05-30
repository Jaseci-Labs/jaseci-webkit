import { useDebouncedValue } from "@mantine/hooks";
import { parse } from "comment-json";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSubmit, useParams, useLoaderData } from "remix";

const useEditor = ({ content }: { content: string }) => {
  const [value, setValue] = useState(content);
  const [showPreviewText, setShowPreviewText] = useState(true);
  const submit = useSubmit();
  const { tabId } = useParams();
  const [showAddComponentModal, setShowAddComponentModal] = useState(false);
  const [debouncedValue] = useDebouncedValue(value, 1500);
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const jscAppRef = useRef<any>();
  const loaderData = useLoaderData();

  const saveTabContent = useCallback(() => {
    if (!tabId) return;
    const formData = new FormData();
    formData.set("content", value);
    formData.set("tabFileId", tabId);
    formData.set("_action", "saveTabContent");

    submit(formData, { replace: true, method: "post" });
  }, [submit, value]);

  const formatCode = () => {
    if (editorRef?.current) {
      editorRef?.current.getAction("editor.action.formatDocument").run();
    }
  };

  const runCode = useCallback(
    (value) => {
      if (value && jscAppRef?.current) {
        const components = (parse(value, undefined, true) as any).components;
        const config = (parse(value, undefined, true) as any).config;
        jscAppRef?.current?.setGlobalConfig(config);
        jscAppRef?.current?.setMarkup(JSON.stringify(components));
        setShowPreviewText(false);
      }
    },
    [jscAppRef]
  );

  const onRunExample = (exampleJSON: any) => {
    setValue(JSON.stringify(exampleJSON));
    formatCode();
    runCode(value);
  };

  const onInsertComponent = (component: any) => {
    // remove the last square bracket
    setValue((value: string) => value.slice(0, value.length - 1));

    // add a square bracket to the beginning
    if (value[0] !== "[") {
      setValue((value: string) => "[" + value);
    }

    if (value.includes("}")) {
      setValue((value: string) => value + ",");
    }

    editorRef.current.trigger("keyboard", "type", {
      text: JSON.stringify(component) + "\n",
    });

    formatCode();
    setShowAddComponentModal(false);
  };

  useEffect(() => {
    const saveTabContentTimeout = setTimeout(() => saveTabContent(), 3000);

    return () => {
      clearTimeout(saveTabContentTimeout);
    };
  }, [saveTabContent, value]);

  useEffect(() => {
    setValue(loaderData?.currentTab?.content || "");
  }, [loaderData?.currentTab]);

  useEffect(() => {
    try {
      if (jscAppRef?.current) {
        runCode(value);
      }
    } catch (err) {
      console.error(err);
      console.log(
        "Unable to run your code. Please check to see if it is valid."
      );
    }
  }, [jscAppRef, editorRef, runCode, debouncedValue]);

  useEffect(() => {
    if (editorRef.current) {
      monacoRef.current.editor.setModelLanguage(
        editorRef.current.getModel(),
        loaderData?.currentTab?.type === "Jac" ? "jac" : "json"
      );
    }
  }, [editorRef, loaderData?.currentTab?.ext]);

  return {
    saveTabContent,
    formatCode,
    content,
    onInsertComponent,
    monacoRef,
    editorRef,
    jscAppRef,
    runCode,
    value,
    setValue,
    onRunExample,
    showPreviewText,
  };
};

export default useEditor;
