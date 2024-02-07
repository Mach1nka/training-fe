import { createSelector } from '@reduxjs/toolkit';

import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { RoutePath } from '@/shared/constant/router';
import { getUserId } from '@/entities/User';

import type { SidebarItemType } from '../types';

const configureSidebarList = (userId?: string): SidebarItemType[] => {
  const items: SidebarItemType[] = [
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
  ];

  if (userId) {
    items.push(
      {
        path: `${RoutePath.profile}/${userId}`,
        text: 'navigation.profilePage',
        Icon: ProfileIcon,
      },
      {
        path: RoutePath.articles,
        text: 'navigation.articlesPage',
        Icon: ArticleIcon,
      },
    );
  }

  return items;
};

export const getSidebarItemsList = createSelector(getUserId, configureSidebarList);
