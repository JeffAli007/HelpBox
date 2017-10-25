  
//window.onload = function () {
//    var url = window.location.href;
//    if (url.includes("wtf=true")) {
//        var ele = document.getElementById('el5');
//        ele.style.outline = "#ff6600 solid thick";

//        document.getElementById('el5').onmousedown = function () { dummyOnMouseDown('el5', 'tr68') };
//        document.getElementById('tr68').onmousedown = function () { dummyOnMouseDown('tr68', 'el58') };
//    }
//};

//function dummyOnMouseDown(elementId1, elementId2) {
//    var element1 = document.getElementById(elementId1);
//    var element2 = document.getElementById(elementId2);

//    element1.style.outline = "0px";
//    element2.style.outline = "#ff6600 solid thick";
//}

//function testfun() {
//    var win = window.open('http://localhost/MDMCenter/Main/Entity/EntityExplorer.aspx?wtf=true', '_blank');
//    win.focus();
//}

window.onload = function () {
    debugger;
    var flowstatus = localStorage.getItem('flowStatus');
    if (flowstatus == "true") {
        debugger;
        setTimeout(function () { startIntro(); }, 1000);
    }
};

//document.addEventListener("readystatechange", function () {
//    debugger;
//    if (document.readyState == "complete") {
//        debugger;
//        var flowstatus = localStorage.getItem('flowStatus');
//        if (flowstatus == "true") {
//            debugger;
//            startIntro();
//        }
//    }
//},false);

//document.addEventListener('DOMContentLoaded', function () {
//    debugger;
//    var flowstatus = localStorage.getItem('flowStatus');
//    if (flowstatus == "true") {
//        debugger;
//        startIntro();
//    }
//}, false);

function startIntro() {
    var intro = introJs();

    var stepsFromJson = data;
    intro.setOptions({
        steps:stepsFromJson
        //steps: [
        //  {
        //      element: '#el5',
        //      intro: "Click <b>Tools</b>.",
        //      step : 1
        //  },
        //  {
        //      element: '#tr68',
        //      intro: "Click <b>System Administration</b>.",
        //      position: 'right',
        //      step : 2
        //  },
        //  {
        //      element: '#el58',
        //      intro: 'Click <b>System Administration</b>.',
        //      position: 'left',
        //      step : 3
        //  }
        //]
    });

    intro.start();
}

var introJs = function (targetElm) {
    //if (typeof (targetElm) === 'object') {
    //    //Ok, create a new instance
    //    return new IntroJs(targetElm);

    //} else if (typeof (targetElm) === 'string') {
    //    //select the target element with query selector
    //    var targetElement = document.querySelector(targetElm);

    //    if (targetElement) {
    //        return new IntroJs(targetElement);
    //    } else {
    //        throw new Error('There is no element with given selector.');
    //    }
    //} else {
        return new IntroJs(document.body);
    //}
};

function IntroJs(obj) {
    this._targetElement = obj;
    this._introItems = [];

    this._options = {
        /* Next button label in tooltip box */
        nextLabel: 'Next &rarr;',
        /* Previous button label in tooltip box */
        //prevLabel: '&larr; Back',
        /* Skip button label in tooltip box */
        skipLabel: 'Close',
        /* Done button label in tooltip box */
        doneLabel: 'Done',
        /* Hide previous button in the first step? Otherwise, it will be disabled button. */
        //hidePrev: false,
        /* Hide next button in the last step? Otherwise, it will be disabled button. */
        //hideNext: false,
        /* Default tooltip box position */
        tooltipPosition: 'bottom',
        /* Next CSS class for tooltip boxes */
        tooltipClass: '',
        /* CSS class that is added to the helperLayer */
        highlightClass: '',
        /* Close introduction when pressing Escape button? */
        //exitOnEsc: true,
        /* Close introduction when clicking on overlay layer? */
        //exitOnOverlayClick: true,
        /* Show step numbers in introduction? */
        showStepNumbers: true,
        /* Let user use keyboard to navigate the tour? */
        //keyboardNavigation: true,
        /* Show tour control buttons? */
        //showButtons: true,
        /* Show tour bullets? */
        showBullets: true,
        /* Show tour progress? */
        //showProgress: false,
        /* Scroll to highlighted element? */
        //scrollToElement: true,
        /* Set the overlay opacity */
        //overlayOpacity: 0.8,
        /* Padding to add after scrolling when element is not in the viewport (in pixels) */
        scrollPadding: 30,
        /* Precedence of positions, when auto is enabled */
        positionPrecedence: ["bottom", "top", "right", "left"],
        /* Disable an interaction with element? */
        //disableInteraction: false,
        ///* Default hint position */
        //hintPosition: 'top-middle',
        ///* Hint button label */
        //hintButtonLabel: 'Got it',
        ///* Adding animation to hints? */
        //hintAnimation: true
    };
}

introJs.fn = IntroJs.prototype = {
    //clone: function () {
    //    return new IntroJs(this);
    //},
    setOption: function (option, value) {
        this._options[option] = value;
        return this;
    },
    setOptions: function (options) {
        this._options = _mergeOptions(this._options, options);
        return this;
    },
    start: function () {
        _introForElement.call(this, this._targetElement);
        return this;
    },
    //goToStep: function (step) {
    //    _goToStep.call(this, step);
    //    return this;
    //},
    //addStep: function (options) {
    //    if (!this._options.steps) {
    //        this._options.steps = [];
    //    }

    //    this._options.steps.push(options);

    //    return this;
    //},
    //addSteps: function (steps) {
    //    if (!steps.length) return;

    //    for (var index = 0; index < steps.length; index++) {
    //        this.addStep(steps[index]);
    //    }

    //    return this;
    //},
    //goToStepNumber: function (step) {
    //    _goToStepNumber.call(this, step);

    //    return this;
    //},
    nextStep: function () {
        _nextStep.call(this);
        return this;
    },
    //previousStep: function () {
    //    _previousStep.call(this);
    //    return this;
    //},
    exit: function () {
        _exitIntro.call(this, this._targetElement);
        return this;
    }
    //refresh: function () {
    //    // re-align intros
    //    _setHelperLayerPosition.call(this, document.querySelector('.introjs-helperLayer'));
    //    _setHelperLayerPosition.call(this, document.querySelector('.introjs-tooltipReferenceLayer'));

    //    //re-align hints
    //    _reAlignHints.call(this);
    //    return this;
    //},
    //onbeforechange: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._introBeforeChangeCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for onbeforechange was not a function');
    //    }
    //    return this;
    //},
    //onchange: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._introChangeCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for onchange was not a function.');
    //    }
    //    return this;
    //},
    //onafterchange: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._introAfterChangeCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for onafterchange was not a function');
    //    }
    //    return this;
    //},
    //oncomplete: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._introCompleteCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for oncomplete was not a function.');
    //    }
    //    return this;
    //},
    //onhintsadded: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._hintsAddedCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for onhintsadded was not a function.');
    //    }
    //    return this;
    //},
    //onhintclick: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._hintClickCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for onhintclick was not a function.');
    //    }
    //    return this;
    //},
    //onhintclose: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._hintCloseCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for onhintclose was not a function.');
    //    }
    //    return this;
    //},
    //onexit: function (providedCallback) {
    //    if (typeof (providedCallback) === 'function') {
    //        this._introExitCallback = providedCallback;
    //    } else {
    //        throw new Error('Provided callback for onexit was not a function.');
    //    }
    //    return this;
    //},
    //addHints: function () {
    //    _populateHints.call(this, this._targetElement);
    //    return this;
    //},
    //hideHint: function (stepId) {
    //    _hideHint.call(this, stepId);
    //    return this;
    //},
    //hideHints: function () {
    //    _hideHints.call(this);
    //    return this;
    //},
    //showHint: function (stepId) {
    //    _showHint.call(this, stepId);
    //    return this;
    //},
    //showHints: function () {
    //    _showHints.call(this);
    //    return this;
    //},
    //removeHints: function () {
    //    _removeHints.call(this);
    //    return this;
    //},
    //removeHint: function (stepId) {
    //    _removeHint.call(this, stepId);
    //    return this;
    //}
};

function _introForElement(targetElm) {
    var introItems = [];
    var self = this;
    var temp = 0;
    
    ////Experiment 1 : store object in session storage for using in next page  Result : failed, because this Javascript scope is for only one page
    //debugger;
    ////retrieve session storage object if it is already set
    //if (sessionStorage.getItem('globalObj') !== null) {
    //    var retrievedObj = sessionStorage.getItem('globalObj');
    //    var parsedObj = JSON.parse(retrievedObj);
    //    self = parsedObj;
    //    //this = self;
    //}
    //else {
    //    self = this;
    //}
    ////Experiment 1 : finished

    var url = window.location.href;

    if (this._options.steps) {
        //use steps passed programmatically
        for (var i = 0, stepsLength = this._options.steps.length; i < stepsLength; i++) {

            var currentItem = _cloneObject(this._options.steps[i]);

            if (url == currentItem.url)
            {
                //set the current page step number
                currentItem.currentPageStepNumber = temp + 1;
                temp++;

                //set maximum step number of current page [not use ecause it is part of Experiment 1]
                this._currentPageMaxStepNumber = currentItem.currentPageStepNumber;

                //First check given element id's inner text is matched with given element innerHtml
                if (typeof (currentItem.element) != 'undefined' && document.getElementById(currentItem.element) != null && (typeof (currentItem.innerhtml) == 'undefined' || currentItem.innerhtml == document.getElementById(currentItem.element).textContent)) {
                    debugger;
                    //use querySelector function only when developer used CSS selector
                    if (typeof (currentItem.element) === 'string') {
                        //grab the element with given selector from the page
                        currentItem.element = document.getElementById(currentItem.element);
                    }
                }
                //IF only innerHtml of element is given then this code segment execute
                else if (typeof (currentItem.innerhtml) != undefined) {
                    if (typeof (currentItem.tag) === 'string' && typeof (currentItem.innerhtml) === 'string') {

                        var aTags = document.getElementsByTagName(currentItem.tag);

                        for (var j = 0; j < aTags.length; j++) {
                            if (aTags[j].textContent == currentItem.innerhtml) {
                                currentItem.element = aTags[j];
                                break;
                            }
                        }
                    }
                }
            }

            else {
                currentItem.currentPageStepNumber = 100;
            }

            

            ////intro without element
            //if (typeof (currentItem.element) === 'undefined' || currentItem.element == null) {
            //    var floatingElementQuery = document.querySelector(".introjsFloatingElement");

            //    if (floatingElementQuery == null) {
            //        floatingElementQuery = document.createElement('div');
            //        floatingElementQuery.className = 'introjsFloatingElement';

            //        document.body.appendChild(floatingElementQuery);
            //    }

            //    currentItem.element = floatingElementQuery;
            //    currentItem.position = 'floating';
            //}

            if (currentItem.element != null ) {
                introItems.push(currentItem);
            }
        }

    } 
    //else {
    //    //use steps from data-* annotations
    //    var allIntroSteps = targetElm.querySelectorAll('*[data-intro]');
    //    //if there's no element to intro
    //    if (allIntroSteps.length < 1) {
    //        return false;
    //    }

    //    //first add intro items with data-step
    //    for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
    //        var currentElement = allIntroSteps[i];

    //        // skip hidden elements
    //        if (currentElement.style.display == 'none') {
    //            continue;
    //        }

    //        var step = parseInt(currentElement.getAttribute('data-step'), 10);

    //        if (step > 0) {
    //            introItems[step - 1] = {
    //                element: currentElement,
    //                intro: currentElement.getAttribute('data-intro'),
    //                step: parseInt(currentElement.getAttribute('data-step'), 10),
    //                tooltipClass: currentElement.getAttribute('data-tooltipClass'),
    //                highlightClass: currentElement.getAttribute('data-highlightClass'),
    //                position: currentElement.getAttribute('data-position') || this._options.tooltipPosition
    //            };
    //        }
    //    }

    //    //next add intro items without data-step
    //    //todo: we need a cleanup here, two loops are redundant
    //    var nextStep = 0;
    //    for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
    //        var currentElement = allIntroSteps[i];

    //        if (currentElement.getAttribute('data-step') == null) {

    //            while (true) {
    //                if (typeof introItems[nextStep] == 'undefined') {
    //                    break;
    //                } else {
    //                    nextStep++;
    //                }
    //            }

    //            introItems[nextStep] = {
    //                element: currentElement,
    //                intro: currentElement.getAttribute('data-intro'),
    //                step: nextStep + 1,
    //                tooltipClass: currentElement.getAttribute('data-tooltipClass'),
    //                highlightClass: currentElement.getAttribute('data-highlightClass'),
    //                position: currentElement.getAttribute('data-position') || this._options.tooltipPosition
    //            };
    //        }
    //    }
    //}

    //removing undefined/null elements
    var tempIntroItems = [];
    for (var z = 0; z < introItems.length; z++) {
        introItems[z] && tempIntroItems.push(introItems[z]);  // copy non-empty values to the end of the array
    }

    introItems = tempIntroItems;

    //Ok, sort all items with given steps
    introItems.sort(function (a, b) {
        return a.currentPageStepNumber - b.currentPageStepNumber;
    });

    //set it to the introJs object
    self._introItems = introItems;
    

    //add overlay layer to the page
    //if (_addOverlayLayer.call(self, targetElm)) {
        //then, start the show
        _nextStep.call(self);

        var skipButton = targetElm.querySelector('.introjs-skipbutton'),
            nextStepButton = targetElm.querySelector('.introjs-nextbutton');

        //self._onKeyDown = function (e) {
        //    if (e.keyCode === 27 && self._options.exitOnEsc == true) {
        //        //escape key pressed, exit the intro
        //        //check if exit callback is defined
        //        _exitIntro.call(self, targetElm);
        //    } else if (e.keyCode === 37) {
        //        //left arrow
        //        _previousStep.call(self);
        //    } else if (e.keyCode === 39) {
        //        //right arrow
        //        _nextStep.call(self);
        //    } else if (e.keyCode === 13) {
        //        //srcElement === ie
        //        var target = e.target || e.srcElement;
        //        if (target && target.className.indexOf('introjs-prevbutton') > 0) {
        //            //user hit enter while focusing on previous button
        //            _previousStep.call(self);
        //        } else if (target && target.className.indexOf('introjs-skipbutton') > 0) {
        //            //user hit enter while focusing on skip button
        //            if (self._introItems.length - 1 == self._currentStep && typeof (self._introCompleteCallback) === 'function') {
        //                self._introCompleteCallback.call(self);
        //            }

        //            _exitIntro.call(self, targetElm);
        //        } else {
        //            //default behavior for responding to enter
        //            _nextStep.call(self);
        //        }

        //        //prevent default behaviour on hitting Enter, to prevent steps being skipped in some browsers
        //        if (e.preventDefault) {
        //            e.preventDefault();
        //        } else {
        //            e.returnValue = false;
        //        }
        //    }
        //};

        self._onResize = function (e) {
            _setHelperLayerPosition.call(self, document.querySelector('.introjs-helperLayer'));
            _setHelperLayerPosition.call(self, document.querySelector('.introjs-tooltipReferenceLayer'));
        };

        if (window.addEventListener) {
            //if (this._options.keyboardNavigation) {
            //    window.addEventListener('keydown', self._onKeyDown, true);
            //}
            //for window resize
            window.addEventListener('resize', self._onResize, true);
        } else if (document.attachEvent) { //IE
            //if (this._options.keyboardNavigation) {
            //    document.attachEvent('onkeydown', self._onKeyDown);
            //}
            //for window resize
            document.attachEvent('onresize', self._onResize);
        }

    //}
    return false;
}

function _cloneObject(object) {
    if (object == null || typeof (object) != 'object' || typeof (object.nodeType) != 'undefined') {
        return object;
    }
    var temp = {};
    for (var key in object) {
        if (typeof (jQuery) != 'undefined' && object[key] instanceof jQuery) {
            temp[key] = object[key];
        } else {
            temp[key] = _cloneObject(object[key]);
        }
    }
    return temp;
}

//function _addOverlayLayer(targetElm) {
//    var overlayLayer = document.createElement('div'),
//        styleText = '',
//        self = this;

//    //set css class name
//    overlayLayer.className = 'introjs-overlay';

//    //check if the target element is body, we should calculate the size of overlay layer in a better way
//    if (!targetElm.tagName || targetElm.tagName.toLowerCase() === 'body') {
//        styleText += 'top: 0;bottom: 0; left: 0;right: 0;position: fixed;';
//        overlayLayer.setAttribute('style', styleText);
//    } else {
//        //set overlay layer position
//        var elementPosition = _getOffset(targetElm);
//        if (elementPosition) {
//            styleText += 'width: ' + elementPosition.width + 'px; height:' + elementPosition.height + 'px; top:' + elementPosition.top + 'px;left: ' + elementPosition.left + 'px;';
//            overlayLayer.setAttribute('style', styleText);
//        }
//    }

//    targetElm.appendChild(overlayLayer);

//    overlayLayer.onclick = function () {
//        if (self._options.exitOnOverlayClick == true) {
//            _exitIntro.call(self, targetElm);
//        }
//    };

//    setTimeout(function () {
//        styleText += 'opacity: ' + self._options.overlayOpacity.toString() + ';';
//        overlayLayer.setAttribute('style', styleText);
//    }, 10);

//    return true;
//}

function _showElement(targetElement) {
    if (typeof (this._introChangeCallback) !== 'undefined') {
        this._introChangeCallback.call(this, targetElement.element);
    }

    var self = this,
        oldHelperLayer = document.querySelector('.introjs-helperLayer'),
        oldReferenceLayer = document.querySelector('.introjs-tooltipReferenceLayer'),
        highlightClass = 'introjs-helperLayer',
        elementPosition = _getOffset(targetElement.element),
		currentElement = targetElement.element;

    //check for a current step highlight class
    if (typeof (targetElement.highlightClass) === 'string') {
        highlightClass += (' ' + targetElement.highlightClass);
    }
    //check for options highlight class
    if (typeof (this._options.highlightClass) === 'string') {
        highlightClass += (' ' + this._options.highlightClass);
    }

    if (oldHelperLayer != null) {
        var oldHelperNumberLayer = oldReferenceLayer.querySelector('.introjs-helperNumberLayer'),
            oldtooltipLayer = oldReferenceLayer.querySelector('.introjs-tooltiptext'),
            oldArrowLayer = oldReferenceLayer.querySelector('.introjs-arrow'),
            oldtooltipContainer = oldReferenceLayer.querySelector('.introjs-tooltip'),
            skipTooltipButton = oldReferenceLayer.querySelector('.introjs-skipbutton'),
            prevTooltipButton = oldReferenceLayer.querySelector('.introjs-prevbutton'),
            nextTooltipButton = oldReferenceLayer.querySelector('.introjs-nextbutton');
        //var currentElement = targetElement.element;

        //update or reset the helper highlight class
        oldHelperLayer.className = highlightClass;
        //hide the tooltip
        oldtooltipContainer.style.opacity = 0;
        oldtooltipContainer.style.display = "none";

        if (oldHelperNumberLayer != null) {
            var lastIntroItem = this._introItems[(targetElement.currentPageStepNumber - 2 >= 0 ? targetElement.currentPageStepNumber - 2 : 0)];

            if (lastIntroItem != null && (this._direction == 'forward' && lastIntroItem.position == 'floating') || (this._direction == 'backward' && targetElement.position == 'floating')) {
                oldHelperNumberLayer.style.opacity = 0;
            }
        }

        //set new position to helper layer
        _setHelperLayerPosition.call(self, oldHelperLayer);
        _setHelperLayerPosition.call(self, oldReferenceLayer);
        lastIntroItem.element.style.outline = "0px";

        //remove `introjs-fixParent` class from the elements
        var fixParents = document.querySelectorAll('.introjs-fixParent');
        if (fixParents && fixParents.length > 0) {
            for (var i = fixParents.length - 1; i >= 0; i--) {
                fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
            };
        }

        //remove old classes if the element still exist
        _removeShowElement();

        //we should wait until the CSS3 transition is competed (it's 0.3 sec) to prevent incorrect `height` and `width` calculation
        if (self._lastShowElementTimer) {
            clearTimeout(self._lastShowElementTimer);
        }
        self._lastShowElementTimer = setTimeout(function () {
            //set current step to the label
            if (oldHelperNumberLayer != null) {
                oldHelperNumberLayer.innerHTML = targetElement.step;
            }
            //set current tooltip text
            oldtooltipLayer.innerHTML = targetElement.intro;

            // //set current element mouse down event
            // //var myElement = targetElement.element;
            currentElement.style.outline = "#ff6600 solid";
            // currentElement.addEventListener("mousedown", function () {
                // if (self._introItems.length - 1 != self._currentStep) {
                    // _nextStep.call(self);
                // }
            // }, false);

            //set the tooltip position
            oldtooltipContainer.style.display = "block";
            _placeTooltip.call(self, targetElement.element, oldtooltipContainer, oldArrowLayer, oldHelperNumberLayer);

            //change active bullet
            if (self._options.showBullets) {
                oldReferenceLayer.querySelector('.introjs-bullets li > a.active').className = '';
                oldReferenceLayer.querySelector('.introjs-bullets li > a[data-stepnumber="' + targetElement.step + '"]').className = 'active';
            }
            //oldReferenceLayer.querySelector('.introjs-progress .introjs-progressbar').setAttribute('style', 'width:' + _getProgress.call(self) + '%;');

            //show the tooltip
            oldtooltipContainer.style.opacity = 1;
            if (oldHelperNumberLayer) oldHelperNumberLayer.style.opacity = 1;

            ////reset button focus
            //if (nextTooltipButton.tabIndex === -1) {
            //    //tabindex of -1 means we are at the end of the tour - focus on skip / done
            //    skipTooltipButton.focus();
            //} else {
            //    //still in the tour, focus on next
            //    nextTooltipButton.focus();
            //}
        }, 350);

        // end of old element if-else condition
    } else {
        var helperLayer = document.createElement('div'),
            referenceLayer = document.createElement('div'),
            arrowLayer = document.createElement('div'),
            tooltipLayer = document.createElement('div'),
            tooltipTextLayer = document.createElement('div'),
            bulletsLayer = document.createElement('div'),
            progressLayer = document.createElement('div'),
            buttonsLayer = document.createElement('div');
        //var currentElement = targetElement.element;
		
		//Make border outside current element
        currentElement.style.outline = "#ff6600 solid";

        helperLayer.className = highlightClass;
        referenceLayer.className = 'introjs-tooltipReferenceLayer';

        //set new position to helper layer
        _setHelperLayerPosition.call(self, helperLayer);
        _setHelperLayerPosition.call(self, referenceLayer);

        //add helper layer to target element
        this._targetElement.appendChild(helperLayer);
        this._targetElement.appendChild(referenceLayer);

        arrowLayer.className = 'introjs-arrow';

        tooltipTextLayer.className = 'introjs-tooltiptext';
        tooltipTextLayer.innerHTML = targetElement.intro;

        bulletsLayer.className = 'introjs-bullets';

        if (this._options.showBullets === false) {
            bulletsLayer.style.display = 'none';
        }

        var ulContainer = document.createElement('ul');
        debugger;
        for (var i = 0, stepsLength = this._introItems.length; i < stepsLength; i++) {
            var innerLi = document.createElement('li');
            var anchorLink = document.createElement('a');

            //anchorLink.onclick = function () {
            //    self.goToStep(this.getAttribute('data-stepnumber'));
            //};

            if (i === (targetElement.step - 1)) anchorLink.className = 'active';

            _setAnchorAsButton(anchorLink);
            anchorLink.innerHTML = "&nbsp;";
            anchorLink.setAttribute('data-stepnumber', this._introItems[i].step);

            innerLi.appendChild(anchorLink);
            ulContainer.appendChild(innerLi);
        }

        bulletsLayer.appendChild(ulContainer);

        //progressLayer.className = 'introjs-progress';

        //if (this._options.showProgress === false) {
        //    progressLayer.style.display = 'none';
        //}
        //var progressBar = document.createElement('div');
        //progressBar.className = 'introjs-progressbar';
        //progressBar.setAttribute('style', 'width:' + _getProgress.call(this) + '%;');

        //progressLayer.appendChild(progressBar);

        buttonsLayer.className = 'introjs-tooltipbuttons';
        if (this._options.showButtons === false) {
            buttonsLayer.style.display = 'none';
        }

        tooltipLayer.className = 'introjs-tooltip';
        tooltipLayer.appendChild(tooltipTextLayer);
        tooltipLayer.appendChild(bulletsLayer);
        tooltipLayer.appendChild(progressLayer);

        //add helper layer number
        if (this._options.showStepNumbers == true) {
            var helperNumberLayer = document.createElement('span');
            helperNumberLayer.className = 'introjs-helperNumberLayer';
            helperNumberLayer.innerHTML = targetElement.step;
            referenceLayer.appendChild(helperNumberLayer);
            //elementLayer.appendChild(helperNumberLayer);
        }

        tooltipLayer.appendChild(arrowLayer);
        referenceLayer.appendChild(tooltipLayer);
        //elementLayer.appendChild(tooltipLayer);

        
        
        
        ////previous button
        //var prevTooltipButton = document.createElement('a');

        //prevTooltipButton.onclick = function () {
        //    if (self._currentStep != 0) {
        //        _previousStep.call(self);
        //    }
        //};

        //_setAnchorAsButton(prevTooltipButton);
        //prevTooltipButton.innerHTML = this._options.prevLabel;

        //skip button
        var skipTooltipButton = document.createElement('a');
        skipTooltipButton.className = 'introjs-button introjs-skipbutton';
        _setAnchorAsButton(skipTooltipButton);
        skipTooltipButton.innerHTML = this._options.skipLabel;

        skipTooltipButton.onclick = function () {
            if (self._introItems.length - 1 == self._currentStep && typeof (self._introCompleteCallback) === 'function') {
                self._introCompleteCallback.call(self);
            }

            _exitIntro.call(self, self._targetElement);
        };

        buttonsLayer.appendChild(skipTooltipButton);

        //in order to prevent displaying next/previous button always
        //if (this._introItems.length > 1) {
        //    buttonsLayer.appendChild(prevTooltipButton);
        //    buttonsLayer.appendChild(nextTooltipButton);
        //}

        //next button
        var nextTooltipButton = document.createElement('a');

        nextTooltipButton.onclick = function () {
            if (self._introItems.length - 1 != self._currentStep) {
                _nextStep.call(self);
            }
        };

        _setAnchorAsButton(nextTooltipButton);
        nextTooltipButton.innerHTML = this._options.nextLabel;

        buttonsLayer.appendChild(nextTooltipButton);

        ////Check if nextButton option in JSON is true or not
        //if (targetElement.nextButton) {
        //    //next button
        //    var nextTooltipButton = document.createElement('a');

        //    nextTooltipButton.onclick = function () {
        //        if (self._introItems.length - 1 != self._currentStep) {
        //            _nextStep.call(self);
        //        }
        //    };

        //    _setAnchorAsButton(nextTooltipButton);
        //    nextTooltipButton.innerHTML = this._options.nextLabel;

        //    buttonsLayer.appendChild(nextTooltipButton);
        //}
        //else {
        //    //set click listener on next element
        //    currentElement.addEventListener("mousedown", function () {
        //        if (self._introItems.length - 1 != self._currentStep) {
        //            _nextStep.call(self);
        //        }
        //    }, false);
        //}

        tooltipLayer.appendChild(buttonsLayer);

        //set proper position
        _placeTooltip.call(self, targetElement.element, tooltipLayer, arrowLayer, helperNumberLayer);

        //end of new element if-else condition
    }

    //disable interaction
    //if (this._options.disableInteraction === true) {
    //    _disableInteraction.call(self);
    //}

    //prevTooltipButton.removeAttribute('tabIndex');
    //nextTooltipButton.removeAttribute('tabIndex');

    // when it's the first step of tour
    if (this._currentStep == 0 && this._introItems.length > 1) {
        skipTooltipButton.className = 'introjs-button introjs-skipbutton';
        nextTooltipButton.className = 'introjs-button introjs-nextbutton';

        //Check if nextButton option in JSON is true or not
        if (targetElement.nextButton != true) {
            nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-hidden';

            //set click listener on next element
            currentElement.addEventListener("mousedown", function () {
                if (self._introItems.length - 1 != self._currentStep) {
                    _nextStep.call(self);
                }
            }, false);

        } else {
        }

        //if (this._options.hidePrev == true) {
        //    prevTooltipButton.className = 'introjs-button introjs-prevbutton introjs-hidden';
        //    nextTooltipButton.className += ' introjs-fullbutton';
        //} else {
        //    prevTooltipButton.className = 'introjs-button introjs-prevbutton introjs-disabled';
        //}

        //prevTooltipButton.tabIndex = '-1';
        skipTooltipButton.innerHTML = this._options.skipLabel;
    } else if (this._introItems.length - 1 == this._currentStep || this._introItems.length == 1) {
        // last step of tour
        skipTooltipButton.innerHTML = this._options.doneLabel;
        // adding donebutton class in addition to skipbutton
        skipTooltipButton.className += ' introjs-donebutton';
        //prevTooltipButton.className = 'introjs-button introjs-prevbutton';

        nextTooltipButton.className = 'introjs-button introjs-nextbutton';

        //Check if nextButton option in JSON is true or not
        if (targetElement.nextButton != true) {
            nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-hidden';

            //set click listener on next element
            currentElement.addEventListener("mousedown", function () {
                if (self._introItems.length - 1 != self._currentStep) {
                    _nextStep.call(self);
                }
            }, false);

        } else {
        }

        //if (this._options.hideNext == true) {
        //    nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-hidden';
        //    prevTooltipButton.className += ' introjs-fullbutton';
        //} else {
        //    nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-disabled';
        //}

        //nextTooltipButton.tabIndex = '-1';
    } else {
        // steps between start and end
        skipTooltipButton.className = 'introjs-button introjs-skipbutton';
        //prevTooltipButton.className = 'introjs-button introjs-prevbutton';
        nextTooltipButton.className = 'introjs-button introjs-nextbutton';
        skipTooltipButton.innerHTML = this._options.skipLabel;

        //Check if nextButton option in JSON is true or not
        if (targetElement.nextButton != true) {
            nextTooltipButton.className = 'introjs-button introjs-nextbutton introjs-hidden';

            //set click listener on next element
            currentElement.addEventListener("mousedown", function () {
                if (self._introItems.length - 1 != self._currentStep) {
                    _nextStep.call(self);
                }
            }, false);

        } else {
        }
    }

    //Set focus on "next" button, so that hitting Enter always moves you onto the next step
    //nextTooltipButton.focus();

    _setShowElement(targetElement);

    if (!_elementInViewport(targetElement.element) && this._options.scrollToElement === true) {
        var rect = targetElement.element.getBoundingClientRect(),
          winHeight = _getWinSize().height,
          top = rect.bottom - (rect.bottom - rect.top),
          bottom = rect.bottom - winHeight;

        //Scroll up
        if (top < 0 || targetElement.element.clientHeight > winHeight) {
            window.scrollBy(0, top - this._options.scrollPadding); // 30px padding from edge to look nice

            //Scroll down
        } else {
            window.scrollBy(0, bottom + 70 + this._options.scrollPadding); // 70px + 30px padding from edge to look nice
        }
    }

    if (typeof (this._introAfterChangeCallback) !== 'undefined') {
        this._introAfterChangeCallback.call(this, targetElement.element);
    }
}

/**
 * To remove all show element(s)
 *
 * @api private
 * @method _removeShowElement
 */
function _removeShowElement() {
    var elms = document.querySelectorAll('.introjs-showElement');

    for (var i = 0, l = elms.length; i < l; i++) {
        var elm = elms[i];
        _removeClass(elm, /introjs-[a-zA-Z]+/g);
    }
}

/**
 * To set the show element
 * This function set a relative (in most cases) position and changes the z-index
 *
 * @api private
 * @method _setShowElement
 * @param {Object} targetElement
 */
function _setShowElement(targetElement) {
    // we need to add this show element class to the parent of SVG elements
    // because the SVG elements can't have independent z-index
    if (targetElement.element instanceof SVGElement) {
        var parentElm = targetElement.element.parentNode;

        while (targetElement.element.parentNode != null) {
            if (!parentElm.tagName || parentElm.tagName.toLowerCase() === 'body') break;

            if (parentElm.tagName.toLowerCase() === 'svg') {
                _setClass(parentElm, 'introjs-showElement introjs-relativePosition');
            }

            parentElm = parentElm.parentNode;
        }
    }

    _setClass(targetElement.element, 'introjs-showElement');

    var currentElementPosition = _getPropValue(targetElement.element, 'position');
    if (currentElementPosition !== 'absolute' &&
        currentElementPosition !== 'relative' &&
        currentElementPosition !== 'fixed') {
        //change to new intro item
        //targetElement.element.className += ' introjs-relativePosition';
        _setClass(targetElement.element, 'introjs-relativePosition')
    }

    var parentElm = targetElement.element.parentNode;
    while (parentElm != null) {
        if (!parentElm.tagName || parentElm.tagName.toLowerCase() === 'body') break;

        
        var zIndex = _getPropValue(parentElm, 'z-index');
        var opacity = parseFloat(_getPropValue(parentElm, 'opacity'));
        var transform = _getPropValue(parentElm, 'transform') || _getPropValue(parentElm, '-webkit-transform') || _getPropValue(parentElm, '-moz-transform') || _getPropValue(parentElm, '-ms-transform') || _getPropValue(parentElm, '-o-transform');
        if (/[0-9]+/.test(zIndex) || opacity < 1 || (transform !== 'none' && transform !== undefined)) {
            parentElm.className += ' introjs-fixParent';
        }

        parentElm = parentElm.parentNode;
    }
}

function _setClass(element, className) {
    if (element instanceof SVGElement) {
        var pre = element.getAttribute('class') || '';

        element.setAttribute('class', pre + ' ' + className);
    } else {
        element.className += ' ' + className;
    }
}

function _removeClass(element, classNameRegex) {
    if (element instanceof SVGElement) {
        var pre = element.getAttribute('class') || '';

        element.setAttribute('class', pre.replace(classNameRegex, '').replace(/^\s+|\s+$/g, ''));
    } else {
        element.className = element.className.replace(classNameRegex, '').replace(/^\s+|\s+$/g, '');
    }
}

function _getPropValue(element, propName) {
    var propValue = '';
    if (element.currentStyle) { //IE
        propValue = element.currentStyle[propName];
    } else if (document.defaultView && document.defaultView.getComputedStyle) { //Others
        propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
    }

    //Prevent exception in IE
    if (propValue && propValue.toLowerCase) {
        return propValue.toLowerCase();
    } else {
        return propValue;
    }
}

function _elementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      (rect.bottom + 80) <= window.innerHeight && // add 80 to get the text right
      rect.right <= window.innerWidth
    );
}

function _getOffset(element) {
    var elementPosition = {};

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    if (element instanceof SVGElement) {
        var x = element.getBoundingClientRect()
        elementPosition.top = x.top + scrollTop;
        elementPosition.width = x.width;
        elementPosition.height = x.height;
        elementPosition.left = x.left + scrollLeft;
    } else {
        //set width
        elementPosition.width = element.offsetWidth;

        //set height
        elementPosition.height = element.offsetHeight;

        //calculate element top and left
        var _x = 0;
        var _y = 0;
        while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
            _x += element.offsetLeft;
            _y += element.offsetTop;
            element = element.offsetParent;
        }
        //set top
        elementPosition.top = _y;
        //set left
        elementPosition.left = _x;
    }

    return elementPosition;
}

function _mergeOptions(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

function _nextStep() {
    this._direction = 'forward';

    if (typeof (this._currentStepNumber) !== 'undefined') {
        for (var i = 0, len = this._introItems.length; i < len; i++) {
            var item = this._introItems[i];
            if (item.currentPageStepNumber === this._currentStepNumber) {
                this._currentStep = i - 1;
                this._currentStepNumber = undefined;
            }
        }
    }

    if (typeof (this._currentStep) === 'undefined') {
        this._currentStep = 0;
    } else {
        ++this._currentStep;
    }

    //if ((this._introItems.length) <= this._currentStep) {
    //    //end of the intro
    //    //check if any callback is defined
    //    if (typeof (this._introCompleteCallback) === 'function') {
    //        this._introCompleteCallback.call(this);
    //    }
    //    _exitIntro.call(this, this._targetElement);
    //    return;
    //}
    debugger;
    if ((this._currentPageMaxStepNumber) <= this._currentStep) {
        //end of the intro
        //check if any callback is defined
        if (typeof (this._introCompleteCallback) === 'function') {
            this._introCompleteCallback.call(this);
        }
        debugger;
        if (typeof (this._introItems[this._currentStep]) == 'undefined')
        {
            _exitIntro.call(this, this._targetElement);
        }
                
        
        return;
    }

    ////Experiment 1 : Check IF maximum step of current page is reached or not?
    //if ((this._currentPageMaxStepNumber) <= this._currentStep) {
    //    //end of the intro
    //    //check if any callback is defined
    //    if (typeof (this._introCompleteCallback) === 'function') {
    //        this._introCompleteCallback.call(this);
    //    }

    //    //_exitIntro.call(this, this._targetElement);
        
    //    //Chcek IF next step in Steps list is there or not?
    //    if (typeof (this._introItems[this._currentStep]) != 'undefined')
    //    {
    //        window.open(this._introItems[this._currentStep].url, '_blank');
    //        _exitIntro.call(this, this._targetElement);
    //        storageCleanup();
    //        var intro = introJs();
    //        intro.start();
    //    }
    //    return;
    //}
    ////Experiment 1 : Finished

    var nextStep = this._introItems[this._currentStep];
    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
        this._introBeforeChangeCallback.call(this, nextStep.element);
    }

    _showElement.call(this, nextStep);
}

////Experiment 1 : To clean up experiment 1 garbage
//function storageCleanup() {
//    this._currentPageMaxStepNumber = undefined;
//    this._currentStep = undefined;

//    for (var k = 0, len = this._introItems.length; k < len; k++) {
//        this._introItems[k].currentPageStepNumber = undefined;
//    }
//}
////Experiment 1 : Finished

/**
 * Go to previous step on intro
 *
 * @api private
 * @method _previousStep
 */
//function _previousStep() {
//    this._direction = 'backward';

//    if (this._currentStep === 0) {
//        return false;
//    }

//    var nextStep = this._introItems[--this._currentStep];
//    if (typeof (this._introBeforeChangeCallback) !== 'undefined') {
//        this._introBeforeChangeCallback.call(this, nextStep.element);
//    }

//    _showElement.call(this, nextStep);
//}

/**
 * Exit from intro
 *
 * @api private
 * @method _exitIntro
 * @param {Object} targetElement
 */
function _exitIntro(targetElement) {
    //remove overlay layers from the page
    debugger;
    var overlayLayers = targetElement.querySelectorAll('.introjs-overlay');

    if (overlayLayers && overlayLayers.length > 0) {
        for (var i = overlayLayers.length - 1; i >= 0; i--) {
            //for fade-out animation
            var overlayLayer = overlayLayers[i];
            overlayLayer.style.opacity = 0;
            setTimeout(function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }.bind(overlayLayer), 500);
        };
    }

    //remove all helper layers
    var helperLayer = targetElement.querySelector('.introjs-helperLayer');
    if (helperLayer) {
        helperLayer.parentNode.removeChild(helperLayer);
    }

    var referenceLayer = targetElement.querySelector('.introjs-tooltipReferenceLayer');
    if (referenceLayer) {
        referenceLayer.parentNode.removeChild(referenceLayer);
    }
    //remove disableInteractionLayer
    var disableInteractionLayer = targetElement.querySelector('.introjs-disableInteraction');
    if (disableInteractionLayer) {
        disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
    }

    //remove intro floating element
    var floatingElement = document.querySelector('.introjsFloatingElement');
    if (floatingElement) {
        floatingElement.parentNode.removeChild(floatingElement);
    }

    _removeShowElement();

    //remove `introjs-fixParent` class from the elements
    var fixParents = document.querySelectorAll('.introjs-fixParent');
    if (fixParents && fixParents.length > 0) {
        for (var i = fixParents.length - 1; i >= 0; i--) {
            fixParents[i].className = fixParents[i].className.replace(/introjs-fixParent/g, '').replace(/^\s+|\s+$/g, '');
        }
    }

    ////clean listeners
    //if (window.removeEventListener) {
    //    window.removeEventListener('keydown', this._onKeyDown, true);
    //} else if (document.detachEvent) { //IE
    //    document.detachEvent('onkeydown', this._onKeyDown);
    //}

    //check if any callback is defined
    if (this._introExitCallback != undefined) {
        this._introExitCallback.call(self);
    }

    //remove outline of last element from where help is aborted
    this._introItems[this._currentStep].element.style.outline = "0px";


    //set the step to zero
    this._currentStep = undefined;

    //clean session storage
    localStorage.removeItem('flowStatus');
}

function _placeTooltip(targetElement, tooltipLayer, arrowLayer, helperNumberLayer, hintMode) {
    var tooltipCssClass = '',
        currentStepObj,
        tooltipOffset,
        targetOffset,
        windowSize,
        currentTooltipPosition;

    hintMode = hintMode || false;

    //reset the old style
    tooltipLayer.style.top = null;
    tooltipLayer.style.right = null;
    tooltipLayer.style.bottom = null;
    tooltipLayer.style.left = null;
    tooltipLayer.style.marginLeft = null;
    tooltipLayer.style.marginTop = null;

    arrowLayer.style.display = 'inherit';

    if (typeof (helperNumberLayer) != 'undefined' && helperNumberLayer != null) {
        helperNumberLayer.style.top = null;
        helperNumberLayer.style.left = null;
    }

    //prevent error when `this._currentStep` is undefined
    if (!this._introItems[this._currentStep]) return;

    //if we have a custom css class for each step
    currentStepObj = this._introItems[this._currentStep];
    if (typeof (currentStepObj.tooltipClass) === 'string') {
        tooltipCssClass = currentStepObj.tooltipClass;
    } else {
        tooltipCssClass = this._options.tooltipClass;
    }

    tooltipLayer.className = ('introjs-tooltip ' + tooltipCssClass).replace(/^\s+|\s+$/g, '');

    currentTooltipPosition = this._introItems[this._currentStep].position;
    if ((currentTooltipPosition == "auto" || this._options.tooltipPosition == "auto")) {
        if (currentTooltipPosition != "floating") { // Floating is always valid, no point in calculating
            currentTooltipPosition = _determineAutoPosition.call(this, targetElement, tooltipLayer, currentTooltipPosition);
        }
    }
    targetOffset = _getOffset(targetElement);
    tooltipOffset = _getOffset(tooltipLayer);
    windowSize = _getWinSize();

    switch (currentTooltipPosition) {
        case 'top':
            arrowLayer.className = 'introjs-arrow bottom';

            if (hintMode) {
                var tooltipLayerStyleLeft = 0;
            } else {
                var tooltipLayerStyleLeft = 15;
            }

            _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
            tooltipLayer.style.bottom = (targetOffset.height + 20) + 'px';
            break;
        case 'right':
            tooltipLayer.style.left = (targetOffset.width + 20) + 'px';
            if (targetOffset.top + tooltipOffset.height > windowSize.height) {
                // In this case, right would have fallen below the bottom of the screen.
                // Modify so that the bottom of the tooltip connects with the target
                arrowLayer.className = "introjs-arrow left-bottom";
                tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
            } else {
                arrowLayer.className = 'introjs-arrow left';
            }
            break;
        case 'left':
            if (!hintMode && this._options.showStepNumbers == true) {
                tooltipLayer.style.top = '15px';
            }

            if (targetOffset.top + tooltipOffset.height > windowSize.height) {
                // In this case, left would have fallen below the bottom of the screen.
                // Modify so that the bottom of the tooltip connects with the target
                tooltipLayer.style.top = "-" + (tooltipOffset.height - targetOffset.height - 20) + "px";
                arrowLayer.className = 'introjs-arrow right-bottom';
            } else {
                arrowLayer.className = 'introjs-arrow right';
            }
            tooltipLayer.style.right = (targetOffset.width + 20) + 'px';

            break;
        case 'floating':
            arrowLayer.style.display = 'none';

            //we have to adjust the top and left of layer manually for intro items without element
            tooltipLayer.style.left = '50%';
            tooltipLayer.style.top = '50%';
            tooltipLayer.style.marginLeft = '-' + (tooltipOffset.width / 2) + 'px';
            tooltipLayer.style.marginTop = '-' + (tooltipOffset.height / 2) + 'px';

            if (typeof (helperNumberLayer) != 'undefined' && helperNumberLayer != null) {
                helperNumberLayer.style.left = '-' + ((tooltipOffset.width / 2) + 18) + 'px';
                helperNumberLayer.style.top = '-' + ((tooltipOffset.height / 2) + 18) + 'px';
            }

            break;
        case 'bottom-right-aligned':
            arrowLayer.className = 'introjs-arrow top-right';

            var tooltipLayerStyleRight = 0;
            _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
            tooltipLayer.style.top = (targetOffset.height + 20) + 'px';
            break;

        case 'bottom-middle-aligned':
            arrowLayer.className = 'introjs-arrow top-middle';

            var tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2;

            // a fix for middle aligned hints
            if (hintMode) {
                tooltipLayerStyleLeftRight += 5;
            }

            if (_checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
                tooltipLayer.style.right = null;
                _checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
            }
            tooltipLayer.style.top = (targetOffset.height + 20) + 'px';
            break;

        case 'bottom-left-aligned':
            // Bottom-left-aligned is the same as the default bottom
        case 'bottom':
            // Bottom going to follow the default behavior
        default:
            arrowLayer.className = 'introjs-arrow top';

            var tooltipLayerStyleLeft = 0;
            _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
            tooltipLayer.style.top = (targetOffset.height + 20) + 'px';
            break;
    }
}

function _checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer) {
    if (targetOffset.left + tooltipLayerStyleLeft + tooltipOffset.width > windowSize.width) {
        // off the right side of the window
        tooltipLayer.style.left = (windowSize.width - tooltipOffset.width - targetOffset.left) + 'px';
        return false;
    }
    tooltipLayer.style.left = tooltipLayerStyleLeft + 'px';
    return true;
}

/**
 * Set tooltip right so it doesn't go off the left side of the window
 *
 * @return boolean true, if tooltipLayerStyleRight is ok.  false, otherwise.
 */
function _checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer) {
    if (targetOffset.left + targetOffset.width - tooltipLayerStyleRight - tooltipOffset.width < 0) {
        // off the left side of the window
        tooltipLayer.style.left = (-targetOffset.left) + 'px';
        return false;
    }
    tooltipLayer.style.right = tooltipLayerStyleRight + 'px';
    return true;
}

/**
 * Determines the position of the tooltip based on the position precedence and availability
 * of screen space.
 *
 * @param {Object} targetElement
 * @param {Object} tooltipLayer
 * @param {Object} desiredTooltipPosition
 *
 */
function _determineAutoPosition(targetElement, tooltipLayer, desiredTooltipPosition) {

    // Take a clone of position precedence. These will be the available
    var possiblePositions = this._options.positionPrecedence.slice();

    var windowSize = _getWinSize();
    var tooltipHeight = _getOffset(tooltipLayer).height + 10;
    var tooltipWidth = _getOffset(tooltipLayer).width + 20;
    var targetOffset = _getOffset(targetElement);

    // If we check all the possible areas, and there are no valid places for the tooltip, the element
    // must take up most of the screen real estate. Show the tooltip floating in the middle of the screen.
    var calculatedPosition = "floating";

    // Check if the width of the tooltip + the starting point would spill off the right side of the screen
    // If no, neither bottom or top are valid
    if (targetOffset.left + tooltipWidth > windowSize.width || ((targetOffset.left + (targetOffset.width / 2)) - tooltipWidth) < 0) {
        _removeEntry(possiblePositions, "bottom");
        _removeEntry(possiblePositions, "top");
    } else {
        // Check for space below
        if ((targetOffset.height + targetOffset.top + tooltipHeight) > windowSize.height) {
            _removeEntry(possiblePositions, "bottom");
        }

        // Check for space above
        if (targetOffset.top - tooltipHeight < 0) {
            _removeEntry(possiblePositions, "top");
        }
    }

    // Check for space to the right
    if (targetOffset.width + targetOffset.left + tooltipWidth > windowSize.width) {
        _removeEntry(possiblePositions, "right");
    }

    // Check for space to the left
    if (targetOffset.left - tooltipWidth < 0) {
        _removeEntry(possiblePositions, "left");
    }

    // At this point, our array only has positions that are valid. Pick the first one, as it remains in order
    if (possiblePositions.length > 0) {
        calculatedPosition = possiblePositions[0];
    }

    // If the requested position is in the list, replace our calculated choice with that
    if (desiredTooltipPosition && desiredTooltipPosition != "auto") {
        if (possiblePositions.indexOf(desiredTooltipPosition) > -1) {
            calculatedPosition = desiredTooltipPosition;
        }
    }

    return calculatedPosition;
}

function _removeEntry(stringArray, stringToRemove) {
    if (stringArray.indexOf(stringToRemove) > -1) {
        stringArray.splice(stringArray.indexOf(stringToRemove), 1);
    }
}

function _setHelperLayerPosition(helperLayer) {
    if (helperLayer) {
        //prevent error when `this._currentStep` in undefined
        if (!this._introItems[this._currentStep]) return;

        var currentElement = this._introItems[this._currentStep],
            elementPosition = _getOffset(currentElement.element),
            widthHeightPadding = 10;

        // If the target element is fixed, the tooltip should be fixed as well.
        // Otherwise, remove a fixed class that may be left over from the previous
        // step.
        if (_isFixed(currentElement.element)) {
            helperLayer.className += ' introjs-fixedTooltip';
        } else {
            helperLayer.className = helperLayer.className.replace(' introjs-fixedTooltip', '');
        }

        if (currentElement.position == 'floating') {
            widthHeightPadding = 0;
        }

        //set new position to helper layer
        helperLayer.setAttribute('style', 'width: ' + (elementPosition.width + widthHeightPadding) + 'px; ' +
                                          'height:' + (elementPosition.height + widthHeightPadding) + 'px; ' +
                                          'top:' + (elementPosition.top - 5) + 'px;' +
                                          'left: ' + (elementPosition.left - 5) + 'px;');

    }
}

//function _disableInteraction() {
//    var disableInteractionLayer = document.querySelector('.introjs-disableInteraction');
//    if (disableInteractionLayer === null) {
//        disableInteractionLayer = document.createElement('div');
//        disableInteractionLayer.className = 'introjs-disableInteraction';
//        this._targetElement.appendChild(disableInteractionLayer);
//    }

//    _setHelperLayerPosition.call(this, disableInteractionLayer);
//}

function _setAnchorAsButton(anchor) {
    anchor.setAttribute('role', 'button');
    anchor.tabIndex = 0;
}

function _getWinSize() {
    if (window.innerWidth != undefined) {
        return { width: window.innerWidth, height: window.innerHeight };
    } else {
        var D = document.documentElement;
        return { width: D.clientWidth, height: D.clientHeight };
    }
}

function _isFixed(element) {
    var p = element.parentNode;

    if (!p || p.nodeName === 'HTML') {
        return false;
    }

    if (_getPropValue(element, 'position') == 'fixed') {
        return true;
    }

    return _isFixed(p);
}

