var listaPeliculas = [
  "https://i.pinimg.com/564x/c8/6c/65/c86c65163bf7581b9c2866d906634ef9.jpg",
  "https://i.pinimg.com/564x/62/69/f7/6269f74e305077fde7d5970fd1895542.jpg",
  "https://i.pinimg.com/564x/d1/20/e2/d120e2f83ed07aeca15d4e049777eb7f.jpg",
  "https://i.pinimg.com/564x/ad/ba/a4/adbaa41b81502bad7de3c24727d19560.jpg",
  "https://i.pinimg.com/564x/46/6d/cf/466dcf660d8d302b72f4c63d8fc657ae.jpg",
  "https://i.pinimg.com/564x/93/4b/c8/934bc8d95a95c2eeaa19748d9801477e.jpg",
  "https://i.pinimg.com/564x/18/b6/8f/18b68f1332e3868acc82d3439914dfdf.jpg",
  "https://i.pinimg.com/564x/d0/2b/69/d02b69ed63c46fbfa9c3e1370a5baede.jpg",
  "https://i.pinimg.com/564x/c3/c2/a2/c3c2a2242cc7e196f639bd78bc8bacfa.jpg",
  "https://i.pinimg.com/564x/57/3b/70/573b7061850e7c03a354ba2de8848c79.jpg",
];

console.log(listaPeliculas.length);

//Desafío 2: agregue elementos a la lista usando .push

listaPeliculas.push(
  "https://i.pinimg.com/564x/0b/b3/c4/0bb3c4cb62a68478b8d6a32bef62db51.jpg",
  "https://i.pinimg.com/564x/39/f2/06/39f2063901c81860dbbe26bd72b69a9b.jpg"
);

var nombrePeliculas = [
  "GTA SAN ANDREAS",
  "OUTLAST 1",
  "ROBLOX",
  "NEED FOR SPEED MOST WANTED",
  "COUNTER STRIKE 1.6",
  "RESIDENT EVIL 4",
  "HALF LIFE",
  "VALORANT",
  "FORTNITE",
  "GOD OF WAR 2",
  "CRASH BANDICOOT",
  "GUITAR HERO III",
];

document.write('<div class="container_todosFilmes">');

//Desafío 1 - Convertir for en while
var i = 0;
while (i < listaPeliculas.length) {
  if (listaPeliculas[i].endsWith("jpg") || listaPeliculas[i].endsWith("jpeg")) {
    document.write('<div class="container_filme">');
    document.write("<img src=" + listaPeliculas[i] + ">");
    document.write("<p>" + nombrePeliculas[i] + "</p>");

    //Desafío 4 - Colocar títulos debajo de la imagen
    document.write("</div>");
  } else {
    document.write(
      "<p> La imagen " +
        i +
        " no se leyó porque no es un archivo jpeg o jpg </p>"
    );
  }
  i++;
}
document.write("</div>");
