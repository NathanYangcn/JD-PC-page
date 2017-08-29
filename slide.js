/**
 * Created by Yang on 2017/8/24.
 */
var summarySlide = document.querySelector('#summary .slide');
var summarySlideUl = document.querySelector('#summary .slide-wraper ul');
var summarySlideLis = document.querySelectorAll('#summary .slide-wraper li');
var summarypanelLis = document.querySelectorAll('#summary .notice-panel li');
summarySlideUl.addEventListener('mouseover', function (e) {
    if(e.target.tagName.toLowerCase() === 'li') {
        var index = [].indexOf.call(summarySlideLis, e.target);
        if(e.target.tagName.toLowerCase() === 'li') {
            summarySlide.style.transform = 'translateX(' + 48 * index + 'px)';
        }
        for (var i = 0; i < summarypanelLis.length; i++) {
            summarypanelLis[i].classList.remove('s-active');
        }
        summarypanelLis[index].classList.add('s-active');
    }
});