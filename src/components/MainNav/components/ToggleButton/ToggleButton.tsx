import { CloseIcon, OpenIcon } from '@/components/Icons';

type ToggleButtonProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({
  isOpenMenu,
  handleToggleMenu
}: ToggleButtonProps) => {
  const title = isOpenMenu ? 'Fechar menu' : 'Abrir menu';
  return (
    <button onClick={handleToggleMenu} title={title}>
      {isOpenMenu && <CloseIcon size={32} data-testid="close-icon" />}
      {!isOpenMenu && <OpenIcon size={32} data-testid="open-icon" />}
    </button>
  );
};
