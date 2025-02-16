import Sidebar from '@/components/Sidebar';
import { articlesPageData, sidebarGuideData } from '@/mockData/mockData';
import { styles } from '@/styles/styles';
import React from 'react'
import { useParams } from 'react-router-dom';
import RelatedBlock from './RelatedBlock';

export const ArticlePage: React.FC = React.memo(() => {
	const { guideId, articleId } = useParams();
	console.log(guideId, articleId)
	return (
		<div>
			<div className='relative flex justify-between items-start gap-x-20 sm:mb-14 md:mb-28'>
				<Sidebar sidebarData={sidebarGuideData} customStyle='w-max sticky top-10 sm:pt-5 xs:pt-10' />
				<div className='flex-1 flex flex-col sm:gap-y-10 md:gap-y-20'>
					{
						articlesPageData?.map((item) => (
							<div id={item.idSection} key={item.id} data-aos='fade-up' data-aos-delay={300} >
								<h4 className={`${styles.titleH4} text-white sm:mb-5 md:mb-10`}>{item.title}</h4>
								<p className={`${styles.baseText} text-white`}>{item.text}</p>
							</div>

						))
					}
				</div>
			</div>
			<RelatedBlock articleId={articleId} />
		</div>
	)
}
)

ArticlePage.displayName = 'ArticlePage';