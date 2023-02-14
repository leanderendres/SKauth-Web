import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1vjv7qp{background:white;box-shadow:0 0 10px #01202c}nav.svelte-1vjv7qp{display:grid;grid-template-columns:1fr 1fr;align-items:center;list-style:none;margin:0;padding:0;grid-template-columns:100px 1fr}ul.svelte-1vjv7qp{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;align-items:center;list-style:none;margin:0}li.svelte-1vjv7qp{height:75px;border:.01rem solid #ededed;display:flex;justify-content:center;align-items:center}li.svelte-1vjv7qp:nth-child(1){border-left:none}li.svelte-1vjv7qp:nth-child(4){border-right:none;margin-right:2rem}a.svelte-1vjv7qp{color:#022B3A;text-decoration:none}a.svelte-1vjv7qp:hover{background-color:#ededed;text-decoration:none}#logo.svelte-1vjv7qp{display:flex;justify-content:center;align-items:center}#logo.svelte-1vjv7qp:hover{background-color:#ffffff;text-decoration:none}img.svelte-1vjv7qp{width:110px;height:75px;margin:0 0rem 0 5rem}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-1vjv7qp"}"><nav class="${"svelte-1vjv7qp"}"><a href="${"/"}" id="${"logo"}" class="${"svelte-1vjv7qp"}"><img src="${"/logo.jpeg"}" alt="${"SKauth"}" class="${"svelte-1vjv7qp"}"></a>

		<ul class="${"svelte-1vjv7qp"}"><a href="${"/news"}" class="${"svelte-1vjv7qp"}"><li class="${"svelte-1vjv7qp"}">Nachrichten</li></a>
			<a href="${"/blog"}" class="${"svelte-1vjv7qp"}"><li class="${"svelte-1vjv7qp"}">Musik</li></a>
			<a href="${"/about"}" class="${"svelte-1vjv7qp"}"><li class="${"svelte-1vjv7qp"}">Über uns</li></a>
			<a href="${"/imprint"}" class="${"svelte-1vjv7qp"}"><li class="${"svelte-1vjv7qp"}">Impressum</li></a></ul></nav>

</header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1u2rrcc{font-family:'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color:azure}main.svelte-1u2rrcc{position:absolute}p.svelte-1u2rrcc{font-size:2rem;position:absolute;bottom:-50%;left:50%;width:100%;font-size:0.8rem;color:#8DADB9;z-index:2}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-1u2rrcc"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-1u2rrcc"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-1u2rrcc"}"><p class="${"svelte-1u2rrcc"}"><a href="${"imprint"}" class="${"svelte-1u2rrcc"}">Imprint</a> - all rights reserved </p></footer>
</div>`;
});
export {
  Layout as default
};
