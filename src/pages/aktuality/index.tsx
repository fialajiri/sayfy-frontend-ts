import { NextPage } from "next";
import Button from "../../components/ui-elements/button";

const Aktuality: NextPage = () => {
  return (
    <div>
      <Button link="aktuality/new">Nová Aktualita</Button>
      <Button link="aktuality/edit/6356e7dbec421888487e85aa">Edit</Button>
    </div>
  );
};

export default Aktuality;
