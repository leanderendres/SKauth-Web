import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, C as noop } from "../../../chunks/index-de65d63a.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let h1;
  let t0;
  let t1;
  let h2;
  let t2;
  let t3;
  let p0;
  let t4;
  let br0;
  let t5;
  let br1;
  let t6;
  let t7;
  let p1;
  let t8;
  let a;
  let t9;
  let t10;
  let p2;
  let t11;
  let t12;
  let label;
  let input;
  let t13;
  let span;
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Imprint");
      t1 = space();
      h2 = element("h2");
      t2 = text("Information in accordance with Section 5 TMG");
      t3 = space();
      p0 = element("p");
      t4 = text("Leander Endres");
      br0 = element("br");
      t5 = text("\nBerneckstraße 33");
      br1 = element("br");
      t6 = text("\n78713 Schramberg");
      t7 = space();
      p1 = element("p");
      t8 = text("e-Mail: ");
      a = element("a");
      t9 = text("hallo@leander-endres.de");
      t10 = space();
      p2 = element("p");
      t11 = text("Do you need the german version?");
      t12 = space();
      label = element("label");
      input = element("input");
      t13 = space();
      span = element("span");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Imprint");
      h1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      h2 = claim_element(div_nodes, "H2", {});
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, "Information in accordance with Section 5 TMG");
      h2_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "Leander Endres");
      br0 = claim_element(p0_nodes, "BR", {});
      t5 = claim_text(p0_nodes, "\nBerneckstraße 33");
      br1 = claim_element(p0_nodes, "BR", {});
      t6 = claim_text(p0_nodes, "\n78713 Schramberg");
      p0_nodes.forEach(detach);
      t7 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "e-Mail: ");
      a = claim_element(p1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t9 = claim_text(a_nodes, "hallo@leander-endres.de");
      a_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t10 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t11 = claim_text(p2_nodes, "Do you need the german version?");
      p2_nodes.forEach(detach);
      t12 = claim_space(nodes);
      label = claim_element(nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      input = claim_element(label_nodes, "INPUT", { type: true, class: true });
      t13 = claim_space(label_nodes);
      span = claim_element(label_nodes, "SPAN", { class: true });
      children(span).forEach(detach);
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "mailto:hallo@leander-endres.de");
      attr(div, "class", "container");
      attr(input, "type", "checkbox");
      input.value = "false";
      attr(input, "class", "svelte-zrootn");
      attr(span, "class", "slider round svelte-zrootn");
      attr(label, "class", "switch svelte-zrootn");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, t1);
      append_hydration(div, h2);
      append_hydration(h2, t2);
      append_hydration(div, t3);
      append_hydration(div, p0);
      append_hydration(p0, t4);
      append_hydration(p0, br0);
      append_hydration(p0, t5);
      append_hydration(p0, br1);
      append_hydration(p0, t6);
      append_hydration(div, t7);
      append_hydration(div, p1);
      append_hydration(p1, t8);
      append_hydration(p1, a);
      append_hydration(a, t9);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t11);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, label, anchor);
      append_hydration(label, input);
      append_hydration(label, t13);
      append_hydration(label, span);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(label);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
