import { AktualitaDoc } from "../../../models/models";
import Carousel from "../../carousel/carousel";

interface NewsSectionProps {
    aktuality:AktualitaDoc[]
}

const NewsSection: React.FC<NewsSectionProps> = ({aktuality}) => {
    return <section className="news-section__container">
        <h2 className="heading-secondary news-section__heading">Aktuality</h2>
        <Carousel aktuality={aktuality}/>
    </section>
};

export default NewsSection;
