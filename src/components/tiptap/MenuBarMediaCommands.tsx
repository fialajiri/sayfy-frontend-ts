import { useCallback } from "react";
import { Editor } from "@tiptap/react";
import Image from "next/image";

import imageIcon from "../../../public/icons/editor/image-line.svg";
import videoIcon from "../../../public/icons/editor/movie-line.svg";
import LinkIcon from "../../../public/icons/editor/link.svg";
import UnlinkIcon from "../../../public/icons/editor/link-unlink.svg";

export interface MenuBarMediaCommandsProps {
  editor: Editor | null;
  showFilePicker: () => void;
}

const MenuBarMediaCommands: React.FC<MenuBarMediaCommandsProps> = ({ editor, showFilePicker }) => {
  if (!editor) {
    return null;
  }

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addYoutubeVideo = useCallback(() => {
    const url = prompt("Vložte odkaz na Youtube");
    if (!url) {
      return;
    }
    editor.commands.setYoutubeVideo({
      src: url,
      width: 480,
      height: 320,
    });
  }, [editor]);

  return (
    <div className="menu-bar__commands menu-bar__commands--media">
      <button onClick={showFilePicker}>
        <Image src={imageIcon} width={24} height={24} />
      </button>
      <button id="add" onClick={addYoutubeVideo}>
      <Image src={videoIcon} width={24} height={24} />
      </button>
      <button onClick={setLink} className={editor.isActive("link") ? "is-active" : ""}>
        <Image src={LinkIcon} width={24} height={24} />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <Image src={UnlinkIcon} width={24} height={24} />
      </button>
    </div>
  );
};

export default MenuBarMediaCommands;
