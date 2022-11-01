import Image from "next/image";

enum EditorIconSize {
  WIDTH = 24,
  HEIGHT = 24,
}

export interface MenuButtonProps {
  onClick: (() => void) | (() => boolean);
  iconSrc: string;
  helpText: string;
  className?: string;
  disabled?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  onClick,
  disabled,
  iconSrc,
  className,
  helpText,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className} type="button">
      <Image
        src={iconSrc}
        width={EditorIconSize.WIDTH}
        height={EditorIconSize.HEIGHT}
        layout={"fixed"}
        alt="editor button icon"
      />
      <p>{helpText}</p>
    </button>
  );
};

export default MenuButton;
