
export let useCurrentPagePosts = (currPage, itemsPerPage, items) => {
    let arr = []
    let intMax = currPage * itemsPerPage
    let intMin = intMax - itemsPerPage
    items.map((prod, i) => {
        if (i >= intMin && i < intMax) {
            arr.push(items[i])
        }
    })
    return [arr]
}

export let getCuttedString = (str, limit) => {
    let newStr = ''
    if (limit > str.length) {
        return str
    } else {
        for (let i = 0; i < limit; i++) {
            newStr += str[i]
        }
        return newStr + '...'
    }
}
export let getDayMonth = (timestamp, str, fullMonth) => {
    const monthNames = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    let date = new Date(timestamp);
    let data
    if (str == 'num') {
        console.log(date.getDate())
        data = ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate())
    } else if (str == 'month') {
        console.log(date.getMonth())
        data = (fullMonth) ? monthNames[date.getMonth()] : monthNames[date.getMonth()].slice(0, 3)
    }
    return data
}
export let getTimePeriod = (start, end) => {
    let startDate = new Date(start)
    let endDate = new Date(end)
    return startDate.getHours() + ':' + startDate.getMinutes() + ' - ' + endDate.getHours() + ':' + endDate.getMinutes()
}

export let getUpcomingEvents = (arr, key) => {
    let sorted = [...arr].sort((a, b) => a[key] - b[key])
    return sorted.filter((event) => (event.eventEnd > Date.now()) && true)
}
export let getPastEvents = (arr, key) => {
    let sorted = [...arr].sort((a, b) => a[key] - b[key])
    return sorted.filter((event) => (event.eventEnd < Date.now()) && true)
}
export let getLatestNews = (arr, key) => {
    return [...arr].sort((a, b) => b[key] - a[key])
}
export let getPopularNews = (arr, key) => {
    return [...arr].sort((a, b) => b[key] - a[key])
}

export let getPostByID = (id, events) => {
    let arr = []
    arr = events.filter(event => {
        if (event.id == id) {
            return true
        } else return false
    })
    return arr[0]
}

export let getDateByTimeStamp = (timestamp, divider) => {
    let date = new Date(timestamp);
    let fullDate = ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) + divider + (((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : date.getMonth()) + divider + date.getFullYear()
    return fullDate
}

export let getShareLink = (network, title) => {
    let url = window.location.href
    if (network == 'fb') {
        return `https://www.facebook.com/sharer.php?u=${url}&t=${title}`
    } else if (network == 'twi') {
        return `https://twitter.com/share?url=${url}&text=${title}&hashtags=my_hashtag`
    } else if (network == 'in') {
        return `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
    } else if (network == 'tg') {
        return `https://t.me/share/url?url=${url}&text=${title}`
    }
}

export let getNewsByCategory = (arr, filter) => {
    let filteredArr = arr
    for (let i = 0; i < filter.length; i++) {
        let arr2 = []
        for (let j = 0; j < filteredArr.length; j++) {
            if (filteredArr[j].categories.includes(filter[i])) {
                arr2.push(filteredArr[j])
            }
        }
        filteredArr = arr2
    }
    return filteredArr
}

export let getSearchedNews = (arr, query) => {
    let arr2 = []
    arr.map((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
            arr2.push(item)
        } else {
            let newContent = item.content
            for (let i = 0; i < newContent.length; i++) {
                if (newContent[i].type == 'text' && typeof newContent[i].text !== 'object' && newContent[i].text.toLowerCase().includes(query.toLowerCase())) {
                    arr2.push(item)
                    break;
                }
            }
        }
    })
    return arr2
}

export let getRaisedIndex = (goal, raised) => {
    return (raised / goal).toFixed(2)
}

export let getClearPhone = (str) => {
    return str.split('-').join('')
}


export let getRandomStr = (number) => {
    let range = (start, end) => [...Array(end - start).keys(), end - start].map(n => start + n);
    let A = range(65, 90); // A-Z
    let a = range(97, 122); // a-z
    let dig = range(48, 57); // 0-9
    let all = A.concat(a).concat(dig); // Склеиваем в один
    let str = '';

    for (let i = 0; i < number; i++) {
        str += String.fromCharCode(all[Math.floor(Math.random() * all.length)]); // Берём случайное число, преобразуем в соответствующий символ и добавляем к строке
    }
    return str;
}



export let copyToClipboard = (text) => {
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
}