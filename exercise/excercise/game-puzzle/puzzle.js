const win_1 = "http://127.0.0.1:5500image/1_1.jpghttp://127.0.0.1:5500image/1_2.jpghttp://127.0.0.1:5500image/1_3.jpghttp://127.0.0.1:5500image/1_4.jpghttp://127.0.0.1:5500image/1_5.jpg"
const win_2 = "http://127.0.0.1:5500image/2_1.jpghttp://127.0.0.1:5500image/2_2.jpghttp://127.0.0.1:5500image/2_3.jpghttp://127.0.0.1:5500image/2_4.jpghttp://127.0.0.1:5500image/2_5.jpg"
const win_3 = "http://127.0.0.1:5500image/3_1.jpghttp://127.0.0.1:5500image/3_2.jpghttp://127.0.0.1:5500image/3_3.jpghttp://127.0.0.1:5500image/3_4.jpghttp://127.0.0.1:5500image/3_5.jpg"
function changeImg(row) {
    let image_path;
    let rnd;
    let image_name;
    do {
        rnd = Math.ceil(Math.random() * 3)
        image_name = `${rnd}_${row}.jpg`;
        image_path = `image/${image_name}`;
    }
    while (document.getElementById(`image_${row}`).src == `http://127.0.0.1:5500/${image_path}`)
    document.getElementById(`image_${row}`).src = image_path;

    let checkWin = document.getElementById('image_1').src +
        document.getElementById('image_2').src +
        document.getElementById('image_3').src +
        document.getElementById('image_4').src +
        document.getElementById('image_5').src

    if (checkWin == win_1 || checkWin == win_2 || checkWin == win_3) {
        document.getElementById('image_1').classList.add('done');
        document.getElementById('image_2').classList.add('done');
        document.getElementById('image_3').classList.add('done');
        document.getElementById('image_4').classList.add('done');
        document.getElementById('image_5').classList.add('done');
    }
    else {
        document.getElementById('image_1').classList.remove('done');
        document.getElementById('image_2').classList.remove('done');
        document.getElementById('image_3').classList.remove('done');
        document.getElementById('image_4').classList.remove('done');
        document.getElementById('image_5').classList.remove('done');
    }
}