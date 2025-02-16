import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import { styles } from '@/styles/styles';
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import ArticlesBlock from './ArticlesBlock';

export const GuidePage: React.FC = React.memo(() => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);
	const pathname = pathnames[pathnames.length - 1];
	const capitalizedName = pathname.charAt(0).toUpperCase() + pathname.slice(1);
	return (
		<div className='sm:pt-28 md:pt-52'>
			<div className={`${styles.container}`}>
				<Breadcrumbs />
				<h3 className={`${styles.titleH3} sm:mb-6 md:mb-20`}>{capitalizedName.split('-').join(' ')}</h3>
				{
					pathnames?.length === 2 && <ArticlesBlock />
				}
				<Outlet />
			</div>
			<SubscribeUs customStyle='sm:my-20 md:my-40' />
		</div>
	)
}

)

GuidePage.displayName = 'GuidePagePage';
