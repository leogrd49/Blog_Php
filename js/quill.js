/*! For license information please see quill.js.LICENSE.txt */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Quill = e())
    : (t.Quill = e());
})(self, function () {
  return (function () {
    var t = {
        3500: function (t, e, n) {
          "use strict";
          n.d(e, {
            E2: function () {
              return f;
            },
            ZP: function () {
              return u;
            },
            i2: function () {
              return c;
            },
            qz: function () {
              return h;
            },
          });
          var r = n(8473),
            i = n(1702),
            s = n.n(i),
            o = n(8474),
            l = n(784),
            a = n(3583);
          class u extends r.BlockBlot {
            cache = {};
            delta() {
              return (
                null == this.cache.delta && (this.cache.delta = h(this)),
                this.cache.delta
              );
            }
            deleteAt(t, e) {
              super.deleteAt(t, e), (this.cache = {});
            }
            formatAt(t, e, n, i) {
              e <= 0 ||
                (this.scroll.query(n, r.Scope.BLOCK)
                  ? t + e === this.length() && this.format(n, i)
                  : super.formatAt(t, Math.min(e, this.length() - t - 1), n, i),
                (this.cache = {}));
            }
            insertAt(t, e, n) {
              if (null != n)
                return super.insertAt(t, e, n), void (this.cache = {});
              if (0 === e.length) return;
              const r = e.split("\n"),
                i = r.shift();
              i.length > 0 &&
                (t < this.length() - 1 || null == this.children.tail
                  ? super.insertAt(Math.min(t, this.length() - 1), i)
                  : this.children.tail.insertAt(this.children.tail.length(), i),
                (this.cache = {}));
              let s = this;
              r.reduce(
                (t, e) => ((s = s.split(t, !0)), s.insertAt(0, e), e.length),
                t + i.length
              );
            }
            insertBefore(t, e) {
              const { head: n } = this.children;
              super.insertBefore(t, e),
                n instanceof o.Z && n.remove(),
                (this.cache = {});
            }
            length() {
              return (
                null == this.cache.length &&
                  (this.cache.length = super.length() + 1),
                this.cache.length
              );
            }
            moveChildren(t, e) {
              super.moveChildren(t, e), (this.cache = {});
            }
            optimize(t) {
              super.optimize(t), (this.cache = {});
            }
            path(t) {
              return super.path(t, !0);
            }
            removeChild(t) {
              super.removeChild(t), (this.cache = {});
            }
            split(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (e && (0 === t || t >= this.length() - 1)) {
                const e = this.clone();
                return 0 === t
                  ? (this.parent.insertBefore(e, this), this)
                  : (this.parent.insertBefore(e, this.next), e);
              }
              const n = super.split(t, e);
              return (this.cache = {}), n;
            }
          }
          (u.blotName = "block"),
            (u.tagName = "P"),
            (u.defaultChild = o.Z),
            (u.allowedChildren = [o.Z, l.Z, r.EmbedBlot, a.Z]);
          class c extends r.EmbedBlot {
            attach() {
              super.attach(),
                (this.attributes = new r.AttributorStore(this.domNode));
            }
            delta() {
              return new (s())().insert(this.value(), {
                ...this.formats(),
                ...this.attributes.values(),
              });
            }
            format(t, e) {
              const n = this.scroll.query(t, r.Scope.BLOCK_ATTRIBUTE);
              null != n && this.attributes.attribute(n, e);
            }
            formatAt(t, e, n, r) {
              this.format(n, r);
            }
            insertAt(t, e, n) {
              if (null != n) return void super.insertAt(t, e, n);
              const r = e.split("\n"),
                i = r.pop(),
                s = r.map((t) => {
                  const e = this.scroll.create(u.blotName);
                  return e.insertAt(0, t), e;
                }),
                o = this.split(t);
              s.forEach((t) => {
                this.parent.insertBefore(t, o);
              }),
                i && this.parent.insertBefore(this.scroll.create("text", i), o);
            }
          }
          function h(t) {
            let e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return t
              .descendants(r.LeafBlot)
              .reduce(
                (t, n) =>
                  0 === n.length() ? t : t.insert(n.value(), f(n, {}, e)),
                new (s())()
              )
              .insert("\n", f(t));
          }
          function f(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
            return null == t
              ? e
              : ("formats" in t &&
                  "function" == typeof t.formats &&
                  ((e = { ...e, ...t.formats() }), n && delete e["code-token"]),
                null == t.parent ||
                "scroll" === t.parent.statics.blotName ||
                t.parent.statics.scope !== t.statics.scope
                  ? e
                  : f(t.parent, e, n));
          }
          c.scope = r.Scope.BLOCK_BLOT;
        },
        8474: function (t, e, n) {
          "use strict";
          var r = n(8473);
          class i extends r.EmbedBlot {
            static value() {}
            optimize() {
              (this.prev || this.next) && this.remove();
            }
            length() {
              return 0;
            }
            value() {
              return "";
            }
          }
          (i.blotName = "break"), (i.tagName = "BR"), (e.Z = i);
        },
        5019: function (t, e, n) {
          "use strict";
          var r = n(8473);
          class i extends r.ContainerBlot {}
          e.Z = i;
        },
        5191: function (t, e, n) {
          "use strict";
          var r = n(8473),
            i = n(3583);
          class s extends r.EmbedBlot {
            static blotName = "cursor";
            static className = "ql-cursor";
            static tagName = "span";
            static CONTENTS = "\ufeff";
            static value() {}
            constructor(t, e, n) {
              super(t, e),
                (this.selection = n),
                (this.textNode = document.createTextNode(s.CONTENTS)),
                this.domNode.appendChild(this.textNode),
                (this.savedLength = 0);
            }
            detach() {
              null != this.parent && this.parent.removeChild(this);
            }
            format(t, e) {
              if (0 !== this.savedLength) return void super.format(t, e);
              let n = this,
                i = 0;
              for (; null != n && n.statics.scope !== r.Scope.BLOCK_BLOT; )
                (i += n.offset(n.parent)), (n = n.parent);
              null != n &&
                ((this.savedLength = s.CONTENTS.length),
                n.optimize(),
                n.formatAt(i, s.CONTENTS.length, t, e),
                (this.savedLength = 0));
            }
            index(t, e) {
              return t === this.textNode ? 0 : super.index(t, e);
            }
            length() {
              return this.savedLength;
            }
            position() {
              return [this.textNode, this.textNode.data.length];
            }
            remove() {
              super.remove(), (this.parent = null);
            }
            restore() {
              if (this.selection.composing || null == this.parent) return null;
              const t = this.selection.getNativeRange();
              for (
                ;
                null != this.domNode.lastChild &&
                this.domNode.lastChild !== this.textNode;

              )
                this.domNode.parentNode.insertBefore(
                  this.domNode.lastChild,
                  this.domNode
                );
              const e = this.prev instanceof i.Z ? this.prev : null,
                n = e ? e.length() : 0,
                r = this.next instanceof i.Z ? this.next : null,
                o = r ? r.text : "",
                { textNode: l } = this,
                a = l.data.split(s.CONTENTS).join("");
              let u;
              if (((l.data = s.CONTENTS), e))
                (u = e),
                  (a || r) && (e.insertAt(e.length(), a + o), r && r.remove());
              else if (r) (u = r), r.insertAt(0, a);
              else {
                const t = document.createTextNode(a);
                (u = this.scroll.create(t)), this.parent.insertBefore(u, this);
              }
              if ((this.remove(), t)) {
                const i = (t, i) =>
                    e && t === e.domNode
                      ? i
                      : t === l
                      ? n + i - 1
                      : r && t === r.domNode
                      ? n + a.length + i
                      : null,
                  s = i(t.start.node, t.start.offset),
                  o = i(t.end.node, t.end.offset);
                if (null !== s && null !== o)
                  return {
                    startNode: u.domNode,
                    startOffset: s,
                    endNode: u.domNode,
                    endOffset: o,
                  };
              }
              return null;
            }
            update(t, e) {
              if (
                t.some(
                  (t) =>
                    "characterData" === t.type && t.target === this.textNode
                )
              ) {
                const t = this.restore();
                t && (e.range = t);
              }
            }
            optimize(t) {
              super.optimize(t);
              let { parent: e } = this;
              for (; e; ) {
                if ("A" === e.domNode.tagName) {
                  (this.savedLength = s.CONTENTS.length),
                    e.isolate(this.offset(e), this.length()).unwrap(),
                    (this.savedLength = 0);
                  break;
                }
                e = e.parent;
              }
            }
            value() {
              return "";
            }
          }
          e.Z = s;
        },
        8726: function (t, e, n) {
          "use strict";
          var r = n(8473),
            i = n(3583);
          const s = "\ufeff";
          class o extends r.EmbedBlot {
            constructor(t, e) {
              super(t, e),
                (this.contentNode = document.createElement("span")),
                this.contentNode.setAttribute("contenteditable", "false"),
                Array.from(this.domNode.childNodes).forEach((t) => {
                  this.contentNode.appendChild(t);
                }),
                (this.leftGuard = document.createTextNode(s)),
                (this.rightGuard = document.createTextNode(s)),
                this.domNode.appendChild(this.leftGuard),
                this.domNode.appendChild(this.contentNode),
                this.domNode.appendChild(this.rightGuard);
            }
            index(t, e) {
              return t === this.leftGuard
                ? 0
                : t === this.rightGuard
                ? 1
                : super.index(t, e);
            }
            restore(t) {
              let e,
                n = null;
              const r = t.data.split(s).join("");
              if (t === this.leftGuard)
                if (this.prev instanceof i.Z) {
                  const t = this.prev.length();
                  this.prev.insertAt(t, r),
                    (n = {
                      startNode: this.prev.domNode,
                      startOffset: t + r.length,
                    });
                } else
                  (e = document.createTextNode(r)),
                    this.parent.insertBefore(this.scroll.create(e), this),
                    (n = { startNode: e, startOffset: r.length });
              else
                t === this.rightGuard &&
                  (this.next instanceof i.Z
                    ? (this.next.insertAt(0, r),
                      (n = {
                        startNode: this.next.domNode,
                        startOffset: r.length,
                      }))
                    : ((e = document.createTextNode(r)),
                      this.parent.insertBefore(
                        this.scroll.create(e),
                        this.next
                      ),
                      (n = { startNode: e, startOffset: r.length })));
              return (t.data = s), n;
            }
            update(t, e) {
              t.forEach((t) => {
                if (
                  "characterData" === t.type &&
                  (t.target === this.leftGuard || t.target === this.rightGuard)
                ) {
                  const n = this.restore(t.target);
                  n && (e.range = n);
                }
              });
            }
          }
          e.Z = o;
        },
        784: function (t, e, n) {
          "use strict";
          var r = n(8473),
            i = n(8474),
            s = n(3583);
          class o extends r.InlineBlot {
            static allowedChildren = [o, i.Z, r.EmbedBlot, s.Z];
            static order = [
              "cursor",
              "inline",
              "link",
              "underline",
              "strike",
              "italic",
              "bold",
              "script",
              "code",
            ];
            static compare(t, e) {
              const n = o.order.indexOf(t),
                r = o.order.indexOf(e);
              return n >= 0 || r >= 0 ? n - r : t === e ? 0 : t < e ? -1 : 1;
            }
            formatAt(t, e, n, i) {
              if (
                o.compare(this.statics.blotName, n) < 0 &&
                this.scroll.query(n, r.Scope.BLOT)
              ) {
                const r = this.isolate(t, e);
                i && r.wrap(n, i);
              } else super.formatAt(t, e, n, i);
            }
            optimize(t) {
              if (
                (super.optimize(t),
                this.parent instanceof o &&
                  o.compare(
                    this.statics.blotName,
                    this.parent.statics.blotName
                  ) > 0)
              ) {
                const t = this.parent.isolate(this.offset(), this.length());
                this.moveChildren(t), t.wrap(this);
              }
            }
          }
          e.Z = o;
        },
        3583: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return i;
            },
            b: function () {
              return s;
            },
          });
          var r = n(8473);
          class i extends r.TextBlot {}
          function s(t) {
            return t.replace(
              /[&<>"']/g,
              (t) =>
                ({
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                }[t])
            );
          }
        },
        1713: function (t, e, n) {
          "use strict";
          n.d(e, {
            default: function () {
              return C;
            },
          });
          var r = n(250),
            i = n(3500),
            s = n(8474),
            o = n(5019),
            l = n(5191),
            a = n(8726),
            u = n(784),
            c = n(8473),
            h = n(1702),
            f = n.n(h),
            d = n(3147);
          function p(t) {
            return t instanceof i.ZP || t instanceof i.i2;
          }
          function g(t) {
            return "function" == typeof t.updateContent;
          }
          class m extends c.ScrollBlot {
            static blotName = "scroll";
            static className = "ql-editor";
            static tagName = "DIV";
            static defaultChild = i.ZP;
            static allowedChildren = [i.ZP, i.i2, o.Z];
            constructor(t, e, n) {
              let { emitter: r } = n;
              super(t, e),
                (this.emitter = r),
                (this.batch = !1),
                this.optimize(),
                this.enable(),
                this.domNode.addEventListener("dragstart", (t) =>
                  this.handleDragStart(t)
                );
            }
            batchStart() {
              Array.isArray(this.batch) || (this.batch = []);
            }
            batchEnd() {
              if (!this.batch) return;
              const t = this.batch;
              (this.batch = !1), this.update(t);
            }
            emitMount(t) {
              this.emitter.emit(d.Z.events.SCROLL_BLOT_MOUNT, t);
            }
            emitUnmount(t) {
              this.emitter.emit(d.Z.events.SCROLL_BLOT_UNMOUNT, t);
            }
            emitEmbedUpdate(t, e) {
              this.emitter.emit(d.Z.events.SCROLL_EMBED_UPDATE, t, e);
            }
            deleteAt(t, e) {
              const [n, r] = this.line(t),
                [o] = this.line(t + e);
              if ((super.deleteAt(t, e), null != o && n !== o && r > 0)) {
                if (n instanceof i.i2 || o instanceof i.i2)
                  return void this.optimize();
                const t =
                  o.children.head instanceof s.Z ? null : o.children.head;
                n.moveChildren(o, t), n.remove();
              }
              this.optimize();
            }
            enable() {
              let t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              this.domNode.setAttribute(
                "contenteditable",
                t ? "true" : "false"
              );
            }
            formatAt(t, e, n, r) {
              super.formatAt(t, e, n, r), this.optimize();
            }
            insertAt(t, e, n) {
              if (t >= this.length())
                if (null == n || null == this.scroll.query(e, c.Scope.BLOCK)) {
                  const t = this.scroll.create(
                    this.statics.defaultChild.blotName
                  );
                  this.appendChild(t),
                    null == n && e.endsWith("\n")
                      ? t.insertAt(0, e.slice(0, -1), n)
                      : t.insertAt(0, e, n);
                } else {
                  const t = this.scroll.create(e, n);
                  this.appendChild(t);
                }
              else super.insertAt(t, e, n);
              this.optimize();
            }
            insertBefore(t, e) {
              if (t.statics.scope === c.Scope.INLINE_BLOT) {
                const n = this.scroll.create(
                  this.statics.defaultChild.blotName
                );
                n.appendChild(t), super.insertBefore(n, e);
              } else super.insertBefore(t, e);
            }
            insertContents(t, e) {
              const n = this.deltaToRenderBlocks(
                  e.concat(new (f())().insert("\n"))
                ),
                r = n.pop();
              if (null == r) return;
              this.batchStart();
              const s = n.shift();
              if (s) {
                const e =
                    "block" === s.type &&
                    (0 === s.delta.length() ||
                      (!this.descendant(i.i2, t)[0] && t < this.length())),
                  n =
                    "block" === s.type
                      ? s.delta
                      : new (f())().insert({ [s.key]: s.value });
                v(this, t, n);
                const r = "block" === s.type ? 1 : 0,
                  o = t + n.length() + r;
                e && this.insertAt(o - 1, "\n");
                const l = (0, i.E2)(this.line(t)[0]),
                  a = h.AttributeMap.diff(l, s.attributes) || {};
                Object.keys(a).forEach((t) => {
                  this.formatAt(o - 1, 1, t, a[t]);
                }),
                  (t = o);
              }
              let [o, l] = this.children.find(t);
              n.length &&
                (o && ((o = o.split(l)), (l = 0)),
                n.forEach((t) => {
                  if ("block" === t.type)
                    v(this.createBlock(t.attributes, o || void 0), 0, t.delta);
                  else {
                    const e = this.create(t.key, t.value);
                    this.insertBefore(e, o || void 0),
                      Object.keys(t.attributes).forEach((n) => {
                        e.format(n, t.attributes[n]);
                      });
                  }
                })),
                "block" === r.type &&
                  r.delta.length() &&
                  v(this, o ? o.offset(o.scroll) + l : this.length(), r.delta),
                this.batchEnd(),
                this.optimize();
            }
            isEnabled() {
              return "true" === this.domNode.getAttribute("contenteditable");
            }
            leaf(t) {
              const e = this.path(t).pop();
              if (!e) return [null, -1];
              const [n, r] = e;
              return n instanceof c.LeafBlot ? [n, r] : [null, -1];
            }
            line(t) {
              return t === this.length()
                ? this.line(t - 1)
                : this.descendant(p, t);
            }
            lines() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Number.MAX_VALUE;
              const n = (t, e, r) => {
                let i = [],
                  s = r;
                return (
                  t.children.forEachAt(e, r, (t, e, r) => {
                    p(t)
                      ? i.push(t)
                      : t instanceof c.ContainerBlot &&
                        (i = i.concat(n(t, e, s))),
                      (s -= r);
                  }),
                  i
                );
              };
              return n(this, t, e);
            }
            optimize() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              this.batch ||
                (super.optimize(t, e),
                t.length > 0 &&
                  this.emitter.emit(d.Z.events.SCROLL_OPTIMIZE, t, e));
            }
            path(t) {
              return super.path(t).slice(1);
            }
            remove() {}
            update(t) {
              if (this.batch)
                return void (
                  Array.isArray(t) && (this.batch = this.batch.concat(t))
                );
              let e = d.Z.sources.USER;
              "string" == typeof t && (e = t),
                Array.isArray(t) || (t = this.observer.takeRecords()),
                (t = t.filter((t) => {
                  let { target: e } = t;
                  const n = this.find(e, !0);
                  return n && !g(n);
                })).length > 0 &&
                  this.emitter.emit(d.Z.events.SCROLL_BEFORE_UPDATE, e, t),
                super.update(t.concat([])),
                t.length > 0 &&
                  this.emitter.emit(d.Z.events.SCROLL_UPDATE, e, t);
            }
            updateEmbedAt(t, e, n) {
              const [r] = this.descendant((t) => t instanceof i.i2, t);
              r && r.statics.blotName === e && g(r) && r.updateContent(n);
            }
            handleDragStart(t) {
              t.preventDefault();
            }
            deltaToRenderBlocks(t) {
              const e = [];
              let n = new (f())();
              return (
                t.forEach((t) => {
                  const r = t?.insert;
                  if (r)
                    if ("string" == typeof r) {
                      const i = r.split("\n");
                      i.slice(0, -1).forEach((r) => {
                        n.insert(r, t.attributes),
                          e.push({
                            type: "block",
                            delta: n,
                            attributes: t.attributes ?? {},
                          }),
                          (n = new (f())());
                      });
                      const s = i[i.length - 1];
                      s && n.insert(s, t.attributes);
                    } else {
                      const i = Object.keys(r)[0];
                      if (!i) return;
                      this.query(i, c.Scope.INLINE)
                        ? n.push(t)
                        : (n.length() &&
                            e.push({ type: "block", delta: n, attributes: {} }),
                          (n = new (f())()),
                          e.push({
                            type: "blockEmbed",
                            key: i,
                            value: r[i],
                            attributes: t.attributes ?? {},
                          }));
                    }
                }),
                n.length() &&
                  e.push({ type: "block", delta: n, attributes: {} }),
                e
              );
            }
            createBlock(t, e) {
              let n;
              const r = {};
              Object.entries(t).forEach((t) => {
                let [e, i] = t;
                null != this.query(e, c.Scope.BLOCK & c.Scope.BLOT)
                  ? (n = e)
                  : (r[e] = i);
              });
              const i = this.create(
                n || this.statics.defaultChild.blotName,
                n ? t[n] : void 0
              );
              this.insertBefore(i, e || void 0);
              const s = i.length();
              return (
                Object.entries(r).forEach((t) => {
                  let [e, n] = t;
                  i.formatAt(0, s, e, n);
                }),
                i
              );
            }
          }
          function v(t, e, n) {
            n.reduce((e, n) => {
              const r = h.Op.length(n);
              let s = n.attributes || {};
              if (null != n.insert)
                if ("string" == typeof n.insert) {
                  const r = n.insert;
                  t.insertAt(e, r);
                  const [o] = t.descendant(c.LeafBlot, e),
                    l = (0, i.E2)(o);
                  s = h.AttributeMap.diff(l, s) || {};
                } else if ("object" == typeof n.insert) {
                  const r = Object.keys(n.insert)[0];
                  if (null == r) return e;
                  if (
                    (t.insertAt(e, r, n.insert[r]),
                    null != t.scroll.query(r, c.Scope.INLINE))
                  ) {
                    const [n] = t.descendant(c.LeafBlot, e),
                      r = (0, i.E2)(n);
                    s = h.AttributeMap.diff(r, s) || {};
                  }
                }
              return (
                Object.keys(s).forEach((n) => {
                  t.formatAt(e, r, n, s[n]);
                }),
                e + r
              );
            }, e);
          }
          var b = m,
            y = n(3583),
            _ = n(2173),
            x = n(8103);
          class w extends x.Z {
            lastRecorded = 0;
            ignoreChange = !1;
            stack = { undo: [], redo: [] };
            currentRange = null;
            constructor(t, e) {
              super(t, e),
                this.quill.on(r.ZP.events.EDITOR_CHANGE, (t, e, n, i) => {
                  t === r.ZP.events.SELECTION_CHANGE
                    ? e && i !== r.ZP.sources.SILENT && (this.currentRange = e)
                    : t === r.ZP.events.TEXT_CHANGE &&
                      (this.ignoreChange ||
                        (this.options.userOnly && i !== r.ZP.sources.USER
                          ? this.transform(e)
                          : this.record(e, n)),
                      (this.currentRange = E(this.currentRange, e)));
                }),
                this.quill.keyboard.addBinding(
                  { key: "z", shortKey: !0 },
                  this.undo.bind(this)
                ),
                this.quill.keyboard.addBinding(
                  { key: ["z", "Z"], shortKey: !0, shiftKey: !0 },
                  this.redo.bind(this)
                ),
                /Win/i.test(navigator.platform) &&
                  this.quill.keyboard.addBinding(
                    { key: "y", shortKey: !0 },
                    this.redo.bind(this)
                  ),
                this.quill.root.addEventListener("beforeinput", (t) => {
                  "historyUndo" === t.inputType
                    ? (this.undo(), t.preventDefault())
                    : "historyRedo" === t.inputType &&
                      (this.redo(), t.preventDefault());
                });
            }
            change(t, e) {
              if (0 === this.stack[t].length) return;
              const n = this.stack[t].pop();
              if (!n) return;
              const i = this.quill.getContents(),
                s = n.delta.invert(i);
              this.stack[e].push({ delta: s, range: E(n.range, s) }),
                (this.lastRecorded = 0),
                (this.ignoreChange = !0),
                this.quill.updateContents(n.delta, r.ZP.sources.USER),
                (this.ignoreChange = !1),
                this.restoreSelection(n);
            }
            clear() {
              this.stack = { undo: [], redo: [] };
            }
            cutoff() {
              this.lastRecorded = 0;
            }
            record(t, e) {
              if (0 === t.ops.length) return;
              this.stack.redo = [];
              let n = t.invert(e),
                r = this.currentRange;
              const i = Date.now();
              if (
                this.lastRecorded + this.options.delay > i &&
                this.stack.undo.length > 0
              ) {
                const t = this.stack.undo.pop();
                t && ((n = n.compose(t.delta)), (r = t.range));
              } else this.lastRecorded = i;
              0 !== n.length() &&
                (this.stack.undo.push({ delta: n, range: r }),
                this.stack.undo.length > this.options.maxStack &&
                  this.stack.undo.shift());
            }
            redo() {
              this.change("redo", "undo");
            }
            transform(t) {
              N(this.stack.undo, t), N(this.stack.redo, t);
            }
            undo() {
              this.change("undo", "redo");
            }
            restoreSelection(t) {
              if (t.range) this.quill.setSelection(t.range, r.ZP.sources.USER);
              else {
                const e = (function (t, e) {
                  const n = e.reduce((t, e) => t + (e.delete || 0), 0);
                  let r = e.length() - n;
                  return (
                    (function (t, e) {
                      const n = e.ops[e.ops.length - 1];
                      return (
                        null != n &&
                        (null != n.insert
                          ? "string" == typeof n.insert &&
                            n.insert.endsWith("\n")
                          : null != n.attributes &&
                            Object.keys(n.attributes).some(
                              (e) => null != t.query(e, c.Scope.BLOCK)
                            ))
                      );
                    })(t, e) && (r -= 1),
                    r
                  );
                })(this.quill.scroll, t.delta);
                this.quill.setSelection(e, r.ZP.sources.USER);
              }
            }
          }
          function N(t, e) {
            let n = e;
            for (let e = t.length - 1; e >= 0; e -= 1) {
              const r = t[e];
              (t[e] = {
                delta: n.transform(r.delta, !0),
                range: r.range && E(r.range, n),
              }),
                (n = r.delta.transform(n)),
                0 === t[e].delta.length() && t.splice(e, 1);
            }
          }
          function E(t, e) {
            if (!t) return t;
            const n = e.transformPosition(t.index);
            return {
              index: n,
              length: e.transformPosition(t.index + t.length) - n,
            };
          }
          w.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
          var A = n(4283);
          class k extends x.Z {
            constructor(t, e) {
              super(t, e),
                t.root.addEventListener("drop", (e) => {
                  e.preventDefault();
                  let n = null;
                  if (document.caretRangeFromPoint)
                    n = document.caretRangeFromPoint(e.clientX, e.clientY);
                  else if (document.caretPositionFromPoint) {
                    const t = document.caretPositionFromPoint(
                      e.clientX,
                      e.clientY
                    );
                    (n = document.createRange()),
                      n.setStart(t.offsetNode, t.offset),
                      n.setEnd(t.offsetNode, t.offset);
                  }
                  const r = n && t.selection.normalizeNative(n);
                  if (r) {
                    const n = t.selection.normalizedToRange(r);
                    e.dataTransfer?.files &&
                      this.upload(n, e.dataTransfer.files);
                  }
                });
            }
            upload(t, e) {
              const n = [];
              Array.from(e).forEach((t) => {
                t && this.options.mimetypes?.includes(t.type) && n.push(t);
              }),
                n.length > 0 && this.options.handler.call(this, t, n);
            }
          }
          k.DEFAULTS = {
            mimetypes: ["image/png", "image/jpeg"],
            handler(t, e) {
              const n = e.map(
                (t) =>
                  new Promise((e) => {
                    const n = new FileReader();
                    (n.onload = (t) => {
                      e(t.target.result);
                    }),
                      n.readAsDataURL(t);
                  })
              );
              Promise.all(n).then((e) => {
                const n = e.reduce(
                  (t, e) => t.insert({ image: e }),
                  new (f())().retain(t.index).delete(t.length)
                );
                this.quill.updateContents(n, d.Z.sources.USER),
                  this.quill.setSelection(
                    t.index + e.length,
                    d.Z.sources.SILENT
                  );
              });
            },
          };
          var q = k;
          const Z = ["insertText", "insertReplacementText"];
          class S extends x.Z {
            constructor(t, e) {
              super(t, e),
                t.root.addEventListener("beforeinput", (t) => {
                  this.handleBeforeInput(t);
                }),
                /Android/i.test(navigator.userAgent) ||
                  t.on(r.ZP.events.COMPOSITION_BEFORE_START, () => {
                    this.handleCompositionStart();
                  });
            }
            deleteRange(t) {
              (0, A.WQ)({ range: t, quill: this.quill });
            }
            replaceText(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              if (0 === t.length) return !1;
              if (e) {
                const n = this.quill.getFormat(t.index, 1);
                this.deleteRange(t),
                  this.quill.updateContents(
                    new (f())().retain(t.index).insert(e, n),
                    r.ZP.sources.USER
                  );
              } else this.deleteRange(t);
              return (
                this.quill.setSelection(
                  t.index + e.length,
                  0,
                  r.ZP.sources.SILENT
                ),
                !0
              );
            }
            handleBeforeInput(t) {
              if (
                this.quill.composition.isComposing ||
                t.defaultPrevented ||
                !Z.includes(t.inputType)
              )
                return;
              const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
              if (!e || !0 === e.collapsed) return;
              const n = (function (t) {
                return "string" == typeof t.data
                  ? t.data
                  : t.dataTransfer?.types.includes("text/plain")
                  ? t.dataTransfer.getData("text/plain")
                  : null;
              })(t);
              if (null == n) return;
              const r = this.quill.selection.normalizeNative(e),
                i = r ? this.quill.selection.normalizedToRange(r) : null;
              i && this.replaceText(i, n) && t.preventDefault();
            }
            handleCompositionStart() {
              const t = this.quill.getSelection();
              t && this.replaceText(t);
            }
          }
          var L = S;
          const O = /Mac/i.test(navigator.platform);
          class T extends x.Z {
            isListening = !1;
            selectionChangeDeadline = 0;
            constructor(t, e) {
              super(t, e),
                this.handleArrowKeys(),
                this.handleNavigationShortcuts();
            }
            handleArrowKeys() {
              this.quill.keyboard.addBinding({
                key: ["ArrowLeft", "ArrowRight"],
                offset: 0,
                shiftKey: null,
                handler(t, e) {
                  let { line: n, event: i } = e;
                  if (!(n instanceof c.ParentBlot && n.uiNode)) return !0;
                  const s = "rtl" === getComputedStyle(n.domNode).direction;
                  return (
                    !!(
                      (s && "ArrowRight" !== i.key) ||
                      (!s && "ArrowLeft" !== i.key)
                    ) ||
                    (this.quill.setSelection(
                      t.index - 1,
                      t.length + (i.shiftKey ? 1 : 0),
                      r.ZP.sources.USER
                    ),
                    !1)
                  );
                },
              });
            }
            handleNavigationShortcuts() {
              this.quill.root.addEventListener("keydown", (t) => {
                !t.defaultPrevented &&
                  ((t) =>
                    "ArrowLeft" === t.key ||
                    "ArrowRight" === t.key ||
                    "ArrowUp" === t.key ||
                    "ArrowDown" === t.key ||
                    "Home" === t.key ||
                    !(!O || "a" !== t.key || !0 !== t.ctrlKey))(t) &&
                  this.ensureListeningToSelectionChange();
              });
            }
            ensureListeningToSelectionChange() {
              (this.selectionChangeDeadline = Date.now() + 100),
                this.isListening ||
                  ((this.isListening = !0),
                  document.addEventListener(
                    "selectionchange",
                    () => {
                      (this.isListening = !1),
                        Date.now() <= this.selectionChangeDeadline &&
                          this.handleSelectionChange();
                    },
                    { once: !0 }
                  ));
            }
            handleSelectionChange() {
              const t = document.getSelection();
              if (!t) return;
              const e = t.getRangeAt(0);
              if (!0 !== e.collapsed || 0 !== e.startOffset) return;
              const n = this.quill.scroll.find(e.startContainer);
              if (!(n instanceof c.ParentBlot && n.uiNode)) return;
              const r = document.createRange();
              r.setStartAfter(n.uiNode),
                r.setEndAfter(n.uiNode),
                t.removeAllRanges(),
                t.addRange(r);
            }
          }
          var j = T;
          r.ZP.register({
            "blots/block": i.ZP,
            "blots/block/embed": i.i2,
            "blots/break": s.Z,
            "blots/container": o.Z,
            "blots/cursor": l.Z,
            "blots/embed": a.Z,
            "blots/inline": u.Z,
            "blots/scroll": b,
            "blots/text": y.Z,
            "modules/clipboard": _.ZP,
            "modules/history": w,
            "modules/keyboard": A.ZP,
            "modules/uploader": q,
            "modules/input": L,
            "modules/uiNode": j,
          });
          var C = r.ZP;
        },
        3147: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return o;
            },
          });
          var r = n(6729),
            i = n(4431);
          const s = (0, n(1204).Z)("quill:events");
          ["selectionchange", "mousedown", "mouseup", "click"].forEach((t) => {
            document.addEventListener(t, function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              Array.from(document.querySelectorAll(".ql-container")).forEach(
                (t) => {
                  const n = i.Z.get(t);
                  n && n.emitter && n.emitter.handleDOM(...e);
                }
              );
            });
          });
          var o = class extends r {
            static events = {
              EDITOR_CHANGE: "editor-change",
              SCROLL_BEFORE_UPDATE: "scroll-before-update",
              SCROLL_BLOT_MOUNT: "scroll-blot-mount",
              SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
              SCROLL_OPTIMIZE: "scroll-optimize",
              SCROLL_UPDATE: "scroll-update",
              SCROLL_EMBED_UPDATE: "scroll-embed-update",
              SELECTION_CHANGE: "selection-change",
              TEXT_CHANGE: "text-change",
              COMPOSITION_BEFORE_START: "composition-before-start",
              COMPOSITION_START: "composition-start",
              COMPOSITION_BEFORE_END: "composition-before-end",
              COMPOSITION_END: "composition-end",
            };
            static sources = { API: "api", SILENT: "silent", USER: "user" };
            constructor() {
              super(), (this.domListeners = {}), this.on("error", s.error);
            }
            emit() {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return s.log.call(s, ...e), super.emit(...e);
            }
            handleDOM(t) {
              for (
                var e = arguments.length,
                  n = new Array(e > 1 ? e - 1 : 0),
                  r = 1;
                r < e;
                r++
              )
                n[r - 1] = arguments[r];
              (this.domListeners[t.type] || []).forEach((e) => {
                let { node: r, handler: i } = e;
                (t.target === r || r.contains(t.target)) && i(t, ...n);
              });
            }
            listenDOM(t, e, n) {
              this.domListeners[t] || (this.domListeners[t] = []),
                this.domListeners[t].push({ node: e, handler: n });
            }
          };
        },
        4431: function (t, e) {
          "use strict";
          e.Z = new WeakMap();
        },
        1204: function (t, e) {
          "use strict";
          const n = ["error", "warn", "log", "info"];
          let r = "warn";
          function i(t) {
            if (r && n.indexOf(t) <= n.indexOf(r)) {
              for (
                var e = arguments.length,
                  i = new Array(e > 1 ? e - 1 : 0),
                  s = 1;
                s < e;
                s++
              )
                i[s - 1] = arguments[s];
              console[t](...i);
            }
          }
          function s(t) {
            return n.reduce((e, n) => ((e[n] = i.bind(console, n, t)), e), {});
          }
          (s.level = (t) => {
            r = t;
          }),
            (i.level = s.level),
            (e.Z = s);
        },
        8103: function (t, e) {
          "use strict";
          e.Z = class {
            static DEFAULTS = {};
            constructor(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (this.quill = t), (this.options = e);
            }
          };
        },
        250: function (t, e, n) {
          "use strict";
          n.d(e, {
            ZP: function () {
              return C;
            },
          });
          var r = n(9534),
            i = n(1061),
            s = n(8473),
            o = n(1702),
            l = n.n(o),
            a = n(8489),
            u = n(3500),
            c = n(8474),
            h = n(5191),
            f = n(3583),
            d = n(6794);
          const p = /^[ -~]*$/;
          function g(t, e, n) {
            if (0 === t.length) {
              const [t] = b(n.pop());
              return e <= 0 ? `</li></${t}>` : `</li></${t}>${g([], e - 1, n)}`;
            }
            const [
                { child: r, offset: i, length: s, indent: o, type: l },
                ...a
              ] = t,
              [u, c] = b(l);
            if (o > e)
              return (
                n.push(l),
                o === e + 1
                  ? `<${u}><li${c}>${m(r, i, s)}${g(a, o, n)}`
                  : `<${u}><li>${g(t, e + 1, n)}`
              );
            const h = n[n.length - 1];
            if (o === e && l === h)
              return `</li><li${c}>${m(r, i, s)}${g(a, o, n)}`;
            const [f] = b(n.pop());
            return `</li></${f}>${g(t, e - 1, n)}`;
          }
          function m(t, e, n) {
            let r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if ("html" in t && "function" == typeof t.html) return t.html(e, n);
            if (t instanceof f.Z) return (0, f.b)(t.value().slice(e, e + n));
            if (t instanceof s.ParentBlot) {
              if ("list-container" === t.statics.blotName) {
                const r = [];
                return (
                  t.children.forEachAt(e, n, (t, e, n) => {
                    const i =
                      "formats" in t && "function" == typeof t.formats
                        ? t.formats()
                        : {};
                    r.push({
                      child: t,
                      offset: e,
                      length: n,
                      indent: i.indent || 0,
                      type: i.list,
                    });
                  }),
                  g(r, -1, [])
                );
              }
              const i = [];
              if (
                (t.children.forEachAt(e, n, (t, e, n) => {
                  i.push(m(t, e, n));
                }),
                r || "list" === t.statics.blotName)
              )
                return i.join("");
              const { outerHTML: s, innerHTML: o } = t.domNode,
                [l, a] = s.split(`>${o}<`);
              return "<table" === l
                ? `<table style="border: 1px solid #000;">${i.join("")}<${a}`
                : `${l}>${i.join("")}<${a}`;
            }
            return t.domNode instanceof Element ? t.domNode.outerHTML : "";
          }
          function v(t, e) {
            return Object.keys(e).reduce((n, r) => {
              if (null == t[r]) return n;
              const i = e[r];
              return (
                i === t[r]
                  ? (n[r] = i)
                  : Array.isArray(i)
                  ? i.indexOf(t[r]) < 0
                    ? (n[r] = i.concat([t[r]]))
                    : (n[r] = i)
                  : (n[r] = [i, t[r]]),
                n
              );
            }, {});
          }
          function b(t) {
            const e = "ordered" === t ? "ol" : "ul";
            switch (t) {
              case "checked":
                return [e, ' data-list="checked"'];
              case "unchecked":
                return [e, ' data-list="unchecked"'];
              default:
                return [e, ""];
            }
          }
          function y(t) {
            return t.reduce((t, e) => {
              if ("string" == typeof e.insert) {
                const n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                return t.insert(n, e.attributes);
              }
              return t.push(e);
            }, new (l())());
          }
          function _(t, e) {
            let { index: n, length: r } = t;
            return new d.e(n + e, r);
          }
          var x = class {
              constructor(t) {
                (this.scroll = t), (this.delta = this.getDelta());
              }
              applyDelta(t) {
                this.scroll.update();
                let e = this.scroll.length();
                this.scroll.batchStart();
                const n = y(t),
                  i = new (l())();
                return (
                  (function (t) {
                    const e = [];
                    return (
                      t.forEach((t) => {
                        "string" == typeof t.insert
                          ? t.insert.split("\n").forEach((n, r) => {
                              r &&
                                e.push({
                                  insert: "\n",
                                  attributes: t.attributes,
                                }),
                                n &&
                                  e.push({
                                    insert: n,
                                    attributes: t.attributes,
                                  });
                            })
                          : e.push(t);
                      }),
                      e
                    );
                  })(n.ops.slice()).reduce((t, n) => {
                    const l = o.Op.length(n);
                    let a = n.attributes || {},
                      c = !1,
                      h = !1;
                    if (null != n.insert) {
                      if ((i.retain(l), "string" == typeof n.insert)) {
                        const i = n.insert;
                        (h =
                          !i.endsWith("\n") &&
                          (e <= t || !!this.scroll.descendant(u.i2, t)[0])),
                          this.scroll.insertAt(t, i);
                        const [l, c] = this.scroll.line(t);
                        let f = (0, r.Z)({}, (0, u.E2)(l));
                        if (l instanceof u.ZP) {
                          const [t] = l.descendant(s.LeafBlot, c);
                          t && (f = (0, r.Z)(f, (0, u.E2)(t)));
                        }
                        a = o.AttributeMap.diff(f, a) || {};
                      } else if ("object" == typeof n.insert) {
                        const i = Object.keys(n.insert)[0];
                        if (null == i) return t;
                        const l = null != this.scroll.query(i, s.Scope.INLINE);
                        if (l)
                          (e <= t || this.scroll.descendant(u.i2, t)[0]) &&
                            (h = !0);
                        else if (t > 0) {
                          const [e, n] = this.scroll.descendant(
                            s.LeafBlot,
                            t - 1
                          );
                          e instanceof f.Z
                            ? "\n" !== e.value()[n] && (c = !0)
                            : e instanceof s.EmbedBlot &&
                              e.statics.scope === s.Scope.INLINE_BLOT &&
                              (c = !0);
                        }
                        if ((this.scroll.insertAt(t, i, n.insert[i]), l)) {
                          const [e] = this.scroll.descendant(s.LeafBlot, t);
                          if (e) {
                            const t = (0, r.Z)({}, (0, u.E2)(e));
                            a = o.AttributeMap.diff(t, a) || {};
                          }
                        }
                      }
                      e += l;
                    } else if (
                      (i.push(n),
                      null !== n.retain && "object" == typeof n.retain)
                    ) {
                      const e = Object.keys(n.retain)[0];
                      if (null == e) return t;
                      this.scroll.updateEmbedAt(t, e, n.retain[e]);
                    }
                    Object.keys(a).forEach((e) => {
                      this.scroll.formatAt(t, l, e, a[e]);
                    });
                    const d = c ? 1 : 0,
                      p = h ? 1 : 0;
                    return (
                      (e += d + p), i.retain(d), i.delete(p), t + l + d + p
                    );
                  }, 0),
                  i.reduce(
                    (t, e) =>
                      "number" == typeof e.delete
                        ? (this.scroll.deleteAt(t, e.delete), t)
                        : t + o.Op.length(e),
                    0
                  ),
                  this.scroll.batchEnd(),
                  this.scroll.optimize(),
                  this.update(n)
                );
              }
              deleteText(t, e) {
                return (
                  this.scroll.deleteAt(t, e),
                  this.update(new (l())().retain(t).delete(e))
                );
              }
              formatLine(t, e) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                this.scroll.update(),
                  Object.keys(n).forEach((r) => {
                    this.scroll.lines(t, Math.max(e, 1)).forEach((t) => {
                      t.format(r, n[r]);
                    });
                  }),
                  this.scroll.optimize();
                const r = new (l())().retain(t).retain(e, (0, i.Z)(n));
                return this.update(r);
              }
              formatText(t, e) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Object.keys(n).forEach((r) => {
                  this.scroll.formatAt(t, e, r, n[r]);
                });
                const r = new (l())().retain(t).retain(e, (0, i.Z)(n));
                return this.update(r);
              }
              getContents(t, e) {
                return this.delta.slice(t, t + e);
              }
              getDelta() {
                return this.scroll
                  .lines()
                  .reduce((t, e) => t.concat(e.delta()), new (l())());
              }
              getFormat(t) {
                let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n = [],
                  r = [];
                0 === e
                  ? this.scroll.path(t).forEach((t) => {
                      const [e] = t;
                      e instanceof u.ZP
                        ? n.push(e)
                        : e instanceof s.LeafBlot && r.push(e);
                    })
                  : ((n = this.scroll.lines(t, e)),
                    (r = this.scroll.descendants(s.LeafBlot, t, e)));
                const [i, o] = [n, r].map((t) => {
                  const e = t.shift();
                  if (null == e) return {};
                  let n = (0, u.E2)(e);
                  for (; Object.keys(n).length > 0; ) {
                    const e = t.shift();
                    if (null == e) return n;
                    n = v((0, u.E2)(e), n);
                  }
                  return n;
                });
                return { ...i, ...o };
              }
              getHTML(t, e) {
                const [n, r] = this.scroll.line(t);
                if (n) {
                  const i = n.length();
                  return n.length() >= r + e
                    ? m(n, r, e, !(0 === r && e === i))
                    : m(this.scroll, t, e, !0);
                }
                return "";
              }
              getText(t, e) {
                return this.getContents(t, e)
                  .filter((t) => "string" == typeof t.insert)
                  .map((t) => t.insert)
                  .join("");
              }
              insertContents(t, e) {
                const n = y(e),
                  r = new (l())().retain(t).concat(n);
                return this.scroll.insertContents(t, n), this.update(r);
              }
              insertEmbed(t, e, n) {
                return (
                  this.scroll.insertAt(t, e, n),
                  this.update(new (l())().retain(t).insert({ [e]: n }))
                );
              }
              insertText(t, e) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (
                  (e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
                  this.scroll.insertAt(t, e),
                  Object.keys(n).forEach((r) => {
                    this.scroll.formatAt(t, e.length, r, n[r]);
                  }),
                  this.update(new (l())().retain(t).insert(e, (0, i.Z)(n)))
                );
              }
              isBlank() {
                if (0 === this.scroll.children.length) return !0;
                if (this.scroll.children.length > 1) return !1;
                const t = this.scroll.children.head;
                if (t?.statics.blotName !== u.ZP.blotName) return !1;
                const e = t;
                return (
                  !(e.children.length > 1) && e.children.head instanceof c.Z
                );
              }
              removeFormat(t, e) {
                const n = this.getText(t, e),
                  [r, i] = this.scroll.line(t + e);
                let s = 0,
                  o = new (l())();
                null != r &&
                  ((s = r.length() - i),
                  (o = r
                    .delta()
                    .slice(i, i + s - 1)
                    .insert("\n")));
                const a = this.getContents(t, e + s).diff(
                    new (l())().insert(n).concat(o)
                  ),
                  u = new (l())().retain(t).concat(a);
                return this.applyDelta(u);
              }
              update(t) {
                let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : void 0;
                const r = this.delta;
                if (
                  1 === e.length &&
                  "characterData" === e[0].type &&
                  e[0].target.data.match(p) &&
                  this.scroll.find(e[0].target)
                ) {
                  const i = this.scroll.find(e[0].target),
                    s = (0, u.E2)(i),
                    o = i.offset(this.scroll),
                    a = e[0].oldValue.replace(h.Z.CONTENTS, ""),
                    c = new (l())().insert(a),
                    f = new (l())().insert(i.value()),
                    d = n && {
                      oldRange: _(n.oldRange, -o),
                      newRange: _(n.newRange, -o),
                    };
                  (t = new (l())()
                    .retain(o)
                    .concat(c.diff(f, d))
                    .reduce(
                      (t, e) => (e.insert ? t.insert(e.insert, s) : t.push(e)),
                      new (l())()
                    )),
                    (this.delta = r.compose(t));
                } else
                  (this.delta = this.getDelta()),
                    (t && (0, a.Z)(r.compose(t), this.delta)) ||
                      (t = r.diff(this.delta, n));
                return t;
              }
            },
            w = n(3147),
            N = n(4431),
            E = n(1204),
            A = n(8103),
            k = n(8726),
            q = class {
              isComposing = !1;
              constructor(t, e) {
                (this.scroll = t), (this.emitter = e), this.setupListeners();
              }
              setupListeners() {
                this.scroll.domNode.addEventListener(
                  "compositionstart",
                  (t) => {
                    this.isComposing || this.handleCompositionStart(t);
                  }
                ),
                  this.scroll.domNode.addEventListener(
                    "compositionend",
                    (t) => {
                      this.isComposing &&
                        queueMicrotask(() => {
                          this.handleCompositionEnd(t);
                        });
                    }
                  );
              }
              handleCompositionStart(t) {
                const e =
                  t.target instanceof Node
                    ? this.scroll.find(t.target, !0)
                    : null;
                !e ||
                  e instanceof k.Z ||
                  (this.emitter.emit(w.Z.events.COMPOSITION_BEFORE_START, t),
                  this.scroll.batchStart(),
                  this.emitter.emit(w.Z.events.COMPOSITION_START, t),
                  (this.isComposing = !0));
              }
              handleCompositionEnd(t) {
                this.emitter.emit(w.Z.events.COMPOSITION_BEFORE_END, t),
                  this.scroll.batchEnd(),
                  this.emitter.emit(w.Z.events.COMPOSITION_END, t),
                  (this.isComposing = !1);
              }
            },
            Z = n(6760);
          const S = (t) => {
              const e = t.getBoundingClientRect(),
                n =
                  ("offsetWidth" in t && Math.abs(e.width) / t.offsetWidth) ||
                  1,
                r =
                  ("offsetHeight" in t &&
                    Math.abs(e.height) / t.offsetHeight) ||
                  1;
              return {
                top: e.top,
                right: e.left + t.clientWidth * n,
                bottom: e.top + t.clientHeight * r,
                left: e.left,
              };
            },
            L = (t) => {
              const e = parseInt(t, 10);
              return Number.isNaN(e) ? 0 : e;
            },
            O = (t, e, n, r, i, s) =>
              t < n && e > r
                ? 0
                : t < n
                ? -(n - t + i)
                : e > r
                ? e - t > r - n
                  ? t + i - n
                  : e - r + s
                : 0;
          const T = (0, E.Z)("quill"),
            j = new s.Registry();
          s.ParentBlot.uiClass = "ql-ui";
          class C {
            static DEFAULTS = {
              bounds: null,
              modules: {},
              placeholder: "",
              readOnly: !1,
              registry: j,
              theme: "default",
            };
            static events = w.Z.events;
            static sources = w.Z.sources;
            static version = "2.0.0-rc.0";
            static imports = {
              delta: l(),
              parchment: s,
              "core/module": A.Z,
              "core/theme": Z.Z,
            };
            static debug(t) {
              !0 === t && (t = "log"), E.Z.level(t);
            }
            static find(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return N.Z.get(t) || j.find(t, e);
            }
            static import(t) {
              return (
                null == this.imports[t] &&
                  T.error(
                    `Cannot import ${t}. Are you sure it was registered?`
                  ),
                this.imports[t]
              );
            }
            static register(t, e) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if ("string" != typeof t) {
                const n = "attrName" in t ? t.attrName : t.blotName;
                "string" == typeof n
                  ? this.register(`formats/${n}`, t, e)
                  : Object.keys(t).forEach((n) => {
                      this.register(n, t[n], e);
                    });
              } else
                null == this.imports[t] ||
                  n ||
                  T.warn(`Overwriting ${t} with`, e),
                  (this.imports[t] = e),
                  (t.startsWith("blots/") || t.startsWith("formats/")) &&
                    e &&
                    "boolean" != typeof e &&
                    "abstract" !== e.blotName &&
                    j.register(e),
                  "function" == typeof e.register && e.register(j);
            }
            constructor(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (
                ((this.options = (function (t, e) {
                  let n = (0, r.Z)(
                    {
                      container: t,
                      modules: {
                        clipboard: !0,
                        keyboard: !0,
                        history: !0,
                        uploader: !0,
                      },
                    },
                    e
                  );
                  if (n.theme && n.theme !== C.DEFAULTS.theme) {
                    if (
                      ((n.theme = C.import(`themes/${n.theme}`)),
                      null == n.theme)
                    )
                      throw new Error(
                        `Invalid theme ${n.theme}. Did you register it?`
                      );
                  } else n.theme = Z.Z;
                  const s = (0, i.Z)(n.theme.DEFAULTS);
                  [s, n].forEach((t) => {
                    (t.modules = t.modules || {}),
                      Object.keys(t.modules).forEach((e) => {
                        !0 === t.modules[e] && (t.modules[e] = {});
                      });
                  });
                  const o = Object.keys(s.modules)
                    .concat(Object.keys(n.modules))
                    .reduce((t, e) => {
                      const n = C.import(`modules/${e}`);
                      return (
                        null == n
                          ? T.error(
                              `Cannot load ${e} module. Are you sure you registered it?`
                            )
                          : (t[e] = n.DEFAULTS || {}),
                        t
                      );
                    }, {});
                  return (
                    null != n.modules &&
                      n.modules.toolbar &&
                      n.modules.toolbar.constructor !== Object &&
                      (n.modules.toolbar = { container: n.modules.toolbar }),
                    (n = (0, r.Z)({}, C.DEFAULTS, { modules: o }, s, n)),
                    ["bounds", "container"].forEach((t) => {
                      const e = n[t];
                      "string" == typeof e &&
                        (n[t] = document.querySelector(e));
                    }),
                    (n.modules = Object.keys(n.modules).reduce(
                      (t, e) => (n.modules[e] && (t[e] = n.modules[e]), t),
                      {}
                    )),
                    n
                  );
                })(t, e)),
                (this.container = this.options.container),
                null == this.container)
              )
                return void T.error("Invalid Quill container", t);
              this.options.debug && C.debug(this.options.debug);
              const n = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"),
                (this.container.innerHTML = ""),
                N.Z.set(this.container, this),
                (this.root = this.addContainer("ql-editor")),
                this.root.classList.add("ql-blank"),
                (this.emitter = new w.Z());
              const o = s.ScrollBlot.blotName,
                a = this.options.registry.query(o);
              if (!a || !("blotName" in a))
                throw new Error(`Cannot initialize Quill without "${o}" blot`);
              if (
                ((this.scroll = new a(this.options.registry, this.root, {
                  emitter: this.emitter,
                })),
                (this.editor = new x(this.scroll)),
                (this.selection = new d.Z(this.scroll, this.emitter)),
                (this.composition = new q(this.scroll, this.emitter)),
                (this.theme = new this.options.theme(this, this.options)),
                (this.keyboard = this.theme.addModule("keyboard")),
                (this.clipboard = this.theme.addModule("clipboard")),
                (this.history = this.theme.addModule("history")),
                (this.uploader = this.theme.addModule("uploader")),
                this.theme.addModule("input"),
                this.theme.addModule("uiNode"),
                this.theme.init(),
                this.emitter.on(w.Z.events.EDITOR_CHANGE, (t) => {
                  t === w.Z.events.TEXT_CHANGE &&
                    this.root.classList.toggle(
                      "ql-blank",
                      this.editor.isBlank()
                    );
                }),
                this.emitter.on(w.Z.events.SCROLL_UPDATE, (t, e) => {
                  const n = this.selection.lastRange,
                    [r] = this.selection.getRange(),
                    i = n && r ? { oldRange: n, newRange: r } : void 0;
                  R.call(this, () => this.editor.update(null, e, i), t);
                }),
                this.emitter.on(w.Z.events.SCROLL_EMBED_UPDATE, (t, e) => {
                  const n = this.selection.lastRange,
                    [r] = this.selection.getRange(),
                    i = n && r ? { oldRange: n, newRange: r } : void 0;
                  R.call(
                    this,
                    () => {
                      const n = new (l())()
                        .retain(t.offset(this))
                        .retain({ [t.statics.blotName]: e });
                      return this.editor.update(n, [], i);
                    },
                    C.sources.USER
                  );
                }),
                n)
              ) {
                const t = this.clipboard.convert({
                  html: `${n}<p><br></p>`,
                  text: "\n",
                });
                this.setContents(t);
              }
              this.history.clear(),
                this.options.placeholder &&
                  this.root.setAttribute(
                    "data-placeholder",
                    this.options.placeholder
                  ),
                this.options.readOnly && this.disable(),
                (this.allowReadOnlyEdits = !1);
            }
            addContainer(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              if ("string" == typeof t) {
                const e = t;
                (t = document.createElement("div")).classList.add(e);
              }
              return this.container.insertBefore(t, e), t;
            }
            blur() {
              this.selection.setRange(null);
            }
            deleteText(t, e, n) {
              return (
                ([t, e, , n] = I(t, e, n)),
                R.call(this, () => this.editor.deleteText(t, e), n, t, -1 * e)
              );
            }
            disable() {
              this.enable(!1);
            }
            editReadOnly(t) {
              this.allowReadOnlyEdits = !0;
              const e = t();
              return (this.allowReadOnlyEdits = !1), e;
            }
            enable() {
              let t =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              this.scroll.enable(t),
                this.container.classList.toggle("ql-disabled", !t);
            }
            focus() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              this.selection.focus(),
                t.preventScroll || this.scrollSelectionIntoView();
            }
            format(t, e) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : w.Z.sources.API;
              return R.call(
                this,
                () => {
                  const n = this.getSelection(!0);
                  let r = new (l())();
                  if (null == n) return r;
                  if (this.scroll.query(t, s.Scope.BLOCK))
                    r = this.editor.formatLine(n.index, n.length, { [t]: e });
                  else {
                    if (0 === n.length) return this.selection.format(t, e), r;
                    r = this.editor.formatText(n.index, n.length, { [t]: e });
                  }
                  return this.setSelection(n, w.Z.sources.SILENT), r;
                },
                n
              );
            }
            formatLine(t, e, n, r, i) {
              let s;
              return (
                ([t, e, s, i] = I(t, e, n, r, i)),
                R.call(this, () => this.editor.formatLine(t, e, s), i, t, 0)
              );
            }
            formatText(t, e, n, r, i) {
              let s;
              return (
                ([t, e, s, i] = I(t, e, n, r, i)),
                R.call(this, () => this.editor.formatText(t, e, s), i, t, 0)
              );
            }
            getBounds(t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n = null;
              if (
                ((n =
                  "number" == typeof t
                    ? this.selection.getBounds(t, e)
                    : this.selection.getBounds(t.index, t.length)),
                !n)
              )
                return null;
              const r = this.container.getBoundingClientRect();
              return {
                bottom: n.bottom - r.top,
                height: n.height,
                left: n.left - r.left,
                right: n.right - r.left,
                top: n.top - r.top,
                width: n.width,
              };
            }
            getContents() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.getLength() - t;
              return ([t, e] = I(t, e)), this.editor.getContents(t, e);
            }
            getFormat() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.getSelection(!0),
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return "number" == typeof t
                ? this.editor.getFormat(t, e)
                : this.editor.getFormat(t.index, t.length);
            }
            getIndex(t) {
              return t.offset(this.scroll);
            }
            getLength() {
              return this.scroll.length();
            }
            getLeaf(t) {
              return this.scroll.leaf(t);
            }
            getLine(t) {
              return this.scroll.line(t);
            }
            getLines() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Number.MAX_VALUE;
              return "number" != typeof t
                ? this.scroll.lines(t.index, t.length)
                : this.scroll.lines(t, e);
            }
            getModule(t) {
              return this.theme.modules[t];
            }
            getSelection() {
              return (
                arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0] &&
                  this.focus(),
                this.update(),
                this.selection.getRange()[0]
              );
            }
            getSemanticHTML() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e = arguments.length > 1 ? arguments[1] : void 0;
              return (
                "number" == typeof t && (e = e ?? this.getLength() - t),
                ([t, e] = I(t, e)),
                this.editor.getHTML(t, e)
              );
            }
            getText() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e = arguments.length > 1 ? arguments[1] : void 0;
              return (
                "number" == typeof t && (e = e ?? this.getLength() - t),
                ([t, e] = I(t, e)),
                this.editor.getText(t, e)
              );
            }
            hasFocus() {
              return this.selection.hasFocus();
            }
            insertEmbed(t, e, n) {
              let r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : C.sources.API;
              return R.call(this, () => this.editor.insertEmbed(t, e, n), r, t);
            }
            insertText(t, e, n, r, i) {
              let s;
              return (
                ([t, , s, i] = I(t, 0, n, r, i)),
                R.call(
                  this,
                  () => this.editor.insertText(t, e, s),
                  i,
                  t,
                  e.length
                )
              );
            }
            isEnabled() {
              return this.scroll.isEnabled();
            }
            off() {
              return this.emitter.off(...arguments);
            }
            on() {
              return this.emitter.on(...arguments);
            }
            once() {
              return this.emitter.once(...arguments);
            }
            removeFormat() {
              const [t, e, , n] = I(...arguments);
              return R.call(this, () => this.editor.removeFormat(t, e), n, t);
            }
            scrollRectIntoView(t) {
              ((t, e) => {
                const n = t.ownerDocument;
                let r = e,
                  i = t;
                for (; i; ) {
                  const t = i === n.body,
                    e = t
                      ? {
                          top: 0,
                          right:
                            window.visualViewport?.width ??
                            n.documentElement.clientWidth,
                          bottom:
                            window.visualViewport?.height ??
                            n.documentElement.clientHeight,
                          left: 0,
                        }
                      : S(i),
                    o = getComputedStyle(i),
                    l = O(
                      r.left,
                      r.right,
                      e.left,
                      e.right,
                      L(o.scrollPaddingLeft),
                      L(o.scrollPaddingRight)
                    ),
                    a = O(
                      r.top,
                      r.bottom,
                      e.top,
                      e.bottom,
                      L(o.scrollPaddingTop),
                      L(o.scrollPaddingBottom)
                    );
                  if (l || a)
                    if (t) n.defaultView?.scrollBy(l, a);
                    else {
                      const { scrollLeft: t, scrollTop: e } = i;
                      a && (i.scrollTop += a), l && (i.scrollLeft += l);
                      const n = i.scrollLeft - t,
                        s = i.scrollTop - e;
                      r = {
                        left: r.left - n,
                        top: r.top - s,
                        right: r.right - n,
                        bottom: r.bottom - s,
                      };
                    }
                  i =
                    t || "fixed" === o.position
                      ? null
                      : (s = i).parentElement || s.getRootNode().host || null;
                }
                var s;
              })(this.root, t);
            }
            scrollIntoView() {
              console.warn(
                "Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."
              ),
                this.scrollSelectionIntoView();
            }
            scrollSelectionIntoView() {
              const t = this.selection.lastRange,
                e = t && this.selection.getBounds(t.index, t.length);
              e && this.scrollRectIntoView(e);
            }
            setContents(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : w.Z.sources.API;
              return R.call(
                this,
                () => {
                  t = new (l())(t);
                  const e = this.getLength(),
                    n = this.editor.deleteText(0, e),
                    r = this.editor.insertContents(0, t),
                    i = this.editor.deleteText(this.getLength() - 1, 1);
                  return n.compose(r).compose(i);
                },
                e
              );
            }
            setSelection(t, e, n) {
              null == t
                ? this.selection.setRange(null, e || C.sources.API)
                : (([t, e, , n] = I(t, e, n)),
                  this.selection.setRange(new d.e(Math.max(0, t), e), n),
                  n !== w.Z.sources.SILENT && this.scrollSelectionIntoView());
            }
            setText(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : w.Z.sources.API;
              const n = new (l())().insert(t);
              return this.setContents(n, e);
            }
            update() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : w.Z.sources.USER;
              const e = this.scroll.update(t);
              return this.selection.update(t), e;
            }
            updateContents(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : w.Z.sources.API;
              return R.call(
                this,
                () => ((t = new (l())(t)), this.editor.applyDelta(t)),
                e,
                !0
              );
            }
          }
          function R(t, e, n, r) {
            if (
              !this.isEnabled() &&
              e === w.Z.sources.USER &&
              !this.allowReadOnlyEdits
            )
              return new (l())();
            let i = null == n ? null : this.getSelection();
            const s = this.editor.delta,
              o = t();
            if (
              (null != i &&
                (!0 === n && (n = i.index),
                null == r ? (i = P(i, o, e)) : 0 !== r && (i = P(i, n, r, e)),
                this.setSelection(i, w.Z.sources.SILENT)),
              o.length() > 0)
            ) {
              const t = [w.Z.events.TEXT_CHANGE, o, s, e];
              this.emitter.emit(w.Z.events.EDITOR_CHANGE, ...t),
                e !== w.Z.sources.SILENT && this.emitter.emit(...t);
            }
            return o;
          }
          function I(t, e, n, r, i) {
            let s = {};
            return (
              "number" == typeof t.index && "number" == typeof t.length
                ? "number" != typeof e
                  ? ((i = r), (r = n), (n = e), (e = t.length), (t = t.index))
                  : ((e = t.length), (t = t.index))
                : "number" != typeof e && ((i = r), (r = n), (n = e), (e = 0)),
              "object" == typeof n
                ? ((s = n), (i = r))
                : "string" == typeof n && (null != r ? (s[n] = r) : (i = n)),
              [t, e, s, (i = i || w.Z.sources.API)]
            );
          }
          function P(t, e, n, r) {
            const i = "number" == typeof n ? n : 0;
            if (null == t) return null;
            let s, o;
            return (
              e && "function" == typeof e.transformPosition
                ? ([s, o] = [t.index, t.index + t.length].map((t) =>
                    e.transformPosition(t, r !== w.Z.sources.USER)
                  ))
                : ([s, o] = [t.index, t.index + t.length].map((t) =>
                    t < e || (t === e && r === w.Z.sources.USER)
                      ? t
                      : i >= 0
                      ? t + i
                      : Math.max(e, t + i)
                  )),
              new d.e(s, o - s)
            );
          }
        },
        6794: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return u;
            },
            e: function () {
              return a;
            },
          });
          var r = n(8473),
            i = n(8489),
            s = n(1061),
            o = n(3147);
          const l = (0, n(1204).Z)("quill:selection");
          class a {
            constructor(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              (this.index = t), (this.length = e);
            }
          }
          class u {
            constructor(t, e) {
              (this.emitter = e),
                (this.scroll = t),
                (this.composing = !1),
                (this.mouseDown = !1),
                (this.root = this.scroll.domNode),
                (this.cursor = this.scroll.create("cursor", this)),
                (this.savedRange = new a(0, 0)),
                (this.lastRange = this.savedRange),
                (this.lastNative = null),
                this.handleComposition(),
                this.handleDragging(),
                this.emitter.listenDOM("selectionchange", document, () => {
                  this.mouseDown ||
                    this.composing ||
                    setTimeout(this.update.bind(this, o.Z.sources.USER), 1);
                }),
                this.emitter.on(o.Z.events.SCROLL_BEFORE_UPDATE, () => {
                  if (!this.hasFocus()) return;
                  const t = this.getNativeRange();
                  null != t &&
                    t.start.node !== this.cursor.textNode &&
                    this.emitter.once(o.Z.events.SCROLL_UPDATE, (e, n) => {
                      try {
                        this.root.contains(t.start.node) &&
                          this.root.contains(t.end.node) &&
                          this.setNativeRange(
                            t.start.node,
                            t.start.offset,
                            t.end.node,
                            t.end.offset
                          );
                        const r = n.some(
                          (t) =>
                            "characterData" === t.type ||
                            "childList" === t.type ||
                            ("attributes" === t.type && t.target === this.root)
                        );
                        this.update(r ? o.Z.sources.SILENT : e);
                      } catch (t) {}
                    });
                }),
                this.emitter.on(o.Z.events.SCROLL_OPTIMIZE, (t, e) => {
                  if (e.range) {
                    const {
                      startNode: t,
                      startOffset: n,
                      endNode: r,
                      endOffset: i,
                    } = e.range;
                    this.setNativeRange(t, n, r, i),
                      this.update(o.Z.sources.SILENT);
                  }
                }),
                this.update(o.Z.sources.SILENT);
            }
            handleComposition() {
              this.emitter.on(o.Z.events.COMPOSITION_BEFORE_START, () => {
                this.composing = !0;
              }),
                this.emitter.on(o.Z.events.COMPOSITION_END, () => {
                  if (((this.composing = !1), this.cursor.parent)) {
                    const t = this.cursor.restore();
                    if (!t) return;
                    setTimeout(() => {
                      this.setNativeRange(
                        t.startNode,
                        t.startOffset,
                        t.endNode,
                        t.endOffset
                      );
                    }, 1);
                  }
                });
            }
            handleDragging() {
              this.emitter.listenDOM("mousedown", document.body, () => {
                this.mouseDown = !0;
              }),
                this.emitter.listenDOM("mouseup", document.body, () => {
                  (this.mouseDown = !1), this.update(o.Z.sources.USER);
                });
            }
            focus() {
              this.hasFocus() ||
                (this.root.focus({ preventScroll: !0 }),
                this.setRange(this.savedRange));
            }
            format(t, e) {
              this.scroll.update();
              const n = this.getNativeRange();
              if (
                null != n &&
                n.native.collapsed &&
                !this.scroll.query(t, r.Scope.BLOCK)
              ) {
                if (n.start.node !== this.cursor.textNode) {
                  const t = this.scroll.find(n.start.node, !1);
                  if (null == t) return;
                  if (t instanceof r.LeafBlot) {
                    const e = t.split(n.start.offset);
                    t.parent.insertBefore(this.cursor, e);
                  } else t.insertBefore(this.cursor, n.start.node);
                  this.cursor.attach();
                }
                this.cursor.format(t, e),
                  this.scroll.optimize(),
                  this.setNativeRange(
                    this.cursor.textNode,
                    this.cursor.textNode.data.length
                  ),
                  this.update();
              }
            }
            getBounds(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              const n = this.scroll.length();
              let r;
              (t = Math.min(t, n - 1)), (e = Math.min(t + e, n - 1) - t);
              let [i, s] = this.scroll.leaf(t);
              if (null == i) return null;
              [r, s] = i.position(s, !0);
              const o = document.createRange();
              if (e > 0)
                return (
                  o.setStart(r, s),
                  ([i, s] = this.scroll.leaf(t + e)),
                  null == i
                    ? null
                    : (([r, s] = i.position(s, !0)),
                      o.setEnd(r, s),
                      o.getBoundingClientRect())
                );
              let l,
                a = "left";
              if (r instanceof Text) {
                if (!r.data.length) return null;
                s < r.data.length
                  ? (o.setStart(r, s), o.setEnd(r, s + 1))
                  : (o.setStart(r, s - 1), o.setEnd(r, s), (a = "right")),
                  (l = o.getBoundingClientRect());
              } else {
                if (!(i.domNode instanceof Element)) return null;
                (l = i.domNode.getBoundingClientRect()), s > 0 && (a = "right");
              }
              return {
                bottom: l.top + l.height,
                height: l.height,
                left: l[a],
                right: l[a],
                top: l.top,
                width: 0,
              };
            }
            getNativeRange() {
              const t = document.getSelection();
              if (null == t || t.rangeCount <= 0) return null;
              const e = t.getRangeAt(0);
              if (null == e) return null;
              const n = this.normalizeNative(e);
              return l.info("getNativeRange", n), n;
            }
            getRange() {
              const t = this.scroll.domNode;
              if ("isConnected" in t && !t.isConnected) return [null, null];
              const e = this.getNativeRange();
              return null == e ? [null, null] : [this.normalizedToRange(e), e];
            }
            hasFocus() {
              return (
                document.activeElement === this.root ||
                (null != document.activeElement &&
                  c(this.root, document.activeElement))
              );
            }
            normalizedToRange(t) {
              const e = [[t.start.node, t.start.offset]];
              t.native.collapsed || e.push([t.end.node, t.end.offset]);
              const n = e.map((t) => {
                  const [e, n] = t,
                    i = this.scroll.find(e, !0),
                    s = i.offset(this.scroll);
                  return 0 === n
                    ? s
                    : i instanceof r.LeafBlot
                    ? s + i.index(e, n)
                    : s + i.length();
                }),
                i = Math.min(Math.max(...n), this.scroll.length() - 1),
                s = Math.min(i, ...n);
              return new a(s, i - s);
            }
            normalizeNative(t) {
              if (
                !c(this.root, t.startContainer) ||
                (!t.collapsed && !c(this.root, t.endContainer))
              )
                return null;
              const e = {
                start: { node: t.startContainer, offset: t.startOffset },
                end: { node: t.endContainer, offset: t.endOffset },
                native: t,
              };
              return (
                [e.start, e.end].forEach((t) => {
                  let { node: e, offset: n } = t;
                  for (; !(e instanceof Text) && e.childNodes.length > 0; )
                    if (e.childNodes.length > n) (e = e.childNodes[n]), (n = 0);
                    else {
                      if (e.childNodes.length !== n) break;
                      (e = e.lastChild),
                        (n =
                          e instanceof Text
                            ? e.data.length
                            : e.childNodes.length > 0
                            ? e.childNodes.length
                            : e.childNodes.length + 1);
                    }
                  (t.node = e), (t.offset = n);
                }),
                e
              );
            }
            rangeToNative(t) {
              const e = this.scroll.length(),
                n = (t, n) => {
                  t = Math.min(e - 1, t);
                  const [r, i] = this.scroll.leaf(t);
                  return r ? r.position(i, n) : [null, -1];
                };
              return [...n(t.index, !1), ...n(t.index + t.length, !0)];
            }
            setNativeRange(t, e) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : t,
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : e,
                i =
                  arguments.length > 4 &&
                  void 0 !== arguments[4] &&
                  arguments[4];
              if (
                (l.info("setNativeRange", t, e, n, r),
                null != t &&
                  (null == this.root.parentNode ||
                    null == t.parentNode ||
                    null == n.parentNode))
              )
                return;
              const s = document.getSelection();
              if (null != s)
                if (null != t) {
                  this.hasFocus() || this.root.focus({ preventScroll: !0 });
                  const { native: o } = this.getNativeRange() || {};
                  if (
                    null == o ||
                    i ||
                    t !== o.startContainer ||
                    e !== o.startOffset ||
                    n !== o.endContainer ||
                    r !== o.endOffset
                  ) {
                    t instanceof Element &&
                      "BR" === t.tagName &&
                      ((e = Array.from(t.parentNode.childNodes).indexOf(t)),
                      (t = t.parentNode)),
                      n instanceof Element &&
                        "BR" === n.tagName &&
                        ((r = Array.from(n.parentNode.childNodes).indexOf(n)),
                        (n = n.parentNode));
                    const i = document.createRange();
                    i.setStart(t, e),
                      i.setEnd(n, r),
                      s.removeAllRanges(),
                      s.addRange(i);
                  }
                } else s.removeAllRanges(), this.root.blur();
            }
            setRange(t) {
              let e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : o.Z.sources.API;
              if (
                ("string" == typeof e && ((n = e), (e = !1)),
                l.info("setRange", t),
                null != t)
              ) {
                const n = this.rangeToNative(t);
                this.setNativeRange(...n, e);
              } else this.setNativeRange(null);
              this.update(n);
            }
            update() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : o.Z.sources.USER;
              const e = this.lastRange,
                [n, r] = this.getRange();
              if (
                ((this.lastRange = n),
                (this.lastNative = r),
                null != this.lastRange && (this.savedRange = this.lastRange),
                !(0, i.Z)(e, this.lastRange))
              ) {
                if (
                  !this.composing &&
                  null != r &&
                  r.native.collapsed &&
                  r.start.node !== this.cursor.textNode
                ) {
                  const t = this.cursor.restore();
                  t &&
                    this.setNativeRange(
                      t.startNode,
                      t.startOffset,
                      t.endNode,
                      t.endOffset
                    );
                }
                const n = [
                  o.Z.events.SELECTION_CHANGE,
                  (0, s.Z)(this.lastRange),
                  (0, s.Z)(e),
                  t,
                ];
                this.emitter.emit(o.Z.events.EDITOR_CHANGE, ...n),
                  t !== o.Z.sources.SILENT && this.emitter.emit(...n);
              }
            }
          }
          function c(t, e) {
            try {
              e.parentNode;
            } catch (t) {
              return !1;
            }
            return t.contains(e);
          }
        },
        6760: function (t, e) {
          "use strict";
          class n {
            static DEFAULTS = { modules: {} };
            static themes = { default: n };
            modules = {};
            constructor(t, e) {
              (this.quill = t), (this.options = e);
            }
            init() {
              Object.keys(this.options.modules).forEach((t) => {
                null == this.modules[t] && this.addModule(t);
              });
            }
            addModule(t) {
              const e = this.quill.constructor.import(`modules/${t}`);
              return (
                (this.modules[t] = new e(
                  this.quill,
                  this.options.modules[t] || {}
                )),
                this.modules[t]
              );
            }
          }
          e.Z = n;
        },
        767: function (t, e, n) {
          "use strict";
          n.d(e, {
            HE: function () {
              return l;
            },
            dk: function () {
              return o;
            },
            if: function () {
              return s;
            },
          });
          var r = n(8473);
          const i = {
              scope: r.Scope.BLOCK,
              whitelist: ["right", "center", "justify"],
            },
            s = new r.Attributor("align", "align", i),
            o = new r.ClassAttributor("align", "ql-align", i),
            l = new r.StyleAttributor("align", "text-align", i);
        },
        4352: function (t, e, n) {
          "use strict";
          n.d(e, {
            Y: function () {
              return s;
            },
            w: function () {
              return o;
            },
          });
          var r = n(8473),
            i = n(2179);
          const s = new r.ClassAttributor("background", "ql-bg", {
              scope: r.Scope.INLINE,
            }),
            o = new i.OO("background", "background-color", {
              scope: r.Scope.INLINE,
            });
        },
        7391: function (t, e, n) {
          "use strict";
          n.d(e, {
            EK: function () {
              return f;
            },
            ZP: function () {
              return h;
            },
            se: function () {
              return c;
            },
          });
          var r = n(3500),
            i = n(8474),
            s = n(5191),
            o = n(784),
            l = n(3583),
            a = n(5019),
            u = n(250);
          class c extends a.Z {
            static create(t) {
              const e = super.create(t);
              return e.setAttribute("spellcheck", "false"), e;
            }
            code(t, e) {
              return this.children
                .map((t) => (t.length() <= 1 ? "" : t.domNode.innerText))
                .join("\n")
                .slice(t, t + e);
            }
            html(t, e) {
              return `<pre>\n${(0, l.b)(this.code(t, e))}\n</pre>`;
            }
          }
          class h extends r.ZP {
            static TAB = "  ";
            static register() {
              u.ZP.register(c);
            }
          }
          class f extends o.Z {}
          (f.blotName = "code"),
            (f.tagName = "CODE"),
            (h.blotName = "code-block"),
            (h.className = "ql-code-block"),
            (h.tagName = "DIV"),
            (c.blotName = "code-block-container"),
            (c.className = "ql-code-block-container"),
            (c.tagName = "DIV"),
            (c.allowedChildren = [h]),
            (h.allowedChildren = [l.Z, i.Z, s.Z]),
            (h.requiredContainer = c);
        },
        2179: function (t, e, n) {
          "use strict";
          n.d(e, {
            HQ: function () {
              return o;
            },
            Hn: function () {
              return s;
            },
            OO: function () {
              return i;
            },
          });
          var r = n(8473);
          class i extends r.StyleAttributor {
            value(t) {
              let e = super.value(t);
              return e.startsWith("rgb(")
                ? ((e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")),
                  `#${e
                    .split(",")
                    .map((t) => `00${parseInt(t, 10).toString(16)}`.slice(-2))
                    .join("")}`)
                : e;
            }
          }
          const s = new r.ClassAttributor("color", "ql-color", {
              scope: r.Scope.INLINE,
            }),
            o = new i("color", "color", { scope: r.Scope.INLINE });
        },
        6880: function (t, e, n) {
          "use strict";
          n.d(e, {
            H8: function () {
              return l;
            },
            IF: function () {
              return s;
            },
            hY: function () {
              return o;
            },
          });
          var r = n(8473);
          const i = { scope: r.Scope.BLOCK, whitelist: ["rtl"] },
            s = new r.Attributor("direction", "dir", i),
            o = new r.ClassAttributor("direction", "ql-direction", i),
            l = new r.StyleAttributor("direction", "direction", i);
        },
        5351: function (t, e, n) {
          "use strict";
          n.d(e, {
            H: function () {
              return l;
            },
            _: function () {
              return s;
            },
          });
          var r = n(8473);
          const i = {
              scope: r.Scope.INLINE,
              whitelist: ["serif", "monospace"],
            },
            s = new r.ClassAttributor("font", "ql-font", i);
          class o extends r.StyleAttributor {
            value(t) {
              return super.value(t).replace(/["']/g, "");
            }
          }
          const l = new o("font", "font-family", i);
        },
        8312: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return s;
            },
            m: function () {
              return i;
            },
          });
          var r = n(8473);
          const i = new r.ClassAttributor("size", "ql-size", {
              scope: r.Scope.INLINE,
              whitelist: ["small", "large", "huge"],
            }),
            s = new r.StyleAttributor("size", "font-size", {
              scope: r.Scope.INLINE,
              whitelist: ["10px", "18px", "32px"],
            });
        },
        2173: function (t, e, n) {
          "use strict";
          n.d(e, {
            ZP: function () {
              return O;
            },
            fw: function () {
              return P;
            },
          });
          var r = n(8473),
            i = n(1702),
            s = n.n(i),
            o = n(3500),
            l = n(1204),
            a = n(8103),
            u = n(250),
            c = n(767),
            h = n(4352),
            f = n(7391),
            d = n(2179),
            p = n(6880),
            g = n(5351),
            m = n(8312),
            v = n(4283);
          const b = /font-weight:\s*normal/,
            y = ["P", "OL", "UL"],
            _ = (t) => t && y.includes(t.tagName);
          var x = n(6635),
            w = n.n(x);
          const N = /\bmso-list:[^;]*ignore/i,
            E = /\bmso-list:[^;]*\bl(\d+)/i,
            A = /\bmso-list:[^;]*\blevel(\d+)/i,
            k = [
              function (t) {
                "urn:schemas-microsoft-com:office:word" ===
                  t.documentElement.getAttribute("xmlns:w") &&
                  ((t) => {
                    const e = Array.from(
                        t.querySelectorAll("[style*=mso-list]")
                      ),
                      [n, r] = w().partition(e, (t) =>
                        (t.getAttribute("style") || "").match(N)
                      );
                    n.forEach((t) => t.parentNode?.removeChild(t));
                    const i = t.documentElement.innerHTML,
                      s = r
                        .map((t) =>
                          ((t, e) => {
                            const n = t.getAttribute("style"),
                              r = n?.match(E);
                            if (!r) return null;
                            const i = Number(r[1]),
                              s = n?.match(A),
                              o = s ? Number(s[1]) : 1,
                              l = new RegExp(
                                `@list l${i}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`,
                                "i"
                              ),
                              a = e.match(l);
                            return {
                              id: i,
                              indent: o,
                              type:
                                a && "bullet" === a[1] ? "bullet" : "ordered",
                              element: t,
                            };
                          })(t, i)
                        )
                        .filter((t) => t);
                    for (; s.length; ) {
                      const t = [];
                      let e = s.shift();
                      for (; e; )
                        t.push(e),
                          (e =
                            s.length &&
                            s[0]?.element === e.element.nextElementSibling &&
                            s[0].id === e.id
                              ? s.shift()
                              : null);
                      const n = document.createElement("ul");
                      t.forEach((t) => {
                        const e = document.createElement("li");
                        e.setAttribute("data-list", t.type),
                          t.indent > 1 &&
                            e.setAttribute(
                              "class",
                              "ql-indent-" + (t.indent - 1)
                            ),
                          (e.innerHTML = t.element.innerHTML),
                          n.appendChild(e);
                      });
                      const r = t[0]?.element,
                        { parentNode: i } = r ?? {};
                      r && i?.replaceChild(n, r),
                        t.slice(1).forEach((t) => {
                          let { element: e } = t;
                          i?.removeChild(e);
                        });
                    }
                  })(t);
              },
              function (t) {
                t.querySelector('[id^="docs-internal-guid-"]') &&
                  (((t) => {
                    Array.from(t.querySelectorAll('b[style*="font-weight"]'))
                      .filter((t) => t.getAttribute("style")?.match(b))
                      .forEach((e) => {
                        const n = t.createDocumentFragment();
                        n.append(...e.childNodes),
                          e.parentNode?.replaceChild(n, e);
                      });
                  })(t),
                  ((t) => {
                    Array.from(t.querySelectorAll("br"))
                      .filter(
                        (t) =>
                          _(t.previousElementSibling) && _(t.nextElementSibling)
                      )
                      .forEach((t) => {
                        t.parentNode?.removeChild(t);
                      });
                  })(t));
              },
            ];
          const q = (0, l.Z)("quill:clipboard"),
            Z = [
              [
                Node.TEXT_NODE,
                function (t, e, n) {
                  let r = t.data;
                  if ("O:P" === t.parentElement?.tagName)
                    return e.insert(r.trim());
                  if (!I(t)) {
                    if (
                      0 === r.trim().length &&
                      r.includes("\n") &&
                      !(function (t, e) {
                        return (
                          t.previousElementSibling &&
                          t.nextElementSibling &&
                          !C(t.previousElementSibling, e) &&
                          !C(t.nextElementSibling, e)
                        );
                      })(t, n)
                    )
                      return e;
                    const i = (t, e) => {
                      const n = e.replace(/[^\u00a0]/g, "");
                      return n.length < 1 && t ? " " : n;
                    };
                    (r = r.replace(/\r\n/g, " ").replace(/\n/g, " ")),
                      (r = r.replace(/\s\s+/g, i.bind(i, !0))),
                      ((null == t.previousSibling &&
                        null != t.parentElement &&
                        C(t.parentElement, n)) ||
                        (t.previousSibling instanceof Element &&
                          C(t.previousSibling, n))) &&
                        (r = r.replace(/^\s+/, i.bind(i, !1))),
                      ((null == t.nextSibling &&
                        null != t.parentElement &&
                        C(t.parentElement, n)) ||
                        (t.nextSibling instanceof Element &&
                          C(t.nextSibling, n))) &&
                        (r = r.replace(/\s+$/, i.bind(i, !1)));
                  }
                  return e.insert(r);
                },
              ],
              [Node.TEXT_NODE, M],
              [
                "br",
                function (t, e) {
                  return j(e, "\n") || e.insert("\n"), e;
                },
              ],
              [Node.ELEMENT_NODE, M],
              [
                Node.ELEMENT_NODE,
                function (t, e, n) {
                  const i = n.query(t);
                  if (null == i) return e;
                  if (i.prototype instanceof r.EmbedBlot) {
                    const e = {},
                      r = i.value(t);
                    if (null != r)
                      return (
                        (e[i.blotName] = r),
                        new (s())().insert(e, i.formats(t, n))
                      );
                  } else if (
                    (i.prototype instanceof r.BlockBlot &&
                      !j(e, "\n") &&
                      e.insert("\n"),
                    "blotName" in i &&
                      "formats" in i &&
                      "function" == typeof i.formats)
                  )
                    return T(e, i.blotName, i.formats(t, n), n);
                  return e;
                },
              ],
              [
                Node.ELEMENT_NODE,
                function (t, e, n) {
                  const i = r.Attributor.keys(t),
                    s = r.ClassAttributor.keys(t),
                    o = r.StyleAttributor.keys(t),
                    l = {};
                  return (
                    i
                      .concat(s)
                      .concat(o)
                      .forEach((e) => {
                        let i = n.query(e, r.Scope.ATTRIBUTE);
                        (null != i &&
                          ((l[i.attrName] = i.value(t)), l[i.attrName])) ||
                          ((i = S[e]),
                          null == i ||
                            (i.attrName !== e && i.keyName !== e) ||
                            (l[i.attrName] = i.value(t) || void 0),
                          (i = L[e]),
                          null == i ||
                            (i.attrName !== e && i.keyName !== e) ||
                            ((i = L[e]),
                            (l[i.attrName] = i.value(t) || void 0)));
                      }),
                    Object.entries(l).reduce((t, e) => {
                      let [r, i] = e;
                      return T(t, r, i, n);
                    }, e)
                  );
                },
              ],
              [
                Node.ELEMENT_NODE,
                function (t, e, n) {
                  const r = {},
                    i = t.style || {};
                  return (
                    "italic" === i.fontStyle && (r.italic = !0),
                    "underline" === i.textDecoration && (r.underline = !0),
                    "line-through" === i.textDecoration && (r.strike = !0),
                    (i.fontWeight?.startsWith("bold") ||
                      parseInt(i.fontWeight, 10) >= 700) &&
                      (r.bold = !0),
                    (e = Object.entries(r).reduce((t, e) => {
                      let [r, i] = e;
                      return T(t, r, i, n);
                    }, e)),
                    parseFloat(i.textIndent || 0) > 0
                      ? new (s())().insert("\t").concat(e)
                      : e
                  );
                },
              ],
              [
                "li",
                function (t, e, n) {
                  const r = n.query(t);
                  if (null == r || "list" !== r.blotName || !j(e, "\n"))
                    return e;
                  let i = -1,
                    o = t.parentNode;
                  for (; null != o; )
                    ["OL", "UL"].includes(o.tagName) && (i += 1),
                      (o = o.parentNode);
                  return i <= 0
                    ? e
                    : e.reduce(
                        (t, e) =>
                          e.attributes && "number" == typeof e.attributes.indent
                            ? t.push(e)
                            : t.insert(e.insert, {
                                indent: i,
                                ...(e.attributes || {}),
                              }),
                        new (s())()
                      );
                },
              ],
              [
                "ol, ul",
                function (t, e, n) {
                  return T(
                    e,
                    "list",
                    "OL" === t.tagName ? "ordered" : "bullet",
                    n
                  );
                },
              ],
              [
                "pre",
                function (t, e, n) {
                  const r = n.query("code-block");
                  return T(
                    e,
                    "code-block",
                    !r ||
                      !("formats" in r) ||
                      "function" != typeof r.formats ||
                      r.formats(t, n),
                    n
                  );
                },
              ],
              [
                "tr",
                function (t, e, n) {
                  const r =
                    "TABLE" === t.parentElement?.tagName
                      ? t.parentElement
                      : t.parentElement?.parentElement;
                  return null != r
                    ? T(
                        e,
                        "table",
                        Array.from(r.querySelectorAll("tr")).indexOf(t) + 1,
                        n
                      )
                    : e;
                },
              ],
              ["b", B("bold")],
              ["i", B("italic")],
              ["strike", B("strike")],
              [
                "style",
                function () {
                  return new (s())();
                },
              ],
            ],
            S = [c.if, p.IF].reduce((t, e) => ((t[e.keyName] = e), t), {}),
            L = [c.HE, h.w, d.HQ, p.H8, g.H, m.Z].reduce(
              (t, e) => ((t[e.keyName] = e), t),
              {}
            );
          class O extends a.Z {
            constructor(t, e) {
              super(t, e),
                this.quill.root.addEventListener("copy", (t) =>
                  this.onCaptureCopy(t, !1)
                ),
                this.quill.root.addEventListener("cut", (t) =>
                  this.onCaptureCopy(t, !0)
                ),
                this.quill.root.addEventListener(
                  "paste",
                  this.onCapturePaste.bind(this)
                ),
                (this.matchers = []),
                Z.concat(this.options.matchers).forEach((t) => {
                  let [e, n] = t;
                  this.addMatcher(e, n);
                });
            }
            addMatcher(t, e) {
              this.matchers.push([t, e]);
            }
            convert(t) {
              let { html: e, text: n } = t,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (r[f.ZP.blotName])
                return new (s())().insert(n || "", {
                  [f.ZP.blotName]: r[f.ZP.blotName],
                });
              if (!e) return new (s())().insert(n || "", r);
              const i = this.convertHTML(e);
              return j(i, "\n") &&
                (null == i.ops[i.ops.length - 1].attributes || r.table)
                ? i.compose(new (s())().retain(i.length() - 1).delete(1))
                : i;
            }
            normalizeHTML(t) {
              ((t) => {
                t.documentElement &&
                  k.forEach((e) => {
                    e(t);
                  });
              })(t);
            }
            convertHTML(t) {
              const e = new DOMParser().parseFromString(t, "text/html");
              this.normalizeHTML(e);
              const n = e.body,
                r = new WeakMap(),
                [i, s] = this.prepareMatching(n, r);
              return P(this.quill.scroll, n, i, s, r);
            }
            dangerouslyPasteHTML(t, e) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : u.ZP.sources.API;
              if ("string" == typeof t) {
                const n = this.convert({ html: t, text: "" });
                this.quill.setContents(n, e),
                  this.quill.setSelection(0, u.ZP.sources.SILENT);
              } else {
                const r = this.convert({ html: e, text: "" });
                this.quill.updateContents(new (s())().retain(t).concat(r), n),
                  this.quill.setSelection(t + r.length(), u.ZP.sources.SILENT);
              }
            }
            onCaptureCopy(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (t.defaultPrevented) return;
              t.preventDefault();
              const [n] = this.quill.selection.getRange();
              if (null == n) return;
              const { html: r, text: i } = this.onCopy(n, e);
              t.clipboardData?.setData("text/plain", i),
                t.clipboardData?.setData("text/html", r),
                e && (0, v.WQ)({ range: n, quill: this.quill });
            }
            onCapturePaste(t) {
              if (t.defaultPrevented || !this.quill.isEnabled()) return;
              t.preventDefault();
              const e = this.quill.getSelection(!0);
              if (null == e) return;
              const n = t.clipboardData?.getData("text/html"),
                r = t.clipboardData?.getData("text/plain"),
                i = Array.from(t.clipboardData?.files || []);
              if (!n && i.length > 0) this.quill.uploader.upload(e, i);
              else {
                if (n && i.length > 0) {
                  const t = new DOMParser().parseFromString(n, "text/html");
                  if (
                    1 === t.body.childElementCount &&
                    "IMG" === t.body.firstElementChild?.tagName
                  )
                    return void this.quill.uploader.upload(e, i);
                }
                this.onPaste(e, { html: n, text: r });
              }
            }
            onCopy(t) {
              const e = this.quill.getText(t);
              return { html: this.quill.getSemanticHTML(t), text: e };
            }
            onPaste(t, e) {
              let { text: n, html: r } = e;
              const i = this.quill.getFormat(t.index),
                o = this.convert({ text: n, html: r }, i);
              q.log("onPaste", o, { text: n, html: r });
              const l = new (s())().retain(t.index).delete(t.length).concat(o);
              this.quill.updateContents(l, u.ZP.sources.USER),
                this.quill.setSelection(
                  l.length() - t.length,
                  u.ZP.sources.SILENT
                ),
                this.quill.scrollSelectionIntoView();
            }
            prepareMatching(t, e) {
              const n = [],
                r = [];
              return (
                this.matchers.forEach((i) => {
                  const [s, o] = i;
                  switch (s) {
                    case Node.TEXT_NODE:
                      r.push(o);
                      break;
                    case Node.ELEMENT_NODE:
                      n.push(o);
                      break;
                    default:
                      Array.from(t.querySelectorAll(s)).forEach((t) => {
                        if (e.has(t)) {
                          const n = e.get(t);
                          n?.push(o);
                        } else e.set(t, [o]);
                      });
                  }
                }),
                [n, r]
              );
            }
          }
          function T(t, e, n, r) {
            return r.query(e)
              ? t.reduce((t, r) => {
                  if (r.attributes && r.attributes[e]) return t.push(r);
                  const i = n ? { [e]: n } : {};
                  return t.insert(r.insert, { ...i, ...r.attributes });
                }, new (s())())
              : t;
          }
          function j(t, e) {
            let n = "";
            for (let r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
              const e = t.ops[r];
              if ("string" != typeof e.insert) break;
              n = e.insert + n;
            }
            return n.slice(-1 * e.length) === e;
          }
          function C(t, e) {
            if (!(t instanceof Element)) return !1;
            const n = e.query(t);
            return (
              !(n && n.prototype instanceof r.EmbedBlot) &&
              [
                "address",
                "article",
                "blockquote",
                "canvas",
                "dd",
                "div",
                "dl",
                "dt",
                "fieldset",
                "figcaption",
                "figure",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "header",
                "iframe",
                "li",
                "main",
                "nav",
                "ol",
                "output",
                "p",
                "pre",
                "section",
                "table",
                "td",
                "tr",
                "ul",
                "video",
              ].includes(t.tagName.toLowerCase())
            );
          }
          O.DEFAULTS = { matchers: [] };
          const R = new WeakMap();
          function I(t) {
            return (
              null != t &&
              (R.has(t) ||
                ("PRE" === t.tagName
                  ? R.set(t, !0)
                  : R.set(t, I(t.parentNode))),
              R.get(t))
            );
          }
          function P(t, e, n, r, i) {
            return e.nodeType === e.TEXT_NODE
              ? r.reduce((n, r) => r(e, n, t), new (s())())
              : e.nodeType === e.ELEMENT_NODE
              ? Array.from(e.childNodes || []).reduce((s, o) => {
                  let l = P(t, o, n, r, i);
                  return (
                    o.nodeType === e.ELEMENT_NODE &&
                      ((l = n.reduce((e, n) => n(o, e, t), l)),
                      (l = (i.get(o) || []).reduce((e, n) => n(o, e, t), l))),
                    s.concat(l)
                  );
                }, new (s())())
              : new (s())();
          }
          function B(t) {
            return (e, n, r) => T(n, t, !0, r);
          }
          function M(t, e, n) {
            if (!j(e, "\n")) {
              if (C(t, n)) return e.insert("\n");
              if (e.length() > 0 && t.nextSibling) {
                let r = t.nextSibling;
                for (; null != r; ) {
                  if (C(r, n)) return e.insert("\n");
                  const t = n.query(r);
                  if (t && t.prototype instanceof o.i2) return e.insert("\n");
                  r = r.firstChild;
                }
              }
            }
            return e;
          }
        },
        4283: function (t, e, n) {
          "use strict";
          n.d(e, {
            WQ: function () {
              return y;
            },
            ZP: function () {
              return d;
            },
          });
          var r = n(8489),
            i = n(1061),
            s = n(1702),
            o = n.n(s),
            l = n(8473),
            a = n(250),
            u = n(1204),
            c = n(8103);
          const h = (0, u.Z)("quill:keyboard"),
            f = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
          class d extends c.Z {
            static match(t, e) {
              return (
                !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(
                  (n) => !!e[n] !== t[n] && null !== e[n]
                ) &&
                (e.key === t.key || e.key === t.which)
              );
            }
            constructor(t, e) {
              super(t, e),
                (this.bindings = {}),
                Object.keys(this.options.bindings).forEach((t) => {
                  this.options.bindings[t] &&
                    this.addBinding(this.options.bindings[t]);
                }),
                this.addBinding(
                  { key: "Enter", shiftKey: null },
                  this.handleEnter
                ),
                this.addBinding(
                  { key: "Enter", metaKey: null, ctrlKey: null, altKey: null },
                  () => {}
                ),
                /Firefox/i.test(navigator.userAgent)
                  ? (this.addBinding(
                      { key: "Backspace" },
                      { collapsed: !0 },
                      this.handleBackspace
                    ),
                    this.addBinding(
                      { key: "Delete" },
                      { collapsed: !0 },
                      this.handleDelete
                    ))
                  : (this.addBinding(
                      { key: "Backspace" },
                      { collapsed: !0, prefix: /^.?$/ },
                      this.handleBackspace
                    ),
                    this.addBinding(
                      { key: "Delete" },
                      { collapsed: !0, suffix: /^.?$/ },
                      this.handleDelete
                    )),
                this.addBinding(
                  { key: "Backspace" },
                  { collapsed: !1 },
                  this.handleDeleteRange
                ),
                this.addBinding(
                  { key: "Delete" },
                  { collapsed: !1 },
                  this.handleDeleteRange
                ),
                this.addBinding(
                  {
                    key: "Backspace",
                    altKey: null,
                    ctrlKey: null,
                    metaKey: null,
                    shiftKey: null,
                  },
                  { collapsed: !0, offset: 0 },
                  this.handleBackspace
                ),
                this.listen();
            }
            addBinding(t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              const r = (function (t) {
                if ("string" == typeof t || "number" == typeof t)
                  t = { key: t };
                else {
                  if ("object" != typeof t) return null;
                  t = (0, i.Z)(t);
                }
                return (
                  t.shortKey && ((t[f] = t.shortKey), delete t.shortKey), t
                );
              })(t);
              null != r
                ? ("function" == typeof e && (e = { handler: e }),
                  "function" == typeof n && (n = { handler: n }),
                  (Array.isArray(r.key) ? r.key : [r.key]).forEach((t) => {
                    const i = { ...r, key: t, ...e, ...n };
                    (this.bindings[i.key] = this.bindings[i.key] || []),
                      this.bindings[i.key].push(i);
                  }))
                : h.warn("Attempted to add invalid keyboard binding", r);
            }
            listen() {
              this.quill.root.addEventListener("keydown", (t) => {
                if (t.defaultPrevented || t.isComposing) return;
                const e = (this.bindings[t.key] || [])
                  .concat(this.bindings[t.which] || [])
                  .filter((e) => d.match(t, e));
                if (0 === e.length) return;
                const n = a.ZP.find(t.target, !0);
                if (n && n.scroll !== this.quill.scroll) return;
                const i = this.quill.getSelection();
                if (null == i || !this.quill.hasFocus()) return;
                const [s, o] = this.quill.getLine(i.index),
                  [u, c] = this.quill.getLeaf(i.index),
                  [h, f] =
                    0 === i.length
                      ? [u, c]
                      : this.quill.getLeaf(i.index + i.length),
                  p = u instanceof l.TextBlot ? u.value().slice(0, c) : "",
                  g = h instanceof l.TextBlot ? h.value().slice(f) : "",
                  m = {
                    collapsed: 0 === i.length,
                    empty: 0 === i.length && s.length() <= 1,
                    format: this.quill.getFormat(i),
                    line: s,
                    offset: o,
                    prefix: p,
                    suffix: g,
                    event: t,
                  };
                e.some((t) => {
                  if (null != t.collapsed && t.collapsed !== m.collapsed)
                    return !1;
                  if (null != t.empty && t.empty !== m.empty) return !1;
                  if (null != t.offset && t.offset !== m.offset) return !1;
                  if (Array.isArray(t.format)) {
                    if (t.format.every((t) => null == m.format[t])) return !1;
                  } else if (
                    "object" == typeof t.format &&
                    !Object.keys(t.format).every((e) =>
                      !0 === t.format[e]
                        ? null != m.format[e]
                        : !1 === t.format[e]
                        ? null == m.format[e]
                        : (0, r.Z)(t.format[e], m.format[e])
                    )
                  )
                    return !1;
                  return !(
                    (null != t.prefix && !t.prefix.test(m.prefix)) ||
                    (null != t.suffix && !t.suffix.test(m.suffix)) ||
                    !0 === t.handler.call(this, i, m, t)
                  );
                }) && t.preventDefault();
              });
            }
            handleBackspace(t, e) {
              const n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)
                ? 2
                : 1;
              if (0 === t.index || this.quill.getLength() <= 1) return;
              let r = {};
              const [i] = this.quill.getLine(t.index);
              let l = new (o())().retain(t.index - n).delete(n);
              if (0 === e.offset) {
                const [e] = this.quill.getLine(t.index - 1);
                if (e && !("block" === e.statics.blotName && e.length() <= 1)) {
                  const e = i.formats(),
                    n = this.quill.getFormat(t.index - 1, 1);
                  if (
                    ((r = s.AttributeMap.diff(e, n) || {}),
                    Object.keys(r).length > 0)
                  ) {
                    const e = new (o())()
                      .retain(t.index + i.length() - 2)
                      .retain(1, r);
                    l = l.compose(e);
                  }
                }
              }
              this.quill.updateContents(l, a.ZP.sources.USER),
                this.quill.focus();
            }
            handleDelete(t, e) {
              const n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)
                ? 2
                : 1;
              if (t.index >= this.quill.getLength() - n) return;
              let r = {};
              const [i] = this.quill.getLine(t.index);
              let l = new (o())().retain(t.index).delete(n);
              if (e.offset >= i.length() - 1) {
                const [e] = this.quill.getLine(t.index + 1);
                if (e) {
                  const n = i.formats(),
                    o = this.quill.getFormat(t.index, 1);
                  (r = s.AttributeMap.diff(n, o) || {}),
                    Object.keys(r).length > 0 &&
                      (l = l.retain(e.length() - 1).retain(1, r));
                }
              }
              this.quill.updateContents(l, a.ZP.sources.USER),
                this.quill.focus();
            }
            handleDeleteRange(t) {
              y({ range: t, quill: this.quill }), this.quill.focus();
            }
            handleEnter(t, e) {
              const n = Object.keys(e.format).reduce(
                  (t, n) => (
                    this.quill.scroll.query(n, l.Scope.BLOCK) &&
                      !Array.isArray(e.format[n]) &&
                      (t[n] = e.format[n]),
                    t
                  ),
                  {}
                ),
                r = new (o())()
                  .retain(t.index)
                  .delete(t.length)
                  .insert("\n", n);
              this.quill.updateContents(r, a.ZP.sources.USER),
                this.quill.setSelection(t.index + 1, a.ZP.sources.SILENT),
                this.quill.focus();
            }
          }
          const p = {
            bindings: {
              bold: v("bold"),
              italic: v("italic"),
              underline: v("underline"),
              indent: {
                key: "Tab",
                format: ["blockquote", "indent", "list"],
                handler(t, e) {
                  return (
                    !(!e.collapsed || 0 === e.offset) ||
                    (this.quill.format("indent", "+1", a.ZP.sources.USER), !1)
                  );
                },
              },
              outdent: {
                key: "Tab",
                shiftKey: !0,
                format: ["blockquote", "indent", "list"],
                handler(t, e) {
                  return (
                    !(!e.collapsed || 0 === e.offset) ||
                    (this.quill.format("indent", "-1", a.ZP.sources.USER), !1)
                  );
                },
              },
              "outdent backspace": {
                key: "Backspace",
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ["indent", "list"],
                offset: 0,
                handler(t, e) {
                  null != e.format.indent
                    ? this.quill.format("indent", "-1", a.ZP.sources.USER)
                    : null != e.format.list &&
                      this.quill.format("list", !1, a.ZP.sources.USER);
                },
              },
              "indent code-block": g(!0),
              "outdent code-block": g(!1),
              "remove tab": {
                key: "Tab",
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler(t) {
                  this.quill.deleteText(t.index - 1, 1, a.ZP.sources.USER);
                },
              },
              tab: {
                key: "Tab",
                handler(t, e) {
                  if (e.format.table) return !0;
                  this.quill.history.cutoff();
                  const n = new (o())()
                    .retain(t.index)
                    .delete(t.length)
                    .insert("\t");
                  return (
                    this.quill.updateContents(n, a.ZP.sources.USER),
                    this.quill.history.cutoff(),
                    this.quill.setSelection(t.index + 1, a.ZP.sources.SILENT),
                    !1
                  );
                },
              },
              "blockquote empty enter": {
                key: "Enter",
                collapsed: !0,
                format: ["blockquote"],
                empty: !0,
                handler() {
                  this.quill.format("blockquote", !1, a.ZP.sources.USER);
                },
              },
              "list empty enter": {
                key: "Enter",
                collapsed: !0,
                format: ["list"],
                empty: !0,
                handler(t, e) {
                  const n = { list: !1 };
                  e.format.indent && (n.indent = !1),
                    this.quill.formatLine(
                      t.index,
                      t.length,
                      n,
                      a.ZP.sources.USER
                    );
                },
              },
              "checklist enter": {
                key: "Enter",
                collapsed: !0,
                format: { list: "checked" },
                handler(t) {
                  const [e, n] = this.quill.getLine(t.index),
                    r = { ...e.formats(), list: "checked" },
                    i = new (o())()
                      .retain(t.index)
                      .insert("\n", r)
                      .retain(e.length() - n - 1)
                      .retain(1, { list: "unchecked" });
                  this.quill.updateContents(i, a.ZP.sources.USER),
                    this.quill.setSelection(t.index + 1, a.ZP.sources.SILENT),
                    this.quill.scrollSelectionIntoView();
                },
              },
              "header enter": {
                key: "Enter",
                collapsed: !0,
                format: ["header"],
                suffix: /^$/,
                handler(t, e) {
                  const [n, r] = this.quill.getLine(t.index),
                    i = new (o())()
                      .retain(t.index)
                      .insert("\n", e.format)
                      .retain(n.length() - r - 1)
                      .retain(1, { header: null });
                  this.quill.updateContents(i, a.ZP.sources.USER),
                    this.quill.setSelection(t.index + 1, a.ZP.sources.SILENT),
                    this.quill.scrollSelectionIntoView();
                },
              },
              "table backspace": {
                key: "Backspace",
                format: ["table"],
                collapsed: !0,
                offset: 0,
                handler() {},
              },
              "table delete": {
                key: "Delete",
                format: ["table"],
                collapsed: !0,
                suffix: /^$/,
                handler() {},
              },
              "table enter": {
                key: "Enter",
                shiftKey: null,
                format: ["table"],
                handler(t) {
                  const e = this.quill.getModule("table");
                  if (e) {
                    const [n, r, i, s] = e.getTable(t),
                      l = (function (t, e, n, r) {
                        return null == e.prev && null == e.next
                          ? null == n.prev && null == n.next
                            ? 0 === r
                              ? -1
                              : 1
                            : null == n.prev
                            ? -1
                            : 1
                          : null == e.prev
                          ? -1
                          : null == e.next
                          ? 1
                          : null;
                      })(0, r, i, s);
                    if (null == l) return;
                    let u = n.offset();
                    if (l < 0) {
                      const e = new (o())().retain(u).insert("\n");
                      this.quill.updateContents(e, a.ZP.sources.USER),
                        this.quill.setSelection(
                          t.index + 1,
                          t.length,
                          a.ZP.sources.SILENT
                        );
                    } else if (l > 0) {
                      u += n.length();
                      const t = new (o())().retain(u).insert("\n");
                      this.quill.updateContents(t, a.ZP.sources.USER),
                        this.quill.setSelection(u, a.ZP.sources.USER);
                    }
                  }
                },
              },
              "table tab": {
                key: "Tab",
                shiftKey: null,
                format: ["table"],
                handler(t, e) {
                  const { event: n, line: r } = e,
                    i = r.offset(this.quill.scroll);
                  n.shiftKey
                    ? this.quill.setSelection(i - 1, a.ZP.sources.USER)
                    : this.quill.setSelection(
                        i + r.length(),
                        a.ZP.sources.USER
                      );
                },
              },
              "list autofill": {
                key: " ",
                shiftKey: null,
                collapsed: !0,
                format: { "code-block": !1, blockquote: !1, table: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler(t, e) {
                  if (null == this.quill.scroll.query("list")) return !0;
                  const { length: n } = e.prefix,
                    [r, i] = this.quill.getLine(t.index);
                  if (i > n) return !0;
                  let s;
                  switch (e.prefix.trim()) {
                    case "[]":
                    case "[ ]":
                      s = "unchecked";
                      break;
                    case "[x]":
                      s = "checked";
                      break;
                    case "-":
                    case "*":
                      s = "bullet";
                      break;
                    default:
                      s = "ordered";
                  }
                  this.quill.insertText(t.index, " ", a.ZP.sources.USER),
                    this.quill.history.cutoff();
                  const l = new (o())()
                    .retain(t.index - i)
                    .delete(n + 1)
                    .retain(r.length() - 2 - i)
                    .retain(1, { list: s });
                  return (
                    this.quill.updateContents(l, a.ZP.sources.USER),
                    this.quill.history.cutoff(),
                    this.quill.setSelection(t.index - n, a.ZP.sources.SILENT),
                    !1
                  );
                },
              },
              "code exit": {
                key: "Enter",
                collapsed: !0,
                format: ["code-block"],
                prefix: /^$/,
                suffix: /^\s*$/,
                handler(t) {
                  const [e, n] = this.quill.getLine(t.index);
                  let r = 2,
                    i = e;
                  for (
                    ;
                    null != i && i.length() <= 1 && i.formats()["code-block"];

                  )
                    if (((i = i.prev), (r -= 1), r <= 0)) {
                      const r = new (o())()
                        .retain(t.index + e.length() - n - 2)
                        .retain(1, { "code-block": null })
                        .delete(1);
                      return (
                        this.quill.updateContents(r, a.ZP.sources.USER),
                        this.quill.setSelection(
                          t.index - 1,
                          a.ZP.sources.SILENT
                        ),
                        !1
                      );
                    }
                  return !0;
                },
              },
              "embed left": m("ArrowLeft", !1),
              "embed left shift": m("ArrowLeft", !0),
              "embed right": m("ArrowRight", !1),
              "embed right shift": m("ArrowRight", !0),
              "table down": b(!1),
              "table up": b(!0),
            },
          };
          function g(t) {
            return {
              key: "Tab",
              shiftKey: !t,
              format: { "code-block": !0 },
              handler(e, n) {
                let { event: r } = n;
                const i = this.quill.scroll.query("code-block"),
                  { TAB: s } = i;
                if (0 === e.length && !r.shiftKey)
                  return (
                    this.quill.insertText(e.index, s, a.ZP.sources.USER),
                    void this.quill.setSelection(
                      e.index + s.length,
                      a.ZP.sources.SILENT
                    )
                  );
                const o =
                  0 === e.length
                    ? this.quill.getLines(e.index, 1)
                    : this.quill.getLines(e);
                let { index: l, length: u } = e;
                o.forEach((e, n) => {
                  t
                    ? (e.insertAt(0, s),
                      0 === n ? (l += s.length) : (u += s.length))
                    : e.domNode.textContent.startsWith(s) &&
                      (e.deleteAt(0, s.length),
                      0 === n ? (l -= s.length) : (u -= s.length));
                }),
                  this.quill.update(a.ZP.sources.USER),
                  this.quill.setSelection(l, u, a.ZP.sources.SILENT);
              },
            };
          }
          function m(t, e) {
            return {
              key: t,
              shiftKey: e,
              altKey: null,
              ["ArrowLeft" === t ? "prefix" : "suffix"]: /^$/,
              handler(n) {
                let { index: r } = n;
                "ArrowRight" === t && (r += n.length + 1);
                const [i] = this.quill.getLeaf(r);
                return !(
                  i instanceof l.EmbedBlot &&
                  ("ArrowLeft" === t
                    ? e
                      ? this.quill.setSelection(
                          n.index - 1,
                          n.length + 1,
                          a.ZP.sources.USER
                        )
                      : this.quill.setSelection(n.index - 1, a.ZP.sources.USER)
                    : e
                    ? this.quill.setSelection(
                        n.index,
                        n.length + 1,
                        a.ZP.sources.USER
                      )
                    : this.quill.setSelection(
                        n.index + n.length + 1,
                        a.ZP.sources.USER
                      ),
                  1)
                );
              },
            };
          }
          function v(t) {
            return {
              key: t[0],
              shortKey: !0,
              handler(e, n) {
                this.quill.format(t, !n.format[t], a.ZP.sources.USER);
              },
            };
          }
          function b(t) {
            return {
              key: t ? "ArrowUp" : "ArrowDown",
              collapsed: !0,
              format: ["table"],
              handler(e, n) {
                const r = t ? "prev" : "next",
                  i = n.line,
                  s = i.parent[r];
                if (null != s) {
                  if ("table-row" === s.statics.blotName) {
                    let t = s.children.head,
                      e = i;
                    for (; null != e.prev; ) (e = e.prev), (t = t.next);
                    const r =
                      t.offset(this.quill.scroll) +
                      Math.min(n.offset, t.length() - 1);
                    this.quill.setSelection(r, 0, a.ZP.sources.USER);
                  }
                } else {
                  const e = i.table()[r];
                  null != e &&
                    (t
                      ? this.quill.setSelection(
                          e.offset(this.quill.scroll) + e.length() - 1,
                          0,
                          a.ZP.sources.USER
                        )
                      : this.quill.setSelection(
                          e.offset(this.quill.scroll),
                          0,
                          a.ZP.sources.USER
                        ));
                }
                return !1;
              },
            };
          }
          function y(t) {
            let { quill: e, range: n } = t;
            const r = e.getLines(n);
            let i = {};
            if (r.length > 1) {
              const t = r[0].formats(),
                e = r[r.length - 1].formats();
              i = s.AttributeMap.diff(e, t) || {};
            }
            e.deleteText(n, a.ZP.sources.USER),
              Object.keys(i).length > 0 &&
                e.formatLine(n.index, 1, i, a.ZP.sources.USER),
              e.setSelection(n.index, a.ZP.sources.SILENT);
          }
          d.DEFAULTS = p;
        },
        9661: function (t) {
          var e = -1,
            n = 1,
            r = 0;
          function i(t, g, m, v, b) {
            if (t === g) return t ? [[r, t]] : [];
            if (null != m) {
              var _ = (function (t, e, n) {
                var r =
                    "number" == typeof n ? { index: n, length: 0 } : n.oldRange,
                  i = "number" == typeof n ? null : n.newRange,
                  s = t.length,
                  o = e.length;
                if (0 === r.length && (null === i || 0 === i.length)) {
                  var l = r.index,
                    a = t.slice(0, l),
                    u = t.slice(l),
                    c = i ? i.index : null,
                    h = l + o - s;
                  if ((null === c || c === h) && !(h < 0 || h > o)) {
                    var f = e.slice(0, h);
                    if ((g = e.slice(h)) === u) {
                      var d = Math.min(l, h);
                      if ((v = a.slice(0, d)) === (_ = f.slice(0, d)))
                        return y(v, a.slice(d), f.slice(d), u);
                    }
                  }
                  if (null === c || c === l) {
                    var p = l,
                      g = ((f = e.slice(0, p)), e.slice(p));
                    if (f === a) {
                      var m = Math.min(s - p, o - p);
                      if (
                        (b = u.slice(u.length - m)) ===
                        (x = g.slice(g.length - m))
                      )
                        return y(
                          a,
                          u.slice(0, u.length - m),
                          g.slice(0, g.length - m),
                          b
                        );
                    }
                  }
                }
                if (r.length > 0 && i && 0 === i.length) {
                  var v = t.slice(0, r.index),
                    b = t.slice(r.index + r.length);
                  if (!(o < (d = v.length) + (m = b.length))) {
                    var _ = e.slice(0, d),
                      x = e.slice(o - m);
                    if (v === _ && b === x)
                      return y(v, t.slice(d, s - m), e.slice(d, o - m), b);
                  }
                }
                return null;
              })(t, g, m);
              if (_) return _;
            }
            var x = o(t, g),
              w = t.substring(0, x);
            x = a((t = t.substring(x)), (g = g.substring(x)));
            var N = t.substring(t.length - x),
              E = (function (t, l) {
                var u;
                if (!t) return [[n, l]];
                if (!l) return [[e, t]];
                var c = t.length > l.length ? t : l,
                  h = t.length > l.length ? l : t,
                  f = c.indexOf(h);
                if (-1 !== f)
                  return (
                    (u = [
                      [n, c.substring(0, f)],
                      [r, h],
                      [n, c.substring(f + h.length)],
                    ]),
                    t.length > l.length && (u[0][0] = u[2][0] = e),
                    u
                  );
                if (1 === h.length)
                  return [
                    [e, t],
                    [n, l],
                  ];
                var d = (function (t, e) {
                  var n = t.length > e.length ? t : e,
                    r = t.length > e.length ? e : t;
                  if (n.length < 4 || 2 * r.length < n.length) return null;
                  function i(t, e, n) {
                    for (
                      var r,
                        i,
                        s,
                        l,
                        u = t.substring(n, n + Math.floor(t.length / 4)),
                        c = -1,
                        h = "";
                      -1 !== (c = e.indexOf(u, c + 1));

                    ) {
                      var f = o(t.substring(n), e.substring(c)),
                        d = a(t.substring(0, n), e.substring(0, c));
                      h.length < d + f &&
                        ((h = e.substring(c - d, c) + e.substring(c, c + f)),
                        (r = t.substring(0, n - d)),
                        (i = t.substring(n + f)),
                        (s = e.substring(0, c - d)),
                        (l = e.substring(c + f)));
                    }
                    return 2 * h.length >= t.length ? [r, i, s, l, h] : null;
                  }
                  var s,
                    l,
                    u,
                    c,
                    h,
                    f = i(n, r, Math.ceil(n.length / 4)),
                    d = i(n, r, Math.ceil(n.length / 2));
                  return f || d
                    ? ((s = d ? (f && f[4].length > d[4].length ? f : d) : f),
                      t.length > e.length
                        ? ((l = s[0]), (u = s[1]), (c = s[2]), (h = s[3]))
                        : ((c = s[0]), (h = s[1]), (l = s[2]), (u = s[3])),
                      [l, u, c, h, s[4]])
                    : null;
                })(t, l);
                if (d) {
                  var p = d[0],
                    g = d[1],
                    m = d[2],
                    v = d[3],
                    b = d[4],
                    y = i(p, m),
                    _ = i(g, v);
                  return y.concat([[r, b]], _);
                }
                return (function (t, r) {
                  for (
                    var i = t.length,
                      o = r.length,
                      l = Math.ceil((i + o) / 2),
                      a = l,
                      u = 2 * l,
                      c = new Array(u),
                      h = new Array(u),
                      f = 0;
                    f < u;
                    f++
                  )
                    (c[f] = -1), (h[f] = -1);
                  (c[a + 1] = 0), (h[a + 1] = 0);
                  for (
                    var d = i - o,
                      p = d % 2 != 0,
                      g = 0,
                      m = 0,
                      v = 0,
                      b = 0,
                      y = 0;
                    y < l;
                    y++
                  ) {
                    for (var _ = -y + g; _ <= y - m; _ += 2) {
                      for (
                        var x = a + _,
                          w =
                            (q =
                              _ === -y || (_ !== y && c[x - 1] < c[x + 1])
                                ? c[x + 1]
                                : c[x - 1] + 1) - _;
                        q < i && w < o && t.charAt(q) === r.charAt(w);

                      )
                        q++, w++;
                      if (((c[x] = q), q > i)) m += 2;
                      else if (w > o) g += 2;
                      else if (
                        p &&
                        (A = a + d - _) >= 0 &&
                        A < u &&
                        -1 !== h[A] &&
                        q >= (E = i - h[A])
                      )
                        return s(t, r, q, w);
                    }
                    for (var N = -y + v; N <= y - b; N += 2) {
                      for (
                        var E,
                          A = a + N,
                          k =
                            (E =
                              N === -y || (N !== y && h[A - 1] < h[A + 1])
                                ? h[A + 1]
                                : h[A - 1] + 1) - N;
                        E < i &&
                        k < o &&
                        t.charAt(i - E - 1) === r.charAt(o - k - 1);

                      )
                        E++, k++;
                      if (((h[A] = E), E > i)) b += 2;
                      else if (k > o) v += 2;
                      else if (!p) {
                        var q;
                        if ((x = a + d - N) >= 0 && x < u && -1 !== c[x])
                          if (((w = a + (q = c[x]) - x), q >= (E = i - E)))
                            return s(t, r, q, w);
                      }
                    }
                  }
                  return [
                    [e, t],
                    [n, r],
                  ];
                })(t, l);
              })(
                (t = t.substring(0, t.length - x)),
                (g = g.substring(0, g.length - x))
              );
            return (
              w && E.unshift([r, w]),
              N && E.push([r, N]),
              p(E, b),
              v &&
                (function (t) {
                  for (
                    var i = !1,
                      s = [],
                      o = 0,
                      g = null,
                      m = 0,
                      v = 0,
                      b = 0,
                      y = 0,
                      _ = 0;
                    m < t.length;

                  )
                    t[m][0] == r
                      ? ((s[o++] = m),
                        (v = y),
                        (b = _),
                        (y = 0),
                        (_ = 0),
                        (g = t[m][1]))
                      : (t[m][0] == n
                          ? (y += t[m][1].length)
                          : (_ += t[m][1].length),
                        g &&
                          g.length <= Math.max(v, b) &&
                          g.length <= Math.max(y, _) &&
                          (t.splice(s[o - 1], 0, [e, g]),
                          (t[s[o - 1] + 1][0] = n),
                          o--,
                          (m = --o > 0 ? s[o - 1] : -1),
                          (v = 0),
                          (b = 0),
                          (y = 0),
                          (_ = 0),
                          (g = null),
                          (i = !0))),
                      m++;
                  for (
                    i && p(t),
                      (function (t) {
                        function e(t, e) {
                          if (!t || !e) return 6;
                          var n = t.charAt(t.length - 1),
                            r = e.charAt(0),
                            i = n.match(u),
                            s = r.match(u),
                            o = i && n.match(c),
                            l = s && r.match(c),
                            a = o && n.match(h),
                            p = l && r.match(h),
                            g = a && t.match(f),
                            m = p && e.match(d);
                          return g || m
                            ? 5
                            : a || p
                            ? 4
                            : i && !o && l
                            ? 3
                            : o || l
                            ? 2
                            : i || s
                            ? 1
                            : 0;
                        }
                        for (var n = 1; n < t.length - 1; ) {
                          if (t[n - 1][0] == r && t[n + 1][0] == r) {
                            var i = t[n - 1][1],
                              s = t[n][1],
                              o = t[n + 1][1],
                              l = a(i, s);
                            if (l) {
                              var p = s.substring(s.length - l);
                              (i = i.substring(0, i.length - l)),
                                (s = p + s.substring(0, s.length - l)),
                                (o = p + o);
                            }
                            for (
                              var g = i, m = s, v = o, b = e(i, s) + e(s, o);
                              s.charAt(0) === o.charAt(0);

                            ) {
                              (i += s.charAt(0)),
                                (s = s.substring(1) + o.charAt(0)),
                                (o = o.substring(1));
                              var y = e(i, s) + e(s, o);
                              y >= b && ((b = y), (g = i), (m = s), (v = o));
                            }
                            t[n - 1][1] != g &&
                              (g
                                ? (t[n - 1][1] = g)
                                : (t.splice(n - 1, 1), n--),
                              (t[n][1] = m),
                              v
                                ? (t[n + 1][1] = v)
                                : (t.splice(n + 1, 1), n--));
                          }
                          n++;
                        }
                      })(t),
                      m = 1;
                    m < t.length;

                  ) {
                    if (t[m - 1][0] == e && t[m][0] == n) {
                      var x = t[m - 1][1],
                        w = t[m][1],
                        N = l(x, w),
                        E = l(w, x);
                      N >= E
                        ? (N >= x.length / 2 || N >= w.length / 2) &&
                          (t.splice(m, 0, [r, w.substring(0, N)]),
                          (t[m - 1][1] = x.substring(0, x.length - N)),
                          (t[m + 1][1] = w.substring(N)),
                          m++)
                        : (E >= x.length / 2 || E >= w.length / 2) &&
                          (t.splice(m, 0, [r, x.substring(0, E)]),
                          (t[m - 1][0] = n),
                          (t[m - 1][1] = w.substring(0, w.length - E)),
                          (t[m + 1][0] = e),
                          (t[m + 1][1] = x.substring(E)),
                          m++),
                        m++;
                    }
                    m++;
                  }
                })(E),
              E
            );
          }
          function s(t, e, n, r) {
            var s = t.substring(0, n),
              o = e.substring(0, r),
              l = t.substring(n),
              a = e.substring(r),
              u = i(s, o),
              c = i(l, a);
            return u.concat(c);
          }
          function o(t, e) {
            if (!t || !e || t.charAt(0) !== e.charAt(0)) return 0;
            for (
              var n = 0, r = Math.min(t.length, e.length), i = r, s = 0;
              n < i;

            )
              t.substring(s, i) == e.substring(s, i) ? (s = n = i) : (r = i),
                (i = Math.floor((r - n) / 2 + n));
            return g(t.charCodeAt(i - 1)) && i--, i;
          }
          function l(t, e) {
            var n = t.length,
              r = e.length;
            if (0 == n || 0 == r) return 0;
            n > r ? (t = t.substring(n - r)) : n < r && (e = e.substring(0, n));
            var i = Math.min(n, r);
            if (t == e) return i;
            for (var s = 0, o = 1; ; ) {
              var l = t.substring(i - o),
                a = e.indexOf(l);
              if (-1 == a) return s;
              (o += a),
                (0 != a && t.substring(i - o) != e.substring(0, o)) ||
                  ((s = o), o++);
            }
          }
          function a(t, e) {
            if (!t || !e || t.slice(-1) !== e.slice(-1)) return 0;
            for (
              var n = 0, r = Math.min(t.length, e.length), i = r, s = 0;
              n < i;

            )
              t.substring(t.length - i, t.length - s) ==
              e.substring(e.length - i, e.length - s)
                ? (s = n = i)
                : (r = i),
                (i = Math.floor((r - n) / 2 + n));
            return m(t.charCodeAt(t.length - i)) && i--, i;
          }
          var u = /[^a-zA-Z0-9]/,
            c = /\s/,
            h = /[\r\n]/,
            f = /\n\r?\n$/,
            d = /^\r?\n\r?\n/;
          function p(t, i) {
            t.push([r, ""]);
            for (var s, l = 0, u = 0, c = 0, h = "", f = ""; l < t.length; )
              if (l < t.length - 1 && !t[l][1]) t.splice(l, 1);
              else
                switch (t[l][0]) {
                  case n:
                    c++, (f += t[l][1]), l++;
                    break;
                  case e:
                    u++, (h += t[l][1]), l++;
                    break;
                  case r:
                    var d = l - c - u - 1;
                    if (i) {
                      if (d >= 0 && b(t[d][1])) {
                        var g = t[d][1].slice(-1);
                        if (
                          ((t[d][1] = t[d][1].slice(0, -1)),
                          (h = g + h),
                          (f = g + f),
                          !t[d][1])
                        ) {
                          t.splice(d, 1), l--;
                          var m = d - 1;
                          t[m] &&
                            t[m][0] === n &&
                            (c++, (f = t[m][1] + f), m--),
                            t[m] &&
                              t[m][0] === e &&
                              (u++, (h = t[m][1] + h), m--),
                            (d = m);
                        }
                      }
                      v(t[l][1]) &&
                        ((g = t[l][1].charAt(0)),
                        (t[l][1] = t[l][1].slice(1)),
                        (h += g),
                        (f += g));
                    }
                    if (l < t.length - 1 && !t[l][1]) {
                      t.splice(l, 1);
                      break;
                    }
                    if (h.length > 0 || f.length > 0) {
                      h.length > 0 &&
                        f.length > 0 &&
                        (0 !== (s = o(f, h)) &&
                          (d >= 0
                            ? (t[d][1] += f.substring(0, s))
                            : (t.splice(0, 0, [r, f.substring(0, s)]), l++),
                          (f = f.substring(s)),
                          (h = h.substring(s))),
                        0 !== (s = a(f, h)) &&
                          ((t[l][1] = f.substring(f.length - s) + t[l][1]),
                          (f = f.substring(0, f.length - s)),
                          (h = h.substring(0, h.length - s))));
                      var y = c + u;
                      0 === h.length && 0 === f.length
                        ? (t.splice(l - y, y), (l -= y))
                        : 0 === h.length
                        ? (t.splice(l - y, y, [n, f]), (l = l - y + 1))
                        : 0 === f.length
                        ? (t.splice(l - y, y, [e, h]), (l = l - y + 1))
                        : (t.splice(l - y, y, [e, h], [n, f]), (l = l - y + 2));
                    }
                    0 !== l && t[l - 1][0] === r
                      ? ((t[l - 1][1] += t[l][1]), t.splice(l, 1))
                      : l++,
                      (c = 0),
                      (u = 0),
                      (h = ""),
                      (f = "");
                }
            "" === t[t.length - 1][1] && t.pop();
            var _ = !1;
            for (l = 1; l < t.length - 1; )
              t[l - 1][0] === r &&
                t[l + 1][0] === r &&
                (t[l][1].substring(t[l][1].length - t[l - 1][1].length) ===
                t[l - 1][1]
                  ? ((t[l][1] =
                      t[l - 1][1] +
                      t[l][1].substring(
                        0,
                        t[l][1].length - t[l - 1][1].length
                      )),
                    (t[l + 1][1] = t[l - 1][1] + t[l + 1][1]),
                    t.splice(l - 1, 1),
                    (_ = !0))
                  : t[l][1].substring(0, t[l + 1][1].length) == t[l + 1][1] &&
                    ((t[l - 1][1] += t[l + 1][1]),
                    (t[l][1] =
                      t[l][1].substring(t[l + 1][1].length) + t[l + 1][1]),
                    t.splice(l + 1, 1),
                    (_ = !0))),
                l++;
            _ && p(t, i);
          }
          function g(t) {
            return t >= 55296 && t <= 56319;
          }
          function m(t) {
            return t >= 56320 && t <= 57343;
          }
          function v(t) {
            return m(t.charCodeAt(0));
          }
          function b(t) {
            return g(t.charCodeAt(t.length - 1));
          }
          function y(t, i, s, o) {
            return b(t) || v(o)
              ? null
              : (function (t) {
                  for (var e = [], n = 0; n < t.length; n++)
                    t[n][1].length > 0 && e.push(t[n]);
                  return e;
                })([
                  [r, t],
                  [e, i],
                  [n, s],
                  [r, o],
                ]);
          }
          function _(t, e, n, r) {
            return i(t, e, n, r, !0);
          }
          (_.INSERT = n), (_.DELETE = e), (_.EQUAL = r), (t.exports = _);
        },
        9907: function (t, e, n) {
          t = n.nmd(t);
          var r = "__lodash_hash_undefined__",
            i = 9007199254740991,
            s = "[object Arguments]",
            o = "[object Boolean]",
            l = "[object Date]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Map]",
            h = "[object Number]",
            f = "[object Object]",
            d = "[object Promise]",
            p = "[object RegExp]",
            g = "[object Set]",
            m = "[object String]",
            v = "[object Symbol]",
            b = "[object WeakMap]",
            y = "[object ArrayBuffer]",
            _ = "[object DataView]",
            x = "[object Float32Array]",
            w = "[object Float64Array]",
            N = "[object Int8Array]",
            E = "[object Int16Array]",
            A = "[object Int32Array]",
            k = "[object Uint8Array]",
            q = "[object Uint8ClampedArray]",
            Z = "[object Uint16Array]",
            S = "[object Uint32Array]",
            L = /\w*$/,
            O = /^\[object .+?Constructor\]$/,
            T = /^(?:0|[1-9]\d*)$/,
            j = {};
          (j[s] =
            j["[object Array]"] =
            j[y] =
            j[_] =
            j[o] =
            j[l] =
            j[x] =
            j[w] =
            j[N] =
            j[E] =
            j[A] =
            j[c] =
            j[h] =
            j[f] =
            j[p] =
            j[g] =
            j[m] =
            j[v] =
            j[k] =
            j[q] =
            j[Z] =
            j[S] =
              !0),
            (j["[object Error]"] = j[a] = j[b] = !1);
          var C = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            R =
              "object" == typeof self && self && self.Object === Object && self,
            I = C || R || Function("return this")(),
            P = e && !e.nodeType && e,
            B = P && t && !t.nodeType && t,
            M = B && B.exports === P;
          function U(t, e) {
            return t.set(e[0], e[1]), t;
          }
          function D(t, e) {
            return t.add(e), t;
          }
          function z(t, e, n, r) {
            var i = -1,
              s = t ? t.length : 0;
            for (r && s && (n = t[++i]); ++i < s; ) n = e(n, t[i], i, t);
            return n;
          }
          function F(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
              try {
                e = !!(t + "");
              } catch (t) {}
            return e;
          }
          function $(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          }
          function H(t, e) {
            return function (n) {
              return t(e(n));
            };
          }
          function W(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          var K,
            V = Array.prototype,
            G = Function.prototype,
            Y = Object.prototype,
            Q = I["__core-js_shared__"],
            X = (K = /[^.]+$/.exec((Q && Q.keys && Q.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + K
              : "",
            J = G.toString,
            tt = Y.hasOwnProperty,
            et = Y.toString,
            nt = RegExp(
              "^" +
                J.call(tt)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            rt = M ? I.Buffer : void 0,
            it = I.Symbol,
            st = I.Uint8Array,
            ot = H(Object.getPrototypeOf, Object),
            lt = Object.create,
            at = Y.propertyIsEnumerable,
            ut = V.splice,
            ct = Object.getOwnPropertySymbols,
            ht = rt ? rt.isBuffer : void 0,
            ft = H(Object.keys, Object),
            dt = It(I, "DataView"),
            pt = It(I, "Map"),
            gt = It(I, "Promise"),
            mt = It(I, "Set"),
            vt = It(I, "WeakMap"),
            bt = It(Object, "create"),
            yt = Dt(dt),
            _t = Dt(pt),
            xt = Dt(gt),
            wt = Dt(mt),
            Nt = Dt(vt),
            Et = it ? it.prototype : void 0,
            At = Et ? Et.valueOf : void 0;
          function kt(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function qt(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function Zt(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function St(t) {
            this.__data__ = new qt(t);
          }
          function Lt(t, e, n) {
            var r = t[e];
            (tt.call(t, e) && zt(r, n) && (void 0 !== n || e in t)) ||
              (t[e] = n);
          }
          function Ot(t, e) {
            for (var n = t.length; n--; ) if (zt(t[n][0], e)) return n;
            return -1;
          }
          function Tt(t, e, n, r, i, d, b) {
            var O;
            if ((r && (O = d ? r(t, i, d, b) : r(t)), void 0 !== O)) return O;
            if (!Kt(t)) return t;
            var T = Ft(t);
            if (T) {
              if (
                ((O = (function (t) {
                  var e = t.length,
                    n = t.constructor(e);
                  return (
                    e &&
                      "string" == typeof t[0] &&
                      tt.call(t, "index") &&
                      ((n.index = t.index), (n.input = t.input)),
                    n
                  );
                })(t)),
                !e)
              )
                return (function (t, e) {
                  var n = -1,
                    r = t.length;
                  for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
                  return e;
                })(t, O);
            } else {
              var C = Bt(t),
                R = C == a || C == u;
              if (Ht(t))
                return (function (t, e) {
                  if (e) return t.slice();
                  var n = new t.constructor(t.length);
                  return t.copy(n), n;
                })(t, e);
              if (C == f || C == s || (R && !d)) {
                if (F(t)) return d ? t : {};
                if (
                  ((O = (function (t) {
                    return "function" != typeof t.constructor || Ut(t)
                      ? {}
                      : Kt((e = ot(t)))
                      ? lt(e)
                      : {};
                    var e;
                  })(R ? {} : t)),
                  !e)
                )
                  return (function (t, e) {
                    return Ct(t, Pt(t), e);
                  })(
                    t,
                    (function (t, e) {
                      return t && Ct(e, Vt(e), t);
                    })(O, t)
                  );
              } else {
                if (!j[C]) return d ? t : {};
                O = (function (t, e, n, r) {
                  var i,
                    s = t.constructor;
                  switch (e) {
                    case y:
                      return jt(t);
                    case o:
                    case l:
                      return new s(+t);
                    case _:
                      return (function (t, e) {
                        var n = e ? jt(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.byteLength);
                      })(t, r);
                    case x:
                    case w:
                    case N:
                    case E:
                    case A:
                    case k:
                    case q:
                    case Z:
                    case S:
                      return (function (t, e) {
                        var n = e ? jt(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.length);
                      })(t, r);
                    case c:
                      return (function (t, e, n) {
                        return z(
                          e ? n($(t), !0) : $(t),
                          U,
                          new t.constructor()
                        );
                      })(t, r, n);
                    case h:
                    case m:
                      return new s(t);
                    case p:
                      return (function (t) {
                        var e = new t.constructor(t.source, L.exec(t));
                        return (e.lastIndex = t.lastIndex), e;
                      })(t);
                    case g:
                      return (function (t, e, n) {
                        return z(
                          e ? n(W(t), !0) : W(t),
                          D,
                          new t.constructor()
                        );
                      })(t, r, n);
                    case v:
                      return (i = t), At ? Object(At.call(i)) : {};
                  }
                })(t, C, Tt, e);
              }
            }
            b || (b = new St());
            var I = b.get(t);
            if (I) return I;
            if ((b.set(t, O), !T))
              var P = n
                ? (function (t) {
                    return (function (t, e, n) {
                      var r = e(t);
                      return Ft(t)
                        ? r
                        : (function (t, e) {
                            for (
                              var n = -1, r = e.length, i = t.length;
                              ++n < r;

                            )
                              t[i + n] = e[n];
                            return t;
                          })(r, n(t));
                    })(t, Vt, Pt);
                  })(t)
                : Vt(t);
            return (
              (function (t, e) {
                for (
                  var n = -1, r = t ? t.length : 0;
                  ++n < r && !1 !== e(t[n], n);

                );
              })(P || t, function (i, s) {
                P && (i = t[(s = i)]), Lt(O, s, Tt(i, e, n, r, s, t, b));
              }),
              O
            );
          }
          function jt(t) {
            var e = new t.constructor(t.byteLength);
            return new st(e).set(new st(t)), e;
          }
          function Ct(t, e, n, r) {
            n || (n = {});
            for (var i = -1, s = e.length; ++i < s; ) {
              var o = e[i],
                l = r ? r(n[o], t[o], o, n, t) : void 0;
              Lt(n, o, void 0 === l ? t[o] : l);
            }
            return n;
          }
          function Rt(t, e) {
            var n,
              r,
              i = t.__data__;
            return (
              "string" == (r = typeof (n = e)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? i["string" == typeof e ? "string" : "hash"]
              : i.map;
          }
          function It(t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return (function (t) {
              return (
                !(!Kt(t) || ((e = t), X && X in e)) &&
                (Wt(t) || F(t) ? nt : O).test(Dt(t))
              );
              var e;
            })(n)
              ? n
              : void 0;
          }
          (kt.prototype.clear = function () {
            this.__data__ = bt ? bt(null) : {};
          }),
            (kt.prototype.delete = function (t) {
              return this.has(t) && delete this.__data__[t];
            }),
            (kt.prototype.get = function (t) {
              var e = this.__data__;
              if (bt) {
                var n = e[t];
                return n === r ? void 0 : n;
              }
              return tt.call(e, t) ? e[t] : void 0;
            }),
            (kt.prototype.has = function (t) {
              var e = this.__data__;
              return bt ? void 0 !== e[t] : tt.call(e, t);
            }),
            (kt.prototype.set = function (t, e) {
              return (this.__data__[t] = bt && void 0 === e ? r : e), this;
            }),
            (qt.prototype.clear = function () {
              this.__data__ = [];
            }),
            (qt.prototype.delete = function (t) {
              var e = this.__data__,
                n = Ot(e, t);
              return !(
                n < 0 || (n == e.length - 1 ? e.pop() : ut.call(e, n, 1), 0)
              );
            }),
            (qt.prototype.get = function (t) {
              var e = this.__data__,
                n = Ot(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (qt.prototype.has = function (t) {
              return Ot(this.__data__, t) > -1;
            }),
            (qt.prototype.set = function (t, e) {
              var n = this.__data__,
                r = Ot(n, t);
              return r < 0 ? n.push([t, e]) : (n[r][1] = e), this;
            }),
            (Zt.prototype.clear = function () {
              this.__data__ = {
                hash: new kt(),
                map: new (pt || qt)(),
                string: new kt(),
              };
            }),
            (Zt.prototype.delete = function (t) {
              return Rt(this, t).delete(t);
            }),
            (Zt.prototype.get = function (t) {
              return Rt(this, t).get(t);
            }),
            (Zt.prototype.has = function (t) {
              return Rt(this, t).has(t);
            }),
            (Zt.prototype.set = function (t, e) {
              return Rt(this, t).set(t, e), this;
            }),
            (St.prototype.clear = function () {
              this.__data__ = new qt();
            }),
            (St.prototype.delete = function (t) {
              return this.__data__.delete(t);
            }),
            (St.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (St.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (St.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof qt) {
                var r = n.__data__;
                if (!pt || r.length < 199) return r.push([t, e]), this;
                n = this.__data__ = new Zt(r);
              }
              return n.set(t, e), this;
            });
          var Pt = ct
              ? H(ct, Object)
              : function () {
                  return [];
                },
            Bt = function (t) {
              return et.call(t);
            };
          function Mt(t, e) {
            return (
              !!(e = null == e ? i : e) &&
              ("number" == typeof t || T.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function Ut(t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || Y);
          }
          function Dt(t) {
            if (null != t) {
              try {
                return J.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function zt(t, e) {
            return t === e || (t != t && e != e);
          }
          ((dt && Bt(new dt(new ArrayBuffer(1))) != _) ||
            (pt && Bt(new pt()) != c) ||
            (gt && Bt(gt.resolve()) != d) ||
            (mt && Bt(new mt()) != g) ||
            (vt && Bt(new vt()) != b)) &&
            (Bt = function (t) {
              var e = et.call(t),
                n = e == f ? t.constructor : void 0,
                r = n ? Dt(n) : void 0;
              if (r)
                switch (r) {
                  case yt:
                    return _;
                  case _t:
                    return c;
                  case xt:
                    return d;
                  case wt:
                    return g;
                  case Nt:
                    return b;
                }
              return e;
            });
          var Ft = Array.isArray;
          function $t(t) {
            return (
              null != t &&
              (function (t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i;
              })(t.length) &&
              !Wt(t)
            );
          }
          var Ht =
            ht ||
            function () {
              return !1;
            };
          function Wt(t) {
            var e = Kt(t) ? et.call(t) : "";
            return e == a || e == u;
          }
          function Kt(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e);
          }
          function Vt(t) {
            return $t(t)
              ? (function (t, e) {
                  var n =
                      Ft(t) ||
                      (function (t) {
                        return (
                          (function (t) {
                            return (
                              (function (t) {
                                return !!t && "object" == typeof t;
                              })(t) && $t(t)
                            );
                          })(t) &&
                          tt.call(t, "callee") &&
                          (!at.call(t, "callee") || et.call(t) == s)
                        );
                      })(t)
                        ? (function (t, e) {
                            for (var n = -1, r = Array(t); ++n < t; )
                              r[n] = e(n);
                            return r;
                          })(t.length, String)
                        : [],
                    r = n.length,
                    i = !!r;
                  for (var o in t)
                    (!e && !tt.call(t, o)) ||
                      (i && ("length" == o || Mt(o, r))) ||
                      n.push(o);
                  return n;
                })(t)
              : (function (t) {
                  if (!Ut(t)) return ft(t);
                  var e = [];
                  for (var n in Object(t))
                    tt.call(t, n) && "constructor" != n && e.push(n);
                  return e;
                })(t);
          }
          t.exports = function (t) {
            return Tt(t, !0, !0);
          };
        },
        3958: function (t, e, n) {
          t = n.nmd(t);
          var r = "__lodash_hash_undefined__",
            i = 1,
            s = 2,
            o = 9007199254740991,
            l = "[object Arguments]",
            a = "[object Array]",
            u = "[object AsyncFunction]",
            c = "[object Boolean]",
            h = "[object Date]",
            f = "[object Error]",
            d = "[object Function]",
            p = "[object GeneratorFunction]",
            g = "[object Map]",
            m = "[object Number]",
            v = "[object Null]",
            b = "[object Object]",
            y = "[object Promise]",
            _ = "[object Proxy]",
            x = "[object RegExp]",
            w = "[object Set]",
            N = "[object String]",
            E = "[object Undefined]",
            A = "[object WeakMap]",
            k = "[object ArrayBuffer]",
            q = "[object DataView]",
            Z = /^\[object .+?Constructor\]$/,
            S = /^(?:0|[1-9]\d*)$/,
            L = {};
          (L["[object Float32Array]"] =
            L["[object Float64Array]"] =
            L["[object Int8Array]"] =
            L["[object Int16Array]"] =
            L["[object Int32Array]"] =
            L["[object Uint8Array]"] =
            L["[object Uint8ClampedArray]"] =
            L["[object Uint16Array]"] =
            L["[object Uint32Array]"] =
              !0),
            (L[l] =
              L[a] =
              L[k] =
              L[c] =
              L[q] =
              L[h] =
              L[f] =
              L[d] =
              L[g] =
              L[m] =
              L[b] =
              L[x] =
              L[w] =
              L[N] =
              L[A] =
                !1);
          var O = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            T =
              "object" == typeof self && self && self.Object === Object && self,
            j = O || T || Function("return this")(),
            C = e && !e.nodeType && e,
            R = C && t && !t.nodeType && t,
            I = R && R.exports === C,
            P = I && O.process,
            B = (function () {
              try {
                return P && P.binding && P.binding("util");
              } catch (t) {}
            })(),
            M = B && B.isTypedArray;
          function U(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
              if (e(t[n], n, t)) return !0;
            return !1;
          }
          function D(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          }
          function z(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          var F,
            $,
            H,
            W = Array.prototype,
            K = Function.prototype,
            V = Object.prototype,
            G = j["__core-js_shared__"],
            Y = K.toString,
            Q = V.hasOwnProperty,
            X = (F = /[^.]+$/.exec((G && G.keys && G.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + F
              : "",
            J = V.toString,
            tt = RegExp(
              "^" +
                Y.call(Q)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            et = I ? j.Buffer : void 0,
            nt = j.Symbol,
            rt = j.Uint8Array,
            it = V.propertyIsEnumerable,
            st = W.splice,
            ot = nt ? nt.toStringTag : void 0,
            lt = Object.getOwnPropertySymbols,
            at = et ? et.isBuffer : void 0,
            ut =
              (($ = Object.keys),
              (H = Object),
              function (t) {
                return $(H(t));
              }),
            ct = Rt(j, "DataView"),
            ht = Rt(j, "Map"),
            ft = Rt(j, "Promise"),
            dt = Rt(j, "Set"),
            pt = Rt(j, "WeakMap"),
            gt = Rt(Object, "create"),
            mt = Mt(ct),
            vt = Mt(ht),
            bt = Mt(ft),
            yt = Mt(dt),
            _t = Mt(pt),
            xt = nt ? nt.prototype : void 0,
            wt = xt ? xt.valueOf : void 0;
          function Nt(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function Et(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function At(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function kt(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.__data__ = new At(); ++e < n; ) this.add(t[e]);
          }
          function qt(t) {
            var e = (this.__data__ = new Et(t));
            this.size = e.size;
          }
          function Zt(t, e) {
            for (var n = t.length; n--; ) if (Ut(t[n][0], e)) return n;
            return -1;
          }
          function St(t) {
            return null == t
              ? void 0 === t
                ? E
                : v
              : ot && ot in Object(t)
              ? (function (t) {
                  var e = Q.call(t, ot),
                    n = t[ot];
                  try {
                    t[ot] = void 0;
                    var r = !0;
                  } catch (t) {}
                  var i = J.call(t);
                  return r && (e ? (t[ot] = n) : delete t[ot]), i;
                })(t)
              : (function (t) {
                  return J.call(t);
                })(t);
          }
          function Lt(t) {
            return Kt(t) && St(t) == l;
          }
          function Ot(t, e, n, r, o) {
            return (
              t === e ||
              (null == t || null == e || (!Kt(t) && !Kt(e))
                ? t != t && e != e
                : (function (t, e, n, r, o, u) {
                    var d = zt(t),
                      p = zt(e),
                      v = d ? a : Pt(t),
                      y = p ? a : Pt(e),
                      _ = (v = v == l ? b : v) == b,
                      E = (y = y == l ? b : y) == b,
                      A = v == y;
                    if (A && Ft(t)) {
                      if (!Ft(e)) return !1;
                      (d = !0), (_ = !1);
                    }
                    if (A && !_)
                      return (
                        u || (u = new qt()),
                        d || Vt(t)
                          ? Tt(t, e, n, r, o, u)
                          : (function (t, e, n, r, o, l, a) {
                              switch (n) {
                                case q:
                                  if (
                                    t.byteLength != e.byteLength ||
                                    t.byteOffset != e.byteOffset
                                  )
                                    return !1;
                                  (t = t.buffer), (e = e.buffer);
                                case k:
                                  return !(
                                    t.byteLength != e.byteLength ||
                                    !l(new rt(t), new rt(e))
                                  );
                                case c:
                                case h:
                                case m:
                                  return Ut(+t, +e);
                                case f:
                                  return (
                                    t.name == e.name && t.message == e.message
                                  );
                                case x:
                                case N:
                                  return t == e + "";
                                case g:
                                  var u = D;
                                case w:
                                  var d = r & i;
                                  if ((u || (u = z), t.size != e.size && !d))
                                    return !1;
                                  var p = a.get(t);
                                  if (p) return p == e;
                                  (r |= s), a.set(t, e);
                                  var v = Tt(u(t), u(e), r, o, l, a);
                                  return a.delete(t), v;
                                case "[object Symbol]":
                                  if (wt) return wt.call(t) == wt.call(e);
                              }
                              return !1;
                            })(t, e, v, n, r, o, u)
                      );
                    if (!(n & i)) {
                      var Z = _ && Q.call(t, "__wrapped__"),
                        S = E && Q.call(e, "__wrapped__");
                      if (Z || S) {
                        var L = Z ? t.value() : t,
                          O = S ? e.value() : e;
                        return u || (u = new qt()), o(L, O, n, r, u);
                      }
                    }
                    return (
                      !!A &&
                      (u || (u = new qt()),
                      (function (t, e, n, r, s, o) {
                        var l = n & i,
                          a = jt(t),
                          u = a.length;
                        if (u != jt(e).length && !l) return !1;
                        for (var c = u; c--; ) {
                          var h = a[c];
                          if (!(l ? h in e : Q.call(e, h))) return !1;
                        }
                        var f = o.get(t);
                        if (f && o.get(e)) return f == e;
                        var d = !0;
                        o.set(t, e), o.set(e, t);
                        for (var p = l; ++c < u; ) {
                          var g = t[(h = a[c])],
                            m = e[h];
                          if (r)
                            var v = l
                              ? r(m, g, h, e, t, o)
                              : r(g, m, h, t, e, o);
                          if (
                            !(void 0 === v ? g === m || s(g, m, n, r, o) : v)
                          ) {
                            d = !1;
                            break;
                          }
                          p || (p = "constructor" == h);
                        }
                        if (d && !p) {
                          var b = t.constructor,
                            y = e.constructor;
                          b == y ||
                            !("constructor" in t) ||
                            !("constructor" in e) ||
                            ("function" == typeof b &&
                              b instanceof b &&
                              "function" == typeof y &&
                              y instanceof y) ||
                            (d = !1);
                        }
                        return o.delete(t), o.delete(e), d;
                      })(t, e, n, r, o, u))
                    );
                  })(t, e, n, r, Ot, o))
            );
          }
          function Tt(t, e, n, r, o, l) {
            var a = n & i,
              u = t.length,
              c = e.length;
            if (u != c && !(a && c > u)) return !1;
            var h = l.get(t);
            if (h && l.get(e)) return h == e;
            var f = -1,
              d = !0,
              p = n & s ? new kt() : void 0;
            for (l.set(t, e), l.set(e, t); ++f < u; ) {
              var g = t[f],
                m = e[f];
              if (r) var v = a ? r(m, g, f, e, t, l) : r(g, m, f, t, e, l);
              if (void 0 !== v) {
                if (v) continue;
                d = !1;
                break;
              }
              if (p) {
                if (
                  !U(e, function (t, e) {
                    if (((i = e), !p.has(i) && (g === t || o(g, t, n, r, l))))
                      return p.push(e);
                    var i;
                  })
                ) {
                  d = !1;
                  break;
                }
              } else if (g !== m && !o(g, m, n, r, l)) {
                d = !1;
                break;
              }
            }
            return l.delete(t), l.delete(e), d;
          }
          function jt(t) {
            return (function (t, e, n) {
              var r = e(t);
              return zt(t)
                ? r
                : (function (t, e) {
                    for (var n = -1, r = e.length, i = t.length; ++n < r; )
                      t[i + n] = e[n];
                    return t;
                  })(r, n(t));
            })(t, Gt, It);
          }
          function Ct(t, e) {
            var n,
              r,
              i = t.__data__;
            return (
              "string" == (r = typeof (n = e)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? i["string" == typeof e ? "string" : "hash"]
              : i.map;
          }
          function Rt(t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return (function (t) {
              return (
                !(
                  !Wt(t) ||
                  (function (t) {
                    return !!X && X in t;
                  })(t)
                ) && ($t(t) ? tt : Z).test(Mt(t))
              );
            })(n)
              ? n
              : void 0;
          }
          (Nt.prototype.clear = function () {
            (this.__data__ = gt ? gt(null) : {}), (this.size = 0);
          }),
            (Nt.prototype.delete = function (t) {
              var e = this.has(t) && delete this.__data__[t];
              return (this.size -= e ? 1 : 0), e;
            }),
            (Nt.prototype.get = function (t) {
              var e = this.__data__;
              if (gt) {
                var n = e[t];
                return n === r ? void 0 : n;
              }
              return Q.call(e, t) ? e[t] : void 0;
            }),
            (Nt.prototype.has = function (t) {
              var e = this.__data__;
              return gt ? void 0 !== e[t] : Q.call(e, t);
            }),
            (Nt.prototype.set = function (t, e) {
              var n = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (n[t] = gt && void 0 === e ? r : e),
                this
              );
            }),
            (Et.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Et.prototype.delete = function (t) {
              var e = this.__data__,
                n = Zt(e, t);
              return !(
                n < 0 ||
                (n == e.length - 1 ? e.pop() : st.call(e, n, 1), --this.size, 0)
              );
            }),
            (Et.prototype.get = function (t) {
              var e = this.__data__,
                n = Zt(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (Et.prototype.has = function (t) {
              return Zt(this.__data__, t) > -1;
            }),
            (Et.prototype.set = function (t, e) {
              var n = this.__data__,
                r = Zt(n, t);
              return (
                r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
              );
            }),
            (At.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Nt(),
                  map: new (ht || Et)(),
                  string: new Nt(),
                });
            }),
            (At.prototype.delete = function (t) {
              var e = Ct(this, t).delete(t);
              return (this.size -= e ? 1 : 0), e;
            }),
            (At.prototype.get = function (t) {
              return Ct(this, t).get(t);
            }),
            (At.prototype.has = function (t) {
              return Ct(this, t).has(t);
            }),
            (At.prototype.set = function (t, e) {
              var n = Ct(this, t),
                r = n.size;
              return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
            }),
            (kt.prototype.add = kt.prototype.push =
              function (t) {
                return this.__data__.set(t, r), this;
              }),
            (kt.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (qt.prototype.clear = function () {
              (this.__data__ = new Et()), (this.size = 0);
            }),
            (qt.prototype.delete = function (t) {
              var e = this.__data__,
                n = e.delete(t);
              return (this.size = e.size), n;
            }),
            (qt.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (qt.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (qt.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof Et) {
                var r = n.__data__;
                if (!ht || r.length < 199)
                  return r.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new At(r);
              }
              return n.set(t, e), (this.size = n.size), this;
            });
          var It = lt
              ? function (t) {
                  return null == t
                    ? []
                    : ((t = Object(t)),
                      (function (e, n) {
                        for (
                          var r = -1,
                            i = null == e ? 0 : e.length,
                            s = 0,
                            o = [];
                          ++r < i;

                        ) {
                          var l = e[r];
                          (a = l), it.call(t, a) && (o[s++] = l);
                        }
                        var a;
                        return o;
                      })(lt(t)));
                }
              : function () {
                  return [];
                },
            Pt = St;
          function Bt(t, e) {
            return (
              !!(e = null == e ? o : e) &&
              ("number" == typeof t || S.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function Mt(t) {
            if (null != t) {
              try {
                return Y.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function Ut(t, e) {
            return t === e || (t != t && e != e);
          }
          ((ct && Pt(new ct(new ArrayBuffer(1))) != q) ||
            (ht && Pt(new ht()) != g) ||
            (ft && Pt(ft.resolve()) != y) ||
            (dt && Pt(new dt()) != w) ||
            (pt && Pt(new pt()) != A)) &&
            (Pt = function (t) {
              var e = St(t),
                n = e == b ? t.constructor : void 0,
                r = n ? Mt(n) : "";
              if (r)
                switch (r) {
                  case mt:
                    return q;
                  case vt:
                    return g;
                  case bt:
                    return y;
                  case yt:
                    return w;
                  case _t:
                    return A;
                }
              return e;
            });
          var Dt = Lt(
              (function () {
                return arguments;
              })()
            )
              ? Lt
              : function (t) {
                  return Kt(t) && Q.call(t, "callee") && !it.call(t, "callee");
                },
            zt = Array.isArray,
            Ft =
              at ||
              function () {
                return !1;
              };
          function $t(t) {
            if (!Wt(t)) return !1;
            var e = St(t);
            return e == d || e == p || e == u || e == _;
          }
          function Ht(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o;
          }
          function Wt(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          }
          function Kt(t) {
            return null != t && "object" == typeof t;
          }
          var Vt = M
            ? (function (t) {
                return function (e) {
                  return t(e);
                };
              })(M)
            : function (t) {
                return Kt(t) && Ht(t.length) && !!L[St(t)];
              };
          function Gt(t) {
            return null != (e = t) && Ht(e.length) && !$t(e)
              ? (function (t, e) {
                  var n = zt(t),
                    r = !n && Dt(t),
                    i = !n && !r && Ft(t),
                    s = !n && !r && !i && Vt(t),
                    o = n || r || i || s,
                    l = o
                      ? (function (t, e) {
                          for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                          return r;
                        })(t.length, String)
                      : [],
                    a = l.length;
                  for (var u in t)
                    (!e && !Q.call(t, u)) ||
                      (o &&
                        ("length" == u ||
                          (i && ("offset" == u || "parent" == u)) ||
                          (s &&
                            ("buffer" == u ||
                              "byteLength" == u ||
                              "byteOffset" == u)) ||
                          Bt(u, a))) ||
                      l.push(u);
                  return l;
                })(t)
              : (function (t) {
                  if (
                    ((n = (e = t) && e.constructor),
                    e !== (("function" == typeof n && n.prototype) || V))
                  )
                    return ut(t);
                  var e,
                    n,
                    r = [];
                  for (var i in Object(t))
                    Q.call(t, i) && "constructor" != i && r.push(i);
                  return r;
                })(t);
            var e;
          }
          t.exports = function (t, e) {
            return Ot(t, e);
          };
        },
        6635: function (t, e, n) {
          var r;
          (t = n.nmd(t)),
            function () {
              var i,
                s = "Expected a function",
                o = "__lodash_hash_undefined__",
                l = "__lodash_placeholder__",
                a = 32,
                u = 128,
                c = 1 / 0,
                h = 9007199254740991,
                f = NaN,
                d = 4294967295,
                p = [
                  ["ary", u],
                  ["bind", 1],
                  ["bindKey", 2],
                  ["curry", 8],
                  ["curryRight", 16],
                  ["flip", 512],
                  ["partial", a],
                  ["partialRight", 64],
                  ["rearg", 256],
                ],
                g = "[object Arguments]",
                m = "[object Array]",
                v = "[object Boolean]",
                b = "[object Date]",
                y = "[object Error]",
                _ = "[object Function]",
                x = "[object GeneratorFunction]",
                w = "[object Map]",
                N = "[object Number]",
                E = "[object Object]",
                A = "[object Promise]",
                k = "[object RegExp]",
                q = "[object Set]",
                Z = "[object String]",
                S = "[object Symbol]",
                L = "[object WeakMap]",
                O = "[object ArrayBuffer]",
                T = "[object DataView]",
                j = "[object Float32Array]",
                C = "[object Float64Array]",
                R = "[object Int8Array]",
                I = "[object Int16Array]",
                P = "[object Int32Array]",
                B = "[object Uint8Array]",
                M = "[object Uint8ClampedArray]",
                U = "[object Uint16Array]",
                D = "[object Uint32Array]",
                z = /\b__p \+= '';/g,
                F = /\b(__p \+=) '' \+/g,
                $ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                H = /&(?:amp|lt|gt|quot|#39);/g,
                W = /[&<>"']/g,
                K = RegExp(H.source),
                V = RegExp(W.source),
                G = /<%-([\s\S]+?)%>/g,
                Y = /<%([\s\S]+?)%>/g,
                Q = /<%=([\s\S]+?)%>/g,
                X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                J = /^\w*$/,
                tt =
                  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                et = /[\\^$.*+?()[\]{}|]/g,
                nt = RegExp(et.source),
                rt = /^\s+/,
                it = /\s/,
                st = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                ot = /\{\n\/\* \[wrapped with (.+)\] \*/,
                lt = /,? & /,
                at = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                ut = /[()=,{}\[\]\/\s]/,
                ct = /\\(\\)?/g,
                ht = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                ft = /\w*$/,
                dt = /^[-+]0x[0-9a-f]+$/i,
                pt = /^0b[01]+$/i,
                gt = /^\[object .+?Constructor\]$/,
                mt = /^0o[0-7]+$/i,
                vt = /^(?:0|[1-9]\d*)$/,
                bt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                yt = /($^)/,
                _t = /['\n\r\u2028\u2029\\]/g,
                xt = "\\ud800-\\udfff",
                wt = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                Nt = "\\u2700-\\u27bf",
                Et = "a-z\\xdf-\\xf6\\xf8-\\xff",
                At = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                kt = "\\ufe0e\\ufe0f",
                qt =
                  "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Zt = "[" + xt + "]",
                St = "[" + qt + "]",
                Lt = "[" + wt + "]",
                Ot = "\\d+",
                Tt = "[" + Nt + "]",
                jt = "[" + Et + "]",
                Ct = "[^" + xt + qt + Ot + Nt + Et + At + "]",
                Rt = "\\ud83c[\\udffb-\\udfff]",
                It = "[^" + xt + "]",
                Pt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                Bt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                Mt = "[" + At + "]",
                Ut = "\\u200d",
                Dt = "(?:" + jt + "|" + Ct + ")",
                zt = "(?:" + Mt + "|" + Ct + ")",
                Ft = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                $t = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                Ht = "(?:" + Lt + "|" + Rt + ")?",
                Wt = "[" + kt + "]?",
                Kt =
                  Wt +
                  Ht +
                  "(?:" +
                  Ut +
                  "(?:" +
                  [It, Pt, Bt].join("|") +
                  ")" +
                  Wt +
                  Ht +
                  ")*",
                Vt = "(?:" + [Tt, Pt, Bt].join("|") + ")" + Kt,
                Gt = "(?:" + [It + Lt + "?", Lt, Pt, Bt, Zt].join("|") + ")",
                Yt = RegExp("['’]", "g"),
                Qt = RegExp(Lt, "g"),
                Xt = RegExp(Rt + "(?=" + Rt + ")|" + Gt + Kt, "g"),
                Jt = RegExp(
                  [
                    Mt +
                      "?" +
                      jt +
                      "+" +
                      Ft +
                      "(?=" +
                      [St, Mt, "$"].join("|") +
                      ")",
                    zt + "+" + $t + "(?=" + [St, Mt + Dt, "$"].join("|") + ")",
                    Mt + "?" + Dt + "+" + Ft,
                    Mt + "+" + $t,
                    "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                    "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                    Ot,
                    Vt,
                  ].join("|"),
                  "g"
                ),
                te = RegExp("[" + Ut + xt + wt + kt + "]"),
                ee =
                  /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                ne = [
                  "Array",
                  "Buffer",
                  "DataView",
                  "Date",
                  "Error",
                  "Float32Array",
                  "Float64Array",
                  "Function",
                  "Int8Array",
                  "Int16Array",
                  "Int32Array",
                  "Map",
                  "Math",
                  "Object",
                  "Promise",
                  "RegExp",
                  "Set",
                  "String",
                  "Symbol",
                  "TypeError",
                  "Uint8Array",
                  "Uint8ClampedArray",
                  "Uint16Array",
                  "Uint32Array",
                  "WeakMap",
                  "_",
                  "clearTimeout",
                  "isFinite",
                  "parseInt",
                  "setTimeout",
                ],
                re = -1,
                ie = {};
              (ie[j] =
                ie[C] =
                ie[R] =
                ie[I] =
                ie[P] =
                ie[B] =
                ie[M] =
                ie[U] =
                ie[D] =
                  !0),
                (ie[g] =
                  ie[m] =
                  ie[O] =
                  ie[v] =
                  ie[T] =
                  ie[b] =
                  ie[y] =
                  ie[_] =
                  ie[w] =
                  ie[N] =
                  ie[E] =
                  ie[k] =
                  ie[q] =
                  ie[Z] =
                  ie[L] =
                    !1);
              var se = {};
              (se[g] =
                se[m] =
                se[O] =
                se[T] =
                se[v] =
                se[b] =
                se[j] =
                se[C] =
                se[R] =
                se[I] =
                se[P] =
                se[w] =
                se[N] =
                se[E] =
                se[k] =
                se[q] =
                se[Z] =
                se[S] =
                se[B] =
                se[M] =
                se[U] =
                se[D] =
                  !0),
                (se[y] = se[_] = se[L] = !1);
              var oe = {
                  "\\": "\\",
                  "'": "'",
                  "\n": "n",
                  "\r": "r",
                  "\u2028": "u2028",
                  "\u2029": "u2029",
                },
                le = parseFloat,
                ae = parseInt,
                ue =
                  "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                ce =
                  "object" == typeof self &&
                  self &&
                  self.Object === Object &&
                  self,
                he = ue || ce || Function("return this")(),
                fe = e && !e.nodeType && e,
                de = fe && t && !t.nodeType && t,
                pe = de && de.exports === fe,
                ge = pe && ue.process,
                me = (function () {
                  try {
                    return (
                      (de && de.require && de.require("util").types) ||
                      (ge && ge.binding && ge.binding("util"))
                    );
                  } catch (t) {}
                })(),
                ve = me && me.isArrayBuffer,
                be = me && me.isDate,
                ye = me && me.isMap,
                _e = me && me.isRegExp,
                xe = me && me.isSet,
                we = me && me.isTypedArray;
              function Ne(t, e, n) {
                switch (n.length) {
                  case 0:
                    return t.call(e);
                  case 1:
                    return t.call(e, n[0]);
                  case 2:
                    return t.call(e, n[0], n[1]);
                  case 3:
                    return t.call(e, n[0], n[1], n[2]);
                }
                return t.apply(e, n);
              }
              function Ee(t, e, n, r) {
                for (var i = -1, s = null == t ? 0 : t.length; ++i < s; ) {
                  var o = t[i];
                  e(r, o, n(o), t);
                }
                return r;
              }
              function Ae(t, e) {
                for (
                  var n = -1, r = null == t ? 0 : t.length;
                  ++n < r && !1 !== e(t[n], n, t);

                );
                return t;
              }
              function ke(t, e) {
                for (
                  var n = null == t ? 0 : t.length;
                  n-- && !1 !== e(t[n], n, t);

                );
                return t;
              }
              function qe(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                  if (!e(t[n], n, t)) return !1;
                return !0;
              }
              function Ze(t, e) {
                for (
                  var n = -1, r = null == t ? 0 : t.length, i = 0, s = [];
                  ++n < r;

                ) {
                  var o = t[n];
                  e(o, n, t) && (s[i++] = o);
                }
                return s;
              }
              function Se(t, e) {
                return !(null == t || !t.length) && Me(t, e, 0) > -1;
              }
              function Le(t, e, n) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
                  if (n(e, t[r])) return !0;
                return !1;
              }
              function Oe(t, e) {
                for (
                  var n = -1, r = null == t ? 0 : t.length, i = Array(r);
                  ++n < r;

                )
                  i[n] = e(t[n], n, t);
                return i;
              }
              function Te(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r; )
                  t[i + n] = e[n];
                return t;
              }
              function je(t, e, n, r) {
                var i = -1,
                  s = null == t ? 0 : t.length;
                for (r && s && (n = t[++i]); ++i < s; ) n = e(n, t[i], i, t);
                return n;
              }
              function Ce(t, e, n, r) {
                var i = null == t ? 0 : t.length;
                for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t);
                return n;
              }
              function Re(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                  if (e(t[n], n, t)) return !0;
                return !1;
              }
              var Ie = Fe("length");
              function Pe(t, e, n) {
                var r;
                return (
                  n(t, function (t, n, i) {
                    if (e(t, n, i)) return (r = n), !1;
                  }),
                  r
                );
              }
              function Be(t, e, n, r) {
                for (
                  var i = t.length, s = n + (r ? 1 : -1);
                  r ? s-- : ++s < i;

                )
                  if (e(t[s], s, t)) return s;
                return -1;
              }
              function Me(t, e, n) {
                return e == e
                  ? (function (t, e, n) {
                      for (var r = n - 1, i = t.length; ++r < i; )
                        if (t[r] === e) return r;
                      return -1;
                    })(t, e, n)
                  : Be(t, De, n);
              }
              function Ue(t, e, n, r) {
                for (var i = n - 1, s = t.length; ++i < s; )
                  if (r(t[i], e)) return i;
                return -1;
              }
              function De(t) {
                return t != t;
              }
              function ze(t, e) {
                var n = null == t ? 0 : t.length;
                return n ? We(t, e) / n : f;
              }
              function Fe(t) {
                return function (e) {
                  return null == e ? i : e[t];
                };
              }
              function $e(t) {
                return function (e) {
                  return null == t ? i : t[e];
                };
              }
              function He(t, e, n, r, i) {
                return (
                  i(t, function (t, i, s) {
                    n = r ? ((r = !1), t) : e(n, t, i, s);
                  }),
                  n
                );
              }
              function We(t, e) {
                for (var n, r = -1, s = t.length; ++r < s; ) {
                  var o = e(t[r]);
                  o !== i && (n = n === i ? o : n + o);
                }
                return n;
              }
              function Ke(t, e) {
                for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                return r;
              }
              function Ve(t) {
                return t ? t.slice(0, fn(t) + 1).replace(rt, "") : t;
              }
              function Ge(t) {
                return function (e) {
                  return t(e);
                };
              }
              function Ye(t, e) {
                return Oe(e, function (e) {
                  return t[e];
                });
              }
              function Qe(t, e) {
                return t.has(e);
              }
              function Xe(t, e) {
                for (
                  var n = -1, r = t.length;
                  ++n < r && Me(e, t[n], 0) > -1;

                );
                return n;
              }
              function Je(t, e) {
                for (var n = t.length; n-- && Me(e, t[n], 0) > -1; );
                return n;
              }
              var tn = $e({
                  À: "A",
                  Á: "A",
                  Â: "A",
                  Ã: "A",
                  Ä: "A",
                  Å: "A",
                  à: "a",
                  á: "a",
                  â: "a",
                  ã: "a",
                  ä: "a",
                  å: "a",
                  Ç: "C",
                  ç: "c",
                  Ð: "D",
                  ð: "d",
                  È: "E",
                  É: "E",
                  Ê: "E",
                  Ë: "E",
                  è: "e",
                  é: "e",
                  ê: "e",
                  ë: "e",
                  Ì: "I",
                  Í: "I",
                  Î: "I",
                  Ï: "I",
                  ì: "i",
                  í: "i",
                  î: "i",
                  ï: "i",
                  Ñ: "N",
                  ñ: "n",
                  Ò: "O",
                  Ó: "O",
                  Ô: "O",
                  Õ: "O",
                  Ö: "O",
                  Ø: "O",
                  ò: "o",
                  ó: "o",
                  ô: "o",
                  õ: "o",
                  ö: "o",
                  ø: "o",
                  Ù: "U",
                  Ú: "U",
                  Û: "U",
                  Ü: "U",
                  ù: "u",
                  ú: "u",
                  û: "u",
                  ü: "u",
                  Ý: "Y",
                  ý: "y",
                  ÿ: "y",
                  Æ: "Ae",
                  æ: "ae",
                  Þ: "Th",
                  þ: "th",
                  ß: "ss",
                  Ā: "A",
                  Ă: "A",
                  Ą: "A",
                  ā: "a",
                  ă: "a",
                  ą: "a",
                  Ć: "C",
                  Ĉ: "C",
                  Ċ: "C",
                  Č: "C",
                  ć: "c",
                  ĉ: "c",
                  ċ: "c",
                  č: "c",
                  Ď: "D",
                  Đ: "D",
                  ď: "d",
                  đ: "d",
                  Ē: "E",
                  Ĕ: "E",
                  Ė: "E",
                  Ę: "E",
                  Ě: "E",
                  ē: "e",
                  ĕ: "e",
                  ė: "e",
                  ę: "e",
                  ě: "e",
                  Ĝ: "G",
                  Ğ: "G",
                  Ġ: "G",
                  Ģ: "G",
                  ĝ: "g",
                  ğ: "g",
                  ġ: "g",
                  ģ: "g",
                  Ĥ: "H",
                  Ħ: "H",
                  ĥ: "h",
                  ħ: "h",
                  Ĩ: "I",
                  Ī: "I",
                  Ĭ: "I",
                  Į: "I",
                  İ: "I",
                  ĩ: "i",
                  ī: "i",
                  ĭ: "i",
                  į: "i",
                  ı: "i",
                  Ĵ: "J",
                  ĵ: "j",
                  Ķ: "K",
                  ķ: "k",
                  ĸ: "k",
                  Ĺ: "L",
                  Ļ: "L",
                  Ľ: "L",
                  Ŀ: "L",
                  Ł: "L",
                  ĺ: "l",
                  ļ: "l",
                  ľ: "l",
                  ŀ: "l",
                  ł: "l",
                  Ń: "N",
                  Ņ: "N",
                  Ň: "N",
                  Ŋ: "N",
                  ń: "n",
                  ņ: "n",
                  ň: "n",
                  ŋ: "n",
                  Ō: "O",
                  Ŏ: "O",
                  Ő: "O",
                  ō: "o",
                  ŏ: "o",
                  ő: "o",
                  Ŕ: "R",
                  Ŗ: "R",
                  Ř: "R",
                  ŕ: "r",
                  ŗ: "r",
                  ř: "r",
                  Ś: "S",
                  Ŝ: "S",
                  Ş: "S",
                  Š: "S",
                  ś: "s",
                  ŝ: "s",
                  ş: "s",
                  š: "s",
                  Ţ: "T",
                  Ť: "T",
                  Ŧ: "T",
                  ţ: "t",
                  ť: "t",
                  ŧ: "t",
                  Ũ: "U",
                  Ū: "U",
                  Ŭ: "U",
                  Ů: "U",
                  Ű: "U",
                  Ų: "U",
                  ũ: "u",
                  ū: "u",
                  ŭ: "u",
                  ů: "u",
                  ű: "u",
                  ų: "u",
                  Ŵ: "W",
                  ŵ: "w",
                  Ŷ: "Y",
                  ŷ: "y",
                  Ÿ: "Y",
                  Ź: "Z",
                  Ż: "Z",
                  Ž: "Z",
                  ź: "z",
                  ż: "z",
                  ž: "z",
                  Ĳ: "IJ",
                  ĳ: "ij",
                  Œ: "Oe",
                  œ: "oe",
                  ŉ: "'n",
                  ſ: "s",
                }),
                en = $e({
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                });
              function nn(t) {
                return "\\" + oe[t];
              }
              function rn(t) {
                return te.test(t);
              }
              function sn(t) {
                var e = -1,
                  n = Array(t.size);
                return (
                  t.forEach(function (t, r) {
                    n[++e] = [r, t];
                  }),
                  n
                );
              }
              function on(t, e) {
                return function (n) {
                  return t(e(n));
                };
              }
              function ln(t, e) {
                for (var n = -1, r = t.length, i = 0, s = []; ++n < r; ) {
                  var o = t[n];
                  (o !== e && o !== l) || ((t[n] = l), (s[i++] = n));
                }
                return s;
              }
              function an(t) {
                var e = -1,
                  n = Array(t.size);
                return (
                  t.forEach(function (t) {
                    n[++e] = t;
                  }),
                  n
                );
              }
              function un(t) {
                var e = -1,
                  n = Array(t.size);
                return (
                  t.forEach(function (t) {
                    n[++e] = [t, t];
                  }),
                  n
                );
              }
              function cn(t) {
                return rn(t)
                  ? (function (t) {
                      for (var e = (Xt.lastIndex = 0); Xt.test(t); ) ++e;
                      return e;
                    })(t)
                  : Ie(t);
              }
              function hn(t) {
                return rn(t)
                  ? (function (t) {
                      return t.match(Xt) || [];
                    })(t)
                  : (function (t) {
                      return t.split("");
                    })(t);
              }
              function fn(t) {
                for (var e = t.length; e-- && it.test(t.charAt(e)); );
                return e;
              }
              var dn = $e({
                  "&amp;": "&",
                  "&lt;": "<",
                  "&gt;": ">",
                  "&quot;": '"',
                  "&#39;": "'",
                }),
                pn = (function t(e) {
                  var n,
                    r = (e =
                      null == e
                        ? he
                        : pn.defaults(he.Object(), e, pn.pick(he, ne))).Array,
                    it = e.Date,
                    xt = e.Error,
                    wt = e.Function,
                    Nt = e.Math,
                    Et = e.Object,
                    At = e.RegExp,
                    kt = e.String,
                    qt = e.TypeError,
                    Zt = r.prototype,
                    St = wt.prototype,
                    Lt = Et.prototype,
                    Ot = e["__core-js_shared__"],
                    Tt = St.toString,
                    jt = Lt.hasOwnProperty,
                    Ct = 0,
                    Rt = (n = /[^.]+$/.exec(
                      (Ot && Ot.keys && Ot.keys.IE_PROTO) || ""
                    ))
                      ? "Symbol(src)_1." + n
                      : "",
                    It = Lt.toString,
                    Pt = Tt.call(Et),
                    Bt = he._,
                    Mt = At(
                      "^" +
                        Tt.call(jt)
                          .replace(et, "\\$&")
                          .replace(
                            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                            "$1.*?"
                          ) +
                        "$"
                    ),
                    Ut = pe ? e.Buffer : i,
                    Dt = e.Symbol,
                    zt = e.Uint8Array,
                    Ft = Ut ? Ut.allocUnsafe : i,
                    $t = on(Et.getPrototypeOf, Et),
                    Ht = Et.create,
                    Wt = Lt.propertyIsEnumerable,
                    Kt = Zt.splice,
                    Vt = Dt ? Dt.isConcatSpreadable : i,
                    Gt = Dt ? Dt.iterator : i,
                    Xt = Dt ? Dt.toStringTag : i,
                    te = (function () {
                      try {
                        var t = as(Et, "defineProperty");
                        return t({}, "", {}), t;
                      } catch (t) {}
                    })(),
                    oe = e.clearTimeout !== he.clearTimeout && e.clearTimeout,
                    ue = it && it.now !== he.Date.now && it.now,
                    ce = e.setTimeout !== he.setTimeout && e.setTimeout,
                    fe = Nt.ceil,
                    de = Nt.floor,
                    ge = Et.getOwnPropertySymbols,
                    me = Ut ? Ut.isBuffer : i,
                    Ie = e.isFinite,
                    $e = Zt.join,
                    gn = on(Et.keys, Et),
                    mn = Nt.max,
                    vn = Nt.min,
                    bn = it.now,
                    yn = e.parseInt,
                    _n = Nt.random,
                    xn = Zt.reverse,
                    wn = as(e, "DataView"),
                    Nn = as(e, "Map"),
                    En = as(e, "Promise"),
                    An = as(e, "Set"),
                    kn = as(e, "WeakMap"),
                    qn = as(Et, "create"),
                    Zn = kn && new kn(),
                    Sn = {},
                    Ln = Is(wn),
                    On = Is(Nn),
                    Tn = Is(En),
                    jn = Is(An),
                    Cn = Is(kn),
                    Rn = Dt ? Dt.prototype : i,
                    In = Rn ? Rn.valueOf : i,
                    Pn = Rn ? Rn.toString : i;
                  function Bn(t) {
                    if (tl(t) && !Fo(t) && !(t instanceof zn)) {
                      if (t instanceof Dn) return t;
                      if (jt.call(t, "__wrapped__")) return Ps(t);
                    }
                    return new Dn(t);
                  }
                  var Mn = (function () {
                    function t() {}
                    return function (e) {
                      if (!Jo(e)) return {};
                      if (Ht) return Ht(e);
                      t.prototype = e;
                      var n = new t();
                      return (t.prototype = i), n;
                    };
                  })();
                  function Un() {}
                  function Dn(t, e) {
                    (this.__wrapped__ = t),
                      (this.__actions__ = []),
                      (this.__chain__ = !!e),
                      (this.__index__ = 0),
                      (this.__values__ = i);
                  }
                  function zn(t) {
                    (this.__wrapped__ = t),
                      (this.__actions__ = []),
                      (this.__dir__ = 1),
                      (this.__filtered__ = !1),
                      (this.__iteratees__ = []),
                      (this.__takeCount__ = d),
                      (this.__views__ = []);
                  }
                  function Fn(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n; ) {
                      var r = t[e];
                      this.set(r[0], r[1]);
                    }
                  }
                  function $n(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n; ) {
                      var r = t[e];
                      this.set(r[0], r[1]);
                    }
                  }
                  function Hn(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n; ) {
                      var r = t[e];
                      this.set(r[0], r[1]);
                    }
                  }
                  function Wn(t) {
                    var e = -1,
                      n = null == t ? 0 : t.length;
                    for (this.__data__ = new Hn(); ++e < n; ) this.add(t[e]);
                  }
                  function Kn(t) {
                    var e = (this.__data__ = new $n(t));
                    this.size = e.size;
                  }
                  function Vn(t, e) {
                    var n = Fo(t),
                      r = !n && zo(t),
                      i = !n && !r && Ko(t),
                      s = !n && !r && !i && al(t),
                      o = n || r || i || s,
                      l = o ? Ke(t.length, kt) : [],
                      a = l.length;
                    for (var u in t)
                      (!e && !jt.call(t, u)) ||
                        (o &&
                          ("length" == u ||
                            (i && ("offset" == u || "parent" == u)) ||
                            (s &&
                              ("buffer" == u ||
                                "byteLength" == u ||
                                "byteOffset" == u)) ||
                            gs(u, a))) ||
                        l.push(u);
                    return l;
                  }
                  function Gn(t) {
                    var e = t.length;
                    return e ? t[Hr(0, e - 1)] : i;
                  }
                  function Yn(t, e) {
                    return Os(ki(t), sr(e, 0, t.length));
                  }
                  function Qn(t) {
                    return Os(ki(t));
                  }
                  function Xn(t, e, n) {
                    ((n !== i && !Mo(t[e], n)) || (n === i && !(e in t))) &&
                      rr(t, e, n);
                  }
                  function Jn(t, e, n) {
                    var r = t[e];
                    (jt.call(t, e) && Mo(r, n) && (n !== i || e in t)) ||
                      rr(t, e, n);
                  }
                  function tr(t, e) {
                    for (var n = t.length; n--; ) if (Mo(t[n][0], e)) return n;
                    return -1;
                  }
                  function er(t, e, n, r) {
                    return (
                      cr(t, function (t, i, s) {
                        e(r, t, n(t), s);
                      }),
                      r
                    );
                  }
                  function nr(t, e) {
                    return t && qi(e, Ll(e), t);
                  }
                  function rr(t, e, n) {
                    "__proto__" == e && te
                      ? te(t, e, {
                          configurable: !0,
                          enumerable: !0,
                          value: n,
                          writable: !0,
                        })
                      : (t[e] = n);
                  }
                  function ir(t, e) {
                    for (
                      var n = -1, s = e.length, o = r(s), l = null == t;
                      ++n < s;

                    )
                      o[n] = l ? i : Al(t, e[n]);
                    return o;
                  }
                  function sr(t, e, n) {
                    return (
                      t == t &&
                        (n !== i && (t = t <= n ? t : n),
                        e !== i && (t = t >= e ? t : e)),
                      t
                    );
                  }
                  function or(t, e, n, r, s, o) {
                    var l,
                      a = 1 & e,
                      u = 2 & e,
                      c = 4 & e;
                    if ((n && (l = s ? n(t, r, s, o) : n(t)), l !== i))
                      return l;
                    if (!Jo(t)) return t;
                    var h = Fo(t);
                    if (h) {
                      if (
                        ((l = (function (t) {
                          var e = t.length,
                            n = new t.constructor(e);
                          return (
                            e &&
                              "string" == typeof t[0] &&
                              jt.call(t, "index") &&
                              ((n.index = t.index), (n.input = t.input)),
                            n
                          );
                        })(t)),
                        !a)
                      )
                        return ki(t, l);
                    } else {
                      var f = hs(t),
                        d = f == _ || f == x;
                      if (Ko(t)) return _i(t, a);
                      if (f == E || f == g || (d && !s)) {
                        if (((l = u || d ? {} : ds(t)), !a))
                          return u
                            ? (function (t, e) {
                                return qi(t, cs(t), e);
                              })(
                                t,
                                (function (t, e) {
                                  return t && qi(e, Ol(e), t);
                                })(l, t)
                              )
                            : (function (t, e) {
                                return qi(t, us(t), e);
                              })(t, nr(l, t));
                      } else {
                        if (!se[f]) return s ? t : {};
                        l = (function (t, e, n) {
                          var r,
                            i = t.constructor;
                          switch (e) {
                            case O:
                              return xi(t);
                            case v:
                            case b:
                              return new i(+t);
                            case T:
                              return (function (t, e) {
                                var n = e ? xi(t.buffer) : t.buffer;
                                return new t.constructor(
                                  n,
                                  t.byteOffset,
                                  t.byteLength
                                );
                              })(t, n);
                            case j:
                            case C:
                            case R:
                            case I:
                            case P:
                            case B:
                            case M:
                            case U:
                            case D:
                              return wi(t, n);
                            case w:
                              return new i();
                            case N:
                            case Z:
                              return new i(t);
                            case k:
                              return (function (t) {
                                var e = new t.constructor(t.source, ft.exec(t));
                                return (e.lastIndex = t.lastIndex), e;
                              })(t);
                            case q:
                              return new i();
                            case S:
                              return (r = t), In ? Et(In.call(r)) : {};
                          }
                        })(t, f, a);
                      }
                    }
                    o || (o = new Kn());
                    var p = o.get(t);
                    if (p) return p;
                    o.set(t, l),
                      sl(t)
                        ? t.forEach(function (r) {
                            l.add(or(r, e, n, r, t, o));
                          })
                        : el(t) &&
                          t.forEach(function (r, i) {
                            l.set(i, or(r, e, n, i, t, o));
                          });
                    var m = h ? i : (c ? (u ? es : ts) : u ? Ol : Ll)(t);
                    return (
                      Ae(m || t, function (r, i) {
                        m && (r = t[(i = r)]), Jn(l, i, or(r, e, n, i, t, o));
                      }),
                      l
                    );
                  }
                  function lr(t, e, n) {
                    var r = n.length;
                    if (null == t) return !r;
                    for (t = Et(t); r--; ) {
                      var s = n[r],
                        o = e[s],
                        l = t[s];
                      if ((l === i && !(s in t)) || !o(l)) return !1;
                    }
                    return !0;
                  }
                  function ar(t, e, n) {
                    if ("function" != typeof t) throw new qt(s);
                    return qs(function () {
                      t.apply(i, n);
                    }, e);
                  }
                  function ur(t, e, n, r) {
                    var i = -1,
                      s = Se,
                      o = !0,
                      l = t.length,
                      a = [],
                      u = e.length;
                    if (!l) return a;
                    n && (e = Oe(e, Ge(n))),
                      r
                        ? ((s = Le), (o = !1))
                        : e.length >= 200 &&
                          ((s = Qe), (o = !1), (e = new Wn(e)));
                    t: for (; ++i < l; ) {
                      var c = t[i],
                        h = null == n ? c : n(c);
                      if (((c = r || 0 !== c ? c : 0), o && h == h)) {
                        for (var f = u; f--; ) if (e[f] === h) continue t;
                        a.push(c);
                      } else s(e, h, r) || a.push(c);
                    }
                    return a;
                  }
                  (Bn.templateSettings = {
                    escape: G,
                    evaluate: Y,
                    interpolate: Q,
                    variable: "",
                    imports: { _: Bn },
                  }),
                    (Bn.prototype = Un.prototype),
                    (Bn.prototype.constructor = Bn),
                    (Dn.prototype = Mn(Un.prototype)),
                    (Dn.prototype.constructor = Dn),
                    (zn.prototype = Mn(Un.prototype)),
                    (zn.prototype.constructor = zn),
                    (Fn.prototype.clear = function () {
                      (this.__data__ = qn ? qn(null) : {}), (this.size = 0);
                    }),
                    (Fn.prototype.delete = function (t) {
                      var e = this.has(t) && delete this.__data__[t];
                      return (this.size -= e ? 1 : 0), e;
                    }),
                    (Fn.prototype.get = function (t) {
                      var e = this.__data__;
                      if (qn) {
                        var n = e[t];
                        return n === o ? i : n;
                      }
                      return jt.call(e, t) ? e[t] : i;
                    }),
                    (Fn.prototype.has = function (t) {
                      var e = this.__data__;
                      return qn ? e[t] !== i : jt.call(e, t);
                    }),
                    (Fn.prototype.set = function (t, e) {
                      var n = this.__data__;
                      return (
                        (this.size += this.has(t) ? 0 : 1),
                        (n[t] = qn && e === i ? o : e),
                        this
                      );
                    }),
                    ($n.prototype.clear = function () {
                      (this.__data__ = []), (this.size = 0);
                    }),
                    ($n.prototype.delete = function (t) {
                      var e = this.__data__,
                        n = tr(e, t);
                      return !(
                        n < 0 ||
                        (n == e.length - 1 ? e.pop() : Kt.call(e, n, 1),
                        --this.size,
                        0)
                      );
                    }),
                    ($n.prototype.get = function (t) {
                      var e = this.__data__,
                        n = tr(e, t);
                      return n < 0 ? i : e[n][1];
                    }),
                    ($n.prototype.has = function (t) {
                      return tr(this.__data__, t) > -1;
                    }),
                    ($n.prototype.set = function (t, e) {
                      var n = this.__data__,
                        r = tr(n, t);
                      return (
                        r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e),
                        this
                      );
                    }),
                    (Hn.prototype.clear = function () {
                      (this.size = 0),
                        (this.__data__ = {
                          hash: new Fn(),
                          map: new (Nn || $n)(),
                          string: new Fn(),
                        });
                    }),
                    (Hn.prototype.delete = function (t) {
                      var e = os(this, t).delete(t);
                      return (this.size -= e ? 1 : 0), e;
                    }),
                    (Hn.prototype.get = function (t) {
                      return os(this, t).get(t);
                    }),
                    (Hn.prototype.has = function (t) {
                      return os(this, t).has(t);
                    }),
                    (Hn.prototype.set = function (t, e) {
                      var n = os(this, t),
                        r = n.size;
                      return (
                        n.set(t, e), (this.size += n.size == r ? 0 : 1), this
                      );
                    }),
                    (Wn.prototype.add = Wn.prototype.push =
                      function (t) {
                        return this.__data__.set(t, o), this;
                      }),
                    (Wn.prototype.has = function (t) {
                      return this.__data__.has(t);
                    }),
                    (Kn.prototype.clear = function () {
                      (this.__data__ = new $n()), (this.size = 0);
                    }),
                    (Kn.prototype.delete = function (t) {
                      var e = this.__data__,
                        n = e.delete(t);
                      return (this.size = e.size), n;
                    }),
                    (Kn.prototype.get = function (t) {
                      return this.__data__.get(t);
                    }),
                    (Kn.prototype.has = function (t) {
                      return this.__data__.has(t);
                    }),
                    (Kn.prototype.set = function (t, e) {
                      var n = this.__data__;
                      if (n instanceof $n) {
                        var r = n.__data__;
                        if (!Nn || r.length < 199)
                          return r.push([t, e]), (this.size = ++n.size), this;
                        n = this.__data__ = new Hn(r);
                      }
                      return n.set(t, e), (this.size = n.size), this;
                    });
                  var cr = Li(br),
                    hr = Li(yr, !0);
                  function fr(t, e) {
                    var n = !0;
                    return (
                      cr(t, function (t, r, i) {
                        return (n = !!e(t, r, i));
                      }),
                      n
                    );
                  }
                  function dr(t, e, n) {
                    for (var r = -1, s = t.length; ++r < s; ) {
                      var o = t[r],
                        l = e(o);
                      if (null != l && (a === i ? l == l && !ll(l) : n(l, a)))
                        var a = l,
                          u = o;
                    }
                    return u;
                  }
                  function pr(t, e) {
                    var n = [];
                    return (
                      cr(t, function (t, r, i) {
                        e(t, r, i) && n.push(t);
                      }),
                      n
                    );
                  }
                  function gr(t, e, n, r, i) {
                    var s = -1,
                      o = t.length;
                    for (n || (n = ps), i || (i = []); ++s < o; ) {
                      var l = t[s];
                      e > 0 && n(l)
                        ? e > 1
                          ? gr(l, e - 1, n, r, i)
                          : Te(i, l)
                        : r || (i[i.length] = l);
                    }
                    return i;
                  }
                  var mr = Oi(),
                    vr = Oi(!0);
                  function br(t, e) {
                    return t && mr(t, e, Ll);
                  }
                  function yr(t, e) {
                    return t && vr(t, e, Ll);
                  }
                  function _r(t, e) {
                    return Ze(e, function (e) {
                      return Yo(t[e]);
                    });
                  }
                  function xr(t, e) {
                    for (
                      var n = 0, r = (e = mi(e, t)).length;
                      null != t && n < r;

                    )
                      t = t[Rs(e[n++])];
                    return n && n == r ? t : i;
                  }
                  function wr(t, e, n) {
                    var r = e(t);
                    return Fo(t) ? r : Te(r, n(t));
                  }
                  function Nr(t) {
                    return null == t
                      ? t === i
                        ? "[object Undefined]"
                        : "[object Null]"
                      : Xt && Xt in Et(t)
                      ? (function (t) {
                          var e = jt.call(t, Xt),
                            n = t[Xt];
                          try {
                            t[Xt] = i;
                            var r = !0;
                          } catch (t) {}
                          var s = It.call(t);
                          return r && (e ? (t[Xt] = n) : delete t[Xt]), s;
                        })(t)
                      : (function (t) {
                          return It.call(t);
                        })(t);
                  }
                  function Er(t, e) {
                    return t > e;
                  }
                  function Ar(t, e) {
                    return null != t && jt.call(t, e);
                  }
                  function kr(t, e) {
                    return null != t && e in Et(t);
                  }
                  function qr(t, e, n) {
                    for (
                      var s = n ? Le : Se,
                        o = t[0].length,
                        l = t.length,
                        a = l,
                        u = r(l),
                        c = 1 / 0,
                        h = [];
                      a--;

                    ) {
                      var f = t[a];
                      a && e && (f = Oe(f, Ge(e))),
                        (c = vn(f.length, c)),
                        (u[a] =
                          !n && (e || (o >= 120 && f.length >= 120))
                            ? new Wn(a && f)
                            : i);
                    }
                    f = t[0];
                    var d = -1,
                      p = u[0];
                    t: for (; ++d < o && h.length < c; ) {
                      var g = f[d],
                        m = e ? e(g) : g;
                      if (
                        ((g = n || 0 !== g ? g : 0),
                        !(p ? Qe(p, m) : s(h, m, n)))
                      ) {
                        for (a = l; --a; ) {
                          var v = u[a];
                          if (!(v ? Qe(v, m) : s(t[a], m, n))) continue t;
                        }
                        p && p.push(m), h.push(g);
                      }
                    }
                    return h;
                  }
                  function Zr(t, e, n) {
                    var r =
                      null == (t = Es(t, (e = mi(e, t)))) ? t : t[Rs(Vs(e))];
                    return null == r ? i : Ne(r, t, n);
                  }
                  function Sr(t) {
                    return tl(t) && Nr(t) == g;
                  }
                  function Lr(t, e, n, r, s) {
                    return (
                      t === e ||
                      (null == t || null == e || (!tl(t) && !tl(e))
                        ? t != t && e != e
                        : (function (t, e, n, r, s, o) {
                            var l = Fo(t),
                              a = Fo(e),
                              u = l ? m : hs(t),
                              c = a ? m : hs(e),
                              h = (u = u == g ? E : u) == E,
                              f = (c = c == g ? E : c) == E,
                              d = u == c;
                            if (d && Ko(t)) {
                              if (!Ko(e)) return !1;
                              (l = !0), (h = !1);
                            }
                            if (d && !h)
                              return (
                                o || (o = new Kn()),
                                l || al(t)
                                  ? Xi(t, e, n, r, s, o)
                                  : (function (t, e, n, r, i, s, o) {
                                      switch (n) {
                                        case T:
                                          if (
                                            t.byteLength != e.byteLength ||
                                            t.byteOffset != e.byteOffset
                                          )
                                            return !1;
                                          (t = t.buffer), (e = e.buffer);
                                        case O:
                                          return !(
                                            t.byteLength != e.byteLength ||
                                            !s(new zt(t), new zt(e))
                                          );
                                        case v:
                                        case b:
                                        case N:
                                          return Mo(+t, +e);
                                        case y:
                                          return (
                                            t.name == e.name &&
                                            t.message == e.message
                                          );
                                        case k:
                                        case Z:
                                          return t == e + "";
                                        case w:
                                          var l = sn;
                                        case q:
                                          var a = 1 & r;
                                          if (
                                            (l || (l = an),
                                            t.size != e.size && !a)
                                          )
                                            return !1;
                                          var u = o.get(t);
                                          if (u) return u == e;
                                          (r |= 2), o.set(t, e);
                                          var c = Xi(l(t), l(e), r, i, s, o);
                                          return o.delete(t), c;
                                        case S:
                                          if (In)
                                            return In.call(t) == In.call(e);
                                      }
                                      return !1;
                                    })(t, e, u, n, r, s, o)
                              );
                            if (!(1 & n)) {
                              var p = h && jt.call(t, "__wrapped__"),
                                _ = f && jt.call(e, "__wrapped__");
                              if (p || _) {
                                var x = p ? t.value() : t,
                                  A = _ ? e.value() : e;
                                return o || (o = new Kn()), s(x, A, n, r, o);
                              }
                            }
                            return (
                              !!d &&
                              (o || (o = new Kn()),
                              (function (t, e, n, r, s, o) {
                                var l = 1 & n,
                                  a = ts(t),
                                  u = a.length;
                                if (u != ts(e).length && !l) return !1;
                                for (var c = u; c--; ) {
                                  var h = a[c];
                                  if (!(l ? h in e : jt.call(e, h))) return !1;
                                }
                                var f = o.get(t),
                                  d = o.get(e);
                                if (f && d) return f == e && d == t;
                                var p = !0;
                                o.set(t, e), o.set(e, t);
                                for (var g = l; ++c < u; ) {
                                  var m = t[(h = a[c])],
                                    v = e[h];
                                  if (r)
                                    var b = l
                                      ? r(v, m, h, e, t, o)
                                      : r(m, v, h, t, e, o);
                                  if (
                                    !(b === i ? m === v || s(m, v, n, r, o) : b)
                                  ) {
                                    p = !1;
                                    break;
                                  }
                                  g || (g = "constructor" == h);
                                }
                                if (p && !g) {
                                  var y = t.constructor,
                                    _ = e.constructor;
                                  y == _ ||
                                    !("constructor" in t) ||
                                    !("constructor" in e) ||
                                    ("function" == typeof y &&
                                      y instanceof y &&
                                      "function" == typeof _ &&
                                      _ instanceof _) ||
                                    (p = !1);
                                }
                                return o.delete(t), o.delete(e), p;
                              })(t, e, n, r, s, o))
                            );
                          })(t, e, n, r, Lr, s))
                    );
                  }
                  function Or(t, e, n, r) {
                    var s = n.length,
                      o = s,
                      l = !r;
                    if (null == t) return !o;
                    for (t = Et(t); s--; ) {
                      var a = n[s];
                      if (l && a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
                        return !1;
                    }
                    for (; ++s < o; ) {
                      var u = (a = n[s])[0],
                        c = t[u],
                        h = a[1];
                      if (l && a[2]) {
                        if (c === i && !(u in t)) return !1;
                      } else {
                        var f = new Kn();
                        if (r) var d = r(c, h, u, t, e, f);
                        if (!(d === i ? Lr(h, c, 3, r, f) : d)) return !1;
                      }
                    }
                    return !0;
                  }
                  function Tr(t) {
                    return (
                      !(!Jo(t) || ((e = t), Rt && Rt in e)) &&
                      (Yo(t) ? Mt : gt).test(Is(t))
                    );
                    var e;
                  }
                  function jr(t) {
                    return "function" == typeof t
                      ? t
                      : null == t
                      ? na
                      : "object" == typeof t
                      ? Fo(t)
                        ? Br(t[0], t[1])
                        : Pr(t)
                      : ha(t);
                  }
                  function Cr(t) {
                    if (!_s(t)) return gn(t);
                    var e = [];
                    for (var n in Et(t))
                      jt.call(t, n) && "constructor" != n && e.push(n);
                    return e;
                  }
                  function Rr(t, e) {
                    return t < e;
                  }
                  function Ir(t, e) {
                    var n = -1,
                      i = Ho(t) ? r(t.length) : [];
                    return (
                      cr(t, function (t, r, s) {
                        i[++n] = e(t, r, s);
                      }),
                      i
                    );
                  }
                  function Pr(t) {
                    var e = ls(t);
                    return 1 == e.length && e[0][2]
                      ? ws(e[0][0], e[0][1])
                      : function (n) {
                          return n === t || Or(n, t, e);
                        };
                  }
                  function Br(t, e) {
                    return vs(t) && xs(e)
                      ? ws(Rs(t), e)
                      : function (n) {
                          var r = Al(n, t);
                          return r === i && r === e ? kl(n, t) : Lr(e, r, 3);
                        };
                  }
                  function Mr(t, e, n, r, s) {
                    t !== e &&
                      mr(
                        e,
                        function (o, l) {
                          if ((s || (s = new Kn()), Jo(o)))
                            !(function (t, e, n, r, s, o, l) {
                              var a = As(t, n),
                                u = As(e, n),
                                c = l.get(u);
                              if (c) Xn(t, n, c);
                              else {
                                var h = o ? o(a, u, n + "", t, e, l) : i,
                                  f = h === i;
                                if (f) {
                                  var d = Fo(u),
                                    p = !d && Ko(u),
                                    g = !d && !p && al(u);
                                  (h = u),
                                    d || p || g
                                      ? Fo(a)
                                        ? (h = a)
                                        : Wo(a)
                                        ? (h = ki(a))
                                        : p
                                        ? ((f = !1), (h = _i(u, !0)))
                                        : g
                                        ? ((f = !1), (h = wi(u, !0)))
                                        : (h = [])
                                      : rl(u) || zo(u)
                                      ? ((h = a),
                                        zo(a)
                                          ? (h = ml(a))
                                          : (Jo(a) && !Yo(a)) || (h = ds(u)))
                                      : (f = !1);
                                }
                                f &&
                                  (l.set(u, h), s(h, u, r, o, l), l.delete(u)),
                                  Xn(t, n, h);
                              }
                            })(t, e, l, n, Mr, r, s);
                          else {
                            var a = r ? r(As(t, l), o, l + "", t, e, s) : i;
                            a === i && (a = o), Xn(t, l, a);
                          }
                        },
                        Ol
                      );
                  }
                  function Ur(t, e) {
                    var n = t.length;
                    if (n) return gs((e += e < 0 ? n : 0), n) ? t[e] : i;
                  }
                  function Dr(t, e, n) {
                    e = e.length
                      ? Oe(e, function (t) {
                          return Fo(t)
                            ? function (e) {
                                return xr(e, 1 === t.length ? t[0] : t);
                              }
                            : t;
                        })
                      : [na];
                    var r = -1;
                    e = Oe(e, Ge(ss()));
                    var i = Ir(t, function (t, n, i) {
                      var s = Oe(e, function (e) {
                        return e(t);
                      });
                      return { criteria: s, index: ++r, value: t };
                    });
                    return (function (t, e) {
                      var r = t.length;
                      for (
                        t.sort(function (t, e) {
                          return (function (t, e, n) {
                            for (
                              var r = -1,
                                i = t.criteria,
                                s = e.criteria,
                                o = i.length,
                                l = n.length;
                              ++r < o;

                            ) {
                              var a = Ni(i[r], s[r]);
                              if (a)
                                return r >= l
                                  ? a
                                  : a * ("desc" == n[r] ? -1 : 1);
                            }
                            return t.index - e.index;
                          })(t, e, n);
                        });
                        r--;

                      )
                        t[r] = t[r].value;
                      return t;
                    })(i);
                  }
                  function zr(t, e, n) {
                    for (var r = -1, i = e.length, s = {}; ++r < i; ) {
                      var o = e[r],
                        l = xr(t, o);
                      n(l, o) && Yr(s, mi(o, t), l);
                    }
                    return s;
                  }
                  function Fr(t, e, n, r) {
                    var i = r ? Ue : Me,
                      s = -1,
                      o = e.length,
                      l = t;
                    for (
                      t === e && (e = ki(e)), n && (l = Oe(t, Ge(n)));
                      ++s < o;

                    )
                      for (
                        var a = 0, u = e[s], c = n ? n(u) : u;
                        (a = i(l, c, a, r)) > -1;

                      )
                        l !== t && Kt.call(l, a, 1), Kt.call(t, a, 1);
                    return t;
                  }
                  function $r(t, e) {
                    for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                      var i = e[n];
                      if (n == r || i !== s) {
                        var s = i;
                        gs(i) ? Kt.call(t, i, 1) : ai(t, i);
                      }
                    }
                    return t;
                  }
                  function Hr(t, e) {
                    return t + de(_n() * (e - t + 1));
                  }
                  function Wr(t, e) {
                    var n = "";
                    if (!t || e < 1 || e > h) return n;
                    do {
                      e % 2 && (n += t), (e = de(e / 2)) && (t += t);
                    } while (e);
                    return n;
                  }
                  function Kr(t, e) {
                    return Zs(Ns(t, e, na), t + "");
                  }
                  function Vr(t) {
                    return Gn(Ml(t));
                  }
                  function Gr(t, e) {
                    var n = Ml(t);
                    return Os(n, sr(e, 0, n.length));
                  }
                  function Yr(t, e, n, r) {
                    if (!Jo(t)) return t;
                    for (
                      var s = -1, o = (e = mi(e, t)).length, l = o - 1, a = t;
                      null != a && ++s < o;

                    ) {
                      var u = Rs(e[s]),
                        c = n;
                      if (
                        "__proto__" === u ||
                        "constructor" === u ||
                        "prototype" === u
                      )
                        return t;
                      if (s != l) {
                        var h = a[u];
                        (c = r ? r(h, u, a) : i) === i &&
                          (c = Jo(h) ? h : gs(e[s + 1]) ? [] : {});
                      }
                      Jn(a, u, c), (a = a[u]);
                    }
                    return t;
                  }
                  var Qr = Zn
                      ? function (t, e) {
                          return Zn.set(t, e), t;
                        }
                      : na,
                    Xr = te
                      ? function (t, e) {
                          return te(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Jl(e),
                            writable: !0,
                          });
                        }
                      : na;
                  function Jr(t) {
                    return Os(Ml(t));
                  }
                  function ti(t, e, n) {
                    var i = -1,
                      s = t.length;
                    e < 0 && (e = -e > s ? 0 : s + e),
                      (n = n > s ? s : n) < 0 && (n += s),
                      (s = e > n ? 0 : (n - e) >>> 0),
                      (e >>>= 0);
                    for (var o = r(s); ++i < s; ) o[i] = t[i + e];
                    return o;
                  }
                  function ei(t, e) {
                    var n;
                    return (
                      cr(t, function (t, r, i) {
                        return !(n = e(t, r, i));
                      }),
                      !!n
                    );
                  }
                  function ni(t, e, n) {
                    var r = 0,
                      i = null == t ? r : t.length;
                    if ("number" == typeof e && e == e && i <= 2147483647) {
                      for (; r < i; ) {
                        var s = (r + i) >>> 1,
                          o = t[s];
                        null !== o && !ll(o) && (n ? o <= e : o < e)
                          ? (r = s + 1)
                          : (i = s);
                      }
                      return i;
                    }
                    return ri(t, e, na, n);
                  }
                  function ri(t, e, n, r) {
                    var s = 0,
                      o = null == t ? 0 : t.length;
                    if (0 === o) return 0;
                    for (
                      var l = (e = n(e)) != e,
                        a = null === e,
                        u = ll(e),
                        c = e === i;
                      s < o;

                    ) {
                      var h = de((s + o) / 2),
                        f = n(t[h]),
                        d = f !== i,
                        p = null === f,
                        g = f == f,
                        m = ll(f);
                      if (l) var v = r || g;
                      else
                        v = c
                          ? g && (r || d)
                          : a
                          ? g && d && (r || !p)
                          : u
                          ? g && d && !p && (r || !m)
                          : !p && !m && (r ? f <= e : f < e);
                      v ? (s = h + 1) : (o = h);
                    }
                    return vn(o, 4294967294);
                  }
                  function ii(t, e) {
                    for (var n = -1, r = t.length, i = 0, s = []; ++n < r; ) {
                      var o = t[n],
                        l = e ? e(o) : o;
                      if (!n || !Mo(l, a)) {
                        var a = l;
                        s[i++] = 0 === o ? 0 : o;
                      }
                    }
                    return s;
                  }
                  function si(t) {
                    return "number" == typeof t ? t : ll(t) ? f : +t;
                  }
                  function oi(t) {
                    if ("string" == typeof t) return t;
                    if (Fo(t)) return Oe(t, oi) + "";
                    if (ll(t)) return Pn ? Pn.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
                  }
                  function li(t, e, n) {
                    var r = -1,
                      i = Se,
                      s = t.length,
                      o = !0,
                      l = [],
                      a = l;
                    if (n) (o = !1), (i = Le);
                    else if (s >= 200) {
                      var u = e ? null : Wi(t);
                      if (u) return an(u);
                      (o = !1), (i = Qe), (a = new Wn());
                    } else a = e ? [] : l;
                    t: for (; ++r < s; ) {
                      var c = t[r],
                        h = e ? e(c) : c;
                      if (((c = n || 0 !== c ? c : 0), o && h == h)) {
                        for (var f = a.length; f--; )
                          if (a[f] === h) continue t;
                        e && a.push(h), l.push(c);
                      } else i(a, h, n) || (a !== l && a.push(h), l.push(c));
                    }
                    return l;
                  }
                  function ai(t, e) {
                    return (
                      null == (t = Es(t, (e = mi(e, t)))) || delete t[Rs(Vs(e))]
                    );
                  }
                  function ui(t, e, n, r) {
                    return Yr(t, e, n(xr(t, e)), r);
                  }
                  function ci(t, e, n, r) {
                    for (
                      var i = t.length, s = r ? i : -1;
                      (r ? s-- : ++s < i) && e(t[s], s, t);

                    );
                    return n
                      ? ti(t, r ? 0 : s, r ? s + 1 : i)
                      : ti(t, r ? s + 1 : 0, r ? i : s);
                  }
                  function hi(t, e) {
                    var n = t;
                    return (
                      n instanceof zn && (n = n.value()),
                      je(
                        e,
                        function (t, e) {
                          return e.func.apply(e.thisArg, Te([t], e.args));
                        },
                        n
                      )
                    );
                  }
                  function fi(t, e, n) {
                    var i = t.length;
                    if (i < 2) return i ? li(t[0]) : [];
                    for (var s = -1, o = r(i); ++s < i; )
                      for (var l = t[s], a = -1; ++a < i; )
                        a != s && (o[s] = ur(o[s] || l, t[a], e, n));
                    return li(gr(o, 1), e, n);
                  }
                  function di(t, e, n) {
                    for (
                      var r = -1, s = t.length, o = e.length, l = {};
                      ++r < s;

                    ) {
                      var a = r < o ? e[r] : i;
                      n(l, t[r], a);
                    }
                    return l;
                  }
                  function pi(t) {
                    return Wo(t) ? t : [];
                  }
                  function gi(t) {
                    return "function" == typeof t ? t : na;
                  }
                  function mi(t, e) {
                    return Fo(t) ? t : vs(t, e) ? [t] : Cs(vl(t));
                  }
                  var vi = Kr;
                  function bi(t, e, n) {
                    var r = t.length;
                    return (
                      (n = n === i ? r : n), !e && n >= r ? t : ti(t, e, n)
                    );
                  }
                  var yi =
                    oe ||
                    function (t) {
                      return he.clearTimeout(t);
                    };
                  function _i(t, e) {
                    if (e) return t.slice();
                    var n = t.length,
                      r = Ft ? Ft(n) : new t.constructor(n);
                    return t.copy(r), r;
                  }
                  function xi(t) {
                    var e = new t.constructor(t.byteLength);
                    return new zt(e).set(new zt(t)), e;
                  }
                  function wi(t, e) {
                    var n = e ? xi(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.length);
                  }
                  function Ni(t, e) {
                    if (t !== e) {
                      var n = t !== i,
                        r = null === t,
                        s = t == t,
                        o = ll(t),
                        l = e !== i,
                        a = null === e,
                        u = e == e,
                        c = ll(e);
                      if (
                        (!a && !c && !o && t > e) ||
                        (o && l && u && !a && !c) ||
                        (r && l && u) ||
                        (!n && u) ||
                        !s
                      )
                        return 1;
                      if (
                        (!r && !o && !c && t < e) ||
                        (c && n && s && !r && !o) ||
                        (a && n && s) ||
                        (!l && s) ||
                        !u
                      )
                        return -1;
                    }
                    return 0;
                  }
                  function Ei(t, e, n, i) {
                    for (
                      var s = -1,
                        o = t.length,
                        l = n.length,
                        a = -1,
                        u = e.length,
                        c = mn(o - l, 0),
                        h = r(u + c),
                        f = !i;
                      ++a < u;

                    )
                      h[a] = e[a];
                    for (; ++s < l; ) (f || s < o) && (h[n[s]] = t[s]);
                    for (; c--; ) h[a++] = t[s++];
                    return h;
                  }
                  function Ai(t, e, n, i) {
                    for (
                      var s = -1,
                        o = t.length,
                        l = -1,
                        a = n.length,
                        u = -1,
                        c = e.length,
                        h = mn(o - a, 0),
                        f = r(h + c),
                        d = !i;
                      ++s < h;

                    )
                      f[s] = t[s];
                    for (var p = s; ++u < c; ) f[p + u] = e[u];
                    for (; ++l < a; ) (d || s < o) && (f[p + n[l]] = t[s++]);
                    return f;
                  }
                  function ki(t, e) {
                    var n = -1,
                      i = t.length;
                    for (e || (e = r(i)); ++n < i; ) e[n] = t[n];
                    return e;
                  }
                  function qi(t, e, n, r) {
                    var s = !n;
                    n || (n = {});
                    for (var o = -1, l = e.length; ++o < l; ) {
                      var a = e[o],
                        u = r ? r(n[a], t[a], a, n, t) : i;
                      u === i && (u = t[a]), s ? rr(n, a, u) : Jn(n, a, u);
                    }
                    return n;
                  }
                  function Zi(t, e) {
                    return function (n, r) {
                      var i = Fo(n) ? Ee : er,
                        s = e ? e() : {};
                      return i(n, t, ss(r, 2), s);
                    };
                  }
                  function Si(t) {
                    return Kr(function (e, n) {
                      var r = -1,
                        s = n.length,
                        o = s > 1 ? n[s - 1] : i,
                        l = s > 2 ? n[2] : i;
                      for (
                        o =
                          t.length > 3 && "function" == typeof o ? (s--, o) : i,
                          l &&
                            ms(n[0], n[1], l) &&
                            ((o = s < 3 ? i : o), (s = 1)),
                          e = Et(e);
                        ++r < s;

                      ) {
                        var a = n[r];
                        a && t(e, a, r, o);
                      }
                      return e;
                    });
                  }
                  function Li(t, e) {
                    return function (n, r) {
                      if (null == n) return n;
                      if (!Ho(n)) return t(n, r);
                      for (
                        var i = n.length, s = e ? i : -1, o = Et(n);
                        (e ? s-- : ++s < i) && !1 !== r(o[s], s, o);

                      );
                      return n;
                    };
                  }
                  function Oi(t) {
                    return function (e, n, r) {
                      for (
                        var i = -1, s = Et(e), o = r(e), l = o.length;
                        l--;

                      ) {
                        var a = o[t ? l : ++i];
                        if (!1 === n(s[a], a, s)) break;
                      }
                      return e;
                    };
                  }
                  function Ti(t) {
                    return function (e) {
                      var n = rn((e = vl(e))) ? hn(e) : i,
                        r = n ? n[0] : e.charAt(0),
                        s = n ? bi(n, 1).join("") : e.slice(1);
                      return r[t]() + s;
                    };
                  }
                  function ji(t) {
                    return function (e) {
                      return je(Yl(zl(e).replace(Yt, "")), t, "");
                    };
                  }
                  function Ci(t) {
                    return function () {
                      var e = arguments;
                      switch (e.length) {
                        case 0:
                          return new t();
                        case 1:
                          return new t(e[0]);
                        case 2:
                          return new t(e[0], e[1]);
                        case 3:
                          return new t(e[0], e[1], e[2]);
                        case 4:
                          return new t(e[0], e[1], e[2], e[3]);
                        case 5:
                          return new t(e[0], e[1], e[2], e[3], e[4]);
                        case 6:
                          return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                        case 7:
                          return new t(
                            e[0],
                            e[1],
                            e[2],
                            e[3],
                            e[4],
                            e[5],
                            e[6]
                          );
                      }
                      var n = Mn(t.prototype),
                        r = t.apply(n, e);
                      return Jo(r) ? r : n;
                    };
                  }
                  function Ri(t) {
                    return function (e, n, r) {
                      var s = Et(e);
                      if (!Ho(e)) {
                        var o = ss(n, 3);
                        (e = Ll(e)),
                          (n = function (t) {
                            return o(s[t], t, s);
                          });
                      }
                      var l = t(e, n, r);
                      return l > -1 ? s[o ? e[l] : l] : i;
                    };
                  }
                  function Ii(t) {
                    return Ji(function (e) {
                      var n = e.length,
                        r = n,
                        o = Dn.prototype.thru;
                      for (t && e.reverse(); r--; ) {
                        var l = e[r];
                        if ("function" != typeof l) throw new qt(s);
                        if (o && !a && "wrapper" == rs(l))
                          var a = new Dn([], !0);
                      }
                      for (r = a ? r : n; ++r < n; ) {
                        var u = rs((l = e[r])),
                          c = "wrapper" == u ? ns(l) : i;
                        a =
                          c &&
                          bs(c[0]) &&
                          424 == c[1] &&
                          !c[4].length &&
                          1 == c[9]
                            ? a[rs(c[0])].apply(a, c[3])
                            : 1 == l.length && bs(l)
                            ? a[u]()
                            : a.thru(l);
                      }
                      return function () {
                        var t = arguments,
                          r = t[0];
                        if (a && 1 == t.length && Fo(r))
                          return a.plant(r).value();
                        for (
                          var i = 0, s = n ? e[i].apply(this, t) : r;
                          ++i < n;

                        )
                          s = e[i].call(this, s);
                        return s;
                      };
                    });
                  }
                  function Pi(t, e, n, s, o, l, a, c, h, f) {
                    var d = e & u,
                      p = 1 & e,
                      g = 2 & e,
                      m = 24 & e,
                      v = 512 & e,
                      b = g ? i : Ci(t);
                    return function u() {
                      for (var y = arguments.length, _ = r(y), x = y; x--; )
                        _[x] = arguments[x];
                      if (m)
                        var w = is(u),
                          N = (function (t, e) {
                            for (var n = t.length, r = 0; n--; )
                              t[n] === e && ++r;
                            return r;
                          })(_, w);
                      if (
                        (s && (_ = Ei(_, s, o, m)),
                        l && (_ = Ai(_, l, a, m)),
                        (y -= N),
                        m && y < f)
                      ) {
                        var E = ln(_, w);
                        return $i(
                          t,
                          e,
                          Pi,
                          u.placeholder,
                          n,
                          _,
                          E,
                          c,
                          h,
                          f - y
                        );
                      }
                      var A = p ? n : this,
                        k = g ? A[t] : t;
                      return (
                        (y = _.length),
                        c
                          ? (_ = (function (t, e) {
                              for (
                                var n = t.length,
                                  r = vn(e.length, n),
                                  s = ki(t);
                                r--;

                              ) {
                                var o = e[r];
                                t[r] = gs(o, n) ? s[o] : i;
                              }
                              return t;
                            })(_, c))
                          : v && y > 1 && _.reverse(),
                        d && h < y && (_.length = h),
                        this &&
                          this !== he &&
                          this instanceof u &&
                          (k = b || Ci(k)),
                        k.apply(A, _)
                      );
                    };
                  }
                  function Bi(t, e) {
                    return function (n, r) {
                      return (function (t, e, n, r) {
                        return (
                          br(t, function (t, i, s) {
                            e(r, n(t), i, s);
                          }),
                          r
                        );
                      })(n, t, e(r), {});
                    };
                  }
                  function Mi(t, e) {
                    return function (n, r) {
                      var s;
                      if (n === i && r === i) return e;
                      if ((n !== i && (s = n), r !== i)) {
                        if (s === i) return r;
                        "string" == typeof n || "string" == typeof r
                          ? ((n = oi(n)), (r = oi(r)))
                          : ((n = si(n)), (r = si(r))),
                          (s = t(n, r));
                      }
                      return s;
                    };
                  }
                  function Ui(t) {
                    return Ji(function (e) {
                      return (
                        (e = Oe(e, Ge(ss()))),
                        Kr(function (n) {
                          var r = this;
                          return t(e, function (t) {
                            return Ne(t, r, n);
                          });
                        })
                      );
                    });
                  }
                  function Di(t, e) {
                    var n = (e = e === i ? " " : oi(e)).length;
                    if (n < 2) return n ? Wr(e, t) : e;
                    var r = Wr(e, fe(t / cn(e)));
                    return rn(e) ? bi(hn(r), 0, t).join("") : r.slice(0, t);
                  }
                  function zi(t) {
                    return function (e, n, s) {
                      return (
                        s && "number" != typeof s && ms(e, n, s) && (n = s = i),
                        (e = fl(e)),
                        n === i ? ((n = e), (e = 0)) : (n = fl(n)),
                        (function (t, e, n, i) {
                          for (
                            var s = -1,
                              o = mn(fe((e - t) / (n || 1)), 0),
                              l = r(o);
                            o--;

                          )
                            (l[i ? o : ++s] = t), (t += n);
                          return l;
                        })(e, n, (s = s === i ? (e < n ? 1 : -1) : fl(s)), t)
                      );
                    };
                  }
                  function Fi(t) {
                    return function (e, n) {
                      return (
                        ("string" == typeof e && "string" == typeof n) ||
                          ((e = gl(e)), (n = gl(n))),
                        t(e, n)
                      );
                    };
                  }
                  function $i(t, e, n, r, s, o, l, u, c, h) {
                    var f = 8 & e;
                    (e |= f ? a : 64), 4 & (e &= ~(f ? 64 : a)) || (e &= -4);
                    var d = [
                        t,
                        e,
                        s,
                        f ? o : i,
                        f ? l : i,
                        f ? i : o,
                        f ? i : l,
                        u,
                        c,
                        h,
                      ],
                      p = n.apply(i, d);
                    return bs(t) && ks(p, d), (p.placeholder = r), Ss(p, t, e);
                  }
                  function Hi(t) {
                    var e = Nt[t];
                    return function (t, n) {
                      if (
                        ((t = gl(t)),
                        (n = null == n ? 0 : vn(dl(n), 292)) && Ie(t))
                      ) {
                        var r = (vl(t) + "e").split("e");
                        return +(
                          (r = (vl(e(r[0] + "e" + (+r[1] + n))) + "e").split(
                            "e"
                          ))[0] +
                          "e" +
                          (+r[1] - n)
                        );
                      }
                      return e(t);
                    };
                  }
                  var Wi =
                    An && 1 / an(new An([, -0]))[1] == c
                      ? function (t) {
                          return new An(t);
                        }
                      : la;
                  function Ki(t) {
                    return function (e) {
                      var n = hs(e);
                      return n == w
                        ? sn(e)
                        : n == q
                        ? un(e)
                        : (function (t, e) {
                            return Oe(e, function (e) {
                              return [e, t[e]];
                            });
                          })(e, t(e));
                    };
                  }
                  function Vi(t, e, n, o, c, h, f, d) {
                    var p = 2 & e;
                    if (!p && "function" != typeof t) throw new qt(s);
                    var g = o ? o.length : 0;
                    if (
                      (g || ((e &= -97), (o = c = i)),
                      (f = f === i ? f : mn(dl(f), 0)),
                      (d = d === i ? d : dl(d)),
                      (g -= c ? c.length : 0),
                      64 & e)
                    ) {
                      var m = o,
                        v = c;
                      o = c = i;
                    }
                    var b = p ? i : ns(t),
                      y = [t, e, n, o, c, m, v, h, f, d];
                    if (
                      (b &&
                        (function (t, e) {
                          var n = t[1],
                            r = e[1],
                            i = n | r,
                            s = i < 131,
                            o =
                              (r == u && 8 == n) ||
                              (r == u && 256 == n && t[7].length <= e[8]) ||
                              (384 == r && e[7].length <= e[8] && 8 == n);
                          if (!s && !o) return t;
                          1 & r && ((t[2] = e[2]), (i |= 1 & n ? 0 : 4));
                          var a = e[3];
                          if (a) {
                            var c = t[3];
                            (t[3] = c ? Ei(c, a, e[4]) : a),
                              (t[4] = c ? ln(t[3], l) : e[4]);
                          }
                          (a = e[5]) &&
                            ((c = t[5]),
                            (t[5] = c ? Ai(c, a, e[6]) : a),
                            (t[6] = c ? ln(t[5], l) : e[6])),
                            (a = e[7]) && (t[7] = a),
                            r & u &&
                              (t[8] = null == t[8] ? e[8] : vn(t[8], e[8])),
                            null == t[9] && (t[9] = e[9]),
                            (t[0] = e[0]),
                            (t[1] = i);
                        })(y, b),
                      (t = y[0]),
                      (e = y[1]),
                      (n = y[2]),
                      (o = y[3]),
                      (c = y[4]),
                      !(d = y[9] =
                        y[9] === i ? (p ? 0 : t.length) : mn(y[9] - g, 0)) &&
                        24 & e &&
                        (e &= -25),
                      e && 1 != e)
                    )
                      _ =
                        8 == e || 16 == e
                          ? (function (t, e, n) {
                              var s = Ci(t);
                              return function o() {
                                for (
                                  var l = arguments.length,
                                    a = r(l),
                                    u = l,
                                    c = is(o);
                                  u--;

                                )
                                  a[u] = arguments[u];
                                var h =
                                  l < 3 && a[0] !== c && a[l - 1] !== c
                                    ? []
                                    : ln(a, c);
                                return (l -= h.length) < n
                                  ? $i(
                                      t,
                                      e,
                                      Pi,
                                      o.placeholder,
                                      i,
                                      a,
                                      h,
                                      i,
                                      i,
                                      n - l
                                    )
                                  : Ne(
                                      this && this !== he && this instanceof o
                                        ? s
                                        : t,
                                      this,
                                      a
                                    );
                              };
                            })(t, e, d)
                          : (e != a && 33 != e) || c.length
                          ? Pi.apply(i, y)
                          : (function (t, e, n, i) {
                              var s = 1 & e,
                                o = Ci(t);
                              return function e() {
                                for (
                                  var l = -1,
                                    a = arguments.length,
                                    u = -1,
                                    c = i.length,
                                    h = r(c + a),
                                    f =
                                      this && this !== he && this instanceof e
                                        ? o
                                        : t;
                                  ++u < c;

                                )
                                  h[u] = i[u];
                                for (; a--; ) h[u++] = arguments[++l];
                                return Ne(f, s ? n : this, h);
                              };
                            })(t, e, n, o);
                    else
                      var _ = (function (t, e, n) {
                        var r = 1 & e,
                          i = Ci(t);
                        return function e() {
                          return (
                            this && this !== he && this instanceof e ? i : t
                          ).apply(r ? n : this, arguments);
                        };
                      })(t, e, n);
                    return Ss((b ? Qr : ks)(_, y), t, e);
                  }
                  function Gi(t, e, n, r) {
                    return t === i || (Mo(t, Lt[n]) && !jt.call(r, n)) ? e : t;
                  }
                  function Yi(t, e, n, r, s, o) {
                    return (
                      Jo(t) &&
                        Jo(e) &&
                        (o.set(e, t), Mr(t, e, i, Yi, o), o.delete(e)),
                      t
                    );
                  }
                  function Qi(t) {
                    return rl(t) ? i : t;
                  }
                  function Xi(t, e, n, r, s, o) {
                    var l = 1 & n,
                      a = t.length,
                      u = e.length;
                    if (a != u && !(l && u > a)) return !1;
                    var c = o.get(t),
                      h = o.get(e);
                    if (c && h) return c == e && h == t;
                    var f = -1,
                      d = !0,
                      p = 2 & n ? new Wn() : i;
                    for (o.set(t, e), o.set(e, t); ++f < a; ) {
                      var g = t[f],
                        m = e[f];
                      if (r)
                        var v = l ? r(m, g, f, e, t, o) : r(g, m, f, t, e, o);
                      if (v !== i) {
                        if (v) continue;
                        d = !1;
                        break;
                      }
                      if (p) {
                        if (
                          !Re(e, function (t, e) {
                            if (!Qe(p, e) && (g === t || s(g, t, n, r, o)))
                              return p.push(e);
                          })
                        ) {
                          d = !1;
                          break;
                        }
                      } else if (g !== m && !s(g, m, n, r, o)) {
                        d = !1;
                        break;
                      }
                    }
                    return o.delete(t), o.delete(e), d;
                  }
                  function Ji(t) {
                    return Zs(Ns(t, i, Fs), t + "");
                  }
                  function ts(t) {
                    return wr(t, Ll, us);
                  }
                  function es(t) {
                    return wr(t, Ol, cs);
                  }
                  var ns = Zn
                    ? function (t) {
                        return Zn.get(t);
                      }
                    : la;
                  function rs(t) {
                    for (
                      var e = t.name + "",
                        n = Sn[e],
                        r = jt.call(Sn, e) ? n.length : 0;
                      r--;

                    ) {
                      var i = n[r],
                        s = i.func;
                      if (null == s || s == t) return i.name;
                    }
                    return e;
                  }
                  function is(t) {
                    return (jt.call(Bn, "placeholder") ? Bn : t).placeholder;
                  }
                  function ss() {
                    var t = Bn.iteratee || ra;
                    return (
                      (t = t === ra ? jr : t),
                      arguments.length ? t(arguments[0], arguments[1]) : t
                    );
                  }
                  function os(t, e) {
                    var n,
                      r,
                      i = t.__data__;
                    return (
                      "string" == (r = typeof (n = e)) ||
                      "number" == r ||
                      "symbol" == r ||
                      "boolean" == r
                        ? "__proto__" !== n
                        : null === n
                    )
                      ? i["string" == typeof e ? "string" : "hash"]
                      : i.map;
                  }
                  function ls(t) {
                    for (var e = Ll(t), n = e.length; n--; ) {
                      var r = e[n],
                        i = t[r];
                      e[n] = [r, i, xs(i)];
                    }
                    return e;
                  }
                  function as(t, e) {
                    var n = (function (t, e) {
                      return null == t ? i : t[e];
                    })(t, e);
                    return Tr(n) ? n : i;
                  }
                  var us = ge
                      ? function (t) {
                          return null == t
                            ? []
                            : ((t = Et(t)),
                              Ze(ge(t), function (e) {
                                return Wt.call(t, e);
                              }));
                        }
                      : pa,
                    cs = ge
                      ? function (t) {
                          for (var e = []; t; ) Te(e, us(t)), (t = $t(t));
                          return e;
                        }
                      : pa,
                    hs = Nr;
                  function fs(t, e, n) {
                    for (
                      var r = -1, i = (e = mi(e, t)).length, s = !1;
                      ++r < i;

                    ) {
                      var o = Rs(e[r]);
                      if (!(s = null != t && n(t, o))) break;
                      t = t[o];
                    }
                    return s || ++r != i
                      ? s
                      : !!(i = null == t ? 0 : t.length) &&
                          Xo(i) &&
                          gs(o, i) &&
                          (Fo(t) || zo(t));
                  }
                  function ds(t) {
                    return "function" != typeof t.constructor || _s(t)
                      ? {}
                      : Mn($t(t));
                  }
                  function ps(t) {
                    return Fo(t) || zo(t) || !!(Vt && t && t[Vt]);
                  }
                  function gs(t, e) {
                    var n = typeof t;
                    return (
                      !!(e = null == e ? h : e) &&
                      ("number" == n || ("symbol" != n && vt.test(t))) &&
                      t > -1 &&
                      t % 1 == 0 &&
                      t < e
                    );
                  }
                  function ms(t, e, n) {
                    if (!Jo(n)) return !1;
                    var r = typeof e;
                    return (
                      !!("number" == r
                        ? Ho(n) && gs(e, n.length)
                        : "string" == r && e in n) && Mo(n[e], t)
                    );
                  }
                  function vs(t, e) {
                    if (Fo(t)) return !1;
                    var n = typeof t;
                    return (
                      !(
                        "number" != n &&
                        "symbol" != n &&
                        "boolean" != n &&
                        null != t &&
                        !ll(t)
                      ) ||
                      J.test(t) ||
                      !X.test(t) ||
                      (null != e && t in Et(e))
                    );
                  }
                  function bs(t) {
                    var e = rs(t),
                      n = Bn[e];
                    if ("function" != typeof n || !(e in zn.prototype))
                      return !1;
                    if (t === n) return !0;
                    var r = ns(n);
                    return !!r && t === r[0];
                  }
                  ((wn && hs(new wn(new ArrayBuffer(1))) != T) ||
                    (Nn && hs(new Nn()) != w) ||
                    (En && hs(En.resolve()) != A) ||
                    (An && hs(new An()) != q) ||
                    (kn && hs(new kn()) != L)) &&
                    (hs = function (t) {
                      var e = Nr(t),
                        n = e == E ? t.constructor : i,
                        r = n ? Is(n) : "";
                      if (r)
                        switch (r) {
                          case Ln:
                            return T;
                          case On:
                            return w;
                          case Tn:
                            return A;
                          case jn:
                            return q;
                          case Cn:
                            return L;
                        }
                      return e;
                    });
                  var ys = Ot ? Yo : ga;
                  function _s(t) {
                    var e = t && t.constructor;
                    return (
                      t === (("function" == typeof e && e.prototype) || Lt)
                    );
                  }
                  function xs(t) {
                    return t == t && !Jo(t);
                  }
                  function ws(t, e) {
                    return function (n) {
                      return null != n && n[t] === e && (e !== i || t in Et(n));
                    };
                  }
                  function Ns(t, e, n) {
                    return (
                      (e = mn(e === i ? t.length - 1 : e, 0)),
                      function () {
                        for (
                          var i = arguments,
                            s = -1,
                            o = mn(i.length - e, 0),
                            l = r(o);
                          ++s < o;

                        )
                          l[s] = i[e + s];
                        s = -1;
                        for (var a = r(e + 1); ++s < e; ) a[s] = i[s];
                        return (a[e] = n(l)), Ne(t, this, a);
                      }
                    );
                  }
                  function Es(t, e) {
                    return e.length < 2 ? t : xr(t, ti(e, 0, -1));
                  }
                  function As(t, e) {
                    if (
                      ("constructor" !== e || "function" != typeof t[e]) &&
                      "__proto__" != e
                    )
                      return t[e];
                  }
                  var ks = Ls(Qr),
                    qs =
                      ce ||
                      function (t, e) {
                        return he.setTimeout(t, e);
                      },
                    Zs = Ls(Xr);
                  function Ss(t, e, n) {
                    var r = e + "";
                    return Zs(
                      t,
                      (function (t, e) {
                        var n = e.length;
                        if (!n) return t;
                        var r = n - 1;
                        return (
                          (e[r] = (n > 1 ? "& " : "") + e[r]),
                          (e = e.join(n > 2 ? ", " : " ")),
                          t.replace(st, "{\n/* [wrapped with " + e + "] */\n")
                        );
                      })(
                        r,
                        (function (t, e) {
                          return (
                            Ae(p, function (n) {
                              var r = "_." + n[0];
                              e & n[1] && !Se(t, r) && t.push(r);
                            }),
                            t.sort()
                          );
                        })(
                          (function (t) {
                            var e = t.match(ot);
                            return e ? e[1].split(lt) : [];
                          })(r),
                          n
                        )
                      )
                    );
                  }
                  function Ls(t) {
                    var e = 0,
                      n = 0;
                    return function () {
                      var r = bn(),
                        s = 16 - (r - n);
                      if (((n = r), s > 0)) {
                        if (++e >= 800) return arguments[0];
                      } else e = 0;
                      return t.apply(i, arguments);
                    };
                  }
                  function Os(t, e) {
                    var n = -1,
                      r = t.length,
                      s = r - 1;
                    for (e = e === i ? r : e; ++n < e; ) {
                      var o = Hr(n, s),
                        l = t[o];
                      (t[o] = t[n]), (t[n] = l);
                    }
                    return (t.length = e), t;
                  }
                  var Ts,
                    js,
                    Cs =
                      ((Ts = jo(
                        function (t) {
                          var e = [];
                          return (
                            46 === t.charCodeAt(0) && e.push(""),
                            t.replace(tt, function (t, n, r, i) {
                              e.push(r ? i.replace(ct, "$1") : n || t);
                            }),
                            e
                          );
                        },
                        function (t) {
                          return 500 === js.size && js.clear(), t;
                        }
                      )),
                      (js = Ts.cache),
                      Ts);
                  function Rs(t) {
                    if ("string" == typeof t || ll(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
                  }
                  function Is(t) {
                    if (null != t) {
                      try {
                        return Tt.call(t);
                      } catch (t) {}
                      try {
                        return t + "";
                      } catch (t) {}
                    }
                    return "";
                  }
                  function Ps(t) {
                    if (t instanceof zn) return t.clone();
                    var e = new Dn(t.__wrapped__, t.__chain__);
                    return (
                      (e.__actions__ = ki(t.__actions__)),
                      (e.__index__ = t.__index__),
                      (e.__values__ = t.__values__),
                      e
                    );
                  }
                  var Bs = Kr(function (t, e) {
                      return Wo(t) ? ur(t, gr(e, 1, Wo, !0)) : [];
                    }),
                    Ms = Kr(function (t, e) {
                      var n = Vs(e);
                      return (
                        Wo(n) && (n = i),
                        Wo(t) ? ur(t, gr(e, 1, Wo, !0), ss(n, 2)) : []
                      );
                    }),
                    Us = Kr(function (t, e) {
                      var n = Vs(e);
                      return (
                        Wo(n) && (n = i),
                        Wo(t) ? ur(t, gr(e, 1, Wo, !0), i, n) : []
                      );
                    });
                  function Ds(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : dl(n);
                    return i < 0 && (i = mn(r + i, 0)), Be(t, ss(e, 3), i);
                  }
                  function zs(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var s = r - 1;
                    return (
                      n !== i &&
                        ((s = dl(n)),
                        (s = n < 0 ? mn(r + s, 0) : vn(s, r - 1))),
                      Be(t, ss(e, 3), s, !0)
                    );
                  }
                  function Fs(t) {
                    return null != t && t.length ? gr(t, 1) : [];
                  }
                  function $s(t) {
                    return t && t.length ? t[0] : i;
                  }
                  var Hs = Kr(function (t) {
                      var e = Oe(t, pi);
                      return e.length && e[0] === t[0] ? qr(e) : [];
                    }),
                    Ws = Kr(function (t) {
                      var e = Vs(t),
                        n = Oe(t, pi);
                      return (
                        e === Vs(n) ? (e = i) : n.pop(),
                        n.length && n[0] === t[0] ? qr(n, ss(e, 2)) : []
                      );
                    }),
                    Ks = Kr(function (t) {
                      var e = Vs(t),
                        n = Oe(t, pi);
                      return (
                        (e = "function" == typeof e ? e : i) && n.pop(),
                        n.length && n[0] === t[0] ? qr(n, i, e) : []
                      );
                    });
                  function Vs(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? t[e - 1] : i;
                  }
                  var Gs = Kr(Ys);
                  function Ys(t, e) {
                    return t && t.length && e && e.length ? Fr(t, e) : t;
                  }
                  var Qs = Ji(function (t, e) {
                    var n = null == t ? 0 : t.length,
                      r = ir(t, e);
                    return (
                      $r(
                        t,
                        Oe(e, function (t) {
                          return gs(t, n) ? +t : t;
                        }).sort(Ni)
                      ),
                      r
                    );
                  });
                  function Xs(t) {
                    return null == t ? t : xn.call(t);
                  }
                  var Js = Kr(function (t) {
                      return li(gr(t, 1, Wo, !0));
                    }),
                    to = Kr(function (t) {
                      var e = Vs(t);
                      return Wo(e) && (e = i), li(gr(t, 1, Wo, !0), ss(e, 2));
                    }),
                    eo = Kr(function (t) {
                      var e = Vs(t);
                      return (
                        (e = "function" == typeof e ? e : i),
                        li(gr(t, 1, Wo, !0), i, e)
                      );
                    });
                  function no(t) {
                    if (!t || !t.length) return [];
                    var e = 0;
                    return (
                      (t = Ze(t, function (t) {
                        if (Wo(t)) return (e = mn(t.length, e)), !0;
                      })),
                      Ke(e, function (e) {
                        return Oe(t, Fe(e));
                      })
                    );
                  }
                  function ro(t, e) {
                    if (!t || !t.length) return [];
                    var n = no(t);
                    return null == e
                      ? n
                      : Oe(n, function (t) {
                          return Ne(e, i, t);
                        });
                  }
                  var io = Kr(function (t, e) {
                      return Wo(t) ? ur(t, e) : [];
                    }),
                    so = Kr(function (t) {
                      return fi(Ze(t, Wo));
                    }),
                    oo = Kr(function (t) {
                      var e = Vs(t);
                      return Wo(e) && (e = i), fi(Ze(t, Wo), ss(e, 2));
                    }),
                    lo = Kr(function (t) {
                      var e = Vs(t);
                      return (
                        (e = "function" == typeof e ? e : i),
                        fi(Ze(t, Wo), i, e)
                      );
                    }),
                    ao = Kr(no),
                    uo = Kr(function (t) {
                      var e = t.length,
                        n = e > 1 ? t[e - 1] : i;
                      return (
                        (n = "function" == typeof n ? (t.pop(), n) : i),
                        ro(t, n)
                      );
                    });
                  function co(t) {
                    var e = Bn(t);
                    return (e.__chain__ = !0), e;
                  }
                  function ho(t, e) {
                    return e(t);
                  }
                  var fo = Ji(function (t) {
                      var e = t.length,
                        n = e ? t[0] : 0,
                        r = this.__wrapped__,
                        s = function (e) {
                          return ir(e, t);
                        };
                      return !(e > 1 || this.__actions__.length) &&
                        r instanceof zn &&
                        gs(n)
                        ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                            func: ho,
                            args: [s],
                            thisArg: i,
                          }),
                          new Dn(r, this.__chain__).thru(function (t) {
                            return e && !t.length && t.push(i), t;
                          }))
                        : this.thru(s);
                    }),
                    po = Zi(function (t, e, n) {
                      jt.call(t, n) ? ++t[n] : rr(t, n, 1);
                    }),
                    go = Ri(Ds),
                    mo = Ri(zs);
                  function vo(t, e) {
                    return (Fo(t) ? Ae : cr)(t, ss(e, 3));
                  }
                  function bo(t, e) {
                    return (Fo(t) ? ke : hr)(t, ss(e, 3));
                  }
                  var yo = Zi(function (t, e, n) {
                      jt.call(t, n) ? t[n].push(e) : rr(t, n, [e]);
                    }),
                    _o = Kr(function (t, e, n) {
                      var i = -1,
                        s = "function" == typeof e,
                        o = Ho(t) ? r(t.length) : [];
                      return (
                        cr(t, function (t) {
                          o[++i] = s ? Ne(e, t, n) : Zr(t, e, n);
                        }),
                        o
                      );
                    }),
                    xo = Zi(function (t, e, n) {
                      rr(t, n, e);
                    });
                  function wo(t, e) {
                    return (Fo(t) ? Oe : Ir)(t, ss(e, 3));
                  }
                  var No = Zi(
                      function (t, e, n) {
                        t[n ? 0 : 1].push(e);
                      },
                      function () {
                        return [[], []];
                      }
                    ),
                    Eo = Kr(function (t, e) {
                      if (null == t) return [];
                      var n = e.length;
                      return (
                        n > 1 && ms(t, e[0], e[1])
                          ? (e = [])
                          : n > 2 && ms(e[0], e[1], e[2]) && (e = [e[0]]),
                        Dr(t, gr(e, 1), [])
                      );
                    }),
                    Ao =
                      ue ||
                      function () {
                        return he.Date.now();
                      };
                  function ko(t, e, n) {
                    return (
                      (e = n ? i : e),
                      (e = t && null == e ? t.length : e),
                      Vi(t, u, i, i, i, i, e)
                    );
                  }
                  function qo(t, e) {
                    var n;
                    if ("function" != typeof e) throw new qt(s);
                    return (
                      (t = dl(t)),
                      function () {
                        return (
                          --t > 0 && (n = e.apply(this, arguments)),
                          t <= 1 && (e = i),
                          n
                        );
                      }
                    );
                  }
                  var Zo = Kr(function (t, e, n) {
                      var r = 1;
                      if (n.length) {
                        var i = ln(n, is(Zo));
                        r |= a;
                      }
                      return Vi(t, r, e, n, i);
                    }),
                    So = Kr(function (t, e, n) {
                      var r = 3;
                      if (n.length) {
                        var i = ln(n, is(So));
                        r |= a;
                      }
                      return Vi(e, r, t, n, i);
                    });
                  function Lo(t, e, n) {
                    var r,
                      o,
                      l,
                      a,
                      u,
                      c,
                      h = 0,
                      f = !1,
                      d = !1,
                      p = !0;
                    if ("function" != typeof t) throw new qt(s);
                    function g(e) {
                      var n = r,
                        s = o;
                      return (r = o = i), (h = e), (a = t.apply(s, n));
                    }
                    function m(t) {
                      var n = t - c;
                      return c === i || n >= e || n < 0 || (d && t - h >= l);
                    }
                    function v() {
                      var t = Ao();
                      if (m(t)) return b(t);
                      u = qs(
                        v,
                        (function (t) {
                          var n = e - (t - c);
                          return d ? vn(n, l - (t - h)) : n;
                        })(t)
                      );
                    }
                    function b(t) {
                      return (u = i), p && r ? g(t) : ((r = o = i), a);
                    }
                    function y() {
                      var t = Ao(),
                        n = m(t);
                      if (((r = arguments), (o = this), (c = t), n)) {
                        if (u === i)
                          return (function (t) {
                            return (h = t), (u = qs(v, e)), f ? g(t) : a;
                          })(c);
                        if (d) return yi(u), (u = qs(v, e)), g(c);
                      }
                      return u === i && (u = qs(v, e)), a;
                    }
                    return (
                      (e = gl(e) || 0),
                      Jo(n) &&
                        ((f = !!n.leading),
                        (l = (d = "maxWait" in n)
                          ? mn(gl(n.maxWait) || 0, e)
                          : l),
                        (p = "trailing" in n ? !!n.trailing : p)),
                      (y.cancel = function () {
                        u !== i && yi(u), (h = 0), (r = c = o = u = i);
                      }),
                      (y.flush = function () {
                        return u === i ? a : b(Ao());
                      }),
                      y
                    );
                  }
                  var Oo = Kr(function (t, e) {
                      return ar(t, 1, e);
                    }),
                    To = Kr(function (t, e, n) {
                      return ar(t, gl(e) || 0, n);
                    });
                  function jo(t, e) {
                    if (
                      "function" != typeof t ||
                      (null != e && "function" != typeof e)
                    )
                      throw new qt(s);
                    var n = function () {
                      var r = arguments,
                        i = e ? e.apply(this, r) : r[0],
                        s = n.cache;
                      if (s.has(i)) return s.get(i);
                      var o = t.apply(this, r);
                      return (n.cache = s.set(i, o) || s), o;
                    };
                    return (n.cache = new (jo.Cache || Hn)()), n;
                  }
                  function Co(t) {
                    if ("function" != typeof t) throw new qt(s);
                    return function () {
                      var e = arguments;
                      switch (e.length) {
                        case 0:
                          return !t.call(this);
                        case 1:
                          return !t.call(this, e[0]);
                        case 2:
                          return !t.call(this, e[0], e[1]);
                        case 3:
                          return !t.call(this, e[0], e[1], e[2]);
                      }
                      return !t.apply(this, e);
                    };
                  }
                  jo.Cache = Hn;
                  var Ro = vi(function (t, e) {
                      var n = (e =
                        1 == e.length && Fo(e[0])
                          ? Oe(e[0], Ge(ss()))
                          : Oe(gr(e, 1), Ge(ss()))).length;
                      return Kr(function (r) {
                        for (var i = -1, s = vn(r.length, n); ++i < s; )
                          r[i] = e[i].call(this, r[i]);
                        return Ne(t, this, r);
                      });
                    }),
                    Io = Kr(function (t, e) {
                      var n = ln(e, is(Io));
                      return Vi(t, a, i, e, n);
                    }),
                    Po = Kr(function (t, e) {
                      var n = ln(e, is(Po));
                      return Vi(t, 64, i, e, n);
                    }),
                    Bo = Ji(function (t, e) {
                      return Vi(t, 256, i, i, i, e);
                    });
                  function Mo(t, e) {
                    return t === e || (t != t && e != e);
                  }
                  var Uo = Fi(Er),
                    Do = Fi(function (t, e) {
                      return t >= e;
                    }),
                    zo = Sr(
                      (function () {
                        return arguments;
                      })()
                    )
                      ? Sr
                      : function (t) {
                          return (
                            tl(t) &&
                            jt.call(t, "callee") &&
                            !Wt.call(t, "callee")
                          );
                        },
                    Fo = r.isArray,
                    $o = ve
                      ? Ge(ve)
                      : function (t) {
                          return tl(t) && Nr(t) == O;
                        };
                  function Ho(t) {
                    return null != t && Xo(t.length) && !Yo(t);
                  }
                  function Wo(t) {
                    return tl(t) && Ho(t);
                  }
                  var Ko = me || ga,
                    Vo = be
                      ? Ge(be)
                      : function (t) {
                          return tl(t) && Nr(t) == b;
                        };
                  function Go(t) {
                    if (!tl(t)) return !1;
                    var e = Nr(t);
                    return (
                      e == y ||
                      "[object DOMException]" == e ||
                      ("string" == typeof t.message &&
                        "string" == typeof t.name &&
                        !rl(t))
                    );
                  }
                  function Yo(t) {
                    if (!Jo(t)) return !1;
                    var e = Nr(t);
                    return (
                      e == _ ||
                      e == x ||
                      "[object AsyncFunction]" == e ||
                      "[object Proxy]" == e
                    );
                  }
                  function Qo(t) {
                    return "number" == typeof t && t == dl(t);
                  }
                  function Xo(t) {
                    return (
                      "number" == typeof t && t > -1 && t % 1 == 0 && t <= h
                    );
                  }
                  function Jo(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e);
                  }
                  function tl(t) {
                    return null != t && "object" == typeof t;
                  }
                  var el = ye
                    ? Ge(ye)
                    : function (t) {
                        return tl(t) && hs(t) == w;
                      };
                  function nl(t) {
                    return "number" == typeof t || (tl(t) && Nr(t) == N);
                  }
                  function rl(t) {
                    if (!tl(t) || Nr(t) != E) return !1;
                    var e = $t(t);
                    if (null === e) return !0;
                    var n = jt.call(e, "constructor") && e.constructor;
                    return (
                      "function" == typeof n &&
                      n instanceof n &&
                      Tt.call(n) == Pt
                    );
                  }
                  var il = _e
                      ? Ge(_e)
                      : function (t) {
                          return tl(t) && Nr(t) == k;
                        },
                    sl = xe
                      ? Ge(xe)
                      : function (t) {
                          return tl(t) && hs(t) == q;
                        };
                  function ol(t) {
                    return (
                      "string" == typeof t || (!Fo(t) && tl(t) && Nr(t) == Z)
                    );
                  }
                  function ll(t) {
                    return "symbol" == typeof t || (tl(t) && Nr(t) == S);
                  }
                  var al = we
                      ? Ge(we)
                      : function (t) {
                          return tl(t) && Xo(t.length) && !!ie[Nr(t)];
                        },
                    ul = Fi(Rr),
                    cl = Fi(function (t, e) {
                      return t <= e;
                    });
                  function hl(t) {
                    if (!t) return [];
                    if (Ho(t)) return ol(t) ? hn(t) : ki(t);
                    if (Gt && t[Gt])
                      return (function (t) {
                        for (var e, n = []; !(e = t.next()).done; )
                          n.push(e.value);
                        return n;
                      })(t[Gt]());
                    var e = hs(t);
                    return (e == w ? sn : e == q ? an : Ml)(t);
                  }
                  function fl(t) {
                    return t
                      ? (t = gl(t)) === c || t === -1 / 0
                        ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                        : t == t
                        ? t
                        : 0
                      : 0 === t
                      ? t
                      : 0;
                  }
                  function dl(t) {
                    var e = fl(t),
                      n = e % 1;
                    return e == e ? (n ? e - n : e) : 0;
                  }
                  function pl(t) {
                    return t ? sr(dl(t), 0, d) : 0;
                  }
                  function gl(t) {
                    if ("number" == typeof t) return t;
                    if (ll(t)) return f;
                    if (Jo(t)) {
                      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                      t = Jo(e) ? e + "" : e;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = Ve(t);
                    var n = pt.test(t);
                    return n || mt.test(t)
                      ? ae(t.slice(2), n ? 2 : 8)
                      : dt.test(t)
                      ? f
                      : +t;
                  }
                  function ml(t) {
                    return qi(t, Ol(t));
                  }
                  function vl(t) {
                    return null == t ? "" : oi(t);
                  }
                  var bl = Si(function (t, e) {
                      if (_s(e) || Ho(e)) qi(e, Ll(e), t);
                      else for (var n in e) jt.call(e, n) && Jn(t, n, e[n]);
                    }),
                    yl = Si(function (t, e) {
                      qi(e, Ol(e), t);
                    }),
                    _l = Si(function (t, e, n, r) {
                      qi(e, Ol(e), t, r);
                    }),
                    xl = Si(function (t, e, n, r) {
                      qi(e, Ll(e), t, r);
                    }),
                    wl = Ji(ir),
                    Nl = Kr(function (t, e) {
                      t = Et(t);
                      var n = -1,
                        r = e.length,
                        s = r > 2 ? e[2] : i;
                      for (s && ms(e[0], e[1], s) && (r = 1); ++n < r; )
                        for (
                          var o = e[n], l = Ol(o), a = -1, u = l.length;
                          ++a < u;

                        ) {
                          var c = l[a],
                            h = t[c];
                          (h === i || (Mo(h, Lt[c]) && !jt.call(t, c))) &&
                            (t[c] = o[c]);
                        }
                      return t;
                    }),
                    El = Kr(function (t) {
                      return t.push(i, Yi), Ne(jl, i, t);
                    });
                  function Al(t, e, n) {
                    var r = null == t ? i : xr(t, e);
                    return r === i ? n : r;
                  }
                  function kl(t, e) {
                    return null != t && fs(t, e, kr);
                  }
                  var ql = Bi(function (t, e, n) {
                      null != e &&
                        "function" != typeof e.toString &&
                        (e = It.call(e)),
                        (t[e] = n);
                    }, Jl(na)),
                    Zl = Bi(function (t, e, n) {
                      null != e &&
                        "function" != typeof e.toString &&
                        (e = It.call(e)),
                        jt.call(t, e) ? t[e].push(n) : (t[e] = [n]);
                    }, ss),
                    Sl = Kr(Zr);
                  function Ll(t) {
                    return Ho(t) ? Vn(t) : Cr(t);
                  }
                  function Ol(t) {
                    return Ho(t)
                      ? Vn(t, !0)
                      : (function (t) {
                          if (!Jo(t))
                            return (function (t) {
                              var e = [];
                              if (null != t) for (var n in Et(t)) e.push(n);
                              return e;
                            })(t);
                          var e = _s(t),
                            n = [];
                          for (var r in t)
                            ("constructor" != r || (!e && jt.call(t, r))) &&
                              n.push(r);
                          return n;
                        })(t);
                  }
                  var Tl = Si(function (t, e, n) {
                      Mr(t, e, n);
                    }),
                    jl = Si(function (t, e, n, r) {
                      Mr(t, e, n, r);
                    }),
                    Cl = Ji(function (t, e) {
                      var n = {};
                      if (null == t) return n;
                      var r = !1;
                      (e = Oe(e, function (e) {
                        return (e = mi(e, t)), r || (r = e.length > 1), e;
                      })),
                        qi(t, es(t), n),
                        r && (n = or(n, 7, Qi));
                      for (var i = e.length; i--; ) ai(n, e[i]);
                      return n;
                    }),
                    Rl = Ji(function (t, e) {
                      return null == t
                        ? {}
                        : (function (t, e) {
                            return zr(t, e, function (e, n) {
                              return kl(t, n);
                            });
                          })(t, e);
                    });
                  function Il(t, e) {
                    if (null == t) return {};
                    var n = Oe(es(t), function (t) {
                      return [t];
                    });
                    return (
                      (e = ss(e)),
                      zr(t, n, function (t, n) {
                        return e(t, n[0]);
                      })
                    );
                  }
                  var Pl = Ki(Ll),
                    Bl = Ki(Ol);
                  function Ml(t) {
                    return null == t ? [] : Ye(t, Ll(t));
                  }
                  var Ul = ji(function (t, e, n) {
                    return (e = e.toLowerCase()), t + (n ? Dl(e) : e);
                  });
                  function Dl(t) {
                    return Gl(vl(t).toLowerCase());
                  }
                  function zl(t) {
                    return (t = vl(t)) && t.replace(bt, tn).replace(Qt, "");
                  }
                  var Fl = ji(function (t, e, n) {
                      return t + (n ? "-" : "") + e.toLowerCase();
                    }),
                    $l = ji(function (t, e, n) {
                      return t + (n ? " " : "") + e.toLowerCase();
                    }),
                    Hl = Ti("toLowerCase"),
                    Wl = ji(function (t, e, n) {
                      return t + (n ? "_" : "") + e.toLowerCase();
                    }),
                    Kl = ji(function (t, e, n) {
                      return t + (n ? " " : "") + Gl(e);
                    }),
                    Vl = ji(function (t, e, n) {
                      return t + (n ? " " : "") + e.toUpperCase();
                    }),
                    Gl = Ti("toUpperCase");
                  function Yl(t, e, n) {
                    return (
                      (t = vl(t)),
                      (e = n ? i : e) === i
                        ? (function (t) {
                            return ee.test(t);
                          })(t)
                          ? (function (t) {
                              return t.match(Jt) || [];
                            })(t)
                          : (function (t) {
                              return t.match(at) || [];
                            })(t)
                        : t.match(e) || []
                    );
                  }
                  var Ql = Kr(function (t, e) {
                      try {
                        return Ne(t, i, e);
                      } catch (t) {
                        return Go(t) ? t : new xt(t);
                      }
                    }),
                    Xl = Ji(function (t, e) {
                      return (
                        Ae(e, function (e) {
                          (e = Rs(e)), rr(t, e, Zo(t[e], t));
                        }),
                        t
                      );
                    });
                  function Jl(t) {
                    return function () {
                      return t;
                    };
                  }
                  var ta = Ii(),
                    ea = Ii(!0);
                  function na(t) {
                    return t;
                  }
                  function ra(t) {
                    return jr("function" == typeof t ? t : or(t, 1));
                  }
                  var ia = Kr(function (t, e) {
                      return function (n) {
                        return Zr(n, t, e);
                      };
                    }),
                    sa = Kr(function (t, e) {
                      return function (n) {
                        return Zr(t, n, e);
                      };
                    });
                  function oa(t, e, n) {
                    var r = Ll(e),
                      i = _r(e, r);
                    null != n ||
                      (Jo(e) && (i.length || !r.length)) ||
                      ((n = e), (e = t), (t = this), (i = _r(e, Ll(e))));
                    var s = !(Jo(n) && "chain" in n && !n.chain),
                      o = Yo(t);
                    return (
                      Ae(i, function (n) {
                        var r = e[n];
                        (t[n] = r),
                          o &&
                            (t.prototype[n] = function () {
                              var e = this.__chain__;
                              if (s || e) {
                                var n = t(this.__wrapped__);
                                return (
                                  (n.__actions__ = ki(this.__actions__)).push({
                                    func: r,
                                    args: arguments,
                                    thisArg: t,
                                  }),
                                  (n.__chain__ = e),
                                  n
                                );
                              }
                              return r.apply(t, Te([this.value()], arguments));
                            });
                      }),
                      t
                    );
                  }
                  function la() {}
                  var aa = Ui(Oe),
                    ua = Ui(qe),
                    ca = Ui(Re);
                  function ha(t) {
                    return vs(t)
                      ? Fe(Rs(t))
                      : (function (t) {
                          return function (e) {
                            return xr(e, t);
                          };
                        })(t);
                  }
                  var fa = zi(),
                    da = zi(!0);
                  function pa() {
                    return [];
                  }
                  function ga() {
                    return !1;
                  }
                  var ma,
                    va = Mi(function (t, e) {
                      return t + e;
                    }, 0),
                    ba = Hi("ceil"),
                    ya = Mi(function (t, e) {
                      return t / e;
                    }, 1),
                    _a = Hi("floor"),
                    xa = Mi(function (t, e) {
                      return t * e;
                    }, 1),
                    wa = Hi("round"),
                    Na = Mi(function (t, e) {
                      return t - e;
                    }, 0);
                  return (
                    (Bn.after = function (t, e) {
                      if ("function" != typeof e) throw new qt(s);
                      return (
                        (t = dl(t)),
                        function () {
                          if (--t < 1) return e.apply(this, arguments);
                        }
                      );
                    }),
                    (Bn.ary = ko),
                    (Bn.assign = bl),
                    (Bn.assignIn = yl),
                    (Bn.assignInWith = _l),
                    (Bn.assignWith = xl),
                    (Bn.at = wl),
                    (Bn.before = qo),
                    (Bn.bind = Zo),
                    (Bn.bindAll = Xl),
                    (Bn.bindKey = So),
                    (Bn.castArray = function () {
                      if (!arguments.length) return [];
                      var t = arguments[0];
                      return Fo(t) ? t : [t];
                    }),
                    (Bn.chain = co),
                    (Bn.chunk = function (t, e, n) {
                      e = (n ? ms(t, e, n) : e === i) ? 1 : mn(dl(e), 0);
                      var s = null == t ? 0 : t.length;
                      if (!s || e < 1) return [];
                      for (var o = 0, l = 0, a = r(fe(s / e)); o < s; )
                        a[l++] = ti(t, o, (o += e));
                      return a;
                    }),
                    (Bn.compact = function (t) {
                      for (
                        var e = -1, n = null == t ? 0 : t.length, r = 0, i = [];
                        ++e < n;

                      ) {
                        var s = t[e];
                        s && (i[r++] = s);
                      }
                      return i;
                    }),
                    (Bn.concat = function () {
                      var t = arguments.length;
                      if (!t) return [];
                      for (var e = r(t - 1), n = arguments[0], i = t; i--; )
                        e[i - 1] = arguments[i];
                      return Te(Fo(n) ? ki(n) : [n], gr(e, 1));
                    }),
                    (Bn.cond = function (t) {
                      var e = null == t ? 0 : t.length,
                        n = ss();
                      return (
                        (t = e
                          ? Oe(t, function (t) {
                              if ("function" != typeof t[1]) throw new qt(s);
                              return [n(t[0]), t[1]];
                            })
                          : []),
                        Kr(function (n) {
                          for (var r = -1; ++r < e; ) {
                            var i = t[r];
                            if (Ne(i[0], this, n)) return Ne(i[1], this, n);
                          }
                        })
                      );
                    }),
                    (Bn.conforms = function (t) {
                      return (function (t) {
                        var e = Ll(t);
                        return function (n) {
                          return lr(n, t, e);
                        };
                      })(or(t, 1));
                    }),
                    (Bn.constant = Jl),
                    (Bn.countBy = po),
                    (Bn.create = function (t, e) {
                      var n = Mn(t);
                      return null == e ? n : nr(n, e);
                    }),
                    (Bn.curry = function t(e, n, r) {
                      var s = Vi(e, 8, i, i, i, i, i, (n = r ? i : n));
                      return (s.placeholder = t.placeholder), s;
                    }),
                    (Bn.curryRight = function t(e, n, r) {
                      var s = Vi(e, 16, i, i, i, i, i, (n = r ? i : n));
                      return (s.placeholder = t.placeholder), s;
                    }),
                    (Bn.debounce = Lo),
                    (Bn.defaults = Nl),
                    (Bn.defaultsDeep = El),
                    (Bn.defer = Oo),
                    (Bn.delay = To),
                    (Bn.difference = Bs),
                    (Bn.differenceBy = Ms),
                    (Bn.differenceWith = Us),
                    (Bn.drop = function (t, e, n) {
                      var r = null == t ? 0 : t.length;
                      return r
                        ? ti(t, (e = n || e === i ? 1 : dl(e)) < 0 ? 0 : e, r)
                        : [];
                    }),
                    (Bn.dropRight = function (t, e, n) {
                      var r = null == t ? 0 : t.length;
                      return r
                        ? ti(
                            t,
                            0,
                            (e = r - (e = n || e === i ? 1 : dl(e))) < 0 ? 0 : e
                          )
                        : [];
                    }),
                    (Bn.dropRightWhile = function (t, e) {
                      return t && t.length ? ci(t, ss(e, 3), !0, !0) : [];
                    }),
                    (Bn.dropWhile = function (t, e) {
                      return t && t.length ? ci(t, ss(e, 3), !0) : [];
                    }),
                    (Bn.fill = function (t, e, n, r) {
                      var s = null == t ? 0 : t.length;
                      return s
                        ? (n &&
                            "number" != typeof n &&
                            ms(t, e, n) &&
                            ((n = 0), (r = s)),
                          (function (t, e, n, r) {
                            var s = t.length;
                            for (
                              (n = dl(n)) < 0 && (n = -n > s ? 0 : s + n),
                                (r = r === i || r > s ? s : dl(r)) < 0 &&
                                  (r += s),
                                r = n > r ? 0 : pl(r);
                              n < r;

                            )
                              t[n++] = e;
                            return t;
                          })(t, e, n, r))
                        : [];
                    }),
                    (Bn.filter = function (t, e) {
                      return (Fo(t) ? Ze : pr)(t, ss(e, 3));
                    }),
                    (Bn.flatMap = function (t, e) {
                      return gr(wo(t, e), 1);
                    }),
                    (Bn.flatMapDeep = function (t, e) {
                      return gr(wo(t, e), c);
                    }),
                    (Bn.flatMapDepth = function (t, e, n) {
                      return (n = n === i ? 1 : dl(n)), gr(wo(t, e), n);
                    }),
                    (Bn.flatten = Fs),
                    (Bn.flattenDeep = function (t) {
                      return null != t && t.length ? gr(t, c) : [];
                    }),
                    (Bn.flattenDepth = function (t, e) {
                      return null != t && t.length
                        ? gr(t, (e = e === i ? 1 : dl(e)))
                        : [];
                    }),
                    (Bn.flip = function (t) {
                      return Vi(t, 512);
                    }),
                    (Bn.flow = ta),
                    (Bn.flowRight = ea),
                    (Bn.fromPairs = function (t) {
                      for (
                        var e = -1, n = null == t ? 0 : t.length, r = {};
                        ++e < n;

                      ) {
                        var i = t[e];
                        r[i[0]] = i[1];
                      }
                      return r;
                    }),
                    (Bn.functions = function (t) {
                      return null == t ? [] : _r(t, Ll(t));
                    }),
                    (Bn.functionsIn = function (t) {
                      return null == t ? [] : _r(t, Ol(t));
                    }),
                    (Bn.groupBy = yo),
                    (Bn.initial = function (t) {
                      return null != t && t.length ? ti(t, 0, -1) : [];
                    }),
                    (Bn.intersection = Hs),
                    (Bn.intersectionBy = Ws),
                    (Bn.intersectionWith = Ks),
                    (Bn.invert = ql),
                    (Bn.invertBy = Zl),
                    (Bn.invokeMap = _o),
                    (Bn.iteratee = ra),
                    (Bn.keyBy = xo),
                    (Bn.keys = Ll),
                    (Bn.keysIn = Ol),
                    (Bn.map = wo),
                    (Bn.mapKeys = function (t, e) {
                      var n = {};
                      return (
                        (e = ss(e, 3)),
                        br(t, function (t, r, i) {
                          rr(n, e(t, r, i), t);
                        }),
                        n
                      );
                    }),
                    (Bn.mapValues = function (t, e) {
                      var n = {};
                      return (
                        (e = ss(e, 3)),
                        br(t, function (t, r, i) {
                          rr(n, r, e(t, r, i));
                        }),
                        n
                      );
                    }),
                    (Bn.matches = function (t) {
                      return Pr(or(t, 1));
                    }),
                    (Bn.matchesProperty = function (t, e) {
                      return Br(t, or(e, 1));
                    }),
                    (Bn.memoize = jo),
                    (Bn.merge = Tl),
                    (Bn.mergeWith = jl),
                    (Bn.method = ia),
                    (Bn.methodOf = sa),
                    (Bn.mixin = oa),
                    (Bn.negate = Co),
                    (Bn.nthArg = function (t) {
                      return (
                        (t = dl(t)),
                        Kr(function (e) {
                          return Ur(e, t);
                        })
                      );
                    }),
                    (Bn.omit = Cl),
                    (Bn.omitBy = function (t, e) {
                      return Il(t, Co(ss(e)));
                    }),
                    (Bn.once = function (t) {
                      return qo(2, t);
                    }),
                    (Bn.orderBy = function (t, e, n, r) {
                      return null == t
                        ? []
                        : (Fo(e) || (e = null == e ? [] : [e]),
                          Fo((n = r ? i : n)) || (n = null == n ? [] : [n]),
                          Dr(t, e, n));
                    }),
                    (Bn.over = aa),
                    (Bn.overArgs = Ro),
                    (Bn.overEvery = ua),
                    (Bn.overSome = ca),
                    (Bn.partial = Io),
                    (Bn.partialRight = Po),
                    (Bn.partition = No),
                    (Bn.pick = Rl),
                    (Bn.pickBy = Il),
                    (Bn.property = ha),
                    (Bn.propertyOf = function (t) {
                      return function (e) {
                        return null == t ? i : xr(t, e);
                      };
                    }),
                    (Bn.pull = Gs),
                    (Bn.pullAll = Ys),
                    (Bn.pullAllBy = function (t, e, n) {
                      return t && t.length && e && e.length
                        ? Fr(t, e, ss(n, 2))
                        : t;
                    }),
                    (Bn.pullAllWith = function (t, e, n) {
                      return t && t.length && e && e.length
                        ? Fr(t, e, i, n)
                        : t;
                    }),
                    (Bn.pullAt = Qs),
                    (Bn.range = fa),
                    (Bn.rangeRight = da),
                    (Bn.rearg = Bo),
                    (Bn.reject = function (t, e) {
                      return (Fo(t) ? Ze : pr)(t, Co(ss(e, 3)));
                    }),
                    (Bn.remove = function (t, e) {
                      var n = [];
                      if (!t || !t.length) return n;
                      var r = -1,
                        i = [],
                        s = t.length;
                      for (e = ss(e, 3); ++r < s; ) {
                        var o = t[r];
                        e(o, r, t) && (n.push(o), i.push(r));
                      }
                      return $r(t, i), n;
                    }),
                    (Bn.rest = function (t, e) {
                      if ("function" != typeof t) throw new qt(s);
                      return Kr(t, (e = e === i ? e : dl(e)));
                    }),
                    (Bn.reverse = Xs),
                    (Bn.sampleSize = function (t, e, n) {
                      return (
                        (e = (n ? ms(t, e, n) : e === i) ? 1 : dl(e)),
                        (Fo(t) ? Yn : Gr)(t, e)
                      );
                    }),
                    (Bn.set = function (t, e, n) {
                      return null == t ? t : Yr(t, e, n);
                    }),
                    (Bn.setWith = function (t, e, n, r) {
                      return (
                        (r = "function" == typeof r ? r : i),
                        null == t ? t : Yr(t, e, n, r)
                      );
                    }),
                    (Bn.shuffle = function (t) {
                      return (Fo(t) ? Qn : Jr)(t);
                    }),
                    (Bn.slice = function (t, e, n) {
                      var r = null == t ? 0 : t.length;
                      return r
                        ? (n && "number" != typeof n && ms(t, e, n)
                            ? ((e = 0), (n = r))
                            : ((e = null == e ? 0 : dl(e)),
                              (n = n === i ? r : dl(n))),
                          ti(t, e, n))
                        : [];
                    }),
                    (Bn.sortBy = Eo),
                    (Bn.sortedUniq = function (t) {
                      return t && t.length ? ii(t) : [];
                    }),
                    (Bn.sortedUniqBy = function (t, e) {
                      return t && t.length ? ii(t, ss(e, 2)) : [];
                    }),
                    (Bn.split = function (t, e, n) {
                      return (
                        n && "number" != typeof n && ms(t, e, n) && (e = n = i),
                        (n = n === i ? d : n >>> 0)
                          ? (t = vl(t)) &&
                            ("string" == typeof e || (null != e && !il(e))) &&
                            !(e = oi(e)) &&
                            rn(t)
                            ? bi(hn(t), 0, n)
                            : t.split(e, n)
                          : []
                      );
                    }),
                    (Bn.spread = function (t, e) {
                      if ("function" != typeof t) throw new qt(s);
                      return (
                        (e = null == e ? 0 : mn(dl(e), 0)),
                        Kr(function (n) {
                          var r = n[e],
                            i = bi(n, 0, e);
                          return r && Te(i, r), Ne(t, this, i);
                        })
                      );
                    }),
                    (Bn.tail = function (t) {
                      var e = null == t ? 0 : t.length;
                      return e ? ti(t, 1, e) : [];
                    }),
                    (Bn.take = function (t, e, n) {
                      return t && t.length
                        ? ti(t, 0, (e = n || e === i ? 1 : dl(e)) < 0 ? 0 : e)
                        : [];
                    }),
                    (Bn.takeRight = function (t, e, n) {
                      var r = null == t ? 0 : t.length;
                      return r
                        ? ti(
                            t,
                            (e = r - (e = n || e === i ? 1 : dl(e))) < 0
                              ? 0
                              : e,
                            r
                          )
                        : [];
                    }),
                    (Bn.takeRightWhile = function (t, e) {
                      return t && t.length ? ci(t, ss(e, 3), !1, !0) : [];
                    }),
                    (Bn.takeWhile = function (t, e) {
                      return t && t.length ? ci(t, ss(e, 3)) : [];
                    }),
                    (Bn.tap = function (t, e) {
                      return e(t), t;
                    }),
                    (Bn.throttle = function (t, e, n) {
                      var r = !0,
                        i = !0;
                      if ("function" != typeof t) throw new qt(s);
                      return (
                        Jo(n) &&
                          ((r = "leading" in n ? !!n.leading : r),
                          (i = "trailing" in n ? !!n.trailing : i)),
                        Lo(t, e, { leading: r, maxWait: e, trailing: i })
                      );
                    }),
                    (Bn.thru = ho),
                    (Bn.toArray = hl),
                    (Bn.toPairs = Pl),
                    (Bn.toPairsIn = Bl),
                    (Bn.toPath = function (t) {
                      return Fo(t) ? Oe(t, Rs) : ll(t) ? [t] : ki(Cs(vl(t)));
                    }),
                    (Bn.toPlainObject = ml),
                    (Bn.transform = function (t, e, n) {
                      var r = Fo(t),
                        i = r || Ko(t) || al(t);
                      if (((e = ss(e, 4)), null == n)) {
                        var s = t && t.constructor;
                        n = i
                          ? r
                            ? new s()
                            : []
                          : Jo(t) && Yo(s)
                          ? Mn($t(t))
                          : {};
                      }
                      return (
                        (i ? Ae : br)(t, function (t, r, i) {
                          return e(n, t, r, i);
                        }),
                        n
                      );
                    }),
                    (Bn.unary = function (t) {
                      return ko(t, 1);
                    }),
                    (Bn.union = Js),
                    (Bn.unionBy = to),
                    (Bn.unionWith = eo),
                    (Bn.uniq = function (t) {
                      return t && t.length ? li(t) : [];
                    }),
                    (Bn.uniqBy = function (t, e) {
                      return t && t.length ? li(t, ss(e, 2)) : [];
                    }),
                    (Bn.uniqWith = function (t, e) {
                      return (
                        (e = "function" == typeof e ? e : i),
                        t && t.length ? li(t, i, e) : []
                      );
                    }),
                    (Bn.unset = function (t, e) {
                      return null == t || ai(t, e);
                    }),
                    (Bn.unzip = no),
                    (Bn.unzipWith = ro),
                    (Bn.update = function (t, e, n) {
                      return null == t ? t : ui(t, e, gi(n));
                    }),
                    (Bn.updateWith = function (t, e, n, r) {
                      return (
                        (r = "function" == typeof r ? r : i),
                        null == t ? t : ui(t, e, gi(n), r)
                      );
                    }),
                    (Bn.values = Ml),
                    (Bn.valuesIn = function (t) {
                      return null == t ? [] : Ye(t, Ol(t));
                    }),
                    (Bn.without = io),
                    (Bn.words = Yl),
                    (Bn.wrap = function (t, e) {
                      return Io(gi(e), t);
                    }),
                    (Bn.xor = so),
                    (Bn.xorBy = oo),
                    (Bn.xorWith = lo),
                    (Bn.zip = ao),
                    (Bn.zipObject = function (t, e) {
                      return di(t || [], e || [], Jn);
                    }),
                    (Bn.zipObjectDeep = function (t, e) {
                      return di(t || [], e || [], Yr);
                    }),
                    (Bn.zipWith = uo),
                    (Bn.entries = Pl),
                    (Bn.entriesIn = Bl),
                    (Bn.extend = yl),
                    (Bn.extendWith = _l),
                    oa(Bn, Bn),
                    (Bn.add = va),
                    (Bn.attempt = Ql),
                    (Bn.camelCase = Ul),
                    (Bn.capitalize = Dl),
                    (Bn.ceil = ba),
                    (Bn.clamp = function (t, e, n) {
                      return (
                        n === i && ((n = e), (e = i)),
                        n !== i && (n = (n = gl(n)) == n ? n : 0),
                        e !== i && (e = (e = gl(e)) == e ? e : 0),
                        sr(gl(t), e, n)
                      );
                    }),
                    (Bn.clone = function (t) {
                      return or(t, 4);
                    }),
                    (Bn.cloneDeep = function (t) {
                      return or(t, 5);
                    }),
                    (Bn.cloneDeepWith = function (t, e) {
                      return or(t, 5, (e = "function" == typeof e ? e : i));
                    }),
                    (Bn.cloneWith = function (t, e) {
                      return or(t, 4, (e = "function" == typeof e ? e : i));
                    }),
                    (Bn.conformsTo = function (t, e) {
                      return null == e || lr(t, e, Ll(e));
                    }),
                    (Bn.deburr = zl),
                    (Bn.defaultTo = function (t, e) {
                      return null == t || t != t ? e : t;
                    }),
                    (Bn.divide = ya),
                    (Bn.endsWith = function (t, e, n) {
                      (t = vl(t)), (e = oi(e));
                      var r = t.length,
                        s = (n = n === i ? r : sr(dl(n), 0, r));
                      return (n -= e.length) >= 0 && t.slice(n, s) == e;
                    }),
                    (Bn.eq = Mo),
                    (Bn.escape = function (t) {
                      return (t = vl(t)) && V.test(t) ? t.replace(W, en) : t;
                    }),
                    (Bn.escapeRegExp = function (t) {
                      return (t = vl(t)) && nt.test(t)
                        ? t.replace(et, "\\$&")
                        : t;
                    }),
                    (Bn.every = function (t, e, n) {
                      var r = Fo(t) ? qe : fr;
                      return n && ms(t, e, n) && (e = i), r(t, ss(e, 3));
                    }),
                    (Bn.find = go),
                    (Bn.findIndex = Ds),
                    (Bn.findKey = function (t, e) {
                      return Pe(t, ss(e, 3), br);
                    }),
                    (Bn.findLast = mo),
                    (Bn.findLastIndex = zs),
                    (Bn.findLastKey = function (t, e) {
                      return Pe(t, ss(e, 3), yr);
                    }),
                    (Bn.floor = _a),
                    (Bn.forEach = vo),
                    (Bn.forEachRight = bo),
                    (Bn.forIn = function (t, e) {
                      return null == t ? t : mr(t, ss(e, 3), Ol);
                    }),
                    (Bn.forInRight = function (t, e) {
                      return null == t ? t : vr(t, ss(e, 3), Ol);
                    }),
                    (Bn.forOwn = function (t, e) {
                      return t && br(t, ss(e, 3));
                    }),
                    (Bn.forOwnRight = function (t, e) {
                      return t && yr(t, ss(e, 3));
                    }),
                    (Bn.get = Al),
                    (Bn.gt = Uo),
                    (Bn.gte = Do),
                    (Bn.has = function (t, e) {
                      return null != t && fs(t, e, Ar);
                    }),
                    (Bn.hasIn = kl),
                    (Bn.head = $s),
                    (Bn.identity = na),
                    (Bn.includes = function (t, e, n, r) {
                      (t = Ho(t) ? t : Ml(t)), (n = n && !r ? dl(n) : 0);
                      var i = t.length;
                      return (
                        n < 0 && (n = mn(i + n, 0)),
                        ol(t)
                          ? n <= i && t.indexOf(e, n) > -1
                          : !!i && Me(t, e, n) > -1
                      );
                    }),
                    (Bn.indexOf = function (t, e, n) {
                      var r = null == t ? 0 : t.length;
                      if (!r) return -1;
                      var i = null == n ? 0 : dl(n);
                      return i < 0 && (i = mn(r + i, 0)), Me(t, e, i);
                    }),
                    (Bn.inRange = function (t, e, n) {
                      return (
                        (e = fl(e)),
                        n === i ? ((n = e), (e = 0)) : (n = fl(n)),
                        (function (t, e, n) {
                          return t >= vn(e, n) && t < mn(e, n);
                        })((t = gl(t)), e, n)
                      );
                    }),
                    (Bn.invoke = Sl),
                    (Bn.isArguments = zo),
                    (Bn.isArray = Fo),
                    (Bn.isArrayBuffer = $o),
                    (Bn.isArrayLike = Ho),
                    (Bn.isArrayLikeObject = Wo),
                    (Bn.isBoolean = function (t) {
                      return !0 === t || !1 === t || (tl(t) && Nr(t) == v);
                    }),
                    (Bn.isBuffer = Ko),
                    (Bn.isDate = Vo),
                    (Bn.isElement = function (t) {
                      return tl(t) && 1 === t.nodeType && !rl(t);
                    }),
                    (Bn.isEmpty = function (t) {
                      if (null == t) return !0;
                      if (
                        Ho(t) &&
                        (Fo(t) ||
                          "string" == typeof t ||
                          "function" == typeof t.splice ||
                          Ko(t) ||
                          al(t) ||
                          zo(t))
                      )
                        return !t.length;
                      var e = hs(t);
                      if (e == w || e == q) return !t.size;
                      if (_s(t)) return !Cr(t).length;
                      for (var n in t) if (jt.call(t, n)) return !1;
                      return !0;
                    }),
                    (Bn.isEqual = function (t, e) {
                      return Lr(t, e);
                    }),
                    (Bn.isEqualWith = function (t, e, n) {
                      var r = (n = "function" == typeof n ? n : i)
                        ? n(t, e)
                        : i;
                      return r === i ? Lr(t, e, i, n) : !!r;
                    }),
                    (Bn.isError = Go),
                    (Bn.isFinite = function (t) {
                      return "number" == typeof t && Ie(t);
                    }),
                    (Bn.isFunction = Yo),
                    (Bn.isInteger = Qo),
                    (Bn.isLength = Xo),
                    (Bn.isMap = el),
                    (Bn.isMatch = function (t, e) {
                      return t === e || Or(t, e, ls(e));
                    }),
                    (Bn.isMatchWith = function (t, e, n) {
                      return (
                        (n = "function" == typeof n ? n : i), Or(t, e, ls(e), n)
                      );
                    }),
                    (Bn.isNaN = function (t) {
                      return nl(t) && t != +t;
                    }),
                    (Bn.isNative = function (t) {
                      if (ys(t))
                        throw new xt(
                          "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                        );
                      return Tr(t);
                    }),
                    (Bn.isNil = function (t) {
                      return null == t;
                    }),
                    (Bn.isNull = function (t) {
                      return null === t;
                    }),
                    (Bn.isNumber = nl),
                    (Bn.isObject = Jo),
                    (Bn.isObjectLike = tl),
                    (Bn.isPlainObject = rl),
                    (Bn.isRegExp = il),
                    (Bn.isSafeInteger = function (t) {
                      return Qo(t) && t >= -9007199254740991 && t <= h;
                    }),
                    (Bn.isSet = sl),
                    (Bn.isString = ol),
                    (Bn.isSymbol = ll),
                    (Bn.isTypedArray = al),
                    (Bn.isUndefined = function (t) {
                      return t === i;
                    }),
                    (Bn.isWeakMap = function (t) {
                      return tl(t) && hs(t) == L;
                    }),
                    (Bn.isWeakSet = function (t) {
                      return tl(t) && "[object WeakSet]" == Nr(t);
                    }),
                    (Bn.join = function (t, e) {
                      return null == t ? "" : $e.call(t, e);
                    }),
                    (Bn.kebabCase = Fl),
                    (Bn.last = Vs),
                    (Bn.lastIndexOf = function (t, e, n) {
                      var r = null == t ? 0 : t.length;
                      if (!r) return -1;
                      var s = r;
                      return (
                        n !== i &&
                          (s = (s = dl(n)) < 0 ? mn(r + s, 0) : vn(s, r - 1)),
                        e == e
                          ? (function (t, e, n) {
                              for (var r = n + 1; r--; )
                                if (t[r] === e) return r;
                              return r;
                            })(t, e, s)
                          : Be(t, De, s, !0)
                      );
                    }),
                    (Bn.lowerCase = $l),
                    (Bn.lowerFirst = Hl),
                    (Bn.lt = ul),
                    (Bn.lte = cl),
                    (Bn.max = function (t) {
                      return t && t.length ? dr(t, na, Er) : i;
                    }),
                    (Bn.maxBy = function (t, e) {
                      return t && t.length ? dr(t, ss(e, 2), Er) : i;
                    }),
                    (Bn.mean = function (t) {
                      return ze(t, na);
                    }),
                    (Bn.meanBy = function (t, e) {
                      return ze(t, ss(e, 2));
                    }),
                    (Bn.min = function (t) {
                      return t && t.length ? dr(t, na, Rr) : i;
                    }),
                    (Bn.minBy = function (t, e) {
                      return t && t.length ? dr(t, ss(e, 2), Rr) : i;
                    }),
                    (Bn.stubArray = pa),
                    (Bn.stubFalse = ga),
                    (Bn.stubObject = function () {
                      return {};
                    }),
                    (Bn.stubString = function () {
                      return "";
                    }),
                    (Bn.stubTrue = function () {
                      return !0;
                    }),
                    (Bn.multiply = xa),
                    (Bn.nth = function (t, e) {
                      return t && t.length ? Ur(t, dl(e)) : i;
                    }),
                    (Bn.noConflict = function () {
                      return he._ === this && (he._ = Bt), this;
                    }),
                    (Bn.noop = la),
                    (Bn.now = Ao),
                    (Bn.pad = function (t, e, n) {
                      t = vl(t);
                      var r = (e = dl(e)) ? cn(t) : 0;
                      if (!e || r >= e) return t;
                      var i = (e - r) / 2;
                      return Di(de(i), n) + t + Di(fe(i), n);
                    }),
                    (Bn.padEnd = function (t, e, n) {
                      t = vl(t);
                      var r = (e = dl(e)) ? cn(t) : 0;
                      return e && r < e ? t + Di(e - r, n) : t;
                    }),
                    (Bn.padStart = function (t, e, n) {
                      t = vl(t);
                      var r = (e = dl(e)) ? cn(t) : 0;
                      return e && r < e ? Di(e - r, n) + t : t;
                    }),
                    (Bn.parseInt = function (t, e, n) {
                      return (
                        n || null == e ? (e = 0) : e && (e = +e),
                        yn(vl(t).replace(rt, ""), e || 0)
                      );
                    }),
                    (Bn.random = function (t, e, n) {
                      if (
                        (n &&
                          "boolean" != typeof n &&
                          ms(t, e, n) &&
                          (e = n = i),
                        n === i &&
                          ("boolean" == typeof e
                            ? ((n = e), (e = i))
                            : "boolean" == typeof t && ((n = t), (t = i))),
                        t === i && e === i
                          ? ((t = 0), (e = 1))
                          : ((t = fl(t)),
                            e === i ? ((e = t), (t = 0)) : (e = fl(e))),
                        t > e)
                      ) {
                        var r = t;
                        (t = e), (e = r);
                      }
                      if (n || t % 1 || e % 1) {
                        var s = _n();
                        return vn(
                          t + s * (e - t + le("1e-" + ((s + "").length - 1))),
                          e
                        );
                      }
                      return Hr(t, e);
                    }),
                    (Bn.reduce = function (t, e, n) {
                      var r = Fo(t) ? je : He,
                        i = arguments.length < 3;
                      return r(t, ss(e, 4), n, i, cr);
                    }),
                    (Bn.reduceRight = function (t, e, n) {
                      var r = Fo(t) ? Ce : He,
                        i = arguments.length < 3;
                      return r(t, ss(e, 4), n, i, hr);
                    }),
                    (Bn.repeat = function (t, e, n) {
                      return (
                        (e = (n ? ms(t, e, n) : e === i) ? 1 : dl(e)),
                        Wr(vl(t), e)
                      );
                    }),
                    (Bn.replace = function () {
                      var t = arguments,
                        e = vl(t[0]);
                      return t.length < 3 ? e : e.replace(t[1], t[2]);
                    }),
                    (Bn.result = function (t, e, n) {
                      var r = -1,
                        s = (e = mi(e, t)).length;
                      for (s || ((s = 1), (t = i)); ++r < s; ) {
                        var o = null == t ? i : t[Rs(e[r])];
                        o === i && ((r = s), (o = n)),
                          (t = Yo(o) ? o.call(t) : o);
                      }
                      return t;
                    }),
                    (Bn.round = wa),
                    (Bn.runInContext = t),
                    (Bn.sample = function (t) {
                      return (Fo(t) ? Gn : Vr)(t);
                    }),
                    (Bn.size = function (t) {
                      if (null == t) return 0;
                      if (Ho(t)) return ol(t) ? cn(t) : t.length;
                      var e = hs(t);
                      return e == w || e == q ? t.size : Cr(t).length;
                    }),
                    (Bn.snakeCase = Wl),
                    (Bn.some = function (t, e, n) {
                      var r = Fo(t) ? Re : ei;
                      return n && ms(t, e, n) && (e = i), r(t, ss(e, 3));
                    }),
                    (Bn.sortedIndex = function (t, e) {
                      return ni(t, e);
                    }),
                    (Bn.sortedIndexBy = function (t, e, n) {
                      return ri(t, e, ss(n, 2));
                    }),
                    (Bn.sortedIndexOf = function (t, e) {
                      var n = null == t ? 0 : t.length;
                      if (n) {
                        var r = ni(t, e);
                        if (r < n && Mo(t[r], e)) return r;
                      }
                      return -1;
                    }),
                    (Bn.sortedLastIndex = function (t, e) {
                      return ni(t, e, !0);
                    }),
                    (Bn.sortedLastIndexBy = function (t, e, n) {
                      return ri(t, e, ss(n, 2), !0);
                    }),
                    (Bn.sortedLastIndexOf = function (t, e) {
                      if (null != t && t.length) {
                        var n = ni(t, e, !0) - 1;
                        if (Mo(t[n], e)) return n;
                      }
                      return -1;
                    }),
                    (Bn.startCase = Kl),
                    (Bn.startsWith = function (t, e, n) {
                      return (
                        (t = vl(t)),
                        (n = null == n ? 0 : sr(dl(n), 0, t.length)),
                        (e = oi(e)),
                        t.slice(n, n + e.length) == e
                      );
                    }),
                    (Bn.subtract = Na),
                    (Bn.sum = function (t) {
                      return t && t.length ? We(t, na) : 0;
                    }),
                    (Bn.sumBy = function (t, e) {
                      return t && t.length ? We(t, ss(e, 2)) : 0;
                    }),
                    (Bn.template = function (t, e, n) {
                      var r = Bn.templateSettings;
                      n && ms(t, e, n) && (e = i),
                        (t = vl(t)),
                        (e = _l({}, e, r, Gi));
                      var s,
                        o,
                        l = _l({}, e.imports, r.imports, Gi),
                        a = Ll(l),
                        u = Ye(l, a),
                        c = 0,
                        h = e.interpolate || yt,
                        f = "__p += '",
                        d = At(
                          (e.escape || yt).source +
                            "|" +
                            h.source +
                            "|" +
                            (h === Q ? ht : yt).source +
                            "|" +
                            (e.evaluate || yt).source +
                            "|$",
                          "g"
                        ),
                        p =
                          "//# sourceURL=" +
                          (jt.call(e, "sourceURL")
                            ? (e.sourceURL + "").replace(/\s/g, " ")
                            : "lodash.templateSources[" + ++re + "]") +
                          "\n";
                      t.replace(d, function (e, n, r, i, l, a) {
                        return (
                          r || (r = i),
                          (f += t.slice(c, a).replace(_t, nn)),
                          n && ((s = !0), (f += "' +\n__e(" + n + ") +\n'")),
                          l && ((o = !0), (f += "';\n" + l + ";\n__p += '")),
                          r &&
                            (f +=
                              "' +\n((__t = (" +
                              r +
                              ")) == null ? '' : __t) +\n'"),
                          (c = a + e.length),
                          e
                        );
                      }),
                        (f += "';\n");
                      var g = jt.call(e, "variable") && e.variable;
                      if (g) {
                        if (ut.test(g))
                          throw new xt(
                            "Invalid `variable` option passed into `_.template`"
                          );
                      } else f = "with (obj) {\n" + f + "\n}\n";
                      (f = (o ? f.replace(z, "") : f)
                        .replace(F, "$1")
                        .replace($, "$1;")),
                        (f =
                          "function(" +
                          (g || "obj") +
                          ") {\n" +
                          (g ? "" : "obj || (obj = {});\n") +
                          "var __t, __p = ''" +
                          (s ? ", __e = _.escape" : "") +
                          (o
                            ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                            : ";\n") +
                          f +
                          "return __p\n}");
                      var m = Ql(function () {
                        return wt(a, p + "return " + f).apply(i, u);
                      });
                      if (((m.source = f), Go(m))) throw m;
                      return m;
                    }),
                    (Bn.times = function (t, e) {
                      if ((t = dl(t)) < 1 || t > h) return [];
                      var n = d,
                        r = vn(t, d);
                      (e = ss(e)), (t -= d);
                      for (var i = Ke(r, e); ++n < t; ) e(n);
                      return i;
                    }),
                    (Bn.toFinite = fl),
                    (Bn.toInteger = dl),
                    (Bn.toLength = pl),
                    (Bn.toLower = function (t) {
                      return vl(t).toLowerCase();
                    }),
                    (Bn.toNumber = gl),
                    (Bn.toSafeInteger = function (t) {
                      return t
                        ? sr(dl(t), -9007199254740991, h)
                        : 0 === t
                        ? t
                        : 0;
                    }),
                    (Bn.toString = vl),
                    (Bn.toUpper = function (t) {
                      return vl(t).toUpperCase();
                    }),
                    (Bn.trim = function (t, e, n) {
                      if ((t = vl(t)) && (n || e === i)) return Ve(t);
                      if (!t || !(e = oi(e))) return t;
                      var r = hn(t),
                        s = hn(e);
                      return bi(r, Xe(r, s), Je(r, s) + 1).join("");
                    }),
                    (Bn.trimEnd = function (t, e, n) {
                      if ((t = vl(t)) && (n || e === i))
                        return t.slice(0, fn(t) + 1);
                      if (!t || !(e = oi(e))) return t;
                      var r = hn(t);
                      return bi(r, 0, Je(r, hn(e)) + 1).join("");
                    }),
                    (Bn.trimStart = function (t, e, n) {
                      if ((t = vl(t)) && (n || e === i))
                        return t.replace(rt, "");
                      if (!t || !(e = oi(e))) return t;
                      var r = hn(t);
                      return bi(r, Xe(r, hn(e))).join("");
                    }),
                    (Bn.truncate = function (t, e) {
                      var n = 30,
                        r = "...";
                      if (Jo(e)) {
                        var s = "separator" in e ? e.separator : s;
                        (n = "length" in e ? dl(e.length) : n),
                          (r = "omission" in e ? oi(e.omission) : r);
                      }
                      var o = (t = vl(t)).length;
                      if (rn(t)) {
                        var l = hn(t);
                        o = l.length;
                      }
                      if (n >= o) return t;
                      var a = n - cn(r);
                      if (a < 1) return r;
                      var u = l ? bi(l, 0, a).join("") : t.slice(0, a);
                      if (s === i) return u + r;
                      if ((l && (a += u.length - a), il(s))) {
                        if (t.slice(a).search(s)) {
                          var c,
                            h = u;
                          for (
                            s.global ||
                              (s = At(s.source, vl(ft.exec(s)) + "g")),
                              s.lastIndex = 0;
                            (c = s.exec(h));

                          )
                            var f = c.index;
                          u = u.slice(0, f === i ? a : f);
                        }
                      } else if (t.indexOf(oi(s), a) != a) {
                        var d = u.lastIndexOf(s);
                        d > -1 && (u = u.slice(0, d));
                      }
                      return u + r;
                    }),
                    (Bn.unescape = function (t) {
                      return (t = vl(t)) && K.test(t) ? t.replace(H, dn) : t;
                    }),
                    (Bn.uniqueId = function (t) {
                      var e = ++Ct;
                      return vl(t) + e;
                    }),
                    (Bn.upperCase = Vl),
                    (Bn.upperFirst = Gl),
                    (Bn.each = vo),
                    (Bn.eachRight = bo),
                    (Bn.first = $s),
                    oa(
                      Bn,
                      ((ma = {}),
                      br(Bn, function (t, e) {
                        jt.call(Bn.prototype, e) || (ma[e] = t);
                      }),
                      ma),
                      { chain: !1 }
                    ),
                    (Bn.VERSION = "4.17.21"),
                    Ae(
                      [
                        "bind",
                        "bindKey",
                        "curry",
                        "curryRight",
                        "partial",
                        "partialRight",
                      ],
                      function (t) {
                        Bn[t].placeholder = Bn;
                      }
                    ),
                    Ae(["drop", "take"], function (t, e) {
                      (zn.prototype[t] = function (n) {
                        n = n === i ? 1 : mn(dl(n), 0);
                        var r =
                          this.__filtered__ && !e ? new zn(this) : this.clone();
                        return (
                          r.__filtered__
                            ? (r.__takeCount__ = vn(n, r.__takeCount__))
                            : r.__views__.push({
                                size: vn(n, d),
                                type: t + (r.__dir__ < 0 ? "Right" : ""),
                              }),
                          r
                        );
                      }),
                        (zn.prototype[t + "Right"] = function (e) {
                          return this.reverse()[t](e).reverse();
                        });
                    }),
                    Ae(["filter", "map", "takeWhile"], function (t, e) {
                      var n = e + 1,
                        r = 1 == n || 3 == n;
                      zn.prototype[t] = function (t) {
                        var e = this.clone();
                        return (
                          e.__iteratees__.push({ iteratee: ss(t, 3), type: n }),
                          (e.__filtered__ = e.__filtered__ || r),
                          e
                        );
                      };
                    }),
                    Ae(["head", "last"], function (t, e) {
                      var n = "take" + (e ? "Right" : "");
                      zn.prototype[t] = function () {
                        return this[n](1).value()[0];
                      };
                    }),
                    Ae(["initial", "tail"], function (t, e) {
                      var n = "drop" + (e ? "" : "Right");
                      zn.prototype[t] = function () {
                        return this.__filtered__ ? new zn(this) : this[n](1);
                      };
                    }),
                    (zn.prototype.compact = function () {
                      return this.filter(na);
                    }),
                    (zn.prototype.find = function (t) {
                      return this.filter(t).head();
                    }),
                    (zn.prototype.findLast = function (t) {
                      return this.reverse().find(t);
                    }),
                    (zn.prototype.invokeMap = Kr(function (t, e) {
                      return "function" == typeof t
                        ? new zn(this)
                        : this.map(function (n) {
                            return Zr(n, t, e);
                          });
                    })),
                    (zn.prototype.reject = function (t) {
                      return this.filter(Co(ss(t)));
                    }),
                    (zn.prototype.slice = function (t, e) {
                      t = dl(t);
                      var n = this;
                      return n.__filtered__ && (t > 0 || e < 0)
                        ? new zn(n)
                        : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                          e !== i &&
                            (n =
                              (e = dl(e)) < 0
                                ? n.dropRight(-e)
                                : n.take(e - t)),
                          n);
                    }),
                    (zn.prototype.takeRightWhile = function (t) {
                      return this.reverse().takeWhile(t).reverse();
                    }),
                    (zn.prototype.toArray = function () {
                      return this.take(d);
                    }),
                    br(zn.prototype, function (t, e) {
                      var n = /^(?:filter|find|map|reject)|While$/.test(e),
                        r = /^(?:head|last)$/.test(e),
                        s = Bn[r ? "take" + ("last" == e ? "Right" : "") : e],
                        o = r || /^find/.test(e);
                      s &&
                        (Bn.prototype[e] = function () {
                          var e = this.__wrapped__,
                            l = r ? [1] : arguments,
                            a = e instanceof zn,
                            u = l[0],
                            c = a || Fo(e),
                            h = function (t) {
                              var e = s.apply(Bn, Te([t], l));
                              return r && f ? e[0] : e;
                            };
                          c &&
                            n &&
                            "function" == typeof u &&
                            1 != u.length &&
                            (a = c = !1);
                          var f = this.__chain__,
                            d = !!this.__actions__.length,
                            p = o && !f,
                            g = a && !d;
                          if (!o && c) {
                            e = g ? e : new zn(this);
                            var m = t.apply(e, l);
                            return (
                              m.__actions__.push({
                                func: ho,
                                args: [h],
                                thisArg: i,
                              }),
                              new Dn(m, f)
                            );
                          }
                          return p && g
                            ? t.apply(this, l)
                            : ((m = this.thru(h)),
                              p ? (r ? m.value()[0] : m.value()) : m);
                        });
                    }),
                    Ae(
                      ["pop", "push", "shift", "sort", "splice", "unshift"],
                      function (t) {
                        var e = Zt[t],
                          n = /^(?:push|sort|unshift)$/.test(t)
                            ? "tap"
                            : "thru",
                          r = /^(?:pop|shift)$/.test(t);
                        Bn.prototype[t] = function () {
                          var t = arguments;
                          if (r && !this.__chain__) {
                            var i = this.value();
                            return e.apply(Fo(i) ? i : [], t);
                          }
                          return this[n](function (n) {
                            return e.apply(Fo(n) ? n : [], t);
                          });
                        };
                      }
                    ),
                    br(zn.prototype, function (t, e) {
                      var n = Bn[e];
                      if (n) {
                        var r = n.name + "";
                        jt.call(Sn, r) || (Sn[r] = []),
                          Sn[r].push({ name: e, func: n });
                      }
                    }),
                    (Sn[Pi(i, 2).name] = [{ name: "wrapper", func: i }]),
                    (zn.prototype.clone = function () {
                      var t = new zn(this.__wrapped__);
                      return (
                        (t.__actions__ = ki(this.__actions__)),
                        (t.__dir__ = this.__dir__),
                        (t.__filtered__ = this.__filtered__),
                        (t.__iteratees__ = ki(this.__iteratees__)),
                        (t.__takeCount__ = this.__takeCount__),
                        (t.__views__ = ki(this.__views__)),
                        t
                      );
                    }),
                    (zn.prototype.reverse = function () {
                      if (this.__filtered__) {
                        var t = new zn(this);
                        (t.__dir__ = -1), (t.__filtered__ = !0);
                      } else (t = this.clone()).__dir__ *= -1;
                      return t;
                    }),
                    (zn.prototype.value = function () {
                      var t = this.__wrapped__.value(),
                        e = this.__dir__,
                        n = Fo(t),
                        r = e < 0,
                        i = n ? t.length : 0,
                        s = (function (t, e, n) {
                          for (var r = -1, i = n.length; ++r < i; ) {
                            var s = n[r],
                              o = s.size;
                            switch (s.type) {
                              case "drop":
                                t += o;
                                break;
                              case "dropRight":
                                e -= o;
                                break;
                              case "take":
                                e = vn(e, t + o);
                                break;
                              case "takeRight":
                                t = mn(t, e - o);
                            }
                          }
                          return { start: t, end: e };
                        })(0, i, this.__views__),
                        o = s.start,
                        l = s.end,
                        a = l - o,
                        u = r ? l : o - 1,
                        c = this.__iteratees__,
                        h = c.length,
                        f = 0,
                        d = vn(a, this.__takeCount__);
                      if (!n || (!r && i == a && d == a))
                        return hi(t, this.__actions__);
                      var p = [];
                      t: for (; a-- && f < d; ) {
                        for (var g = -1, m = t[(u += e)]; ++g < h; ) {
                          var v = c[g],
                            b = v.iteratee,
                            y = v.type,
                            _ = b(m);
                          if (2 == y) m = _;
                          else if (!_) {
                            if (1 == y) continue t;
                            break t;
                          }
                        }
                        p[f++] = m;
                      }
                      return p;
                    }),
                    (Bn.prototype.at = fo),
                    (Bn.prototype.chain = function () {
                      return co(this);
                    }),
                    (Bn.prototype.commit = function () {
                      return new Dn(this.value(), this.__chain__);
                    }),
                    (Bn.prototype.next = function () {
                      this.__values__ === i &&
                        (this.__values__ = hl(this.value()));
                      var t = this.__index__ >= this.__values__.length;
                      return {
                        done: t,
                        value: t ? i : this.__values__[this.__index__++],
                      };
                    }),
                    (Bn.prototype.plant = function (t) {
                      for (var e, n = this; n instanceof Un; ) {
                        var r = Ps(n);
                        (r.__index__ = 0),
                          (r.__values__ = i),
                          e ? (s.__wrapped__ = r) : (e = r);
                        var s = r;
                        n = n.__wrapped__;
                      }
                      return (s.__wrapped__ = t), e;
                    }),
                    (Bn.prototype.reverse = function () {
                      var t = this.__wrapped__;
                      if (t instanceof zn) {
                        var e = t;
                        return (
                          this.__actions__.length && (e = new zn(this)),
                          (e = e.reverse()).__actions__.push({
                            func: ho,
                            args: [Xs],
                            thisArg: i,
                          }),
                          new Dn(e, this.__chain__)
                        );
                      }
                      return this.thru(Xs);
                    }),
                    (Bn.prototype.toJSON =
                      Bn.prototype.valueOf =
                      Bn.prototype.value =
                        function () {
                          return hi(this.__wrapped__, this.__actions__);
                        }),
                    (Bn.prototype.first = Bn.prototype.head),
                    Gt &&
                      (Bn.prototype[Gt] = function () {
                        return this;
                      }),
                    Bn
                  );
                })();
              (he._ = pn),
                (r = function () {
                  return pn;
                }.call(e, n, e, t)) === i || (t.exports = r);
            }.call(this);
        },
        2845: function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          const r = n(9907),
            i = n(3958);
          var s;
          !(function (t) {
            (t.compose = function (t = {}, e = {}, n = !1) {
              "object" != typeof t && (t = {}),
                "object" != typeof e && (e = {});
              let i = r(e);
              n ||
                (i = Object.keys(i).reduce(
                  (t, e) => (null != i[e] && (t[e] = i[e]), t),
                  {}
                ));
              for (const n in t)
                void 0 !== t[n] && void 0 === e[n] && (i[n] = t[n]);
              return Object.keys(i).length > 0 ? i : void 0;
            }),
              (t.diff = function (t = {}, e = {}) {
                "object" != typeof t && (t = {}),
                  "object" != typeof e && (e = {});
                const n = Object.keys(t)
                  .concat(Object.keys(e))
                  .reduce(
                    (n, r) => (
                      i(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
                    ),
                    {}
                  );
                return Object.keys(n).length > 0 ? n : void 0;
              }),
              (t.invert = function (t = {}, e = {}) {
                t = t || {};
                const n = Object.keys(e).reduce(
                  (n, r) => (
                    e[r] !== t[r] && void 0 !== t[r] && (n[r] = e[r]), n
                  ),
                  {}
                );
                return Object.keys(t).reduce(
                  (n, r) => (
                    t[r] !== e[r] && void 0 === e[r] && (n[r] = null), n
                  ),
                  n
                );
              }),
              (t.transform = function (t, e, n = !1) {
                if ("object" != typeof t) return e;
                if ("object" != typeof e) return;
                if (!n) return e;
                const r = Object.keys(e).reduce(
                  (n, r) => (void 0 === t[r] && (n[r] = e[r]), n),
                  {}
                );
                return Object.keys(r).length > 0 ? r : void 0;
              });
          })(s || (s = {})),
            (e.default = s);
        },
        1702: function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AttributeMap = e.OpIterator = e.Op = void 0);
          const r = n(9661),
            i = n(9907),
            s = n(3958),
            o = n(2845);
          e.AttributeMap = o.default;
          const l = n(7707);
          e.Op = l.default;
          const a = n(6026);
          e.OpIterator = a.default;
          const u = String.fromCharCode(0),
            c = (t, e) => {
              if ("object" != typeof t || null === t)
                throw new Error("cannot retain a " + typeof t);
              if ("object" != typeof e || null === e)
                throw new Error("cannot retain a " + typeof e);
              const n = Object.keys(t)[0];
              if (!n || n !== Object.keys(e)[0])
                throw new Error(
                  `embed types not matched: ${n} != ${Object.keys(e)[0]}`
                );
              return [n, t[n], e[n]];
            };
          class h {
            constructor(t) {
              Array.isArray(t)
                ? (this.ops = t)
                : null != t && Array.isArray(t.ops)
                ? (this.ops = t.ops)
                : (this.ops = []);
            }
            static registerEmbed(t, e) {
              this.handlers[t] = e;
            }
            static unregisterEmbed(t) {
              delete this.handlers[t];
            }
            static getHandler(t) {
              const e = this.handlers[t];
              if (!e) throw new Error(`no handlers for embed type "${t}"`);
              return e;
            }
            insert(t, e) {
              const n = {};
              return "string" == typeof t && 0 === t.length
                ? this
                : ((n.insert = t),
                  null != e &&
                    "object" == typeof e &&
                    Object.keys(e).length > 0 &&
                    (n.attributes = e),
                  this.push(n));
            }
            delete(t) {
              return t <= 0 ? this : this.push({ delete: t });
            }
            retain(t, e) {
              if ("number" == typeof t && t <= 0) return this;
              const n = { retain: t };
              return (
                null != e &&
                  "object" == typeof e &&
                  Object.keys(e).length > 0 &&
                  (n.attributes = e),
                this.push(n)
              );
            }
            push(t) {
              let e = this.ops.length,
                n = this.ops[e - 1];
              if (((t = i(t)), "object" == typeof n)) {
                if ("number" == typeof t.delete && "number" == typeof n.delete)
                  return (
                    (this.ops[e - 1] = { delete: n.delete + t.delete }), this
                  );
                if (
                  "number" == typeof n.delete &&
                  null != t.insert &&
                  ((e -= 1), (n = this.ops[e - 1]), "object" != typeof n)
                )
                  return this.ops.unshift(t), this;
                if (s(t.attributes, n.attributes)) {
                  if (
                    "string" == typeof t.insert &&
                    "string" == typeof n.insert
                  )
                    return (
                      (this.ops[e - 1] = { insert: n.insert + t.insert }),
                      "object" == typeof t.attributes &&
                        (this.ops[e - 1].attributes = t.attributes),
                      this
                    );
                  if (
                    "number" == typeof t.retain &&
                    "number" == typeof n.retain
                  )
                    return (
                      (this.ops[e - 1] = { retain: n.retain + t.retain }),
                      "object" == typeof t.attributes &&
                        (this.ops[e - 1].attributes = t.attributes),
                      this
                    );
                }
              }
              return (
                e === this.ops.length
                  ? this.ops.push(t)
                  : this.ops.splice(e, 0, t),
                this
              );
            }
            chop() {
              const t = this.ops[this.ops.length - 1];
              return (
                t &&
                  "number" == typeof t.retain &&
                  !t.attributes &&
                  this.ops.pop(),
                this
              );
            }
            filter(t) {
              return this.ops.filter(t);
            }
            forEach(t) {
              this.ops.forEach(t);
            }
            map(t) {
              return this.ops.map(t);
            }
            partition(t) {
              const e = [],
                n = [];
              return (
                this.forEach((r) => {
                  (t(r) ? e : n).push(r);
                }),
                [e, n]
              );
            }
            reduce(t, e) {
              return this.ops.reduce(t, e);
            }
            changeLength() {
              return this.reduce(
                (t, e) =>
                  e.insert
                    ? t + l.default.length(e)
                    : e.delete
                    ? t - e.delete
                    : t,
                0
              );
            }
            length() {
              return this.reduce((t, e) => t + l.default.length(e), 0);
            }
            slice(t = 0, e = 1 / 0) {
              const n = [],
                r = new a.default(this.ops);
              let i = 0;
              for (; i < e && r.hasNext(); ) {
                let s;
                i < t ? (s = r.next(t - i)) : ((s = r.next(e - i)), n.push(s)),
                  (i += l.default.length(s));
              }
              return new h(n);
            }
            compose(t) {
              const e = new a.default(this.ops),
                n = new a.default(t.ops),
                r = [],
                i = n.peek();
              if (
                null != i &&
                "number" == typeof i.retain &&
                null == i.attributes
              ) {
                let t = i.retain;
                for (; "insert" === e.peekType() && e.peekLength() <= t; )
                  (t -= e.peekLength()), r.push(e.next());
                i.retain - t > 0 && n.next(i.retain - t);
              }
              const l = new h(r);
              for (; e.hasNext() || n.hasNext(); )
                if ("insert" === n.peekType()) l.push(n.next());
                else if ("delete" === e.peekType()) l.push(e.next());
                else {
                  const t = Math.min(e.peekLength(), n.peekLength()),
                    r = e.next(t),
                    i = n.next(t);
                  if (i.retain) {
                    const a = {};
                    if ("number" == typeof r.retain)
                      a.retain = "number" == typeof i.retain ? t : i.retain;
                    else if ("number" == typeof i.retain)
                      null == r.retain
                        ? (a.insert = r.insert)
                        : (a.retain = r.retain);
                    else {
                      const t = null == r.retain ? "insert" : "retain",
                        [e, n, s] = c(r[t], i.retain),
                        o = h.getHandler(e);
                      a[t] = { [e]: o.compose(n, s, "retain" === t) };
                    }
                    const u = o.default.compose(
                      r.attributes,
                      i.attributes,
                      "number" == typeof r.retain
                    );
                    if (
                      (u && (a.attributes = u),
                      l.push(a),
                      !n.hasNext() && s(l.ops[l.ops.length - 1], a))
                    ) {
                      const t = new h(e.rest());
                      return l.concat(t).chop();
                    }
                  } else
                    "number" == typeof i.delete &&
                      ("number" == typeof r.retain ||
                        ("object" == typeof r.retain && null !== r.retain)) &&
                      l.push(i);
                }
              return l.chop();
            }
            concat(t) {
              const e = new h(this.ops.slice());
              return (
                t.ops.length > 0 &&
                  (e.push(t.ops[0]), (e.ops = e.ops.concat(t.ops.slice(1)))),
                e
              );
            }
            diff(t, e) {
              if (this.ops === t.ops) return new h();
              const n = [this, t].map((e) =>
                  e
                    .map((n) => {
                      if (null != n.insert)
                        return "string" == typeof n.insert ? n.insert : u;
                      throw new Error(
                        "diff() called " +
                          (e === t ? "on" : "with") +
                          " non-document"
                      );
                    })
                    .join("")
                ),
                i = new h(),
                l = r(n[0], n[1], e, !0),
                c = new a.default(this.ops),
                f = new a.default(t.ops);
              return (
                l.forEach((t) => {
                  let e = t[1].length;
                  for (; e > 0; ) {
                    let n = 0;
                    switch (t[0]) {
                      case r.INSERT:
                        (n = Math.min(f.peekLength(), e)), i.push(f.next(n));
                        break;
                      case r.DELETE:
                        (n = Math.min(e, c.peekLength())),
                          c.next(n),
                          i.delete(n);
                        break;
                      case r.EQUAL:
                        n = Math.min(c.peekLength(), f.peekLength(), e);
                        const t = c.next(n),
                          l = f.next(n);
                        s(t.insert, l.insert)
                          ? i.retain(
                              n,
                              o.default.diff(t.attributes, l.attributes)
                            )
                          : i.push(l).delete(n);
                    }
                    e -= n;
                  }
                }),
                i.chop()
              );
            }
            eachLine(t, e = "\n") {
              const n = new a.default(this.ops);
              let r = new h(),
                i = 0;
              for (; n.hasNext(); ) {
                if ("insert" !== n.peekType()) return;
                const s = n.peek(),
                  o = l.default.length(s) - n.peekLength(),
                  a =
                    "string" == typeof s.insert
                      ? s.insert.indexOf(e, o) - o
                      : -1;
                if (a < 0) r.push(n.next());
                else if (a > 0) r.push(n.next(a));
                else {
                  if (!1 === t(r, n.next(1).attributes || {}, i)) return;
                  (i += 1), (r = new h());
                }
              }
              r.length() > 0 && t(r, {}, i);
            }
            invert(t) {
              const e = new h();
              return (
                this.reduce((n, r) => {
                  if (r.insert) e.delete(l.default.length(r));
                  else {
                    if ("number" == typeof r.retain && null == r.attributes)
                      return e.retain(r.retain), n + r.retain;
                    if (r.delete || "number" == typeof r.retain) {
                      const i = r.delete || r.retain;
                      return (
                        t.slice(n, n + i).forEach((t) => {
                          r.delete
                            ? e.push(t)
                            : r.retain &&
                              r.attributes &&
                              e.retain(
                                l.default.length(t),
                                o.default.invert(r.attributes, t.attributes)
                              );
                        }),
                        n + i
                      );
                    }
                    if ("object" == typeof r.retain && null !== r.retain) {
                      const i = t.slice(n, n + 1),
                        s = new a.default(i.ops).next(),
                        [l, u, f] = c(r.retain, s.insert),
                        d = h.getHandler(l);
                      return (
                        e.retain(
                          { [l]: d.invert(u, f) },
                          o.default.invert(r.attributes, s.attributes)
                        ),
                        n + 1
                      );
                    }
                  }
                  return n;
                }, 0),
                e.chop()
              );
            }
            transform(t, e = !1) {
              if (((e = !!e), "number" == typeof t))
                return this.transformPosition(t, e);
              const n = t,
                r = new a.default(this.ops),
                i = new a.default(n.ops),
                s = new h();
              for (; r.hasNext() || i.hasNext(); )
                if (
                  "insert" !== r.peekType() ||
                  (!e && "insert" === i.peekType())
                )
                  if ("insert" === i.peekType()) s.push(i.next());
                  else {
                    const t = Math.min(r.peekLength(), i.peekLength()),
                      n = r.next(t),
                      l = i.next(t);
                    if (n.delete) continue;
                    if (l.delete) s.push(l);
                    else {
                      const r = n.retain,
                        i = l.retain;
                      let a = "object" == typeof i && null !== i ? i : t;
                      if (
                        "object" == typeof r &&
                        null !== r &&
                        "object" == typeof i &&
                        null !== i
                      ) {
                        const t = Object.keys(r)[0];
                        if (t === Object.keys(i)[0]) {
                          const n = h.getHandler(t);
                          n && (a = { [t]: n.transform(r[t], i[t], e) });
                        }
                      }
                      s.retain(
                        a,
                        o.default.transform(n.attributes, l.attributes, e)
                      );
                    }
                  }
                else s.retain(l.default.length(r.next()));
              return s.chop();
            }
            transformPosition(t, e = !1) {
              e = !!e;
              const n = new a.default(this.ops);
              let r = 0;
              for (; n.hasNext() && r <= t; ) {
                const i = n.peekLength(),
                  s = n.peekType();
                n.next(),
                  "delete" !== s
                    ? ("insert" === s && (r < t || !e) && (t += i), (r += i))
                    : (t -= Math.min(i, t - r));
              }
              return t;
            }
          }
          (h.Op = l.default),
            (h.OpIterator = a.default),
            (h.AttributeMap = o.default),
            (h.handlers = {}),
            (e.default = h),
            (t.exports = h),
            (t.exports.default = h);
        },
        7707: function (t, e) {
          "use strict";
          var n;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (t) {
              t.length = function (t) {
                return "number" == typeof t.delete
                  ? t.delete
                  : "number" == typeof t.retain
                  ? t.retain
                  : "object" == typeof t.retain && null !== t.retain
                  ? 1
                  : "string" == typeof t.insert
                  ? t.insert.length
                  : 1;
              };
            })(n || (n = {})),
            (e.default = n);
        },
        6026: function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          const r = n(7707);
          e.default = class {
            constructor(t) {
              (this.ops = t), (this.index = 0), (this.offset = 0);
            }
            hasNext() {
              return this.peekLength() < 1 / 0;
            }
            next(t) {
              t || (t = 1 / 0);
              const e = this.ops[this.index];
              if (e) {
                const n = this.offset,
                  i = r.default.length(e);
                if (
                  (t >= i - n
                    ? ((t = i - n), (this.index += 1), (this.offset = 0))
                    : (this.offset += t),
                  "number" == typeof e.delete)
                )
                  return { delete: t };
                {
                  const r = {};
                  return (
                    e.attributes && (r.attributes = e.attributes),
                    "number" == typeof e.retain
                      ? (r.retain = t)
                      : "object" == typeof e.retain && null !== e.retain
                      ? (r.retain = e.retain)
                      : "string" == typeof e.insert
                      ? (r.insert = e.insert.substr(n, t))
                      : (r.insert = e.insert),
                    r
                  );
                }
              }
              return { retain: 1 / 0 };
            }
            peek() {
              return this.ops[this.index];
            }
            peekLength() {
              return this.ops[this.index]
                ? r.default.length(this.ops[this.index]) - this.offset
                : 1 / 0;
            }
            peekType() {
              const t = this.ops[this.index];
              return t
                ? "number" == typeof t.delete
                  ? "delete"
                  : "number" == typeof t.retain ||
                    ("object" == typeof t.retain && null !== t.retain)
                  ? "retain"
                  : "insert"
                : "retain";
            }
            rest() {
              if (this.hasNext()) {
                if (0 === this.offset) return this.ops.slice(this.index);
                {
                  const t = this.offset,
                    e = this.index,
                    n = this.next(),
                    r = this.ops.slice(this.index);
                  return (this.offset = t), (this.index = e), [n].concat(r);
                }
              }
              return [];
            }
          };
        },
        6729: function (t) {
          "use strict";
          var e = Object.prototype.hasOwnProperty,
            n = "~";
          function r() {}
          function i(t, e, n) {
            (this.fn = t), (this.context = e), (this.once = n || !1);
          }
          function s(t, e, r, s, o) {
            if ("function" != typeof r)
              throw new TypeError("The listener must be a function");
            var l = new i(r, s || t, o),
              a = n ? n + e : e;
            return (
              t._events[a]
                ? t._events[a].fn
                  ? (t._events[a] = [t._events[a], l])
                  : t._events[a].push(l)
                : ((t._events[a] = l), t._eventsCount++),
              t
            );
          }
          function o(t, e) {
            0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
          }
          function l() {
            (this._events = new r()), (this._eventsCount = 0);
          }
          Object.create &&
            ((r.prototype = Object.create(null)),
            new r().__proto__ || (n = !1)),
            (l.prototype.eventNames = function () {
              var t,
                r,
                i = [];
              if (0 === this._eventsCount) return i;
              for (r in (t = this._events))
                e.call(t, r) && i.push(n ? r.slice(1) : r);
              return Object.getOwnPropertySymbols
                ? i.concat(Object.getOwnPropertySymbols(t))
                : i;
            }),
            (l.prototype.listeners = function (t) {
              var e = n ? n + t : t,
                r = this._events[e];
              if (!r) return [];
              if (r.fn) return [r.fn];
              for (var i = 0, s = r.length, o = new Array(s); i < s; i++)
                o[i] = r[i].fn;
              return o;
            }),
            (l.prototype.listenerCount = function (t) {
              var e = n ? n + t : t,
                r = this._events[e];
              return r ? (r.fn ? 1 : r.length) : 0;
            }),
            (l.prototype.emit = function (t, e, r, i, s, o) {
              var l = n ? n + t : t;
              if (!this._events[l]) return !1;
              var a,
                u,
                c = this._events[l],
                h = arguments.length;
              if (c.fn) {
                switch (
                  (c.once && this.removeListener(t, c.fn, void 0, !0), h)
                ) {
                  case 1:
                    return c.fn.call(c.context), !0;
                  case 2:
                    return c.fn.call(c.context, e), !0;
                  case 3:
                    return c.fn.call(c.context, e, r), !0;
                  case 4:
                    return c.fn.call(c.context, e, r, i), !0;
                  case 5:
                    return c.fn.call(c.context, e, r, i, s), !0;
                  case 6:
                    return c.fn.call(c.context, e, r, i, s, o), !0;
                }
                for (u = 1, a = new Array(h - 1); u < h; u++)
                  a[u - 1] = arguments[u];
                c.fn.apply(c.context, a);
              } else {
                var f,
                  d = c.length;
                for (u = 0; u < d; u++)
                  switch (
                    (c[u].once && this.removeListener(t, c[u].fn, void 0, !0),
                    h)
                  ) {
                    case 1:
                      c[u].fn.call(c[u].context);
                      break;
                    case 2:
                      c[u].fn.call(c[u].context, e);
                      break;
                    case 3:
                      c[u].fn.call(c[u].context, e, r);
                      break;
                    case 4:
                      c[u].fn.call(c[u].context, e, r, i);
                      break;
                    default:
                      if (!a)
                        for (f = 1, a = new Array(h - 1); f < h; f++)
                          a[f - 1] = arguments[f];
                      c[u].fn.apply(c[u].context, a);
                  }
              }
              return !0;
            }),
            (l.prototype.on = function (t, e, n) {
              return s(this, t, e, n, !1);
            }),
            (l.prototype.once = function (t, e, n) {
              return s(this, t, e, n, !0);
            }),
            (l.prototype.removeListener = function (t, e, r, i) {
              var s = n ? n + t : t;
              if (!this._events[s]) return this;
              if (!e) return o(this, s), this;
              var l = this._events[s];
              if (l.fn)
                l.fn !== e ||
                  (i && !l.once) ||
                  (r && l.context !== r) ||
                  o(this, s);
              else {
                for (var a = 0, u = [], c = l.length; a < c; a++)
                  (l[a].fn !== e ||
                    (i && !l[a].once) ||
                    (r && l[a].context !== r)) &&
                    u.push(l[a]);
                u.length
                  ? (this._events[s] = 1 === u.length ? u[0] : u)
                  : o(this, s);
              }
              return this;
            }),
            (l.prototype.removeAllListeners = function (t) {
              var e;
              return (
                t
                  ? ((e = n ? n + t : t), this._events[e] && o(this, e))
                  : ((this._events = new r()), (this._eventsCount = 0)),
                this
              );
            }),
            (l.prototype.off = l.prototype.removeListener),
            (l.prototype.addListener = l.prototype.on),
            (l.prefixed = n),
            (l.EventEmitter = l),
            (t.exports = l);
        },
        4649: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return l;
            },
          });
          var r = n(8804),
            i = function (t, e) {
              for (var n = t.length; n--; ) if ((0, r.Z)(t[n][0], e)) return n;
              return -1;
            },
            s = Array.prototype.splice;
          function o(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          (o.prototype.clear = function () {
            (this.__data__ = []), (this.size = 0);
          }),
            (o.prototype.delete = function (t) {
              var e = this.__data__,
                n = i(e, t);
              return !(
                n < 0 ||
                (n == e.length - 1 ? e.pop() : s.call(e, n, 1), --this.size, 0)
              );
            }),
            (o.prototype.get = function (t) {
              var e = this.__data__,
                n = i(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (o.prototype.has = function (t) {
              return i(this.__data__, t) > -1;
            }),
            (o.prototype.set = function (t, e) {
              var n = this.__data__,
                r = i(n, t);
              return (
                r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
              );
            });
          var l = o;
        },
        8896: function (t, e, n) {
          "use strict";
          var r = n(5546),
            i = n(3221),
            s = (0, r.Z)(i.Z, "Map");
          e.Z = s;
        },
        3703: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return f;
            },
          });
          var r = (0, n(5546).Z)(Object, "create"),
            i = Object.prototype.hasOwnProperty,
            s = Object.prototype.hasOwnProperty;
          function o(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          (o.prototype.clear = function () {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
          }),
            (o.prototype.delete = function (t) {
              var e = this.has(t) && delete this.__data__[t];
              return (this.size -= e ? 1 : 0), e;
            }),
            (o.prototype.get = function (t) {
              var e = this.__data__;
              if (r) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
              }
              return i.call(e, t) ? e[t] : void 0;
            }),
            (o.prototype.has = function (t) {
              var e = this.__data__;
              return r ? void 0 !== e[t] : s.call(e, t);
            }),
            (o.prototype.set = function (t, e) {
              var n = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
                this
              );
            });
          var l = o,
            a = n(4649),
            u = n(8896),
            c = function (t, e) {
              var n,
                r,
                i = t.__data__;
              return (
                "string" == (r = typeof (n = e)) ||
                "number" == r ||
                "symbol" == r ||
                "boolean" == r
                  ? "__proto__" !== n
                  : null === n
              )
                ? i["string" == typeof e ? "string" : "hash"]
                : i.map;
            };
          function h(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          (h.prototype.clear = function () {
            (this.size = 0),
              (this.__data__ = {
                hash: new l(),
                map: new (u.Z || a.Z)(),
                string: new l(),
              });
          }),
            (h.prototype.delete = function (t) {
              var e = c(this, t).delete(t);
              return (this.size -= e ? 1 : 0), e;
            }),
            (h.prototype.get = function (t) {
              return c(this, t).get(t);
            }),
            (h.prototype.has = function (t) {
              return c(this, t).has(t);
            }),
            (h.prototype.set = function (t, e) {
              var n = c(this, t),
                r = n.size;
              return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
            });
          var f = h;
        },
        6218: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return l;
            },
          });
          var r = n(4649),
            i = n(8896),
            s = n(3703);
          function o(t) {
            var e = (this.__data__ = new r.Z(t));
            this.size = e.size;
          }
          (o.prototype.clear = function () {
            (this.__data__ = new r.Z()), (this.size = 0);
          }),
            (o.prototype.delete = function (t) {
              var e = this.__data__,
                n = e.delete(t);
              return (this.size = e.size), n;
            }),
            (o.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (o.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (o.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof r.Z) {
                var o = n.__data__;
                if (!i.Z || o.length < 199)
                  return o.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new s.Z(o);
              }
              return n.set(t, e), (this.size = n.size), this;
            });
          var l = o;
        },
        187: function (t, e, n) {
          "use strict";
          var r = n(3221).Z.Symbol;
          e.Z = r;
        },
        8282: function (t, e, n) {
          "use strict";
          var r = n(3221).Z.Uint8Array;
          e.Z = r;
        },
        848: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return u;
            },
          });
          var r = n(4248),
            i = n(7885),
            s = n(4975),
            o = n(6401),
            l = n(8127),
            a = Object.prototype.hasOwnProperty,
            u = function (t, e) {
              var n = (0, i.Z)(t),
                u = !n && (0, r.Z)(t),
                c = !n && !u && (0, s.Z)(t),
                h = !n && !u && !c && (0, l.Z)(t),
                f = n || u || c || h,
                d = f
                  ? (function (t, e) {
                      for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                      return r;
                    })(t.length, String)
                  : [],
                p = d.length;
              for (var g in t)
                (!e && !a.call(t, g)) ||
                  (f &&
                    ("length" == g ||
                      (c && ("offset" == g || "parent" == g)) ||
                      (h &&
                        ("buffer" == g ||
                          "byteLength" == g ||
                          "byteOffset" == g)) ||
                      (0, o.Z)(g, p))) ||
                  d.push(g);
              return d;
            };
        },
        5810: function (t, e) {
          "use strict";
          e.Z = function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; )
              t[i + n] = e[n];
            return t;
          };
        },
        6299: function (t, e, n) {
          "use strict";
          var r = n(905),
            i = n(8804),
            s = Object.prototype.hasOwnProperty;
          e.Z = function (t, e, n) {
            var o = t[e];
            (s.call(t, e) && (0, i.Z)(o, n) && (void 0 !== n || e in t)) ||
              (0, r.Z)(t, e, n);
          };
        },
        905: function (t, e, n) {
          "use strict";
          var r = n(5088);
          e.Z = function (t, e, n) {
            "__proto__" == e && r.Z
              ? (0, r.Z)(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0,
                })
              : (t[e] = n);
          };
        },
        2938: function (t, e, n) {
          "use strict";
          var r = n(5810),
            i = n(7885);
          e.Z = function (t, e, n) {
            var s = e(t);
            return (0, i.Z)(t) ? s : (0, r.Z)(s, n(t));
          };
        },
        9001: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return c;
            },
          });
          var r = n(187),
            i = Object.prototype,
            s = i.hasOwnProperty,
            o = i.toString,
            l = r.Z ? r.Z.toStringTag : void 0,
            a = Object.prototype.toString,
            u = r.Z ? r.Z.toStringTag : void 0,
            c = function (t) {
              return null == t
                ? void 0 === t
                  ? "[object Undefined]"
                  : "[object Null]"
                : u && u in Object(t)
                ? (function (t) {
                    var e = s.call(t, l),
                      n = t[l];
                    try {
                      t[l] = void 0;
                      var r = !0;
                    } catch (t) {}
                    var i = o.call(t);
                    return r && (e ? (t[l] = n) : delete t[l]), i;
                  })(t)
                : (function (t) {
                    return a.call(t);
                  })(t);
            };
        },
        3225: function (t, e) {
          "use strict";
          e.Z = function (t) {
            return function (e) {
              return t(e);
            };
          };
        },
        6181: function (t, e, n) {
          "use strict";
          var r = n(8282);
          e.Z = function (t) {
            var e = new t.constructor(t.byteLength);
            return new r.Z(e).set(new r.Z(t)), e;
          };
        },
        5056: function (t, e, n) {
          "use strict";
          var r = n(3221),
            i =
              "object" == typeof exports &&
              exports &&
              !exports.nodeType &&
              exports,
            s =
              i &&
              "object" == typeof module &&
              module &&
              !module.nodeType &&
              module,
            o = s && s.exports === i ? r.Z.Buffer : void 0,
            l = o ? o.allocUnsafe : void 0;
          e.Z = function (t, e) {
            if (e) return t.slice();
            var n = t.length,
              r = l ? l(n) : new t.constructor(n);
            return t.copy(r), r;
          };
        },
        6735: function (t, e, n) {
          "use strict";
          var r = n(6181);
          e.Z = function (t, e) {
            var n = e ? (0, r.Z)(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length);
          };
        },
        1162: function (t, e) {
          "use strict";
          e.Z = function (t, e) {
            var n = -1,
              r = t.length;
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
            return e;
          };
        },
        2436: function (t, e, n) {
          "use strict";
          var r = n(6299),
            i = n(905);
          e.Z = function (t, e, n, s) {
            var o = !n;
            n || (n = {});
            for (var l = -1, a = e.length; ++l < a; ) {
              var u = e[l],
                c = s ? s(n[u], t[u], u, n, t) : void 0;
              void 0 === c && (c = t[u]),
                o ? (0, i.Z)(n, u, c) : (0, r.Z)(n, u, c);
            }
            return n;
          };
        },
        5088: function (t, e, n) {
          "use strict";
          var r = n(5546),
            i = (function () {
              try {
                var t = (0, r.Z)(Object, "defineProperty");
                return t({}, "", {}), t;
              } catch (t) {}
            })();
          e.Z = i;
        },
        2168: function (t, e) {
          "use strict";
          var n =
            "object" == typeof global &&
            global &&
            global.Object === Object &&
            global;
          e.Z = n;
        },
        7245: function (t, e, n) {
          "use strict";
          var r = n(2938),
            i = n(6808),
            s = n(298);
          e.Z = function (t) {
            return (0, r.Z)(t, s.Z, i.Z);
          };
        },
        5546: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return m;
            },
          });
          var r,
            i = n(8936),
            s = n(3221).Z["__core-js_shared__"],
            o = (r = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + r
              : "",
            l = n(3122),
            a = n(6682),
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            h = Object.prototype,
            f = c.toString,
            d = h.hasOwnProperty,
            p = RegExp(
              "^" +
                f
                  .call(d)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            g = function (t) {
              return (
                !(!(0, l.Z)(t) || ((e = t), o && o in e)) &&
                ((0, i.Z)(t) ? p : u).test((0, a.Z)(t))
              );
              var e;
            },
            m = function (t, e) {
              var n = (function (t, e) {
                return null == t ? void 0 : t[e];
              })(t, e);
              return g(n) ? n : void 0;
            };
        },
        9552: function (t, e, n) {
          "use strict";
          var r = (0, n(6048).Z)(Object.getPrototypeOf, Object);
          e.Z = r;
        },
        6808: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return o;
            },
          });
          var r = n(813),
            i = Object.prototype.propertyIsEnumerable,
            s = Object.getOwnPropertySymbols,
            o = s
              ? function (t) {
                  return null == t
                    ? []
                    : ((t = Object(t)),
                      (function (t, e) {
                        for (
                          var n = -1,
                            r = null == t ? 0 : t.length,
                            i = 0,
                            s = [];
                          ++n < r;

                        ) {
                          var o = t[n];
                          e(o, n, t) && (s[i++] = o);
                        }
                        return s;
                      })(s(t), function (e) {
                        return i.call(t, e);
                      }));
                }
              : r.Z;
        },
        8649: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return N;
            },
          });
          var r = n(5546),
            i = n(3221),
            s = (0, r.Z)(i.Z, "DataView"),
            o = n(8896),
            l = (0, r.Z)(i.Z, "Promise"),
            a = (0, r.Z)(i.Z, "Set"),
            u = (0, r.Z)(i.Z, "WeakMap"),
            c = n(9001),
            h = n(6682),
            f = "[object Map]",
            d = "[object Promise]",
            p = "[object Set]",
            g = "[object WeakMap]",
            m = "[object DataView]",
            v = (0, h.Z)(s),
            b = (0, h.Z)(o.Z),
            y = (0, h.Z)(l),
            _ = (0, h.Z)(a),
            x = (0, h.Z)(u),
            w = c.Z;
          ((s && w(new s(new ArrayBuffer(1))) != m) ||
            (o.Z && w(new o.Z()) != f) ||
            (l && w(l.resolve()) != d) ||
            (a && w(new a()) != p) ||
            (u && w(new u()) != g)) &&
            (w = function (t) {
              var e = (0, c.Z)(t),
                n = "[object Object]" == e ? t.constructor : void 0,
                r = n ? (0, h.Z)(n) : "";
              if (r)
                switch (r) {
                  case v:
                    return m;
                  case b:
                    return f;
                  case y:
                    return d;
                  case _:
                    return p;
                  case x:
                    return g;
                }
              return e;
            });
          var N = w;
        },
        2588: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return a;
            },
          });
          var r = n(3122),
            i = Object.create,
            s = (function () {
              function t() {}
              return function (e) {
                if (!(0, r.Z)(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t();
                return (t.prototype = void 0), n;
              };
            })(),
            o = n(9552),
            l = n(5441),
            a = function (t) {
              return "function" != typeof t.constructor || (0, l.Z)(t)
                ? {}
                : s((0, o.Z)(t));
            };
        },
        6401: function (t, e) {
          "use strict";
          var n = /^(?:0|[1-9]\d*)$/;
          e.Z = function (t, e) {
            var r = typeof t;
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ("number" == r || ("symbol" != r && n.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          };
        },
        5441: function (t, e) {
          "use strict";
          var n = Object.prototype;
          e.Z = function (t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || n);
          };
        },
        7755: function (t, e, n) {
          "use strict";
          var r = n(2168),
            i =
              "object" == typeof exports &&
              exports &&
              !exports.nodeType &&
              exports,
            s =
              i &&
              "object" == typeof module &&
              module &&
              !module.nodeType &&
              module,
            o = s && s.exports === i && r.Z.process,
            l = (function () {
              try {
                return (
                  (s && s.require && s.require("util").types) ||
                  (o && o.binding && o.binding("util"))
                );
              } catch (t) {}
            })();
          e.Z = l;
        },
        6048: function (t, e) {
          "use strict";
          e.Z = function (t, e) {
            return function (n) {
              return t(e(n));
            };
          };
        },
        3221: function (t, e, n) {
          "use strict";
          var r = n(2168),
            i =
              "object" == typeof self && self && self.Object === Object && self,
            s = r.Z || i || Function("return this")();
          e.Z = s;
        },
        6682: function (t, e) {
          "use strict";
          var n = Function.prototype.toString;
          e.Z = function (t) {
            if (null != t) {
              try {
                return n.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          };
        },
        1061: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return F;
            },
          });
          var r = n(6218),
            i = n(6299),
            s = n(2436),
            o = n(298),
            l = n(7477),
            a = n(5056),
            u = n(1162),
            c = n(6808),
            h = n(5810),
            f = n(9552),
            d = n(813),
            p = Object.getOwnPropertySymbols
              ? function (t) {
                  for (var e = []; t; )
                    (0, h.Z)(e, (0, c.Z)(t)), (t = (0, f.Z)(t));
                  return e;
                }
              : d.Z,
            g = n(7245),
            m = n(2938),
            v = function (t) {
              return (0, m.Z)(t, l.Z, p);
            },
            b = n(8649),
            y = Object.prototype.hasOwnProperty,
            _ = n(6181),
            x = /\w*$/,
            w = n(187),
            N = w.Z ? w.Z.prototype : void 0,
            E = N ? N.valueOf : void 0,
            A = n(6735),
            k = function (t, e, n) {
              var r,
                i,
                s,
                o = t.constructor;
              switch (e) {
                case "[object ArrayBuffer]":
                  return (0, _.Z)(t);
                case "[object Boolean]":
                case "[object Date]":
                  return new o(+t);
                case "[object DataView]":
                  return (function (t, e) {
                    var n = e ? (0, _.Z)(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.byteLength);
                  })(t, n);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                  return (0, A.Z)(t, n);
                case "[object Map]":
                case "[object Set]":
                  return new o();
                case "[object Number]":
                case "[object String]":
                  return new o(t);
                case "[object RegExp]":
                  return (
                    ((s = new (i = t).constructor(
                      i.source,
                      x.exec(i)
                    )).lastIndex = i.lastIndex),
                    s
                  );
                case "[object Symbol]":
                  return (r = t), E ? Object(E.call(r)) : {};
              }
            },
            q = n(2588),
            Z = n(7885),
            S = n(4975),
            L = n(3391),
            O = n(3225),
            T = n(7755),
            j = T.Z && T.Z.isMap,
            C = j
              ? (0, O.Z)(j)
              : function (t) {
                  return (0, L.Z)(t) && "[object Map]" == (0, b.Z)(t);
                },
            R = n(3122),
            I = T.Z && T.Z.isSet,
            P = I
              ? (0, O.Z)(I)
              : function (t) {
                  return (0, L.Z)(t) && "[object Set]" == (0, b.Z)(t);
                },
            B = "[object Arguments]",
            M = "[object Function]",
            U = "[object Object]",
            D = {};
          (D[B] =
            D["[object Array]"] =
            D["[object ArrayBuffer]"] =
            D["[object DataView]"] =
            D["[object Boolean]"] =
            D["[object Date]"] =
            D["[object Float32Array]"] =
            D["[object Float64Array]"] =
            D["[object Int8Array]"] =
            D["[object Int16Array]"] =
            D["[object Int32Array]"] =
            D["[object Map]"] =
            D["[object Number]"] =
            D[U] =
            D["[object RegExp]"] =
            D["[object Set]"] =
            D["[object String]"] =
            D["[object Symbol]"] =
            D["[object Uint8Array]"] =
            D["[object Uint8ClampedArray]"] =
            D["[object Uint16Array]"] =
            D["[object Uint32Array]"] =
              !0),
            (D["[object Error]"] = D[M] = D["[object WeakMap]"] = !1);
          var z = function t(e, n, h, f, d, m) {
              var _,
                x = 1 & n,
                w = 2 & n,
                N = 4 & n;
              if ((h && (_ = d ? h(e, f, d, m) : h(e)), void 0 !== _)) return _;
              if (!(0, R.Z)(e)) return e;
              var E = (0, Z.Z)(e);
              if (E) {
                if (
                  ((_ = (function (t) {
                    var e = t.length,
                      n = new t.constructor(e);
                    return (
                      e &&
                        "string" == typeof t[0] &&
                        y.call(t, "index") &&
                        ((n.index = t.index), (n.input = t.input)),
                      n
                    );
                  })(e)),
                  !x)
                )
                  return (0, u.Z)(e, _);
              } else {
                var A = (0, b.Z)(e),
                  L = A == M || "[object GeneratorFunction]" == A;
                if ((0, S.Z)(e)) return (0, a.Z)(e, x);
                if (A == U || A == B || (L && !d)) {
                  if (((_ = w || L ? {} : (0, q.Z)(e)), !x))
                    return w
                      ? (function (t, e) {
                          return (0, s.Z)(t, p(t), e);
                        })(
                          e,
                          (function (t, e) {
                            return t && (0, s.Z)(e, (0, l.Z)(e), t);
                          })(_, e)
                        )
                      : (function (t, e) {
                          return (0, s.Z)(t, (0, c.Z)(t), e);
                        })(
                          e,
                          (function (t, e) {
                            return t && (0, s.Z)(e, (0, o.Z)(e), t);
                          })(_, e)
                        );
                } else {
                  if (!D[A]) return d ? e : {};
                  _ = k(e, A, x);
                }
              }
              m || (m = new r.Z());
              var O = m.get(e);
              if (O) return O;
              m.set(e, _),
                P(e)
                  ? e.forEach(function (r) {
                      _.add(t(r, n, h, r, e, m));
                    })
                  : C(e) &&
                    e.forEach(function (r, i) {
                      _.set(i, t(r, n, h, i, e, m));
                    });
              var T = N ? (w ? v : g.Z) : w ? l.Z : o.Z,
                j = E ? void 0 : T(e);
              return (
                (function (t, e) {
                  for (
                    var n = -1, r = null == t ? 0 : t.length;
                    ++n < r && !1 !== e(t[n], n, t);

                  );
                })(j || e, function (r, s) {
                  j && (r = e[(s = r)]), (0, i.Z)(_, s, t(r, n, h, s, e, m));
                }),
                _
              );
            },
            F = function (t) {
              return z(t, 5);
            };
        },
        8804: function (t, e) {
          "use strict";
          e.Z = function (t, e) {
            return t === e || (t != t && e != e);
          };
        },
        4248: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return c;
            },
          });
          var r = n(9001),
            i = n(3391),
            s = function (t) {
              return (0, i.Z)(t) && "[object Arguments]" == (0, r.Z)(t);
            },
            o = Object.prototype,
            l = o.hasOwnProperty,
            a = o.propertyIsEnumerable,
            u = s(
              (function () {
                return arguments;
              })()
            )
              ? s
              : function (t) {
                  return (
                    (0, i.Z)(t) && l.call(t, "callee") && !a.call(t, "callee")
                  );
                },
            c = u;
        },
        7885: function (t, e) {
          "use strict";
          var n = Array.isArray;
          e.Z = n;
        },
        3282: function (t, e, n) {
          "use strict";
          var r = n(8936),
            i = n(1164);
          e.Z = function (t) {
            return null != t && (0, i.Z)(t.length) && !(0, r.Z)(t);
          };
        },
        4975: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return l;
            },
          });
          var r = n(3221),
            i =
              "object" == typeof exports &&
              exports &&
              !exports.nodeType &&
              exports,
            s =
              i &&
              "object" == typeof module &&
              module &&
              !module.nodeType &&
              module,
            o = s && s.exports === i ? r.Z.Buffer : void 0,
            l =
              (o ? o.isBuffer : void 0) ||
              function () {
                return !1;
              };
        },
        8489: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return S;
            },
          });
          var r = n(6218),
            i = n(3703);
          function s(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.__data__ = new i.Z(); ++e < n; ) this.add(t[e]);
          }
          (s.prototype.add = s.prototype.push =
            function (t) {
              return this.__data__.set(t, "__lodash_hash_undefined__"), this;
            }),
            (s.prototype.has = function (t) {
              return this.__data__.has(t);
            });
          var o = s,
            l = function (t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t)) return !0;
              return !1;
            },
            a = function (t, e, n, r, i, s) {
              var a = 1 & n,
                u = t.length,
                c = e.length;
              if (u != c && !(a && c > u)) return !1;
              var h = s.get(t),
                f = s.get(e);
              if (h && f) return h == e && f == t;
              var d = -1,
                p = !0,
                g = 2 & n ? new o() : void 0;
              for (s.set(t, e), s.set(e, t); ++d < u; ) {
                var m = t[d],
                  v = e[d];
                if (r) var b = a ? r(v, m, d, e, t, s) : r(m, v, d, t, e, s);
                if (void 0 !== b) {
                  if (b) continue;
                  p = !1;
                  break;
                }
                if (g) {
                  if (
                    !l(e, function (t, e) {
                      if (((o = e), !g.has(o) && (m === t || i(m, t, n, r, s))))
                        return g.push(e);
                      var o;
                    })
                  ) {
                    p = !1;
                    break;
                  }
                } else if (m !== v && !i(m, v, n, r, s)) {
                  p = !1;
                  break;
                }
              }
              return s.delete(t), s.delete(e), p;
            },
            u = n(187),
            c = n(8282),
            h = n(8804),
            f = function (t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, r) {
                  n[++e] = [r, t];
                }),
                n
              );
            },
            d = function (t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            },
            p = u.Z ? u.Z.prototype : void 0,
            g = p ? p.valueOf : void 0,
            m = n(7245),
            v = Object.prototype.hasOwnProperty,
            b = n(8649),
            y = n(7885),
            _ = n(4975),
            x = n(8127),
            w = "[object Arguments]",
            N = "[object Array]",
            E = "[object Object]",
            A = Object.prototype.hasOwnProperty,
            k = function (t, e, n, i, s, o) {
              var l = (0, y.Z)(t),
                u = (0, y.Z)(e),
                p = l ? N : (0, b.Z)(t),
                k = u ? N : (0, b.Z)(e),
                q = (p = p == w ? E : p) == E,
                Z = (k = k == w ? E : k) == E,
                S = p == k;
              if (S && (0, _.Z)(t)) {
                if (!(0, _.Z)(e)) return !1;
                (l = !0), (q = !1);
              }
              if (S && !q)
                return (
                  o || (o = new r.Z()),
                  l || (0, x.Z)(t)
                    ? a(t, e, n, i, s, o)
                    : (function (t, e, n, r, i, s, o) {
                        switch (n) {
                          case "[object DataView]":
                            if (
                              t.byteLength != e.byteLength ||
                              t.byteOffset != e.byteOffset
                            )
                              return !1;
                            (t = t.buffer), (e = e.buffer);
                          case "[object ArrayBuffer]":
                            return !(
                              t.byteLength != e.byteLength ||
                              !s(new c.Z(t), new c.Z(e))
                            );
                          case "[object Boolean]":
                          case "[object Date]":
                          case "[object Number]":
                            return (0, h.Z)(+t, +e);
                          case "[object Error]":
                            return t.name == e.name && t.message == e.message;
                          case "[object RegExp]":
                          case "[object String]":
                            return t == e + "";
                          case "[object Map]":
                            var l = f;
                          case "[object Set]":
                            var u = 1 & r;
                            if ((l || (l = d), t.size != e.size && !u))
                              return !1;
                            var p = o.get(t);
                            if (p) return p == e;
                            (r |= 2), o.set(t, e);
                            var m = a(l(t), l(e), r, i, s, o);
                            return o.delete(t), m;
                          case "[object Symbol]":
                            if (g) return g.call(t) == g.call(e);
                        }
                        return !1;
                      })(t, e, p, n, i, s, o)
                );
              if (!(1 & n)) {
                var L = q && A.call(t, "__wrapped__"),
                  O = Z && A.call(e, "__wrapped__");
                if (L || O) {
                  var T = L ? t.value() : t,
                    j = O ? e.value() : e;
                  return o || (o = new r.Z()), s(T, j, n, i, o);
                }
              }
              return (
                !!S &&
                (o || (o = new r.Z()),
                (function (t, e, n, r, i, s) {
                  var o = 1 & n,
                    l = (0, m.Z)(t),
                    a = l.length;
                  if (a != (0, m.Z)(e).length && !o) return !1;
                  for (var u = a; u--; ) {
                    var c = l[u];
                    if (!(o ? c in e : v.call(e, c))) return !1;
                  }
                  var h = s.get(t),
                    f = s.get(e);
                  if (h && f) return h == e && f == t;
                  var d = !0;
                  s.set(t, e), s.set(e, t);
                  for (var p = o; ++u < a; ) {
                    var g = t[(c = l[u])],
                      b = e[c];
                    if (r)
                      var y = o ? r(b, g, c, e, t, s) : r(g, b, c, t, e, s);
                    if (!(void 0 === y ? g === b || i(g, b, n, r, s) : y)) {
                      d = !1;
                      break;
                    }
                    p || (p = "constructor" == c);
                  }
                  if (d && !p) {
                    var _ = t.constructor,
                      x = e.constructor;
                    _ == x ||
                      !("constructor" in t) ||
                      !("constructor" in e) ||
                      ("function" == typeof _ &&
                        _ instanceof _ &&
                        "function" == typeof x &&
                        x instanceof x) ||
                      (d = !1);
                  }
                  return s.delete(t), s.delete(e), d;
                })(t, e, n, i, s, o))
              );
            },
            q = n(3391),
            Z = function t(e, n, r, i, s) {
              return (
                e === n ||
                (null == e || null == n || (!(0, q.Z)(e) && !(0, q.Z)(n))
                  ? e != e && n != n
                  : k(e, n, r, i, t, s))
              );
            },
            S = function (t, e) {
              return Z(t, e);
            };
        },
        8936: function (t, e, n) {
          "use strict";
          var r = n(9001),
            i = n(3122);
          e.Z = function (t) {
            if (!(0, i.Z)(t)) return !1;
            var e = (0, r.Z)(t);
            return (
              "[object Function]" == e ||
              "[object GeneratorFunction]" == e ||
              "[object AsyncFunction]" == e ||
              "[object Proxy]" == e
            );
          };
        },
        1164: function (t, e) {
          "use strict";
          e.Z = function (t) {
            return (
              "number" == typeof t &&
              t > -1 &&
              t % 1 == 0 &&
              t <= 9007199254740991
            );
          };
        },
        3122: function (t, e) {
          "use strict";
          e.Z = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          };
        },
        3391: function (t, e) {
          "use strict";
          e.Z = function (t) {
            return null != t && "object" == typeof t;
          };
        },
        8127: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return c;
            },
          });
          var r = n(9001),
            i = n(1164),
            s = n(3391),
            o = {};
          (o["[object Float32Array]"] =
            o["[object Float64Array]"] =
            o["[object Int8Array]"] =
            o["[object Int16Array]"] =
            o["[object Int32Array]"] =
            o["[object Uint8Array]"] =
            o["[object Uint8ClampedArray]"] =
            o["[object Uint16Array]"] =
            o["[object Uint32Array]"] =
              !0),
            (o["[object Arguments]"] =
              o["[object Array]"] =
              o["[object ArrayBuffer]"] =
              o["[object Boolean]"] =
              o["[object DataView]"] =
              o["[object Date]"] =
              o["[object Error]"] =
              o["[object Function]"] =
              o["[object Map]"] =
              o["[object Number]"] =
              o["[object Object]"] =
              o["[object RegExp]"] =
              o["[object Set]"] =
              o["[object String]"] =
              o["[object WeakMap]"] =
                !1);
          var l = n(3225),
            a = n(7755),
            u = a.Z && a.Z.isTypedArray,
            c = u
              ? (0, l.Z)(u)
              : function (t) {
                  return (0, s.Z)(t) && (0, i.Z)(t.length) && !!o[(0, r.Z)(t)];
                };
        },
        298: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return a;
            },
          });
          var r = n(848),
            i = n(5441),
            s = (0, n(6048).Z)(Object.keys, Object),
            o = Object.prototype.hasOwnProperty,
            l = n(3282),
            a = function (t) {
              return (0, l.Z)(t)
                ? (0, r.Z)(t)
                : (function (t) {
                    if (!(0, i.Z)(t)) return s(t);
                    var e = [];
                    for (var n in Object(t))
                      o.call(t, n) && "constructor" != n && e.push(n);
                    return e;
                  })(t);
            };
        },
        7477: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return u;
            },
          });
          var r = n(848),
            i = n(3122),
            s = n(5441),
            o = Object.prototype.hasOwnProperty,
            l = function (t) {
              if (!(0, i.Z)(t))
                return (function (t) {
                  var e = [];
                  if (null != t) for (var n in Object(t)) e.push(n);
                  return e;
                })(t);
              var e = (0, s.Z)(t),
                n = [];
              for (var r in t)
                ("constructor" != r || (!e && o.call(t, r))) && n.push(r);
              return n;
            },
            a = n(3282),
            u = function (t) {
              return (0, a.Z)(t) ? (0, r.Z)(t, !0) : l(t);
            };
        },
        9534: function (t, e, n) {
          "use strict";
          n.d(e, {
            Z: function () {
              return $;
            },
          });
          var r,
            i,
            s,
            o,
            l = n(6218),
            a = n(905),
            u = n(8804),
            c = function (t, e, n) {
              ((void 0 !== n && !(0, u.Z)(t[e], n)) ||
                (void 0 === n && !(e in t))) &&
                (0, a.Z)(t, e, n);
            },
            h = function (t, e, n) {
              for (var r = -1, i = Object(t), s = n(t), o = s.length; o--; ) {
                var l = s[++r];
                if (!1 === e(i[l], l, i)) break;
              }
              return t;
            },
            f = n(5056),
            d = n(6735),
            p = n(1162),
            g = n(2588),
            m = n(4248),
            v = n(7885),
            b = n(3282),
            y = n(3391),
            _ = n(4975),
            x = n(8936),
            w = n(3122),
            N = n(9001),
            E = n(9552),
            A = Function.prototype,
            k = Object.prototype,
            q = A.toString,
            Z = k.hasOwnProperty,
            S = q.call(Object),
            L = n(8127),
            O = function (t, e) {
              if (
                ("constructor" !== e || "function" != typeof t[e]) &&
                "__proto__" != e
              )
                return t[e];
            },
            T = n(2436),
            j = n(7477),
            C = function (t, e, n, r, i, s, o) {
              var l,
                a = O(t, n),
                u = O(e, n),
                h = o.get(u);
              if (h) c(t, n, h);
              else {
                var A = s ? s(a, u, n + "", t, e, o) : void 0,
                  k = void 0 === A;
                if (k) {
                  var C = (0, v.Z)(u),
                    R = !C && (0, _.Z)(u),
                    I = !C && !R && (0, L.Z)(u);
                  (A = u),
                    C || R || I
                      ? (0, v.Z)(a)
                        ? (A = a)
                        : ((l = a),
                          (0, y.Z)(l) && (0, b.Z)(l)
                            ? (A = (0, p.Z)(a))
                            : R
                            ? ((k = !1), (A = (0, f.Z)(u, !0)))
                            : I
                            ? ((k = !1), (A = (0, d.Z)(u, !0)))
                            : (A = []))
                      : (function (t) {
                          if (!(0, y.Z)(t) || "[object Object]" != (0, N.Z)(t))
                            return !1;
                          var e = (0, E.Z)(t);
                          if (null === e) return !0;
                          var n = Z.call(e, "constructor") && e.constructor;
                          return (
                            "function" == typeof n &&
                            n instanceof n &&
                            q.call(n) == S
                          );
                        })(u) || (0, m.Z)(u)
                      ? ((A = a),
                        (0, m.Z)(a)
                          ? (A = (function (t) {
                              return (0, T.Z)(t, (0, j.Z)(t));
                            })(a))
                          : ((0, w.Z)(a) && !(0, x.Z)(a)) || (A = (0, g.Z)(u)))
                      : (k = !1);
                }
                k && (o.set(u, A), i(A, u, r, s, o), o.delete(u)), c(t, n, A);
              }
            },
            R = function t(e, n, r, i, s) {
              e !== n &&
                h(
                  n,
                  function (o, a) {
                    if ((s || (s = new l.Z()), (0, w.Z)(o)))
                      C(e, n, a, r, t, i, s);
                    else {
                      var u = i ? i(O(e, a), o, a + "", e, n, s) : void 0;
                      void 0 === u && (u = o), c(e, a, u);
                    }
                  },
                  j.Z
                );
            },
            I = function (t) {
              return t;
            },
            P = Math.max,
            B = n(5088),
            M = B.Z
              ? function (t, e) {
                  return (0, B.Z)(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value:
                      ((n = e),
                      function () {
                        return n;
                      }),
                    writable: !0,
                  });
                  var n;
                }
              : I,
            U = Date.now,
            D =
              ((r = M),
              (i = 0),
              (s = 0),
              function () {
                var t = U(),
                  e = 16 - (t - s);
                if (((s = t), e > 0)) {
                  if (++i >= 800) return arguments[0];
                } else i = 0;
                return r.apply(void 0, arguments);
              }),
            z = function (t, e) {
              return D(
                (function (t, e, n) {
                  return (
                    (e = P(void 0 === e ? t.length - 1 : e, 0)),
                    function () {
                      for (
                        var r = arguments,
                          i = -1,
                          s = P(r.length - e, 0),
                          o = Array(s);
                        ++i < s;

                      )
                        o[i] = r[e + i];
                      i = -1;
                      for (var l = Array(e + 1); ++i < e; ) l[i] = r[i];
                      return (
                        (l[e] = n(o)),
                        (function (t, e, n) {
                          switch (n.length) {
                            case 0:
                              return t.call(e);
                            case 1:
                              return t.call(e, n[0]);
                            case 2:
                              return t.call(e, n[0], n[1]);
                            case 3:
                              return t.call(e, n[0], n[1], n[2]);
                          }
                          return t.apply(e, n);
                        })(t, this, l)
                      );
                    }
                  );
                })(t, e, I),
                t + ""
              );
            },
            F = n(6401),
            $ =
              ((o = function (t, e, n) {
                R(t, e, n);
              }),
              z(function (t, e) {
                var n = -1,
                  r = e.length,
                  i = r > 1 ? e[r - 1] : void 0,
                  s = r > 2 ? e[2] : void 0;
                for (
                  i =
                    o.length > 3 && "function" == typeof i ? (r--, i) : void 0,
                    s &&
                      (function (t, e, n) {
                        if (!(0, w.Z)(n)) return !1;
                        var r = typeof e;
                        return (
                          !!("number" == r
                            ? (0, b.Z)(n) && (0, F.Z)(e, n.length)
                            : "string" == r && (e in n)) && (0, u.Z)(n[e], t)
                        );
                      })(e[0], e[1], s) &&
                      ((i = r < 3 ? void 0 : i), (r = 1)),
                    t = Object(t);
                  ++n < r;

                ) {
                  var l = e[n];
                  l && o(t, l, n);
                }
                return t;
              }));
        },
        813: function (t, e) {
          "use strict";
          e.Z = function () {
            return [];
          };
        },
        8473: function (t, e, n) {
          "use strict";
          n.r(e),
            n.d(e, {
              Attributor: function () {
                return i;
              },
              AttributorStore: function () {
                return f;
              },
              BlockBlot: function () {
                return E;
              },
              ClassAttributor: function () {
                return u;
              },
              ContainerBlot: function () {
                return k;
              },
              EmbedBlot: function () {
                return q;
              },
              InlineBlot: function () {
                return w;
              },
              LeafBlot: function () {
                return m;
              },
              ParentBlot: function () {
                return _;
              },
              Registry: function () {
                return l;
              },
              Scope: function () {
                return r;
              },
              ScrollBlot: function () {
                return L;
              },
              StyleAttributor: function () {
                return h;
              },
              TextBlot: function () {
                return T;
              },
            });
          var r = ((t) => (
            (t[(t.TYPE = 3)] = "TYPE"),
            (t[(t.LEVEL = 12)] = "LEVEL"),
            (t[(t.ATTRIBUTE = 13)] = "ATTRIBUTE"),
            (t[(t.BLOT = 14)] = "BLOT"),
            (t[(t.INLINE = 7)] = "INLINE"),
            (t[(t.BLOCK = 11)] = "BLOCK"),
            (t[(t.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
            (t[(t.INLINE_BLOT = 6)] = "INLINE_BLOT"),
            (t[(t.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
            (t[(t.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
            (t[(t.ANY = 15)] = "ANY"),
            t
          ))(r || {});
          class i {
            constructor(t, e, n = {}) {
              (this.attrName = t), (this.keyName = e);
              const i = r.TYPE & r.ATTRIBUTE;
              (this.scope =
                null != n.scope ? (n.scope & r.LEVEL) | i : r.ATTRIBUTE),
                null != n.whitelist && (this.whitelist = n.whitelist);
            }
            static keys(t) {
              return Array.from(t.attributes).map((t) => t.name);
            }
            add(t, e) {
              return (
                !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0)
              );
            }
            canAdd(t, e) {
              return (
                null == this.whitelist ||
                ("string" == typeof e
                  ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1
                  : this.whitelist.indexOf(e) > -1)
              );
            }
            remove(t) {
              t.removeAttribute(this.keyName);
            }
            value(t) {
              const e = t.getAttribute(this.keyName);
              return this.canAdd(t, e) && e ? e : "";
            }
          }
          class s extends Error {
            constructor(t) {
              super((t = "[Parchment] " + t)),
                (this.message = t),
                (this.name = this.constructor.name);
            }
          }
          const o = class t {
            constructor() {
              (this.attributes = {}),
                (this.classes = {}),
                (this.tags = {}),
                (this.types = {});
            }
            static find(t, e = !1) {
              if (null == t) return null;
              if (this.blots.has(t)) return this.blots.get(t) || null;
              if (e) {
                let n = null;
                try {
                  n = t.parentNode;
                } catch {
                  return null;
                }
                return this.find(n, e);
              }
              return null;
            }
            create(e, n, r) {
              const i = this.query(n);
              if (null == i) throw new s(`Unable to create ${n} blot`);
              const o = i,
                l =
                  n instanceof Node || n.nodeType === Node.TEXT_NODE
                    ? n
                    : o.create(r),
                a = new o(e, l, r);
              return t.blots.set(a.domNode, a), a;
            }
            find(e, n = !1) {
              return t.find(e, n);
            }
            query(t, e = r.ANY) {
              let n;
              return (
                "string" == typeof t
                  ? (n = this.types[t] || this.attributes[t])
                  : t instanceof Text || t.nodeType === Node.TEXT_NODE
                  ? (n = this.types.text)
                  : "number" == typeof t
                  ? t & r.LEVEL & r.BLOCK
                    ? (n = this.types.block)
                    : t & r.LEVEL & r.INLINE && (n = this.types.inline)
                  : t instanceof Element &&
                    ((t.getAttribute("class") || "")
                      .split(/\s+/)
                      .some((t) => ((n = this.classes[t]), !!n)),
                    (n = n || this.tags[t.tagName])),
                null == n
                  ? null
                  : "scope" in n &&
                    e & r.LEVEL & n.scope &&
                    e & r.TYPE & n.scope
                  ? n
                  : null
              );
            }
            register(...t) {
              return t.map((t) => {
                const e = "blotName" in t,
                  n = "attrName" in t;
                if (!e && !n) throw new s("Invalid definition");
                if (e && "abstract" === t.blotName)
                  throw new s("Cannot register abstract class");
                const r = e ? t.blotName : n ? t.attrName : void 0;
                return (
                  (this.types[r] = t),
                  n
                    ? "string" == typeof t.keyName &&
                      (this.attributes[t.keyName] = t)
                    : e &&
                      (t.className && (this.classes[t.className] = t),
                      t.tagName &&
                        (Array.isArray(t.tagName)
                          ? (t.tagName = t.tagName.map((t) => t.toUpperCase()))
                          : (t.tagName = t.tagName.toUpperCase()),
                        (Array.isArray(t.tagName)
                          ? t.tagName
                          : [t.tagName]
                        ).forEach((e) => {
                          (null == this.tags[e] || null == t.className) &&
                            (this.tags[e] = t);
                        }))),
                  t
                );
              });
            }
          };
          o.blots = new WeakMap();
          let l = o;
          function a(t, e) {
            return (t.getAttribute("class") || "")
              .split(/\s+/)
              .filter((t) => 0 === t.indexOf(`${e}-`));
          }
          class u extends i {
            static keys(t) {
              return (t.getAttribute("class") || "")
                .split(/\s+/)
                .map((t) => t.split("-").slice(0, -1).join("-"));
            }
            add(t, e) {
              return (
                !!this.canAdd(t, e) &&
                (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0)
              );
            }
            remove(t) {
              a(t, this.keyName).forEach((e) => {
                t.classList.remove(e);
              }),
                0 === t.classList.length && t.removeAttribute("class");
            }
            value(t) {
              const e = (a(t, this.keyName)[0] || "").slice(
                this.keyName.length + 1
              );
              return this.canAdd(t, e) ? e : "";
            }
          }
          function c(t) {
            const e = t.split("-"),
              n = e
                .slice(1)
                .map((t) => t[0].toUpperCase() + t.slice(1))
                .join("");
            return e[0] + n;
          }
          class h extends i {
            static keys(t) {
              return (t.getAttribute("style") || "")
                .split(";")
                .map((t) => t.split(":")[0].trim());
            }
            add(t, e) {
              return (
                !!this.canAdd(t, e) && ((t.style[c(this.keyName)] = e), !0)
              );
            }
            remove(t) {
              (t.style[c(this.keyName)] = ""),
                t.getAttribute("style") || t.removeAttribute("style");
            }
            value(t) {
              const e = t.style[c(this.keyName)];
              return this.canAdd(t, e) ? e : "";
            }
          }
          class f {
            constructor(t) {
              (this.attributes = {}), (this.domNode = t), this.build();
            }
            attribute(t, e) {
              e
                ? t.add(this.domNode, e) &&
                  (null != t.value(this.domNode)
                    ? (this.attributes[t.attrName] = t)
                    : delete this.attributes[t.attrName])
                : (t.remove(this.domNode), delete this.attributes[t.attrName]);
            }
            build() {
              this.attributes = {};
              const t = l.find(this.domNode);
              if (null == t) return;
              const e = i.keys(this.domNode),
                n = u.keys(this.domNode),
                s = h.keys(this.domNode);
              e.concat(n)
                .concat(s)
                .forEach((e) => {
                  const n = t.scroll.query(e, r.ATTRIBUTE);
                  n instanceof i && (this.attributes[n.attrName] = n);
                });
            }
            copy(t) {
              Object.keys(this.attributes).forEach((e) => {
                const n = this.attributes[e].value(this.domNode);
                t.format(e, n);
              });
            }
            move(t) {
              this.copy(t),
                Object.keys(this.attributes).forEach((t) => {
                  this.attributes[t].remove(this.domNode);
                }),
                (this.attributes = {});
            }
            values() {
              return Object.keys(this.attributes).reduce(
                (t, e) => ((t[e] = this.attributes[e].value(this.domNode)), t),
                {}
              );
            }
          }
          const d = class {
            constructor(t, e) {
              (this.scroll = t),
                (this.domNode = e),
                l.blots.set(e, this),
                (this.prev = null),
                (this.next = null);
            }
            static create(t) {
              if (null == this.tagName)
                throw new s("Blot definition missing tagName");
              let e, n;
              return (
                Array.isArray(this.tagName)
                  ? ("string" == typeof t
                      ? ((n = t.toUpperCase()),
                        parseInt(n, 10).toString() === n &&
                          (n = parseInt(n, 10)))
                      : "number" == typeof t && (n = t),
                    (e =
                      "number" == typeof n
                        ? document.createElement(this.tagName[n - 1])
                        : n && this.tagName.indexOf(n) > -1
                        ? document.createElement(n)
                        : document.createElement(this.tagName[0])))
                  : (e = document.createElement(this.tagName)),
                this.className && e.classList.add(this.className),
                e
              );
            }
            get statics() {
              return this.constructor;
            }
            attach() {}
            clone() {
              const t = this.domNode.cloneNode(!1);
              return this.scroll.create(t);
            }
            detach() {
              null != this.parent && this.parent.removeChild(this),
                l.blots.delete(this.domNode);
            }
            deleteAt(t, e) {
              this.isolate(t, e).remove();
            }
            formatAt(t, e, n, i) {
              const s = this.isolate(t, e);
              if (null != this.scroll.query(n, r.BLOT) && i) s.wrap(n, i);
              else if (null != this.scroll.query(n, r.ATTRIBUTE)) {
                const t = this.scroll.create(this.statics.scope);
                s.wrap(t), t.format(n, i);
              }
            }
            insertAt(t, e, n) {
              const r =
                  null == n
                    ? this.scroll.create("text", e)
                    : this.scroll.create(e, n),
                i = this.split(t);
              this.parent.insertBefore(r, i || void 0);
            }
            isolate(t, e) {
              const n = this.split(t);
              if (null == n) throw new Error("Attempt to isolate at end");
              return n.split(e), n;
            }
            length() {
              return 1;
            }
            offset(t = this.parent) {
              return null == this.parent || this === t
                ? 0
                : this.parent.children.offset(this) + this.parent.offset(t);
            }
            optimize(t) {
              this.statics.requiredContainer &&
                !(this.parent instanceof this.statics.requiredContainer) &&
                this.wrap(this.statics.requiredContainer.blotName);
            }
            remove() {
              null != this.domNode.parentNode &&
                this.domNode.parentNode.removeChild(this.domNode),
                this.detach();
            }
            replaceWith(t, e) {
              const n = "string" == typeof t ? this.scroll.create(t, e) : t;
              return (
                null != this.parent &&
                  (this.parent.insertBefore(n, this.next || void 0),
                  this.remove()),
                n
              );
            }
            split(t, e) {
              return 0 === t ? this : this.next;
            }
            update(t, e) {}
            wrap(t, e) {
              const n = "string" == typeof t ? this.scroll.create(t, e) : t;
              if (
                (null != this.parent &&
                  this.parent.insertBefore(n, this.next || void 0),
                "function" != typeof n.appendChild)
              )
                throw new s(`Cannot wrap ${t}`);
              return n.appendChild(this), n;
            }
          };
          d.blotName = "abstract";
          let p = d;
          const g = class extends p {
            static value(t) {
              return !0;
            }
            index(t, e) {
              return this.domNode === t ||
                this.domNode.compareDocumentPosition(t) &
                  Node.DOCUMENT_POSITION_CONTAINED_BY
                ? Math.min(e, 1)
                : -1;
            }
            position(t, e) {
              let n = Array.from(this.parent.domNode.childNodes).indexOf(
                this.domNode
              );
              return t > 0 && (n += 1), [this.parent.domNode, n];
            }
            value() {
              return {
                [this.statics.blotName]: this.statics.value(this.domNode) || !0,
              };
            }
          };
          g.scope = r.INLINE_BLOT;
          let m = g;
          class v {
            constructor() {
              (this.head = null), (this.tail = null), (this.length = 0);
            }
            append(...t) {
              if ((this.insertBefore(t[0], null), t.length > 1)) {
                const e = t.slice(1);
                this.append(...e);
              }
            }
            at(t) {
              const e = this.iterator();
              let n = e();
              for (; n && t > 0; ) (t -= 1), (n = e());
              return n;
            }
            contains(t) {
              const e = this.iterator();
              let n = e();
              for (; n; ) {
                if (n === t) return !0;
                n = e();
              }
              return !1;
            }
            indexOf(t) {
              const e = this.iterator();
              let n = e(),
                r = 0;
              for (; n; ) {
                if (n === t) return r;
                (r += 1), (n = e());
              }
              return -1;
            }
            insertBefore(t, e) {
              null != t &&
                (this.remove(t),
                (t.next = e),
                null != e
                  ? ((t.prev = e.prev),
                    null != e.prev && (e.prev.next = t),
                    (e.prev = t),
                    e === this.head && (this.head = t))
                  : null != this.tail
                  ? ((this.tail.next = t),
                    (t.prev = this.tail),
                    (this.tail = t))
                  : ((t.prev = null), (this.head = this.tail = t)),
                (this.length += 1));
            }
            offset(t) {
              let e = 0,
                n = this.head;
              for (; null != n; ) {
                if (n === t) return e;
                (e += n.length()), (n = n.next);
              }
              return -1;
            }
            remove(t) {
              this.contains(t) &&
                (null != t.prev && (t.prev.next = t.next),
                null != t.next && (t.next.prev = t.prev),
                t === this.head && (this.head = t.next),
                t === this.tail && (this.tail = t.prev),
                (this.length -= 1));
            }
            iterator(t = this.head) {
              return () => {
                const e = t;
                return null != t && (t = t.next), e;
              };
            }
            find(t, e = !1) {
              const n = this.iterator();
              let r = n();
              for (; r; ) {
                const i = r.length();
                if (
                  t < i ||
                  (e && t === i && (null == r.next || 0 !== r.next.length()))
                )
                  return [r, t];
                (t -= i), (r = n());
              }
              return [null, 0];
            }
            forEach(t) {
              const e = this.iterator();
              let n = e();
              for (; n; ) t(n), (n = e());
            }
            forEachAt(t, e, n) {
              if (e <= 0) return;
              const [r, i] = this.find(t);
              let s = t - i;
              const o = this.iterator(r);
              let l = o();
              for (; l && s < t + e; ) {
                const r = l.length();
                t > s
                  ? n(l, t - s, Math.min(e, s + r - t))
                  : n(l, 0, Math.min(r, t + e - s)),
                  (s += r),
                  (l = o());
              }
            }
            map(t) {
              return this.reduce((e, n) => (e.push(t(n)), e), []);
            }
            reduce(t, e) {
              const n = this.iterator();
              let r = n();
              for (; r; ) (e = t(e, r)), (r = n());
              return e;
            }
          }
          function b(t, e) {
            const n = e.find(t);
            if (n) return n;
            try {
              return e.create(t);
            } catch {
              const n = e.create(r.INLINE);
              return (
                Array.from(t.childNodes).forEach((t) => {
                  n.domNode.appendChild(t);
                }),
                t.parentNode && t.parentNode.replaceChild(n.domNode, t),
                n.attach(),
                n
              );
            }
          }
          const y = class t extends p {
            constructor(t, e) {
              super(t, e), (this.uiNode = null), this.build();
            }
            appendChild(t) {
              this.insertBefore(t);
            }
            attach() {
              super.attach(),
                this.children.forEach((t) => {
                  t.attach();
                });
            }
            attachUI(e) {
              null != this.uiNode && this.uiNode.remove(),
                (this.uiNode = e),
                t.uiClass && this.uiNode.classList.add(t.uiClass),
                this.uiNode.setAttribute("contenteditable", "false"),
                this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
            }
            build() {
              (this.children = new v()),
                Array.from(this.domNode.childNodes)
                  .filter((t) => t !== this.uiNode)
                  .reverse()
                  .forEach((t) => {
                    try {
                      const e = b(t, this.scroll);
                      this.insertBefore(e, this.children.head || void 0);
                    } catch (t) {
                      if (t instanceof s) return;
                      throw t;
                    }
                  });
            }
            deleteAt(t, e) {
              if (0 === t && e === this.length()) return this.remove();
              this.children.forEachAt(t, e, (t, e, n) => {
                t.deleteAt(e, n);
              });
            }
            descendant(e, n = 0) {
              const [r, i] = this.children.find(n);
              return (null == e.blotName && e(r)) ||
                (null != e.blotName && r instanceof e)
                ? [r, i]
                : r instanceof t
                ? r.descendant(e, i)
                : [null, -1];
            }
            descendants(e, n = 0, r = Number.MAX_VALUE) {
              let i = [],
                s = r;
              return (
                this.children.forEachAt(n, r, (n, r, o) => {
                  ((null == e.blotName && e(n)) ||
                    (null != e.blotName && n instanceof e)) &&
                    i.push(n),
                    n instanceof t && (i = i.concat(n.descendants(e, r, s))),
                    (s -= o);
                }),
                i
              );
            }
            detach() {
              this.children.forEach((t) => {
                t.detach();
              }),
                super.detach();
            }
            enforceAllowedChildren() {
              let e = !1;
              this.children.forEach((n) => {
                e ||
                  this.statics.allowedChildren.some((t) => n instanceof t) ||
                  (n.statics.scope === r.BLOCK_BLOT
                    ? (null != n.next && this.splitAfter(n),
                      null != n.prev && this.splitAfter(n.prev),
                      n.parent.unwrap(),
                      (e = !0))
                    : n instanceof t
                    ? n.unwrap()
                    : n.remove());
              });
            }
            formatAt(t, e, n, r) {
              this.children.forEachAt(t, e, (t, e, i) => {
                t.formatAt(e, i, n, r);
              });
            }
            insertAt(t, e, n) {
              const [r, i] = this.children.find(t);
              if (r) r.insertAt(i, e, n);
              else {
                const t =
                  null == n
                    ? this.scroll.create("text", e)
                    : this.scroll.create(e, n);
                this.appendChild(t);
              }
            }
            insertBefore(t, e) {
              null != t.parent && t.parent.children.remove(t);
              let n = null;
              this.children.insertBefore(t, e || null),
                (t.parent = this),
                null != e && (n = e.domNode),
                (this.domNode.parentNode !== t.domNode ||
                  this.domNode.nextSibling !== n) &&
                  this.domNode.insertBefore(t.domNode, n),
                t.attach();
            }
            length() {
              return this.children.reduce((t, e) => t + e.length(), 0);
            }
            moveChildren(t, e) {
              this.children.forEach((n) => {
                t.insertBefore(n, e);
              });
            }
            optimize(t) {
              if (
                (super.optimize(t),
                this.enforceAllowedChildren(),
                null != this.uiNode &&
                  this.uiNode !== this.domNode.firstChild &&
                  this.domNode.insertBefore(
                    this.uiNode,
                    this.domNode.firstChild
                  ),
                0 === this.children.length)
              )
                if (null != this.statics.defaultChild) {
                  const t = this.scroll.create(
                    this.statics.defaultChild.blotName
                  );
                  this.appendChild(t);
                } else this.remove();
            }
            path(e, n = !1) {
              const [r, i] = this.children.find(e, n),
                s = [[this, e]];
              return r instanceof t
                ? s.concat(r.path(i, n))
                : (null != r && s.push([r, i]), s);
            }
            removeChild(t) {
              this.children.remove(t);
            }
            replaceWith(e, n) {
              const r = "string" == typeof e ? this.scroll.create(e, n) : e;
              return (
                r instanceof t && this.moveChildren(r), super.replaceWith(r)
              );
            }
            split(t, e = !1) {
              if (!e) {
                if (0 === t) return this;
                if (t === this.length()) return this.next;
              }
              const n = this.clone();
              return (
                this.parent && this.parent.insertBefore(n, this.next || void 0),
                this.children.forEachAt(t, this.length(), (t, r, i) => {
                  const s = t.split(r, e);
                  null != s && n.appendChild(s);
                }),
                n
              );
            }
            splitAfter(t) {
              const e = this.clone();
              for (; null != t.next; ) e.appendChild(t.next);
              return (
                this.parent && this.parent.insertBefore(e, this.next || void 0),
                e
              );
            }
            unwrap() {
              this.parent &&
                this.moveChildren(this.parent, this.next || void 0),
                this.remove();
            }
            update(t, e) {
              const n = [],
                r = [];
              t.forEach((t) => {
                t.target === this.domNode &&
                  "childList" === t.type &&
                  (n.push(...t.addedNodes), r.push(...t.removedNodes));
              }),
                r.forEach((t) => {
                  if (
                    null != t.parentNode &&
                    "IFRAME" !== t.tagName &&
                    document.body.compareDocumentPosition(t) &
                      Node.DOCUMENT_POSITION_CONTAINED_BY
                  )
                    return;
                  const e = this.scroll.find(t);
                  null != e &&
                    (null == e.domNode.parentNode ||
                      e.domNode.parentNode === this.domNode) &&
                    e.detach();
                }),
                n
                  .filter(
                    (t) => t.parentNode === this.domNode && t !== this.uiNode
                  )
                  .sort((t, e) =>
                    t === e
                      ? 0
                      : t.compareDocumentPosition(e) &
                        Node.DOCUMENT_POSITION_FOLLOWING
                      ? 1
                      : -1
                  )
                  .forEach((t) => {
                    let e = null;
                    null != t.nextSibling &&
                      (e = this.scroll.find(t.nextSibling));
                    const n = b(t, this.scroll);
                    (n.next !== e || null == n.next) &&
                      (null != n.parent && n.parent.removeChild(this),
                      this.insertBefore(n, e || void 0));
                  }),
                this.enforceAllowedChildren();
            }
          };
          y.uiClass = "";
          let _ = y;
          const x = class t extends _ {
            constructor(t, e) {
              super(t, e), (this.attributes = new f(this.domNode));
            }
            static create(t) {
              return super.create(t);
            }
            static formats(e, n) {
              const r = n.query(t.blotName);
              if (null == r || e.tagName !== r.tagName) {
                if ("string" == typeof this.tagName) return !0;
                if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
              }
            }
            format(e, n) {
              if (e !== this.statics.blotName || n) {
                const t = this.scroll.query(e, r.INLINE);
                if (null == t) return;
                t instanceof i
                  ? this.attributes.attribute(t, n)
                  : n &&
                    (e !== this.statics.blotName || this.formats()[e] !== n) &&
                    this.replaceWith(e, n);
              } else
                this.children.forEach((e) => {
                  e instanceof t || (e = e.wrap(t.blotName, !0)),
                    this.attributes.copy(e);
                }),
                  this.unwrap();
            }
            formats() {
              const t = this.attributes.values(),
                e = this.statics.formats(this.domNode, this.scroll);
              return null != e && (t[this.statics.blotName] = e), t;
            }
            formatAt(t, e, n, i) {
              null != this.formats()[n] || this.scroll.query(n, r.ATTRIBUTE)
                ? this.isolate(t, e).format(n, i)
                : super.formatAt(t, e, n, i);
            }
            optimize(e) {
              super.optimize(e);
              const n = this.formats();
              if (0 === Object.keys(n).length) return this.unwrap();
              const r = this.next;
              r instanceof t &&
                r.prev === this &&
                (function (t, e) {
                  if (Object.keys(t).length !== Object.keys(e).length)
                    return !1;
                  for (const n in t) if (t[n] !== e[n]) return !1;
                  return !0;
                })(n, r.formats()) &&
                (r.moveChildren(this), r.remove());
            }
            replaceWith(t, e) {
              const n = super.replaceWith(t, e);
              return this.attributes.copy(n), n;
            }
            update(t, e) {
              super.update(t, e),
                t.some(
                  (t) => t.target === this.domNode && "attributes" === t.type
                ) && this.attributes.build();
            }
            wrap(e, n) {
              const r = super.wrap(e, n);
              return r instanceof t && this.attributes.move(r), r;
            }
          };
          (x.allowedChildren = [x, m]),
            (x.blotName = "inline"),
            (x.scope = r.INLINE_BLOT),
            (x.tagName = "SPAN");
          let w = x;
          const N = class t extends _ {
            constructor(t, e) {
              super(t, e), (this.attributes = new f(this.domNode));
            }
            static create(t) {
              return super.create(t);
            }
            static formats(e, n) {
              const r = n.query(t.blotName);
              if (null == r || e.tagName !== r.tagName) {
                if ("string" == typeof this.tagName) return !0;
                if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
              }
            }
            format(e, n) {
              const s = this.scroll.query(e, r.BLOCK);
              null != s &&
                (s instanceof i
                  ? this.attributes.attribute(s, n)
                  : e !== this.statics.blotName || n
                  ? n &&
                    (e !== this.statics.blotName || this.formats()[e] !== n) &&
                    this.replaceWith(e, n)
                  : this.replaceWith(t.blotName));
            }
            formats() {
              const t = this.attributes.values(),
                e = this.statics.formats(this.domNode, this.scroll);
              return null != e && (t[this.statics.blotName] = e), t;
            }
            formatAt(t, e, n, i) {
              null != this.scroll.query(n, r.BLOCK)
                ? this.format(n, i)
                : super.formatAt(t, e, n, i);
            }
            insertAt(t, e, n) {
              if (null == n || null != this.scroll.query(e, r.INLINE))
                super.insertAt(t, e, n);
              else {
                const r = this.split(t);
                if (null == r)
                  throw new Error("Attempt to insertAt after block boundaries");
                {
                  const t = this.scroll.create(e, n);
                  r.parent.insertBefore(t, r);
                }
              }
            }
            replaceWith(t, e) {
              const n = super.replaceWith(t, e);
              return this.attributes.copy(n), n;
            }
            update(t, e) {
              super.update(t, e),
                t.some(
                  (t) => t.target === this.domNode && "attributes" === t.type
                ) && this.attributes.build();
            }
          };
          (N.blotName = "block"),
            (N.scope = r.BLOCK_BLOT),
            (N.tagName = "P"),
            (N.allowedChildren = [w, N, m]);
          let E = N;
          const A = class extends _ {
            checkMerge() {
              return (
                null !== this.next &&
                this.next.statics.blotName === this.statics.blotName
              );
            }
            deleteAt(t, e) {
              super.deleteAt(t, e), this.enforceAllowedChildren();
            }
            formatAt(t, e, n, r) {
              super.formatAt(t, e, n, r), this.enforceAllowedChildren();
            }
            insertAt(t, e, n) {
              super.insertAt(t, e, n), this.enforceAllowedChildren();
            }
            optimize(t) {
              super.optimize(t),
                this.children.length > 0 &&
                  null != this.next &&
                  this.checkMerge() &&
                  (this.next.moveChildren(this), this.next.remove());
            }
          };
          (A.blotName = "container"), (A.scope = r.BLOCK_BLOT);
          let k = A;
          class q extends m {
            static formats(t, e) {}
            format(t, e) {
              super.formatAt(0, this.length(), t, e);
            }
            formatAt(t, e, n, r) {
              0 === t && e === this.length()
                ? this.format(n, r)
                : super.formatAt(t, e, n, r);
            }
            formats() {
              return this.statics.formats(this.domNode, this.scroll);
            }
          }
          const Z = {
              attributes: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            },
            S = class extends _ {
              constructor(t, e) {
                super(null, e),
                  (this.registry = t),
                  (this.scroll = this),
                  this.build(),
                  (this.observer = new MutationObserver((t) => {
                    this.update(t);
                  })),
                  this.observer.observe(this.domNode, Z),
                  this.attach();
              }
              create(t, e) {
                return this.registry.create(this, t, e);
              }
              find(t, e = !1) {
                const n = this.registry.find(t, e);
                return n
                  ? n.scroll === this
                    ? n
                    : e
                    ? this.find(n.scroll.domNode.parentNode, !0)
                    : null
                  : null;
              }
              query(t, e = r.ANY) {
                return this.registry.query(t, e);
              }
              register(...t) {
                return this.registry.register(...t);
              }
              build() {
                null != this.scroll && super.build();
              }
              detach() {
                super.detach(), this.observer.disconnect();
              }
              deleteAt(t, e) {
                this.update(),
                  0 === t && e === this.length()
                    ? this.children.forEach((t) => {
                        t.remove();
                      })
                    : super.deleteAt(t, e);
              }
              formatAt(t, e, n, r) {
                this.update(), super.formatAt(t, e, n, r);
              }
              insertAt(t, e, n) {
                this.update(), super.insertAt(t, e, n);
              }
              optimize(t = [], e = {}) {
                super.optimize(e);
                const n = e.mutationsMap || new WeakMap();
                let r = Array.from(this.observer.takeRecords());
                for (; r.length > 0; ) t.push(r.pop());
                const i = (t, e = !0) => {
                    null == t ||
                      t === this ||
                      (null != t.domNode.parentNode &&
                        (n.has(t.domNode) || n.set(t.domNode, []),
                        e && i(t.parent)));
                  },
                  s = (t) => {
                    n.has(t.domNode) &&
                      (t instanceof _ && t.children.forEach(s),
                      n.delete(t.domNode),
                      t.optimize(e));
                  };
                let o = t;
                for (let e = 0; o.length > 0; e += 1) {
                  if (e >= 100)
                    throw new Error(
                      "[Parchment] Maximum optimize iterations reached"
                    );
                  for (
                    o.forEach((t) => {
                      const e = this.find(t.target, !0);
                      null != e &&
                        (e.domNode === t.target &&
                          ("childList" === t.type
                            ? (i(this.find(t.previousSibling, !1)),
                              Array.from(t.addedNodes).forEach((t) => {
                                const e = this.find(t, !1);
                                i(e, !1),
                                  e instanceof _ &&
                                    e.children.forEach((t) => {
                                      i(t, !1);
                                    });
                              }))
                            : "attributes" === t.type && i(e.prev)),
                        i(e));
                    }),
                      this.children.forEach(s),
                      o = Array.from(this.observer.takeRecords()),
                      r = o.slice();
                    r.length > 0;

                  )
                    t.push(r.pop());
                }
              }
              update(t, e = {}) {
                t = t || this.observer.takeRecords();
                const n = new WeakMap();
                t
                  .map((t) => {
                    const e = this.find(t.target, !0);
                    return null == e
                      ? null
                      : n.has(e.domNode)
                      ? (n.get(e.domNode).push(t), null)
                      : (n.set(e.domNode, [t]), e);
                  })
                  .forEach((t) => {
                    null != t &&
                      t !== this &&
                      n.has(t.domNode) &&
                      t.update(n.get(t.domNode) || [], e);
                  }),
                  (e.mutationsMap = n),
                  n.has(this.domNode) && super.update(n.get(this.domNode), e),
                  this.optimize(t, e);
              }
            };
          (S.blotName = "scroll"),
            (S.defaultChild = E),
            (S.allowedChildren = [E, k]),
            (S.scope = r.BLOCK_BLOT),
            (S.tagName = "DIV");
          let L = S;
          const O = class t extends m {
            constructor(t, e) {
              super(t, e), (this.text = this.statics.value(this.domNode));
            }
            static create(t) {
              return document.createTextNode(t);
            }
            static value(t) {
              return t.data;
            }
            deleteAt(t, e) {
              this.domNode.data = this.text =
                this.text.slice(0, t) + this.text.slice(t + e);
            }
            index(t, e) {
              return this.domNode === t ? e : -1;
            }
            insertAt(t, e, n) {
              null == n
                ? ((this.text = this.text.slice(0, t) + e + this.text.slice(t)),
                  (this.domNode.data = this.text))
                : super.insertAt(t, e, n);
            }
            length() {
              return this.text.length;
            }
            optimize(e) {
              super.optimize(e),
                (this.text = this.statics.value(this.domNode)),
                0 === this.text.length
                  ? this.remove()
                  : this.next instanceof t &&
                    this.next.prev === this &&
                    (this.insertAt(this.length(), this.next.value()),
                    this.next.remove());
            }
            position(t, e = !1) {
              return [this.domNode, t];
            }
            split(t, e = !1) {
              if (!e) {
                if (0 === t) return this;
                if (t === this.length()) return this.next;
              }
              const n = this.scroll.create(this.domNode.splitText(t));
              return (
                this.parent.insertBefore(n, this.next || void 0),
                (this.text = this.statics.value(this.domNode)),
                n
              );
            }
            update(t, e) {
              t.some(
                (t) => "characterData" === t.type && t.target === this.domNode
              ) && (this.text = this.statics.value(this.domNode));
            }
            value() {
              return this.text;
            }
          };
          (O.blotName = "text"), (O.scope = r.INLINE_BLOT);
          let T = O;
        },
      },
      e = {};
    function n(r) {
      var i = e[r];
      if (void 0 !== i) return i.exports;
      var s = (e[r] = { id: r, loaded: !1, exports: {} });
      return t[r].call(s.exports, s, s.exports, n), (s.loaded = !0), s.exports;
    }
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, { a: e }), e;
    }),
      (n.d = function (t, e) {
        for (var r in e)
          n.o(e, r) &&
            !n.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      });
    var r = {};
    return (
      (function () {
        "use strict";
        n.d(r, {
          default: function () {
            return Rt;
          },
        });
        var t = n(1713),
          e = n(767),
          i = n(6880),
          s = n(8473);
        class o extends s.ClassAttributor {
          add(t, e) {
            let n = 0;
            if ("+1" === e || "-1" === e) {
              const r = this.value(t) || 0;
              n = "+1" === e ? r + 1 : r - 1;
            } else "number" == typeof e && (n = e);
            return 0 === n ? (this.remove(t), !0) : super.add(t, n.toString());
          }
          canAdd(t, e) {
            return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
          }
          value(t) {
            return parseInt(super.value(t), 10) || void 0;
          }
        }
        var l = new o("indent", "ql-indent", {
            scope: s.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
          }),
          a = n(3500);
        class u extends a.ZP {
          static blotName = "blockquote";
          static tagName = "blockquote";
        }
        var c = u;
        class h extends a.ZP {
          static blotName = "header";
          static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
          static formats(t) {
            return this.tagName.indexOf(t.tagName) + 1;
          }
        }
        var f = h,
          d = n(5019),
          p = n(250);
        class g extends d.Z {}
        (g.blotName = "list-container"), (g.tagName = "OL");
        class m extends a.ZP {
          static create(t) {
            const e = super.create();
            return e.setAttribute("data-list", t), e;
          }
          static formats(t) {
            return t.getAttribute("data-list") || void 0;
          }
          static register() {
            p.ZP.register(g);
          }
          constructor(t, e) {
            super(t, e);
            const n = e.ownerDocument.createElement("span"),
              r = (n) => {
                if (!t.isEnabled()) return;
                const r = this.statics.formats(e, t);
                "checked" === r
                  ? (this.format("list", "unchecked"), n.preventDefault())
                  : "unchecked" === r &&
                    (this.format("list", "checked"), n.preventDefault());
              };
            n.addEventListener("mousedown", r),
              n.addEventListener("touchstart", r),
              this.attachUI(n);
          }
          format(t, e) {
            t === this.statics.blotName && e
              ? this.domNode.setAttribute("data-list", e)
              : super.format(t, e);
          }
        }
        (m.blotName = "list"),
          (m.tagName = "LI"),
          (g.allowedChildren = [m]),
          (m.requiredContainer = g);
        var v = n(4352),
          b = n(2179),
          y = n(5351),
          _ = n(8312),
          x = n(784);
        class w extends x.Z {
          static blotName = "bold";
          static tagName = ["STRONG", "B"];
          static create() {
            return super.create();
          }
          static formats() {
            return !0;
          }
          optimize(t) {
            super.optimize(t),
              this.domNode.tagName !== this.statics.tagName[0] &&
                this.replaceWith(this.statics.blotName);
          }
        }
        var N = w;
        class E extends x.Z {
          static blotName = "link";
          static tagName = "A";
          static SANITIZED_URL = "about:blank";
          static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
          static create(t) {
            const e = super.create(t);
            return (
              e.setAttribute("href", this.sanitize(t)),
              e.setAttribute("rel", "noopener noreferrer"),
              e.setAttribute("target", "_blank"),
              e
            );
          }
          static formats(t) {
            return t.getAttribute("href");
          }
          static sanitize(t) {
            return A(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
          }
          format(t, e) {
            t === this.statics.blotName && e
              ? this.domNode.setAttribute("href", this.constructor.sanitize(e))
              : super.format(t, e);
          }
        }
        function A(t, e) {
          const n = document.createElement("a");
          n.href = t;
          const r = n.href.slice(0, n.href.indexOf(":"));
          return e.indexOf(r) > -1;
        }
        class k extends x.Z {
          static blotName = "script";
          static tagName = ["SUB", "SUP"];
          static create(t) {
            return "super" === t
              ? document.createElement("sup")
              : "sub" === t
              ? document.createElement("sub")
              : super.create(t);
          }
          static formats(t) {
            return "SUB" === t.tagName
              ? "sub"
              : "SUP" === t.tagName
              ? "super"
              : void 0;
          }
        }
        var q = k;
        class Z extends x.Z {
          static blotName = "underline";
          static tagName = "U";
        }
        var S = Z,
          L = n(8726);
        class O extends L.Z {
          static blotName = "formula";
          static className = "ql-formula";
          static tagName = "SPAN";
          static create(t) {
            if (null == window.katex)
              throw new Error("Formula module requires KaTeX.");
            const e = super.create(t);
            return (
              "string" == typeof t &&
                (window.katex.render(t, e, {
                  throwOnError: !1,
                  errorColor: "#f00",
                }),
                e.setAttribute("data-value", t)),
              e
            );
          }
          static value(t) {
            return t.getAttribute("data-value");
          }
          html() {
            const { formula: t } = this.value();
            return `<span>${t}</span>`;
          }
        }
        var T = O;
        const j = ["alt", "height", "width"];
        class C extends s.EmbedBlot {
          static blotName = "image";
          static tagName = "IMG";
          static create(t) {
            const e = super.create(t);
            return (
              "string" == typeof t && e.setAttribute("src", this.sanitize(t)), e
            );
          }
          static formats(t) {
            return j.reduce(
              (e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e),
              {}
            );
          }
          static match(t) {
            return (
              /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
            );
          }
          static register() {
            /Firefox/i.test(navigator.userAgent) &&
              setTimeout(() => {
                document.execCommand("enableObjectResizing", !1, !1);
              }, 1);
          }
          static sanitize(t) {
            return A(t, ["http", "https", "data"]) ? t : "//:0";
          }
          static value(t) {
            return t.getAttribute("src");
          }
          format(t, e) {
            j.indexOf(t) > -1
              ? e
                ? this.domNode.setAttribute(t, e)
                : this.domNode.removeAttribute(t)
              : super.format(t, e);
          }
        }
        var R = C;
        const I = ["height", "width"];
        class P extends a.i2 {
          static blotName = "video";
          static className = "ql-video";
          static tagName = "IFRAME";
          static create(t) {
            const e = super.create(t);
            return (
              e.setAttribute("frameborder", "0"),
              e.setAttribute("allowfullscreen", "true"),
              e.setAttribute("src", this.sanitize(t)),
              e
            );
          }
          static formats(t) {
            return I.reduce(
              (e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e),
              {}
            );
          }
          static sanitize(t) {
            return E.sanitize(t);
          }
          static value(t) {
            return t.getAttribute("src");
          }
          format(t, e) {
            I.indexOf(t) > -1
              ? e
                ? this.domNode.setAttribute(t, e)
                : this.domNode.removeAttribute(t)
              : super.format(t, e);
          }
          html() {
            const { video: t } = this.value();
            return `<a href="${t}">${t}</a>`;
          }
        }
        var B = P,
          M = n(7391),
          U = n(1702),
          D = n.n(U),
          z = n(8103),
          F = n(8474),
          $ = n(5191),
          H = n(3583),
          W = n(2173);
        const K = new s.ClassAttributor("code-token", "hljs", {
          scope: s.Scope.INLINE,
        });
        class V extends x.Z {
          static formats(t, e) {
            for (; null != t && t !== e.domNode; ) {
              if (t.classList && t.classList.contains(M.ZP.className))
                return super.formats(t, e);
              t = t.parentNode;
            }
          }
          constructor(t, e, n) {
            super(t, e, n), K.add(this.domNode, n);
          }
          format(t, e) {
            t !== V.blotName
              ? super.format(t, e)
              : e
              ? K.add(this.domNode, e)
              : (K.remove(this.domNode),
                this.domNode.classList.remove(this.statics.className));
          }
          optimize() {
            super.optimize(...arguments),
              K.value(this.domNode) || this.unwrap();
          }
        }
        (V.blotName = "code-token"), (V.className = "ql-token");
        class G extends M.ZP {
          static create(t) {
            const e = super.create(t);
            return (
              "string" == typeof t && e.setAttribute("data-language", t), e
            );
          }
          static formats(t) {
            return t.getAttribute("data-language") || "plain";
          }
          static register() {}
          format(t, e) {
            t === this.statics.blotName && e
              ? this.domNode.setAttribute("data-language", e)
              : super.format(t, e);
          }
          replaceWith(t, e) {
            return (
              this.formatAt(0, this.length(), V.blotName, !1),
              super.replaceWith(t, e)
            );
          }
        }
        class Y extends M.se {
          attach() {
            super.attach(), (this.forceNext = !1), this.scroll.emitMount(this);
          }
          format(t, e) {
            t === G.blotName &&
              ((this.forceNext = !0),
              this.children.forEach((n) => {
                n.format(t, e);
              }));
          }
          formatAt(t, e, n, r) {
            n === G.blotName && (this.forceNext = !0),
              super.formatAt(t, e, n, r);
          }
          highlight(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == this.children.head) return;
            const n = `${Array.from(this.domNode.childNodes)
                .filter((t) => t !== this.uiNode)
                .map((t) => t.textContent)
                .join("\n")}\n`,
              r = G.formats(this.children.head.domNode);
            if (e || this.forceNext || this.cachedText !== n) {
              if (n.trim().length > 0 || null == this.cachedText) {
                const e = this.children.reduce(
                    (t, e) => t.concat((0, a.qz)(e, !1)),
                    new (D())()
                  ),
                  i = t(n, r);
                e.diff(i).reduce((t, e) => {
                  let { retain: n, attributes: r } = e;
                  return n
                    ? (r &&
                        Object.keys(r).forEach((e) => {
                          [G.blotName, V.blotName].includes(e) &&
                            this.formatAt(t, n, e, r[e]);
                        }),
                      t + n)
                    : t;
                }, 0);
              }
              (this.cachedText = n), (this.forceNext = !1);
            }
          }
          html(t, e) {
            const [n] = this.children.find(t);
            return `<pre data-language="${
              n ? G.formats(n.domNode) : "plain"
            }">\n${(0, H.b)(this.code(t, e))}\n</pre>`;
          }
          optimize(t) {
            if (
              (super.optimize(t),
              null != this.parent &&
                null != this.children.head &&
                null != this.uiNode)
            ) {
              const t = G.formats(this.children.head.domNode);
              t !== this.uiNode.value && (this.uiNode.value = t);
            }
          }
        }
        (Y.allowedChildren = [G]),
          (G.requiredContainer = Y),
          (G.allowedChildren = [V, $.Z, H.Z, F.Z]);
        class Q extends z.Z {
          static register() {
            p.ZP.register(V, !0), p.ZP.register(G, !0), p.ZP.register(Y, !0);
          }
          constructor(t, e) {
            if ((super(t, e), null == this.options.hljs))
              throw new Error(
                "Syntax module requires highlight.js. Please include the library on the page before Quill."
              );
            (this.languages = this.options.languages.reduce((t, e) => {
              let { key: n } = e;
              return (t[n] = !0), t;
            }, {})),
              (this.highlightBlot = this.highlightBlot.bind(this)),
              this.initListener(),
              this.initTimer();
          }
          initListener() {
            this.quill.on(p.ZP.events.SCROLL_BLOT_MOUNT, (t) => {
              if (!(t instanceof Y)) return;
              const e = this.quill.root.ownerDocument.createElement("select");
              this.options.languages.forEach((t) => {
                let { key: n, label: r } = t;
                const i = e.ownerDocument.createElement("option");
                (i.textContent = r),
                  i.setAttribute("value", n),
                  e.appendChild(i);
              }),
                e.addEventListener("change", () => {
                  t.format(G.blotName, e.value),
                    this.quill.root.focus(),
                    this.highlight(t, !0);
                }),
                null == t.uiNode &&
                  (t.attachUI(e),
                  t.children.head &&
                    (e.value = G.formats(t.children.head.domNode)));
            });
          }
          initTimer() {
            let t = null;
            this.quill.on(p.ZP.events.SCROLL_OPTIMIZE, () => {
              t && clearTimeout(t),
                (t = setTimeout(() => {
                  this.highlight(), (t = null);
                }, this.options.interval));
            });
          }
          highlight() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.quill.selection.composing) return;
            this.quill.update(p.ZP.sources.USER);
            const n = this.quill.getSelection();
            (null == t ? this.quill.scroll.descendants(Y) : [t]).forEach(
              (t) => {
                t.highlight(this.highlightBlot, e);
              }
            ),
              this.quill.update(p.ZP.sources.SILENT),
              null != n && this.quill.setSelection(n, p.ZP.sources.SILENT);
          }
          highlightBlot(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "plain";
            if (((e = this.languages[e] ? e : "plain"), "plain" === e))
              return (0, H.b)(t)
                .split("\n")
                .reduce(
                  (t, n, r) => (
                    0 !== r && t.insert("\n", { [M.ZP.blotName]: e }),
                    t.insert(n)
                  ),
                  new (D())()
                );
            const n = this.quill.root.ownerDocument.createElement("div");
            return (
              n.classList.add(M.ZP.className),
              (n.innerHTML = ((t, e, n) => {
                if ("string" == typeof t.versionString) {
                  const r = t.versionString.split(".")[0];
                  if (parseInt(r, 10) >= 11)
                    return t.highlight(n, { language: e }).value;
                }
                return t.highlight(e, n).value;
              })(this.options.hljs, e, t)),
              (0, W.fw)(
                this.quill.scroll,
                n,
                [
                  (t, e) => {
                    const n = K.value(t);
                    return n
                      ? e.compose(
                          new (D())().retain(e.length(), { [V.blotName]: n })
                        )
                      : e;
                  },
                ],
                [
                  (t, n) =>
                    t.data
                      .split("\n")
                      .reduce(
                        (t, n, r) => (
                          0 !== r && t.insert("\n", { [M.ZP.blotName]: e }),
                          t.insert(n)
                        ),
                        n
                      ),
                ],
                new WeakMap()
              )
            );
          }
        }
        Q.DEFAULTS = {
          hljs: window.hljs,
          interval: 1e3,
          languages: [
            { key: "plain", label: "Plain" },
            { key: "bash", label: "Bash" },
            { key: "cpp", label: "C++" },
            { key: "cs", label: "C#" },
            { key: "css", label: "CSS" },
            { key: "diff", label: "Diff" },
            { key: "xml", label: "HTML/XML" },
            { key: "java", label: "Java" },
            { key: "javascript", label: "JavaScript" },
            { key: "markdown", label: "Markdown" },
            { key: "php", label: "PHP" },
            { key: "python", label: "Python" },
            { key: "ruby", label: "Ruby" },
            { key: "sql", label: "SQL" },
          ],
        };
        class X extends a.ZP {
          static blotName = "table";
          static tagName = "TD";
          static create(t) {
            const e = super.create();
            return (
              t
                ? e.setAttribute("data-row", t)
                : e.setAttribute("data-row", nt()),
              e
            );
          }
          static formats(t) {
            if (t.hasAttribute("data-row")) return t.getAttribute("data-row");
          }
          cellOffset() {
            return this.parent ? this.parent.children.indexOf(this) : -1;
          }
          format(t, e) {
            t === X.blotName && e
              ? this.domNode.setAttribute("data-row", e)
              : super.format(t, e);
          }
          row() {
            return this.parent;
          }
          rowOffset() {
            return this.row() ? this.row().rowOffset() : -1;
          }
          table() {
            return this.row() && this.row().table();
          }
        }
        class J extends d.Z {
          static blotName = "table-row";
          static tagName = "TR";
          checkMerge() {
            if (super.checkMerge() && null != this.next.children.head) {
              const t = this.children.head.formats(),
                e = this.children.tail.formats(),
                n = this.next.children.head.formats(),
                r = this.next.children.tail.formats();
              return (
                t.table === e.table &&
                t.table === n.table &&
                t.table === r.table
              );
            }
            return !1;
          }
          optimize(t) {
            super.optimize(t),
              this.children.forEach((t) => {
                if (null == t.next) return;
                const e = t.formats(),
                  n = t.next.formats();
                if (e.table !== n.table) {
                  const e = this.splitAfter(t);
                  e && e.optimize(), this.prev && this.prev.optimize();
                }
              });
          }
          rowOffset() {
            return this.parent ? this.parent.children.indexOf(this) : -1;
          }
          table() {
            return this.parent && this.parent.parent;
          }
        }
        class tt extends d.Z {
          static blotName = "table-body";
          static tagName = "TBODY";
        }
        class et extends d.Z {
          static blotName = "table-container";
          static tagName = "TABLE";
          balanceCells() {
            const t = this.descendants(J),
              e = t.reduce((t, e) => Math.max(e.children.length, t), 0);
            t.forEach((t) => {
              new Array(e - t.children.length).fill(0).forEach(() => {
                let e;
                null != t.children.head &&
                  (e = X.formats(t.children.head.domNode));
                const n = this.scroll.create(X.blotName, e);
                t.appendChild(n), n.optimize();
              });
            });
          }
          cells(t) {
            return this.rows().map((e) => e.children.at(t));
          }
          deleteColumn(t) {
            const [e] = this.descendant(tt);
            null != e &&
              null != e.children.head &&
              e.children.forEach((e) => {
                const n = e.children.at(t);
                null != n && n.remove();
              });
          }
          insertColumn(t) {
            const [e] = this.descendant(tt);
            null != e &&
              null != e.children.head &&
              e.children.forEach((e) => {
                const n = e.children.at(t),
                  r = X.formats(e.children.head.domNode),
                  i = this.scroll.create(X.blotName, r);
                e.insertBefore(i, n);
              });
          }
          insertRow(t) {
            const [e] = this.descendant(tt);
            if (null == e || null == e.children.head) return;
            const n = nt(),
              r = this.scroll.create(J.blotName);
            e.children.head.children.forEach(() => {
              const t = this.scroll.create(X.blotName, n);
              r.appendChild(t);
            });
            const i = e.children.at(t);
            e.insertBefore(r, i);
          }
          rows() {
            const t = this.children.head;
            return null == t ? [] : t.children.map((t) => t);
          }
        }
        function nt() {
          return `row-${Math.random().toString(36).slice(2, 6)}`;
        }
        (et.allowedChildren = [tt]),
          (tt.requiredContainer = et),
          (tt.allowedChildren = [J]),
          (J.requiredContainer = tt),
          (J.allowedChildren = [X]),
          (X.requiredContainer = J);
        class rt extends z.Z {
          static register() {
            p.ZP.register(X),
              p.ZP.register(J),
              p.ZP.register(tt),
              p.ZP.register(et);
          }
          constructor() {
            super(...arguments), this.listenBalanceCells();
          }
          balanceTables() {
            this.quill.scroll.descendants(et).forEach((t) => {
              t.balanceCells();
            });
          }
          deleteColumn() {
            const [t, , e] = this.getTable();
            null != e &&
              (t.deleteColumn(e.cellOffset()),
              this.quill.update(p.ZP.sources.USER));
          }
          deleteRow() {
            const [, t] = this.getTable();
            null != t && (t.remove(), this.quill.update(p.ZP.sources.USER));
          }
          deleteTable() {
            const [t] = this.getTable();
            if (null == t) return;
            const e = t.offset();
            t.remove(),
              this.quill.update(p.ZP.sources.USER),
              this.quill.setSelection(e, p.ZP.sources.SILENT);
          }
          getTable() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.quill.getSelection();
            if (null == t) return [null, null, null, -1];
            const [e, n] = this.quill.getLine(t.index);
            if (null == e || e.statics.blotName !== X.blotName)
              return [null, null, null, -1];
            const r = e.parent;
            return [r.parent.parent, r, e, n];
          }
          insertColumn(t) {
            const e = this.quill.getSelection();
            if (!e) return;
            const [n, r, i] = this.getTable(e);
            if (null == i) return;
            const s = i.cellOffset();
            n.insertColumn(s + t), this.quill.update(p.ZP.sources.USER);
            let o = r.rowOffset();
            0 === t && (o += 1),
              this.quill.setSelection(
                e.index + o,
                e.length,
                p.ZP.sources.SILENT
              );
          }
          insertColumnLeft() {
            this.insertColumn(0);
          }
          insertColumnRight() {
            this.insertColumn(1);
          }
          insertRow(t) {
            const e = this.quill.getSelection();
            if (!e) return;
            const [n, r, i] = this.getTable(e);
            if (null == i) return;
            const s = r.rowOffset();
            n.insertRow(s + t),
              this.quill.update(p.ZP.sources.USER),
              t > 0
                ? this.quill.setSelection(e, p.ZP.sources.SILENT)
                : this.quill.setSelection(
                    e.index + r.children.length,
                    e.length,
                    p.ZP.sources.SILENT
                  );
          }
          insertRowAbove() {
            this.insertRow(0);
          }
          insertRowBelow() {
            this.insertRow(1);
          }
          insertTable(t, e) {
            const n = this.quill.getSelection();
            if (null == n) return;
            const r = new Array(t).fill(0).reduce((t) => {
              const n = new Array(e).fill("\n").join("");
              return t.insert(n, { table: nt() });
            }, new (D())().retain(n.index));
            this.quill.updateContents(r, p.ZP.sources.USER),
              this.quill.setSelection(n.index, p.ZP.sources.SILENT),
              this.balanceTables();
          }
          listenBalanceCells() {
            this.quill.on(p.ZP.events.SCROLL_OPTIMIZE, (t) => {
              t.some(
                (t) =>
                  !!["TD", "TR", "TBODY", "TABLE"].includes(t.target.tagName) &&
                  (this.quill.once(p.ZP.events.TEXT_CHANGE, (t, e, n) => {
                    n === p.ZP.sources.USER && this.balanceTables();
                  }),
                  !0)
              );
            });
          }
        }
        var it = rt;
        const st = (0, n(1204).Z)("quill:toolbar");
        class ot extends z.Z {
          constructor(t, e) {
            if ((super(t, e), Array.isArray(this.options.container))) {
              const e = document.createElement("div");
              e.setAttribute("role", "toolbar"),
                (function (t, e) {
                  Array.isArray(e[0]) || (e = [e]),
                    e.forEach((e) => {
                      const n = document.createElement("span");
                      n.classList.add("ql-formats"),
                        e.forEach((t) => {
                          if ("string" == typeof t) lt(n, t);
                          else {
                            const e = Object.keys(t)[0],
                              r = t[e];
                            Array.isArray(r)
                              ? (function (t, e, n) {
                                  const r = document.createElement("select");
                                  r.classList.add(`ql-${e}`),
                                    n.forEach((t) => {
                                      const e =
                                        document.createElement("option");
                                      !1 !== t
                                        ? e.setAttribute("value", String(t))
                                        : e.setAttribute(
                                            "selected",
                                            "selected"
                                          ),
                                        r.appendChild(e);
                                    }),
                                    t.appendChild(r);
                                })(n, e, r)
                              : lt(n, e, r);
                          }
                        }),
                        t.appendChild(n);
                    });
                })(e, this.options.container),
                t.container?.parentNode?.insertBefore(e, t.container),
                (this.container = e);
            } else
              "string" == typeof this.options.container
                ? (this.container = document.querySelector(
                    this.options.container
                  ))
                : (this.container = this.options.container);
            this.container instanceof HTMLElement
              ? (this.container.classList.add("ql-toolbar"),
                (this.controls = []),
                (this.handlers = {}),
                this.options.handlers &&
                  Object.keys(this.options.handlers).forEach((t) => {
                    const e = this.options.handlers?.[t];
                    e && this.addHandler(t, e);
                  }),
                Array.from(
                  this.container.querySelectorAll("button, select")
                ).forEach((t) => {
                  this.attach(t);
                }),
                this.quill.on(p.ZP.events.EDITOR_CHANGE, (t, e) => {
                  t === p.ZP.events.SELECTION_CHANGE && this.update(e);
                }),
                this.quill.on(p.ZP.events.SCROLL_OPTIMIZE, () => {
                  const [t] = this.quill.selection.getRange();
                  this.update(t);
                }))
              : st.error("Container required for toolbar", this.options);
          }
          addHandler(t, e) {
            this.handlers[t] = e;
          }
          attach(t) {
            let e = Array.from(t.classList).find((t) => 0 === t.indexOf("ql-"));
            if (!e) return;
            if (
              ((e = e.slice(3)),
              "BUTTON" === t.tagName && t.setAttribute("type", "button"),
              null == this.handlers[e] && null == this.quill.scroll.query(e))
            )
              return void st.warn(
                "ignoring attaching to nonexistent format",
                e,
                t
              );
            const n = "SELECT" === t.tagName ? "change" : "click";
            t.addEventListener(n, (n) => {
              let r;
              if ("SELECT" === t.tagName) {
                if (t.selectedIndex < 0) return;
                const e = t.options[t.selectedIndex];
                r = !e.hasAttribute("selected") && (e.value || !1);
              } else
                (r =
                  !t.classList.contains("ql-active") &&
                  (t.value || !t.hasAttribute("value"))),
                  n.preventDefault();
              this.quill.focus();
              const [i] = this.quill.selection.getRange();
              if (null != this.handlers[e]) this.handlers[e].call(this, r);
              else if (
                this.quill.scroll.query(e).prototype instanceof s.EmbedBlot
              ) {
                if (((r = prompt(`Enter ${e}`)), !r)) return;
                this.quill.updateContents(
                  new (D())()
                    .retain(i.index)
                    .delete(i.length)
                    .insert({ [e]: r }),
                  p.ZP.sources.USER
                );
              } else this.quill.format(e, r, p.ZP.sources.USER);
              this.update(i);
            }),
              this.controls.push([e, t]);
          }
          update(t) {
            const e = null == t ? {} : this.quill.getFormat(t);
            this.controls.forEach((n) => {
              const [r, i] = n;
              if ("SELECT" === i.tagName) {
                let n = null;
                if (null == t) n = null;
                else if (null == e[r]) n = i.querySelector("option[selected]");
                else if (!Array.isArray(e[r])) {
                  let t = e[r];
                  "string" == typeof t && (t = t.replace(/"/g, '\\"')),
                    (n = i.querySelector(`option[value="${t}"]`));
                }
                null == n
                  ? ((i.value = ""), (i.selectedIndex = -1))
                  : (n.selected = !0);
              } else if (null == t)
                i.classList.remove("ql-active"),
                  i.setAttribute("aria-pressed", "false");
              else if (i.hasAttribute("value")) {
                const t = e[r],
                  n =
                    t === i.getAttribute("value") ||
                    (null != t && t.toString() === i.getAttribute("value")) ||
                    (null == t && !i.getAttribute("value"));
                i.classList.toggle("ql-active", n),
                  i.setAttribute("aria-pressed", n.toString());
              } else {
                const t = null != e[r];
                i.classList.toggle("ql-active", t),
                  i.setAttribute("aria-pressed", t.toString());
              }
            });
          }
        }
        function lt(t, e, n) {
          const r = document.createElement("button");
          r.setAttribute("type", "button"),
            r.classList.add(`ql-${e}`),
            r.setAttribute("aria-pressed", "false"),
            null != n
              ? ((r.value = n), r.setAttribute("aria-label", `${e}: ${n}`))
              : r.setAttribute("aria-label", e),
            t.appendChild(r);
        }
        (ot.DEFAULTS = {}),
          (ot.DEFAULTS = {
            container: null,
            handlers: {
              clean() {
                const t = this.quill.getSelection();
                if (null != t)
                  if (0 === t.length) {
                    const t = this.quill.getFormat();
                    Object.keys(t).forEach((t) => {
                      null != this.quill.scroll.query(t, s.Scope.INLINE) &&
                        this.quill.format(t, !1, p.ZP.sources.USER);
                    });
                  } else this.quill.removeFormat(t, p.ZP.sources.USER);
              },
              direction(t) {
                const { align: e } = this.quill.getFormat();
                "rtl" === t && null == e
                  ? this.quill.format("align", "right", p.ZP.sources.USER)
                  : t ||
                    "right" !== e ||
                    this.quill.format("align", !1, p.ZP.sources.USER),
                  this.quill.format("direction", t, p.ZP.sources.USER);
              },
              indent(t) {
                const e = this.quill.getSelection(),
                  n = this.quill.getFormat(e),
                  r = parseInt(n.indent || 0, 10);
                if ("+1" === t || "-1" === t) {
                  let e = "+1" === t ? 1 : -1;
                  "rtl" === n.direction && (e *= -1),
                    this.quill.format("indent", r + e, p.ZP.sources.USER);
                }
              },
              link(t) {
                !0 === t && (t = prompt("Enter link URL:")),
                  this.quill.format("link", t, p.ZP.sources.USER);
              },
              list(t) {
                const e = this.quill.getSelection(),
                  n = this.quill.getFormat(e);
                "check" === t
                  ? "checked" === n.list || "unchecked" === n.list
                    ? this.quill.format("list", !1, p.ZP.sources.USER)
                    : this.quill.format("list", "unchecked", p.ZP.sources.USER)
                  : this.quill.format("list", t, p.ZP.sources.USER);
              },
            },
          });
        const at =
          '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>';
        var ut = {
          align: {
            "": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>',
            center:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>',
            right:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>',
            justify:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>',
          },
          background:
            '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>',
          blockquote:
            '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>',
          bold: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>',
          clean:
            '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>',
          code: at,
          "code-block": at,
          color:
            '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>',
          direction: {
            "": '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>',
            rtl: '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>',
          },
          formula:
            '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>',
          header: {
            1: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>',
            2: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
          },
          italic:
            '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>',
          image:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>',
          indent: {
            "+1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>',
            "-1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>',
          },
          link: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>',
          list: {
            bullet:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>',
            check:
              '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>',
            ordered:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>',
          },
          script: {
            sub: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>',
            super:
              '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>',
          },
          strike:
            '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>',
          table:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>',
          underline:
            '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>',
          video:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>',
        };
        let ct = 0;
        function ht(t, e) {
          t.setAttribute(e, `${!("true" === t.getAttribute(e))}`);
        }
        var ft = class {
            constructor(t) {
              (this.select = t),
                (this.container = document.createElement("span")),
                this.buildPicker(),
                (this.select.style.display = "none"),
                this.select.parentNode.insertBefore(
                  this.container,
                  this.select
                ),
                this.label.addEventListener("mousedown", () => {
                  this.togglePicker();
                }),
                this.label.addEventListener("keydown", (t) => {
                  switch (t.key) {
                    case "Enter":
                      this.togglePicker();
                      break;
                    case "Escape":
                      this.escape(), t.preventDefault();
                  }
                }),
                this.select.addEventListener("change", this.update.bind(this));
            }
            togglePicker() {
              this.container.classList.toggle("ql-expanded"),
                ht(this.label, "aria-expanded"),
                ht(this.options, "aria-hidden");
            }
            buildItem(t) {
              const e = document.createElement("span");
              (e.tabIndex = "0"),
                e.setAttribute("role", "button"),
                e.classList.add("ql-picker-item");
              const n = t.getAttribute("value");
              return (
                n && e.setAttribute("data-value", n),
                t.textContent && e.setAttribute("data-label", t.textContent),
                e.addEventListener("click", () => {
                  this.selectItem(e, !0);
                }),
                e.addEventListener("keydown", (t) => {
                  switch (t.key) {
                    case "Enter":
                      this.selectItem(e, !0), t.preventDefault();
                      break;
                    case "Escape":
                      this.escape(), t.preventDefault();
                  }
                }),
                e
              );
            }
            buildLabel() {
              const t = document.createElement("span");
              return (
                t.classList.add("ql-picker-label"),
                (t.innerHTML =
                  '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>'),
                (t.tabIndex = "0"),
                t.setAttribute("role", "button"),
                t.setAttribute("aria-expanded", "false"),
                this.container.appendChild(t),
                t
              );
            }
            buildOptions() {
              const t = document.createElement("span");
              t.classList.add("ql-picker-options"),
                t.setAttribute("aria-hidden", "true"),
                (t.tabIndex = "-1"),
                (t.id = `ql-picker-options-${ct}`),
                (ct += 1),
                this.label.setAttribute("aria-controls", t.id),
                (this.options = t),
                Array.from(this.select.options).forEach((e) => {
                  const n = this.buildItem(e);
                  t.appendChild(n), !0 === e.selected && this.selectItem(n);
                }),
                this.container.appendChild(t);
            }
            buildPicker() {
              Array.from(this.select.attributes).forEach((t) => {
                this.container.setAttribute(t.name, t.value);
              }),
                this.container.classList.add("ql-picker"),
                (this.label = this.buildLabel()),
                this.buildOptions();
            }
            escape() {
              this.close(), setTimeout(() => this.label.focus(), 1);
            }
            close() {
              this.container.classList.remove("ql-expanded"),
                this.label.setAttribute("aria-expanded", "false"),
                this.options.setAttribute("aria-hidden", "true");
            }
            selectItem(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const n = this.container.querySelector(".ql-selected");
              t !== n &&
                (null != n && n.classList.remove("ql-selected"),
                null != t &&
                  (t.classList.add("ql-selected"),
                  (this.select.selectedIndex = Array.from(
                    t.parentNode.children
                  ).indexOf(t)),
                  t.hasAttribute("data-value")
                    ? this.label.setAttribute(
                        "data-value",
                        t.getAttribute("data-value")
                      )
                    : this.label.removeAttribute("data-value"),
                  t.hasAttribute("data-label")
                    ? this.label.setAttribute(
                        "data-label",
                        t.getAttribute("data-label")
                      )
                    : this.label.removeAttribute("data-label"),
                  e &&
                    (this.select.dispatchEvent(new Event("change")),
                    this.close())));
            }
            update() {
              let t;
              if (this.select.selectedIndex > -1) {
                const e =
                  this.container.querySelector(".ql-picker-options").children[
                    this.select.selectedIndex
                  ];
                (t = this.select.options[this.select.selectedIndex]),
                  this.selectItem(e);
              } else this.selectItem(null);
              const e =
                null != t &&
                t !== this.select.querySelector("option[selected]");
              this.label.classList.toggle("ql-active", e);
            }
          },
          dt = class extends ft {
            constructor(t, e) {
              super(t),
                (this.label.innerHTML = e),
                this.container.classList.add("ql-color-picker"),
                Array.from(this.container.querySelectorAll(".ql-picker-item"))
                  .slice(0, 7)
                  .forEach((t) => {
                    t.classList.add("ql-primary");
                  });
            }
            buildItem(t) {
              const e = super.buildItem(t);
              return (
                (e.style.backgroundColor = t.getAttribute("value") || ""), e
              );
            }
            selectItem(t, e) {
              super.selectItem(t, e);
              const n = this.label.querySelector(".ql-color-label"),
                r = (t && t.getAttribute("data-value")) || "";
              n &&
                ("line" === n.tagName
                  ? (n.style.stroke = r)
                  : (n.style.fill = r));
            }
          },
          pt = class extends ft {
            constructor(t, e) {
              super(t),
                this.container.classList.add("ql-icon-picker"),
                Array.from(
                  this.container.querySelectorAll(".ql-picker-item")
                ).forEach((t) => {
                  t.innerHTML = e[t.getAttribute("data-value") || ""];
                }),
                (this.defaultItem =
                  this.container.querySelector(".ql-selected")),
                this.selectItem(this.defaultItem);
            }
            selectItem(t, e) {
              super.selectItem(t, e);
              const n = t || this.defaultItem;
              if (null != n) {
                if (this.label.innerHTML === n.innerHTML) return;
                this.label.innerHTML = n.innerHTML;
              }
            }
          },
          gt = class {
            constructor(t, e) {
              (this.quill = t),
                (this.boundsContainer = e || document.body),
                (this.root = t.addContainer("ql-tooltip")),
                (this.root.innerHTML = this.constructor.TEMPLATE),
                ((t) => {
                  const { overflowY: e } = getComputedStyle(t, null);
                  return "visible" !== e && "clip" !== e;
                })(this.quill.root) &&
                  this.quill.root.addEventListener("scroll", () => {
                    this.root.style.marginTop =
                      -1 * this.quill.root.scrollTop + "px";
                  }),
                this.hide();
            }
            hide() {
              this.root.classList.add("ql-hidden");
            }
            position(t) {
              const e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                n = t.bottom + this.quill.root.scrollTop;
              (this.root.style.left = `${e}px`),
                (this.root.style.top = `${n}px`),
                this.root.classList.remove("ql-flip");
              const r = this.boundsContainer.getBoundingClientRect(),
                i = this.root.getBoundingClientRect();
              let s = 0;
              if (
                (i.right > r.right &&
                  ((s = r.right - i.right),
                  (this.root.style.left = `${e + s}px`)),
                i.left < r.left &&
                  ((s = r.left - i.left),
                  (this.root.style.left = `${e + s}px`)),
                i.bottom > r.bottom)
              ) {
                const e = i.bottom - i.top,
                  r = t.bottom - t.top + e;
                (this.root.style.top = n - r + "px"),
                  this.root.classList.add("ql-flip");
              }
              return s;
            }
            show() {
              this.root.classList.remove("ql-editing"),
                this.root.classList.remove("ql-hidden");
            }
          },
          mt = n(9534),
          vt = n(3147),
          bt = n(6760);
        const yt = [!1, "center", "right", "justify"],
          _t = [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
          ],
          xt = [!1, "serif", "monospace"],
          wt = ["1", "2", "3", !1],
          Nt = ["small", !1, "large", "huge"];
        class Et extends bt.Z {
          constructor(t, e) {
            super(t, e);
            const n = (e) => {
              document.body.contains(t.root)
                ? (null == this.tooltip ||
                    this.tooltip.root.contains(e.target) ||
                    document.activeElement === this.tooltip.textbox ||
                    this.quill.hasFocus() ||
                    this.tooltip.hide(),
                  null != this.pickers &&
                    this.pickers.forEach((t) => {
                      t.container.contains(e.target) || t.close();
                    }))
                : document.body.removeEventListener("click", n);
            };
            t.emitter.listenDOM("click", document.body, n);
          }
          addModule(t) {
            const e = super.addModule(t);
            return "toolbar" === t && this.extendToolbar(e), e;
          }
          buildButtons(t, e) {
            Array.from(t).forEach((t) => {
              (t.getAttribute("class") || "").split(/\s+/).forEach((n) => {
                if (n.startsWith("ql-") && ((n = n.slice(3)), null != e[n]))
                  if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;
                  else if ("string" == typeof e[n]) t.innerHTML = e[n];
                  else {
                    const r = t.value || "";
                    null != r && e[n][r] && (t.innerHTML = e[n][r]);
                  }
              });
            });
          }
          buildPickers(t, e) {
            (this.pickers = Array.from(t).map((t) => {
              if (
                t.classList.contains("ql-align") &&
                (null == t.querySelector("option") && kt(t, yt),
                "object" == typeof e.align)
              )
                return new pt(t, e.align);
              if (
                t.classList.contains("ql-background") ||
                t.classList.contains("ql-color")
              ) {
                const n = t.classList.contains("ql-background")
                  ? "background"
                  : "color";
                return (
                  null == t.querySelector("option") &&
                    kt(t, _t, "background" === n ? "#ffffff" : "#000000"),
                  new dt(t, e[n])
                );
              }
              return (
                null == t.querySelector("option") &&
                  (t.classList.contains("ql-font")
                    ? kt(t, xt)
                    : t.classList.contains("ql-header")
                    ? kt(t, wt)
                    : t.classList.contains("ql-size") && kt(t, Nt)),
                new ft(t)
              );
            })),
              this.quill.on(vt.Z.events.EDITOR_CHANGE, () => {
                this.pickers.forEach((t) => {
                  t.update();
                });
              });
          }
        }
        Et.DEFAULTS = (0, mt.Z)({}, bt.Z.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula() {
                  this.quill.theme.tooltip.edit("formula");
                },
                image() {
                  let t = this.container.querySelector(
                    "input.ql-image[type=file]"
                  );
                  null == t &&
                    ((t = document.createElement("input")),
                    t.setAttribute("type", "file"),
                    t.setAttribute(
                      "accept",
                      this.quill.uploader.options.mimetypes.join(", ")
                    ),
                    t.classList.add("ql-image"),
                    t.addEventListener("change", () => {
                      const e = this.quill.getSelection(!0);
                      this.quill.uploader.upload(e, t.files), (t.value = "");
                    }),
                    this.container.appendChild(t)),
                    t.click();
                },
                video() {
                  this.quill.theme.tooltip.edit("video");
                },
              },
            },
          },
        });
        class At extends gt {
          constructor(t, e) {
            super(t, e),
              (this.textbox = this.root.querySelector('input[type="text"]')),
              this.listen();
          }
          listen() {
            this.textbox.addEventListener("keydown", (t) => {
              "Enter" === t.key
                ? (this.save(), t.preventDefault())
                : "Escape" === t.key && (this.cancel(), t.preventDefault());
            });
          }
          cancel() {
            this.hide(), this.restoreFocus();
          }
          edit() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "link",
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            if (
              (this.root.classList.remove("ql-hidden"),
              this.root.classList.add("ql-editing"),
              null == this.textbox)
            )
              return;
            null != e
              ? (this.textbox.value = e)
              : t !== this.root.getAttribute("data-mode") &&
                (this.textbox.value = "");
            const n = this.quill.getBounds(this.quill.selection.savedRange);
            null != n && this.position(n),
              this.textbox.select(),
              this.textbox.setAttribute(
                "placeholder",
                this.textbox.getAttribute(`data-${t}`) || ""
              ),
              this.root.setAttribute("data-mode", t);
          }
          restoreFocus() {
            this.quill.focus({ preventScroll: !0 });
          }
          save() {
            let { value: t } = this.textbox;
            switch (this.root.getAttribute("data-mode")) {
              case "link": {
                const { scrollTop: e } = this.quill.root;
                this.linkRange
                  ? (this.quill.formatText(
                      this.linkRange,
                      "link",
                      t,
                      vt.Z.sources.USER
                    ),
                    delete this.linkRange)
                  : (this.restoreFocus(),
                    this.quill.format("link", t, vt.Z.sources.USER)),
                  (this.quill.root.scrollTop = e);
                break;
              }
              case "video":
                t = (function (t) {
                  let e =
                    t.match(
                      /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
                    ) ||
                    t.match(
                      /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
                    );
                  return e
                    ? `${e[1] || "https"}://www.youtube.com/embed/${
                        e[2]
                      }?showinfo=0`
                    : (e = t.match(
                        /^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/
                      ))
                    ? `${e[1] || "https"}://player.vimeo.com/video/${e[2]}/`
                    : t;
                })(t);
              case "formula": {
                if (!t) break;
                const e = this.quill.getSelection(!0);
                if (null != e) {
                  const n = e.index + e.length;
                  this.quill.insertEmbed(
                    n,
                    this.root.getAttribute("data-mode"),
                    t,
                    vt.Z.sources.USER
                  ),
                    "formula" === this.root.getAttribute("data-mode") &&
                      this.quill.insertText(n + 1, " ", vt.Z.sources.USER),
                    this.quill.setSelection(n + 2, vt.Z.sources.USER);
                }
                break;
              }
            }
            (this.textbox.value = ""), this.hide();
          }
        }
        function kt(t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          e.forEach((e) => {
            const r = document.createElement("option");
            e === n
              ? r.setAttribute("selected", "selected")
              : r.setAttribute("value", String(e)),
              t.appendChild(r);
          });
        }
        var qt = n(6794);
        const Zt = [
          ["bold", "italic", "link"],
          [{ header: 1 }, { header: 2 }, "blockquote"],
        ];
        class St extends At {
          static TEMPLATE = [
            '<span class="ql-tooltip-arrow"></span>',
            '<div class="ql-tooltip-editor">',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-close"></a>',
            "</div>",
          ].join("");
          constructor(t, e) {
            super(t, e),
              this.quill.on(vt.Z.events.EDITOR_CHANGE, (t, e, n, r) => {
                if (t === vt.Z.events.SELECTION_CHANGE)
                  if (null != e && e.length > 0 && r === vt.Z.sources.USER) {
                    this.show(),
                      (this.root.style.left = "0px"),
                      (this.root.style.width = ""),
                      (this.root.style.width = `${this.root.offsetWidth}px`);
                    const t = this.quill.getLines(e.index, e.length);
                    if (1 === t.length) {
                      const t = this.quill.getBounds(e);
                      null != t && this.position(t);
                    } else {
                      const n = t[t.length - 1],
                        r = this.quill.getIndex(n),
                        i = Math.min(n.length() - 1, e.index + e.length - r),
                        s = this.quill.getBounds(new qt.e(r, i));
                      null != s && this.position(s);
                    }
                  } else
                    document.activeElement !== this.textbox &&
                      this.quill.hasFocus() &&
                      this.hide();
              });
          }
          listen() {
            super.listen(),
              this.root
                .querySelector(".ql-close")
                .addEventListener("click", () => {
                  this.root.classList.remove("ql-editing");
                }),
              this.quill.on(vt.Z.events.SCROLL_OPTIMIZE, () => {
                setTimeout(() => {
                  if (this.root.classList.contains("ql-hidden")) return;
                  const t = this.quill.getSelection();
                  if (null != t) {
                    const e = this.quill.getBounds(t);
                    null != e && this.position(e);
                  }
                }, 1);
              });
          }
          cancel() {
            this.show();
          }
          position(t) {
            const e = super.position(t),
              n = this.root.querySelector(".ql-tooltip-arrow");
            return (
              (n.style.marginLeft = ""),
              0 !== e &&
                (n.style.marginLeft = -1 * e - n.offsetWidth / 2 + "px"),
              e
            );
          }
        }
        class Lt extends Et {
          constructor(t, e) {
            null != e.modules.toolbar &&
              null == e.modules.toolbar.container &&
              (e.modules.toolbar.container = Zt),
              super(t, e),
              this.quill.container.classList.add("ql-bubble");
          }
          extendToolbar(t) {
            (this.tooltip = new St(this.quill, this.options.bounds)),
              null != t.container &&
                (this.tooltip.root.appendChild(t.container),
                this.buildButtons(t.container.querySelectorAll("button"), ut),
                this.buildPickers(t.container.querySelectorAll("select"), ut));
          }
        }
        Lt.DEFAULTS = (0, mt.Z)({}, Et.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link(t) {
                  t
                    ? this.quill.theme.tooltip.edit()
                    : this.quill.format("link", !1);
                },
              },
            },
          },
        });
        const Ot = [
          [{ header: ["1", "2", "3", !1] }],
          ["bold", "italic", "underline", "link"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ];
        class Tt extends At {
          static TEMPLATE = [
            '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-action"></a>',
            '<a class="ql-remove"></a>',
          ].join("");
          preview = this.root.querySelector("a.ql-preview");
          listen() {
            super.listen(),
              this.root
                .querySelector("a.ql-action")
                .addEventListener("click", (t) => {
                  this.root.classList.contains("ql-editing")
                    ? this.save()
                    : this.edit("link", this.preview.textContent),
                    t.preventDefault();
                }),
              this.root
                .querySelector("a.ql-remove")
                .addEventListener("click", (t) => {
                  if (null != this.linkRange) {
                    const t = this.linkRange;
                    this.restoreFocus(),
                      this.quill.formatText(t, "link", !1, vt.Z.sources.USER),
                      delete this.linkRange;
                  }
                  t.preventDefault(), this.hide();
                }),
              this.quill.on(vt.Z.events.SELECTION_CHANGE, (t, e, n) => {
                if (null != t) {
                  if (0 === t.length && n === vt.Z.sources.USER) {
                    const [e, n] = this.quill.scroll.descendant(E, t.index);
                    if (null != e) {
                      this.linkRange = new qt.e(t.index - n, e.length());
                      const r = E.formats(e.domNode);
                      (this.preview.textContent = r),
                        this.preview.setAttribute("href", r),
                        this.show();
                      const i = this.quill.getBounds(this.linkRange);
                      return void (null != i && this.position(i));
                    }
                  } else delete this.linkRange;
                  this.hide();
                }
              });
          }
          show() {
            super.show(), this.root.removeAttribute("data-mode");
          }
        }
        class jt extends Et {
          constructor(t, e) {
            null != e.modules.toolbar &&
              null == e.modules.toolbar.container &&
              (e.modules.toolbar.container = Ot),
              super(t, e),
              this.quill.container.classList.add("ql-snow");
          }
          extendToolbar(t) {
            null != t.container &&
              (t.container.classList.add("ql-snow"),
              this.buildButtons(t.container.querySelectorAll("button"), ut),
              this.buildPickers(t.container.querySelectorAll("select"), ut),
              (this.tooltip = new Tt(this.quill, this.options.bounds)),
              t.container.querySelector(".ql-link") &&
                this.quill.keyboard.addBinding(
                  { key: "k", shortKey: !0 },
                  (e, n) => {
                    t.handlers.link.call(t, !n.format.link);
                  }
                ));
          }
        }
        jt.DEFAULTS = (0, mt.Z)({}, Et.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link(t) {
                  if (t) {
                    const t = this.quill.getSelection();
                    if (null == t || 0 === t.length) return;
                    let e = this.quill.getText(t);
                    /^\S+@\S+\.\S+$/.test(e) &&
                      0 !== e.indexOf("mailto:") &&
                      (e = `mailto:${e}`);
                    const { tooltip: n } = this.quill.theme;
                    n.edit("link", e);
                  } else this.quill.format("link", !1);
                },
              },
            },
          },
        });
        var Ct = jt;
        t.default.register(
          {
            "attributors/attribute/direction": i.IF,
            "attributors/class/align": e.dk,
            "attributors/class/background": v.Y,
            "attributors/class/color": b.Hn,
            "attributors/class/direction": i.hY,
            "attributors/class/font": y._,
            "attributors/class/size": _.m,
            "attributors/style/align": e.HE,
            "attributors/style/background": v.w,
            "attributors/style/color": b.HQ,
            "attributors/style/direction": i.H8,
            "attributors/style/font": y.H,
            "attributors/style/size": _.Z,
          },
          !0
        ),
          t.default.register(
            {
              "formats/align": e.dk,
              "formats/direction": i.hY,
              "formats/indent": l,
              "formats/background": v.w,
              "formats/color": b.HQ,
              "formats/font": y._,
              "formats/size": _.m,
              "formats/blockquote": c,
              "formats/code-block": M.ZP,
              "formats/header": f,
              "formats/list": m,
              "formats/bold": N,
              "formats/code": M.EK,
              "formats/italic": class extends N {
                static blotName = "italic";
                static tagName = ["EM", "I"];
              },
              "formats/link": E,
              "formats/script": q,
              "formats/strike": class extends N {
                static blotName = "strike";
                static tagName = ["S", "STRIKE"];
              },
              "formats/underline": S,
              "formats/formula": T,
              "formats/image": R,
              "formats/video": B,
              "modules/syntax": Q,
              "modules/table": it,
              "modules/toolbar": ot,
              "themes/bubble": Lt,
              "themes/snow": Ct,
              "ui/icons": ut,
              "ui/picker": ft,
              "ui/icon-picker": pt,
              "ui/color-picker": dt,
              "ui/tooltip": gt,
            },
            !0
          );
        var Rt = t.default;
      })(),
      r.default
    );
  })();
});
//# sourceMappingURL=quill.js.map
