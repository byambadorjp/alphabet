import React from 'react';
import { LetterCard } from '../components';

export const Letters = () => {
    return (
        <div className='flex justify-evenly'>
            <LetterCard letter="A" imageUrl="https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png" />
            <LetterCard letter="B" imageUrl="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Bear-icon.png" />
            <LetterCard letter="C" imageUrl="https://www.festivalclaca.cat/pics/b/3/37445_candy-png.png" />
            <LetterCard letter="F" imageUrl="https://i.ya-webdesign.com/images/refrigerator-transparent-5.png" />
            <LetterCard letter="J" imageUrl="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffiles2.abingcdn.com%2Fbalkaneu.com%2Fuploads%2F2019%2F10%2F21185528%2Fthumbnail-4.jpg&imgrefurl=https%3A%2F%2Fbalkaneu.com%2Fthe-joker-sparks-political-controversy-in-greece%2F&tbnid=WUP-w0smWtu3fM&vet=12ahUKEwi-hMPB7I_qAhUaR5QKHRhOCcMQMygEegUIARCvAQ..i&docid=f3bvkA7G1yZIBM&w=1080&h=1080&q=joker&ved=2ahUKEwi-hMPB7I_qAhUaR5QKHRhOCcMQMygEegUIARCvAQ" />
            
            <LetterCard letter="H" imageUrl="https://w7.pngwing.com/pngs/25/900/png-transparent-black-cap-illustration-baseball-cap-t-shirt-hat-computer-icons-hat-icon-cowboy-hat-black-square-academic-cap.png" />

            <LetterCard letter="N" imageUrl="https://cdn2.vectorstock.com/i/1000x1000/51/36/logo-letter-n-glitch-distortion-vector-22855136.jpg"/>
            <LetterCard letter="D" imageUrl="https://w0.pngwave.com/png/676/381/rubber-duck-png-clip-art.png" />

            <LetterCard letter="E" imageUrl="https://lh3.googleusercontent.com/proxy/AooltG2iSdEVJX1rMhB8JkqF_hK_Oz7wUHw2OSQgwPg7-VHBcl6-_4TpLi9MVqqlzZc9YTHa6ittiRZuBt6bg_wqUaqf6ZKB6mXGV06Ho-vDPYHDj-YlmF7IgKATijIgWV0" />
            <LetterCard letter="Y" imageUrl="https://img.favpng.com/15/13/21/yacht-ship-boat-png-favpng-6n8zDnyiRYUWRdTp0QxxmuT1C.jpg" />
            <LetterCard letter="Q" imageUrl="https://d2sbsqqdu2ofn4.cloudfront.net/media/images/QoP_350px.max-400x400.png"/>
            <LetterCard letter="O" imageUrl="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg"/>
            <LetterCard letter="W" imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-zzckn&psig=AOvVaw0oAGCivI7fX7lilS2F_-aT&ust=1592722680785000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODRhsboj-oCFQAAAAAdAAAAABAX" />
            <LetterCard letter="K" imageUrl="http://icons.iconarchive.com/icons/iconka/landmarks/128/kangaroo-icon.png" />
            <LetterCard letter="Z" imageUrl="https://zedudeiscool.web.app/Zedude.png"/>
            <LetterCard letter="0" imageUrl="https://pngimg.com/uploads/number0/number0_PNG19170.png" />
            <LetterCard letter="$" imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAZlBMVEX///8BAAIAAADn5+cLCw1ycnIlJSXr6+vi4uLu7u7Nzc319fX6+vrKysqzs7N/f3+qqqpTU1M9PT1paWm9vb1DQ0PU1NReXl5JSUkzMzOQkJB5eXmhoaGKiooqKiqWlpYWFhYeHh47ehnNAAAEjUlEQVRoge2b65KiQAyFMQKCAgJy8YrM+7/kwigKcoJ0E9ytWvNrqnT6o7tDJzlpDUPPLFrcjcyl5hhf9BetgF59Euyt8id64XufoWbBJTWpsge6tvgSZrM+wCrIC7rbYtFhV2bnoTMPd5Pk9gu0Y/VHZRS48uAw5altfHEUhifFCHBDvwqCl/ux4Bv8x5cinxW4d/hWBOxZquSanQrs+GavTq7ZxeQXzTvokGt2OfF89WI9cg23N5PQO11wzY6mkI8TyBX7ok9ec6v9eoZz31rrkr0Uj1kfl0UrXtsse68bzUI4ZAWOkk0rVSizgHFGokBz0gUml/Ux2U2QvCvDLvTQARqOaPf7zrzmZmsTP2eihd7DwU63D3tp4bKEX9/rkFdw0ncyyEgdvEg6ZzlyMoqbEwokwwFEnzXQJ0CmRyBGeXiE2LkGGvh362hEaL+zTk22qP5qe2i9w0F0/bTUttKOrKN6EFmh1XvGQYi+3JFmdLoGSaZbEDkI/fwYorPtNfCdabGyHgZ52Ru0kPl/Dw1m/XbBhQzu9fNEnhMNPdz6CNpA7zU9MtxZ0Qc07fQj6C2MBk1FMysapkfUZJmzomG8rrOU1exoI2ZSvZ9gdjROSH/LyKAVzedAezDbusHpMCt6oOxpFxyzoF2YiPceYxa1kNvtlxUIp4fovuWjpk0UW6H01JewpkDwyu2P2nUlNLbMxfiLmGplMIXXAN68ZGJsNdGsnvo+kdKIR7l5F54GQi7vs6oBTz/oFbc9W6bKChZRJKSNn1Xk2Wbm4ftxx5i704BHQjue5arwyt2kAktmDbQfMDwW6wg4l4MaXV8469vGt8yh3ktvza33Y443z9+WCmyhF/xhy4DRMAFbPJZboyPaBHn4LXp464mkk4h2Hp4P+j0d50OXrrve2rwqHgvv9mv14QVcjCGSSx4g2uATGmlHgzVXjivESe2XkeiqEkOFcSHr40yliRJ36c1m0K6N2LIJOldfowRWt/miiEYlolSq9AaNdlurE1CZ62R+Eh5PUdEJvSw6nIjeOE7Fu5zyNLZ/GmG9aB+ILDqZuOBBR8y/DdZqfAyh1xPdLEPBgHZj0EjMVqk/XahSUovBovstJ8UjBcoJj/7aELqfvpCtlI4DP+0Iwyx60xf6FJuLsEu4oPSRVnPopP+PipdUPNSpa4/Cofs9WOV8+MwIpM0ryqDBEU62Ysx0uT58OIT20TupXIAwiXbTmoVo3EdWDpnY0R5lFEIDF9NLj7jbMESHNUKvtvit0JDSuGnX1YblvKKXZyz2aPWvDTyLG9y0W2hnmVhM8alZ9mxQnvUY8vmneWArbr37AsZogXTokuXuPQUbc9FltFGsr2egNpsC+TBBxfFGV/CIPK3q0LnTeAdTOrXegWXUGHI+XbdSvkV6I4tcoc1URen6rJWq8K5qEqGYKFybM1oY/m1/yIon2W6EPPl7P/4qf0P8rs0OtFir2mjnz9DoM2pt9vTTqYXaVDKLrS8/4ZZl4R3fIZf5NfnITzC8LAmf8iwthHWxd/aP/Nrli/6iv+gv+r9G/wF27TaKI+9B4QAAAABJRU5ErkJggg==" />
            <LetterCard letter="$" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPI5fTlr1BgFnsLFvY2Vhu3hTkZOR6Bg8S7GB9CSu5pYA9jLrU&usqp=CAU"/>
            <LetterCard letter="O" imageUrl="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg"/>
            <LetterCard letter="W" imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-zzckn&psig=AOvVaw0oAGCivI7fX7lilS2F_-aT&ust=1592722680785000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODRhsboj-oCFQAAAAAdAAAAABAX" />
            <LetterCard letter="zebra" imageUrl="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/128/22229-zebra-icon.png"/>
        </div>
    )
}