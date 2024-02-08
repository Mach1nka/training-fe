import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleView, ArticleBlockType, ArticleType } from '@/entities/Article/model/const';
import type { Article } from '@/entities/Article';
import { routerDecorator, storeDecorator } from '@/shared/lib/storybook/decorators';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import DefaultImage from '@/shared/assets/tests/storybookPlug.jpg';

import { wallOfArticlesReducer } from '../../model/slice/wallOfArticlesSlice';

import { WallOfArticles } from './WallOfArticles';

const initialReducers: ReducersList = {
  wallOfArticles: wallOfArticlesReducer,
};

const state: Article[] = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'username',
    },
    title: 'Javascript - язык программирования',
    subtitle: 'Краткий пересказ всего JavaScript',
    img: DefaultImage,
    views: 15,
    createdAt: '28.05.2020',
    type: [ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
          'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
          'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
          'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
      },
    ],
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'admin',
    },
    title: 'Kotlin - язык программирования',
    subtitle: 'Краткий пересказ всего Kotlin',
    img: DefaultImage,
    views: 10,
    createdAt: '20.05.2022',
    type: [ArticleType.IT, ArticleType.ECONOMICS],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
    ],
  },
];

export default {
  title: 'widgets/WallOfArticles',
  component: WallOfArticles,
  decorators: [routerDecorator()],
} as ComponentMeta<typeof WallOfArticles>;

const Template: ComponentStory<typeof WallOfArticles> = (args) => <WallOfArticles {...args} />;

export const Tile = Template.bind({});
Tile.decorators = [storeDecorator({
  wallOfArticles: {
    data: state,
    view: ArticleView.TILE,
    filters: {
      type: ArticleType.ALL,
    },
  },
}, initialReducers)];

export const List = Template.bind({});
List.decorators = [
  storeDecorator({
    wallOfArticles: {
      data: state,
      view: ArticleView.LIST,
      filters: {
        type: ArticleType.ALL,
      },
    },
  }, initialReducers),
];

export const Loading = Template.bind({});
Loading.decorators = [storeDecorator({
  wallOfArticles: {
    hasMore: false,
    isLoading: true,
    filters: {
      type: ArticleType.ALL,
    },
  },
}, initialReducers)];

export const Error = Template.bind({});
Error.decorators = [storeDecorator({
  wallOfArticles: {
    error: 'error text',
    filters: {
      type: ArticleType.ALL,
    },
  },
}, initialReducers)];
