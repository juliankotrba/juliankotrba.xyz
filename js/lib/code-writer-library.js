if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'code-writer-library'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'code-writer-library'.");
}
if (typeof this['kotlinx-coroutines-core-js'] === 'undefined') {
  throw new Error("Error loading module 'code-writer-library'. Its dependency 'kotlinx-coroutines-core-js' was not found. Please, check whether 'kotlinx-coroutines-core-js' is loaded prior to 'code-writer-library'.");
}
this['code-writer-library'] = function (_, Kotlin, $module$kotlinx_coroutines_core_js) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var throwCCE = Kotlin.throwCCE;
  var delay = $module$kotlinx_coroutines_core_js.kotlinx.coroutines.experimental.delay_za3lpa$;
  var launch = $module$kotlinx_coroutines_core_js.kotlinx.coroutines.experimental.launch_ej4974$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  WeightValue.prototype = Object.create(Enum.prototype);
  WeightValue.prototype.constructor = WeightValue;
  function CodeSequenceBuilder(text, styleSet, elementClass) {
    if (elementClass === void 0)
      elementClass = '';
    this.text = text;
    this.styleSet = styleSet;
    this.elementClass = elementClass;
  }
  CodeSequenceBuilder.prototype.build = function () {
    return new CodeSequence(this.text, this.styleSet, this.elementClass);
  };
  CodeSequenceBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeSequenceBuilder',
    interfaces: []
  };
  function MultipleCodeSequencesBuilder(charSequences, styleSets, elementClasses) {
    if (elementClasses === void 0)
      elementClasses = emptyList();
    this.charSequences = charSequences;
    this.styleSets = styleSets;
    this.elementClasses = elementClasses;
  }
  MultipleCodeSequencesBuilder.prototype.build = function () {
    this.validate_0();
    return this.createCodeSequences_0();
  };
  MultipleCodeSequencesBuilder.prototype.validate_0 = function () {
    this.validateCharSequences_0();
    this.validateBeforeAndAfterStyles_0();
    this.validateElementClasses_0();
  };
  MultipleCodeSequencesBuilder.prototype.validateCharSequences_0 = function () {
    if (this.charSequences.isEmpty()) {
      throw IllegalArgumentException_init('There must be at least one charSequence');
    }
  };
  MultipleCodeSequencesBuilder.prototype.validateBeforeAndAfterStyles_0 = function () {
    if (this.styleSets.size !== this.charSequences.size) {
      throw IllegalArgumentException_init('There must be a Pair<textStyleBefore: CodeSequenceStyle, textStyleAfter: CodeSequenceStyle> for ' + ('every char sequence. Currently there ' + (this.styleSets.size === 1 ? 'is' : 'are') + ' just') + (this.styleSets.size.toString() + ' style ' + (this.styleSets.size === 1 ? 'pair' : 'pairs') + '.'));
    }
  };
  MultipleCodeSequencesBuilder.prototype.validateElementClasses_0 = function () {
    if (!this.elementClasses.isEmpty()) {
      var tmp$;
      tmp$ = this.elementClasses.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var index = element.component1();
        if (index < 1) {
          throw IllegalArgumentException_init('An index less than or equal to one is not allowed. ' + ('Use an index from 1 to ' + this.charSequences.size + '.'));
        }
         else if (index > this.charSequences.size) {
          throw IllegalArgumentException_init('The index ' + index + ' is too big. ' + ('Use an index from 1 to ' + this.charSequences.size + '.'));
        }
      }
    }
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  MultipleCodeSequencesBuilder.prototype.createCodeSequences_0 = function () {
    var tmp$;
    var indexToElementClassMap = toMap(this.elementClasses);
    var codeSequences = ArrayList_init();
    tmp$ = this.charSequences.size;
    for (var i = 0; i < tmp$; i++) {
      var tmp$_0 = this.charSequences.get_za3lpa$(i);
      var tmp$_1 = this.styleSets.get_za3lpa$(i);
      var key = i + 1 | 0;
      var tmp$_2;
      codeSequences.add_11rb$(new CodeSequence(tmp$_0, tmp$_1, (tmp$_2 = indexToElementClassMap.get_11rb$(key)) != null ? tmp$_2 : ''));
    }
    return codeSequences;
  };
  MultipleCodeSequencesBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleCodeSequencesBuilder',
    interfaces: []
  };
  function CodeLineBuilder() {
    CodeLineBuilder$Companion_getInstance();
    this.texts_0 = ArrayList_init();
  }
  function CodeLineBuilder$Companion() {
    CodeLineBuilder$Companion_instance = this;
    this.CODE_SEQUENCE_DEFAULT_TEXT_0 = ' ';
    this.CODE_SEQUENCE_DEFAULT_COLOR_0 = '#FFFFFF';
  }
  CodeLineBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CodeLineBuilder$Companion_instance = null;
  function CodeLineBuilder$Companion_getInstance() {
    if (CodeLineBuilder$Companion_instance === null) {
      new CodeLineBuilder$Companion();
    }
    return CodeLineBuilder$Companion_instance;
  }
  CodeLineBuilder.prototype.unaryPlus_ll9k3g$ = function ($receiver) {
    this.texts_0.add_11rb$($receiver);
  };
  CodeLineBuilder.prototype.codeSequence_4xqwon$ = function (init) {
    var textWrapperBuilder = new CodeSequenceBuilder(CodeLineBuilder$Companion_getInstance().CODE_SEQUENCE_DEFAULT_TEXT_0, new StyleSet(new CodeSequenceStyle(CodeLineBuilder$Companion_getInstance().CODE_SEQUENCE_DEFAULT_COLOR_0), new CodeSequenceStyle(CodeLineBuilder$Companion_getInstance().CODE_SEQUENCE_DEFAULT_COLOR_0)));
    init(textWrapperBuilder);
    var $receiver = this.texts_0;
    var element = textWrapperBuilder.build();
    $receiver.add_11rb$(element);
  };
  function CodeLineBuilder$codeSequence$lambda(closure$_text, closure$_styleSet, closure$_elementClass) {
    return function ($receiver) {
      $receiver.text = closure$_text;
      $receiver.styleSet = closure$_styleSet;
      $receiver.elementClass = closure$_elementClass;
      return Unit;
    };
  }
  CodeLineBuilder.prototype.codeSequence_m67nre$ = function (_text, _styleSet, _elementClass) {
    if (_elementClass === void 0)
      _elementClass = '';
    this.codeSequence_4xqwon$(CodeLineBuilder$codeSequence$lambda(_text, _styleSet, _elementClass));
  };
  CodeLineBuilder.prototype.codeSequenceWithTabs_2qhsao$ = function (tabCount, text, styleSet, elementClass) {
    if (elementClass === void 0)
      elementClass = '';
    this.codeSequence_m67nre$(addPrefixTabs(text, tabCount), styleSet, elementClass);
  };
  CodeLineBuilder.prototype.codeSequenceWithTabs_jcencv$ = function (tabCount, init) {
    var textWrapperBuilder = new CodeSequenceBuilder(CodeLineBuilder$Companion_getInstance().CODE_SEQUENCE_DEFAULT_TEXT_0, new StyleSet(new CodeSequenceStyle(CodeLineBuilder$Companion_getInstance().CODE_SEQUENCE_DEFAULT_COLOR_0), new CodeSequenceStyle(CodeLineBuilder$Companion_getInstance().CODE_SEQUENCE_DEFAULT_COLOR_0)));
    init(textWrapperBuilder);
    var textWrapper = textWrapperBuilder.build();
    var $receiver = this.texts_0;
    var element = textWrapper.copy_m67nre$(addPrefixTabs(textWrapper.text, tabCount));
    $receiver.add_11rb$(element);
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  CodeLineBuilder.prototype.multipleCodeSequences_6sjgo2$ = function (init) {
    var textWrapperBuilder = new MultipleCodeSequencesBuilder(emptyList(), emptyList(), emptyList());
    init(textWrapperBuilder);
    addAll(this.texts_0, textWrapperBuilder.build());
  };
  CodeLineBuilder.prototype.multipleCodeSequencesWithLeadingTabs_yauztg$ = function (tabCount, init) {
    var textWrapperBuilder = new MultipleCodeSequencesBuilder(emptyList(), emptyList(), emptyList());
    init(textWrapperBuilder);
    var copyOfCharSequences = toMutableList(textWrapperBuilder.charSequences);
    copyOfCharSequences.set_wxm5ur$(0, addPrefixTabs(copyOfCharSequences.get_za3lpa$(0), tabCount));
    textWrapperBuilder.charSequences = copyOfCharSequences;
    addAll(this.texts_0, textWrapperBuilder.build());
  };
  CodeLineBuilder.prototype.build = function () {
    return new CodeLine(this.texts_0);
  };
  function CodeLineBuilder$codeLine$lambda() {
    return Unit;
  }
  CodeLineBuilder.prototype.codeLine_o14v8n$ = function (param) {
    if (param === void 0)
      param = CodeLineBuilder$codeLine$lambda;
  };
  CodeLineBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeLineBuilder',
    interfaces: []
  };
  function CodeBuilder() {
    this.codeLines_0 = ArrayList_init();
  }
  CodeBuilder.prototype.unaryPlus_luir6x$ = function ($receiver) {
    this.codeLines_0.add_11rb$($receiver);
  };
  CodeBuilder.prototype.codeLine_tz2qiy$ = function (init) {
    var codeLineBuilder = new CodeLineBuilder();
    init(codeLineBuilder);
    var $receiver = this.codeLines_0;
    var element = codeLineBuilder.build();
    $receiver.add_11rb$(element);
  };
  CodeBuilder.prototype.build = function () {
    return new CodeBlock(this.codeLines_0);
  };
  function CodeBuilder$code$lambda() {
    return Unit;
  }
  CodeBuilder.prototype.code_o14v8n$ = function (param) {
    if (param === void 0)
      param = CodeBuilder$code$lambda;
  };
  CodeBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeBuilder',
    interfaces: []
  };
  function codeBlock(init) {
    var codeBuilder = new CodeBuilder();
    init(codeBuilder);
    return codeBuilder.build();
  }
  function addPrefixTabs($receiver, tabCount) {
    return repeat('    ', tabCount) + $receiver;
  }
  function CodeWriter() {
  }
  CodeWriter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CodeWriter',
    interfaces: []
  };
  function ContainerManager() {
  }
  ContainerManager.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ContainerManager',
    interfaces: []
  };
  function DivContainerManager(codeContainer, writeDelayInMillisGenerator) {
    if (writeDelayInMillisGenerator === void 0)
      writeDelayInMillisGenerator = DivContainerManager_init$lambda;
    this.codeContainer_0 = codeContainer;
    this.writeDelayInMillisGenerator_0 = writeDelayInMillisGenerator;
  }
  DivContainerManager.prototype.appendLineOfCode_ar2ddm$ = function (codeLine_0, continuation_0, suspended) {
    var instance = new Coroutine$appendLineOfCode_ar2ddm$(this, codeLine_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$appendLineOfCode_ar2ddm$($this, codeLine_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$lineContainer = void 0;
    this.local$tmp$ = void 0;
    this.local$codeLine = codeLine_0;
  }
  Coroutine$appendLineOfCode_ar2ddm$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$appendLineOfCode_ar2ddm$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$appendLineOfCode_ar2ddm$.prototype.constructor = Coroutine$appendLineOfCode_ar2ddm$;
  Coroutine$appendLineOfCode_ar2ddm$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$lineContainer = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
            this.$this.codeContainer_0.appendChild(this.local$lineContainer);
            this.local$tmp$ = this.local$codeLine.line.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = this.$this.handleText_0(element, this.local$lineContainer, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var unboxChar = Kotlin.unboxChar;
  DivContainerManager.prototype.handleText_0 = function (codeSequence_0, codeLineContainer_0, continuation_0, suspended) {
    var instance = new Coroutine$handleText_0(this, codeSequence_0, codeLineContainer_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$handleText_0($this, codeSequence_0, codeLineContainer_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$span = void 0;
    this.local$tmp$ = void 0;
    this.local$codeSequence = codeSequence_0;
    this.local$codeLineContainer = codeLineContainer_0;
  }
  Coroutine$handleText_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$handleText_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$handleText_0.prototype.constructor = Coroutine$handleText_0;
  Coroutine$handleText_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$span = this.$this.toSpanElement_0(this.local$codeSequence);
            this.local$codeLineContainer.appendChild(this.local$span);
            this.local$tmp$ = iterator(this.local$codeSequence.text);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = unboxChar(this.local$tmp$.next());
            var char = toBoxedChar(element);
            this.local$span.innerText = this.local$span.innerText + String.fromCharCode(char);
            this.state_0 = 3;
            this.result_0 = delay(this.$this.writeDelayInMillisGenerator_0(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            var textStyleAfter = this.local$codeSequence.styleSet.textStyleAfter;
            this.local$span.setAttribute('style', this.$this.toCssString_0(textStyleAfter) + 'white-space: pre');
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DivContainerManager.prototype.toSpanElement_0 = function ($receiver) {
    var tmp$;
    var textStyleBefore = $receiver.styleSet.textStyleBefore;
    var $receiver_0 = Kotlin.isType(tmp$ = document.createElement('span'), HTMLSpanElement) ? tmp$ : throwCCE();
    $receiver_0.textContent = '';
    $receiver_0.setAttribute('style', this.toCssString_0(textStyleBefore) + 'white-space: pre');
    $receiver_0.setAttribute('class', $receiver.additionalElementClass);
    return $receiver_0;
  };
  DivContainerManager.prototype.toCssString_0 = function ($receiver) {
    return 'color: ' + $receiver.colorInHex + ';' + ('font-weight: ' + $receiver.fontWeight + ';');
  };
  function DivContainerManager_init$lambda() {
    return 0;
  }
  DivContainerManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DivContainerManager',
    interfaces: [ContainerManager]
  };
  function JsCodeWriter(containerManager) {
    this.containerManager_0 = containerManager;
  }
  function JsCodeWriter$write$lambda(closure$code_0, this$JsCodeWriter_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$JsCodeWriter$write$lambda(closure$code_0, this$JsCodeWriter_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JsCodeWriter$write$lambda(closure$code_0, this$JsCodeWriter_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$code = closure$code_0;
    this.local$this$JsCodeWriter = this$JsCodeWriter_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$JsCodeWriter$write$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JsCodeWriter$write$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JsCodeWriter$write$lambda.prototype.constructor = Coroutine$JsCodeWriter$write$lambda;
  Coroutine$JsCodeWriter$write$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$code.codeLines.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = this.local$this$JsCodeWriter.containerManager_0.appendLineOfCode_ar2ddm$(element, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsCodeWriter.prototype.write_lp2qyj$ = function (code) {
    launch(void 0, void 0, void 0, JsCodeWriter$write$lambda(code, this));
  };
  JsCodeWriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsCodeWriter',
    interfaces: [CodeWriter]
  };
  function CodeBlock(codeLines) {
    this.codeLines = codeLines;
  }
  CodeBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeBlock',
    interfaces: []
  };
  CodeBlock.prototype.component1 = function () {
    return this.codeLines;
  };
  CodeBlock.prototype.copy_e55mlh$ = function (codeLines) {
    return new CodeBlock(codeLines === void 0 ? this.codeLines : codeLines);
  };
  CodeBlock.prototype.toString = function () {
    return 'CodeBlock(codeLines=' + Kotlin.toString(this.codeLines) + ')';
  };
  CodeBlock.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.codeLines) | 0;
    return result;
  };
  CodeBlock.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.codeLines, other.codeLines))));
  };
  function CodeLine(line) {
    this.line = line;
  }
  CodeLine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeLine',
    interfaces: []
  };
  CodeLine.prototype.component1 = function () {
    return this.line;
  };
  CodeLine.prototype.copy_6dmk94$ = function (line) {
    return new CodeLine(line === void 0 ? this.line : line);
  };
  CodeLine.prototype.toString = function () {
    return 'CodeLine(line=' + Kotlin.toString(this.line) + ')';
  };
  CodeLine.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.line) | 0;
    return result;
  };
  CodeLine.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.line, other.line))));
  };
  function CodeSequence(text, styleSet, additionalElementClass) {
    if (additionalElementClass === void 0)
      additionalElementClass = '';
    this.text = text;
    this.styleSet = styleSet;
    this.additionalElementClass = additionalElementClass;
  }
  CodeSequence.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeSequence',
    interfaces: []
  };
  CodeSequence.prototype.component1 = function () {
    return this.text;
  };
  CodeSequence.prototype.component2 = function () {
    return this.styleSet;
  };
  CodeSequence.prototype.component3 = function () {
    return this.additionalElementClass;
  };
  CodeSequence.prototype.copy_m67nre$ = function (text, styleSet, additionalElementClass) {
    return new CodeSequence(text === void 0 ? this.text : text, styleSet === void 0 ? this.styleSet : styleSet, additionalElementClass === void 0 ? this.additionalElementClass : additionalElementClass);
  };
  CodeSequence.prototype.toString = function () {
    return 'CodeSequence(text=' + Kotlin.toString(this.text) + (', styleSet=' + Kotlin.toString(this.styleSet)) + (', additionalElementClass=' + Kotlin.toString(this.additionalElementClass)) + ')';
  };
  CodeSequence.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.styleSet) | 0;
    result = result * 31 + Kotlin.hashCode(this.additionalElementClass) | 0;
    return result;
  };
  CodeSequence.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.styleSet, other.styleSet) && Kotlin.equals(this.additionalElementClass, other.additionalElementClass)))));
  };
  function CodeSequenceStyle(colorInHex, fontWeight) {
    if (fontWeight === void 0)
      fontWeight = WeightValue$NORMAL_getInstance();
    this.colorInHex = colorInHex;
    this.fontWeight = fontWeight;
  }
  CodeSequenceStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeSequenceStyle',
    interfaces: []
  };
  CodeSequenceStyle.prototype.component1 = function () {
    return this.colorInHex;
  };
  CodeSequenceStyle.prototype.component2 = function () {
    return this.fontWeight;
  };
  CodeSequenceStyle.prototype.copy_6xzuh2$ = function (colorInHex, fontWeight) {
    return new CodeSequenceStyle(colorInHex === void 0 ? this.colorInHex : colorInHex, fontWeight === void 0 ? this.fontWeight : fontWeight);
  };
  CodeSequenceStyle.prototype.toString = function () {
    return 'CodeSequenceStyle(colorInHex=' + Kotlin.toString(this.colorInHex) + (', fontWeight=' + Kotlin.toString(this.fontWeight)) + ')';
  };
  CodeSequenceStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.colorInHex) | 0;
    result = result * 31 + Kotlin.hashCode(this.fontWeight) | 0;
    return result;
  };
  CodeSequenceStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.colorInHex, other.colorInHex) && Kotlin.equals(this.fontWeight, other.fontWeight)))));
  };
  function StyleSet(textStyleBefore, textStyleAfter) {
    this.textStyleBefore = textStyleBefore;
    this.textStyleAfter = textStyleAfter;
  }
  StyleSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StyleSet',
    interfaces: []
  };
  StyleSet.prototype.component1 = function () {
    return this.textStyleBefore;
  };
  StyleSet.prototype.component2 = function () {
    return this.textStyleAfter;
  };
  StyleSet.prototype.copy_n3ctm8$ = function (textStyleBefore, textStyleAfter) {
    return new StyleSet(textStyleBefore === void 0 ? this.textStyleBefore : textStyleBefore, textStyleAfter === void 0 ? this.textStyleAfter : textStyleAfter);
  };
  StyleSet.prototype.toString = function () {
    return 'StyleSet(textStyleBefore=' + Kotlin.toString(this.textStyleBefore) + (', textStyleAfter=' + Kotlin.toString(this.textStyleAfter)) + ')';
  };
  StyleSet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.textStyleBefore) | 0;
    result = result * 31 + Kotlin.hashCode(this.textStyleAfter) | 0;
    return result;
  };
  StyleSet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.textStyleBefore, other.textStyleBefore) && Kotlin.equals(this.textStyleAfter, other.textStyleAfter)))));
  };
  function WeightValue(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WeightValue_initFields() {
    WeightValue_initFields = function () {
    };
    WeightValue$NORMAL_instance = new WeightValue('NORMAL', 0);
    WeightValue$BOLD_instance = new WeightValue('BOLD', 1);
  }
  var WeightValue$NORMAL_instance;
  function WeightValue$NORMAL_getInstance() {
    WeightValue_initFields();
    return WeightValue$NORMAL_instance;
  }
  var WeightValue$BOLD_instance;
  function WeightValue$BOLD_getInstance() {
    WeightValue_initFields();
    return WeightValue$BOLD_instance;
  }
  WeightValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeightValue',
    interfaces: [Enum]
  };
  function WeightValue$values() {
    return [WeightValue$NORMAL_getInstance(), WeightValue$BOLD_getInstance()];
  }
  WeightValue.values = WeightValue$values;
  function WeightValue$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return WeightValue$NORMAL_getInstance();
      case 'BOLD':
        return WeightValue$BOLD_getInstance();
      default:throwISE('No enum constant model.WeightValue.' + name);
    }
  }
  WeightValue.valueOf_61zpoe$ = WeightValue$valueOf;
  var package$builder = _.builder || (_.builder = {});
  package$builder.CodeSequenceBuilder = CodeSequenceBuilder;
  package$builder.MultipleCodeSequencesBuilder = MultipleCodeSequencesBuilder;
  Object.defineProperty(CodeLineBuilder, 'Companion', {
    get: CodeLineBuilder$Companion_getInstance
  });
  package$builder.CodeLineBuilder = CodeLineBuilder;
  package$builder.CodeBuilder = CodeBuilder;
  package$builder.codeBlock_conr1y$ = codeBlock;
  package$builder.addPrefixTabs_6ic1pp$ = addPrefixTabs;
  var package$codewriter = _.codewriter || (_.codewriter = {});
  package$codewriter.CodeWriter = CodeWriter;
  package$codewriter.ContainerManager = ContainerManager;
  var package$impl = package$codewriter.impl || (package$codewriter.impl = {});
  package$impl.DivContainerManager = DivContainerManager;
  package$impl.JsCodeWriter = JsCodeWriter;
  var package$model = _.model || (_.model = {});
  package$model.CodeBlock = CodeBlock;
  package$model.CodeLine = CodeLine;
  package$model.CodeSequence = CodeSequence;
  package$model.CodeSequenceStyle = CodeSequenceStyle;
  package$model.StyleSet = StyleSet;
  Object.defineProperty(WeightValue, 'NORMAL', {
    get: WeightValue$NORMAL_getInstance
  });
  Object.defineProperty(WeightValue, 'BOLD', {
    get: WeightValue$BOLD_getInstance
  });
  package$model.WeightValue = WeightValue;
  Kotlin.defineModule('code-writer-library', _);
  return _;
}(typeof this['code-writer-library'] === 'undefined' ? {} : this['code-writer-library'], kotlin, this['kotlinx-coroutines-core-js']);
