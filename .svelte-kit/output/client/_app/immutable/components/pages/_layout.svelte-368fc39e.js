import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, D as src_url_equal, n as attr, b as insert_hydration, E as append_hydration, C as noop, F as create_slot, x as create_component, y as claim_component, z as mount_component, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-de65d63a.js";
const Header_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let header;
  let nav;
  let a0;
  let img;
  let img_src_value;
  let t0;
  let ul;
  let a1;
  let li0;
  let t1;
  let t2;
  let a2;
  let li1;
  let t3;
  let t4;
  let a3;
  let li2;
  let t5;
  let t6;
  let a4;
  let li3;
  let t7;
  return {
    c() {
      header = element("header");
      nav = element("nav");
      a0 = element("a");
      img = element("img");
      t0 = space();
      ul = element("ul");
      a1 = element("a");
      li0 = element("li");
      t1 = text("Nachrichten");
      t2 = space();
      a2 = element("a");
      li1 = element("li");
      t3 = text("Musik");
      t4 = space();
      a3 = element("a");
      li2 = element("li");
      t5 = text("Über uns");
      t6 = space();
      a4 = element("a");
      li3 = element("li");
      t7 = text("Impressum");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      nav = claim_element(header_nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      a0 = claim_element(nav_nodes, "A", { href: true, id: true, class: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
      a0_nodes.forEach(detach);
      t0 = claim_space(nav_nodes);
      ul = claim_element(nav_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      a1 = claim_element(ul_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      li0 = claim_element(a1_nodes, "LI", { class: true });
      var li0_nodes = children(li0);
      t1 = claim_text(li0_nodes, "Nachrichten");
      li0_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      t2 = claim_space(ul_nodes);
      a2 = claim_element(ul_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      li1 = claim_element(a2_nodes, "LI", { class: true });
      var li1_nodes = children(li1);
      t3 = claim_text(li1_nodes, "Musik");
      li1_nodes.forEach(detach);
      a2_nodes.forEach(detach);
      t4 = claim_space(ul_nodes);
      a3 = claim_element(ul_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      li2 = claim_element(a3_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      t5 = claim_text(li2_nodes, "Über uns");
      li2_nodes.forEach(detach);
      a3_nodes.forEach(detach);
      t6 = claim_space(ul_nodes);
      a4 = claim_element(ul_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      li3 = claim_element(a4_nodes, "LI", { class: true });
      var li3_nodes = children(li3);
      t7 = claim_text(li3_nodes, "Impressum");
      li3_nodes.forEach(detach);
      a4_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "/logo.jpeg"))
        attr(img, "src", img_src_value);
      attr(img, "alt", "SKauth");
      attr(img, "class", "svelte-1vjv7qp");
      attr(a0, "href", "/");
      attr(a0, "id", "logo");
      attr(a0, "class", "svelte-1vjv7qp");
      attr(li0, "class", "svelte-1vjv7qp");
      attr(a1, "href", "/news");
      attr(a1, "class", "svelte-1vjv7qp");
      attr(li1, "class", "svelte-1vjv7qp");
      attr(a2, "href", "/blog");
      attr(a2, "class", "svelte-1vjv7qp");
      attr(li2, "class", "svelte-1vjv7qp");
      attr(a3, "href", "/about");
      attr(a3, "class", "svelte-1vjv7qp");
      attr(li3, "class", "svelte-1vjv7qp");
      attr(a4, "href", "/imprint");
      attr(a4, "class", "svelte-1vjv7qp");
      attr(ul, "class", "svelte-1vjv7qp");
      attr(nav, "class", "svelte-1vjv7qp");
      attr(header, "class", "svelte-1vjv7qp");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, nav);
      append_hydration(nav, a0);
      append_hydration(a0, img);
      append_hydration(nav, t0);
      append_hydration(nav, ul);
      append_hydration(ul, a1);
      append_hydration(a1, li0);
      append_hydration(li0, t1);
      append_hydration(ul, t2);
      append_hydration(ul, a2);
      append_hydration(a2, li1);
      append_hydration(li1, t3);
      append_hydration(ul, t4);
      append_hydration(ul, a3);
      append_hydration(a3, li2);
      append_hydration(li2, t5);
      append_hydration(ul, t6);
      append_hydration(ul, a4);
      append_hydration(a4, li3);
      append_hydration(li3, t7);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(header);
    }
  };
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let header;
  let t0;
  let main;
  let t1;
  let footer;
  let p;
  let a;
  let t2;
  let t3;
  let current;
  header = new Header({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      div = element("div");
      create_component(header.$$.fragment);
      t0 = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      t1 = space();
      footer = element("footer");
      p = element("p");
      a = element("a");
      t2 = text("Imprint");
      t3 = text(" - all rights reserved");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(header.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      main = claim_element(div_nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      footer = claim_element(div_nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      p = claim_element(footer_nodes, "P", { class: true });
      var p_nodes = children(p);
      a = claim_element(p_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "Imprint");
      a_nodes.forEach(detach);
      t3 = claim_text(p_nodes, " - all rights reserved");
      p_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "class", "svelte-1u2rrcc");
      attr(a, "href", "imprint");
      attr(a, "class", "svelte-1u2rrcc");
      attr(p, "class", "svelte-1u2rrcc");
      attr(footer, "class", "svelte-1u2rrcc");
      attr(div, "class", "app svelte-1u2rrcc");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(header, div, null);
      append_hydration(div, t0);
      append_hydration(div, main);
      if (default_slot) {
        default_slot.m(main, null);
      }
      append_hydration(div, t1);
      append_hydration(div, footer);
      append_hydration(footer, p);
      append_hydration(p, a);
      append_hydration(a, t2);
      append_hydration(p, t3);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(header);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
