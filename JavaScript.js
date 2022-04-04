//membuat variabel
const buttonHtml = document.querySelector('.html');
const buttonCss = document.querySelector('.css');
const buttonJavascript = document.querySelector('.javascript');

//membuat fungsi click
buttonHtml.addEventListener('click', function(event) {
    alert('Anda Mengklik Kelas Html')
 });
buttonCss.addEventListener('click', function(event) {
alert('Anda Mengklik Kelas CSS')
});
buttonJavascript.addEventListener('click', function(event) {
alert('Anda Mengklik Kelas JavaScript')
});