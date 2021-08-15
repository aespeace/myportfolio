

//ローディング画面
var bar=new ProgressBar.Line(splash_text,{
    easing:'easeInOut',
    duration:3000,
    strokeWidth:0.4,
    color:'#555',
    trailWidth:0.2,
    trailColor:'#bbb',
    text:{
        style:{
            position:'absolute',
            left:'50%',
            top:'50%',
            padding:'0',
            margin:'-30px 0 0 0',
            transform:'translate(-50%,-50%)',
            'font-size':'1rem',
            color:'#fff',
        },
        autoStyleContainer:false
    },
    step:function(state,bar){
        bar.setText(Math.round(bar.value()*100)+'%');
    }
});

bar.animate(1.0,function(){
    $("#splash").delay(500).fadeOut(800);
})

//アコーディオン 料金
$('.strength-button').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

//アコーディオン お問い合わせ
$('.footer-contact-button').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作

    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
        $(this).addClass('close');//クラス名closeを付与
    }
});

//アコーディオン スキル
$('.skill-button').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作

  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
  }
});






//スムーススクロール
$('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});


//トップへ戻るボタン
// 変数宣言と代入
var pageTop = $("#page-top");
// ボタン非表示
pageTop.hide();


// 80pxスクロールしたらボタン表示
$ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
    // 0.3秒でフェードイン
    pageTop.fadeIn(300);
} else {
    // 0.3秒でフェードアウト
    pageTop.fadeOut(300);
}
});
// 0.5秒でページトップへ戻る
pageTop.click(function () {
    $("body, html").animate({ scrollTop: 0}, 500);
    return false;
})


//スキルのところ
$(function(){
    $(".skill-item").click(function(){
        $(this).css("opacity","0.6")})
})


/*$(function(){
    $(".skill-item").mousemove(function(){
        if($(this).hasClass("skill-item-prepare-one") && $(this).hasClass("skill-item-prepare-two") && $(this).hasClass("skill-item-prepare-three") && $(this).hasClass("skill-item-prepare-four")){
            $(this).addClass("open")
        }
    })
})*/

$(function(){
    $(".skill-item").mousemove(function(){
        if($(this).hasClass("skill-item-prepare-one") && $(this).hasClass("skill-item-prepare-two") && $(this).hasClass("skill-item-prepare-three") && $(this).hasClass("skill-item-prepare-four")){
            $(".skill-main").textillate({
                loop: true,
                in: {
                    effect:'flash',
                    delay:50,
                },
                out: {
                    effect:'flipOutX',
                    delay:50,
                }
            });
        }
    })
})

/*$(function(){
    $(".open").mousemove(function(){
        $(".skill-text").textillate({
            loop:true,
        });
    })
})*/

/*$(function(){
    $(".skill-text").textillate({
        loop:true,
    });
})*/


//これができない
/*$(function(){
    $(".open").click(function(){
        $(this).addClass("oooopen")
    })
})*/



$(function(){
    $(".skill-item-one").click(function(){
        $(".skill-item").addClass("skill-item-prepare-one")
    })
})
$(function(){
    $(".skill-item-two").click(function(){
        $(".skill-item").addClass("skill-item-prepare-two")
    })
})
$(function(){
    $(".skill-item-three").click(function(){
        $(".skill-item").addClass("skill-item-prepare-three")
    })
})
$(function(){
    $(".skill-item-four").click(function(){
        $(".skill-item").addClass("skill-item-prepare-four")
    })
})


tippy(".cap",{
    placement:"bottom",
    animation:"shift-toward-extreme",
    theme:"translucent",
})

//ハンバーガー
$(".header-button").click(function(){
    $(this).toggleClass("active");
    $(".header-right").toggleClass("panelactive");
});

//スクロールで閉じる
$(window).scroll(function(){
    if($(".header-right").hasClass("panelactive")){
        $(".panelactive").toggleClass("panelactive");
        $(".header-button").toggleClass("active");
    }
});

$(".top").click(function(){
    if($(".header-right").hasClass("panelactive")){
        $(".header-right").removeClass("panelactive");
        $(".header-button").removeClass("active");
    }
});

//レスポンシブでパララックス
$(window).scroll(function () {
    if ($(this).scrollTop() > 2000) {
        $(".top-image").addClass("top-image-one")
    }
});



//footerのcanvas
window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles: 21,
        sizeVariations: 30,
        //speed:0.2,
        //connectParticles:true,
        color: [
        '#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'
        ]
    });
};


$(".footer-contact-button").click(function(){
    $(".background").css("display","none")
});







/*
particlesJS('background',
    {
        "particles": {
            "move": {
                "enable": true,
                "direction": "bottom",
            },
            "number": {
                "value": 200,
            }
        }
    }
);
*/

//top-pageのcanvas
particlesJS('js-particles',
  {
    "particles": {
      //シェイプ数
      "number": {
        //要素内に表示するシェイプの数
        "value": 80,
        "density": {
          //シェイプ表示間隔設定
          "enable": true,
          //シェイプ表示間隔指定
          "value_area": 800
        }
      },
      //シェイプ色
      "color": {
        "value": "#ffffff"
      },

      //シェイプの設定
      "shape": {
        //シェイプ形
        "type": "circle", //circle, edge, triangle, polygon, star, image 複数指定["circle", "triangle", "image"]

        //シェイプボーダー設定
        "stroke": {
          //ボーダー幅
          "width": 0,
          //ボーダー色
          "color": "#000000"
        },
        //シェイプの形でpolygonを指定した場合
        "polygon": {
          //ポリゴン角数指定
          "nb_sides": 5
        },

        //シェイプの形でimageを指定した場合
        "image": {
          //画像パス
          "src": "img/github.svg",
          //画像幅
          "width": 100,
          //画像高
          "height": 100
        }
      },

      //シェイプ透過率指定
      "opacity": {
        //透過率指定
        "value": 0.5,
        //ランダム設定
        "random": false, //true:有効, false:無効

        //透過アニメーション設定
        "anim": {
          //アニメーション設定
          "enable": false, //true:有効, false:無効
          //アニメーション速度
          "speed": 1,
          //アニメーション最小透過率
          "opacity_min": 0.1,
          //アニメーション同期
          "sync": false //true:有効, false:無効
        }
      },

      //シェイプサイズ
      "size": {
        //シェイプサイズ指定
        "value": 5,
        //ランダムサイズ
        "random": true, //true:有効, false:無効
        //サイズアニメーション設定
        "anim": {
          //アニメーション設定
          "enable": false, //true:有効, false:無効
          //アニメーション速度
          "speed": 40,
          //アニメーション最小サイズ,
          "size_min": 1,
          //アニメーション同期設定
          "sync": false //true:有効, false:無効
        }
      },

      //シェイプを線で繋ぐか
      "line_linked": {
        //線の設定
        "enable": false, //true:有効, false:無効
        //線の間隔
        "distance": 150,
        //線の色
        "color": "#ffffff",
        //線の透過率
        "opacity": 0.4,
        //線の幅
        "width": 1
      },
      //シェイプの動きの設定
      "move": {
        //動きを制御するか
        "enable": true, //true:有効, false:無効
        //動く速度
        "speed": 0.5,
        //動く方向
        "direction": "bottom", //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
        //ランダム設定
        "random": false, //true:有効, false:無効
        //静止状態にする
        "straight": false, //true:有効, false:無効
        //シェイプの動き
        "out_mode": "out", //ボックス内で動かす bounce ボックス外に逃がす out
        "attract": {
          "enable": true,
          "rotateX": 1000,
          "rotateY": 1000
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",

      //マウスイベント設定
      "events": {
        //マウスオーバー時の処理
        "onhover": {
          "enable": false, //true:有効, false:無効
          "mode": "bubble" //grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:拒絶
        },

        //クリック時の処理処理
        "onclick": {
          //クリック時の処理
          "enable": true, //true:有効, false:無効
          //クリック時の処理
          "mode": "push" //push:追加, remove:削除, bubble:拡大, repulse:拒絶
        },
        "resize": true
      },
      //以下でマウスイベント発生時の詳細値を設定
      "modes": {
        "grab": {
          "distance": 300,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 7.5,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    //Retina Display対応
    "retina_detect": true, //true:有効, false:無効
  }
);

