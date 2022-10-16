import Image from "next/image";

enum EditorIconSize {
  WIDTH = 24,
  HEIGHT = 24,
}

export interface MenuButtonProps {
  onClick: (() => void) | (() => boolean);
  iconSrc: string;
  className?: string;
  disabled?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, disabled, iconSrc, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      <Image src={iconSrc} width={EditorIconSize.WIDTH} height={EditorIconSize.HEIGHT} layout={"fixed"}/>
    </button>
  );
};

export default MenuButton;
