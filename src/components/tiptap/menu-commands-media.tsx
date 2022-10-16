import { useCallback } from "react";
import { Editor } from "@tiptap/react";

import imageIcon from "../../../public/icons/editor/image-line.svg";
import videoIcon from "../../../public/icons/editor/movie-line.svg";
import LinkIcon from "../../../public/icons/editor/link.svg";
import UnlinkIcon from "../../../public/icons/editor/link-unlink.svg";
import MenuButton from "./menu-button";

export interface MenuCommandsMediaProps {
  editor: Editor | null;
  showFilePicker: () => void;
}

const MenuCommandsMedia: React.FC<MenuCommandsMediaProps> = ({ editor, showFilePicker }) => {
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
    <div className="editor-menu__commands editor-menu__commands--media">
      <MenuButton iconSrc={imageIcon} onClick={showFilePicker} />
      <MenuButton iconSrc={videoIcon} onClick={addYoutubeVideo} />
      <MenuButton
        iconSrc={LinkIcon}
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
      />
      <MenuButton
        iconSrc={UnlinkIcon}
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      />
    </div>
  );
};

export default MenuCommandsMedia;
