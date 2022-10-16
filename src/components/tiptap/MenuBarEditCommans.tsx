import { Editor } from "@tiptap/react";
import Image from "next/image";
import arrowForwardIcon from "../../../public/icons/editor/arrow-go-forward-line.svg";
import arrowBackIcon from "../../../public/icons/editor/arrow-go-back-line.svg";

export interface MenuBarEditCommandsProps {
  editor: Editor | null;
}

const MenuBarEditCommands: React.FC<MenuBarEditCommandsProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar__commands menu-bar__commands--edit">
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Image src={arrowBackIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Image src={arrowForwardIcon} width={24} height={24} />
      </button>
    </div>
  );
};

export default MenuBarEditCommands;
