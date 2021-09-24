/*
a. Chenghai Cao
b. Chenghai_cao@student.uml.edu
c. Chenghai Cao is learning in Umass Lowell undergrad student, Computer Science Major.
d. Aug/11/2020
e. This webpage is mainly implementing a Bit of Scrabble with Drag-and-Drop.

Copyright (c) 2020 by Chenghai Cao. All rights reserved.
*/

const SCRABBLE_TILES = {};
SCRABBLE_TILES['A'] = { 'letter': 'A', 'value' : 1,  'number' : 9, 'image' : 'img/scrabble/Scrabble_Tile_A.jpg'  };
SCRABBLE_TILES['B'] = { 'letter': 'B', 'value' : 3,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_B.jpg'  };
SCRABBLE_TILES['C'] = { 'letter': 'C', 'value' : 3,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_C.jpg'  };
SCRABBLE_TILES['D'] = { 'letter': 'D', 'value' : 2,  'number' : 4, 'image' : 'img/scrabble/Scrabble_Tile_D.jpg'  };
SCRABBLE_TILES['E'] = { 'letter': 'E', 'value' : 1,  'number' : 12,'image' : 'img/scrabble/Scrabble_Tile_E.jpg'  };
SCRABBLE_TILES['F'] = { 'letter': 'F', 'value' : 4,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_F.jpg'  };
SCRABBLE_TILES['G'] = { 'letter': 'G', 'value' : 2,  'number' : 3, 'image' : 'img/scrabble/Scrabble_Tile_G.jpg'  };
SCRABBLE_TILES['H'] = { 'letter': 'H', 'value' : 4,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_H.jpg'  };
SCRABBLE_TILES['I'] = { 'letter': 'I', 'value' : 1,  'number' : 9, 'image' : 'img/scrabble/Scrabble_Tile_I.jpg'  };
SCRABBLE_TILES['J'] = { 'letter': 'J', 'value' : 8,  'number' : 1, 'image' : 'img/scrabble/Scrabble_Tile_J.jpg'  };
SCRABBLE_TILES['K'] = { 'letter': 'K', 'value' : 5,  'number' : 1, 'image' : 'img/scrabble/Scrabble_Tile_K.jpg'  };
SCRABBLE_TILES['L'] = { 'letter': 'L', 'value' : 1,  'number' : 4, 'image' : 'img/scrabble/Scrabble_Tile_L.jpg'  };
SCRABBLE_TILES['M'] = { 'letter': 'M', 'value' : 3,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_M.jpg'  };
SCRABBLE_TILES['N'] = { 'letter': 'N', 'value' : 1,  'number' : 6, 'image' : 'img/scrabble/Scrabble_Tile_N.jpg'  };
SCRABBLE_TILES['O'] = { 'letter': 'O', 'value' : 1,  'number' : 8, 'image' : 'img/scrabble/Scrabble_Tile_O.jpg'  };
SCRABBLE_TILES['P'] = { 'letter': 'P', 'value' : 3,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_P.jpg'  };
SCRABBLE_TILES['Q'] = { 'letter': 'Q', 'value' : 10, 'number' : 1, 'image' : 'img/scrabble/Scrabble_Tile_Q.jpg'  };
SCRABBLE_TILES['R'] = { 'letter': 'R', 'value' : 1,  'number' : 6, 'image' : 'img/scrabble/Scrabble_Tile_R.jpg'  };
SCRABBLE_TILES['S'] = { 'letter': 'S', 'value' : 1,  'number' : 4, 'image' : 'img/scrabble/Scrabble_Tile_S.jpg'  };
SCRABBLE_TILES['T'] = { 'letter': 'T', 'value' : 1,  'number' : 6, 'image' : 'img/scrabble/Scrabble_Tile_T.jpg'  };
SCRABBLE_TILES['U'] = { 'letter': 'U', 'value' : 1,  'number' : 4, 'image' : 'img/scrabble/Scrabble_Tile_U.jpg'  };
SCRABBLE_TILES['V'] = { 'letter': 'V', 'value' : 4,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_V.jpg'  };
SCRABBLE_TILES['W'] = { 'letter': 'W', 'value' : 4,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_W.jpg'  };
SCRABBLE_TILES['X'] = { 'letter': 'X', 'value' : 8,  'number' : 1, 'image' : 'img/scrabble/Scrabble_Tile_X.jpg'  };
SCRABBLE_TILES['Y'] = { 'letter': 'Y', 'value' : 4,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_Y.jpg'  };
SCRABBLE_TILES['Z'] = { 'letter': 'Z', 'value' : 10, 'number' : 1, 'image' : 'img/scrabble/Scrabble_Tile_Z.jpg'  };
SCRABBLE_TILES['_'] = { 'letter': '_', 'value' : 0,  'number' : 2, 'image' : 'img/scrabble/Scrabble_Tile_Blank.jpg' };

const GAME_INFO = {
  word: '',
  score: 0,
  temp: 0,
  remainingTiles: 100,
  highestScore: 0,
  letters: [],
  board: [' ', ' ', ' ', ' ', ' ', ' ', ' '], // * is none
  state: ''
};

var LETTERS = [];
const MAX_LENGTH = 7;
var DICT = {};
var pos // current drag or drop
var col // current cul

function randomLetters() {
  const pushnum = MAX_LENGTH - GAME_INFO.letters.length;
  GAME_INFO.letters = [...LETTERS.slice(0, pushnum), ...GAME_INFO.letters];
  LETTERS = LETTERS.slice(pushnum, LETTERS.length);
  GAME_INFO.remainingTiles = LETTERS.length;
}

function restart() {
  // init letters
  LETTERS = []
  for(var key of Object.keys(SCRABBLE_TILES)) {
    for (var i = 0; i < SCRABBLE_TILES[key].number; i++) {
      LETTERS.push({
        letter: key,
        value: SCRABBLE_TILES[key].value,
        image: SCRABBLE_TILES[key].image
      });
    }
  }
  const len = LETTERS.length;
  for(var i=0;i<len;i++) {
    var index = Math.floor(Math.random()*(len-i));
    var tem = LETTERS[index];
    LETTERS[index] = LETTERS[len-i-1];
    LETTERS[len-i-1] = tem;
  }
  // init dict
  $.ajax({
    url: "https://chenghaicao03.github.io/Project/dictionary.txt",
    success: function(result) {
      const words = result.split('\n');
      for (var i = 0; i < words.length; i++) {
        DICT[words[i].toUpperCase()] = true;
      }
    }
  });
  // init data
  GAME_INFO.highestScore = Math.max(GAME_INFO.score, GAME_INFO.highestScore);
  GAME_INFO.word = ''
  GAME_INFO.score = 0
  GAME_INFO.temp = 0
  GAME_INFO.remainingTiles = LETTERS.length;
  GAME_INFO.letters = [],
  GAME_INFO.board = [' ', ' ', ' ', ' ', ' ', ' ', ' '], // * is none
  randomLetters();
  GAME_INFO.state = ''
}

function initListenner() {
  // drag or drop
  $('#board .letterTile').draggable({
    revertDuration: 200,
    start: function(event, ui) {
      col = parseInt($(this).parent().attr('id').split('_')[1]);
      $(this).draggable("option", "revert", "invalid");
    }
  });
  $('#letterRack .letterTile').draggable({
    revertDuration: 200,
    start: function(event, ui) {
      pos = parseInt($(this).attr('pos'));
      $(this).draggable("option", "revert", "invalid");
    }
  });
  $('#letterRack').droppable({
    revertDuration: 200,
    drop: function(event, ui) {
      if(isNaN(pos)) {
        const lal = $(`#slot_${col} img`).attr('pos');
        if (GAME_INFO.board[lal].letter === '_') {
          GAME_INFO.board[lal].value = 0;
          GAME_INFO.board[lal].image = SCRABBLE_TILES['_'].image
        }
        if (GAME_INFO.board[lal] !== ' ') {
          GAME_INFO.letters.push(GAME_INFO.board[lal])
          GAME_INFO.board[lal] = ' ';
          GAME_INFO.state = ''
          return;
        }
      }
      if (GAME_INFO.board[pos] !== ' ') {
        GAME_INFO.letters.push(GAME_INFO.board[pos])
        GAME_INFO.board[pos] = ' ';
        GAME_INFO.state = ''
      }
      GAME_INFO.state = ''
    }
  })
  $('.boardSlot').droppable({
    revertDuration: 200,
    drop: function( event, ui ) {
      var temp = parseInt($(this).attr('id').split('_')[1]);
      if (isNaN(pos)) {
        if (GAME_INFO.board[temp] === ' ') {
          GAME_INFO.board[temp] = GAME_INFO.board[col];
          GAME_INFO.board[col] = ' '
        } else {
          var lal = GAME_INFO.board[temp];
          GAME_INFO.board[temp] = GAME_INFO.board[col];
          GAME_INFO.board[col] = lal;
        }
        GAME_INFO.state = ''
        return
      }
      // from rack
      if (GAME_INFO.letters[pos].letter === '_') {
        var letter = window.prompt("Please Input letter in [A-Z]", "")
        if (!letter || letter.length > 1) {
          GAME_INFO.state = ''
          return;
        }
        if (/[A-Z]/g.test(letter.toUpperCase())) {
          GAME_INFO.letters[pos].value = SCRABBLE_TILES[letter.toUpperCase()].value;
          GAME_INFO.letters[pos] = SCRABBLE_TILES[letter.toUpperCase()];
          GAME_INFO.letters[pos].image = SCRABBLE_TILES[letter.toUpperCase()].image;
        } else {
          GAME_INFO.state = ''
          return;
        }
      }
      if (GAME_INFO.board[temp] === ' ') {
        GAME_INFO.board[temp] = GAME_INFO.letters[pos];
        GAME_INFO.letters.splice(pos, 1);
      } else {
        GAME_INFO.letters.push(GAME_INFO.board[temp]);
        GAME_INFO.board[temp] = GAME_INFO.letters[pos];
        GAME_INFO.letters.splice(pos, 1);
      }
      GAME_INFO.state = ''
    }
  });
}

$(window).load(function() {
  // button listenner
  $('#nextBtn').click(() => {
    // next word
    GAME_INFO.score += GAME_INFO.temp;
    GAME_INFO.word = '';
    GAME_INFO.temp = 0;
    GAME_INFO.board = [' ', ' ', ' ', ' ', ' ', ' ', ' '], // * is none
    randomLetters();
    GAME_INFO.state = ''
  });
  $('#restartBtn').click(() => {
    GAME_INFO.state = ''
    restart();
  })
  // init listener
  initListenner();
  // main loop
  var lastTime, animFrame
  // update is called on every animation step
  function update(dt) {
    if (GAME_INFO.state === 'refresh' ) {
      return; // nothing change
    }
    GAME_INFO.state = 'refresh'
    GAME_INFO.word = '';
    for (var i = 0; i < GAME_INFO.board.length; i++) {
      GAME_INFO.word += GAME_INFO.board[i].letter ? GAME_INFO.board[i].letter : ' ';
    }
    const word = GAME_INFO.word.trim().replace(/\s/g, '-');
    if (!word.includes('-')) {
      $('#oneWordCheckIcon').attr('disabled', false)
    } else {
      $('#oneWordCheckIcon').attr('disabled', true)
    }
    if (word.length >= 2) {
      $('#minLengthIcon').attr('disabled', false)
    } else {
      $('#minLengthIcon').attr('disabled', true)
      $('#oneWordCheckIcon').attr('disabled', true)
    }
    if (word.length >= 2 && !word.includes('-')) {
      // calcute score
      let temp = ''
      for (var i = 0; i < GAME_INFO.board.length; i++) {
        temp += GAME_INFO.board[i].letter ?
          (GAME_INFO.board[i].letter === '_' ? GAME_INFO.board[i].image.split('.')[0][GAME_INFO.board[i].image.split('.')[0].length - 1] : GAME_INFO.board[i].letter) : '';
      }
      if (DICT[temp]) {
        GAME_INFO.temp = 0;
        for (var i = 0; i < GAME_INFO.board.length; i++) {
          if (GAME_INFO.board[i].value) {
            GAME_INFO.temp += parseInt(GAME_INFO.board[i].value);
          }
        }
        if (GAME_INFO.board[1] !== ' ' || GAME_INFO.board[5] !== ' ') {
          GAME_INFO.temp *= 2;
        }
        $('#dictionaryCheckIcon').attr('disabled', false)
        $('#nextBtn').attr('disabled', false)
        $('#word').attr('style', 'color: yellow');
      } else {
        GAME_INFO.temp = 0,
        $('#dictionaryCheckIcon').attr('disabled', true);
        $('#nextBtn').attr('disabled', true)
        $('#word').attr('style', 'color: red');
      }
    } else {
      GAME_INFO.temp = 0,
      $('#dictionaryCheckIcon').attr('disabled', true);
      $('#nextBtn').attr('disabled', true)
      $('#word').attr('style', 'color: red');
    }
    // info
    $('#word').html(word);
    $('#score').html(GAME_INFO.temp > 0 ? `${GAME_INFO.score} (<span style="color: yellow;">+ ${GAME_INFO.temp}</span>)`: `${GAME_INFO.score}`);
    $('#remainingTiles').html(GAME_INFO.remainingTiles);
    $('#highestScore').html(GAME_INFO.highestScore === 0 ? '----' : GAME_INFO.highestScore);
    // draw letterRack
    $('#letterRack img').remove();
    for (var i = 0; i < GAME_INFO.letters.length; i++) {
      const item = GAME_INFO.letters[i];
      $('#letterRack').append(`
        <img class="letterTile" src="${item.image}" letter="${item.letter}" value="${item.value}" pos="${i}"/>
      `);
    }
    // draw board
    $('.boardSlot img').remove();
    for (var i = 0; i < GAME_INFO.board.length; i++) {
      const item = GAME_INFO.board[i];
      if (item.image) {
        $(`#slot_${i}`).append(`
          <img class="letterTile" src="${item.image}" letter="${item.letter}" value="${item.value}" pos="${i}"/>
        `);
      }
    }
    initListenner();
    pos = undefined;
    col = undefined;
  }
  function callback(ms) {
    // get passed a timestamp in milliseconds
    // use it to determine how much time has passed since the last call
    if (lastTime) {
      update((ms-lastTime)/1000); // call update and pass delta time in seconds
    }
    lastTime = ms;
    animFrame = requestAnimationFrame(callback);
  }
  callback();
  // restart or start
  restart();
})
