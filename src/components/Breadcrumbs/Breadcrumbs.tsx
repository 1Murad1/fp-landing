import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../svg/HomeIcon';
import ArrowIcon from '../svg/ArrowIcon';

interface IBreadcrumbsProps {
	customStyle?: string
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ customStyle }) => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);
	return (
		<div className={`flex gap-2 items-center sm:mb-5 md:mb-7  ${customStyle}`}>
			<Link to="/" className="hover:text-white text-darkTextMuted"><HomeIcon /></Link>
			{pathnames.map((name, index) => {
				const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
				const isLast = index === pathnames.length - 1;
				const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

				return (
					<span key={name} className="flex items-center">
						<span className="mx-3"><ArrowIcon /></span>
						{isLast ? (
							<span className="text-white">{capitalizedName.split('-').join(' ')}</span>
						) : (
							<Link to={routeTo} className="transition-all duration-300 text-base text-darkTextMuted hover:text-white">{capitalizedName}</Link>
						)}
					</span>
				);
			})}
		</div>
	)
}

export default Breadcrumbs