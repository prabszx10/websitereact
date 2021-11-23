import React, { useEffect, useState } from 'react'
import { Navbar, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faAngleDoubleRight, faUser, faComment, faMoneyBill, faCheck } from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/logo.png';

import BG from '../img/imageBackground.png';
import img1 from '../img/icon/grafis.png';
import img2 from '../img/icon/penulis.png';
import partner from '../img/partner.png';
import icon1 from '../img/icon2/icon1.png';
import icon2 from '../img/icon2/icon2.png';
import icon3 from '../img/icon2/icon3.png';
import items from '../img/icon2/quotation.png';
import VideoPlayer from 'react-video-js-player';
import nova from '../video/vid.mp4';
import imgnew from '../img/new.jpg';
import JsonUser from '../data/temukan.json'

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

const ulas = [
    {
        profile: img1,
        name: "jhon",
        ulasan: "nova freelance sangat mudah dan membantu saya untuk mengembangkan usaha saya",
    },
    {
        profile: img1,
        name: "jhon",
        ulasan: "nova freelance sangat mudah dan membantu saya untuk mengembangkan usaha saya",
    },
    {
        profile: img1,
        name: "jhon",
        ulasan: "nova freelance sangat mudah dan membantu saya untuk mengembangkan usaha saya",
    },
    {
        profile: img1,
        name: "jhon",
        ulasan: "nova freelance sangat mudah dan membantu saya untuk mengembangkan usaha saya",
    },]

function LandingPage() {

    const [userData, setUserData] = useState(JsonUser.slice(0,5));
    return (
        <div className="landingPage">
            <Navbar className="navbar">
                <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <div className="tags">
                        <a className="tag" href="">Cara menggunakan nova freelancer ?</a>
                        <a className="tag" href="">Daftar sebagai Freelancer</a>
                        <a className="tag" href="">Masuk</a>
                        <a className="tag" href="">Diskon</a>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <div className="header">
                <div className="sideLeft">
                    <h1>We <span>Make</span> Your  Job <span>Easier</span></h1>
                    <p className="boldText">Jasa Desain, Social Media Marketing, Penulisan, Fotografi, Video dan Website. Cepat dan Berkualitas</p>
                    <p className="mainText">Ribuan bisnis kecil menengah dan besar menggunakan Novapict untuk marketing dan perkembangan bisnis mereka ke level selanjutnya. Hemat waktu dan biaya.</p>
                    <div className="buttonItems">
                        <a href="/main" className="button1">Temukan Freelance</a>
                        <a href="" className="button2">Buat Job</a>
                    </div>
                </div>
                <div className="sideRight">
                    <img src={BG} alt="" />
                </div>
            </div>

            <div className="temukan">
                <div className="top">
                    <div className="judul">
                        <h1>Temukan <span>Freelancermu</span> ?</h1>
                        <div className="line"></div>
                    </div>
                    <div className="search">
                            <input type="search" placeholder="Cari Pekerjaan..." />
                            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        </div>
                </div>

                <div className="contentBox">
                    <div className="content">
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


                    <div className="selanjutnya">
                        <h5>Selanjutnya <FontAwesomeIcon icon={faAngleDoubleRight} /></h5>

                    </div>
                </div>
            </div>

            <div className="memilih">
                <div className="judul">
                    <h1>Kenapa Memilih <span>Nova freelancer</span> ?</h1>
                    <div className="line"></div>
                </div>
                <div className="subJudul">
                    <p>Novafreelancer terdiri 150.000 Freelancers tersedia dalam 70 kategori, top freelancers dan jaminan kerja</p>
                </div>
                <div className="grid">
                    <div className="grid-items">
                        <img src={icon1} alt="" />
                        <div className="isi-items">
                            <h5>Top Freelancers</h5>
                            <p>Freelancer telah melalui seleksi dan proses verifikasi dari Fastwork</p>
                        </div>
                    </div>
                    <div className="grid-items">
                        <img src={icon2} alt="" />
                        <div className="isi-items">
                            <h5>Jaminan kerja</h5>
                            <p>Uang Anda akan kami lindungi, dan Freelancer akan mulai bekerja mengerjakan project Anda.</p>
                        </div>
                    </div>
                    <div className="grid-items">
                        <img src={icon3} alt="" />
                        <div className="isi-items">
                            <h5>Berbagai pilihan layanan</h5>
                            <p>Lebih dari 150.000 Freelancers tersedia dalam 70 kategori.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="langkah">
                <div className="sideLeft">
                    <div className="judul">
                        <div className="line"></div>
                        <h1>Langkah mudah dalam mempekerjakan freelancer di <span>Nova Freelancer</span>.</h1>
                    </div>

                    <div className="grid">
                        <div className="grid-items">
                            <FontAwesomeIcon icon={faUser} className="icon" />
                            <div className="isi-items">
                                <h4>1. Cari</h4>
                                <p>Cari dan pilih freelancer berdasarkan portofolio, kemampuan dan ulasan.</p>
                            </div>
                        </div>

                        <div className="grid-items">
                            <FontAwesomeIcon icon={faComment} className="icon" />
                            <div className="isi-items">
                                <h4>2. Berdiskusi</h4>
                                <p>Diskusikan detail pekerjaan atau ruang lingkup pekerjaan yang anda inginkan lalu meminta penawaran harga dari freelancer.</p>
                            </div>
                        </div>

                        <div className="grid-items">
                            <FontAwesomeIcon icon={faMoneyBill} className="icon" />
                            <div className="isi-items">
                                <h4>3. Bayar</h4>
                                <p>Jaminan Fastwork Lakukan pembayaran melalui fastwork.id. Aman 100%</p>
                            </div>
                        </div>

                        <div className="grid-items">
                            <FontAwesomeIcon icon={faCheck} className="icon" />
                            <div className="isi-items">
                                <h4>4. Setujui dan berikan ulasan</h4>
                                <p>Setujui hasil kerja freelancer dan berikan ulasan untuk freelancer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sideRight">
                <div className="box2"></div>
                    <div className="box">
                    <VideoPlayer src={nova} poster={imgnew} className='video'/>
                    </div>
                    
                
                </div>
            </div>

            <div className="populer">
                <div className="judul">
                    <div className="line"></div>
                    <h1>Freelancer populer dalam <span>Banner</span></h1>
                </div>

                <div className="grid">
                    {userData.map((userData) => {
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
                    })}
                </div>


            </div>

            <div className="webpopuler">
                <div className="judul">
                    <div className="line"></div>
                    <h1>Freelancer populer dalam <span>Web dan Pemrograman</span></h1>
                </div>

                <div className="grid">
                {userData.map((userData) => {
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
                    })}
                </div>
            </div>

            <div className="ulasan">
                <div className="judul">
                    <h1><span>Ulasan</span> dari Pelanggan</h1>
                    <div className="line"></div>
                </div>

                <div className="grid">
                    {ulas.map((ulas) => {
                        const { profile, name, ulasan} = ulas;
                        return (
                            <div >
                                <Card style={{ width: '100%' }} className="gridItem">
                                    <div className="top">
                                        <img src={profile} alt="" />
                                        <div>
                                            <h6>{name}</h6>
                                            <p>istana mie</p>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <h5>
                                            {ulasan}
                                        </h5>
                                        <div className="bottom">
                                            <img src={items} alt="" />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="partner">
                <div className="top">
                <h6>Lebih dari <span>150.00 pekerjaan</span> kami selesaikan dari perusahaan terkemuka yang telah mempercayai dan memilih layanan <span>Nova Freelancer</span>.</h6>
                </div>    
            </div>

            <div className="isiPartner">
                <img src={partner} alt="" />
            </div>

            <footer className="footer"></footer>
        </div>
    )
}

export default LandingPage
