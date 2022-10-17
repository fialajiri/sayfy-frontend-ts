import { Editor } from "@tiptap/react";

import insertTableIcon from "../../../public/icons/editor/table-line.svg";
import deleteTableIcon from "../../../public/icons/editor/delete-table.svg";
import insertColumnLeftIcon from "../../../public/icons/editor/insert-column-left.svg";
import insertColumnRightIcon from "../../../public/icons/editor/insert-column-right.svg";
import deleteColumnIcon from "../../../public/icons/editor/delete-column.svg";
import insertRowTopIcon from "../../../public/icons/editor/insert-row-top.svg";
import insertRowBottomIcon from "../../../public/icons/editor/insert-row-bottom.svg";
import deleteRowIcon from "../../../public/icons/editor/delete-row.svg";
import MenuButton from "./menu-button";

export interface MenuCommandsTableProps {
  editor: Editor | null;
}

const MenuCommandsTable: React.FC<MenuCommandsTableProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu__commands editor-menu__commands--table">
      <MenuButton
        iconSrc={insertTableIcon}
        onClick={() =>
          editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
        }
        helpText="vložit tabulku"
      />
      <MenuButton
        iconSrc={insertColumnLeftIcon}
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        helpText="vložit sloupec vlevo"
      />
      <MenuButton
        iconSrc={insertColumnRightIcon}
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        helpText="vložit sloupec vpravo"
      />
      <MenuButton
        iconSrc={deleteColumnIcon}
        onClick={() => editor.chain().focus().deleteColumn().run()}
        helpText="smazat sloupec"
      />
      <MenuButton
        iconSrc={insertRowTopIcon}
        onClick={() => editor.chain().focus().addRowBefore().run()}
        helpText="vložit řádek dole"
      />
      <MenuButton
        iconSrc={insertRowBottomIcon}
        onClick={() => editor.chain().focus().addRowAfter().run()}
        helpText="vložit řádek nahoře"
      />
      <MenuButton
        iconSrc={deleteRowIcon}
        onClick={() => editor.chain().focus().deleteRow().run()}
        helpText="smazat řádek"
      />
      <MenuButton
        iconSrc={deleteTableIcon}
        onClick={() => editor.chain().focus().deleteTable().run()}
        helpText="smazat tabulku"
      />
    </div>
  );
};

export default MenuCommandsTable;
