import * as React from 'react';

import './header.scss';

interface HeaderProps {
	onMenuToggle?: () => void;
}

export const Header: React.StatelessComponent<HeaderProps> = ({
	onMenuToggle,
}) => {
	return (
		<header className='header'>
			<div className='header__menu-button' onClick={onMenuToggle}>Open menu</div>
		</header>
	);
}
