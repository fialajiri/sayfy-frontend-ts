import { Editor } from "@tiptap/react";
import Image from "next/image";

import insertTableIcon from "../../../public/icons/editor/table-line.svg";
import deleteTableIcon from "../../../public/icons/editor/delete-table.svg";
import insertColumnLeftIcon from "../../../public/icons/editor/insert-column-left.svg";
import insertColumnRightIcon from "../../../public/icons/editor/insert-column-right.svg";
import deleteColumnIcon from "../../../public/icons/editor/delete-column.svg";
import insertRowTopIcon from "../../../public/icons/editor/insert-row-top.svg";
import insertRowBottomIcon from "../../../public/icons/editor/insert-row-bottom.svg";
import deleteRowIcon from "../../../public/icons/editor/delete-row.svg";

export interface MenuBarTableCommandsProps {
  editor: Editor | null;
}

const MenuBarTableCommands: React.FC<MenuBarTableCommandsProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar__commands menu-bar__commands--table">
      <button
        onClick={() =>
          editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
        }
      >
        <Image src={insertTableIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().addColumnBefore().run()}>
        <Image src={insertColumnLeftIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
        <Image src={insertColumnRightIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().deleteColumn().run()}>
        <Image src={deleteColumnIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().addRowBefore().run()}>
        <Image src={insertRowTopIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().addRowAfter().run()}>
        <Image src={insertRowBottomIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().deleteRow().run()}>
        <Image src={deleteRowIcon} width={24} height={24} />
      </button>
      <button onClick={() => editor.chain().focus().deleteTable().run()}>
        <Image src={deleteTableIcon} width={24} height={24} />
      </button>
    </div>
  );
};

export default MenuBarTableCommands;
