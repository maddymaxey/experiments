/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var parser = {trace: function trace(){},
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"ADD":6,"SUB":7,"MUL":8,"DIV":9,"POW":10,"I":11,"(":12,")":13,"{":14,"}":15,"[":16,"]":17,"NUMBER":18,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"ADD",7:"SUB",8:"MUL",9:"DIV",10:"POW",11:"I",12:"(",13:")",14:"{",15:"}",16:"[",17:"]",18:"NUMBER"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,1],[4,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:return fracPrint($$[$0-1]);
break;
case 2:this.$ = fracAdd($$[$0-2],$$[$0]);
break;
case 3:this.$ = fracSub($$[$0-2],$$[$0]);
break;
case 4:this.$ = fracMul($$[$0-2],$$[$0]);
break;
case 5:this.$ = fracDiv($$[$0-2],$$[$0]);
break;
case 6:this.$ = fracPow($$[$0-2],$$[$0]);
break;
case 7:this.$ = fracI($$[$0]); 
break;
case 8:this.$ = fracI($$[$0-1]); 
break;
case 9:this.$ = fracMul($$[$0],Fraction(Complex(-1,0),Complex(1,0))); 
break;
case 10:this.$ = $$[$0-1]
break;
case 11:this.$ = $$[$0-1]
break;
case 12:this.$ = $$[$0-1]
break;
case 13:this.$ = Fraction(Complex(0,1),Complex(1,0)); 
break;
case 14:this.$ = Fraction(Complex(Number(yytext),0),Complex(1,0)); 
break;
}
},
table: [{3:1,4:2,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{1:[3]},{5:[1,9],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15]},{4:16,5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[1,5],13:[2,13],14:[1,6],15:[2,13],16:[1,7],17:[2,13],18:[1,8]},{4:17,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{4:18,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{4:19,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{4:20,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],13:[2,14],15:[2,14],17:[2,14]},{1:[2,1]},{4:21,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{4:22,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{4:23,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{4:24,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{4:25,7:[1,4],11:[1,3],12:[1,5],14:[1,6],16:[1,7],18:[1,8]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],13:[2,8],15:[2,8],17:[2,8]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],13:[2,7],15:[2,7],17:[2,7]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[1,15],13:[2,9],15:[2,9],17:[2,9]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],13:[1,26]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],15:[1,27]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],17:[1,28]},{5:[2,2],6:[2,2],7:[2,2],8:[1,12],9:[1,13],10:[1,14],11:[1,15],13:[2,2],15:[2,2],17:[2,2]},{5:[2,3],6:[2,3],7:[2,3],8:[1,12],9:[1,13],10:[1,14],11:[1,15],13:[2,3],15:[2,3],17:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,14],11:[1,15],13:[2,4],15:[2,4],17:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[1,14],11:[1,15],13:[2,5],15:[2,5],17:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[1,14],11:[1,15],13:[2,6],15:[2,6],17:[2,6]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],13:[2,10],15:[2,10],17:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],13:[2,11],15:[2,11],17:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],13:[2,12],15:[2,12],17:[2,12]}],
defaultActions: {9:[2,1]},
parseError: function parseError(str,hash){if(hash.recoverable){this.trace(str)}else{throw new Error(str)}},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.0 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str,hash){if(this.yy.parser){this.yy.parser.parseError(str,hash)}else{throw new Error(str)}},

// resets the lexer, sets new input
setInput:function (input){this._input=input;this._more=this._backtrack=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0;return this},

// consumes and returns one char from the input
input:function (){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.offset++;this.match+=ch;this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1);return ch},

// unshifts one char (or a string) into the input
unput:function (ch){var len=ch.length;var lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-len-1);this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(lines.length-1){this.yylineno-=lines.length-1}var r=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len};if(this.options.ranges){this.yylloc.range=[r[0],r[0]+this.yyleng-len]
}this.yyleng=this.yytext.length;return this},

// When called from action, caches matched text and appends it on next action
more:function (){this._more=true;return this},

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function (){if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},

// retain first n characters of the match
less:function (n){this.unput(this.match.slice(n))},

// displays already matched input, i.e. for error messages
pastInput:function (){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},

// displays upcoming input, i.e. for error messages
upcomingInput:function (){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length)}return(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function (){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer){backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){backup.yylloc.range=this.yylloc.range.slice(0)}}lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno+=lines.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input){this.done=false}if(token){if(this.options.backtrack_lexer){delete backup}return token}else if(this._backtrack){for(var k in backup){this[k]=backup[k]}return false}if(this.options.backtrack_lexer){delete backup}return false},

// return next match in input
next:function (){if(this.done){return this.EOF}if(!this._input){this.done=true}var token,match,tempMatch,index;if(!this._more){this.yytext="";this.match=""}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(this.options.backtrack_lexer){token=this.test_match(tempMatch,rules[i]);if(token!==false){return token}else if(this._backtrack){match=false;continue}else{return false}}else if(!this.options.flex){break}}}if(match){token=this.test_match(match,rules[index]);if(token!==false){return token}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},

// return next match that has a token
lex:function lex(){var r=this.next();if(r){return r}else{return this.lex()}},

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition){this.conditionStack.push(condition)},

// pop the previously active lexer condition state off the condition stack
popState:function popState(){var n=this.conditionStack.length-1;if(n>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions["INITIAL"].rules}},

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n){n=this.conditionStack.length-1-Math.abs(n||0);if(n>=0){return this.conditionStack[n]}else{return"INITIAL"}},

// alias for begin(condition)
pushState:function pushState(condition){this.begin(condition)},

// return the number of states currently on the stack
stateStackSize:function stateStackSize(){return this.conditionStack.length},
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  Complex = function(real,imag){
    return {
      real: real,
      imag: imag
    };
  };
  cpxAdd = function(c1,c2){
    return {
      real: c1.real + c2.real,
      imag: c1.imag + c2.imag
    }
  };
  cpxSub = function(c1,c2){
    return {
      real: c1.real - c2.real,
      imag: c1.imag - c2.imag
    }
  };
  cpxMul = function(c1,c2){
    return {
      real: c1.real*c2.real - c1.imag*c2.imag,
      imag: c1.real*c2.imag + c2.real*c1.imag
    };
  };
  cpxDiv = function(c1,c2){
    var denom = c2.real*c2.real + c2.imag*c2.imag;
    return {
        real: ( c1.real*c2.real + c1.imag*c2.imag)/denom,
        imag: (-c1.real*c2.imag + c2.real*c1.imag)/denom
    };
  };
  cpxSca = function(c1,sr,si){
    return {
      real: c1.real*sr,
      imag: c1.imag*si
    };
  };
  cpxI = function(c1){
    return {
      real: -1*c1.imag,
      imag: c1.real
    };
  };
  cpxPow = function(c1,c2){
    var nLeft = Math.floor(c2.real)-1;
    var result = c1;
    while(nLeft--){
      result = cpxMul(result,c1);
    }
    return result;
  };
  cpxNorm = function(c1){
    return c1.real*c1.real + c1.imag*c1.imag;
  };
  cpxRound = function(c1){
    return Complex(Math.round(c1.real),Math.round(c1.imag));
  };
  isCpxEqualTo = function(c1,c2){
    return ( c1.real === c2.real && c1.imag === c1.imag );
  };
  isCpxEq = isCpxEqualTo;
  isCpx0 = function(c1){
    return ( c1.real === 0 && c1.imag === 0 );
  };
  isCpxGreaterThan = function(c1,c2){
    return ( cpxNorm(c1) > cpxNorm(c2) );
  };
  isCpxGt = isCpxGreaterThan;
  isCpxLessThan = function(c1,c2){
    return ( cpxNorm(c1) < cpxNorm(c2) );
  };
  isCpxLt = isCpxLessThan;
  cpxPrint = function(c1){
    if( c1.imag > 0 ){
       return c1.real +'+i'+ c1.imag;
    }else if(c1.imag === 0){
       return c1.real +'';
    }else if(c1.imag < 0){
       return c1.real +'-i'+ (-c1.imag);
    }
    return 'wtf?'; 
  };
  cpxGcd = function(c1,c2){
    var a = c1;
    var b = c2;
    var normA,normB,tmp,q,r=Complex(1,1);
    while( ! isCpx0(r) ){
      normA = cpxNorm(a);
      normB = cpxNorm(b);
      if( normB > normA ){
        tmp = a;
        a = b;
        b = tmp;
      }
      // Get the nearest 'gaussian integer' to the quotient
      q = cpxRound(cpxDiv(a,b));
      // compute the remainder
      r = cpxSub(a,cpxMul(b,q));
      // repeat with the remainder and the smaller one...
      a = b;
      b = r;
    }
    return a;
  };
  cpxLcm = function(a,b){
    var gcd = cpxGcd(a,b);
    return  cpxMul(cpxDiv(a,gcd),b);
  };


  Fraction = function(num,den){
    return {
      num: num,
      den: den
    };
  };
  matchDenom = function(c1,c2){
    var lcm = cpxLcm(c1.den,c2.den);
    // we'll need to scale the numerators to agree with the new denominator
    var s1 = cpxDiv(lcm,c1.den);
    var s2 = cpxDiv(lcm,c2.den);
    c1.num = cpxMul(c1.num,s1);
    c2.num = cpxMul(c2.num,s2);
    c1.den = lcm;
    c2.den = lcm;
  };
  fracAdd = function(c1,c2){
    matchDenom(c1,c2);
    return Fraction(cpxAdd(c1.num,c2.num), c1.den);
  };
  fracSub = function(c1,c2){
    matchDenom(c1,c2);
    return Fraction(cpxSub(c1.num,c2.num), c1.den);
  };
  fracMul = function(c1,c2){
    return Fraction(cpxMul(c1.num,c2.num), cpxMul(c1.den,c2.den));
  };
  fracFlip = function(c1){
    // get the reciporical
    return Fraction(c1.den,c1.num);
  };
  fracDiv = function(c1,c2){
    return fracMul(c1,fracFlip(c2));
  };
  fracPow = function(c1,c2){
    // compute the actual c2
    var exponent = fracDiv(c2.num,c2.den);
    return Frac(cpxPow(c1.num,exponent),cpx(c1.den,exponent));
  };
  fracI = function(c1){
    return Fraction( cpxI(c1.num), c1.den );
  };
  fracRationalize = function(c1){
    if( c1.den.imag !== 0 ){
      return Fraction( cpxMul(c1.num,Complex(c1.den.real,-c1.den.imag)),
                       cpxMul(c1.den,Complex(c1.den.real,-c1.den.imag)));
    }
    return c1;
  };
  fracPrint = function(c1){
    var x = fracRationalize(c1);
    return '('+ cpxPrint(x.num) +') / ('+ cpxPrint(x.den) +')';
    return 'wtf?'; 
  };


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 18
break;
case 2:return 11
break;
case 3:return 6
break;
case 4:return 7
break;
case 5:return 8
break;
case 6:return 10
break;
case 7:return 9
break;
case 8:return 12
break;
case 9:return 14
break;
case 10:return 16
break;
case 11:return 13
break;
case 12:return 15
break;
case 13:return 17
break;
case 14:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]*\.{0,1}[0-9]+)/,/^(?:[ij])/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\^)/,/^(?:\/)/,/^(?:\()/,/^(?:\{)/,/^(?:\[)/,/^(?:\))/,/^(?:\})/,/^(?:\])/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args){if(!args[1]){console.log("Usage: "+args[0]+" FILE");process.exit(1)}var source=require("fs").readFileSync(require("path").normalize(args[1]),"utf8");return exports.parser.parse(source)};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}