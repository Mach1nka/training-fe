export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',
  ARTICLE_EDIT = 'articleEdit',
  ARTICLE_CREATE = 'articleCreate',
  ADMIN_PANEL = 'adminPanel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'notFound',
}

export const RoutePath = {
  [AppRoutes.MAIN]: () => '/',
  [AppRoutes.ABOUT]: () => '/about',
  [AppRoutes.PROFILE]: (id: string) => `/profile/${id}`,
  [AppRoutes.ARTICLES]: () => '/articles',
  [AppRoutes.ARTICLE_DETAILS]: (id: string) => `/article/${id}`,
  [AppRoutes.ARTICLE_EDIT]: (id: string) => `/article/${id}/edit`,
  [AppRoutes.ARTICLE_CREATE]: () => '/article/new',
  [AppRoutes.ADMIN_PANEL]: () => '/admin-panel',
  [AppRoutes.FORBIDDEN]: () => '/forbidden',
  [AppRoutes.NOT_FOUND]: () => '*',
} as const;
