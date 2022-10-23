import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import { Dispatch, Fragment, SetStateAction, useCallback, useEffect, useState } from "react";
import ModalFilePicker from "./modal-file-picker";
import MenuBar from "./menu-bar";

export interface TiptapProps {
  liteMode?: boolean;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  selectedFiles: FileData[];
  setSelectedFiles: Dispatch<SetStateAction<FileData[]>>;
}

export interface FileData {
  file: File;
  localUrl: string;
}

const Tiptap: React.FC<TiptapProps> = ({
  content,
  setContent,
  setSelectedFiles,
  selectedFiles,
  liteMode,
}) => {
  const [isSelectingFile, setIsSelectingFile] = useState(false);

  useEffect(() => {
    checkIfFileWasDeleted(content, selectedFiles);
  }, [content]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Subscript,
      Superscript,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TextAlign,
      Youtube,
      Link.configure({
        openOnClick: false,
        linkOnPaste: true,
      }),
    ],
    content: content,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  const checkIfFileWasDeleted = useCallback(
    (editorContent: string, files: FileData[]) => {
      files.forEach((file) => {
        if (!editorContent.includes(file.localUrl)) {
          setSelectedFiles(selectedFiles.filter((item) => item.localUrl !== file.localUrl));
        }
      });
    },
    [selectedFiles]
  );

  const showModalFilePicker = () => {
    setIsSelectingFile(true);
  };

  const hideModalFilePicker = () => {
    setIsSelectingFile(false);
  };

  return (
    <div className="tip-tap__container">
      <ModalFilePicker
        isShow={isSelectingFile}
        setFiles={setSelectedFiles}
        hide={hideModalFilePicker}
        editor={editor}
      />
      <MenuBar liteMode={liteMode} editor={editor} showFilePicker={showModalFilePicker} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
