let comments = {
    '1': {
        comment: 'Hello',
        parent: null
    },
    '2': {
        comment: 'World',
        parent: '1'
    },
    '3': {
        comment: 'Zdorov',
        parent: null
    },
    '4': {
        comment: '!',
        parent: '1'
    },
    '5': {
        comment: '!12',
        parent: '2'
    },
    '6': {
        comment: '!asdf',
        parent: '2'
    },
    '7': {
        comment: '!dfghj',
        parent: '3'
    },
    '8': {
        comment: '!djhk;',
        parent: '3'
    },
    '9': {
        comment: 'f!fsdfdsf',
        parent: '4'
    }
}

function sort(arr = {}) {
    let res = {};
    for (const key in arr) {
        arr[key].children =[];

        for (const obKey of Object.keys(arr)) {
            console.log(obKey);
            if (key === arr[obKey].parent) {
                console.log(obKey, arr[obKey].comment);
                arr[key].children.push(arr[obKey]);
                delete arr[obKey];
                console.log(arr);
            }
        }
    }
    console.log(arr);
}

sort(comments);


let result = {
    '1': {
        comment: 'Hello',
        children: {
            '2': {
                comment: 'World',
                parent: '1'
            },
            '4': {
                comment: '!',
                parent: '1'
            }
        }
    },
    '3': {
        comment: 'Zdorov',
        children: []
    },
}
