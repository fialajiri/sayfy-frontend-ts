import { Editor } from "@tiptap/react";
import Image from "next/image";
import allignLeftIcon from "../../../public/icons/editor/align-left.svg";
import allignCenterIcon from "../../../public/icons/editor/align-center.svg";
import allignRightIcon from "../../../public/icons/editor/align-right.svg";
import allignJustifyIcon from "../../../public/icons/editor/align-justify.svg";
import bulletListIcon from "../../../public/icons/editor/list-unordered.svg";
import orderedListIcon from "../../../public/icons/editor/list-ordered.svg";

export interface MenuBarParagraphCommandsProps {
  editor: Editor | null;
}

const MenuBarParagraphCommands: React.FC<MenuBarParagraphCommandsProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar__commands menu-bar__commands--paragraph">
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <Image src={bulletListIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <Image src={orderedListIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <Image src={allignLeftIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <Image src={allignCenterIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <Image src={allignRightIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}
      >
        <Image src={allignJustifyIcon} width={24} height={24} />
      </button>
    </div>
  );
};

export default MenuBarParagraphCommands;
