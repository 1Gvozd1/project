import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string; // для того чтобы извне поправить отступы, изменить размер
}

export function ThemeSwitcher({ className }:ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? (
                <DarkIcon />
            ) : (
                <LightIcon />
            )}
            {' '}
            {/* переключаем иконки в зависимости от темы */}
        </Button>

    );
}
