import { Editor } from "@tiptap/react";
import Image from "next/image";

import boldIcon from "../../../public/icons/editor/bold.svg";
import ItalicIcon from "../../../public/icons/editor/italic.svg";
import strikeThroughIcon from "../../../public/icons/editor/strikethrough.svg";
import separatorIcon from "../../../public/icons/editor/separator.svg";
import spaceIcon from "../../../public/icons/editor/space.svg";
import subscriptIcon from "../../../public/icons/editor/subscript.svg";
import superscriptIcon from "../../../public/icons/editor/superscript.svg";

export interface MenuBarTextCommandsProps {
  editor: Editor | null;
}

const MenuBarTextCommands: React.FC<MenuBarTextCommandsProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar__commands menu-bar__commands--text">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Image src={boldIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <Image src={ItalicIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <Image src={strikeThroughIcon} width={24} height={24} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={editor.isActive("superscript") ? "is-active" : ""}
      >
        <Image src={superscriptIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={editor.isActive("subscript") ? "is-active" : ""}
      >
        <Image src={subscriptIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Image src={separatorIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <Image src={spaceIcon} width={24} height={24} />
      </button>
    </div>
  );
};

export default MenuBarTextCommands;
