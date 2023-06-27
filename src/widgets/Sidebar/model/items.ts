import { VFC, SVGProps } from 'react';

import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'navigation.mainPage',
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'navigation.aboutPage',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'navigation.profilePage',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'navigation.articlesPage',
    Icon: ArticleIcon,
    authOnly: true,
  },
];
