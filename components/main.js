import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {mainStyles} from '../css/main';
import PlaylistCard from "./PlaylistCard";

export default function Main() {
    const albums = [
        {
            // Nome do Album
            title: "Ye",
            // URL da imagem do album
            imageURL: require('../assets/i-hate-being.jpg'),
            // Classificação do album
            rating: 4.5,
            releaseDate: "Lançamento: 2018",
            artistName: "Kanye West",
            // Revisão do album
            userReview: "Ye' é um álbum mais pessoal de Kanye West, revelando sua luta com a saúde mental e seus pensamentos interiores. Embora seja um mergulho profundo em sua psique, falta o impacto sonoro de seus álbuns anteriores. Ainda assim, as letras honestas e a produção única de Kanye fazem deste álbum uma adição intrigante à sua discografia.",
            // Link do album
            link: 'https://open.spotify.com/intl-pt/album/2Ek1q2haOnxVqhvVKqMvJe?si=JG33Q5EyR8Csx0iqi3y9fA',
        },
        {
            title: "Come Over When You're Sober, Pt. 1",
            imageURL: require('../assets/come_over.jpg'),
            rating: 4.8,
            releaseDate: "Lançamento: 2017",
            artistName: "Lil Peep",
            userReview: "\"Come Over When You're Sober, Pt. 1\" é um álbum póstumo de Lil Peep que continua a sua mistura única de rap e emo. Lançado após sua trágica morte, o álbum captura a melancolia e a autenticidade que definiram sua música. As letras exploram temas de relacionamentos e lutas pessoais.",
            link: 'https://open.spotify.com/intl-pt/album/6GkrA9XjOpEFkep0TIfFB8?si=tJ16n_ZwRXiotK3-imjbFg',
        },
        {
            title: "Graduation",
            imageURL: require('../assets/graduation.jpg'),
            rating: 4.7,
            releaseDate: "Lançamento: 2007",
            artistName: "Kanye West",
            userReview: "O álbum 'Graduation' de Kanye West é uma explosão de energia e inovação. As batidas cativantes e os vocais autênticos fazem deste álbum uma experiência musical envolvente. Kanye mostra sua versatilidade musical com faixas que vão desde a euforia de 'Stronger' até a reflexão em 'Flashing Lights'. Uma obra-prima moderna que continua a inspirar gerações.",
            link: 'https://open.spotify.com/intl-pt/album/4SZko61aMnmgvNhfhgTuD3?si=8b53cfb4c12c43aa',
        },
        {
            title: "Utopia",
            imageURL: require('../assets/utopia.jpg'),
            rating: 3.38,
            releaseDate: "Lançamento: 2023",
            artistName: "Travis Scott",
            userReview: "Na tentativa de dar ao mundo um verdadeiro álbum de rap de grande sucesso, o rapper de Houston oferece um espetáculo brilhante e vazio, repleto de estrelas pop que raramente causam impacto.",
            link : 'https://open.spotify.com/intl-pt/album/18NOKLkZETa4sWwLMIm0UZ?si=7217f9cde0744e70',
        },
        {
            title: "My Beauty Dark Fantasy",
            imageURL: require('../assets/my-beuty-dark.jpg'),
            rating: 4.89,
            releaseDate: "Lançamento: 2010",
            artistName: "Kanye West",
            userReview: "Kanye West atinge o auge de sua criatividade em 'My Beautiful Dark Twisted Fantasy'. Este álbum é uma obra-prima de produção musical, letras profundas e colaborações brilhantes. Cada faixa é uma jornada emocional, desde a grandiosidade de 'Power' até a vulnerabilidade de 'Runaway'. Um álbum que redefine o hip-hop e a música contemporânea como um todo.",
            link: 'https://open.spotify.com/intl-pt/album/20r762YmB5HeofjMCiPMLv?si=HlVHG0_MSXG_6BqjOPjaMA',
        },
        {
            title: "Deja Entendu",
            imageURL: require('../assets/deja-entendu.jpg'),
            rating: 4.4,
            releaseDate: "Lançamento: 2003",
            artistName: "Brand New",
            userReview: " \"Deja Entendu\" é um álbum icônico do gênero emo e rock alternativo. Suas letras introspectivas e instrumentais cativantes o tornam uma obra-prima do gênero. O álbum explora temas de amor, crescimento e angústia.",
            link: 'https://open.spotify.com/intl-pt/album/6vDiMhyfSnTn18OY99BSQX?si=a4fc246466494b35',
        },
        {
            title: "Milk & Kisses",
            imageURL: require('../assets/MilkAndKisses.jpg'),
            rating: 4.5,
            releaseDate: "Lançamento: 1996",
            artistName: "Cocteau Twins",
            userReview: "O álbum 'Milk & Kisses' dos Cocteau Twins é uma obra-prima etérea e envolvente. A voz etérea de Elizabeth Fraser e os arranjos atmosféricos criam uma experiência auditiva única. Este álbum é uma jornada musical que vale a pena explorar.",
            link: 'https://open.spotify.com/intl-pt/album/2xWjRAaO5qYhsJSxmJp1IK?si=3cb407484f7d4e21',
        },
        {
            title: "100% Charlie Brown Jr",
            imageURL: require('../assets/100-charlie-brownjr.jpg'),
            rating: 4.7,
            releaseDate: "Lançamento: 2001",
            artistName: "Charlie Brown Jr",
            userReview: "O álbum '100% Charlie Brown Jr' é uma explosão de energia e atitude. Com suas letras sinceras e batidas cativantes, Charlie Brown Jr conquistou seu lugar na cena musical brasileira. Este álbum é uma celebração do som único da banda.",
            link: 'https://open.spotify.com/intl-pt/album/0Dcy3ThOh8LS1qhXUbZWH7?si=37af671a1dd946c5',
        },
        {
            title: "Tickets to My Downfall",
            imageURL: require('../assets/tickets-downfall.jpg'),
            rating: 4.6,
            releaseDate: "Lançamento: 2020",
            artistName: "Machine Gun Kelly",
            userReview: "Com 'Tickets to My Downfall', Machine Gun Kelly fez uma transição impressionante para o gênero pop-punk. O álbum é cheio de energia, emoção e letras pessoais. Uma reviravolta ousada e bem-sucedida em sua carreira musical.",
            link: 'https://open.spotify.com/intl-pt/album/57lgFncHBYu5E3igZnuCJK?si=33078b0f2c1c4c88',
        },
        {
            title: "Oracular Spectacular",
            imageURL: require('../assets/oracular-spectacular.jpg'),
            rating: 4.9,
            releaseDate: "Lançamento: 2007",
            artistName: "MGMT",
            userReview: "O álbum 'Oracular Spectacular' de MGMT é uma jornada psicodélica e experimental que captura a essência da era moderna. Suas músicas viciantes, como 'Electric Feel' e 'Time to Pretend', se tornaram hinos indie. Um álbum inovador que continua a encantar ouvintes.",
            link: 'https://open.spotify.com/intl-pt/album/6mm1Skz3JE6AXneya9Nyiv?si=o_cLvtFQQ6iTvpWorte89w',
        }
    ];

    return (
        <ScrollView style={mainStyles.container}>
            {albums.map((album, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        handleAlbumPress(album.link);
                    }}
                >
                    <PlaylistCard
                        title={album.title}
                        releaseDate={album.releaseDate}
                        artistName={album.artistName}
                        imageURL={album.imageURL}
                        rating={album.rating}
                        userReview={album.userReview}
                        link={album.link} // Passa o link diretamente para o componente PlaylistCard
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}
