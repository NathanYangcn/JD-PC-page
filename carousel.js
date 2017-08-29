// /**
//  * Created by Yang on 2017/8/29.
//  */

// 封装
function carousel(ct, auto) {
    this.init(ct);
    this.bind();
    this.playAuto(auto);
}
carousel.prototype = {
    init: function (ct) {
        this.carouselCt = document.querySelector(ct);
        this.nextBtn = this.carouselCt.querySelector('.carousel-next');
        this.preBtn = this.carouselCt.querySelector('.carousel-pre');
        this.bullets = this.carouselCt.querySelectorAll('.carousel-bullet > i');
        this.bulletCt = this.carouselCt.querySelector('.carousel-bullet');
        this.imgs = this.carouselCt.querySelectorAll('.carousel-item');
        this.imgWidth = this.imgs[0].offsetWidth;
        this.imgCt = this.carouselCt.querySelector('.carousel-imgct');
        this.curIndex = 0;
        this.locking = false;
        this.timer;
    },
    bind: function () {
        var self = this;
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', function () {
                self.playNext();
            });
            this.preBtn.addEventListener('click', function () {
                self.playPre();
            });
        }
        if (this.bulletCt) {
            this.bulletCt.addEventListener('mouseover', function (e) {
                var ele = e.target;
                if (ele.tagName.toLowerCase() === 'i') {
                    var idx = [].indexOf.call(self.bullets, ele);
                    self.setIndex('bullet', idx);
                    self.play();
                    self.setBullets();
                }
                if (!self.locking) {
                    self.playAuto();
                }
            });
        }
        this.carouselCt.addEventListener('mouseenter', function () {
            clearInterval(self.timer);
            this.locking = true;
        });
        this.carouselCt.addEventListener('mouseleave', function () {
            self.playAuto();
            this.locking = false;
        });
        this.playNext = function () {
            self.setIndex('next');
            self.play();
            if(self.bulletCt){
                self.setBullets();
            }
        };
        this.playPre = function () {
            self.setIndex('pre');
            self.play();
            if(self.bulletCt){
                self.setBullets();
            }
        }
    },
    play: function () {
        var leftPos = -this.imgWidth * this.curIndex + 'px';
        this.imgCt.style.left = leftPos;
    },
    setIndex: function (type, index) {
        console.log(type);
        if ( type === 'next') {
            if (this.curIndex >= this.imgs.length - 1) {
                this.curIndex = 0;
            } else {
                this.curIndex++;
            }
        }
        if ( type ==='pre' ) {
            if (this.curIndex <= 0) {
                this.curIndex = this.imgs.length - 1;
            } else {
                this.curIndex--;
            }
        }
        if ( type ==='bullet' ) {
            this.curIndex = index;
        }
    },
    setBullets: function () {
        this.bullets.forEach(function (ele) {
            ele.classList.remove('s-curbullet');
        });
        this.bullets[this.curIndex].classList.add('s-curbullet');
    },
    playAuto: function (auto) {
        if (auto) {
            var self = this;
            this.timer = setInterval(self.playNext, 3000);
            console.log(this.imgWidth)
        }
    }
};
function Carousel(ct, auto) {
    return new carousel(ct, auto);
}

// 面向过程
// var carousel = document.querySelector('#summary .carousel');
// var nextBtn = document.querySelector('#summary .carousel-next');
// var preBtn = document.querySelector('#summary .carousel-pre');
// var bullets = document.querySelectorAll('#summary .carousel-bullet > i');
// var bulletCt = document.querySelector('#summary .carousel-bullet');
// var imgs = document.querySelectorAll('#summary .carousel-item');
// var imgWidth = imgs[1].offsetWidth;
// var imgCt = document.querySelector('#summary .carousel-imgct');
// // var imgCtLeft = imgCt.offsetLeft;
// var curIndex = 0; // 记录当前展示图片的序号，以便配合width设置left偏移
//
// // var firstClone = imgs[0].cloneNode(true);
// // var lastClone = imgs[imgs.length-1].cloneNode(true);
// // imgCt.appendChild(firstClone);
// // imgCt.insertBefore(lastClone, imgs[0]);
//
// nextBtn.addEventListener('click', function () {
//     // clearInterval(timer);
//     playNext();
//     // palyAuto();
// });
// preBtn.addEventListener('click', function () {
//     // clearInterval(timer);
//     playPre();
//     // palyAuto();
// });
// var locking = false;
// bulletCt.addEventListener('mouseover', function (e) {
//     var self = e.target;
//     // console.log(self);
//     if (self.tagName.toLowerCase() === 'i') {
//         // clearInterval(timer);
//         var idx = [].indexOf.call(bullets, self);
//         setIndex('bullet', idx);
//         play();
//         setBullets();
//         // console.log(self, idx, curIndex);
//     }
//     if (!locking) {
//         palyAuto();
//     }
// });
// carousel.addEventListener('mouseenter', function () {
//     clearInterval(timer);
//     locking = true;
// });
// carousel.addEventListener('mouseleave', function () {
//     palyAuto();
//     locking = false;
// });
//
// function play() {
//     var leftPos = -imgWidth * curIndex + 'px';
//     imgCt.style.left = leftPos; // imgCt.setAttribute('left', leftPos); 无法正确设置，只能使用style
//     // console.log(curIndex, leftPos, imgWidth, imgs);
// }
// function playNext() {
//     setIndex('next');
//     play();
//     setBullets();
// }
// function playPre() {
//     setIndex('pre');
//     play();
//     setBullets();
// }
// function setIndex(type, index) {
//     if ( type === 'next') {
//         if (curIndex >= imgs.length - 1) {
//             curIndex = 0;
//         } else {
//             curIndex++;
//         }
//     }
//     if ( type ==='pre' ) {
//         if (curIndex <= 0) {
//             curIndex = imgs.length - 1;
//         } else {
//             curIndex--;
//         }
//     }
//     if ( type ==='bullet' ) {
//         curIndex = index;
//     }
// }
// function setBullets() {
//     bullets.forEach(function (ele) {
//         ele.classList.remove('s-curbullet');
//     });
//     bullets[curIndex].classList.add('s-curbullet');
//     console.log(curIndex)
// }
//
// var timer;
// function palyAuto() {
//     timer = setInterval(playNext, 3000);
// }
// palyAuto();