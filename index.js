/**
 * @file mofron-comp-haruki/index.js
 * @brief haruki input component
 *        this source based on the codrops: https://github.com/codrops/TextInputEffects
 */
const Input  = require("mofron-comp-input");
const Click  = require("mofron-event-click");
const Focus  = require("mofron-event-focus");
const comutl = mofron.util.common;
const cmputl = mofron.util.component;
const css    = require("./haruki.css");

const label_dom = new mofron.class.Dom({
                      tag: "label", class: ["input__label","input__label--haruki"],
		      style: { "display": "flex", "align-items": "center" }
                  });
const input_dom = new mofron.class.Dom({
                      tag: "input", attrs: { type: "text" },
                      class: ["input__field","input__field--haruki"]
                  });

module.exports = class extends Input {
    /**
     * initialize component
     * 
     * @param (mixed) value parameter
     *                key-value: component config
     * @short value
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Haruki");
            
	    /* add config */
	    this.confmng().add("main-color", { type: "string" });
	    this.confmng().add("accent-color", { type: "string" });
            
	    /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
	    label_dom.component(this);
	    input_dom.component(this);
            this.rootDom(
	        new mofron.class.Dom({
		    tag: "span", component: this,
		    class: ["input","input--haruki"],
		    child: [input_dom,label_dom]
                })
            );
	    /* set label */
	    this.childDom(label_dom);
            this.label().style({
	        "-webkit-transition": "-webkit-transform 0.3s",
                "transition":         "transform 0.3s"
            });
	    this.child(this.label());
	    this.childDom(input_dom);
            
            comutl.addstyle("mofron-comp-haruki", css, false); 
            
	    /* set focus event */
	    let fcs_evt = (ev1,ev2) => {
                try {
		    /* replace class arribute */
		    let dom = ev1.rootDom()[0];
                    if (true === ev2) {
                        dom.class("input--filled");
                        label_dom.style({  "align-items": null });
		    } else if ((null === ev1.value())) {
                        dom.class().rem("input--filled");
			label_dom.style({  "align-items": "center" });
		    }
		} catch (e) {
		    console.error(e.stack);
                    throw e;
		}
	    }
	    this.event(new Focus(fcs_evt));
            
	    this.size("1.5rem", "0.25rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * label text contents setter/getter
     * 
     * @param (mixed) string: label text
     *                mofron-comp-text: text component for label
     *                undefined: call as getter
     * @return (mofron-comp-text) text component for label
     * @type parameter
     */
    label (prm,cnf) {
        try {
	    if (true === comutl.isinc(prm,"Text")) {
                prm.childDom().class([
		    "input__label-content",
		    "input__label-content--haruki"
		]);
            }
            return super.label(prm,cnf);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * input width setter/getter
     *
     * @param (string (size)) input width
     *                        undefined: call as getter
     * @param (key-value) style option
     * @return (mixed) string: input width
     *                 null: not set
     * @type parameter
     */
    width (prm,opt) {
        try {
            let buf = this.styleDom();
	    this.styleDom(this.rootDom()[0]);
	    let ret = super.width(prm,opt);
	    this.styleDom(buf);
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * input height setter/getter
     * 
     * @param (string (size)) input height
     *                        undefined: call as getter
     * @param (key-value) style option
     * @return (mixed) string: input height
     *                 null: not set
     * @type parameter
     */
    height (prm, opt) {
        try {
            if (undefined === prm) {
                /* getter */
                return comutl.sizesum(prm, this.sizeOffset());
            }
            /* setter */
            let set_siz = comutl.sizediff(prm, this.sizeOffset())
	    cmputl.size(this, "height", prm, opt);
            this.style({ "font-size" : set_siz });
	    label_dom.style({ height: set_siz });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * border,label color
     * 
     * @param (mixed (color)) string: border color, #hex
     *                        array: [red, green, blue, (alpha)]
     * @return (mixed) border color
     *                 null; not set yet
     * @type parameter
     */
    mainColor (prm) {
        try {
	    if (undefined === prm) {
                /* getter */
		return this.confmng("main-color");
	    }
	    /* setter */
	    let clr = comutl.getcolor(prm);
	    let set = "";
	    set += ".input__label--haruki::before,";
	    set += ".input__label--haruki::after {";
            set += "background:";
	    set += (null === clr) ? ";" : clr.toString() + ";";
	    set += "}";
	    comutl.addstyle("mofron-comp-haruki", set);
	    if (null === this.label().mainColor()) {
                this.label().color(clr.toString());
            }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * input text color
     * 
     * @param (mixed (color)) string: text color, #hex
     *                        array: [red, green, blue, (alpha)]
     * @return (mixed) text color
     *                 null; not set yet
     * @type parameter
     */
    accentColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.confmng("accent-color");
            }
            /* setter */
            let clr = comutl.getcolor(prm);
            let set = "";
            set += ".input__field--haruki {";
            set += "color:";
            set += (null === clr) ? ";" : clr.toString() + ";";
            set += "}";
            comutl.addstyle("mofron-comp-haruki", set);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * not valid parameter for this component
     * 
     * @type private
     */    
    horizon () {
        return false;
    }
}
/* end of file */
