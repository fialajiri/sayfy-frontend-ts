import { Editor } from "@tiptap/react";

import MenuCommandsText from "./menu-commands-text";
import MenuCommandsHeading from "./menu-commands-heading";
import MenuCommandsParagraph from "./menu-commands-paragraph";
import MenuCommandsMedia from "./menu-commands-media";
import MenuCommandsTable from "./menu-commands-table";
import MenuCommandsEdit from "./menu-commands-edit";

export interface MenuBarProps {
  liteMode?: boolean;
  editor: Editor | null;
  showFilePicker?: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor, showFilePicker, liteMode }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu__container">
      <MenuCommandsText editor={editor} />
      <MenuCommandsHeading editor={editor} />
      <MenuCommandsParagraph editor={editor} />
     {(!liteMode && showFilePicker) && <MenuCommandsMedia editor={editor} showFilePicker={showFilePicker} />}
     {!liteMode && <MenuCommandsTable editor={editor} />}
      <MenuCommandsEdit editor={editor} />
    </div>
  );
};

export default MenuBar;
