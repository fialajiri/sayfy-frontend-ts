import { Editor } from "@tiptap/react";

import MenuBarTextCommands from "./MenuBarTextCommands";
import MenuBarHeadingCommands from "./MenuBarHeadingCommans";
import MenuBarTableCommands from "./MenuBarTableCommands";
import MenuBarEditCommands from "./MenuBarEditCommans";

import { Fragment } from "react";
import MenuBarParagraphCommands from "./MenuBarParagraphCommans";
import MenuBarMediaCommands from "./MenuBarMediaCommands";

export interface MenuBarProps {
  editor: Editor | null;
  showFilePicker: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor, showFilePicker }) => {
  if (!editor) {
    return null;
  }

  return (
    <Fragment>
      <MenuBarTextCommands editor={editor} />
      <MenuBarHeadingCommands editor={editor} />
      <MenuBarParagraphCommands editor={editor} />
      <MenuBarMediaCommands editor={editor} showFilePicker={showFilePicker} />
      <MenuBarTableCommands editor={editor} />
      <MenuBarEditCommands editor={editor} />
    </Fragment>
  );
};

export default MenuBar;
