import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import { Dispatch, Fragment, SetStateAction } from "react";
import MenuBar from "./menu-bar";

export interface TiptapLiteProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

const TiptapLite: React.FC<TiptapLiteProps> = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit, Subscript, Superscript, TextAlign],
    content: content,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="tip-tap__container">
      <MenuBar liteMode={true} editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapLite;
