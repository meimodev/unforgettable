import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Page({params}) {

    const destinations = [
        {
            name: "Kengkang Waterfall",
            alt: "Air Terjun Kengkang",
            link: "kengkang",
            images: [
                "https://i.ibb.co/X3yGjdH/1-kengkang.jpg",
                "https://i.ibb.co/Jn7NkcZ/2-kengkang.jpg",
            ],
            embedLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2922.3991586146662!2d124.7338475895366!3d1.2818942754187255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTYnNTUuMyJOIDEyNMKwNDQnMDguNyJF!5e0!3m2!1sen!2sid!4v1690896309296!5m2!1sen!2sid",
            parts: [
                "Air Terjun Kengkang berlokasi di Desa Timbukar, Kec. Sonder, Kab. Minahasa.",
                "Air Terjun Kengkang memiliki daya tarik yang luar biasa, bunyi khas air terjun yang jatuh ditambah dengan pepohonan yang mengelilingi tempat ini sehingga menciptakan suasana yang tenang dan nyaman. tidak hanya itu Air Terjun Kengkang juga menyediakan fasilitas repling dan juga air terjun ini bisa dimanfaatkan untuk kegiatan canoeing atau mendayung. dan tentu saja di air terjun ini banyak spot foto yang bagus dan instagramable.",
                "i",
                "d",
                "Kengkang Waterfall is located in Timbukar Village, Sonder District, Minahasa Regency.",
                "Kengkang Waterfall boasts incredible charm with the distinct sound of cascading water, surrounded by lush trees, creating a serene and comfortable atmosphere. Not only that, Kengkang Waterfall also offers rappelling facilities and can be utilized for canoeing activities. Moreover, this waterfall has many great photo spots and Instagrammable ones.",
            ],
        },
        {
            name: "Ranolewo Hot Spring",
            alt: "Mata Air Panas Ranolewo",
            link: "ranolewo",
            images: [
                "https://i.ibb.co/MpQvJ6z/1-ranolewo.jpg",
                "https://i.ibb.co/WH5tDtx/2-ranolewo.jpg",
            ],
            embedLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.9912630196063!2d124.81815817496543!3d1.1666386988222104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDknNTkuOSJOIDEyNMKwNDknMTQuNiJF!5e0!3m2!1sen!2sid!4v1690896837558!5m2!1sen!2sid",
            parts: [
                "Danau Ranolewo berlokasi di Desa Toraget, Kecamatan Langowan Barat.",
                "Danau Ranolewo ini terbentuk secara alami, warna air dari danau ini berwarna hijau dan hangat. Danau ini memiliki 7 titik sumber air panas yang berkisar antara 35-100 derajat celcius, kondisi lokasi dari danau ini berada di sekitar sawah dan dikelilingi pepohonan sehingga membuat tempat ini terasa sejuk bagi masyarakat yang ingin berendam di Danau ini.",
                "i",
                "d",
                "Lake Ranolewo is located in Toraget Village, West Langowan District.",
                "This lake is a natural formation, and its water has a greenish hue and is warm. There are 7 points of hot springs around the lake, with temperatures ranging from 35 to 100 degrees Celsius. The location of the lake is surrounded by rice fields and trees, providing a cool and refreshing atmosphere for the locals who wish to bathe in the lake.",
            ],
        },
        {
            name: "Watu Pinawetengan Stone",
            alt: "Batu Pinawetengan",
            link: "pinawetengan",
            images: [
                "https://i.ibb.co/r5ztqgV/1-watupinawetengan.jpg",
                "https://i.ibb.co/VSxXv2y/2-watupinawetengan.jpg",
            ],
            embedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0017017324603!2d124.76635417877802!3d1.1592526958120055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32874429a7587e29%3A0x78707c9c905bcd7c!2sWatu%20Pinabetengan!5e0!3m2!1sen!2sid!4v1690896914178!5m2!1sen!2sid",
            parts: [
                "Watu Pinawetengan merupakan salah satu tempat cagar budaya masyarakat Minahasa yang berada di Desa Pinabetengan Kecamatan Tompaso, Kabupaten Minahasa, Sulawesi utara. Adapun arti dari Watu Pinawetengan mempunyai arti Batu Tempat Pembagian. Karena ditempat inilah terjadi peristiwa yang penting sekitar 1000 SM dimana pembagian 9 sub etnis Minahasa terjadi yang meliputi Suku Tontemboan, Tombulu, Tonsea, Tolour/Tondano, Pasan/Ratahan, Ponosakan, Bantik dan Siau.",
                "Selain membagi wilayah, para tetua suku-suku tersebut juga menjadikan tempat ini untuk berunding mengenai semua masalah yang dihadapi. Goresan-goresan di batu tersebut membentuk berbagai motif dan dipercayai sebagai hasil perundingan suku-suku itu. Motifnya ada yang berbentuk gambar manusia, gambar seperti alat kemaluan laki-laki dan perempuan, motif daun dan kumpulan garis yang tak beraturan tanpa makna.",
                "Dan berdasarkan kepercayaan masyarakat sekitar, bentuk batu ini seperti orang bersujud kepada Tuhan Yang Maha Esa. Selain itu, bentuk batu ini juga seperti peta pulau Minahasa. Batu ini menurut para arkeolog, dipakai oleh nenek moyang orang Minahasa untuk berunding. Maka tak heran, namanya menjadi Watu Pinawetengan yang artinya Batu Tempat Pembagian.",
                "Batu ini bisa dikatakan tonggak berdirinya sub etnis yang ada di Minahasa dan menurut kepercayaan penduduk berada di tengah-tengah pulau Minahasa. Bahkan beberapa orang yang rutin mengunjungi Watu Pinawetengan, ada ritual khusus yang diadakan tiap 3 Januari untuk melakukan ziarah. Sementara itu, karena nilai sejarah dan budaya yang kental, tiap tanggal 7 Juli dijadikan tempat pertunjukan seni dan budaya yang mulai terkikis di Minahasa.",
                "Watu Pinawetengan sebenarnya adalah simbol demokrasi sejati. Peristiwa demokrasi yang terjadi di Watu Pinawetengan bukan seperti teori demokrasi modern yang kita pelajari di sekolah dan di perguruan tinggi. Demokrasi Pinawetengan adalah sebuah tanda bahwa bangsa Minahasa menjunjung tinggi hak asasi manusia.",
                "i",
                "d",
                "Watu Pinawetengan is one of the cultural heritage sites of the Minahasa community located in Pibetengan Village, West Langowan District, Minahasa Regency, North Sulawesi. The name \"Watu Pinawetengan\" means the Stone of Division. It holds significant historical events dating back to around 1000 BC, where the division of the nine Minahasa sub-ethnic groups occurred, including the Tontemboan, Tombulu, Tonsea, Tolour/Tondano, Pasan/Ratahan, Ponosakan, Bantik, and Siau tribes.\n",
                "Besides being a place of territorial division, the elders of these tribes also used this site for deliberations on various matters they faced. The engravings on the stone form various motifs, believed to be the results of these tribal discussions. The motifs include human-like figures, male and female genitalia, leaf patterns, and irregular lines without specific meanings.",
                "According to the local beliefs, the shape of the stone resembles a person in a praying position towards the Almighty God. It is also seen as a representation of the map of Minahasa island. Archaeologists believe that this stone was used by the Minahasa ancestors for their discussions, which led to its name \"Watu Pinawetengan\" or the Stone of Division.",
                "The significance of this stone lies in being the cornerstone of the various sub-ethnic groups in Minahasa. Locals believe that it is located at the heart of Minahasa island. Regular visitors to Watu Pinawetengan participate in a special ritual held every 3rd of January for pilgrimage purposes. Additionally, due to its rich historical and cultural value, Watu Pinawetengan serves as a venue for arts and cultural performances that are slowly fading away in the Minahasa region, celebrated every 7th of July.",
                "Watu Pinawetengan represents true democracy. The democracy that took place at Watu Pinawetengan differs from modern democratic theories taught in schools and universities. The Pinawetengan democracy signifies the high regard for human rights among the Minahasa people.",
            ]
        },
        {
            name: "Moraya Fortress",
            alt: "Benteng Moraya",
            link: "moraya",
            images: [
                "https://i.ibb.co/DD4Jx08/1-benteng-moraya.jpg",
                "https://i.ibb.co/SQtBp1M/2-benteng-moraya.jpg",
            ],
            embedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4024361367033!2d124.90695980651236!3d1.291430423751612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328715674dc9331d%3A0xe4cb5d2772b1bdd1!2sBenteng%20Moraya!5e0!3m2!1sen!2sid!4v1690896995809!5m2!1sen!2sid",
            parts: [
                "Berada di sekitar persawahan Tondano tepatnya di Kel. Roong, Kec. Tondano Barat, Kab. Minahasa",
                "benteng Moraya merupakan tempat yang sangat bersejarah bagi masyarakat Minahasa, karena tempat ini merupakan saksi bisu terjadinya perang Tondano. Di tempat ini terdapat banyak kayu kayu besar yang dulunya digunakan sebagai pondasi rumah orang Minahasa juga terdapat waruga - waruga.",
                "Dan saat ini Benteng Moraya menjadi salah satu tempat wisata favorit yang ada di Tondano, Kawasan Tondano memang dikenal sebagai kawasan wisata mengingat udaranya yang sejuk. Bangunan benteng ini layaknya menara pengintai yang memiliki empat lantai. Lantainya yang menjulang kokoh membawa ikatan pada kejayaan Tou Minahasa di masa lalu. Begitu memasuki Benteng, terdapat dinding luar yang memiliki ukiran relief. Relief ini bukanlah tanpa makna, ada cerita tentang bagaimana awal mula dari suku Minahasa terbentuk.",
                "i",
                "d",
                "Located around the Tondano rice fields, precisely in Roong Village, West Tondano District, Minahasa Regency, the Moraya Fortress holds significant historical value for the Minahasa community, as it bears witness to the silent witness of the Tondano War. In this place, there are many large wooden structures that were once used as the foundation for Minahasa houses, as well as waruga - ancient stone sarcophagi.",
                "Currently, the Moraya Fortress has become one of the favorite tourist attractions in Tondano. The Tondano area is renowned for its tourism, owing to its cool climate. The fortress building resembles a watchtower with four floors. Its towering floors are a testament to the glory of Tou Minahasa in the past. Upon entering the fortress, there are outer walls with relief carvings. These carvings hold significant meaning, as they tell the story of the origins of the Minahasa tribe.",
            ],
        },
        {
            name: "Rok rok Waterfall",
            alt: "Air Terjun Rok rok",
            link: "rokrok",
            images: [
                "https://i.ibb.co/hXT8S7b/1-rokrok-waterfall-kembes.jpg",
                "https://i.ibb.co/R647ySt/2-rokrok-waterfall-kembes.jpg",
            ],
            embedLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7685.454370016536!2d124.87811497965338!3d1.3715643571009801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjInMTYuOSJOIDEyNMKwNTInNTcuNiJF!5e0!3m2!1sen!2sid!4v1690897083775!5m2!1sen!2sid",
            parts: [
                "Air terjun Rok - Rok berada di Desa Kembes, Kec. Tombulu, Kab. Minahasa.",
                "Air terjun Rok - Rok merupakan salah satu Air Terjun yang masih alami dan eksotis. selain menikmati indahnya suara gemericik Air Terjun di tempat ini juga sangat nyaman dan tenang karena di kelilingi oleh hijaunya pepohonan, karena memang belum banyak pengunjung, sehingga masih sangat terjaga suasana alam alami di sekitar Air Terjun ini.",
                "i",
                "d",
                "Rok-Rok Waterfall is located in Kembes Village, Tombulu District, Minahasa Regency. Rok-Rok Waterfall is one of the natural and exotic waterfalls. Besides enjoying the beautiful sound of the waterfall, this place is also very comfortable and peaceful as it is surrounded by lush green trees. Due to its low number of visitors, the natural atmosphere around the waterfall is well preserved.",
            ]
        },
        {
            name: "Ror Beach",
            alt: "Pantai Ror",
            link: "ror",
            images: [
                "https://i.ibb.co/HHbW10M/1-pantai-ror.jpg",
                "https://i.ibb.co/pyDqk45/2-pantai-ror.jpg",
            ],
            embedLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.1178846333487!2d124.96644317496528!3d1.0736223989160671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDQnMjUuMCJOIDEyNMKwNTgnMDguNSJF!5e0!3m2!1sen!2sid!4v1690897136215!5m2!1sen!2sid",
            parts: [
                "Pantai ROR Terletak di Desa Bukit Tinggi, Kec. Kakas Barat, Kab. Minahasa",
                "Di Pantai ROR kita akan menemukan pasir pantai yang lembut dan air pantai yang jernih dan di apit oleh dua tebing di sebelah sisi-sisinya sehingga memunculkan gambaran pemandangan yang unik, selain itu pantai ROR juga memiliki spot yang unik yaitu tebing batu yang menjorok ke laut sangat cocok untuk dijadikan tempat foto. Pantai ROR juga menyediakan fasilitas bagi pengunjung untuk bisa bersantai di tepian pantai menikmati indahnya suasana pantai yang nyaman dan bersih.",
                "i",
                "d",
                "ROR Beach is located in Bukit Tinggi Village, West Kakas Subdistrict, Minahasa Regency.",
                "At ROR Beach, we will find soft sandy shores and clear beach waters, flanked by two cliffs on each side, creating a unique picturesque view. Additionally, ROR Beach also has a unique spot with rocky cliffs jutting into the sea, making it a perfect place for taking photos. ROR Beach also provides facilities for visitors to relax along the beach, enjoying the beautiful and comfortable beach ambiance.",
            ],
        },

    ];


    const _buildImage = ({src}) => {
        return <div className="h-[12rem] sm:h-[18rem] md:h-[24rem] xl:h-[30rem] w-full">
            <img src={src} alt="image"/>
        </div>
    }

    const data = destinations.filter((e) => e.link === params.dest)[0];

    return <div>
        <section id="navbar " className="pb-[12rem]">
            <NavBar disableButtons/>
        </section>
        <section id="main" className="px-3 sm:px-12 max-w-3xl mx-auto text-neutral-600">

            <div className="font-bold text-5xl pt-5">{data.alt}</div>
            <div className="font-bold italic text-xl pt-2 pb-5 text-primary-600">{data.name}</div>
            <_buildImage src={data.images[0]}/>
            <div className="w-1/2 h-0.5 bg-primary-600 rounded"></div>

            <div className="text-justify py-6">
                {data.parts.map((e, i) => {
                    if (e === "d") return <div className="my-4 w-1/2 h-0.5 bg-primary-600 rounded"></div>

                    if (e === "i") return <_buildImage src={data.images[1]}/>;

                    return <div className="py-3" key={i}> {e}</div>;
                })}
            </div>

            <iframe className="h-64 w-full"
                    src={data.embedLink}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>

            <div className="text-center text-xs py-12">
                <div className="h-[1px] w-1/2 bg-primary-600 rounded-xl mx-auto my-2"></div>
                <div>oleh: admin</div>
            </div>


        </section>
        <section id="footer" className="pt-12">
            <Footer/>
        </section>
    </div>
}