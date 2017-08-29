var searchbox = document.querySelector('#searchbox');
var gotopBtn = document.querySelector('#toolbar .gotop');
var backtopBtn = document.querySelector('#navbar .gotop');

gotopBtn.addEventListener('click', gotop);
backtopBtn.addEventListener('click', gotop);

function gotop() {
    document.body.scrollTop = 0;
}

window.addEventListener('scroll', function () {
    var scrollTop = document.body.scrollTop;
    // console.log('scroll', scrollTop);
    if(scrollTop > 200) {
        searchbox.style.display = 'block';
    }else {
        searchbox.style.display = 'none';
    }
});