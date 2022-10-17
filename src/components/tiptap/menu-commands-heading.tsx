import { Editor } from "@tiptap/react";
import h2Icon from "../../../public/icons/editor/h-2.svg";
import h3Icon from "../../../public/icons/editor/h-3.svg";
import h4Icon from "../../../public/icons/editor/h-4.svg";
import MenuButton from "./menu-button";

export interface MenuCommandsHeadingProps {
  editor: Editor | null;
}

const MenuCommandsHeading: React.FC<MenuCommandsHeadingProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu__commands editor-menu__commands--heading">
      
      <MenuButton
        iconSrc={h2Icon}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        helpText="nadpis 2"
      />
      <MenuButton
        iconSrc={h3Icon}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        helpText="nadpis 3"
      />
      <MenuButton
        iconSrc={h4Icon}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
        helpText="nadpis 4"
      />
    </div>
  );
};

export default MenuCommandsHeading;
