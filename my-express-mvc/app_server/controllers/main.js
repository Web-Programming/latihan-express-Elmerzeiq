//controller index
const index = (req, res) => {
    res.render('index', {title : 'Express SLEbeweeee' });
}
//controller kontak
const kontak = (req, res) =>{
    res.render('kontak', {title : 'Ini Halaman Kontak' });
}

//controller profil
const profil = (req, res) =>{
    res.render('profil', {title : 'Ini Halaman Profil gais' });
}

const about = (req, res) =>{
    res.render('about', {title : 'Ini Halaman about' });
}
module.exports = { index, kontak, profil, about };