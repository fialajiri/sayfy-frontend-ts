import { Editor } from "@tiptap/react";
import Image from "next/image";
import h1Icon from "../../../public/icons/editor/h-1.svg";
import h2Icon from "../../../public/icons/editor/h-2.svg";
import h3Icon from "../../../public/icons/editor/h-3.svg";
import h4Icon from "../../../public/icons/editor/h-4.svg";

export interface MenuBarHeadingCommandsProps {
  editor: Editor | null;
}

const MenuBarHeadingCommands: React.FC<MenuBarHeadingCommandsProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar__commands menu-bar__commands--heading">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <Image src={h1Icon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <Image src={h2Icon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <Image src={h3Icon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        <Image src={h4Icon} width={24} height={24} />
      </button>
    </div>
  );
};

export default MenuBarHeadingCommands;
