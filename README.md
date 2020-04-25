# Travel Ready 
   ![general](https://user-images.githubusercontent.com/40334272/90816348-cae48580-e334-11ea-8ca2-843268383e84.png)
 Travel Ready makes packing easy for you to figure out what items you shouldn’t forget to pack into your backpack or suitcase for your weekend, travel, or trip. App available on browser, mobile devices(IOS/Android), and desktop.
## 📱 Description
   Додаток для швидкого збору речей, валізи, у поїздку, похід чи відпустку . Я захоплююсь гірським туризмом, кожен, хто хоч раз ходив у похід знає, наскільки тяжко збирати рюкзак і речі перед ним, щоб нічого не забути). Раніше для цього використовував додаток Trello, він ідеально підходить для організації роботи, але коли потрібно швидко зібрати речі, в ньому для цих цілей не зручно організований інтерфейс, багато непотрібного функціоналу і на мобільних пристроях він часто висне.

## 💻 Technologies
   Додаток написаний на React. Для динамічної роботи зі стилізацією використав бібліотеу classnames, SASS + BEM. У якості  управління станом використав useReducer + Context. 

## 🌎 How to install 
   Додаток кросплатформний, ви можете встановити його на смартфон, комп’ютер, або користуватись у браузері. Особисто я часто використовую його на смартфоні). Додаток не потребує доступу до мережі інтернет, всі зміни зберігаються локально. 

## 💻 Implemented functionality 
   - *Діаграма моніторингу прогресу по категоріям + відображення зібраних речей/загальної кількості*
   - *Графік прогресу загально по всім категоріям + кількість зібраних речей у всіх категоріях/загальна кількість речей у всіх категоріях.*
   - *Створення категорії.*
   - *Видалення категорії*
   - *Створення задачі*
   - *Видалення задачі*
   - *Редагування задачі*
   - *PWA, додаток, який можна встановити на смартфон, комп’ютер, або користуватись у браузері.*
   - *Можливість автоматичного оновлення додатку на всіх встановлених пристроях при виході нової версії.*

## 📂 Folder structure 

 ```
   ├── dist                      /* generate build in production mode
   └── public                    /* static files
   |     ├── index.html          /* change title and static html here
   |     └── favicon
   └── src 
   |     └── assets              /* images, fonts, additional files
   |      ...   
   |     ├── components          /* react components        
   |     ├── scss                /* general style, reset & normalaize
   |     └── index.js            /* app starts here ;)
   |      ...
   ├── .babelrc                  /* babel config
   ├── .eslintrc                 /* eslint config
   ├── package.json              /* dependencies
   ├── webpack.config.dev.babel  /* webpack config for development
   ├── webpack.config.prod.babel /* webpack config for production
   └── .gitignore                /* ignore folders & files
    
```

## 🚀 Getting Started (development)
You can run aplication on your local dev environment in 5 minutes with these steps:
1. **Install Node.js** [download](https://nodejs.org/en/). 
2. **Install Yarn** [download](https://classic.yarnpkg.com/en/docs/install#windows-stable). 
3. **Clone repository** . 
4. **Install dependencies** .

   Open CLI in aplication folder and set up in a single command:
  
   ```shell
   yarn install
   
   ```
5. **Start aplication in development mode** .

   Set up in a single command in CLI:
  
   ```shell
   yarn start
   
   ```
6. **Create build and open bundle analizer** .

   Set up in a single command in CLI:
  
   ```shell
   yarn build
   
   ```

