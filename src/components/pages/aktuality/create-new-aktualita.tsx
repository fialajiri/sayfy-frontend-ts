import { useState } from "react";
import Tiptap from "../../tiptap/Tiptap";

const CreateNewAktualita: React.FC = () => {
  const [aktualitaHtml, setAktualitaHtml] = useState<string>("Hello From Editor");

  console.log(aktualitaHtml)

  return <Tiptap content={aktualitaHtml} setContent={setAktualitaHtml} />;
};

export default CreateNewAktualita;
