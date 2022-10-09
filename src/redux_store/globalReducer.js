import { createSlice } from "@reduxjs/toolkit";

export const globalReducer = createSlice({
    name: 'global',
    initialState: {
        // Объект с основной информацией фонда
        mainInfo: {
            footerText: 'У цьому розділі ви знайдете інформацію про наші контакти. Ви завжди можете написати або зателефонувати, якщо вам потрібна допомога або ви хочете залишити пропозицію та побажання. Чекаємо від вас дзвінків та зворотного зв\'язку.',
            phone: '+38-044-300-2813',
            email: 'found@eaf.world',
            address: ['м. Київ, вул. Хорива 7.', 'м. Тернопіль вул.Об\'їзна 14'],
            contactsText: 'У цьому розділі ви знайдете інформацію про наші контакти. Ви завжди можете написати або зателефонувати, якщо вам потрібна допомога або ви хочете залишити пропозицію та побажання. Чекаємо від вас дзвінків та зворотного зв \'язку.',
            socials: [
                {
                    social: 'twi',
                    link: 'https://twitter.com/FundEuropean',
                },
                {
                    social: 'fb',
                    link: 'https://www.facebook.com/profile.php?id=100085327899179',
                },
                {
                    social: 'inst',
                    link: 'https://www.instagram.com/european.assistance.fund/',
                },
                {
                    social: 'yt',
                    link: 'https://www.youtube.com/channel/UCW4d5wA3u9XEvGlOfo8DeQQ',
                },
                {
                    social: 'tt',
                    link: 'https://www.tiktok.com/@europeanassistance_fund',
                },
                {
                    social: 'wsp',
                    link: 'https://chat.whatsapp.com/CvDFtMHXOto2I7NXggeRsu',
                },
                {
                    social: 'vbr',
                    link: 'http://invite.viber.com/?g2=AQA2zbXJT9juFk%2B%2FchzKlehPOjy47Zoi4F%2F1wkmz9rIfjlBTzCzGCVDAVdCvGE01',
                },
                /* {
                    social: 'in',
                    link: 'https://www.linkedin.com/',
                }, */
            ],
            map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72953682608!2d-0.24202321966301887!3d51.52877143099761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1663230076450!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
        },
        // Объект содержащий контент для страницы о нас
        aboutPage: {
            mission: [
                {
                    id: 1,
                    images: ['about_eaf1.jpeg', 'about_eaf2.jpg'],
                    smallTitle: 'Місія',
                    bigTitle: 'Місія фонду',
                    text: 'Європейський фонд допомоги було засновано 22 червня 2022р. у місті Юрмала, Латвія. Наша команда молодих енергійних людей, яким не чуже почуття співчуття та чуйності. Благодійний фонд реалізує власні проекти, бере участь у фінансуванні волонтерів — однодумців, які так само, як і ми розуміють, що діти — це наше майбутнє.',
                },
                {
                    id: 2,
                    images: ['about_eaf3.jpg', 'about_eaf4.jpg'],
                    smallTitle: 'Цінності',
                    bigTitle: 'Наші цінності',
                    text: <ul>
                        <li>людяність</li>
                        <li>прозорість</li>
                        <li>партнерство</li>
                        <li>експертність</li>
                        <li>амбітність</li>
                    </ul>,
                },
                {
                    id: 3,
                    images: ['about_eaf5.jpg', 'about_eaf6.jpg'],
                    smallTitle: '',
                    bigTitle: '',
                    text: 'Ми об\'єднуємо ресурси активних небайдужих людей і компаній для вирішення соціальних проблем. Фонд дає можливість кожному долучитись не тільки співчуттям, а й стати учасником конкретних дій задля сталого розвитку якості життя. Адже тільки спільними зусиллями благодійних організацій і небайдужих людей, ми зможемо змінити цей світ на краще. Ми віримо, що можемо все!',
                },
                /* {
                    id: 2,
                    video: 'video1.mp4',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress. In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives.',
                }, */
            ],
            /* history: [
                {
                    year: '2008',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2008',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2012',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2012',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2016',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2016',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2019',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2019',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
                {
                    year: '2022',
                    img: 'newsIMG.jpg',
                    title: 'First cause after registration.2022',
                    text: 'We can\'t achieve our goals on our own.We work together with businesses, government, and nonprofits, and each partner plays a specific role in accelerating progress.In many cases, the private and public sectors, acting either separately or together, meet people’s needs.But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, In many cases, the private and public sectors, acting either separately or together, meet people’s needs. But there are gaps, spaces where some people don’t get what they need to live healthy, productive lives. We can\'t achieve our goals on our own. We work together with businesses, ',
                },
            ] */
        },
        // Массив со всеми новостями
        news: [
            {
                id: 1,
                img: 'newsIMG1.PNG',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'Британська благодійна організація має намір встановити світовий рекорд за кількістю зданої крові за один день.',
                newDate: new Date('2022-10-07'),
                categories: ['charity', 'education'], // Это слаги категорий новостей из объекта newsCategories
                views: 498,
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'Британська благодійна організація намагається встановити світовий рекорд за кількістю зданої крові за один день, щоб довести, наскільки це швидко та просто. Захід був організований мусульманською благодійною організацією соціальної справедливості« Who Is Hussaine ? »у партнерстві з NHS Blood and Transplant та направлено на порятунок 150 000 життів по всьому світу.У суботу кров здали 350 медичних центрів у 23 країнах.«Просто зробивши це, лише пожертвувавши кілька хвилин, ви можете врятувати три життя.Це неймовірно», —каже піклувальник Мохамедалі Гокал.',
                    },
                    /* {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    }, */
                ],
            },
            {
                id: 2,
                img: 'newsIMG2.PNG',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'LEGO Foundation виділяє 13,4 млн доларів на освітні програми в Україні',
                newDate: new Date('2022-10-07'),
                categories: ['charity', 'education'], // Это слаги категорий новостей из объекта newsCategories
                views: 498,
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'Фонд LEGO оголосив про виділення грантів на загальну суму 100 мільйонів данських крон (13,4 мільйона доларів США) на підтримку відродження системи освіти України та задоволення освітніх потреб українських дітей та сімей, які виїхали до Молдови, Румунії та інших сусідніх країн.',
                    },
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'Гранти допоможуть фінансувати основні послуги для українських сімей, вчителів та дітей, які поширюватимуться партнерами фонду, включаючи ЮНІСЕФ, Спільну організацію психічного здоров\'я та психосоціальної підтримки та Peppy Pals, та координуються Українським освітнім кластером та Міністерством освіти України.Крім того, LEGO Foundation безпосередньо передаватиме обладнання освітнім установам.',
                    },
                    /* {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    }, */
                ],
            },
            {
                id: 3,
                img: 'newsIMG3.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'Топ-5 людей у світі, які жертвують найбільше коштів на благодійність',
                newDate: new Date('2022-10-07'),
                categories: ['charity', 'education'], // Это слаги категорий новостей из объекта newsCategories
                views: 498,
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'Познайомтесь з людьми з великим серцем і щедрою душою:',
                    },
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: '1. Білл Гейтс. Власний капітал: 12 670 крор доларів США(2021) Forbes Довічні пожертвування: 27 мільярдів доларів',
                    },
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: '2. Уоррен Баффет. Власний капітал: 10 810 крор доларів США(2021) Forbes Довічні пожертвування: 21, 5 мільярда доларів',
                    },
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: '3. Джордж Сорос. Власний капітал: 860 крор доларів США(2021) Forbes Довічні пожертвування: 8 мільярдів доларів',
                    },
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: '4. Азім Премджі. Власний капітал: 930 крор доларів США(2021) Forbes Довічні пожертвування: 8 мільярдів доларів',
                    },
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: '5. Чарльз Френсіс Фіні. Власний капітал: 2 мільйони доларів США(пожертвування: 8 мільярдів доларів США) Довічні пожертвування: 6, 3 мільярда доларів.',
                    },
                    /* {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    }, */
                ],
            },
            {
                id: 4,
                img: 'newsIMG4.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'Україну з першого дня війни до 10 червня покинули 4,8 мільйона осіб.',
                newDate: new Date('2022-10-07'),
                categories: ['charity', 'education'], // Это слаги категорий новостей из объекта newsCategories
                views: 498,
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'За цей же період в країну в\'їхало понад 2 мільйони громадян. Такі дані, посилаючись на статистику Державної прикордонної служби України, повідомила директор Інституту демографії та соціальних досліджень Елла Лібанова в ефірі інформаційного телемарафону. За словами Лібанової, якщо гаряча фаза війни завершиться швидко, в Україну не повернуться від 500 до 600 тисяч осіб, а якщо триватиме, то українські громадяни будуть їхати якнайдалі від України, і, у разі, якщо знімуть заборону на виїзд чоловіків, кількість тих, хто виїхав досягне 5 мільйонів осіб.',
                    },
                    /* {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    }, */
                ],
            },
            /* {
                id: 2,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America2',
                newDate: 1662885455341,
                categories: ['charity', 'ukrain2022'],
                views: 135,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 3,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America3',
                newDate: 1662185455341,
                categories: ['charity'],
                views: 468,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 4,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America4',
                newDate: 1662185455341,
                categories: ['charity', 'ukrain2022'],
                views: 4568,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 5,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America5',
                newDate: 1662185455341,
                categories: ['charity', 'ukrain2022', 'education'],
                views: 10,
                content: [
                    {
                        type: 'text',
                        text: 'It Lorem7 is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 6,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America6',
                newDate: 1662185455341,
                categories: ['charity'],
                views: 84,
                content: [
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, {
                id: 7,
                img: 'newsIMG.jpg',
                author: {
                    avatar: 'authorAvatar.png',
                    Name: 'John Omnik',
                },
                title: 'The impact of philanthropy on people in America7',
                newDate: 1663055455341,
                categories: ['charity', 'education'],
                views: 8,
                content: [
                    {
                        type: 'text',
                        text: 'Lorem7 It is a long established7 fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                    {
                        type: 'text',
                        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
                    },
                ],
            }, */
        ],
        // Массив со всеми событиями
        events: [
            {
                id: 1,
                eventStart: new Date('2022-09-09'), // Время начала события
                eventEnd: new Date('2022-09-09'), // Время окончания события
                title: 'Допомога дому малюток у м.Ворзель, Київської області',
                excerpt: 'Наш фонд European Assistance Fund взяв на себе зобов’язання, ні дня без добрих справ, та хочемо цей слоган зробити нашим девізом!',
                mainText: 'Наш фонд European Assistance Fund взяв на себе зобов’язання, ні дня без добрих справ, та хочемо цей слоган зробити нашим девізом! Сьогодні ділимося з вами звітом на запит, який надійшов до нас з дому малюток у м.Ворзель, Київської області.Діти потребували гуманітарної допомоги: продукти, засоби гігієни, канцелярія тощо. Також у них гостро стоїть питання будівництва котельні, так як зима не за горами. Тому наш Фонд за підтримки небайдужих людей та організацій намагатиметься допомогти, адже діти наше майбутнє!',
                img: 'event1.png',
                videos: [/* 'event1.mp4' */],
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
            {
                id: 2,
                eventStart: new Date('2022-09-10'), // Время начала события
                eventEnd: new Date('2022-09-10'), // Время окончания события
                title: 'Будівництво котельні в будинку малюток у м. Ворзель, Київської області',
                excerpt: 'Як ми вже й казали, основний напрямок програми #StandWithUkraine  – це допомога дітям найважчих категорій.',
                mainText: 'Як ми вже й казали, основний напрямок програми #StandWithUkraine  – це допомога дітям найважчих категорій. Тому сьогодні ми ділимося з вами невеликим звітом, як наші браві хлопці справляються з будівництвом котельні для будинку малюток у м. Ворзель, Київської обл. Хлопці ми дуже вдячні вам за ваше бажання та прагнення допомагати. Ось що означає командна робота.',
                img: 'event1.png',
                videos: [/* 'event2.mp4' */],
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
            {
                id: 3,
                eventStart: new Date('2022-09-11'), // Время начала события
                eventEnd: new Date('2022-09-11'), // Время окончания события
                title: 'Допомога школі в с. Бузова, Київської області',
                excerpt: 'Сьогодні ми хочемо розповісти вам про школу в с. Бузова, Київської області. Цей навчальний заклад має трагічну історію, як і багато інших у нашій країні.',
                mainText: 'Сьогодні ми хочемо розповісти вам про школу в с. Бузова, Київської області. Цей навчальний заклад має трагічну історію, як і багато інших у нашій країні.Школа потрапила під обстріл російської армії та потребує відновлення.Наш фонд докладає максимум зусиль для допомоги у цій непростій ситуації.Тому просимо приєднатися всіх бажаючих!Разом ми сила!Перемога буде за нами!',
                img: 'event1.png',
                videos: [/* 'event3.mp4' */],
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
            {
                id: 4,
                eventStart: new Date('2022-09-15'), // Время начала события
                eventEnd: new Date('2022-09-15'), // Время окончания события
                title: 'Запит на обладнання бомбосховища від Тернопільської спеціальної загальноосвітньої школи',
                excerpt: 'Нещодавно до нас надійшов запит від Тернопільської спеціальної загальноосвітньої школи, де навчаються діти з особливими освітніми потребами. Завдання стояло не просто обладнати бомбосховище для цих діток, а створити необхідну атмосферу і умови для навчання.',
                mainText: 'Нещодавно до нас надійшов запит від Тернопільської спеціальної загальноосвітньої школи, де навчаються діти з особливими освітніми потребами. Завдання стояло не просто обладнати бомбосховище для цих діток, а створити необхідну атмосферу і умови для навчання. Але один із важливих критеріїв був дотримання санітарних та естетичних норм, оскільки ці дітки потребують особливого догляду. Наша команда докладає максимальних зусиль, щоб вирішити це нелегке завдання і дати цим діткам безпеку і комфорт, не дивлячись на ситуацію, що відбувається навколо.Адже всі діти заслуговують лише на найкраще і на гарну долю.',
                img: 'event1.png',
                videos: [/* 'event4.mp4' */],
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
            {
                id: 5,
                eventStart: new Date('2022-10-02'), // Время начала события
                eventEnd: new Date('2022-10-02'), // Время окончания события
                title: 'Відвідали табір для біженців у м. Серрес, Греція',
                excerpt: 'За підтримки Димитріадіса Димитріос, Консульства України в Салоніках та Богдана Каричківського - European Assistance Fund та його програма Stand With Ukraine, волонтери якої відвідали табір для біженців з України у місті Серрес, Греція.',
                mainText: 'За підтримки Димитріадіса Димитріос, Консульства України в Салоніках та Богдана Каричківського - European Assistance Fund та його програма Stand With Ukraine, волонтери якої відвідали табір для біженців з України у місті Серрес, Греція. Там перебувають понад 100 українців, із них 45 дітей. Надали продукти харчування, предмети особистої гігієни. Провели первинну консультацію з міграційних питань для переселенців. Друзі як ви бачите в наших постах, рука поміччі не має межі ми намагаємося дотягнутися до кожного з вас. Тому ми завжди говоримо, що тільки разом, спільними силами ми можемо змінити цей світ на краще.',
                img: 'event1.png',
                videos: [/* 'event5.mp4' */],
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
            {
                id: 6,
                eventStart: new Date('2022-10-05'), // Время начала события
                eventEnd: new Date('2022-10-05'), // Время окончания события
                title: 'Організація свята для дітей із неблагополучних сімей',
                excerpt: 'Влаштувати це свято для дітей була справжня радість для працівників нашого Фонду. Бачити їх посмішки наша з вами нагорода. Діток розважали аніматори різноманітними конкурсами та іграми.',
                mainText: 'Влаштувати це свято для дітей була справжня радість для працівників нашого Фонду. Бачити їх посмішки наша з вами нагорода. Діток розважали аніматори різноманітними конкурсами та іграми. Малечі був проведений майстер клас по малюванню. А в кінці кожен отримав свій подарунок, за це також варто окремо подякувати нашим партнерам Flo. Для того аби провести більше таких заходів нам безумовно не впоратись без вашої підтримки, кожне пожертвування 5,10,50 гривень дуже важливі у такій великій добрій справі. Долучайтесь і Ви, ніхто не має відбирати дитинство у таких прекрасних діток. Реквізити ви можете знайти на нашому сайті. Дякуємо кожному за підтримку!',
                img: 'event1.png',
                videos: [/* 'event6.mp4' */],
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
            {
                id: 7,
                eventStart: new Date('2022-10-07'), // Время начала события
                eventEnd: new Date('2022-10-07'), // Время окончания события
                title: 'Повернення сім\'ї з Миколаєва з Греції додому',
                excerpt: 'Ця довга та важка історія про сім\'ю з Миколаєва. Жінка з 2 дітьми та мамою - інвалідом змушена була виїхати з Миколаєва, оскільки російські війська розбомбили їхню домiвку.',
                mainText: 'Ця довга та важка історія про сім\'ю з Миколаєва.Жінка з 2 дітьми та мамою - інвалідом змушена була виїхати з Миколаєва, оскільки російські війська розбомбили їхню домiвку.Після тривалого та тяжкого перебування у таборі вони вирішили повернутися до України, але фінансова можливість та мовний бар’ єр стали на дорозі у цієї сім’ ї.Поки вони не натрапили на наш Фонд.Тож завдяки вам, друзі, зборам та нашим волонтерам ми зробили все, щоб відправити цих людей додому, адже де б ти не був - вдома завжди краще. Не будьте байдужими, долучайтесь до наших програм з допомоги!Разом ми зможемо набагато більше!',
                img: 'event1.png',
                videos: [/* 'event7_1.mp4', 'event7_2.mp4' */],
                map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.72724552054!2d30.392265859331747!3d50.40216982544925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2s!4v1663012520608!5m2!1sru!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
            },
        ],
        // Массив для блока со статистикой
        stats: [
            {
                id: 1,
                title: 'Грошова підтримка',
                icon: 'moneySupport_icon.svg',
                link: '/',
            },
            {
                id: 2,
                title: 'Інформаційна підтримка',
                icon: 'infoSupport_icon.svg',
                link: '/',
            },
            {
                id: 3,
                title: 'Партнерство та співробітництво',
                icon: 'partnership_icon.svg',
                link: '/',
            },
        ],
        // Массив со всеми донатами
        causes: [
            {
                id: 1,
                img: 'standWithUkraine3.jpg',
                title: '#Stand with UKRAINE',
                text: 'У зв\'язку з військовими діями в Україні та гуманітарними проблемами, що їх супроводжують, члени Фонду вирішили розробити гуманітарну Програму« Stand with Ukraine» Бенефіціари Програми« Stand with Ukraine»',
                goal: 100,
                raised: 80,
                supporter: 8215,
                donators: 90560,
                categories: ['charity', 'education'], // Это слаги категорий донатов из объекта causesCategories
                content: [
                    {
                        // Если текстовый блок то type text
                        type: 'text',
                        text: 'У зв\'язку з військовими діями в Україні та гуманітарними проблемами, що їх супроводжують, члени Фонду вирішили розробити гуманітарну Програму« Stand with Ukraine» Бенефіціари Програми« Stand with Ukraine» ',
                    },
                    /* {
                        // Если блок с картинками то type img
                        type: 'img',
                        imgs: ['aboutSectionImg1.jpg', 'aboutSectionImg2.jpg']
                    }, */
                    {
                        type: 'text',
                        text: 
                        <ul>
                            <li>Бенефіціари Програми «Stand with Ukraine»:</li>
                            <li>Діти сироти;</li>
                            <li>Діти з особливими потребами;</li>
                            <li>Діти, у яких живим залишився один з батьків;</li>
                            <li>Діти із малозабезпечених сімей;</li>
                            <li>Внутрішньо переміщені особи;</li>
                            <li>Малозабезпечені жителі України, які виїхали до країн Європейського Союзу після 24.02.2022 р.;</li>
                        </ul>,
                    },
                    {
                        type: 'text',
                        text: 'Допомога бенефіціарам. Фонд планує надавати адресну допомогу на території всієї України бенефіціарам програми Stand with Ukraine, від яких надійшли запити на надання гуманітарної, фінансової допомоги. Представники Фонду знаходяться у таких містах України, як Київ, Суми, Тернопіль, Вінниця. З розвитком програми« Stand with Ukraine» географія присутності Фонду в Україні може розширитися.У зв\'язку з розвитком поштових сервісів в Україні Фонд може надавати допомогу навіть у містах, де немає представників Фонду.',
                    },
                    {
                        type: 'text',
                        text: 'Допомога установам. Представники Фонду фіксуватимуть пошкодження шкіл, дитячих будинків, які постраждали внаслідок військових дій в Україні, для огляду та подальшого надання допомоги. Фонд може відкривати збір та залучати кошти на реконструкцію шкіл, дитячих будинків та інших об\'єктів. Програма Фонду "Європейський фонд допомоги" Stand with Ukraine Фонд« Європейський фонд допомоги». Фонд може відкривати збір та залучати кошти на реконструкцію шкіл, дитячих будинків та інших об\'єктів. (далі— Фонд) згідно зі статутом створений для виконання таких цілей: ',
                    },
                    {
                        type: 'text',
                        text: 
                        <ul>
                            <li>Надання гуманітарної допомоги жертвам війни та стихійних лих;</li>
                            <li>Забезпечення розширення освітніх можливостей та доступності інформаційних технологій;</li>
                            <li>Надання допомоги онкохворим;</li>
                            <li>Надання гуманітарної допомоги постраждалим від війни та стихійних лих в Україні;</li>
                            <li>Підтримка забезпечення ліками нужденних;</li>
                            <li>Надання допомоги у евакуації тварин;</li>
                            <li>Збір пакетів допомоги;</li>
                            <li>Забезпечення підтримки для збору транспортних засобів допомоги;</li>
                            <li>Надання допомоги у наданні тимчасового житла;</li>
                            <li>Надання допомоги у евакуації мирних жителів;</li>
                            <li>Надання підтримки проектам NFT;</li>
                            <li>Надання підтримки у створенні культурних заходів;</li>
                            <li>Надання підтримки в організації заходів щодо зміцнення здоров'я;</li>
                            <li>Підтримка організації спортивних заходів;</li>
                        </ul>,
                    },

                    /* {
                        // Если блок с вопросом в аккордеоне то type question
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                    {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    },
                    {
                        type: 'question',
                        question: 'Do you give to charity or volunteer?',
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need.',
                    }, */
                ],
            }, {
                id: 2,
                img: '1.jpg',
                title: 'Надання гуманітарної допомоги жертвам війни та стихійних лих',
                text: 'На жаль, надзвичайні ситуації є частиною нашого повсякденного життя. У світі відбуваються різні трагічні події: війни, стихійні лиха, аварії, пожежі і міжособистісне насильство. Переміщеними можуть бути окремі люди, сім\'ї і цілі спільноти.Люди втрачають будинки, близьких, виявляються відірваними від сім\'ї і звичного оточення або стають свідками насильства, руйнувань і смерті.',
                goal: 16500,
                raised: 12000,
                supporter: 8215,
                donators: 36560,
                categories: ['education'],
                content: [
                    {
                        type: 'text',
                        text: 'На жаль, надзвичайні ситуації є частиною нашого повсякденного життя. У світі відбуваються різні трагічні події: війни, стихійні лиха, аварії, пожежі і міжособистісне насильство. Переміщеними можуть бути окремі люди, сім\'ї і цілі спільноти.Люди втрачають будинки, близьких, виявляються відірваними від сім\'ї і звичного оточення або стають свідками насильства, руйнувань і смерті.',
                    },
                    {
                        type: 'text',
                        text: 'Але не можна не помітити, що такі сумні події нашого життя також пробуджують найкращі людські ресурси, зокрема ресурси співчуття, підтримки, взаємодопомоги. Посилення громадського, волонтерського руху є тому підтвердженням.',
                    },
                    {
                        type: 'text',
                        text: 'Тому і наш фонд не міг пройти повз такий напрям. Наші волонтери знаходяться в різних точках планети і ми намагаємося дотягнутися до кожного, хто цього  потребує всіма можливими способами. Але у цьому напрямі дуже важко визначитись із чіткою стратегією допомоги. Тому всі залишені заявки обробляються нами вручну для більш ефективного пошуку виходу із тієї чи іншої ситуації.',
                    },
                ],
            }, {
                id: 3,
                img: 'IT.jpg',
                title: 'Забезпечення розширення освітніх можливостей та доступності інформаційних технологій',
                text: 'Освіта - основа розвитку особистості, суспільства, нації та держави. Вона є визначальним чинником політичної, соціально-економічної, культурної та наукової життєдіяльності суспільства. Освіта відтворює і нарощує інтелектуальний, духовний та економічний потенціал суспільства.',
                goal: 16500,
                raised: 12000,
                supporter: 8215,
                donators: 36560,
                categories: ['education'],
                content: [
                    {
                        type: 'text',
                        text: 'Освіта - основа розвитку особистості, суспільства, нації та держави. Вона є визначальним чинником політичної, соціально-економічної, культурної та наукової життєдіяльності суспільства. Освіта відтворює і нарощує інтелектуальний, духовний та економічний потенціал суспільства.',
                    },
                    {
                        type: 'text',
                        text: 'Освіта є  стратегічним  ресурсом  поліпшення добробуту людей, забезпечення  національних  інтересів,  зміцнення   авторитету і конкурентоспроможності людини.',
                    },
                    {
                        type: 'text',
                        text: 'Пріоритетом   розвитку  освіти  є  впровадження  сучасних інформаційно комунікаційних  технологій,  що  забезпечують  удосконалення    навчально-виховного   процесу,   доступність   та ефективність   освіти,   підготовку    молодого    покоління    до життєдіяльності в інформаційному суспільстві.',
                    },
                    {
                        type: 'text',
                        text: 'Завдяки нашій співпраці з низкою компаній, які сприяють розвитку інформаційних технологій, ми беремо активну участь у підвищенні рівня освіти людини, підтримуючи проекти від наших однодумців як фінансово, так і інформаційно.',
                    },
                ],
            }, {
                id: 4,
                img: 'sport.jpg',
                title: 'Підтримка організацій спортивних заходів',
                text: 'Пріоритетним  завданням програми є виховання людини в дусі відповідального ставлення до власного здоров\'я і здоров\'я оточуючих як до найвищої індивідуальної і суспільної цінності. Фізичне виховання як невід\'ємна   складова   освіти забезпечує  можливість  набуття  кожною людиною необхідних науково обгрунтованих знань про здоров\'я і засоби його зміцнення, про шляхи і методи протидії хворобам, про методики досягнення високої працездатності та тривалої творчої активності.',
                goal: 16500,
                raised: 12000,
                supporter: 8215,
                donators: 36560,
                categories: ['education'],
                content: [
                    {
                        type: 'text',
                        text: 'Пріоритетним  завданням програми є виховання людини в дусі відповідального ставлення до власного здоров\'я і здоров\'я оточуючих як до найвищої індивідуальної і суспільної цінності. Фізичне виховання як невід\'ємна   складова   освіти забезпечує  можливість  набуття  кожною людиною необхідних науково обгрунтованих знань про здоров\'я і засоби його зміцнення, про шляхи і методи протидії хворобам, про методики досягнення високої працездатності та тривалої творчої активності.',
                    },
                    {
                        type: 'text',
                        text: 'Отож наш Фонд старанно працює над удосконаленням та впровадженням ефективних форм залучення різних груп населення до регулярних занять фізичною культурою і спортом, методом  матеріально-технічної та інформаційної підтримки організацій фізичного виховання.',
                    },
                ],
            }, {
                id: 4,
                img: 'nft.jpg',
                title: 'Надання підтримки проектам NFT',
                text: 'NFT (Non Fungible Token, невзаємозамінний токен) - різновид криптографічних токенів, кожен з яких унікальний. Це означає, що його не можна підробити, розділити чи поміняти місцями. Метадані таких токенів незмінні.',
                goal: 16500,
                raised: 12000,
                supporter: 8215,
                donators: 36560,
                categories: ['education'],
                content: [
                    {
                        type: 'text',
                        text: 'NFT (Non Fungible Token, невзаємозамінний токен) - різновид криптографічних токенів, кожен з яких унікальний. Це означає, що його не можна підробити, розділити чи поміняти місцями. Метадані таких токенів незмінні.',
                    },
                    {
                        type: 'text',
                        text: 'NFT з\'явилися нещодавно і стають все популярнішими завдяки широкому використанню великими компаніями.Провідні бренди, такі як Nike, Coca - Cola та Taco Bell активно токенізують та продають свої активи.Попит та проінформованість про NFT зростатимуть у міру того, як інші великі компанії запускатимуть свої NFT(збільшуючи пропозицію), а також відкриватимуть власні NFT - маркетплейси(збільшуючи попит). ',
                    },
                    {
                        type: 'text',
                        text: 'Мета програми:',
                    },
                    {
                        type: 'text',
                        text: '- надання сталої підтримки художникам шляхом об’єднання сучасних художників із міжнародними крипто художниками та надання їм допомоги в запуску їхньої роботи на відповідних цифрових мистецьких платформах для підвищення обізнаності про їхню роботу та звернення до нових колекціонерів.',
                    },
                    {
                        type: 'text',
                        text: '- поєднання західних і східних  художників і мистецьких сцен, а також збір коштів для благодійних проектів Фонду.',
                    },
                ],
            }
        ],
        // Объект категорий новостей
        newsCategories: {
            /* charity: {
                slug: 'charity',
                title: 'Charity',
            },
            education: {
                slug: 'education',
                title: 'Education',
            },
            ukrain2022: {
                slug: 'ukrain2022',
                title: 'Ukrain 2022',
            },
            donation: {
                slug: 'donation',
                title: 'Donation',
            },
            food: {
                slug: 'food',
                title: 'Food',
            },
            camp: {
                slug: 'camp',
                title: 'Camp',
            }, */
        },
        // Объект категорий донатов
        causesCategories: {
            /* charity: {
                slug: 'charity',
                title: 'Charity',
            },
            education: {
                slug: 'education',
                title: 'Education',
            },
            ukrain2022: {
                slug: 'ukrain2022',
                title: 'Ukrain 2022',
            },
            donation: {
                slug: 'donation',
                title: 'Donation',
            },
            food: {
                slug: 'food',
                title: 'Food',
            },
            camp: {
                slug: 'camp',
                title: 'Camp',
            }, */
        },
        // Это массив для выбранных категорий. При выборе категории в сайдбаре, слаг категории попадает в этот
        // массив, затем происходит фильтрация новостей или донатов по наличию у них категорий из этого массива
        selectedNewsCategs: [],
        selectedCausesCategs: [],
        globalSearchQuery: '',
    },
    reducers: {
        setSelectedNewsCategs: (state, action) => {
            let categ = action.payload
            if (state.selectedNewsCategs.includes(categ)) {
                let index = state.selectedNewsCategs.indexOf(categ)
                if (index == 0) {
                    state.selectedNewsCategs.splice(0, 1)
                } else {
                    state.selectedNewsCategs.splice(index, index)
                }
            } else {
                state.selectedNewsCategs.push(action.payload)
            }
        },
        setglobalSearchQuery: (state, action) => {
            state.globalSearchQuery = action.payload
        }
    }
})


export const {
    setSelectedNewsCategs,
    setglobalSearchQuery
} = globalReducer.actions

export default globalReducer.reducer