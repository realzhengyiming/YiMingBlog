function vr(e, t) {
    const n = new Set(e.split(","));
    return t ? r => n.has(r.toLowerCase()) : r => n.has(r)
}

const ee = {}, bt = [], Ee = () => {
    }, wi = () => !1,
    Wt = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    wr = e => e.startsWith("onUpdate:"), le = Object.assign, Cr = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, Ci = Object.prototype.hasOwnProperty, J = (e, t) => Ci.call(e, t), U = Array.isArray,
    vt = e => An(e) === "[object Map]", Gs = e => An(e) === "[object Set]", q = e => typeof e == "function",
    ne = e => typeof e == "string", Rt = e => typeof e == "symbol", Z = e => e !== null && typeof e == "object",
    zs = e => (Z(e) || q(e)) && q(e.then) && q(e.catch), Ys = Object.prototype.toString, An = e => Ys.call(e),
    xi = e => An(e).slice(8, -1), Js = e => An(e) === "[object Object]",
    xr = e => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    It = vr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Sn = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }, Ei = /-(\w)/g, Ne = Sn(e => e.replace(Ei, (t, n) => n ? n.toUpperCase() : "")), Ti = /\B([A-Z])/g,
    dt = Sn(e => e.replace(Ti, "-$1").toLowerCase()), Rn = Sn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    dn = Sn(e => e ? `on${Rn(e)}` : ""), Ze = (e, t) => !Object.is(e, t), hn = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    }, mn = (e, t, n) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: n})
    }, rr = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }, Ai = e => {
        const t = ne(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Xr;
const Xs = () => Xr || (Xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Er(e) {
    if (U(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n], s = ne(r) ? Mi(r) : Er(r);
            if (s) for (const o in s) t[o] = s[o]
        }
        return t
    } else if (ne(e) || Z(e)) return e
}

const Si = /;(?![^(]*\))/g, Ri = /:([^]+)/, Li = /\/\*[^]*?\*\//g;

function Mi(e) {
    const t = {};
    return e.replace(Li, "").split(Si).forEach(n => {
        if (n) {
            const r = n.split(Ri);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function Tr(e) {
    let t = "";
    if (ne(e)) t = e; else if (U(e)) for (let n = 0; n < e.length; n++) {
        const r = Tr(e[n]);
        r && (t += r + " ")
    } else if (Z(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

const Oi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Pi = vr(Oi);

function Qs(e) {
    return !!e || e === ""
}

const Wa = e => ne(e) ? e : e == null ? "" : U(e) || Z(e) && (e.toString === Ys || !q(e.toString)) ? JSON.stringify(e, Zs, 2) : String(e),
    Zs = (e, t) => t && t.__v_isRef ? Zs(e, t.value) : vt(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[Kn(r, o) + " =>"] = s, n), {})} : Gs(t) ? {[`Set(${t.size})`]: [...t.values()].map(n => Kn(n))} : Rt(t) ? Kn(t) : Z(t) && !U(t) && !Js(t) ? String(t) : t,
    Kn = (e, t = "") => {
        var n;
        return Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    };
let be;

class Ii {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = be, !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    run(t) {
        if (this._active) {
            const n = be;
            try {
                return be = this, t()
            } finally {
                be = n
            }
        }
    }

    on() {
        be = this
    }

    off() {
        be = this.parent
    }

    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Fi(e, t = be) {
    t && t.active && t.effects.push(e)
}

function eo() {
    return be
}

function Ni(e) {
    be && be.cleanups.push(e)
}

let ct;

class Ar {
    constructor(t, n, r, s) {
        this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, Fi(this, s)
    }

    get dirty() {
        if (this._dirtyLevel === 1) {
            this._dirtyLevel = 0, this._queryings++, ht();
            for (const t of this.deps) if (t.computed && ($i(t.computed), this._dirtyLevel >= 2)) break;
            pt(), this._queryings--
        }
        return this._dirtyLevel >= 2
    }

    set dirty(t) {
        this._dirtyLevel = t ? 3 : 0
    }

    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = ze, n = ct;
        try {
            return ze = !0, ct = this, this._runnings++, Qr(this), this.fn()
        } finally {
            Zr(this), this._runnings--, ct = n, ze = t
        }
    }

    stop() {
        var t;
        this.active && (Qr(this), Zr(this), (t = this.onStop) == null || t.call(this), this.active = !1)
    }
}

function $i(e) {
    return e.value
}

function Qr(e) {
    e._trackId++, e._depsLength = 0
}

function Zr(e) {
    if (e.deps && e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) to(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function to(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}

let ze = !0, sr = 0;
const no = [];

function ht() {
    no.push(ze), ze = !1
}

function pt() {
    const e = no.pop();
    ze = e === void 0 ? !0 : e
}

function Sr() {
    sr++
}

function Rr() {
    for (sr--; !sr && or.length;) or.shift()()
}

function ro(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && to(r, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}

const or = [];

function so(e, t, n) {
    Sr();
    for (const r of e.keys()) if (!(!r.allowRecurse && r._runnings) && r._dirtyLevel < t && (!r._runnings || t !== 2)) {
        const s = r._dirtyLevel;
        r._dirtyLevel = t, s === 0 && (!r._queryings || t !== 2) && (r.trigger(), r.scheduler && or.push(r.scheduler))
    }
    Rr()
}

const oo = (e, t) => {
    const n = new Map;
    return n.cleanup = e, n.computed = t, n
}, yn = new WeakMap, at = Symbol(""), ir = Symbol("");

function ye(e, t, n) {
    if (ze && ct) {
        let r = yn.get(e);
        r || yn.set(e, r = new Map);
        let s = r.get(n);
        s || r.set(n, s = oo(() => r.delete(n))), ro(ct, s)
    }
}

function Ve(e, t, n, r, s, o) {
    const i = yn.get(e);
    if (!i) return;
    let l = [];
    if (t === "clear") l = [...i.values()]; else if (n === "length" && U(e)) {
        const c = Number(r);
        i.forEach((a, f) => {
            (f === "length" || !Rt(f) && f >= c) && l.push(a)
        })
    } else switch (n !== void 0 && l.push(i.get(n)), t) {
        case"add":
            U(e) ? xr(n) && l.push(i.get("length")) : (l.push(i.get(at)), vt(e) && l.push(i.get(ir)));
            break;
        case"delete":
            U(e) || (l.push(i.get(at)), vt(e) && l.push(i.get(ir)));
            break;
        case"set":
            vt(e) && l.push(i.get(at));
            break
    }
    Sr();
    for (const c of l) c && so(c, 3);
    Rr()
}

function Hi(e, t) {
    var n;
    return (n = yn.get(e)) == null ? void 0 : n.get(t)
}

const ji = vr("__proto__,__v_isRef,__isVue"),
    io = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Rt)),
    es = Vi();

function Vi() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...n) {
            const r = X(this);
            for (let o = 0, i = this.length; o < i; o++) ye(r, "get", o + "");
            const s = r[t](...n);
            return s === -1 || s === !1 ? r[t](...n.map(X)) : s
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...n) {
            ht(), Sr();
            const r = X(this)[t].apply(this, n);
            return Rr(), pt(), r
        }
    }), e
}

function Di(e) {
    const t = X(this);
    return ye(t, "has", e), t.hasOwnProperty(e)
}

class lo {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._shallow = n
    }

    get(t, n, r) {
        const s = this._isReadonly, o = this._shallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw") return r === (s ? o ? Zi : fo : o ? uo : ao).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = U(t);
        if (!s) {
            if (i && J(es, n)) return Reflect.get(es, n, r);
            if (n === "hasOwnProperty") return Di
        }
        const l = Reflect.get(t, n, r);
        return (Rt(n) ? io.has(n) : ji(n)) || (s || ye(t, "get", n), o) ? l : de(l) ? i && xr(n) ? l : l.value : Z(l) ? s ? On(l) : Mn(l) : l
    }
}

class co extends lo {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, n, r, s) {
        let o = t[n];
        if (!this._shallow) {
            const c = Tt(o);
            if (!_n(r) && !Tt(r) && (o = X(o), r = X(r)), !U(t) && de(o) && !de(r)) return c ? !1 : (o.value = r, !0)
        }
        const i = U(t) && xr(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(t, n, r, s);
        return t === X(s) && (i ? Ze(r, o) && Ve(t, "set", n, r) : Ve(t, "add", n, r)), l
    }

    deleteProperty(t, n) {
        const r = J(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && Ve(t, "delete", n, void 0), s
    }

    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Rt(n) || !io.has(n)) && ye(t, "has", n), r
    }

    ownKeys(t) {
        return ye(t, "iterate", U(t) ? "length" : at), Reflect.ownKeys(t)
    }
}

class Bi extends lo {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}

const Ui = new co, ki = new Bi, Ki = new co(!0), Lr = e => e, Ln = e => Reflect.getPrototypeOf(e);

function Xt(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const s = X(e), o = X(t);
    n || (Ze(t, o) && ye(s, "get", t), ye(s, "get", o));
    const {has: i} = Ln(s), l = r ? Lr : n ? Pr : Dt;
    if (i.call(s, t)) return l(e.get(t));
    if (i.call(s, o)) return l(e.get(o));
    e !== s && e.get(t)
}

function Qt(e, t = !1) {
    const n = this.__v_raw, r = X(n), s = X(e);
    return t || (Ze(e, s) && ye(r, "has", e), ye(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function Zt(e, t = !1) {
    return e = e.__v_raw, !t && ye(X(e), "iterate", at), Reflect.get(e, "size", e)
}

function ts(e) {
    e = X(e);
    const t = X(this);
    return Ln(t).has.call(t, e) || (t.add(e), Ve(t, "add", e, e)), this
}

function ns(e, t) {
    t = X(t);
    const n = X(this), {has: r, get: s} = Ln(n);
    let o = r.call(n, e);
    o || (e = X(e), o = r.call(n, e));
    const i = s.call(n, e);
    return n.set(e, t), o ? Ze(t, i) && Ve(n, "set", e, t) : Ve(n, "add", e, t), this
}

function rs(e) {
    const t = X(this), {has: n, get: r} = Ln(t);
    let s = n.call(t, e);
    s || (e = X(e), s = n.call(t, e)), r && r.call(t, e);
    const o = t.delete(e);
    return s && Ve(t, "delete", e, void 0), o
}

function ss() {
    const e = X(this), t = e.size !== 0, n = e.clear();
    return t && Ve(e, "clear", void 0, void 0), n
}

function en(e, t) {
    return function (r, s) {
        const o = this, i = o.__v_raw, l = X(i), c = t ? Lr : e ? Pr : Dt;
        return !e && ye(l, "iterate", at), i.forEach((a, f) => r.call(s, c(a), c(f), o))
    }
}

function tn(e, t, n) {
    return function (...r) {
        const s = this.__v_raw, o = X(s), i = vt(o), l = e === "entries" || e === Symbol.iterator && i,
            c = e === "keys" && i, a = s[e](...r), f = n ? Lr : t ? Pr : Dt;
        return !t && ye(o, "iterate", c ? ir : at), {
            next() {
                const {value: h, done: p} = a.next();
                return p ? {value: h, done: p} : {value: l ? [f(h[0]), f(h[1])] : f(h), done: p}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Be(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Wi() {
    const e = {
        get(o) {
            return Xt(this, o)
        }, get size() {
            return Zt(this)
        }, has: Qt, add: ts, set: ns, delete: rs, clear: ss, forEach: en(!1, !1)
    }, t = {
        get(o) {
            return Xt(this, o, !1, !0)
        }, get size() {
            return Zt(this)
        }, has: Qt, add: ts, set: ns, delete: rs, clear: ss, forEach: en(!1, !0)
    }, n = {
        get(o) {
            return Xt(this, o, !0)
        }, get size() {
            return Zt(this, !0)
        }, has(o) {
            return Qt.call(this, o, !0)
        }, add: Be("add"), set: Be("set"), delete: Be("delete"), clear: Be("clear"), forEach: en(!0, !1)
    }, r = {
        get(o) {
            return Xt(this, o, !0, !0)
        }, get size() {
            return Zt(this, !0)
        }, has(o) {
            return Qt.call(this, o, !0)
        }, add: Be("add"), set: Be("set"), delete: Be("delete"), clear: Be("clear"), forEach: en(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = tn(o, !1, !1), n[o] = tn(o, !0, !1), t[o] = tn(o, !1, !0), r[o] = tn(o, !0, !0)
    }), [e, n, t, r]
}

const [qi, Gi, zi, Yi] = Wi();

function Mr(e, t) {
    const n = t ? e ? Yi : zi : e ? Gi : qi;
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(J(n, s) && s in r ? n : r, s, o)
}

const Ji = {get: Mr(!1, !1)}, Xi = {get: Mr(!1, !0)}, Qi = {get: Mr(!0, !1)}, ao = new WeakMap, uo = new WeakMap,
    fo = new WeakMap, Zi = new WeakMap;

function el(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function tl(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : el(xi(e))
}

function Mn(e) {
    return Tt(e) ? e : Or(e, !1, Ui, Ji, ao)
}

function nl(e) {
    return Or(e, !1, Ki, Xi, uo)
}

function On(e) {
    return Or(e, !0, ki, Qi, fo)
}

function Or(e, t, n, r, s) {
    if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = s.get(e);
    if (o) return o;
    const i = tl(e);
    if (i === 0) return e;
    const l = new Proxy(e, i === 2 ? r : n);
    return s.set(e, l), l
}

function wt(e) {
    return Tt(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Tt(e) {
    return !!(e && e.__v_isReadonly)
}

function _n(e) {
    return !!(e && e.__v_isShallow)
}

function ho(e) {
    return wt(e) || Tt(e)
}

function X(e) {
    const t = e && e.__v_raw;
    return t ? X(t) : e
}

function Ft(e) {
    return mn(e, "__v_skip", !0), e
}

const Dt = e => Z(e) ? Mn(e) : e, Pr = e => Z(e) ? On(e) : e;

class po {
    constructor(t, n, r, s) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ar(() => t(this._value), () => bn(this, 1)), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
    }

    get value() {
        const t = X(this);
        return Ir(t), (!t._cacheable || t.effect.dirty) && Ze(t._value, t._value = t.effect.run()) && bn(t, 2), t._value
    }

    set value(t) {
        this._setter(t)
    }

    get _dirty() {
        return this.effect.dirty
    }

    set _dirty(t) {
        this.effect.dirty = t
    }
}

function rl(e, t, n = !1) {
    let r, s;
    const o = q(e);
    return o ? (r = e, s = Ee) : (r = e.get, s = e.set), new po(r, s, o || !s, n)
}

function Ir(e) {
    ze && ct && (e = X(e), ro(ct, e.dep || (e.dep = oo(() => e.dep = void 0, e instanceof po ? e : void 0))))
}

function bn(e, t = 3, n) {
    e = X(e);
    const r = e.dep;
    r && so(r, t)
}

function de(e) {
    return !!(e && e.__v_isRef === !0)
}

function ie(e) {
    return go(e, !1)
}

function Fr(e) {
    return go(e, !0)
}

function go(e, t) {
    return de(e) ? e : new sl(e, t)
}

class sl {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : X(t), this._value = n ? t : Dt(t)
    }

    get value() {
        return Ir(this), this._value
    }

    set value(t) {
        const n = this.__v_isShallow || _n(t) || Tt(t);
        t = n ? t : X(t), Ze(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Dt(t), bn(this, 3))
    }
}

function mo(e) {
    return de(e) ? e.value : e
}

const ol = {
    get: (e, t, n) => mo(Reflect.get(e, t, n)), set: (e, t, n, r) => {
        const s = e[t];
        return de(s) && !de(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function yo(e) {
    return wt(e) ? e : new Proxy(e, ol)
}

class il {
    constructor(t) {
        this.dep = void 0, this.__v_isRef = !0;
        const {get: n, set: r} = t(() => Ir(this), () => bn(this));
        this._get = n, this._set = r
    }

    get value() {
        return this._get()
    }

    set value(t) {
        this._set(t)
    }
}

function ll(e) {
    return new il(e)
}

class cl {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
    }

    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }

    set value(t) {
        this._object[this._key] = t
    }

    get dep() {
        return Hi(X(this._object), this._key)
    }
}

class al {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
    }

    get value() {
        return this._getter()
    }
}

function ul(e, t, n) {
    return de(e) ? e : q(e) ? new al(e) : Z(e) && arguments.length > 1 ? fl(e, t, n) : ie(e)
}

function fl(e, t, n) {
    const r = e[t];
    return de(r) ? r : new cl(e, t, n)
}

function Ye(e, t, n, r) {
    let s;
    try {
        s = r ? e(...r) : e()
    } catch (o) {
        qt(o, t, n)
    }
    return s
}

function Te(e, t, n, r) {
    if (q(e)) {
        const o = Ye(e, t, n, r);
        return o && zs(o) && o.catch(i => {
            qt(i, t, n)
        }), o
    }
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Te(e[o], t, n, r));
    return s
}

function qt(e, t, n, r = !0) {
    const s = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const i = t.proxy, l = `https://vuejs.org/errors/#runtime-${n}`;
        for (; o;) {
            const a = o.ec;
            if (a) {
                for (let f = 0; f < a.length; f++) if (a[f](e, i, l) === !1) return
            }
            o = o.parent
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            Ye(c, null, 10, [e, i, l]);
            return
        }
    }
    dl(e, n, s, r)
}

function dl(e, t, n, r = !0) {
    console.error(e)
}

let Bt = !1, lr = !1;
const he = [];
let Ie = 0;
const Ct = [];
let je = null, ot = 0;
const _o = Promise.resolve();
let Nr = null;

function Pn(e) {
    const t = Nr || _o;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function hl(e) {
    let t = Ie + 1, n = he.length;
    for (; t < n;) {
        const r = t + n >>> 1, s = he[r], o = Ut(s);
        o < e || o === e && s.pre ? t = r + 1 : n = r
    }
    return t
}

function In(e) {
    (!he.length || !he.includes(e, Bt && e.allowRecurse ? Ie + 1 : Ie)) && (e.id == null ? he.push(e) : he.splice(hl(e.id), 0, e), bo())
}

function bo() {
    !Bt && !lr && (lr = !0, Nr = _o.then(vo))
}

function pl(e) {
    const t = he.indexOf(e);
    t > Ie && he.splice(t, 1)
}

function gl(e) {
    U(e) ? Ct.push(...e) : (!je || !je.includes(e, e.allowRecurse ? ot + 1 : ot)) && Ct.push(e), bo()
}

function os(e, t, n = Bt ? Ie + 1 : 0) {
    for (; n < he.length; n++) {
        const r = he[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid) continue;
            he.splice(n, 1), n--, r()
        }
    }
}

function vn(e) {
    if (Ct.length) {
        const t = [...new Set(Ct)];
        if (Ct.length = 0, je) {
            je.push(...t);
            return
        }
        for (je = t, je.sort((n, r) => Ut(n) - Ut(r)), ot = 0; ot < je.length; ot++) je[ot]();
        je = null, ot = 0
    }
}

const Ut = e => e.id == null ? 1 / 0 : e.id, ml = (e, t) => {
    const n = Ut(e) - Ut(t);
    if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return n
};

function vo(e) {
    lr = !1, Bt = !0, he.sort(ml);
    try {
        for (Ie = 0; Ie < he.length; Ie++) {
            const t = he[Ie];
            t && t.active !== !1 && Ye(t, null, 14)
        }
    } finally {
        Ie = 0, he.length = 0, vn(), Bt = !1, Nr = null, (he.length || Ct.length) && vo()
    }
}

function yl(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ee;
    let s = n;
    const o = t.startsWith("update:"), i = o && t.slice(7);
    if (i && i in r) {
        const f = `${i === "modelValue" ? "model" : i}Modifiers`, {number: h, trim: p} = r[f] || ee;
        p && (s = n.map(y => ne(y) ? y.trim() : y)), h && (s = n.map(rr))
    }
    let l, c = r[l = dn(t)] || r[l = dn(Ne(t))];
    !c && o && (c = r[l = dn(dt(t))]), c && Te(c, e, 6, s);
    const a = r[l + "Once"];
    if (a) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[l]) return;
        e.emitted[l] = !0, Te(a, e, 6, s)
    }
}

function wo(e, t, n = !1) {
    const r = t.emitsCache, s = r.get(e);
    if (s !== void 0) return s;
    const o = e.emits;
    let i = {}, l = !1;
    if (!q(e)) {
        const c = a => {
            const f = wo(a, t, !0);
            f && (l = !0, le(i, f))
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    return !o && !l ? (Z(e) && r.set(e, null), null) : (U(o) ? o.forEach(c => i[c] = null) : le(i, o), Z(e) && r.set(e, i), i)
}

function Fn(e, t) {
    return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, dt(t)) || J(e, t))
}

let fe = null, Nn = null;

function wn(e) {
    const t = fe;
    return fe = e, Nn = e && e.type.__scopeId || null, t
}

function qa(e) {
    Nn = e
}

function Ga() {
    Nn = null
}

function _l(e, t = fe, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && bs(-1);
        const o = wn(t);
        let i;
        try {
            i = e(...s)
        } finally {
            wn(o), r._d && bs(1)
        }
        return i
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function Wn(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        props: o,
        propsOptions: [i],
        slots: l,
        attrs: c,
        emit: a,
        render: f,
        renderCache: h,
        data: p,
        setupState: y,
        ctx: w,
        inheritAttrs: S
    } = e;
    let N, k;
    const B = wn(e);
    try {
        if (n.shapeFlag & 4) {
            const _ = s || r, I = _;
            N = Se(f.call(I, _, h, o, y, p, w)), k = c
        } else {
            const _ = t;
            N = Se(_.length > 1 ? _(o, {attrs: c, slots: l, emit: a}) : _(o, null)), k = t.props ? c : bl(c)
        }
    } catch (_) {
        jt.length = 0, qt(_, e, 1), N = se(ve)
    }
    let g = N;
    if (k && S !== !1) {
        const _ = Object.keys(k), {shapeFlag: I} = g;
        _.length && I & 7 && (i && _.some(wr) && (k = vl(k, i)), g = et(g, k))
    }
    return n.dirs && (g = et(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (g.transition = n.transition), N = g, wn(B), N
}

const bl = e => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, vl = (e, t) => {
    const n = {};
    for (const r in e) (!wr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
};

function wl(e, t, n) {
    const {props: r, children: s, component: o} = e, {props: i, children: l, patchFlag: c} = t, a = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? is(r, i, a) : !!i;
        if (c & 8) {
            const f = t.dynamicProps;
            for (let h = 0; h < f.length; h++) {
                const p = f[h];
                if (i[p] !== r[p] && !Fn(a, p)) return !0
            }
        }
    } else return (s || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? is(r, i, a) : !0 : !!i;
    return !1
}

function is(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !Fn(n, o)) return !0
    }
    return !1
}

function Cl({vnode: e, parent: t}, n) {
    if (n) for (; t;) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent; else break
    }
}

const $r = "components";

function za(e, t) {
    return xo($r, e, !0, t) || e
}

const Co = Symbol.for("v-ndc");

function Ya(e) {
    return ne(e) ? xo($r, e, !1) || e : e || Co
}

function xo(e, t, n = !0, r = !1) {
    const s = fe || ae;
    if (s) {
        const o = s.type;
        if (e === $r) {
            const l = vc(o, !1);
            if (l && (l === t || l === Ne(t) || l === Rn(Ne(t)))) return o
        }
        const i = ls(s[e] || o[e], t) || ls(s.appContext[e], t);
        return !i && r ? o : i
    }
}

function ls(e, t) {
    return e && (e[t] || e[Ne(t)] || e[Rn(Ne(t))])
}

const xl = e => e.__isSuspense;

function Eo(e, t) {
    t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : gl(e)
}

const El = Symbol.for("v-scx"), Tl = () => Et(El);

function Hr(e, t) {
    return $n(e, null, t)
}

function Ja(e, t) {
    return $n(e, null, {flush: "post"})
}

const nn = {};

function Je(e, t, n) {
    return $n(e, t, n)
}

function $n(e, t, {immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: l} = ee) {
    if (t && o) {
        const M = t;
        t = (...$) => {
            M(...$), I()
        }
    }
    const c = ae, a = M => r === !0 ? M : lt(M, r === !1 ? 1 : void 0);
    let f, h = !1, p = !1;
    if (de(e) ? (f = () => e.value, h = _n(e)) : wt(e) ? (f = () => a(e), h = !0) : U(e) ? (p = !0, h = e.some(M => wt(M) || _n(M)), f = () => e.map(M => {
        if (de(M)) return M.value;
        if (wt(M)) return a(M);
        if (q(M)) return Ye(M, c, 2)
    })) : q(e) ? t ? f = () => Ye(e, c, 2) : f = () => (y && y(), Te(e, c, 3, [w])) : f = Ee, t && r) {
        const M = f;
        f = () => lt(M())
    }
    let y, w = M => {
        y = g.onStop = () => {
            Ye(M, c, 4), y = g.onStop = void 0
        }
    }, S;
    if (zt) if (w = Ee, t ? n && Te(t, c, 3, [f(), p ? [] : void 0, w]) : f(), s === "sync") {
        const M = Tl();
        S = M.__watcherHandles || (M.__watcherHandles = [])
    } else return Ee;
    let N = p ? new Array(e.length).fill(nn) : nn;
    const k = () => {
        if (!(!g.active || !g.dirty)) if (t) {
            const M = g.run();
            (r || h || (p ? M.some(($, R) => Ze($, N[R])) : Ze(M, N))) && (y && y(), Te(t, c, 3, [M, N === nn ? void 0 : p && N[0] === nn ? [] : N, w]), N = M)
        } else g.run()
    };
    k.allowRecurse = !!t;
    let B;
    s === "sync" ? B = k : s === "post" ? B = () => ge(k, c && c.suspense) : (k.pre = !0, c && (k.id = c.uid), B = () => In(k));
    const g = new Ar(f, Ee, B), _ = eo(), I = () => {
        g.stop(), _ && Cr(_.effects, g)
    };
    return t ? n ? k() : N = g.run() : s === "post" ? ge(g.run.bind(g), c && c.suspense) : g.run(), S && S.push(I), I
}

function Al(e, t, n) {
    const r = this.proxy, s = ne(e) ? e.includes(".") ? To(r, e) : () => r[e] : e.bind(r, r);
    let o;
    q(t) ? o = t : (o = t.handler, n = t);
    const i = ae;
    St(this);
    const l = $n(s, o.bind(r), n);
    return i ? St(i) : ut(), l
}

function To(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}

function lt(e, t, n = 0, r) {
    if (!Z(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (n >= t) return e;
        n++
    }
    if (r = r || new Set, r.has(e)) return e;
    if (r.add(e), de(e)) lt(e.value, t, n, r); else if (U(e)) for (let s = 0; s < e.length; s++) lt(e[s], t, n, r); else if (Gs(e) || vt(e)) e.forEach(s => {
        lt(s, t, n, r)
    }); else if (Js(e)) for (const s in e) lt(e[s], t, n, r);
    return e
}

function Xa(e, t) {
    const n = fe;
    if (n === null) return e;
    const r = Bn(n) || n.proxy, s = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let [i, l, c, a = ee] = t[o];
        i && (q(i) && (i = {mounted: i, updated: i}), i.deep && lt(l), s.push({
            dir: i,
            instance: r,
            value: l,
            oldValue: void 0,
            arg: c,
            modifiers: a
        }))
    }
    return e
}

function Pe(e, t, n, r) {
    const s = e.dirs, o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        const l = s[i];
        o && (l.oldValue = o[i].value);
        let c = l.dir[r];
        c && (ht(), Te(c, n, 8, [e.el, l, e, t]), pt())
    }
}

const We = Symbol("_leaveCb"), rn = Symbol("_enterCb");

function Sl() {
    const e = {isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map};
    return Lt(() => {
        e.isMounted = !0
    }), Mo(() => {
        e.isUnmounting = !0
    }), e
}

const we = [Function, Array], Ao = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: we,
    onEnter: we,
    onAfterEnter: we,
    onEnterCancelled: we,
    onBeforeLeave: we,
    onLeave: we,
    onAfterLeave: we,
    onLeaveCancelled: we,
    onBeforeAppear: we,
    onAppear: we,
    onAfterAppear: we,
    onAppearCancelled: we
}, Rl = {
    name: "BaseTransition", props: Ao, setup(e, {slots: t}) {
        const n = Dn(), r = Sl();
        let s;
        return () => {
            const o = t.default && Ro(t.default(), !0);
            if (!o || !o.length) return;
            let i = o[0];
            if (o.length > 1) {
                for (const S of o) if (S.type !== ve) {
                    i = S;
                    break
                }
            }
            const l = X(e), {mode: c} = l;
            if (r.isLeaving) return qn(i);
            const a = cs(i);
            if (!a) return qn(i);
            const f = cr(a, l, r, n);
            ar(a, f);
            const h = n.subTree, p = h && cs(h);
            let y = !1;
            const {getTransitionKey: w} = a.type;
            if (w) {
                const S = w();
                s === void 0 ? s = S : S !== s && (s = S, y = !0)
            }
            if (p && p.type !== ve && (!it(a, p) || y)) {
                const S = cr(p, l, r, n);
                if (ar(p, S), c === "out-in") return r.isLeaving = !0, S.afterLeave = () => {
                    r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update())
                }, qn(i);
                c === "in-out" && a.type !== ve && (S.delayLeave = (N, k, B) => {
                    const g = So(r, p);
                    g[String(p.key)] = p, N[We] = () => {
                        k(), N[We] = void 0, delete f.delayedLeave
                    }, f.delayedLeave = B
                })
            }
            return i
        }
    }
}, Ll = Rl;

function So(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function cr(e, t, n, r) {
    const {
        appear: s,
        mode: o,
        persisted: i = !1,
        onBeforeEnter: l,
        onEnter: c,
        onAfterEnter: a,
        onEnterCancelled: f,
        onBeforeLeave: h,
        onLeave: p,
        onAfterLeave: y,
        onLeaveCancelled: w,
        onBeforeAppear: S,
        onAppear: N,
        onAfterAppear: k,
        onAppearCancelled: B
    } = t, g = String(e.key), _ = So(n, e), I = (R, T) => {
        R && Te(R, r, 9, T)
    }, M = (R, T) => {
        const A = T[1];
        I(R, T), U(R) ? R.every(K => K.length <= 1) && A() : R.length <= 1 && A()
    }, $ = {
        mode: o, persisted: i, beforeEnter(R) {
            let T = l;
            if (!n.isMounted) if (s) T = S || l; else return;
            R[We] && R[We](!0);
            const A = _[g];
            A && it(e, A) && A.el[We] && A.el[We](), I(T, [R])
        }, enter(R) {
            let T = c, A = a, K = f;
            if (!n.isMounted) if (s) T = N || c, A = k || a, K = B || f; else return;
            let P = !1;
            const G = R[rn] = oe => {
                P || (P = !0, oe ? I(K, [R]) : I(A, [R]), $.delayedLeave && $.delayedLeave(), R[rn] = void 0)
            };
            T ? M(T, [R, G]) : G()
        }, leave(R, T) {
            const A = String(e.key);
            if (R[rn] && R[rn](!0), n.isUnmounting) return T();
            I(h, [R]);
            let K = !1;
            const P = R[We] = G => {
                K || (K = !0, T(), G ? I(w, [R]) : I(y, [R]), R[We] = void 0, _[A] === e && delete _[A])
            };
            _[A] = e, p ? M(p, [R, P]) : P()
        }, clone(R) {
            return cr(R, t, n, r)
        }
    };
    return $
}

function qn(e) {
    if (Gt(e)) return e = et(e), e.children = null, e
}

function cs(e) {
    return Gt(e) ? e.children ? e.children[0] : void 0 : e
}

function ar(e, t) {
    e.shapeFlag & 6 && e.component ? ar(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Ro(e, t = !1, n) {
    let r = [], s = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === me ? (i.patchFlag & 128 && s++, r = r.concat(Ro(i.children, t, l))) : (t || i.type !== ve) && r.push(l != null ? et(i, {key: l}) : i)
    }
    if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
    return r
}/*! #__NO_SIDE_EFFECTS__ */
function jr(e, t) {
    return q(e) ? le({name: e.name}, t, {setup: e}) : e
}

const xt = e => !!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */
function Qa(e) {
    q(e) && (e = {loader: e});
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: s = 200,
        timeout: o,
        suspensible: i = !0,
        onError: l
    } = e;
    let c = null, a, f = 0;
    const h = () => (f++, c = null, p()), p = () => {
        let y;
        return c || (y = c = t().catch(w => {
            if (w = w instanceof Error ? w : new Error(String(w)), l) return new Promise((S, N) => {
                l(w, () => S(h()), () => N(w), f + 1)
            });
            throw w
        }).then(w => y !== c && c ? c : (w && (w.__esModule || w[Symbol.toStringTag] === "Module") && (w = w.default), a = w, w)))
    };
    return jr({
        name: "AsyncComponentWrapper", __asyncLoader: p, get __asyncResolved() {
            return a
        }, setup() {
            const y = ae;
            if (a) return () => Gn(a, y);
            const w = B => {
                c = null, qt(B, y, 13, !r)
            };
            if (i && y.suspense || zt) return p().then(B => () => Gn(B, y)).catch(B => (w(B), () => r ? se(r, {error: B}) : null));
            const S = ie(!1), N = ie(), k = ie(!!s);
            return s && setTimeout(() => {
                k.value = !1
            }, s), o != null && setTimeout(() => {
                if (!S.value && !N.value) {
                    const B = new Error(`Async component timed out after ${o}ms.`);
                    w(B), N.value = B
                }
            }, o), p().then(() => {
                S.value = !0, y.parent && Gt(y.parent.vnode) && (y.parent.effect.dirty = !0, In(y.parent.update))
            }).catch(B => {
                w(B), N.value = B
            }), () => {
                if (S.value && a) return Gn(a, y);
                if (N.value && r) return se(r, {error: N.value});
                if (n && !k.value) return se(n)
            }
        }
    })
}

function Gn(e, t) {
    const {ref: n, props: r, children: s, ce: o} = t.vnode, i = se(e, r, s);
    return i.ref = n, i.ce = o, delete t.vnode.ce, i
}

const Gt = e => e.type.__isKeepAlive;

function Ml(e, t) {
    Lo(e, "a", t)
}

function Ol(e, t) {
    Lo(e, "da", t)
}

function Lo(e, t, n = ae) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (Hn(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) Gt(s.parent.vnode) && Pl(r, t, n, s), s = s.parent
    }
}

function Pl(e, t, n, r) {
    const s = Hn(t, e, r, !0);
    jn(() => {
        Cr(r[t], s)
    }, n)
}

function Hn(e, t, n = ae, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
            if (n.isUnmounted) return;
            ht(), St(n);
            const l = Te(t, n, e, i);
            return ut(), pt(), l
        });
        return r ? s.unshift(o) : s.push(o), o
    }
}

const De = e => (t, n = ae) => (!zt || e === "sp") && Hn(e, (...r) => t(...r), n), Il = De("bm"), Lt = De("m"),
    Fl = De("bu"), Nl = De("u"), Mo = De("bum"), jn = De("um"), $l = De("sp"), Hl = De("rtg"), jl = De("rtc");

function Vl(e, t = ae) {
    Hn("ec", e, t)
}

function Za(e, t, n, r) {
    let s;
    const o = n && n[r];
    if (U(e) || ne(e)) {
        s = new Array(e.length);
        for (let i = 0, l = e.length; i < l; i++) s[i] = t(e[i], i, void 0, o && o[i])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i])
    } else if (Z(e)) if (e[Symbol.iterator]) s = Array.from(e, (i, l) => t(i, l, void 0, o && o[l])); else {
        const i = Object.keys(e);
        s = new Array(i.length);
        for (let l = 0, c = i.length; l < c; l++) {
            const a = i[l];
            s[l] = t(e[a], a, l, o && o[l])
        }
    } else s = [];
    return n && (n[r] = s), s
}

function eu(e, t, n = {}, r, s) {
    if (fe.isCE || fe.parent && xt(fe.parent) && fe.parent.isCE) return t !== "default" && (n.name = t), se("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1), ko();
    const i = o && Oo(o(n)),
        l = Wo(me, {key: n.key || i && i.key || `_${t}`}, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l
}

function Oo(e) {
    return e.some(t => Tn(t) ? !(t.type === ve || t.type === me && !Oo(t.children)) : !0) ? e : null
}

function tu(e, t) {
    const n = {};
    for (const r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : dn(r)] = e[r];
    return n
}

const ur = e => e ? Yo(e) ? Bn(e) || e.proxy : ur(e.parent) : null, Nt = le(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => ur(e.parent),
    $root: e => ur(e.root),
    $emit: e => e.emit,
    $options: e => Vr(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0, In(e.update)
    }),
    $nextTick: e => e.n || (e.n = Pn.bind(e.proxy)),
    $watch: e => Al.bind(e)
}), zn = (e, t) => e !== ee && !e.__isScriptSetup && J(e, t), Dl = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: c} = e;
        let a;
        if (t[0] !== "$") {
            const y = i[t];
            if (y !== void 0) switch (y) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
            } else {
                if (zn(r, t)) return i[t] = 1, r[t];
                if (s !== ee && J(s, t)) return i[t] = 2, s[t];
                if ((a = e.propsOptions[0]) && J(a, t)) return i[t] = 3, o[t];
                if (n !== ee && J(n, t)) return i[t] = 4, n[t];
                fr && (i[t] = 0)
            }
        }
        const f = Nt[t];
        let h, p;
        if (f) return t === "$attrs" && ye(e, "get", t), f(e);
        if ((h = l.__cssModules) && (h = h[t])) return h;
        if (n !== ee && J(n, t)) return i[t] = 4, n[t];
        if (p = c.config.globalProperties, J(p, t)) return p[t]
    }, set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: o} = e;
        return zn(s, t) ? (s[t] = n, !0) : r !== ee && J(r, t) ? (r[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o}}, i) {
        let l;
        return !!n[i] || e !== ee && J(e, i) || zn(t, i) || (l = o[0]) && J(l, i) || J(r, i) || J(Nt, i) || J(s.config.globalProperties, i)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};

function nu() {
    return Bl().slots
}

function Bl() {
    const e = Dn();
    return e.setupContext || (e.setupContext = Xo(e))
}

function as(e) {
    return U(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

let fr = !0;

function Ul(e) {
    const t = Vr(e), n = e.proxy, r = e.ctx;
    fr = !1, t.beforeCreate && us(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: o,
        methods: i,
        watch: l,
        provide: c,
        inject: a,
        created: f,
        beforeMount: h,
        mounted: p,
        beforeUpdate: y,
        updated: w,
        activated: S,
        deactivated: N,
        beforeDestroy: k,
        beforeUnmount: B,
        destroyed: g,
        unmounted: _,
        render: I,
        renderTracked: M,
        renderTriggered: $,
        errorCaptured: R,
        serverPrefetch: T,
        expose: A,
        inheritAttrs: K,
        components: P,
        directives: G,
        filters: oe
    } = t;
    if (a && kl(a, r, null), i) for (const Y in i) {
        const j = i[Y];
        q(j) && (r[Y] = j.bind(n))
    }
    if (s) {
        const Y = s.call(n, n);
        Z(Y) && (e.data = Mn(Y))
    }
    if (fr = !0, o) for (const Y in o) {
        const j = o[Y], $e = q(j) ? j.bind(n, n) : q(j.get) ? j.get.bind(n, n) : Ee,
            Yt = !q(j) && q(j.set) ? j.set.bind(n) : Ee, tt = re({get: $e, set: Yt});
        Object.defineProperty(r, Y, {enumerable: !0, configurable: !0, get: () => tt.value, set: Me => tt.value = Me})
    }
    if (l) for (const Y in l) Po(l[Y], r, n, Y);
    if (c) {
        const Y = q(c) ? c.call(n) : c;
        Reflect.ownKeys(Y).forEach(j => {
            Yl(j, Y[j])
        })
    }
    f && us(f, e, "c");

    function V(Y, j) {
        U(j) ? j.forEach($e => Y($e.bind(n))) : j && Y(j.bind(n))
    }

    if (V(Il, h), V(Lt, p), V(Fl, y), V(Nl, w), V(Ml, S), V(Ol, N), V(Vl, R), V(jl, M), V(Hl, $), V(Mo, B), V(jn, _), V($l, T), U(A)) if (A.length) {
        const Y = e.exposed || (e.exposed = {});
        A.forEach(j => {
            Object.defineProperty(Y, j, {get: () => n[j], set: $e => n[j] = $e})
        })
    } else e.exposed || (e.exposed = {});
    I && e.render === Ee && (e.render = I), K != null && (e.inheritAttrs = K), P && (e.components = P), G && (e.directives = G)
}

function kl(e, t, n = Ee) {
    U(e) && (e = dr(e));
    for (const r in e) {
        const s = e[r];
        let o;
        Z(s) ? "default" in s ? o = Et(s.from || r, s.default, !0) : o = Et(s.from || r) : o = Et(s), de(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[r] = o
    }
}

function us(e, t, n) {
    Te(U(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Po(e, t, n, r) {
    const s = r.includes(".") ? To(n, r) : () => n[r];
    if (ne(e)) {
        const o = t[e];
        q(o) && Je(s, o)
    } else if (q(e)) Je(s, e.bind(n)); else if (Z(e)) if (U(e)) e.forEach(o => Po(o, t, n, r)); else {
        const o = q(e.handler) ? e.handler.bind(n) : t[e.handler];
        q(o) && Je(s, o, e)
    }
}

function Vr(e) {
    const t = e.type, {mixins: n, extends: r} = t, {
        mixins: s,
        optionsCache: o,
        config: {optionMergeStrategies: i}
    } = e.appContext, l = o.get(t);
    let c;
    return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(a => Cn(c, a, i, !0)), Cn(c, t, i)), Z(t) && o.set(t, c), c
}

function Cn(e, t, n, r = !1) {
    const {mixins: s, extends: o} = t;
    o && Cn(e, o, n, !0), s && s.forEach(i => Cn(e, i, n, !0));
    for (const i in t) if (!(r && i === "expose")) {
        const l = Kl[i] || n && n[i];
        e[i] = l ? l(e[i], t[i]) : t[i]
    }
    return e
}

const Kl = {
    data: fs,
    props: ds,
    emits: ds,
    methods: Pt,
    computed: Pt,
    beforeCreate: pe,
    created: pe,
    beforeMount: pe,
    mounted: pe,
    beforeUpdate: pe,
    updated: pe,
    beforeDestroy: pe,
    beforeUnmount: pe,
    destroyed: pe,
    unmounted: pe,
    activated: pe,
    deactivated: pe,
    errorCaptured: pe,
    serverPrefetch: pe,
    components: Pt,
    directives: Pt,
    watch: ql,
    provide: fs,
    inject: Wl
};

function fs(e, t) {
    return t ? e ? function () {
        return le(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t)
    } : t : e
}

function Wl(e, t) {
    return Pt(dr(e), dr(t))
}

function dr(e) {
    if (U(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function pe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Pt(e, t) {
    return e ? le(Object.create(null), e, t) : t
}

function ds(e, t) {
    return e ? U(e) && U(t) ? [...new Set([...e, ...t])] : le(Object.create(null), as(e), as(t ?? {})) : t
}

function ql(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = le(Object.create(null), e);
    for (const r in t) n[r] = pe(e[r], t[r]);
    return n
}

function Io() {
    return {
        app: null,
        config: {
            isNativeTag: wi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let Gl = 0;

function zl(e, t) {
    return function (r, s = null) {
        q(r) || (r = le({}, r)), s != null && !Z(s) && (s = null);
        const o = Io(), i = new WeakSet;
        let l = !1;
        const c = o.app = {
            _uid: Gl++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: Cc,
            get config() {
                return o.config
            },
            set config(a) {
            },
            use(a, ...f) {
                return i.has(a) || (a && q(a.install) ? (i.add(a), a.install(c, ...f)) : q(a) && (i.add(a), a(c, ...f))), c
            },
            mixin(a) {
                return o.mixins.includes(a) || o.mixins.push(a), c
            },
            component(a, f) {
                return f ? (o.components[a] = f, c) : o.components[a]
            },
            directive(a, f) {
                return f ? (o.directives[a] = f, c) : o.directives[a]
            },
            mount(a, f, h) {
                if (!l) {
                    const p = se(r, s);
                    return p.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(p, a) : e(p, a, h), l = !0, c._container = a, a.__vue_app__ = c, Bn(p.component) || p.component.proxy
                }
            },
            unmount() {
                l && (e(null, c._container), delete c._container.__vue_app__)
            },
            provide(a, f) {
                return o.provides[a] = f, c
            },
            runWithContext(a) {
                xn = c;
                try {
                    return a()
                } finally {
                    xn = null
                }
            }
        };
        return c
    }
}

let xn = null;

function Yl(e, t) {
    if (ae) {
        let n = ae.provides;
        const r = ae.parent && ae.parent.provides;
        r === n && (n = ae.provides = Object.create(r)), n[e] = t
    }
}

function Et(e, t, n = !1) {
    const r = ae || fe;
    if (r || xn) {
        const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : xn._context.provides;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && q(t) ? t.call(r && r.proxy) : t
    }
}

function Jl(e, t, n, r = !1) {
    const s = {}, o = {};
    mn(o, Vn, 1), e.propsDefaults = Object.create(null), Fo(e, t, s, o);
    for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
    n ? e.props = r ? s : nl(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function Xl(e, t, n, r) {
    const {props: s, attrs: o, vnode: {patchFlag: i}} = e, l = X(s), [c] = e.propsOptions;
    let a = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const f = e.vnode.dynamicProps;
            for (let h = 0; h < f.length; h++) {
                let p = f[h];
                if (Fn(e.emitsOptions, p)) continue;
                const y = t[p];
                if (c) if (J(o, p)) y !== o[p] && (o[p] = y, a = !0); else {
                    const w = Ne(p);
                    s[w] = hr(c, l, w, y, e, !1)
                } else y !== o[p] && (o[p] = y, a = !0)
            }
        }
    } else {
        Fo(e, t, s, o) && (a = !0);
        let f;
        for (const h in l) (!t || !J(t, h) && ((f = dt(h)) === h || !J(t, f))) && (c ? n && (n[h] !== void 0 || n[f] !== void 0) && (s[h] = hr(c, l, h, void 0, e, !0)) : delete s[h]);
        if (o !== l) for (const h in o) (!t || !J(t, h)) && (delete o[h], a = !0)
    }
    a && Ve(e, "set", "$attrs")
}

function Fo(e, t, n, r) {
    const [s, o] = e.propsOptions;
    let i = !1, l;
    if (t) for (let c in t) {
        if (It(c)) continue;
        const a = t[c];
        let f;
        s && J(s, f = Ne(c)) ? !o || !o.includes(f) ? n[f] = a : (l || (l = {}))[f] = a : Fn(e.emitsOptions, c) || (!(c in r) || a !== r[c]) && (r[c] = a, i = !0)
    }
    if (o) {
        const c = X(n), a = l || ee;
        for (let f = 0; f < o.length; f++) {
            const h = o[f];
            n[h] = hr(s, c, h, a[h], e, !J(a, h))
        }
    }
    return i
}

function hr(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
        const l = J(i, "default");
        if (l && r === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && q(c)) {
                const {propsDefaults: a} = s;
                n in a ? r = a[n] : (St(s), r = a[n] = c.call(null, t), ut())
            } else r = c
        }
        i[0] && (o && !l ? r = !1 : i[1] && (r === "" || r === dt(n)) && (r = !0))
    }
    return r
}

function No(e, t, n = !1) {
    const r = t.propsCache, s = r.get(e);
    if (s) return s;
    const o = e.props, i = {}, l = [];
    let c = !1;
    if (!q(e)) {
        const f = h => {
            c = !0;
            const [p, y] = No(h, t, !0);
            le(i, p), y && l.push(...y)
        };
        !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
    }
    if (!o && !c) return Z(e) && r.set(e, bt), bt;
    if (U(o)) for (let f = 0; f < o.length; f++) {
        const h = Ne(o[f]);
        hs(h) && (i[h] = ee)
    } else if (o) for (const f in o) {
        const h = Ne(f);
        if (hs(h)) {
            const p = o[f], y = i[h] = U(p) || q(p) ? {type: p} : le({}, p);
            if (y) {
                const w = ms(Boolean, y.type), S = ms(String, y.type);
                y[0] = w > -1, y[1] = S < 0 || w < S, (w > -1 || J(y, "default")) && l.push(h)
            }
        }
    }
    const a = [i, l];
    return Z(e) && r.set(e, a), a
}

function hs(e) {
    return e[0] !== "$"
}

function ps(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function gs(e, t) {
    return ps(e) === ps(t)
}

function ms(e, t) {
    return U(t) ? t.findIndex(n => gs(n, e)) : q(t) && gs(t, e) ? 0 : -1
}

const $o = e => e[0] === "_" || e === "$stable", Dr = e => U(e) ? e.map(Se) : [Se(e)], Ql = (e, t, n) => {
    if (t._n) return t;
    const r = _l((...s) => Dr(t(...s)), n);
    return r._c = !1, r
}, Ho = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
        if ($o(s)) continue;
        const o = e[s];
        if (q(o)) t[s] = Ql(s, o, r); else if (o != null) {
            const i = Dr(o);
            t[s] = () => i
        }
    }
}, jo = (e, t) => {
    const n = Dr(t);
    e.slots.default = () => n
}, Zl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = X(t), mn(t, "_", n)) : Ho(t, e.slots = {})
    } else e.slots = {}, t && jo(e, t);
    mn(e.slots, Vn, 1)
}, ec = (e, t, n) => {
    const {vnode: r, slots: s} = e;
    let o = !0, i = ee;
    if (r.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? o = !1 : (le(s, t), !n && l === 1 && delete s._) : (o = !t.$stable, Ho(t, s)), i = t
    } else t && (jo(e, t), i = {default: 1});
    if (o) for (const l in s) !$o(l) && i[l] == null && delete s[l]
};

function En(e, t, n, r, s = !1) {
    if (U(e)) {
        e.forEach((p, y) => En(p, t && (U(t) ? t[y] : t), n, r, s));
        return
    }
    if (xt(r) && !s) return;
    const o = r.shapeFlag & 4 ? Bn(r.component) || r.component.proxy : r.el, i = s ? null : o, {i: l, r: c} = e,
        a = t && t.r, f = l.refs === ee ? l.refs = {} : l.refs, h = l.setupState;
    if (a != null && a !== c && (ne(a) ? (f[a] = null, J(h, a) && (h[a] = null)) : de(a) && (a.value = null)), q(c)) Ye(c, l, 12, [i, f]); else {
        const p = ne(c), y = de(c);
        if (p || y) {
            const w = () => {
                if (e.f) {
                    const S = p ? J(h, c) ? h[c] : f[c] : c.value;
                    s ? U(S) && Cr(S, o) : U(S) ? S.includes(o) || S.push(o) : p ? (f[c] = [o], J(h, c) && (h[c] = f[c])) : (c.value = [o], e.k && (f[e.k] = c.value))
                } else p ? (f[c] = i, J(h, c) && (h[c] = i)) : y && (c.value = i, e.k && (f[e.k] = i))
            };
            i ? (w.id = -1, ge(w, n)) : w()
        }
    }
}

let Ue = !1;
const tc = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    nc = e => e.namespaceURI.includes("MathML"), sn = e => {
        if (tc(e)) return "svg";
        if (nc(e)) return "mathml"
    }, on = e => e.nodeType === 8;

function rc(e) {
    const {
        mt: t,
        p: n,
        o: {patchProp: r, createText: s, nextSibling: o, parentNode: i, remove: l, insert: c, createComment: a}
    } = e, f = (g, _) => {
        if (!_.hasChildNodes()) {
            n(null, g, _), vn(), _._vnode = g;
            return
        }
        Ue = !1, h(_.firstChild, g, null, null, null), vn(), _._vnode = g, Ue && console.error("Hydration completed but contains mismatches.")
    }, h = (g, _, I, M, $, R = !1) => {
        const T = on(g) && g.data === "[", A = () => S(g, _, I, M, $, T), {
            type: K,
            ref: P,
            shapeFlag: G,
            patchFlag: oe
        } = _;
        let ue = g.nodeType;
        _.el = g, oe === -2 && (R = !1, _.dynamicChildren = null);
        let V = null;
        switch (K) {
            case At:
                ue !== 3 ? _.children === "" ? (c(_.el = s(""), i(g), g), V = g) : V = A() : (g.data !== _.children && (Ue = !0, g.data = _.children), V = o(g));
                break;
            case ve:
                B(g) ? (V = o(g), k(_.el = g.content.firstChild, g, I)) : ue !== 8 || T ? V = A() : V = o(g);
                break;
            case Ht:
                if (T && (g = o(g), ue = g.nodeType), ue === 1 || ue === 3) {
                    V = g;
                    const Y = !_.children.length;
                    for (let j = 0; j < _.staticCount; j++) Y && (_.children += V.nodeType === 1 ? V.outerHTML : V.data), j === _.staticCount - 1 && (_.anchor = V), V = o(V);
                    return T ? o(V) : V
                } else A();
                break;
            case me:
                T ? V = w(g, _, I, M, $, R) : V = A();
                break;
            default:
                if (G & 1) (ue !== 1 || _.type.toLowerCase() !== g.tagName.toLowerCase()) && !B(g) ? V = A() : V = p(g, _, I, M, $, R); else if (G & 6) {
                    _.slotScopeIds = $;
                    const Y = i(g);
                    if (T ? V = N(g) : on(g) && g.data === "teleport start" ? V = N(g, g.data, "teleport end") : V = o(g), t(_, Y, null, I, M, sn(Y), R), xt(_)) {
                        let j;
                        T ? (j = se(me), j.anchor = V ? V.previousSibling : Y.lastChild) : j = g.nodeType === 3 ? zo("") : se("div"), j.el = g, _.component.subTree = j
                    }
                } else G & 64 ? ue !== 8 ? V = A() : V = _.type.hydrate(g, _, I, M, $, R, e, y) : G & 128 && (V = _.type.hydrate(g, _, I, M, sn(i(g)), $, R, e, h))
        }
        return P != null && En(P, null, M, _), V
    }, p = (g, _, I, M, $, R) => {
        R = R || !!_.dynamicChildren;
        const {type: T, props: A, patchFlag: K, shapeFlag: P, dirs: G, transition: oe} = _,
            ue = T === "input" || T === "option";
        if (ue || K !== -1) {
            G && Pe(_, null, I, "created");
            let V = !1;
            if (B(g)) {
                V = Do(M, oe) && I && I.vnode.props && I.vnode.props.appear;
                const j = g.content.firstChild;
                V && oe.beforeEnter(j), k(j, g, I), _.el = g = j
            }
            if (P & 16 && !(A && (A.innerHTML || A.textContent))) {
                let j = y(g.firstChild, _, g, I, M, $, R);
                for (; j;) {
                    Ue = !0;
                    const $e = j;
                    j = j.nextSibling, l($e)
                }
            } else P & 8 && g.textContent !== _.children && (Ue = !0, g.textContent = _.children);
            if (A) if (ue || !R || K & 48) for (const j in A) (ue && (j.endsWith("value") || j === "indeterminate") || Wt(j) && !It(j) || j[0] === ".") && r(g, j, null, A[j], void 0, void 0, I); else A.onClick && r(g, "onClick", null, A.onClick, void 0, void 0, I);
            let Y;
            (Y = A && A.onVnodeBeforeMount) && Ce(Y, I, _), G && Pe(_, null, I, "beforeMount"), ((Y = A && A.onVnodeMounted) || G || V) && Eo(() => {
                Y && Ce(Y, I, _), V && oe.enter(g), G && Pe(_, null, I, "mounted")
            }, M)
        }
        return g.nextSibling
    }, y = (g, _, I, M, $, R, T) => {
        T = T || !!_.dynamicChildren;
        const A = _.children, K = A.length;
        for (let P = 0; P < K; P++) {
            const G = T ? A[P] : A[P] = Se(A[P]);
            if (g) g = h(g, G, M, $, R, T); else {
                if (G.type === At && !G.children) continue;
                Ue = !0, n(null, G, I, null, M, $, sn(I), R)
            }
        }
        return g
    }, w = (g, _, I, M, $, R) => {
        const {slotScopeIds: T} = _;
        T && ($ = $ ? $.concat(T) : T);
        const A = i(g), K = y(o(g), _, A, I, M, $, R);
        return K && on(K) && K.data === "]" ? o(_.anchor = K) : (Ue = !0, c(_.anchor = a("]"), A, K), K)
    }, S = (g, _, I, M, $, R) => {
        if (Ue = !0, _.el = null, R) {
            const K = N(g);
            for (; ;) {
                const P = o(g);
                if (P && P !== K) l(P); else break
            }
        }
        const T = o(g), A = i(g);
        return l(g), n(null, _, A, T, I, M, sn(A), $), T
    }, N = (g, _ = "[", I = "]") => {
        let M = 0;
        for (; g;) if (g = o(g), g && on(g) && (g.data === _ && M++, g.data === I)) {
            if (M === 0) return o(g);
            M--
        }
        return g
    }, k = (g, _, I) => {
        const M = _.parentNode;
        M && M.replaceChild(g, _);
        let $ = I;
        for (; $;) $.vnode.el === _ && ($.vnode.el = $.subTree.el = g), $ = $.parent
    }, B = g => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
    return [f, h]
}

const ge = Eo;

function sc(e) {
    return Vo(e)
}

function oc(e) {
    return Vo(e, rc)
}

function Vo(e, t) {
    const n = Xs();
    n.__VUE__ = !0;
    const {
            insert: r,
            remove: s,
            patchProp: o,
            createElement: i,
            createText: l,
            createComment: c,
            setText: a,
            setElementText: f,
            parentNode: h,
            nextSibling: p,
            setScopeId: y = Ee,
            insertStaticContent: w
        } = e, S = (u, d, m, b = null, v = null, E = null, O = void 0, x = null, L = !!d.dynamicChildren) => {
            if (u === d) return;
            u && !it(u, d) && (b = Jt(u), Me(u, v, E, !0), u = null), d.patchFlag === -2 && (L = !1, d.dynamicChildren = null);
            const {type: C, ref: F, shapeFlag: D} = d;
            switch (C) {
                case At:
                    N(u, d, m, b);
                    break;
                case ve:
                    k(u, d, m, b);
                    break;
                case Ht:
                    u == null && B(d, m, b, O);
                    break;
                case me:
                    P(u, d, m, b, v, E, O, x, L);
                    break;
                default:
                    D & 1 ? I(u, d, m, b, v, E, O, x, L) : D & 6 ? G(u, d, m, b, v, E, O, x, L) : (D & 64 || D & 128) && C.process(u, d, m, b, v, E, O, x, L, gt)
            }
            F != null && v && En(F, u && u.ref, E, d || u, !d)
        }, N = (u, d, m, b) => {
            if (u == null) r(d.el = l(d.children), m, b); else {
                const v = d.el = u.el;
                d.children !== u.children && a(v, d.children)
            }
        }, k = (u, d, m, b) => {
            u == null ? r(d.el = c(d.children || ""), m, b) : d.el = u.el
        }, B = (u, d, m, b) => {
            [u.el, u.anchor] = w(u.children, d, m, b, u.el, u.anchor)
        }, g = ({el: u, anchor: d}, m, b) => {
            let v;
            for (; u && u !== d;) v = p(u), r(u, m, b), u = v;
            r(d, m, b)
        }, _ = ({el: u, anchor: d}) => {
            let m;
            for (; u && u !== d;) m = p(u), s(u), u = m;
            s(d)
        }, I = (u, d, m, b, v, E, O, x, L) => {
            d.type === "svg" ? O = "svg" : d.type === "math" && (O = "mathml"), u == null ? M(d, m, b, v, E, O, x, L) : T(u, d, v, E, O, x, L)
        }, M = (u, d, m, b, v, E, O, x) => {
            let L, C;
            const {props: F, shapeFlag: D, transition: H, dirs: W} = u;
            if (L = u.el = i(u.type, E, F && F.is, F), D & 8 ? f(L, u.children) : D & 16 && R(u.children, L, null, b, v, Yn(u, E), O, x), W && Pe(u, null, b, "created"), $(L, u, u.scopeId, O, b), F) {
                for (const Q in F) Q !== "value" && !It(Q) && o(L, Q, null, F[Q], E, u.children, b, v, He);
                "value" in F && o(L, "value", null, F.value, E), (C = F.onVnodeBeforeMount) && Ce(C, b, u)
            }
            W && Pe(u, null, b, "beforeMount");
            const z = Do(v, H);
            z && H.beforeEnter(L), r(L, d, m), ((C = F && F.onVnodeMounted) || z || W) && ge(() => {
                C && Ce(C, b, u), z && H.enter(L), W && Pe(u, null, b, "mounted")
            }, v)
        }, $ = (u, d, m, b, v) => {
            if (m && y(u, m), b) for (let E = 0; E < b.length; E++) y(u, b[E]);
            if (v) {
                let E = v.subTree;
                if (d === E) {
                    const O = v.vnode;
                    $(u, O, O.scopeId, O.slotScopeIds, v.parent)
                }
            }
        }, R = (u, d, m, b, v, E, O, x, L = 0) => {
            for (let C = L; C < u.length; C++) {
                const F = u[C] = x ? qe(u[C]) : Se(u[C]);
                S(null, F, d, m, b, v, E, O, x)
            }
        }, T = (u, d, m, b, v, E, O) => {
            const x = d.el = u.el;
            let {patchFlag: L, dynamicChildren: C, dirs: F} = d;
            L |= u.patchFlag & 16;
            const D = u.props || ee, H = d.props || ee;
            let W;
            if (m && nt(m, !1), (W = H.onVnodeBeforeUpdate) && Ce(W, m, d, u), F && Pe(d, u, m, "beforeUpdate"), m && nt(m, !0), C ? A(u.dynamicChildren, C, x, m, b, Yn(d, v), E) : O || j(u, d, x, null, m, b, Yn(d, v), E, !1), L > 0) {
                if (L & 16) K(x, d, D, H, m, b, v); else if (L & 2 && D.class !== H.class && o(x, "class", null, H.class, v), L & 4 && o(x, "style", D.style, H.style, v), L & 8) {
                    const z = d.dynamicProps;
                    for (let Q = 0; Q < z.length; Q++) {
                        const te = z[Q], ce = D[te], Ae = H[te];
                        (Ae !== ce || te === "value") && o(x, te, ce, Ae, v, u.children, m, b, He)
                    }
                }
                L & 1 && u.children !== d.children && f(x, d.children)
            } else !O && C == null && K(x, d, D, H, m, b, v);
            ((W = H.onVnodeUpdated) || F) && ge(() => {
                W && Ce(W, m, d, u), F && Pe(d, u, m, "updated")
            }, b)
        }, A = (u, d, m, b, v, E, O) => {
            for (let x = 0; x < d.length; x++) {
                const L = u[x], C = d[x], F = L.el && (L.type === me || !it(L, C) || L.shapeFlag & 70) ? h(L.el) : m;
                S(L, C, F, null, b, v, E, O, !0)
            }
        }, K = (u, d, m, b, v, E, O) => {
            if (m !== b) {
                if (m !== ee) for (const x in m) !It(x) && !(x in b) && o(u, x, m[x], null, O, d.children, v, E, He);
                for (const x in b) {
                    if (It(x)) continue;
                    const L = b[x], C = m[x];
                    L !== C && x !== "value" && o(u, x, C, L, O, d.children, v, E, He)
                }
                "value" in b && o(u, "value", m.value, b.value, O)
            }
        }, P = (u, d, m, b, v, E, O, x, L) => {
            const C = d.el = u ? u.el : l(""), F = d.anchor = u ? u.anchor : l("");
            let {patchFlag: D, dynamicChildren: H, slotScopeIds: W} = d;
            W && (x = x ? x.concat(W) : W), u == null ? (r(C, m, b), r(F, m, b), R(d.children, m, F, v, E, O, x, L)) : D > 0 && D & 64 && H && u.dynamicChildren ? (A(u.dynamicChildren, H, m, v, E, O, x), (d.key != null || v && d === v.subTree) && Br(u, d, !0)) : j(u, d, m, F, v, E, O, x, L)
        }, G = (u, d, m, b, v, E, O, x, L) => {
            d.slotScopeIds = x, u == null ? d.shapeFlag & 512 ? v.ctx.activate(d, m, b, O, L) : oe(d, m, b, v, E, O, L) : ue(u, d, L)
        }, oe = (u, d, m, b, v, E, O) => {
            const x = u.component = mc(u, b, v);
            if (Gt(u) && (x.ctx.renderer = gt), yc(x), x.asyncDep) {
                if (v && v.registerDep(x, V), !u.el) {
                    const L = x.subTree = se(ve);
                    k(null, L, d, m)
                }
            } else V(x, u, d, m, v, E, O)
        }, ue = (u, d, m) => {
            const b = d.component = u.component;
            if (wl(u, d, m)) if (b.asyncDep && !b.asyncResolved) {
                Y(b, d, m);
                return
            } else b.next = d, pl(b.update), b.effect.dirty = !0, b.update(); else d.el = u.el, b.vnode = d
        }, V = (u, d, m, b, v, E, O) => {
            const x = () => {
                if (u.isMounted) {
                    let {next: F, bu: D, u: H, parent: W, vnode: z} = u;
                    {
                        const mt = Bo(u);
                        if (mt) {
                            F && (F.el = z.el, Y(u, F, O)), mt.asyncDep.then(() => {
                                u.isUnmounted || x()
                            });
                            return
                        }
                    }
                    let Q = F, te;
                    nt(u, !1), F ? (F.el = z.el, Y(u, F, O)) : F = z, D && hn(D), (te = F.props && F.props.onVnodeBeforeUpdate) && Ce(te, W, F, z), nt(u, !0);
                    const ce = Wn(u), Ae = u.subTree;
                    u.subTree = ce, S(Ae, ce, h(Ae.el), Jt(Ae), u, v, E), F.el = ce.el, Q === null && Cl(u, ce.el), H && ge(H, v), (te = F.props && F.props.onVnodeUpdated) && ge(() => Ce(te, W, F, z), v)
                } else {
                    let F;
                    const {el: D, props: H} = d, {bm: W, m: z, parent: Q} = u, te = xt(d);
                    if (nt(u, !1), W && hn(W), !te && (F = H && H.onVnodeBeforeMount) && Ce(F, Q, d), nt(u, !0), D && kn) {
                        const ce = () => {
                            u.subTree = Wn(u), kn(D, u.subTree, u, v, null)
                        };
                        te ? d.type.__asyncLoader().then(() => !u.isUnmounted && ce()) : ce()
                    } else {
                        const ce = u.subTree = Wn(u);
                        S(null, ce, m, b, u, v, E), d.el = ce.el
                    }
                    if (z && ge(z, v), !te && (F = H && H.onVnodeMounted)) {
                        const ce = d;
                        ge(() => Ce(F, Q, ce), v)
                    }
                    (d.shapeFlag & 256 || Q && xt(Q.vnode) && Q.vnode.shapeFlag & 256) && u.a && ge(u.a, v), u.isMounted = !0, d = m = b = null
                }
            }, L = u.effect = new Ar(x, Ee, () => In(C), u.scope), C = u.update = () => {
                L.dirty && L.run()
            };
            C.id = u.uid, nt(u, !0), C()
        }, Y = (u, d, m) => {
            d.component = u;
            const b = u.vnode.props;
            u.vnode = d, u.next = null, Xl(u, d.props, b, m), ec(u, d.children, m), ht(), os(u), pt()
        }, j = (u, d, m, b, v, E, O, x, L = !1) => {
            const C = u && u.children, F = u ? u.shapeFlag : 0, D = d.children, {patchFlag: H, shapeFlag: W} = d;
            if (H > 0) {
                if (H & 128) {
                    Yt(C, D, m, b, v, E, O, x, L);
                    return
                } else if (H & 256) {
                    $e(C, D, m, b, v, E, O, x, L);
                    return
                }
            }
            W & 8 ? (F & 16 && He(C, v, E), D !== C && f(m, D)) : F & 16 ? W & 16 ? Yt(C, D, m, b, v, E, O, x, L) : He(C, v, E, !0) : (F & 8 && f(m, ""), W & 16 && R(D, m, b, v, E, O, x, L))
        }, $e = (u, d, m, b, v, E, O, x, L) => {
            u = u || bt, d = d || bt;
            const C = u.length, F = d.length, D = Math.min(C, F);
            let H;
            for (H = 0; H < D; H++) {
                const W = d[H] = L ? qe(d[H]) : Se(d[H]);
                S(u[H], W, m, null, v, E, O, x, L)
            }
            C > F ? He(u, v, E, !0, !1, D) : R(d, m, b, v, E, O, x, L, D)
        }, Yt = (u, d, m, b, v, E, O, x, L) => {
            let C = 0;
            const F = d.length;
            let D = u.length - 1, H = F - 1;
            for (; C <= D && C <= H;) {
                const W = u[C], z = d[C] = L ? qe(d[C]) : Se(d[C]);
                if (it(W, z)) S(W, z, m, null, v, E, O, x, L); else break;
                C++
            }
            for (; C <= D && C <= H;) {
                const W = u[D], z = d[H] = L ? qe(d[H]) : Se(d[H]);
                if (it(W, z)) S(W, z, m, null, v, E, O, x, L); else break;
                D--, H--
            }
            if (C > D) {
                if (C <= H) {
                    const W = H + 1, z = W < F ? d[W].el : b;
                    for (; C <= H;) S(null, d[C] = L ? qe(d[C]) : Se(d[C]), m, z, v, E, O, x, L), C++
                }
            } else if (C > H) for (; C <= D;) Me(u[C], v, E, !0), C++; else {
                const W = C, z = C, Q = new Map;
                for (C = z; C <= H; C++) {
                    const _e = d[C] = L ? qe(d[C]) : Se(d[C]);
                    _e.key != null && Q.set(_e.key, C)
                }
                let te, ce = 0;
                const Ae = H - z + 1;
                let mt = !1, zr = 0;
                const Mt = new Array(Ae);
                for (C = 0; C < Ae; C++) Mt[C] = 0;
                for (C = W; C <= D; C++) {
                    const _e = u[C];
                    if (ce >= Ae) {
                        Me(_e, v, E, !0);
                        continue
                    }
                    let Oe;
                    if (_e.key != null) Oe = Q.get(_e.key); else for (te = z; te <= H; te++) if (Mt[te - z] === 0 && it(_e, d[te])) {
                        Oe = te;
                        break
                    }
                    Oe === void 0 ? Me(_e, v, E, !0) : (Mt[Oe - z] = C + 1, Oe >= zr ? zr = Oe : mt = !0, S(_e, d[Oe], m, null, v, E, O, x, L), ce++)
                }
                const Yr = mt ? ic(Mt) : bt;
                for (te = Yr.length - 1, C = Ae - 1; C >= 0; C--) {
                    const _e = z + C, Oe = d[_e], Jr = _e + 1 < F ? d[_e + 1].el : b;
                    Mt[C] === 0 ? S(null, Oe, m, Jr, v, E, O, x, L) : mt && (te < 0 || C !== Yr[te] ? tt(Oe, m, Jr, 2) : te--)
                }
            }
        }, tt = (u, d, m, b, v = null) => {
            const {el: E, type: O, transition: x, children: L, shapeFlag: C} = u;
            if (C & 6) {
                tt(u.component.subTree, d, m, b);
                return
            }
            if (C & 128) {
                u.suspense.move(d, m, b);
                return
            }
            if (C & 64) {
                O.move(u, d, m, gt);
                return
            }
            if (O === me) {
                r(E, d, m);
                for (let D = 0; D < L.length; D++) tt(L[D], d, m, b);
                r(u.anchor, d, m);
                return
            }
            if (O === Ht) {
                g(u, d, m);
                return
            }
            if (b !== 2 && C & 1 && x) if (b === 0) x.beforeEnter(E), r(E, d, m), ge(() => x.enter(E), v); else {
                const {leave: D, delayLeave: H, afterLeave: W} = x, z = () => r(E, d, m), Q = () => {
                    D(E, () => {
                        z(), W && W()
                    })
                };
                H ? H(E, z, Q) : Q()
            } else r(E, d, m)
        }, Me = (u, d, m, b = !1, v = !1) => {
            const {type: E, props: O, ref: x, children: L, dynamicChildren: C, shapeFlag: F, patchFlag: D, dirs: H} = u;
            if (x != null && En(x, null, m, u, !0), F & 256) {
                d.ctx.deactivate(u);
                return
            }
            const W = F & 1 && H, z = !xt(u);
            let Q;
            if (z && (Q = O && O.onVnodeBeforeUnmount) && Ce(Q, d, u), F & 6) vi(u.component, m, b); else {
                if (F & 128) {
                    u.suspense.unmount(m, b);
                    return
                }
                W && Pe(u, null, d, "beforeUnmount"), F & 64 ? u.type.remove(u, d, m, v, gt, b) : C && (E !== me || D > 0 && D & 64) ? He(C, d, m, !1, !0) : (E === me && D & 384 || !v && F & 16) && He(L, d, m), b && qr(u)
            }
            (z && (Q = O && O.onVnodeUnmounted) || W) && ge(() => {
                Q && Ce(Q, d, u), W && Pe(u, null, d, "unmounted")
            }, m)
        }, qr = u => {
            const {type: d, el: m, anchor: b, transition: v} = u;
            if (d === me) {
                bi(m, b);
                return
            }
            if (d === Ht) {
                _(u);
                return
            }
            const E = () => {
                s(m), v && !v.persisted && v.afterLeave && v.afterLeave()
            };
            if (u.shapeFlag & 1 && v && !v.persisted) {
                const {leave: O, delayLeave: x} = v, L = () => O(m, E);
                x ? x(u.el, E, L) : L()
            } else E()
        }, bi = (u, d) => {
            let m;
            for (; u !== d;) m = p(u), s(u), u = m;
            s(d)
        }, vi = (u, d, m) => {
            const {bum: b, scope: v, update: E, subTree: O, um: x} = u;
            b && hn(b), v.stop(), E && (E.active = !1, Me(O, u, d, m)), x && ge(x, d), ge(() => {
                u.isUnmounted = !0
            }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve())
        }, He = (u, d, m, b = !1, v = !1, E = 0) => {
            for (let O = E; O < u.length; O++) Me(u[O], d, m, b, v)
        },
        Jt = u => u.shapeFlag & 6 ? Jt(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el),
        Gr = (u, d, m) => {
            u == null ? d._vnode && Me(d._vnode, null, null, !0) : S(d._vnode || null, u, d, null, null, null, m), os(), vn(), d._vnode = u
        }, gt = {p: S, um: Me, m: tt, r: qr, mt: oe, mc: R, pc: j, pbc: A, n: Jt, o: e};
    let Un, kn;
    return t && ([Un, kn] = t(gt)), {render: Gr, hydrate: Un, createApp: zl(Gr, Un)}
}

function Yn({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function nt({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function Do(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Br(e, t, n = !1) {
    const r = e.children, s = t.children;
    if (U(r) && U(s)) for (let o = 0; o < r.length; o++) {
        const i = r[o];
        let l = s[o];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = qe(s[o]), l.el = i.el), n || Br(i, l)), l.type === At && (l.el = i.el)
    }
}

function ic(e) {
    const t = e.slice(), n = [0];
    let r, s, o, i, l;
    const c = e.length;
    for (r = 0; r < c; r++) {
        const a = e[r];
        if (a !== 0) {
            if (s = n[n.length - 1], e[s] < a) {
                t[r] = s, n.push(r);
                continue
            }
            for (o = 0, i = n.length - 1; o < i;) l = o + i >> 1, e[n[l]] < a ? o = l + 1 : i = l;
            a < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
    return n
}

function Bo(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Bo(t)
}

const lc = e => e.__isTeleport, $t = e => e && (e.disabled || e.disabled === ""),
    ys = e => typeof SVGElement < "u" && e instanceof SVGElement,
    _s = e => typeof MathMLElement == "function" && e instanceof MathMLElement, pr = (e, t) => {
        const n = e && e.to;
        return ne(n) ? t ? t(n) : null : n
    }, cc = {
        name: "Teleport", __isTeleport: !0, process(e, t, n, r, s, o, i, l, c, a) {
            const {mc: f, pc: h, pbc: p, o: {insert: y, querySelector: w, createText: S, createComment: N}} = a,
                k = $t(t.props);
            let {shapeFlag: B, children: g, dynamicChildren: _} = t;
            if (e == null) {
                const I = t.el = S(""), M = t.anchor = S("");
                y(I, n, r), y(M, n, r);
                const $ = t.target = pr(t.props, w), R = t.targetAnchor = S("");
                $ && (y(R, $), i === "svg" || ys($) ? i = "svg" : (i === "mathml" || _s($)) && (i = "mathml"));
                const T = (A, K) => {
                    B & 16 && f(g, A, K, s, o, i, l, c)
                };
                k ? T(n, M) : $ && T($, R)
            } else {
                t.el = e.el;
                const I = t.anchor = e.anchor, M = t.target = e.target, $ = t.targetAnchor = e.targetAnchor,
                    R = $t(e.props), T = R ? n : M, A = R ? I : $;
                if (i === "svg" || ys(M) ? i = "svg" : (i === "mathml" || _s(M)) && (i = "mathml"), _ ? (p(e.dynamicChildren, _, T, s, o, i, l), Br(e, t, !0)) : c || h(e, t, T, A, s, o, i, l, !1), k) R ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ln(t, n, I, a, 1); else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const K = t.target = pr(t.props, w);
                    K && ln(t, K, null, a, 0)
                } else R && ln(t, M, $, a, 1)
            }
            Uo(t)
        }, remove(e, t, n, r, {um: s, o: {remove: o}}, i) {
            const {shapeFlag: l, children: c, anchor: a, targetAnchor: f, target: h, props: p} = e;
            if (h && o(f), i && o(a), l & 16) {
                const y = i || !$t(p);
                for (let w = 0; w < c.length; w++) {
                    const S = c[w];
                    s(S, t, n, y, !!S.dynamicChildren)
                }
            }
        }, move: ln, hydrate: ac
    };

function ln(e, t, n, {o: {insert: r}, m: s}, o = 2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: i, anchor: l, shapeFlag: c, children: a, props: f} = e, h = o === 2;
    if (h && r(i, t, n), (!h || $t(f)) && c & 16) for (let p = 0; p < a.length; p++) s(a[p], t, n, 2);
    h && r(l, t, n)
}

function ac(e, t, n, r, s, o, {o: {nextSibling: i, parentNode: l, querySelector: c}}, a) {
    const f = t.target = pr(t.props, c);
    if (f) {
        const h = f._lpa || f.firstChild;
        if (t.shapeFlag & 16) if ($t(t.props)) t.anchor = a(i(e), t, l(e), n, r, s, o), t.targetAnchor = h; else {
            t.anchor = i(e);
            let p = h;
            for (; p;) if (p = i(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
                t.targetAnchor = p, f._lpa = t.targetAnchor && i(t.targetAnchor);
                break
            }
            a(h, t, f, n, r, s, o)
        }
        Uo(t)
    }
    return t.anchor && i(t.anchor)
}

const ru = cc;

function Uo(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
        t.ut()
    }
}

const me = Symbol.for("v-fgt"), At = Symbol.for("v-txt"), ve = Symbol.for("v-cmt"), Ht = Symbol.for("v-stc"), jt = [];
let Re = null;

function ko(e = !1) {
    jt.push(Re = e ? null : [])
}

function uc() {
    jt.pop(), Re = jt[jt.length - 1] || null
}

let kt = 1;

function bs(e) {
    kt += e
}

function Ko(e) {
    return e.dynamicChildren = kt > 0 ? Re || bt : null, uc(), kt > 0 && Re && Re.push(e), e
}

function su(e, t, n, r, s, o) {
    return Ko(Go(e, t, n, r, s, o, !0))
}

function Wo(e, t, n, r, s) {
    return Ko(se(e, t, n, r, s, !0))
}

function Tn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function it(e, t) {
    return e.type === t.type && e.key === t.key
}

const Vn = "__vInternal", qo = ({key: e}) => e ?? null, pn = ({
                                                                  ref: e,
                                                                  ref_key: t,
                                                                  ref_for: n
                                                              }) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || de(e) || q(e) ? {
    i: fe,
    r: e,
    k: t,
    f: !!n
} : e : null);

function Go(e, t = null, n = null, r = 0, s = null, o = e === me ? 0 : 1, i = !1, l = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && qo(t),
        ref: t && pn(t),
        scopeId: Nn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: fe
    };
    return l ? (Ur(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= ne(n) ? 8 : 16), kt > 0 && !i && Re && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Re.push(c), c
}

const se = fc;

function fc(e, t = null, n = null, r = 0, s = null, o = !1) {
    if ((!e || e === Co) && (e = ve), Tn(e)) {
        const l = et(e, t, !0);
        return n && Ur(l, n), kt > 0 && !o && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag |= -2, l
    }
    if (wc(e) && (e = e.__vccOpts), t) {
        t = dc(t);
        let {class: l, style: c} = t;
        l && !ne(l) && (t.class = Tr(l)), Z(c) && (ho(c) && !U(c) && (c = le({}, c)), t.style = Er(c))
    }
    const i = ne(e) ? 1 : xl(e) ? 128 : lc(e) ? 64 : Z(e) ? 4 : q(e) ? 2 : 0;
    return Go(e, t, n, r, s, i, o, !0)
}

function dc(e) {
    return e ? ho(e) || Vn in e ? le({}, e) : e : null
}

function et(e, t, n = !1) {
    const {props: r, ref: s, patchFlag: o, children: i} = e, l = t ? hc(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && qo(l),
        ref: t && t.ref ? n && s ? U(s) ? s.concat(pn(t)) : [s, pn(t)] : pn(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== me ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && et(e.ssContent),
        ssFallback: e.ssFallback && et(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function zo(e = " ", t = 0) {
    return se(At, null, e, t)
}

function ou(e, t) {
    const n = se(Ht, null, e);
    return n.staticCount = t, n
}

function iu(e = "", t = !1) {
    return t ? (ko(), Wo(ve, null, e)) : se(ve, null, e)
}

function Se(e) {
    return e == null || typeof e == "boolean" ? se(ve) : U(e) ? se(me, null, e.slice()) : typeof e == "object" ? qe(e) : se(At, null, String(e))
}

function qe(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e)
}

function Ur(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null) t = null; else if (U(t)) n = 16; else if (typeof t == "object") if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), Ur(e, s()), s._c && (s._d = !0));
        return
    } else {
        n = 32;
        const s = t._;
        !s && !(Vn in t) ? t._ctx = fe : s === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else q(t) ? (t = {default: t, _ctx: fe}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [zo(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function hc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r) if (s === "class") t.class !== r.class && (t.class = Tr([t.class, r.class])); else if (s === "style") t.style = Er([t.style, r.style]); else if (Wt(s)) {
            const o = t[s], i = r[s];
            i && o !== i && !(U(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function Ce(e, t, n, r = null) {
    Te(e, t, 7, [n, r])
}

const pc = Io();
let gc = 0;

function mc(e, t, n) {
    const r = e.type, s = (t ? t.appContext : e.appContext) || pc, o = {
        uid: gc++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Ii(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: No(r, s),
        emitsOptions: wo(r, s),
        emit: null,
        emitted: null,
        propsDefaults: ee,
        inheritAttrs: r.inheritAttrs,
        ctx: ee,
        data: ee,
        props: ee,
        attrs: ee,
        slots: ee,
        refs: ee,
        setupState: ee,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {_: o}, o.root = t ? t.root : o, o.emit = yl.bind(null, o), e.ce && e.ce(o), o
}

let ae = null;
const Dn = () => ae || fe;
let kr, gr;
{
    const e = Xs(), t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []), s.push(r), o => {
            s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
        }
    };
    kr = t("__VUE_INSTANCE_SETTERS__", n => ae = n), gr = t("__VUE_SSR_SETTERS__", n => zt = n)
}
const St = e => {
    kr(e), e.scope.on()
}, ut = () => {
    ae && ae.scope.off(), kr(null)
};

function Yo(e) {
    return e.vnode.shapeFlag & 4
}

let zt = !1;

function yc(e, t = !1) {
    t && gr(t);
    const {props: n, children: r} = e.vnode, s = Yo(e);
    Jl(e, n, s, t), Zl(e, r);
    const o = s ? _c(e, t) : void 0;
    return t && gr(!1), o
}

function _c(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = Ft(new Proxy(e.ctx, Dl));
    const {setup: r} = n;
    if (r) {
        const s = e.setupContext = r.length > 1 ? Xo(e) : null;
        St(e), ht();
        const o = Ye(r, e, 0, [e.props, s]);
        if (pt(), ut(), zs(o)) {
            if (o.then(ut, ut), t) return o.then(i => {
                vs(e, i, t)
            }).catch(i => {
                qt(i, e, 0)
            });
            e.asyncDep = o
        } else vs(e, o, t)
    } else Jo(e, t)
}

function vs(e, t, n) {
    q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = yo(t)), Jo(e, n)
}

let ws;

function Jo(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && ws && !r.render) {
            const s = r.template || Vr(e).template;
            if (s) {
                const {isCustomElement: o, compilerOptions: i} = e.appContext.config, {
                    delimiters: l,
                    compilerOptions: c
                } = r, a = le(le({isCustomElement: o, delimiters: l}, i), c);
                r.render = ws(s, a)
            }
        }
        e.render = r.render || Ee
    }
    {
        St(e), ht();
        try {
            Ul(e)
        } finally {
            pt(), ut()
        }
    }
}

function bc(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return ye(e, "get", "$attrs"), t[n]
        }
    }))
}

function Xo(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return bc(e)
        }, slots: e.slots, emit: e.emit, expose: t
    }
}

function Bn(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(yo(Ft(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Nt) return Nt[n](e)
        }, has(t, n) {
            return n in t || n in Nt
        }
    }))
}

function vc(e, t = !0) {
    return q(e) ? e.displayName || e.name : e.name || t && e.__name
}

function wc(e) {
    return q(e) && "__vccOpts" in e
}

const re = (e, t) => rl(e, t, zt);

function mr(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Z(t) && !U(t) ? Tn(t) ? se(e, null, [t]) : se(e, t) : se(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Tn(n) && (n = [n]), se(e, t, n))
}

const Cc = "3.4.5", xc = "http://www.w3.org/2000/svg", Ec = "http://www.w3.org/1998/Math/MathML",
    Ge = typeof document < "u" ? document : null, Cs = Ge && Ge.createElement("template"), Tc = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const s = t === "svg" ? Ge.createElementNS(xc, e) : t === "mathml" ? Ge.createElementNS(Ec, e) : Ge.createElement(e, n ? {is: n} : void 0);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => Ge.createTextNode(e),
        createComment: e => Ge.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Ge.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (s && (s === o || s.nextSibling)) for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling));) ; else {
                Cs.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
                const l = Cs.content;
                if (r === "svg" || r === "mathml") {
                    const c = l.firstChild;
                    for (; c.firstChild;) l.appendChild(c.firstChild);
                    l.removeChild(c)
                }
                t.insertBefore(l, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }, ke = "transition", Ot = "animation", Kt = Symbol("_vtc"), Qo = (e, {slots: t}) => mr(Ll, Ac(e), t);
Qo.displayName = "Transition";
const Zo = {
    name: String,
    type: String,
    css: {type: Boolean, default: !0},
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Qo.props = le({}, Ao, Zo);
const rt = (e, t = []) => {
    U(e) ? e.forEach(n => n(...t)) : e && e(...t)
}, xs = e => e ? U(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Ac(e) {
    const t = {};
    for (const P in e) P in Zo || (t[P] = e[P]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: s,
        enterFromClass: o = `${n}-enter-from`,
        enterActiveClass: i = `${n}-enter-active`,
        enterToClass: l = `${n}-enter-to`,
        appearFromClass: c = o,
        appearActiveClass: a = i,
        appearToClass: f = l,
        leaveFromClass: h = `${n}-leave-from`,
        leaveActiveClass: p = `${n}-leave-active`,
        leaveToClass: y = `${n}-leave-to`
    } = e, w = Sc(s), S = w && w[0], N = w && w[1], {
        onBeforeEnter: k,
        onEnter: B,
        onEnterCancelled: g,
        onLeave: _,
        onLeaveCancelled: I,
        onBeforeAppear: M = k,
        onAppear: $ = B,
        onAppearCancelled: R = g
    } = t, T = (P, G, oe) => {
        st(P, G ? f : l), st(P, G ? a : i), oe && oe()
    }, A = (P, G) => {
        P._isLeaving = !1, st(P, h), st(P, y), st(P, p), G && G()
    }, K = P => (G, oe) => {
        const ue = P ? $ : B, V = () => T(G, P, oe);
        rt(ue, [G, V]), Es(() => {
            st(G, P ? c : o), Ke(G, P ? f : l), xs(ue) || Ts(G, r, S, V)
        })
    };
    return le(t, {
        onBeforeEnter(P) {
            rt(k, [P]), Ke(P, o), Ke(P, i)
        }, onBeforeAppear(P) {
            rt(M, [P]), Ke(P, c), Ke(P, a)
        }, onEnter: K(!1), onAppear: K(!0), onLeave(P, G) {
            P._isLeaving = !0;
            const oe = () => A(P, G);
            Ke(P, h), Mc(), Ke(P, p), Es(() => {
                P._isLeaving && (st(P, h), Ke(P, y), xs(_) || Ts(P, r, N, oe))
            }), rt(_, [P, oe])
        }, onEnterCancelled(P) {
            T(P, !1), rt(g, [P])
        }, onAppearCancelled(P) {
            T(P, !0), rt(R, [P])
        }, onLeaveCancelled(P) {
            A(P), rt(I, [P])
        }
    })
}

function Sc(e) {
    if (e == null) return null;
    if (Z(e)) return [Jn(e.enter), Jn(e.leave)];
    {
        const t = Jn(e);
        return [t, t]
    }
}

function Jn(e) {
    return Ai(e)
}

function Ke(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Kt] || (e[Kt] = new Set)).add(t)
}

function st(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Kt];
    n && (n.delete(t), n.size || (e[Kt] = void 0))
}

function Es(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}

let Rc = 0;

function Ts(e, t, n, r) {
    const s = e._endId = ++Rc, o = () => {
        s === e._endId && r()
    };
    if (n) return setTimeout(o, n);
    const {type: i, timeout: l, propCount: c} = Lc(e, t);
    if (!i) return r();
    const a = i + "end";
    let f = 0;
    const h = () => {
        e.removeEventListener(a, p), o()
    }, p = y => {
        y.target === e && ++f >= c && h()
    };
    setTimeout(() => {
        f < c && h()
    }, l + 1), e.addEventListener(a, p)
}

function Lc(e, t) {
    const n = window.getComputedStyle(e), r = w => (n[w] || "").split(", "), s = r(`${ke}Delay`),
        o = r(`${ke}Duration`), i = As(s, o), l = r(`${Ot}Delay`), c = r(`${Ot}Duration`), a = As(l, c);
    let f = null, h = 0, p = 0;
    t === ke ? i > 0 && (f = ke, h = i, p = o.length) : t === Ot ? a > 0 && (f = Ot, h = a, p = c.length) : (h = Math.max(i, a), f = h > 0 ? i > a ? ke : Ot : null, p = f ? f === ke ? o.length : c.length : 0);
    const y = f === ke && /\b(transform|all)(,|$)/.test(r(`${ke}Property`).toString());
    return {type: f, timeout: h, propCount: p, hasTransform: y}
}

function As(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => Ss(n) + Ss(e[r])))
}

function Ss(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Mc() {
    return document.body.offsetHeight
}

function Oc(e, t, n) {
    const r = e[Kt];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

const Pc = Symbol("_vod"), Ic = Symbol("");

function Fc(e, t, n) {
    const r = e.style, s = ne(n);
    if (n && !s) {
        if (t && !ne(t)) for (const o in t) n[o] == null && yr(r, o, "");
        for (const o in n) yr(r, o, n[o])
    } else {
        const o = r.display;
        if (s) {
            if (t !== n) {
                const i = r[Ic];
                i && (n += ";" + i), r.cssText = n
            }
        } else t && e.removeAttribute("style");
        Pc in e && (r.display = o)
    }
}

const Rs = /\s*!important$/;

function yr(e, t, n) {
    if (U(n)) n.forEach(r => yr(e, t, r)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const r = Nc(e, t);
        Rs.test(n) ? e.setProperty(dt(r), n.replace(Rs, ""), "important") : e[r] = n
    }
}

const Ls = ["Webkit", "Moz", "ms"], Xn = {};

function Nc(e, t) {
    const n = Xn[t];
    if (n) return n;
    let r = Ne(t);
    if (r !== "filter" && r in e) return Xn[t] = r;
    r = Rn(r);
    for (let s = 0; s < Ls.length; s++) {
        const o = Ls[s] + r;
        if (o in e) return Xn[t] = o
    }
    return t
}

const Ms = "http://www.w3.org/1999/xlink";

function $c(e, t, n, r, s) {
    if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Ms, t.slice(6, t.length)) : e.setAttributeNS(Ms, t, n); else {
        const o = Pi(t);
        n == null || o && !Qs(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}

function Hc(e, t, n, r, s, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        r && i(r, s, o), e[t] = n ?? "";
        return
    }
    const l = e.tagName;
    if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
        e._value = n;
        const a = l === "OPTION" ? e.getAttribute("value") : e.value, f = n ?? "";
        a !== f && (e.value = f), n == null && e.removeAttribute(t);
        return
    }
    let c = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = Qs(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    c && e.removeAttribute(t)
}

function yt(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function jc(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

const Os = Symbol("_vei");

function Vc(e, t, n, r, s = null) {
    const o = e[Os] || (e[Os] = {}), i = o[t];
    if (r && i) i.value = r; else {
        const [l, c] = Dc(t);
        if (r) {
            const a = o[t] = kc(r, s);
            yt(e, l, a, c)
        } else i && (jc(e, l, i, c), o[t] = void 0)
    }
}

const Ps = /(?:Once|Passive|Capture)$/;

function Dc(e) {
    let t;
    if (Ps.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Ps);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : dt(e.slice(2)), t]
}

let Qn = 0;
const Bc = Promise.resolve(), Uc = () => Qn || (Bc.then(() => Qn = 0), Qn = Date.now());

function kc(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now(); else if (r._vts <= n.attached) return;
        Te(Kc(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = Uc(), n
}

function Kc(e, t) {
    if (U(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}

const Is = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Wc = (e, t, n, r, s, o, i, l, c) => {
        const a = s === "svg";
        t === "class" ? Oc(e, r, a) : t === "style" ? Fc(e, n, r) : Wt(t) ? wr(t) || Vc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, r, a)) ? Hc(e, t, r, o, i, l, c) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $c(e, t, r, a))
    };

function qc(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Is(t) && q(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
    }
    return Is(t) && ne(n) ? !1 : t in e
}

const Fs = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return U(t) ? n => hn(t, n) : t
};

function Gc(e) {
    e.target.composing = !0
}

function Ns(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}

const Zn = Symbol("_assign"), lu = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, s) {
        e[Zn] = Fs(s);
        const o = r || s.props && s.props.type === "number";
        yt(e, t ? "change" : "input", i => {
            if (i.target.composing) return;
            let l = e.value;
            n && (l = l.trim()), o && (l = rr(l)), e[Zn](l)
        }), n && yt(e, "change", () => {
            e.value = e.value.trim()
        }), t || (yt(e, "compositionstart", Gc), yt(e, "compositionend", Ns), yt(e, "change", Ns))
    }, mounted(e, {value: t}) {
        e.value = t ?? ""
    }, beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: s}}, o) {
        if (e[Zn] = Fs(o), e.composing) return;
        const i = s || e.type === "number" ? rr(e.value) : e.value, l = t ?? "";
        i !== l && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === l) || (e.value = l))
    }
}, zc = ["ctrl", "shift", "alt", "meta"], Yc = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => zc.some(n => e[`${n}Key`] && !t.includes(n))
}, cu = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (s, ...o) => {
        for (let i = 0; i < t.length; i++) {
            const l = Yc[t[i]];
            if (l && l(s, t)) return
        }
        return e(s, ...o)
    })
}, Jc = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}, au = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = s => {
        if (!("key" in s)) return;
        const o = dt(s.key);
        if (t.some(i => i === o || Jc[i] === o)) return e(s)
    })
}, ei = le({patchProp: Wc}, Tc);
let Vt, $s = !1;

function Xc() {
    return Vt || (Vt = sc(ei))
}

function Qc() {
    return Vt = $s ? Vt : oc(ei), $s = !0, Vt
}

const uu = (...e) => {
    const t = Xc().createApp(...e), {mount: n} = t;
    return t.mount = r => {
        const s = ni(r);
        if (!s) return;
        const o = t._component;
        !q(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
        const i = n(s, !1, ti(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
    }, t
}, fu = (...e) => {
    const t = Qc().createApp(...e), {mount: n} = t;
    return t.mount = r => {
        const s = ni(r);
        if (s) return n(s, !0, ti(s))
    }, t
};

function ti(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function ni(e) {
    return ne(e) ? document.querySelector(e) : e
}

const du = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n
}, Zc = "modulepreload", ea = function (e) {
    return "/" + e
}, Hs = {}, hu = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link");
        s = Promise.all(n.map(i => {
            if (i = ea(i), i in Hs) return;
            Hs[i] = !0;
            const l = i.endsWith(".css"), c = l ? '[rel="stylesheet"]' : "";
            if (!!r) for (let h = o.length - 1; h >= 0; h--) {
                const p = o[h];
                if (p.href === i && (!l || p.rel === "stylesheet")) return
            } else if (document.querySelector(`link[href="${i}"]${c}`)) return;
            const f = document.createElement("link");
            if (f.rel = l ? "stylesheet" : Zc, l || (f.as = "script", f.crossOrigin = ""), f.href = i, document.head.appendChild(f), l) return new Promise((h, p) => {
                f.addEventListener("load", h), f.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${i}`)))
            })
        }))
    }
    return s.then(() => t()).catch(o => {
        const i = new Event("vite:preloadError", {cancelable: !0});
        if (i.payload = o, window.dispatchEvent(i), !i.defaultPrevented) throw o
    })
}, ta = window.__VP_SITE_DATA__;

function Kr(e) {
    return eo() ? (Ni(e), !0) : !1
}

function Fe(e) {
    return typeof e == "function" ? e() : mo(e)
}

const ri = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const na = Object.prototype.toString, ra = e => na.call(e) === "[object Object]", Xe = () => {
}, _r = sa();

function sa() {
    var e, t;
    return ri && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}

function oa(e, t) {
    function n(...r) {
        return new Promise((s, o) => {
            Promise.resolve(e(() => t.apply(this, r), {fn: t, thisArg: this, args: r})).then(s).catch(o)
        })
    }

    return n
}

const si = e => e();

function ia(e, t = {}) {
    let n, r, s = Xe;
    const o = l => {
        clearTimeout(l), s(), s = Xe
    };
    return l => {
        const c = Fe(e), a = Fe(t.maxWait);
        return n && o(n), c <= 0 || a !== void 0 && a <= 0 ? (r && (o(r), r = null), Promise.resolve(l())) : new Promise((f, h) => {
            s = t.rejectOnCancel ? h : f, a && !r && (r = setTimeout(() => {
                n && o(n), r = null, f(l())
            }, a)), n = setTimeout(() => {
                r && o(r), r = null, f(l())
            }, c)
        })
    }
}

function la(e = si) {
    const t = ie(!0);

    function n() {
        t.value = !1
    }

    function r() {
        t.value = !0
    }

    const s = (...o) => {
        t.value && e(...o)
    };
    return {isActive: On(t), pause: n, resume: r, eventFilter: s}
}

function ca(e) {
    return e || Dn()
}

function oi(...e) {
    if (e.length !== 1) return ul(...e);
    const t = e[0];
    return typeof t == "function" ? On(ll(() => ({get: t, set: Xe}))) : ie(t)
}

function ii(e, t, n = {}) {
    const {eventFilter: r = si, ...s} = n;
    return Je(e, oa(r, t), s)
}

function aa(e, t, n = {}) {
    const {eventFilter: r, ...s} = n, {eventFilter: o, pause: i, resume: l, isActive: c} = la(r);
    return {stop: ii(e, t, {...s, eventFilter: o}), pause: i, resume: l, isActive: c}
}

function li(e, t = !0, n) {
    ca() ? Lt(e, n) : t ? e() : Pn(e)
}

function pu(e, t, n = {}) {
    const {debounce: r = 0, maxWait: s = void 0, ...o} = n;
    return ii(e, t, {...o, eventFilter: ia(r, {maxWait: s})})
}

function gu(e, t, n) {
    let r;
    de(n) ? r = {evaluating: n} : r = n || {};
    const {lazy: s = !1, evaluating: o = void 0, shallow: i = !0, onError: l = Xe} = r, c = ie(!s),
        a = i ? Fr(t) : ie(t);
    let f = 0;
    return Hr(async h => {
        if (!c.value) return;
        f++;
        const p = f;
        let y = !1;
        o && Promise.resolve().then(() => {
            o.value = !0
        });
        try {
            const w = await e(S => {
                h(() => {
                    o && (o.value = !1), y || S()
                })
            });
            p === f && (a.value = w)
        } catch (w) {
            l(w)
        } finally {
            o && p === f && (o.value = !1), y = !0
        }
    }), s ? re(() => (c.value = !0, a.value)) : a
}

function _t(e) {
    var t;
    const n = Fe(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}

const Le = ri ? window : void 0;

function Qe(...e) {
    let t, n, r, s;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, s] = e, t = Le) : [t, n, r, s] = e, !t) return Xe;
    Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
    const o = [], i = () => {
            o.forEach(f => f()), o.length = 0
        }, l = (f, h, p, y) => (f.addEventListener(h, p, y), () => f.removeEventListener(h, p, y)),
        c = Je(() => [_t(t), Fe(s)], ([f, h]) => {
            if (i(), !f) return;
            const p = ra(h) ? {...h} : h;
            o.push(...n.flatMap(y => r.map(w => l(f, y, w, p))))
        }, {immediate: !0, flush: "post"}), a = () => {
            c(), i()
        };
    return Kr(a), a
}

let js = !1;

function mu(e, t, n = {}) {
    const {window: r = Le, ignore: s = [], capture: o = !0, detectIframe: i = !1} = n;
    if (!r) return Xe;
    _r && !js && (js = !0, Array.from(r.document.body.children).forEach(p => p.addEventListener("click", Xe)), r.document.documentElement.addEventListener("click", Xe));
    let l = !0;
    const c = p => s.some(y => {
        if (typeof y == "string") return Array.from(r.document.querySelectorAll(y)).some(w => w === p.target || p.composedPath().includes(w));
        {
            const w = _t(y);
            return w && (p.target === w || p.composedPath().includes(w))
        }
    }), f = [Qe(r, "click", p => {
        const y = _t(e);
        if (!(!y || y === p.target || p.composedPath().includes(y))) {
            if (p.detail === 0 && (l = !c(p)), !l) {
                l = !0;
                return
            }
            t(p)
        }
    }, {passive: !0, capture: o}), Qe(r, "pointerdown", p => {
        const y = _t(e);
        l = !c(p) && !!(y && !p.composedPath().includes(y))
    }, {passive: !0}), i && Qe(r, "blur", p => {
        setTimeout(() => {
            var y;
            const w = _t(e);
            ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(w != null && w.contains(r.document.activeElement)) && t(p)
        }, 0)
    })].filter(Boolean);
    return () => f.forEach(p => p())
}

function ua(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}

function yu(...e) {
    let t, n, r = {};
    e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
    const {target: s = Le, eventName: o = "keydown", passive: i = !1, dedupe: l = !1} = r, c = ua(t);
    return Qe(s, o, f => {
        f.repeat && Fe(l) || c(f) && n(f)
    }, i)
}

function fa() {
    const e = ie(!1);
    return Dn() && Lt(() => {
        e.value = !0
    }), e
}

function da(e) {
    const t = fa();
    return re(() => (t.value, !!e()))
}

function ha(e, t = {}) {
    const {window: n = Le} = t, r = da(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
    let s;
    const o = ie(!1), i = a => {
        o.value = a.matches
    }, l = () => {
        s && ("removeEventListener" in s ? s.removeEventListener("change", i) : s.removeListener(i))
    }, c = Hr(() => {
        r.value && (l(), s = n.matchMedia(Fe(e)), "addEventListener" in s ? s.addEventListener("change", i) : s.addListener(i), o.value = s.matches)
    });
    return Kr(() => {
        c(), l(), s = void 0
    }), o
}

const cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    an = "__vueuse_ssr_handlers__", pa = ga();

function ga() {
    return an in cn || (cn[an] = cn[an] || {}), cn[an]
}

function ci(e, t) {
    return pa[e] || t
}

function ma(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}

const ya = {
    boolean: {read: e => e === "true", write: e => String(e)},
    object: {read: e => JSON.parse(e), write: e => JSON.stringify(e)},
    number: {read: e => Number.parseFloat(e), write: e => String(e)},
    any: {read: e => e, write: e => String(e)},
    string: {read: e => e, write: e => String(e)},
    map: {read: e => new Map(JSON.parse(e)), write: e => JSON.stringify(Array.from(e.entries()))},
    set: {read: e => new Set(JSON.parse(e)), write: e => JSON.stringify(Array.from(e))},
    date: {read: e => new Date(e), write: e => e.toISOString()}
}, Vs = "vueuse-storage";

function Wr(e, t, n, r = {}) {
    var s;
    const {
        flush: o = "pre",
        deep: i = !0,
        listenToStorageChanges: l = !0,
        writeDefaults: c = !0,
        mergeDefaults: a = !1,
        shallow: f,
        window: h = Le,
        eventFilter: p,
        onError: y = T => {
            console.error(T)
        },
        initOnMounted: w
    } = r, S = (f ? Fr : ie)(typeof t == "function" ? t() : t);
    if (!n) try {
        n = ci("getDefaultStorage", () => {
            var T;
            return (T = Le) == null ? void 0 : T.localStorage
        })()
    } catch (T) {
        y(T)
    }
    if (!n) return S;
    const N = Fe(t), k = ma(N), B = (s = r.serializer) != null ? s : ya[k], {
        pause: g,
        resume: _
    } = aa(S, () => I(S.value), {flush: o, deep: i, eventFilter: p});
    return h && l && li(() => {
        Qe(h, "storage", R), Qe(h, Vs, $), w && R()
    }), w || R(), S;

    function I(T) {
        try {
            if (T == null) n.removeItem(e); else {
                const A = B.write(T), K = n.getItem(e);
                K !== A && (n.setItem(e, A), h && h.dispatchEvent(new CustomEvent(Vs, {
                    detail: {
                        key: e,
                        oldValue: K,
                        newValue: A,
                        storageArea: n
                    }
                })))
            }
        } catch (A) {
            y(A)
        }
    }

    function M(T) {
        const A = T ? T.newValue : n.getItem(e);
        if (A == null) return c && N != null && n.setItem(e, B.write(N)), N;
        if (!T && a) {
            const K = B.read(A);
            return typeof a == "function" ? a(K, N) : k === "object" && !Array.isArray(K) ? {...N, ...K} : K
        } else return typeof A != "string" ? A : B.read(A)
    }

    function $(T) {
        R(T.detail)
    }

    function R(T) {
        if (!(T && T.storageArea !== n)) {
            if (T && T.key == null) {
                S.value = N;
                return
            }
            if (!(T && T.key !== e)) {
                g();
                try {
                    (T == null ? void 0 : T.newValue) !== B.write(S.value) && (S.value = M(T))
                } catch (A) {
                    y(A)
                } finally {
                    T ? Pn(_) : _()
                }
            }
        }
    }
}

function ai(e) {
    return ha("(prefers-color-scheme: dark)", e)
}

function _a(e = {}) {
    const {
            selector: t = "html",
            attribute: n = "class",
            initialValue: r = "auto",
            window: s = Le,
            storage: o,
            storageKey: i = "vueuse-color-scheme",
            listenToStorageChanges: l = !0,
            storageRef: c,
            emitAuto: a,
            disableTransition: f = !0
        } = e, h = {auto: "", light: "light", dark: "dark", ...e.modes || {}}, p = ai({window: s}),
        y = re(() => p.value ? "dark" : "light"),
        w = c || (i == null ? oi(r) : Wr(i, r, o, {window: s, listenToStorageChanges: l})),
        S = re(() => w.value === "auto" ? y.value : w.value), N = ci("updateHTMLAttrs", (_, I, M) => {
            const $ = typeof _ == "string" ? s == null ? void 0 : s.document.querySelector(_) : _t(_);
            if (!$) return;
            let R;
            if (f && (R = s.document.createElement("style"), R.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), s.document.head.appendChild(R)), I === "class") {
                const T = M.split(/\s/g);
                Object.values(h).flatMap(A => (A || "").split(/\s/g)).filter(Boolean).forEach(A => {
                    T.includes(A) ? $.classList.add(A) : $.classList.remove(A)
                })
            } else $.setAttribute(I, M);
            f && (s.getComputedStyle(R).opacity, document.head.removeChild(R))
        });

    function k(_) {
        var I;
        N(t, n, (I = h[_]) != null ? I : _)
    }

    function B(_) {
        e.onChanged ? e.onChanged(_, k) : k(_)
    }

    Je(S, B, {flush: "post", immediate: !0}), li(() => B(S.value));
    const g = re({
        get() {
            return a ? w.value : S.value
        }, set(_) {
            w.value = _
        }
    });
    try {
        return Object.assign(g, {store: w, system: y, state: S})
    } catch {
        return g
    }
}

function ba(e = {}) {
    const {valueDark: t = "dark", valueLight: n = "", window: r = Le} = e, s = _a({
        ...e, onChanged: (l, c) => {
            var a;
            e.onChanged ? (a = e.onChanged) == null || a.call(e, l === "dark", c, l) : c(l)
        }, modes: {dark: t, light: n}
    }), o = re(() => s.system ? s.system.value : ai({window: r}).value ? "dark" : "light");
    return re({
        get() {
            return s.value === "dark"
        }, set(l) {
            const c = l ? "dark" : "light";
            o.value === c ? s.value = "auto" : s.value = c
        }
    })
}

function er(e) {
    return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e
}

function _u(e, t, n = {}) {
    const {window: r = Le} = n;
    return Wr(e, t, r == null ? void 0 : r.localStorage, n)
}

function ui(e) {
    const t = window.getComputedStyle(e);
    if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
    {
        const n = e.parentNode;
        return !n || n.tagName === "BODY" ? !1 : ui(n)
    }
}

function va(e) {
    const t = e || window.event, n = t.target;
    return ui(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1)
}

const un = new WeakMap;

function bu(e, t = !1) {
    const n = ie(t);
    let r = null, s;
    Je(oi(e), l => {
        const c = er(Fe(l));
        if (c) {
            const a = c;
            un.get(a) || un.set(a, s), n.value && (a.style.overflow = "hidden")
        }
    }, {immediate: !0});
    const o = () => {
        const l = er(Fe(e));
        !l || n.value || (_r && (r = Qe(l, "touchmove", c => {
            va(c)
        }, {passive: !1})), l.style.overflow = "hidden", n.value = !0)
    }, i = () => {
        var l;
        const c = er(Fe(e));
        !c || !n.value || (_r && (r == null || r()), c.style.overflow = (l = un.get(c)) != null ? l : "", un.delete(c), n.value = !1)
    };
    return Kr(i), re({
        get() {
            return n.value
        }, set(l) {
            l ? o() : i()
        }
    })
}

function vu(e, t, n = {}) {
    const {window: r = Le} = n;
    return Wr(e, t, r == null ? void 0 : r.sessionStorage, n)
}

function wu(e = {}) {
    const {window: t = Le, behavior: n = "auto"} = e;
    if (!t) return {x: ie(0), y: ie(0)};
    const r = ie(t.scrollX), s = ie(t.scrollY), o = re({
        get() {
            return r.value
        }, set(l) {
            scrollTo({left: l, behavior: n})
        }
    }), i = re({
        get() {
            return s.value
        }, set(l) {
            scrollTo({top: l, behavior: n})
        }
    });
    return Qe(t, "scroll", () => {
        r.value = t.scrollX, s.value = t.scrollY
    }, {capture: !1, passive: !0}), {x: o, y: i}
}

const fi = /^(?:[a-z]+:|\/\/)/i, wa = "vitepress-theme-appearance", di = /#.*$/, Ca = /(index)?\.(md|html)$/,
    xe = typeof document < "u", hi = {
        relativePath: "",
        filePath: "",
        title: "404",
        description: "Not Found",
        headers: [],
        frontmatter: {sidebar: !1, layout: "page"},
        lastUpdated: 0,
        isNotFound: !0
    };

function xa(e, t, n = !1) {
    if (t === void 0) return !1;
    if (e = Ds(`/${e}`), n) return new RegExp(t).test(e);
    if (Ds(t) !== e) return !1;
    const r = t.match(di);
    return r ? (xe ? location.hash : "") === r[0] : !0
}

function Ds(e) {
    return decodeURI(e).replace(di, "").replace(Ca, "")
}

function Ea(e) {
    return fi.test(e)
}

function Ta(e, t) {
    var r, s, o, i, l, c, a;
    const n = Object.keys(e.locales).find(f => f !== "root" && !Ea(f) && xa(t, `/${f}/`, !0)) || "root";
    return Object.assign({}, e, {
        localeIndex: n,
        lang: ((r = e.locales[n]) == null ? void 0 : r.lang) ?? e.lang,
        dir: ((s = e.locales[n]) == null ? void 0 : s.dir) ?? e.dir,
        title: ((o = e.locales[n]) == null ? void 0 : o.title) ?? e.title,
        titleTemplate: ((i = e.locales[n]) == null ? void 0 : i.titleTemplate) ?? e.titleTemplate,
        description: ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
        head: gi(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
        themeConfig: {...e.themeConfig, ...(a = e.locales[n]) == null ? void 0 : a.themeConfig}
    })
}

function pi(e, t) {
    const n = t.title || e.title, r = t.titleTemplate ?? e.titleTemplate;
    if (typeof r == "string" && r.includes(":title")) return r.replace(/:title/g, n);
    const s = Aa(e.title, r);
    return n === s.slice(3) ? n : `${n}${s}`
}

function Aa(e, t) {
    return t === !1 ? "" : t === !0 || t === void 0 ? ` | ${e}` : e === t ? "" : ` | ${t}`
}

function Sa(e, t) {
    const [n, r] = t;
    if (n !== "meta") return !1;
    const s = Object.entries(r)[0];
    return s == null ? !1 : e.some(([o, i]) => o === n && i[s[0]] === s[1])
}

function gi(e, t) {
    return [...e.filter(n => !Sa(t, n)), ...t]
}

const Ra = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g, La = /^[a-z]:/i;

function Bs(e) {
    const t = La.exec(e), n = t ? t[0] : "";
    return n + e.slice(n.length).replace(Ra, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1")
}

const Ma = new Set("3g2,3gp,7z,aac,abw,ai,aif,aifc,aiff,arc,asf,asr,asx,au,avi,avif,axs,azw,bin,bmp,bz,bz2,c,cda,cer,class,crl,crt,csh,css,csv,dcr,der,dll,doc,docx,eot,eps,epub,exe,gif,gtar,gz,gzip,ico,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,latex,m3u,man,mdb,mht,mhtml,mid,midi,mjs,mov,mp2,mp3,mp4,mpa,mpe,mpeg,mpg,mpkg,mpp,odp,ods,odt,oga,ogv,ogx,opus,otf,p10,p12,p7b,p7c,p7m,p7r,p7s,pbm,pdf,pfx,php,png,ppt,pptx,ps,pub,qt,rar,roff,rtf,rtx,ser,sh,spc,svg,swf,t,tar,tcl,tex,texi,texinfo,tgz,tif,tiff,tr,ts,tsv,ttf,txt,ua,viv,vivo,vsd,wav,weba,webm,webp,woff,woff2,xbm,xhtml,xls,xlsx,xml,xul,zip".split(","));

function Oa(e) {
    const t = e.split(".").pop();
    return t == null || !Ma.has(t.toLowerCase())
}

function Cu(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
}

const Pa = Symbol(), ft = Fr(ta);

function xu(e) {
    const t = re(() => Ta(ft.value, e.data.relativePath)), n = t.value.appearance,
        r = n === "force-dark" ? ie(!0) : n ? ba({
            storageKey: wa,
            initialValue: () => typeof n == "string" ? n : "auto", ...typeof n == "object" ? n : {}
        }) : ie(!1);
    return {
        site: t,
        theme: re(() => t.value.themeConfig),
        page: re(() => e.data),
        frontmatter: re(() => e.data.frontmatter),
        params: re(() => e.data.params),
        lang: re(() => t.value.lang),
        dir: re(() => e.data.frontmatter.dir || t.value.dir),
        localeIndex: re(() => t.value.localeIndex || "root"),
        title: re(() => pi(t.value, e.data)),
        description: re(() => e.data.description || t.value.description),
        isDark: r
    }
}

function Ia() {
    const e = Et(Pa);
    if (!e) throw new Error("vitepress data not properly injected in app");
    return e
}

function Fa(e, t) {
    return `${e}${t}`.replace(/\/+/g, "/")
}

function Us(e) {
    return fi.test(e) || !e.startsWith("/") ? e : Fa(ft.value.base, e)
}

function Na(e) {
    let t = e.replace(/\.html$/, "");
    if (t = decodeURIComponent(t), t = t.replace(/\/$/, "/index"), xe) {
        const n = "/";
        t = Bs(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
        let r = __VP_HASH_MAP__[t.toLowerCase()];
        if (r || (t = t.endsWith("_index.md") ? t.slice(0, -9) + ".md" : t.slice(0, -3) + "_index.md", r = __VP_HASH_MAP__[t.toLowerCase()]), !r) return null;
        t = `${n}static/${t}.${r}.js`
    } else t = `./${Bs(t.slice(1).replace(/\//g, "_"))}.md.js`;
    return t
}

let gn = [];

function Eu(e) {
    gn.push(e), jn(() => {
        gn = gn.filter(t => t !== e)
    })
}

const $a = Symbol(), mi = "http://a.com", Ha = () => ({path: "/", component: null, data: hi});

function Tu(e, t) {
    const n = Mn(Ha()), r = {route: n, go: s};

    async function s(l = xe ? location.href : "/") {
        var c, a;
        l = br(l), await ((c = r.onBeforeRouteChange) == null ? void 0 : c.call(r, l)) !== !1 && (Ws(l), await i(l), await ((a = r.onAfterRouteChanged) == null ? void 0 : a.call(r, l)))
    }

    let o = null;

    async function i(l, c = 0, a = !1) {
        var p;
        if (await ((p = r.onBeforePageLoad) == null ? void 0 : p.call(r, l)) === !1) return;
        const f = new URL(l, mi), h = o = f.pathname;
        try {
            let y = await e(h);
            if (!y) throw new Error(`Page not found: ${h}`);
            if (o === h) {
                o = null;
                const {default: w, __pageData: S} = y;
                if (!w) throw new Error(`Invalid route component: ${w}`);
                n.path = xe ? h : Us(h), n.component = Ft(w), n.data = Ft(S), xe && Pn(() => {
                    let N = ft.value.base + S.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
                    if (!ft.value.cleanUrls && !N.endsWith("/") && (N += ".html"), N !== f.pathname && (f.pathname = N, l = N + f.search + f.hash, history.replaceState(null, "", l)), f.hash && !c) {
                        let k = null;
                        try {
                            k = document.getElementById(decodeURIComponent(f.hash).slice(1))
                        } catch (B) {
                            console.warn(B)
                        }
                        if (k) {
                            ks(k, f.hash);
                            return
                        }
                    }
                    window.scrollTo(0, c)
                })
            }
        } catch (y) {
            if (!/fetch|Page not found/.test(y.message) && !/^\/404(\.html|\/)?$/.test(l) && console.error(y), !a) try {
                const w = await fetch(ft.value.base + "hashmap.json");
                window.__VP_HASH_MAP__ = await w.json(), await i(l, c, !0);
                return
            } catch {
            }
            o === h && (o = null, n.path = xe ? h : Us(h), n.component = t ? Ft(t) : null, n.data = hi)
        }
    }

    return xe && (window.addEventListener("click", l => {
        if (l.target.closest("button")) return;
        const a = l.target.closest("a");
        if (a && !a.closest(".vp-raw") && (a instanceof SVGElement || !a.download)) {
            const {target: f} = a, {
                href: h,
                origin: p,
                pathname: y,
                hash: w,
                search: S
            } = new URL(a.href instanceof SVGAnimatedString ? a.href.animVal : a.href, a.baseURI), N = window.location;
            !l.ctrlKey && !l.shiftKey && !l.altKey && !l.metaKey && !f && p === N.origin && Oa(y) && (l.preventDefault(), y === N.pathname && S === N.search ? (w !== N.hash && (history.pushState(null, "", w), window.dispatchEvent(new Event("hashchange"))), w ? ks(a, w, a.classList.contains("header-anchor")) : (Ws(h), window.scrollTo(0, 0))) : s(h))
        }
    }, {capture: !0}), window.addEventListener("popstate", async l => {
        var c;
        await i(br(location.href), l.state && l.state.scrollPosition || 0), (c = r.onAfterRouteChanged) == null || c.call(r, location.href)
    }), window.addEventListener("hashchange", l => {
        l.preventDefault()
    })), r
}

function ja() {
    const e = Et($a);
    if (!e) throw new Error("useRouter() is called without provider.");
    return e
}

function yi() {
    return ja().route
}

function ks(e, t, n = !1) {
    let r = null;
    try {
        r = e.classList.contains("header-anchor") ? e : document.getElementById(decodeURIComponent(t).slice(1))
    } catch (s) {
        console.warn(s)
    }
    if (r) {
        let s = function () {
            !n || Math.abs(a - window.scrollY) > window.innerHeight ? window.scrollTo(0, a) : window.scrollTo({
                left: 0,
                top: a,
                behavior: "smooth"
            })
        }, o = ft.value.scrollOffset, i = 0, l = 24;
        if (typeof o == "object" && "padding" in o && (l = o.padding, o = o.selector), typeof o == "number") i = o; else if (typeof o == "string") i = Ks(o, l); else if (Array.isArray(o)) for (const f of o) {
            const h = Ks(f, l);
            if (h) {
                i = h;
                break
            }
        }
        const c = parseInt(window.getComputedStyle(r).paddingTop, 10),
            a = window.scrollY + r.getBoundingClientRect().top - i + c;
        requestAnimationFrame(s)
    }
}

function Ks(e, t) {
    const n = document.querySelector(e);
    if (!n) return 0;
    const r = n.getBoundingClientRect().bottom;
    return r < 0 ? 0 : r + t
}

function Ws(e) {
    xe && e !== br(location.href) && (history.replaceState({scrollPosition: window.scrollY}, document.title), history.pushState(null, "", e))
}

function br(e) {
    const t = new URL(e, mi);
    return t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, "$1"), ft.value.cleanUrls ? t.pathname = t.pathname.replace(/\.html$/, "") : !t.pathname.endsWith("/") && !t.pathname.endsWith(".html") && (t.pathname += ".html"), t.pathname + t.search + t.hash
}

const tr = () => gn.forEach(e => e()), Au = jr({
    name: "VitePressContent", props: {as: {type: [Object, String], default: "div"}}, setup(e) {
        const t = yi(), {site: n} = Ia();
        return () => mr(e.as, n.value.contentProps ?? {style: {position: "relative"}}, [t.component ? mr(t.component, {
            onVnodeMounted: tr,
            onVnodeUpdated: tr,
            onVnodeUnmounted: tr
        }) : "404 Page Not Found"])
    }
}), Su = jr({
    setup(e, {slots: t}) {
        const n = ie(!1);
        return Lt(() => {
            n.value = !0
        }), () => n.value && t.default ? t.default() : null
    }
});

function Ru() {
    xe && window.addEventListener("click", e => {
        var n;
        const t = e.target;
        if (t.matches(".vp-code-group input")) {
            const r = (n = t.parentElement) == null ? void 0 : n.parentElement;
            if (!r) return;
            const s = Array.from(r.querySelectorAll("input")).indexOf(t);
            if (s < 0) return;
            const o = r.querySelector(".blocks");
            if (!o) return;
            const i = Array.from(o.children).find(a => a.classList.contains("active"));
            if (!i) return;
            const l = o.children[s];
            if (!l || i === l) return;
            i.classList.remove("active"), l.classList.add("active");
            const c = r == null ? void 0 : r.querySelector(`label[for="${t.id}"]`);
            c == null || c.scrollIntoView({block: "nearest"})
        }
    })
}

function Lu() {
    if (xe) {
        const e = new WeakMap;
        window.addEventListener("click", t => {
            var r;
            const n = t.target;
            if (n.matches('div[class*="language-"] > button.copy')) {
                const s = n.parentElement, o = (r = n.nextElementSibling) == null ? void 0 : r.nextElementSibling;
                if (!s || !o) return;
                const i = /language-(shellscript|shell|bash|sh|zsh)/.test(s.className),
                    l = [".vp-copy-ignore", ".diff.remove"], c = o.cloneNode(!0);
                c.querySelectorAll(l.join(",")).forEach(f => f.remove());
                let a = c.textContent || "";
                i && (a = a.replace(/^ *(\$|>) /gm, "").trim()), Va(a).then(() => {
                    n.classList.add("copied"), clearTimeout(e.get(n));
                    const f = setTimeout(() => {
                        n.classList.remove("copied"), n.blur(), e.delete(n)
                    }, 2e3);
                    e.set(n, f)
                })
            }
        })
    }
}

async function Va(e) {
    try {
        return navigator.clipboard.writeText(e)
    } catch {
        const t = document.createElement("textarea"), n = document.activeElement;
        t.value = e, t.setAttribute("readonly", ""), t.style.contain = "strict", t.style.position = "absolute", t.style.left = "-9999px", t.style.fontSize = "12pt";
        const r = document.getSelection(), s = r ? r.rangeCount > 0 && r.getRangeAt(0) : null;
        document.body.appendChild(t), t.select(), t.selectionStart = 0, t.selectionEnd = e.length, document.execCommand("copy"), document.body.removeChild(t), s && (r.removeAllRanges(), r.addRange(s)), n && n.focus()
    }
}

function Mu(e, t) {
    let n = [], r = !0;
    const s = o => {
        if (r) {
            r = !1;
            return
        }
        const i = o.map(qs);
        n.forEach((l, c) => {
            const a = i.findIndex(f => f == null ? void 0 : f.isEqualNode(l ?? null));
            a !== -1 ? delete i[a] : (l == null || l.remove(), delete n[c])
        }), i.forEach(l => l && document.head.appendChild(l)), n = [...n, ...i].filter(Boolean)
    };
    Hr(() => {
        const o = e.data, i = t.value, l = o && o.description, c = o && o.frontmatter.head || [], a = pi(i, o);
        a !== document.title && (document.title = a);
        const f = l || i.description;
        let h = document.querySelector("meta[name=description]");
        h ? h.getAttribute("content") !== f && h.setAttribute("content", f) : qs(["meta", {
            name: "description",
            content: f
        }]), s(gi(i.head, Ba(c)))
    })
}

function qs([e, t, n]) {
    const r = document.createElement(e);
    for (const s in t) r.setAttribute(s, t[s]);
    return n && (r.innerHTML = n), e === "script" && !t.async && (r.async = !1), r
}

function Da(e) {
    return e[0] === "meta" && e[1] && e[1].name === "description"
}

function Ba(e) {
    return e.filter(t => !Da(t))
}

const nr = new Set, _i = () => document.createElement("link"), Ua = e => {
    const t = _i();
    t.rel = "prefetch", t.href = e, document.head.appendChild(t)
}, ka = e => {
    const t = new XMLHttpRequest;
    t.open("GET", e, t.withCredentials = !0), t.send()
};
let fn;
const Ka = xe && (fn = _i()) && fn.relList && fn.relList.supports && fn.relList.supports("prefetch") ? Ua : ka;

function Ou() {
    if (!xe || !window.IntersectionObserver) return;
    let e;
    if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType))) return;
    const t = window.requestIdleCallback || setTimeout;
    let n = null;
    const r = () => {
        n && n.disconnect(), n = new IntersectionObserver(o => {
            o.forEach(i => {
                if (i.isIntersecting) {
                    const l = i.target;
                    n.unobserve(l);
                    const {pathname: c} = l;
                    if (!nr.has(c)) {
                        nr.add(c);
                        const a = Na(c);
                        a && Ka(a)
                    }
                }
            })
        }), t(() => {
            document.querySelectorAll("#app a").forEach(o => {
                const {
                        hostname: i,
                        pathname: l
                    } = new URL(o.href instanceof SVGAnimatedString ? o.href.animVal : o.href, o.baseURI),
                    c = l.match(/\.\w+$/);
                c && c[0] !== ".html" || o.target !== "_blank" && i === location.hostname && (l !== location.pathname ? n.observe(o) : nr.add(l))
            })
        })
    };
    Lt(r);
    const s = yi();
    Je(() => s.path, r), jn(() => {
        n && n.disconnect()
    })
}

export {
    au as $,
    jn as A,
    Ja as B,
    Nl as C,
    za as D,
    Za as E,
    me as F,
    Fr as G,
    Eu as H,
    se as I,
    Ya as J,
    fi as K,
    yi as L,
    hc as M,
    Et as N,
    mu as O,
    yu as P,
    Er as Q,
    Pn as R,
    wu as S,
    Qo as T,
    ou as U,
    On as V,
    Qa as W,
    hu as X,
    bu as Y,
    Yl as Z,
    du as _,
    zo as a,
    tu as a0,
    cu as a1,
    nu as a2,
    mr as a3,
    Mu as a4,
    $a as a5,
    xu as a6,
    Pa as a7,
    Au as a8,
    Su as a9,
    ft as aa,
    fu as ab,
    Tu as ac,
    Na as ad,
    Ou as ae,
    Lu as af,
    Ru as ag,
    _t as ah,
    Kr as ai,
    gu as aj,
    vu as ak,
    _u as al,
    pu as am,
    ja as an,
    Qe as ao,
    Mo as ap,
    Xa as aq,
    lu as ar,
    de as as,
    ru as at,
    Ft as au,
    uu as av,
    Cu as aw,
    Wo as b,
    su as c,
    jr as d,
    iu as e,
    Oa as f,
    Us as g,
    ie as h,
    Ea as i,
    xe as j,
    re as k,
    Lt as l,
    Go as m,
    Tr as n,
    ko as o,
    mo as p,
    qa as q,
    eu as r,
    Ga as s,
    Wa as t,
    Ia as u,
    xa as v,
    _l as w,
    ha as x,
    Je as y,
    Hr as z
};
