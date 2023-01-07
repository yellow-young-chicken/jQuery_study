$(function() {
  // 以下で、hideメソッドを用いて<h1>要素を隠してください
  $('h1').hide();
  
});


$(function() {
  // 以下で、fadeOutメソッドを用いて<img>要素を隠してください
$('img').fadeOut();
  
  // 以下で、slideUpメソッドを用いて<p>要素を隠してください
  
$('p').slideUp();
});

$(function() {
  // slideUpメソッドを用いて、「#title」の要素を隠してください
  
  $('#title').slideUp();
  
  // fadeOutメソッドを用いて、「.lesson-item」の要素を隠してください
  
  $('.lesson-item').fadeOut();
  
});

$(function() {
  // showメソッドを用いて、「#title」要素を表示してください
  
  $('#title').show();
  
  // fadeInメソッドを用いて、「#image」要素を表示してください
  $('#image').fadeIn();
  
});

$(function() {
  // 「#hide-text」要素に対するclickイベントを作成してください
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });
  
});

$(function() {
  // 「#change-css」要素に対するclickイベントを作成してください
  $('#change-css').click(function(){
    $('#text').css('color','red');
    $('#text').css('font-size','50px');
  });
    
});

$(function() {
  // 「#change-text」要素に対するclickイベントを作成してください
  $('#change-text').click(function() {
    $('#text').text('ようこそ、Progateへ');
  });
  
  // 「#change-html」要素に対するclickイベントを作成してください
  $('#change-html').click(function() {
     $('#text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
  });

});

$(function() {
  // 「.list-item」要素に対するclickイベントを作成してください
  $('.list-item').click(function(){
    $(this).css('color','red');
  });
  
});

$(function() {
  $('.btn').click(function() {
    // $('#title')を変数$titleに代入してください
    
    var $title = $('#title');
    
    // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
    $title.css('color', 'red');
    $title.html('こんばんは、にんじゃわんこさん');
    $title.fadeOut(1000);
    
    // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
    $('#text').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
  });
});
$(function() {
  $('#find-method').click(function() {
    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
    // cssメソッドで文字の色をredに指定してください
    $('#wrapper').find('a').css('color','red');
    
    
  });
  
  $('#children-method').click(function() {
    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
    // fadeOutメソッドで隠してください
    
    $('#wrapper').children('a').fadeOut();
    
  });
});

$(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  
  $('#language-wrapper').hover(
    function(){
      $('.language-text').fadeIn();
    },
    function(){
      $('.language-text').fadeOut();
    }
    
    );
  
});


// コードを貼り付けてください
$(function(){
  
});


$(function() {
  // 「#login-show」要素に対するclickイベントを作成してください
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  
});

$(function() {
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });
  
  // 「.signup-show」のclickイベントを作成してください
  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
  })
  
});


$(function() {
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  
  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });
  
  // 「.close-modal」要素にclickイベントを設定してください
  
  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  })
  
  
});

$(function() {
  
  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });
  
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  // 「.lesson-hover」がhoverされたときのhoverイベントを作成してください
  
  $('.lesson-hover').hover(
    function() {
      
    },
    function() {
      
    }
  );
});
    
    
$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson-hover').hover(
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
      $(this).find('.text-contents').addClass('text-active');            
                                                   
                    },            
       function() {            
 // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください            
      $(this).find('.text-contents').removeClass('text-active');            
                                       
      
    },
    function() {
      // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
      
      
    }
  );
});



$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();

      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');
      
    }
  });
});
