import { GetStaticProps, NextPage } from "next";
import Button from "../../components/ui-elements/button";
import { useAuth } from "../../context/auth-context";
import { PropoziceDoc } from "../../models/models";
import { getPropozice } from "../../utils/propozice/get-propozice";

interface PropozicePageProps {
    propozice:PropoziceDoc
}

const PropozicePage:NextPage<PropozicePageProps> = ({propozice}) => {
    console.log(propozice)
    const {text, title} = propozice
    const {isAdmin} = useAuth()
    return <div className="propozice__container">
        {isAdmin && <Button link="propozice/edit">Editovat</Button>}
        <h2>{title}</h2>
        <div className="propozice__html-content" dangerouslySetInnerHTML={{ __html: text }}></div>

    </div>
}

export default PropozicePage

export const getStaticProps:GetStaticProps = async() => {
    const propozice = await getPropozice()

    
  return {
    props: {
        propozice,
    },
    revalidate: 30,
  };
}

