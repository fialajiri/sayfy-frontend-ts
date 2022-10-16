import { Editor } from "@tiptap/react";
import allignLeftIcon from "../../../public/icons/editor/align-left.svg";
import allignCenterIcon from "../../../public/icons/editor/align-center.svg";
import allignRightIcon from "../../../public/icons/editor/align-right.svg";
import allignJustifyIcon from "../../../public/icons/editor/align-justify.svg";
import bulletListIcon from "../../../public/icons/editor/list-unordered.svg";
import orderedListIcon from "../../../public/icons/editor/list-ordered.svg";
import MenuButton from "./menu-button";

export interface MenuCommandsParagraphProps {
  editor: Editor | null;
}

const MenuCommandsParagraph: React.FC<MenuCommandsParagraphProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu__commands editor-menu__commands--paragraph">
      <MenuButton
        iconSrc={bulletListIcon}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      />
      <MenuButton
        iconSrc={orderedListIcon}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      />
      <MenuButton
        iconSrc={allignLeftIcon}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      />
      <MenuButton
        iconSrc={allignCenterIcon}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      />
      <MenuButton
        iconSrc={allignRightIcon}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      />
      <MenuButton
        iconSrc={allignLeftIcon}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      />
      <MenuButton
        iconSrc={allignJustifyIcon}
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}
      />
    </div>
  );
};

export default MenuCommandsParagraph;
