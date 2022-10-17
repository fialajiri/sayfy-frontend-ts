import { Editor } from "@tiptap/react";
import arrowForwardIcon from "../../../public/icons/editor/arrow-go-forward-line.svg";
import arrowBackIcon from "../../../public/icons/editor/arrow-go-back-line.svg";
import MenuButton from "./menu-button";

export interface MenuCommandsEditProps {
  editor: Editor | null;
}

const MenuCommandsEdit: React.FC<MenuCommandsEditProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu__commands editor-menu__commands--edit">
      <MenuButton
        iconSrc={arrowBackIcon}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        helpText="zpět"
      />
      <MenuButton
        iconSrc={arrowForwardIcon}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        helpText="vpřed"
      />
    </div>
  );
};

export default MenuCommandsEdit;
