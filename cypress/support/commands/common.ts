import { selectByTestId } from '../../utils/selectByTestId';

const getByTestId = (id: string) => cy.get(selectByTestId(id));

const login = (username = 'testUser', password = '123') =>
  cy.request('POST', 'http://localhost:8000/login', { username, password }).then((res) => {
    window.localStorage.setItem('user', JSON.stringify(res.body));
    return res.body;
  });

const resetProfile = () => {
  cy.request({
    method: 'PUT',
    url: 'http://localhost:8000/profiles/3',
    headers: { Authorization: 'afasfafa' },
    body: {
      id: '3',
      userId: '3',
      firstname: 'Cayco',
      lastname: 'Jonhatan',
      age: 28,
      currency: 'USD',
      country: 'Armenia',
      city: 'Erevan',
      username: 'testUser',
      // eslint-disable-next-line max-len
      avatar:
        'https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?w=1380&t=st=1686853323~exp=1686853923~hmac=2ea8add7a7f87e9cd928bd7e7b5237531d331d46c2ba610b3b41270dc77079c5',
    },
  });
};

const createArticle = () =>
  cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: { Authorization: 'afasfafa' },
      body: {
        id: '123',
        userId: '3',
        title: 'Javascript',
        subtitle: 'Краткий пересказ всего JavaScript',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        views: 10000,
        createdAt: '28.07.2024',
        type: ['IT'],
        blocks: [
          {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
              // eslint-disable-next-line max-len
              'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
              // eslint-disable-next-line max-len
              'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
              // eslint-disable-next-line max-len
              'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
          },
        ],
      },
    })
    .then((res) => res.body);

const deleteArticle = () => {
  cy.request({
    method: 'DELETE',
    url: 'http://localhost:8000/articles/123',
    headers: { Authorization: 'afasfafa' },
  });
};

export { login, getByTestId, resetProfile, createArticle, deleteArticle };
