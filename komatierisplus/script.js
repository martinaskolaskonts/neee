function onClick() {
    let val = document.getElementById("code").value;
    for (var i = 0; i < labrit.length; i++) {
      console.log(i);
      console.log(labrit[i]);
      if (labrit[i] == val) {
        window.location.href = "https://komatieris.lv/komatierisplus/";
      }
    }
  }