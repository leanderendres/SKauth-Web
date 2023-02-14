import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.switch.svelte-zrootn.svelte-zrootn{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-zrootn input.svelte-zrootn{opacity:0;width:0;height:0}.slider.svelte-zrootn.svelte-zrootn{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider.svelte-zrootn.svelte-zrootn:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s}input.svelte-zrootn:checked+.slider.svelte-zrootn{background-color:#74bb03}input.svelte-zrootn:focus+.slider.svelte-zrootn{box-shadow:0 0 1px #74bb03}input.svelte-zrootn:checked+.slider.svelte-zrootn:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-zrootn.svelte-zrootn{border-radius:34px}.slider.round.svelte-zrootn.svelte-zrootn:before{border-radius:50%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container"}"><h1>Imprint</h1>



<h2>Information in accordance with Section 5 TMG</h2>
<p>Leander Endres<br>
Berneckstraße 33<br>
78713 Schramberg</p>
<p>e-Mail: <a href="${"mailto:hallo@leander-endres.de"}">hallo@leander-endres.de</a></p></div>

<p>Do you need the german version?</p>
<label class="${"switch svelte-zrootn"}"><input type="${"checkbox"}" value="${"false"}" class="${"svelte-zrootn"}">
    <span class="${"slider round svelte-zrootn"}"></span>
</label>`;
});
export {
  Page as default
};
