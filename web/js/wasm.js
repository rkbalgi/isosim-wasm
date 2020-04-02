fetch("/wasm/isosim_wasm.wasm").then(res => res.arrayBuffer()).then(
    bytes => WebAssembly.instantiate(bytes)).then(
    res => res.instance).then(it => {
  document.getElementById("div_1").innerText = it.exports.add_one(53)
})