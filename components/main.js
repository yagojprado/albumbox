import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { mainStyles } from '../css/main';
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
            title: "Graduation",
            imageURL: require('../assets/graduation.jpg'),
            rating: 3.8,
            releaseDate: "Lançamento: 2007",
            artistName: "Kanye West",
            userReview: "O álbum 'Graduation' de Kanye West é uma explosão de energia e inovação. As batidas cativantes e os vocais autênticos fazem deste álbum uma experiência musical envolvente. Kanye mostra sua versatilidade musical com faixas que vão desde a euforia de 'Stronger' até a reflexão em 'Flashing Lights'. Uma obra-prima moderna que continua a inspirar gerações.",
            link: 'https://open.spotify.com/intl-pt/album/4SZko61aMnmgvNhfhgTuD3?si=8b53cfb4c12c43aa',
        },
        {
            title: "My Beauty Dark Fantasy",
            imageURL: require('../assets/my-beuty-dark.jpg'),
            rating: 5.0,
            releaseDate: "Lançamento: 2010",
            artistName: "Kanye West",
            userReview: "Kanye West atinge o auge de sua criatividade em 'My Beautiful Dark Twisted Fantasy'. Este álbum é uma obra-prima de produção musical, letras profundas e colaborações brilhantes. Cada faixa é uma jornada emocional, desde a grandiosidade de 'Power' até a vulnerabilidade de 'Runaway'. Um álbum que redefine o hip-hop e a música contemporânea como um todo.",
            link: 'https://open.spotify.com/intl-pt/album/20r762YmB5HeofjMCiPMLv?si=HlVHG0_MSXG_6BqjOPjaMA',
        },
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
