import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import imageAssets from "@/app/img_sources";


const destinations = [
    {
        name: "Ranolewo Lake",
        alt: "Mata Air Panas, Ranolewo",
        link: "ranolewo",
        images: [
            imageAssets[0],
            imageAssets[1],
        ],
        embedLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.9912630196063!2d124.81815817496543!3d1.1666386988222104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDknNTkuOSJOIDEyNMKwNDknMTQuNiJF!5e0!3m2!1sen!2sid!4v1690896837558!5m2!1sen!2sid",
        parts: [
            "Danau yang terbentuk secara alami, menghias alam dengan pesona yang menenangkan",
            "Warna air dari danau ini berwarna hijau dan hangat. Danau ini memiliki 7 titik sumber air panas yang berkisar antara 35-100 derajat celcius, kondisi lokasi dari danau ini berada di sekitar sawah dan dikelilingi pepohonan sehingga membuat tempat ini terasa sejuk bagi masyarakat yang ingin berendam di Danau ini.",
            "i",
            "d",
            "Ranolewo Lake, a marvel of natural beauty, graces the landscape with its serene presence. ",
            "The lake's waters, tinted in hues of green, offer a soothing warmth to all who venture into its embrace. What distinguishes Ranolewo Lake is its seven hot springs, ranging from 35 to 100 degrees Celsius",
        ],
    },
    {
        name: "Alaise Café",
        alt: "Alaise Café",
        link: "alaise",
        images: [
            imageAssets[2],
            imageAssets[3],
        ],
        embedLink: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1244.698156600926!2d124.89425550477486!3d1.2431933708028977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1721482394413!5m2!1sen!2sid",
        parts: [
            "Alaise Café sebagai tempat yang khas di Kabupaten Minahasa.",
            "Menawarkan sebuah pengalaman unik untuk penggiat seni. Dengan kelas tembikar atau pembuatan barang dari tanah liat yang tersedia untuk setiap yang mengunjungi tempat ini. Hal tersebut membuat tempat ini menjadi titik ideal untuk para pecinta seni, terutama di bidang tembikar dan menggambar.",
            "i",
            "d",
            "Alaise Café stands out as a distinctive establishment in Minahasa Regency",
            "Offering a unique experience for art enthusiasts. What sets it apart is its signature Pottery Class, available to every visitor who walks through its doors. This makes it an ideal spot for those who have a passion for the arts, particularly in drawing and pottery."
        ],
    },
    {
        name: "Astound Hill",
        alt: "Astound Hill",
        link: "astound",
        images: [
            imageAssets[4],
            imageAssets[5],
        ],
        embedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8634853839117!2d124.8966667747525!3d1.253527561878343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287155814d0a4a3%3A0xdc09ec45767fe45d!2sASTOUND%20Hill!5e0!3m2!1sen!2sid!4v1721481831264!5m2!1sen!2sid",
        parts: [
            "Astound Hill adalah destinasi turis yang menawarkan pesona alam yang indah dengan pemandangan dari tepian danau Tondano. ",
            "Hal ini membuat tempat ini cocok untuk liburan bersama keluarga, memanjakan mereka dengan menyaksikan matahari terbit dari tepian danau sambil menikmati suasana yang tenang dari tempat ini",
            "i",
            "d",
            "Astound Hill is a captivating tourist destination that offers cool natural charm with breathtaking views of the shores of Lake Tondano. ",
            "This makes it an excellent choice for a healing retreat for families, allowing them to bask in the beauty of the sunset by the lakeside while enjoying the serene ambiance"
        ]
    },
    // =================================
    // CULTURES
    // =================================
    {
        name: "Cakalele",
        alt: "Cakalele",
        link: "cakalele",
        images: [
            imageAssets[10],
            imageAssets[10],
        ],
        // embedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8634853839117!2d124.8966667747525!3d1.253527561878343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287155814d0a4a3%3A0xdc09ec45767fe45d!2sASTOUND%20Hill!5e0!3m2!1sen!2sid!4v1721481831264!5m2!1sen!2sid",
        parts: [
            "Tari Kabasaran biasanya di peragakan oleh penari pria yang biasanya seorang petani atau penjaga desa di Minahasa.",
            "Pada saat ada ancaman atau serangan, mereka akan meninggalkan pekerjaan sehari-hari dan menjadi seorang \" Waranei \" atau kesatria. Menurut tradisi, penari Kabasaran harus datang dari keterunan seorang penari Kabasaran. Mereka juga mendapat warisan senjata dari leluhur yang mereka gunakan saat sedang melakukan tarian ini",
            "i",
            "d",
            "The Kabasaran dance was traditionally performed by male dancers, who were typically farmers or village guards in Minahasa. ",
            "In times of threat or attack on their territory, they would abandon their usual occupations and transform into \"Waranei\" or warriors. According to tradition, Kabasaran dancers must come from a lineage of esteemed Kabasaran dancers. They also inherit weapons from their ancestors, which are wielded during the dance performance"
        ]
    },
    {
        name: "Pisok",
        alt: "Pisok",
        link: "pisok",
        images: [
            imageAssets[11],
            imageAssets[12],
        ],
        // embedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8634853839117!2d124.8966667747525!3d1.253527561878343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287155814d0a4a3%3A0xdc09ec45767fe45d!2sASTOUND%20Hill!5e0!3m2!1sen!2sid!4v1721481831264!5m2!1sen!2sid",
        parts: [
            "Tari Pisok adalah tari tradisional dari tanah Minahasa, Sulawesi Utara, yang menggambarkan keharmonisan dan kehidupan bahu-membahu dari orang Minahasa yang terkenal dengan perilaku energik dan penuh semangat. ",
            "Menariknya, nama \"Pisok\" terispirasi dari kehidupan burung Pisok, spesies burung yang langkah dari tanah Minahasa yang juga pernah digunakan di perangko Indonesia",
            "i",
            "d",
            "The Pisok dance is a traditional dance from the land of Minahasa in North Sulawesi, which depicts the harmonious and cooperative life of the Minahasa people that known for their energetic and lively demeanor. ",
            "Interestingly, the name \"Pisok\" is derived from and inspired by the life of the Pisok bird, a rare bird native to Minahasa, which was once featured on Indonesian stamps."
        ]
    },
    {
        name: "Kolintang",
        alt: "Kolintang",
        link: "kolintang",
        images: [
            imageAssets[13],
            imageAssets[14],
        ],
        parts: [
            "Kolintang adalah instrumen alat musk tradisional yang berasal dari Minahasa, Sulawesi Utara. ",
            "Terbuat dari kayu, instrumen ini dimainkan dengan cara di pukul dengan palu khusus. Kayu yang umum di gunakan untuk membuat Kolintang adalah telur, bandaran, wenang, kakanik, atau kayu ringan dan tebal lainnya. Serat kayu tersebut harus di atur dalam garis yang pararel. Instrumen music ini biasanya dimainkan saat ritual & upacara tradisional. ",
            "i",
            "d",
            "The Kolintang is a traditional musical instrument originating from Minahasa, North Sulawesi. ",
            "Made of wood, this instrument is played by striking it with mallets. Common types of wood used for the Kolintang include telur, bandaran, wenang, kakanik, or other lightweight and dense woods. The wood fibers must be arranged in parallel lines. This musical instrument is typically played during traditional ceremonies and rituals. ",
        ]
    },

];

export async function generateMetadata({params}) {
    const data = destinations.filter((e) => e.link === params.dest)[0];

    return {
        title: `unforgettableminahasa.com ${data.name}`,
        description: `unforgettable minahasa, ${data.name} ${data.alt}` ,
        keywords: ['Minahasa', 'unforgettable', 'adventure', 'explore', 'tourism', 'north sulawesi', 'BPPD Minahasa ', data.name, data.alt],
        creator: 'meimodev',
        publisher: 'meimodev',
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
    }
}


export default function Page({params}) {


    const _buildImage = ({src}) => {
        return <div className="h-[12rem] sm:h-[18rem] md:h-[24rem] xl:h-[30rem] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
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

                    if (e === "i") return <_buildImage key={i} src={data.images[1]}/>;

                    return <div className="py-3" key={i}> {e}</div>;
                })}
            </div>

            {data.embedLink ? <iframe className="h-64 w-full"
                                      src={data.embedLink}
                                      allowFullScreen=""
                                      loading="lazy"
                                      referrerPolicy="no-referrer-when-downgrade"/> : null
            }

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