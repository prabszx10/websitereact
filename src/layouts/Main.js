import React, { useState } from 'react'
import Logo from '../img/logo.png';
import { Navbar, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBell, faEnvelope, faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons'
import img1 from '../img/icon/grafis.png';
import img2 from '../img/icon/penulis.png';
import BG from '../img/imageBackground.png';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import JsonUser from '../data/temukan.json'
import ReactPaginate from 'react-paginate';

const temukan = [
    {
        icon: img1,
        name: "Grafis & desain"
    },
    {
        icon: img2,
        name: "Penulis & Penerjemahan"
    },
    {
        icon: img1,
        name: "Web dan Pemrograman"
    },
    {
        icon: img2,
        name: "Visual dan Audio"
    },
    {
        icon: img1,
        name: "Pemasaran dan Periklanan"
    },
    {
        icon: img2,
        name: "Jasa Konsultasi"
    },
    {
        icon: img1,
        name: "Gaya Hidup"
    },
];

const marks = [
    {
        value: 0,
        label: 'Rp 50000',
    },
    {
        value: 20,
        label: '',
    },
    {
        value: 37,
        label: '',
    },
    {
        value: 100,
        label: 'Rp 100000',
    },
];

const category = [{ name: "Logo" }, { name: "Design Web" }, { name: "Infografis" }, { name: "Banner Online" }, { name: "Presentasi" }];

function valuetext(value) {
    return `${value}°C`;
}

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}


function Main() {

    const [userData, setUserData] = useState(JsonUser);

    const [categoryData, setcategoryData] = useState(category);

    const [pageNum, setPageNumber] = useState(0);

    const dataPerPage = 20;
    const pageVisited = pageNum * dataPerPage;

    const display = userData.slice(pageVisited, dataPerPage + pageVisited).map(userData => {
        const { profile, img, name, title, price, rating, from } = userData;
        return (
            <div className="gridItem">
                <Card style={{ width: '100%' }}>
                    <div className="top">
                        <img src={profile} alt="" />
                        <div>
                            <h6>{name}</h6>
                            <p>Membalas dalam 12 menit</p>
                        </div>
                    </div>
                    <Card.Img variant="top" src={img} className="contentImg" />
                    <Card.Body>
                        <h5>
                            {title}
                        </h5>
                        <div className="bottom">
                            <p className="start">{rating}({from})</p>
                            <p className="end">Rp {price}</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    });

    const pageCount = Math.ceil(userData.length / dataPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <div>
            <div className="main">
                <div className="top">
                    <div className="left">
                        <img src={Logo} alt="" />
                        <div className="search">
                            <input type="search" placeholder="Cari Pekerjaan..." />
                            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        </div>
                    </div>

                    <div className="right">
                        <FontAwesomeIcon icon={faShoppingBasket} className="iniIcon" />
                        <FontAwesomeIcon icon={faBell} className="iniIcon" />
                        <FontAwesomeIcon icon={faEnvelope} className="iniIcon" />
                        <div className="acc">
                            <div className="line"></div>
                            <img src="./img/profile.jpg" alt="" />
                            <p>Jhon</p>
                        </div>

                    </div>
                </div>

                <div className="judul">
                    <h1>Jasa Web Design / <span>Desain Website Profesional</span></h1>
                    <div className="line"></div>
                </div>

                <div className="content">
                    <div className="sidebar">
                        <h3>Filter</h3>
                        <div className="jenisLogo">
                            <ProSidebar className="box">
                                <div className="line">
                                    <Menu>
                                        <SubMenu className="title" title="Jenis Logo">
                                            <MenuItem className="subtitle">Perusahaan</MenuItem>
                                            <MenuItem className="subtitle">Website</MenuItem>
                                            <MenuItem className="subtitle">Komunitas</MenuItem>
                                            <MenuItem className="subtitle">Toko Online</MenuItem>
                                        </SubMenu>
                                        <div className="divider"></div>
                                        <SubMenu className="title" title="Style Logo">
                                            <MenuItem className="subtitle">Perusahaan</MenuItem>
                                            <MenuItem className="subtitle">Website</MenuItem>
                                            <MenuItem className="subtitle">Komunitas</MenuItem>
                                            <MenuItem className="subtitle">Toko Online</MenuItem>
                                        </SubMenu>
                                        <div className="divider"></div>
                                        <SubMenu className="title" title="Layanan">
                                            <MenuItem className="subtitle">Perusahaan</MenuItem>
                                            <MenuItem className="subtitle">Website</MenuItem>
                                            <MenuItem className="subtitle">Komunitas</MenuItem>
                                            <MenuItem className="subtitle">Toko Online</MenuItem>
                                        </SubMenu>
                                        <div className="divider"></div>
                                        <MenuItem className="title">Format File
                                            <div className="isian">
                                                <ul className="listIsian">
                                                    <li><input type="checkbox" /> JPG</li>
                                                    <li><input type="checkbox" /> PNG</li>
                                                    <li><input type="checkbox" />GIF</li>
                                                </ul>
                                                <ul className="listIsian">
                                                    <li><input type="checkbox" /> PDF</li>
                                                    <li><input type="checkbox" /> AI</li>
                                                    <li><input type="checkbox" /> EPS</li>
                                                </ul>
                                            </div>
                                        </MenuItem>
                                        <div className="divider"></div>
                                        <MenuItem className="title">Durasi Kerja
                                            <div className="isiDurasi">
                                                <a href="">Dalam 24 Jam</a>
                                                <a href="">Dalam 7 hari</a>
                                                <a href="">Dalam 3 hari</a>
                                            </div>
                                        </MenuItem>
                                        <div className="divider"></div>
                                        <MenuItem className="title">Rating
                                            <div className="isiRating">
                                                <ul>
                                                    <li><input type="checkbox" />  <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} /></li>
                                                    <li><input type="checkbox" /> <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </li>
                                                    <li><input type="checkbox" /> <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </li>
                                                </ul>
                                            </div>
                                        </MenuItem>
                                        <div className="divider"></div>
                                        <MenuItem className="title">Harga
                                            <p>Range Harga</p>
                                            <div className="isiSlider">

                                                <Slider
                                                    aria-label="Restricted values"
                                                    defaultValue={20}
                                                    valueLabelFormat={valueLabelFormat}
                                                    getAriaValueText={valuetext}
                                                    step={null}
                                                    // valueLabelDisplay="auto"
                                                    marks={marks}
                                                />

                                            </div>
                                        </MenuItem>
                                    </Menu>
                                </div>

                            </ProSidebar>
                        </div>

                    </div>
                    <div className="choose">
                        <div className="contentBox">
                            {temukan.map((temukan) => {
                                const { icon, name } = temukan;
                                return (
                                    <div className="contentItem">
                                        <img src={icon} alt="" />
                                        <p>{name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="lists">
                        <div className="text">
                            <p>Perkerjaan yang di temukan 77 item</p>
                            <p>Halaman 1 dari 7</p>
                        </div>
                        <div className="box">
                            <div className="grid">
                                {display}

                            </div>
                            <ReactPaginate
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginations"}
                                previousClassName={"prevBtn"}
                                nextClassName={"nextBtn"}
                                disabledClassName={"paginationDisable"}
                                activeClassName={"activeBtn"}
                            />
                        </div>
                    </div>
                </div>

                <div className="kategori">
                    <div className="judul">
                        <h1>Kategori terkait <span>Grafis & Desain</span></h1>
                        <div className="line"></div>
                    </div>
                    <div className="box">
                        <div className="kategoriMain">
                            <div className="contentItem">
                                <div>
                                    <a href="" className="button">Logo</a>
                                    <a href="" className="button">Design Web</a>
                                    <a href="" className="button">Infografis</a>
                                    <a href="" className="button">Baner Online</a>
                                </div>        
                            </div>
                            <div className="contentItem">
                                <div>
                                    <a href="" className="button">Presentasi</a>
                                    <a href="" className="button">Portofolio Resume</a>
                                    <a href="" className="button">UI / UX Design</a>
                                    <a href="" className="button">Digital Printing</a>
                                </div>                             
                            </div>
                            <div className="contentItem">
                                <div>
                                    <a href="" className="button">Label kemasan</a>
                                    <a href="" className="button">Design Kaos dan motif</a>
                                    <a href="" className="button">Setiker Line</a>
                                    <a href="" className="button">Gambar Ilustrasi</a>
                                </div>                             
                            </div>
                            <div className="contentItem">
                                <div>
                                    <a href="" className="button">Gambar Potret</a>
                                    <a href="" className="button">Design Karakter</a>
                                    <a href="" className="button">CAD Drawing</a>
                                    <a href="" className="button">Desain Karakter</a>
                                </div>                             
                            </div>
                            <div className="contentItem">
                                <div>
                                    <a href="" className="button">Jasa Lainnya</a>
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>

                <div className="textBottom">
                    <div className="bottom1">
                        <h3>Jasa Web Design / Desain Website Profesional</h3>
                        <p>Website bukan hanya sebuah media yang berisi barisan kata, foto, dan video. Kini, perhatian pengunjung akan desain website juga semakin tinggi. Berikan
                            tampilan yang menggambarkan brand bisnis Anda. Fastwork mempermudah Anda dalam membuat desain web dan mobile app design yang profesional dan
                            konseptual sesuai keinginan Anda. Dapatkan jasa web design atau jasa desain website dan jasa design mobile apps dengan harga murah dan berkualitas
                            dari freelancer berpengalaman dalam pembuatan web design dan desain aplikasi mobile seperti app android design untuk meningkatkan bisnis Anda.
                            Mengapa Jasa Web Design dan Mobile App Design Penting untuk Bisnis Digital Anda

                            Di era dengan perkembangan teknologi dan informasi seperti sekarang
                            membuat seseorang harus beradaptasi dengan inovasi baru. Terlebih lagi saat ini kita dihadapkan dengan era dimana internet of thing menjadi hal yang
                            memegang peranan penting dalam kehidupan. Pada dasarnya, internet of thing berhubungan dengan gaya hidup hingga bisnis dengan internet sebagai
                            penopang utamanya. Dalam ranah bisnis, terjadi pergeseran pemasaran dari konvensional ke online.</p>
                    </div>

                    <div className="bottom2">
                        <h3>Keuntungan Menggunakan Jasa Desain Website dan Desain Aplikasi Mobile Profesional diNova Freelancer</h3>
                        <p>Seperti dijelaskan di atas, saat ini mencari segala sesuatu yang berkaitan dengan pengembangan bisnis Anda dapat dilakukan dengan mudah, cepat dan ringkas dengan
                            menggunakan internet. Begitu pula ketika Anda membutuhkan jasa desain website profesional ataupun jasa desain aplikasi mobile untuk mengembangkan situs dan
                            aplikasi Anda agar semakin menarik. Terutama ketika Anda menggunakan website tersebut untuk keperluan komersial, pemasaran dan melakukan promosi. Salah
                            satunya dengan menggunakan marketplace yang menyediakan jasa pembuatan desain web dan desain aplikasi mobile.

                            Ada banyak keuntungan ketika Anda mencari
                            layanan desain website murah dengan cepat dan tepat, namun tentunya berkualitas terbaik. Salah satunya adalah menggunakan platform jasa Nova freelancer yang
                            memiliki jaringan luas dan siap menghubungkan Anda secara langsung dengan freelancer profesional dalam hal jasa design website.
                            Memilih Nova freelancer dalam mencari freelancer profesional akan memberikan Anda kemudahan sekaligus keuntungan. Salah satunya adalah mengenai harga jasa
                            desain web. Biaya operasional yang Anda keluarkan relatif kecil, sehingga memungkinkan Anda mendapatkan freelancer profesional dengan harga terbaik. Bahkan
                            beberapa freelancer yang menangani jasa desain website pernah dan bahkan masih bekerja di perusahaan ternama yang memiliki keahlian mumpuni.
                            Mereka pun juga pernah terlibat dalam proyek proyek besar sebelumnya. Jadi, dengan kata lain meskipun jasa desain website murah yang ditawarkan, namun dari segi
                            kualitas tidak diragukan lagi dan dapat memberikan pelayanan terbaik bagi Anda. Termasuk tampilan visual hingga tata letak website sesuai yang diinginkan.
                            Tidak hanya itu saja,Nova Freelancer juga memiliki fitur-fitur unggulan yang bisa Anda gunakan. Fitur pertama adalah fitur pencarian yang memudahkan Anda dalam
                            mencari dan menemukan freelancer profesional yang akan diajak bekerjasama dalam proyek desain website. Setelah Anda menemukan jasa web design dan mobile
                            apps design terbaik, selanjutnya bisa menggunakan fitur chat untuk berkomunikasi dengan mudah di mana saja dan kapan saja.</p>
                    </div>

                    <div className="bottom3">
                        <h3>Cara Menggunakan Nova Freelancer</h3>
                        <p>1. Temukan freelancer terbaik berdasarkan portofolio, proses kerja, langkah, ulasan, dan komentar <br />
                            2. Diskusikan proyek Anda dengan freelancer dan berikan detail proyeknya. Kemudian, freelancer akan memberikan penawaran untuk Anda pertimbangkan <br />
                            3. Bayar di Fastwork menggunakan salah satu dari empat metode berikut: transfer bank (akun virtual), kartu kredit, e wallet (OVO) atau outlet ritel (Alfamart). Kami
                            menjamin bahwa pembayaran hanya akan diberikan ke freelancer setelah hasil kerja Anda terima dan setujui <br />
                            4. Setujui hasil kerja akhir dan berikan ulasan dengan memilih tombol Setujui hasil pekerjaan . Jika Anda belum puas dengan hasil pekerjaan freelancer, tekan tombol
                            Minta Revisi .</p>
                    </div>
                </div>

                <footer></footer>
            </div>
        </div>
    )
}

export default Main
