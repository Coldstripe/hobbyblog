"use client";
import dynamic from "next/dynamic";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

export default function Editor() {
  return (
    <div className="container flex flex-col flex-wrap mx-auto">
      <MDXEditor
        className="h-max w-max"
        contentEditableClassName="prose dark:prose-invert"
        markdown="Hello **world**!"
        viewMode="editor"
      />
    </div>
  );
}
