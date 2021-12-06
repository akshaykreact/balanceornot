
var tokens = [ ['{','}'] , ['[',']'] , ['(',')'] ];

var btn = document.getElementById('btn');
btn.addEventListener('click', isBalanced);

document.getElementById("input-one").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        isBalanced();
    }
});

function isOpenParenthesis(parenthesisChar) {
  for (var j = 0; j < tokens.length; j++) {
    if (tokens[j][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}

function matches(topOfStack, closedParenthesis) {
  for (var k = 0; k < tokens.length; k++) {
    if (tokens[k][0] === topOfStack && tokens[k][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}

function isParanthesis(char) {
  var str = '{}[]()';
  if (str.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}

function printToScreen(bool) {
  var parensStr = document.getElementById('input-one');
  var inputStr = parensStr.value
  var answer = document.getElementById('answer');
  if (bool) {
    answer.innerHTML = `True! Your string <div class='bold'>\" ${inputStr}\ "</div> is <span class='bolder-too'>balanced</span>!`;
  } else {
    answer.innerHTML = `False! Your string <div class='bold'>\" ${inputStr} \"</div> is <span class='bolder-too'>unbalanced</span>, check your string again.`;
  }
}
function isBalanced() {
  var parensStr = document.getElementById('input-one');
  var inputStr = parensStr.value
  if (inputStr === null) { printToScreen(true); }

  var expression = inputStr.split('');
  var stack = [];

  for (var i = 0; i < expression.length; i++) {
    if (isParanthesis(expression[i])) {
      if (isOpenParenthesis(expression[i])) {
        stack.push(expression[i]);
      } else {
        if (stack.length === 0) {
          return printToScreen(false);
        }
        var top = stack.pop(); 
        if (!matches(top, expression[i])) {
          return printToScreen(false);
        }
      }
    }
  }

  var returnValue = stack.length === 0 ? true : false;
  printToScreen(returnValue)
}