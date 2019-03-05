(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'code-writer-library'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('code-writer-library'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'code-writer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'code-writer'.");
    }
    if (typeof this['code-writer-library'] === 'undefined') {
      throw new Error("Error loading module 'code-writer'. Its dependency 'code-writer-library' was not found. Please, check whether 'code-writer-library' is loaded prior to 'code-writer'.");
    }
    root['code-writer'] = factory(typeof this['code-writer'] === 'undefined' ? {} : this['code-writer'], kotlin, this['code-writer-library']);
  }
}(this, function (_, Kotlin, $module$code_writer_library) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var codeBlock = $module$code_writer_library.builder.codeBlock_conr1y$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var throwCCE = Kotlin.throwCCE;
  var DivContainerManager = $module$code_writer_library.codewriter.impl.DivContainerManager;
  var JsCodeWriter = $module$code_writer_library.codewriter.impl.JsCodeWriter;
  var CodeSequenceStyle = $module$code_writer_library.model.CodeSequenceStyle;
  var StyleSet = $module$code_writer_library.model.StyleSet;
  var WeightValue = $module$code_writer_library.model.WeightValue;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var L718326000000 = new Kotlin.Long(1066461568, 167);
  var Pair = Kotlin.kotlin.Pair;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var numberToInt = Kotlin.numberToInt;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  Deg.prototype = Object.create(Enum.prototype);
  Deg.prototype.constructor = Deg;
  function main(args) {
    dslCode();
  }
  function dslCode$lambda$lambda$lambda($receiver) {
    $receiver.text = '// ';
    $receiver.styleSet = Styles_getInstance().CMNT_STYLES;
    return Unit;
  }
  function dslCode$lambda$lambda$lambda_0($receiver) {
    $receiver.text = 'Person.kt';
    $receiver.styleSet = Styles_getInstance().STRING_STYLES;
    return Unit;
  }
  function dslCode$lambda$lambda($receiver) {
    $receiver.codeSequence_4xqwon$(dslCode$lambda$lambda$lambda);
    $receiver.codeSequence_4xqwon$(dslCode$lambda$lambda$lambda_0);
    return Unit;
  }
  function dslCode$lambda$lambda$lambda_1($receiver) {
    $receiver.text = 'data';
    $receiver.styleSet = Styles_getInstance().KW_STYLES;
    return Unit;
  }
  function dslCode$lambda$lambda$lambda_2($receiver) {
    $receiver.text = ' class';
    $receiver.styleSet = Styles_getInstance().KW_STYLES;
    return Unit;
  }
  function dslCode$lambda$lambda_0($receiver) {
    $receiver.codeSequence_4xqwon$(dslCode$lambda$lambda$lambda_1);
    $receiver.codeSequence_4xqwon$(dslCode$lambda$lambda$lambda_2);
    $receiver.codeSequence_m67nre$(' Person(', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda$lambda_3($receiver) {
    $receiver.text = 'val';
    $receiver.styleSet = Styles_getInstance().KW_STYLES;
    return Unit;
  }
  function dslCode$lambda$lambda_1($receiver) {
    $receiver.codeSequenceWithTabs_jcencv$(1, dslCode$lambda$lambda$lambda_3);
    $receiver.codeSequence_m67nre$(' name', Styles_getInstance().VAR_STYLES);
    $receiver.codeSequence_m67nre$(': String = ', Styles_getInstance().DFLT_STYLES, 'breakable');
    $receiver.codeSequence_m67nre$('"Julian Kotrba"', Styles_getInstance().STRING_STYLES, 'cssTab');
    $receiver.codeSequence_m67nre$(',', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda$lambda_4($receiver) {
    $receiver.text = 'val';
    $receiver.styleSet = Styles_getInstance().KW_STYLES;
    return Unit;
  }
  function dslCode$lambda$lambda_2($receiver) {
    $receiver.codeSequenceWithTabs_jcencv$(1, dslCode$lambda$lambda$lambda_4);
    $receiver.codeSequence_m67nre$(' ageInMillis', Styles_getInstance().VAR_STYLES);
    $receiver.codeSequence_m67nre$(': () -> Long = {', Styles_getInstance().DFLT_STYLES, 'breakable');
    return Unit;
  }
  function dslCode$lambda$lambda_3($receiver) {
    $receiver.codeSequenceWithTabs_2qhsao$(2, 'java.util.Date().getTime() - ', Styles_getInstance().DFLT_STYLES);
    $receiver.codeSequence_m67nre$('718326000000', Styles_getInstance().STRING_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda_4($receiver) {
    $receiver.codeSequenceWithTabs_2qhsao$(1, '},', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda_5($receiver) {
    $receiver.codeSequenceWithTabs_2qhsao$(1, 'val', Styles_getInstance().KW_STYLES);
    $receiver.codeSequence_m67nre$(' currLivingIn', Styles_getInstance().VAR_STYLES);
    $receiver.codeSequence_m67nre$(': String = ', Styles_getInstance().DFLT_STYLES, 'breakable');
    $receiver.codeSequence_m67nre$(livingInText(), Styles_getInstance().STRING_STYLES, 'cssTab');
    $receiver.codeSequence_m67nre$(',', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda_6($receiver) {
    $receiver.codeSequence_m67nre$('    val', Styles_getInstance().KW_STYLES);
    $receiver.codeSequence_m67nre$(' degrees', Styles_getInstance().VAR_STYLES);
    $receiver.codeSequence_m67nre$(': Map<', Styles_getInstance().DFLT_STYLES);
    $receiver.codeSequence_m67nre$('Deg', Styles_getInstance().DFLT_STYLES, 'unresolved');
    $receiver.codeSequence_m67nre$(', String> = mapOf(', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda_7($receiver) {
    $receiver.codeSequenceWithTabs_2qhsao$(2, 'Pair(', Styles_getInstance().DFLT_STYLES);
    $receiver.codeSequence_m67nre$('Deg', Styles_getInstance().DFLT_STYLES, 'unresolved');
    $receiver.codeSequence_m67nre$('.', Styles_getInstance().DFLT_STYLES);
    $receiver.codeSequence_m67nre$('BSc', Styles_getInstance().VAR_STYLES);
    $receiver.codeSequence_m67nre$(', ', Styles_getInstance().DFLT_STYLES);
    $receiver.codeSequence_m67nre$('"Software & Information Engr."', Styles_getInstance().STRING_STYLES);
    $receiver.codeSequence_m67nre$(')', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda_8($receiver) {
    $receiver.codeSequenceWithTabs_2qhsao$(1, '),', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda_9($receiver) {
    $receiver.codeSequenceWithTabs_2qhsao$(1, 'val', Styles_getInstance().KW_STYLES);
    $receiver.codeSequence_m67nre$(' currStudy', Styles_getInstance().VAR_STYLES);
    $receiver.codeSequence_m67nre$(': String? = ', Styles_getInstance().DFLT_STYLES, 'breakable');
    $receiver.codeSequence_m67nre$('"SE & Inet Comp. @ TU-Vienna"', Styles_getInstance().STRING_STYLES, 'cssTab');
    $receiver.codeSequence_m67nre$(',', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda$lambda_10($receiver) {
    $receiver.codeSequenceWithTabs_2qhsao$(1, 'val', Styles_getInstance().KW_STYLES);
    $receiver.codeSequence_m67nre$(' currWork', Styles_getInstance().VAR_STYLES);
    $receiver.codeSequence_m67nre$(': String? = ', Styles_getInstance().DFLT_STYLES, 'breakable');
    $receiver.codeSequence_m67nre$('"Part-time SE @ APA-IT"', Styles_getInstance().STRING_STYLES, 'cssTab');
    return Unit;
  }
  function dslCode$lambda$lambda_11($receiver) {
    $receiver.codeSequence_m67nre$(')', Styles_getInstance().DFLT_STYLES);
    return Unit;
  }
  function dslCode$lambda($receiver) {
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_0);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_1);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_2);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_3);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_4);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_5);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_6);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_7);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_8);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_9);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_10);
    $receiver.codeLine_tz2qiy$(dslCode$lambda$lambda_11);
    return Unit;
  }
  function dslCode$lambda_0() {
    return first(shuffled(listOf([50, 50, 50, 50, 50, 50, 80, 150, 200])));
  }
  function dslCode() {
    var tmp$;
    var c = codeBlock(dslCode$lambda);
    var delayGenFunc = dslCode$lambda_0;
    var divContainer = Kotlin.isType(tmp$ = document.getElementById('code_container'), HTMLDivElement) ? tmp$ : throwCCE();
    var cw = new JsCodeWriter(new DivContainerManager(divContainer, delayGenFunc));
    cw.write_lp2qyj$(c);
  }
  function Styles() {
    Styles_instance = this;
    this.DEFAULT_COLOR_0 = '#E8EAF6';
    this.KEYWORD_COLOR_0 = '#2196F3';
    this.COMMENT_COLOR_0 = '#00E676';
    this.VARIABLE_COLOR_0 = '#FF9800';
    this.STRING_COLOR_0 = '#00E676';
    this.DFLT_STYLES = new StyleSet(new CodeSequenceStyle(this.DEFAULT_COLOR_0), new CodeSequenceStyle(this.DEFAULT_COLOR_0));
    this.KW_STYLES = new StyleSet(new CodeSequenceStyle(this.DEFAULT_COLOR_0), new CodeSequenceStyle(this.KEYWORD_COLOR_0, WeightValue.BOLD));
    this.CMNT_STYLES = new StyleSet(new CodeSequenceStyle(this.DEFAULT_COLOR_0), new CodeSequenceStyle(this.COMMENT_COLOR_0));
    this.VAR_STYLES = new StyleSet(new CodeSequenceStyle(this.VARIABLE_COLOR_0), new CodeSequenceStyle(this.VARIABLE_COLOR_0));
    this.STRING_STYLES = new StyleSet(new CodeSequenceStyle(this.STRING_COLOR_0), new CodeSequenceStyle(this.STRING_COLOR_0));
    this.ENUM_CONSTANT_STYLES = new StyleSet(new CodeSequenceStyle(this.DEFAULT_COLOR_0), new CodeSequenceStyle(this.VARIABLE_COLOR_0));
  }
  Styles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Styles',
    interfaces: []
  };
  var Styles_instance = null;
  function Styles_getInstance() {
    if (Styles_instance === null) {
      new Styles();
    }
    return Styles_instance;
  }
  function Person(name, ageInMilli, livingIn, degrees, currStudy, currWork) {
    if (name === void 0)
      name = 'Julian Kotrba ' + daysUntilTokyo() + ' days until Tokyo';
    if (ageInMilli === void 0)
      ageInMilli = Person_init$lambda;
    if (livingIn === void 0)
      livingIn = 'Vienna, ' + daysUntilTokyo() + ' days until Tokyo';
    if (degrees === void 0)
      degrees = mutableMapOf([new Pair(Deg$BSc_getInstance(), 'Software & Information Engr.')]);
    if (currStudy === void 0)
      currStudy = 'SE & Internet Comp., MA';
    if (currWork === void 0)
      currWork = 'Part time SE @ APA-IT';
    this.name = name;
    this.ageInMilli = ageInMilli;
    this.livingIn = livingIn;
    this.degrees = degrees;
    this.currStudy = currStudy;
    this.currWork = currWork;
  }
  function Person_init$lambda() {
    return Kotlin.Long.fromNumber((new Date()).getTime()).subtract(L718326000000);
  }
  Person.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Person',
    interfaces: []
  };
  Person.prototype.component1 = function () {
    return this.name;
  };
  Person.prototype.component2 = function () {
    return this.ageInMilli;
  };
  Person.prototype.component3 = function () {
    return this.livingIn;
  };
  Person.prototype.component4 = function () {
    return this.degrees;
  };
  Person.prototype.component5 = function () {
    return this.currStudy;
  };
  Person.prototype.component6 = function () {
    return this.currWork;
  };
  Person.prototype.copy_vpdrib$ = function (name, ageInMilli, livingIn, degrees, currStudy, currWork) {
    return new Person(name === void 0 ? this.name : name, ageInMilli === void 0 ? this.ageInMilli : ageInMilli, livingIn === void 0 ? this.livingIn : livingIn, degrees === void 0 ? this.degrees : degrees, currStudy === void 0 ? this.currStudy : currStudy, currWork === void 0 ? this.currWork : currWork);
  };
  Person.prototype.toString = function () {
    return 'Person(name=' + Kotlin.toString(this.name) + (', ageInMilli=' + Kotlin.toString(this.ageInMilli)) + (', livingIn=' + Kotlin.toString(this.livingIn)) + (', degrees=' + Kotlin.toString(this.degrees)) + (', currStudy=' + Kotlin.toString(this.currStudy)) + (', currWork=' + Kotlin.toString(this.currWork)) + ')';
  };
  Person.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.ageInMilli) | 0;
    result = result * 31 + Kotlin.hashCode(this.livingIn) | 0;
    result = result * 31 + Kotlin.hashCode(this.degrees) | 0;
    result = result * 31 + Kotlin.hashCode(this.currStudy) | 0;
    result = result * 31 + Kotlin.hashCode(this.currWork) | 0;
    return result;
  };
  Person.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.ageInMilli, other.ageInMilli) && Kotlin.equals(this.livingIn, other.livingIn) && Kotlin.equals(this.degrees, other.degrees) && Kotlin.equals(this.currStudy, other.currStudy) && Kotlin.equals(this.currWork, other.currWork)))));
  };
  function livingInText() {
    var tmp$;
    tmp$ = daysUntilTokyo();
    if (tmp$ >= 2 && tmp$ <= 2147483647)
      return '"' + 'Vienna, ' + daysUntilTokyo() + ' days until Tokyo' + '"';
    else if (tmp$ === 1)
      return '"' + 'Vienna, ' + daysUntilTokyo() + ' day until Tokyo' + '"';
    else
      return '"Tokyo"';
  }
  var Math_0 = Math;
  function daysUntilTokyo() {
    var x = (Date.UTC(2019, 2, 27) - Date.now()) / 86400000;
    return numberToInt(Math_0.ceil(x));
  }
  function Deg(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Deg_initFields() {
    Deg_initFields = function () {
    };
    Deg$BSc_instance = new Deg('BSc', 0);
  }
  var Deg$BSc_instance;
  function Deg$BSc_getInstance() {
    Deg_initFields();
    return Deg$BSc_instance;
  }
  Deg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deg',
    interfaces: [Enum]
  };
  function Deg$values() {
    return [Deg$BSc_getInstance()];
  }
  Deg.values = Deg$values;
  function Deg$valueOf(name) {
    switch (name) {
      case 'BSc':
        return Deg$BSc_getInstance();
      default:throwISE('No enum constant Deg.' + name);
    }
  }
  Deg.valueOf_61zpoe$ = Deg$valueOf;
  _.main_kand9s$ = main;
  _.dslCode = dslCode;
  _.Person = Person;
  _.livingInText = livingInText;
  _.daysUntilTokyo = daysUntilTokyo;
  Object.defineProperty(Deg, 'BSc', {
    get: Deg$BSc_getInstance
  });
  _.Deg = Deg;
  main([]);
  Kotlin.defineModule('code-writer', _);
  return _;
}));

//# sourceMappingURL=code-writer.js.map
