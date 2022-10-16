import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from '@tiptap/extension-superscript'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import Youtube from '@tiptap/extension-youtube'
import { Dispatch, Fragment, SetStateAction, useCallback, useEffect, useState } from "react";
import ModalFilePicker from "../ui-elements/modal-file-picker";
import MenuBar from "./MenuBar";

export interface TiptapProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

export interface FileData {
  file: File;
  localUrl: string;
}

const Tiptap: React.FC<TiptapProps> = ({ content, setContent }) => {
  const [isSelectingFile, setIsSelectingFile] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileData[]>([]);

  useEffect(() => {
    console.log("useeffect");
    console.log(selectedFiles);
  }, [selectedFiles]);

  useEffect(() => {
    checkIfFileWasDeleted(content, selectedFiles);
  }, [content]);

  const editor = useEditor({
    extensions: [StarterKit, Image, Subscript, Superscript, Table, TableCell, TableHeader, TableRow, TextAlign, Youtube, Link],
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
    <Fragment>
      <ModalFilePicker
        isShow={isSelectingFile}
        setFiles={setSelectedFiles}
        hide={hideModalFilePicker}
        editor={editor}
      />
      <MenuBar editor={editor} showFilePicker={showModalFilePicker} />
      <EditorContent editor={editor} />
    </Fragment>
  );
};

export default Tiptap;
