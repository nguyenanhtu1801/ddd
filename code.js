var data='<div id="yes"> <a class="btn-blue a_prev" id="prev-link" href="https://khotruyentranhx.com/nhat-ky-o-tro/chapter-18-ch115099"> Chap trước</a><select name="forma" onchange="location = this.options[this.selectedIndex].value;"> <option value="blog-post.html">Chap 1</option><option value="Nhat ky o tro chap 2.html">Chap 2</option> <option value="Nhat ky o tro chap 3.html">Chap 3</option> <option value="Nhat ky o tro chap 4">Chap 4</option></select> <a class="btn-blue a_next" id="next-link" href="https://khotruyentranhx.com/nhat-ky-o-tro/chapter-20-ch115101">Chap sau </a></div>';

function fun() {
  document.getElementById("yes").innerHTML = data;
}
