import { Editor } from "@tiptap/react";

import boldIcon from "../../../public/icons/editor/bold.svg";
import ItalicIcon from "../../../public/icons/editor/italic.svg";
import strikeThroughIcon from "../../../public/icons/editor/strikethrough.svg";
import separatorIcon from "../../../public/icons/editor/separator.svg";
import spaceIcon from "../../../public/icons/editor/space.svg";
import subscriptIcon from "../../../public/icons/editor/subscript.svg";
import superscriptIcon from "../../../public/icons/editor/superscript.svg";
import MenuButton from "./menu-button";

export interface MenuCommandsTextProps {
  editor: Editor | null;
}

const MenuCommandsText: React.FC<MenuCommandsTextProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu__commands editor-menu__commands--text">
      <MenuButton
        iconSrc={boldIcon}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
        helpText="tučné"
      />
      <MenuButton
        iconSrc={ItalicIcon}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
        helpText="kurzíva"
      />
      <MenuButton
        iconSrc={strikeThroughIcon}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
        helpText="přeškrtnuté"
      />
      <MenuButton
        iconSrc={superscriptIcon}
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={editor.isActive("superscript") ? "is-active" : ""}
        helpText="horní index"
      />
      <MenuButton
        iconSrc={subscriptIcon}
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={editor.isActive("subscript") ? "is-active" : ""}
        helpText="dolní index"
      />
      <MenuButton
        iconSrc={separatorIcon}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        helpText="dělící čára"
      />
      <MenuButton
        iconSrc={spaceIcon}
        onClick={() => editor.chain().focus().setHardBreak().run()}
        helpText="mezera"
      />
    </div>
  );
};

export default MenuCommandsText;
