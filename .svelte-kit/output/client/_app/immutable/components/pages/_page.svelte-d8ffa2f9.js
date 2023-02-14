import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, q as text, K as head_selector, h as detach, c as claim_space, l as claim_element, m as children, r as claim_text, b as insert_hydration, E as append_hydration, C as noop } from "../../chunks/index-de65d63a.js";
function create_fragment(ctx) {
  let t0;
  let h1;
  let t1;
  return {
    c() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Hallo test test");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1nw4vel", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Hallo test test");
      h1_nodes.forEach(detach);
      this.h();
    },
    h() {
      document.title = "SKauth";
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(h1);
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
