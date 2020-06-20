import React from 'react';
import { LetterCard } from '../components';

export const Letters = () => {
    return (
        <div className='flex justify-evenly'>
            <LetterCard letter="A" imageUrl="https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png" />
            <LetterCard letter="B" imageUrl="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Bear-icon.png" />
            <LetterCard letter="C" imageUrl="https://www.festivalclaca.cat/pics/b/3/37445_candy-png.png" />
            <LetterCard letter="D" imageUrl="https://w0.pngwave.com/png/676/381/rubber-duck-png-clip-art.png" />
            <LetterCard letter="E" imageUrl="https://lh3.googleusercontent.com/proxy/AooltG2iSdEVJX1rMhB8JkqF_hK_Oz7wUHw2OSQgwPg7-VHBcl6-_4TpLi9MVqqlzZc9YTHa6ittiRZuBt6bg_wqUaqf6ZKB6mXGV06Ho-vDPYHDj-YlmF7IgKATijIgWV0" />
            <LetterCard letter="F" imageUrl="https://i.ya-webdesign.com/images/refrigerator-transparent-5.png" />
            {/* G */}
            <LetterCard letter="H" imageUrl="https://w7.pngwing.com/pngs/25/900/png-transparent-black-cap-illustration-baseball-cap-t-shirt-hat-computer-icons-hat-icon-cowboy-hat-black-square-academic-cap.png" />
            <LetterCard letter="I" imageUrl="data:image/jpeg;base64,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" />
            <LetterCard letter="J" imageUrl="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffiles2.abingcdn.com%2Fbalkaneu.com%2Fuploads%2F2019%2F10%2F21185528%2Fthumbnail-4.jpg&imgrefurl=https%3A%2F%2Fbalkaneu.com%2Fthe-joker-sparks-political-controversy-in-greece%2F&tbnid=WUP-w0smWtu3fM&vet=12ahUKEwi-hMPB7I_qAhUaR5QKHRhOCcMQMygEegUIARCvAQ..i&docid=f3bvkA7G1yZIBM&w=1080&h=1080&q=joker&ved=2ahUKEwi-hMPB7I_qAhUaR5QKHRhOCcMQMygEegUIARCvAQ" />
            <LetterCard letter="K" imageUrl="http://icons.iconarchive.com/icons/iconka/landmarks/128/kangaroo-icon.png" />
            <LetterCard letter="L" imageUrl="https://w7.pngwing.com/pngs/152/1021/png-transparent-lion-cartoon-animation-lion-lion-mammal-animals-cat-like-mammal.png"/>
            {/* M */}
            <LetterCard letter="N" imageUrl="https://cdn2.vectorstock.com/i/1000x1000/51/36/logo-letter-n-glitch-distortion-vector-22855136.jpg"/>
            <LetterCard letter="O" imageUrl="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg"/>
            {/* P */}
            <LetterCard letter="Q" imageUrl="https://d2sbsqqdu2ofn4.cloudfront.net/media/images/QoP_350px.max-400x400.png"/>
            {/* R */}
            {/* S */}
            {/* T */}
            {/* U */}
            {/* V */}
            <LetterCard letter="W" imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-zzckn&psig=AOvVaw0oAGCivI7fX7lilS2F_-aT&ust=1592722680785000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODRhsboj-oCFQAAAAAdAAAAABAX" />
            {/* X */}
            <LetterCard letter="Y" imageUrl="https://img.favpng.com/15/13/21/yacht-ship-boat-png-favpng-6n8zDnyiRYUWRdTp0QxxmuT1C.jpg" />
            <LetterCard letter="Z" imageUrl="https://zedudeiscool.web.app/Zedude.png"/>
            <LetterCard letter="0" imageUrl="https://pngimg.com/uploads/number0/number0_PNG19170.png" />
            <LetterCard letter="$" imageUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAZlBMVEX///8BAAIAAADn5+cLCw1ycnIlJSXr6+vi4uLu7u7Nzc319fX6+vrKysqzs7N/f3+qqqpTU1M9PT1paWm9vb1DQ0PU1NReXl5JSUkzMzOQkJB5eXmhoaGKiooqKiqWlpYWFhYeHh47ehnNAAAEjUlEQVRoge2b65KiQAyFMQKCAgJy8YrM+7/kwigKcoJ0E9ytWvNrqnT6o7tDJzlpDUPPLFrcjcyl5hhf9BetgF59Euyt8id64XufoWbBJTWpsge6tvgSZrM+wCrIC7rbYtFhV2bnoTMPd5Pk9gu0Y/VHZRS48uAw5altfHEUhifFCHBDvwqCl/ux4Bv8x5cinxW4d/hWBOxZquSanQrs+GavTq7ZxeQXzTvokGt2OfF89WI9cg23N5PQO11wzY6mkI8TyBX7ok9ec6v9eoZz31rrkr0Uj1kfl0UrXtsse68bzUI4ZAWOkk0rVSizgHFGokBz0gUml/Ux2U2QvCvDLvTQARqOaPf7zrzmZmsTP2eihd7DwU63D3tp4bKEX9/rkFdw0ncyyEgdvEg6ZzlyMoqbEwokwwFEnzXQJ0CmRyBGeXiE2LkGGvh362hEaL+zTk22qP5qe2i9w0F0/bTUttKOrKN6EFmh1XvGQYi+3JFmdLoGSaZbEDkI/fwYorPtNfCdabGyHgZ52Ru0kPl/Dw1m/XbBhQzu9fNEnhMNPdz6CNpA7zU9MtxZ0Qc07fQj6C2MBk1FMysapkfUZJmzomG8rrOU1exoI2ZSvZ9gdjROSH/LyKAVzedAezDbusHpMCt6oOxpFxyzoF2YiPceYxa1kNvtlxUIp4fovuWjpk0UW6H01JewpkDwyu2P2nUlNLbMxfiLmGplMIXXAN68ZGJsNdGsnvo+kdKIR7l5F54GQi7vs6oBTz/oFbc9W6bKChZRJKSNn1Xk2Wbm4ftxx5i704BHQjue5arwyt2kAktmDbQfMDwW6wg4l4MaXV8469vGt8yh3ktvza33Y443z9+WCmyhF/xhy4DRMAFbPJZboyPaBHn4LXp464mkk4h2Hp4P+j0d50OXrrve2rwqHgvv9mv14QVcjCGSSx4g2uATGmlHgzVXjivESe2XkeiqEkOFcSHr40yliRJ36c1m0K6N2LIJOldfowRWt/miiEYlolSq9AaNdlurE1CZ62R+Eh5PUdEJvSw6nIjeOE7Fu5zyNLZ/GmG9aB+ILDqZuOBBR8y/DdZqfAyh1xPdLEPBgHZj0EjMVqk/XahSUovBovstJ8UjBcoJj/7aELqfvpCtlI4DP+0Iwyx60xf6FJuLsEu4oPSRVnPopP+PipdUPNSpa4/Cofs9WOV8+MwIpM0ryqDBEU62Ysx0uT58OIT20TupXIAwiXbTmoVo3EdWDpnY0R5lFEIDF9NLj7jbMESHNUKvtvit0JDSuGnX1YblvKKXZyz2aPWvDTyLG9y0W2hnmVhM8alZ9mxQnvUY8vmneWArbr37AsZogXTokuXuPQUbc9FltFGsr2egNpsC+TBBxfFGV/CIPK3q0LnTeAdTOrXegWXUGHI+XbdSvkV6I4tcoc1URen6rJWq8K5qEqGYKFybM1oY/m1/yIon2W6EPPl7P/4qf0P8rs0OtFir2mjnz9DoM2pt9vTTqYXaVDKLrS8/4ZZl4R3fIZf5NfnITzC8LAmf8iwthHWxd/aP/Nrli/6iv+gv+r9G/wF27TaKI+9B4QAAAABJRU5ErkJggg==" />
            <LetterCard letter="$" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPI5fTlr1BgFnsLFvY2Vhu3hTkZOR6Bg8S7GB9CSu5pYA9jLrU&usqp=CAU"/>
            <LetterCard letter="O" imageUrl="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg"/>
            <LetterCard letter="W" imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-zzckn&psig=AOvVaw0oAGCivI7fX7lilS2F_-aT&ust=1592722680785000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODRhsboj-oCFQAAAAAdAAAAABAX" />
            <LetterCard letter="zebra" imageUrl="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/128/22229-zebra-icon.png"/>

            <LetterCard letter="1" imageUrl="https://i1.wp.com/nyunews.com/wp-content/uploads/2018/04/theme-Illuminati_Rachel-Buigas-Lopez-1.jpg?fit=788%2C788&ssl=1" />
        </div>
    )
}