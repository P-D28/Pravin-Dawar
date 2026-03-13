const fs = require('fs');

const text = `
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Eye%20Sutra/Slide%202.jpg?updatedAt=1772881085376
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Eye%20Sutra/Slide%204.jpg?updatedAt=1772881085251
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Eye%20Sutra/Slide%203.jpg?updatedAt=1772881085168
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Eye%20Sutra/Slide%201.jpg?updatedAt=1772881085099
_____
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Allergy%20Saffa/Slide%201.jpg?updatedAt=1772881117208
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Allergy%20Saffa/Slide%202.jpg?updatedAt=1772881117283
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Allergy%20Saffa/Slide%203.jpg?updatedAt=1772881117215
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Allergy%20Saffa/Slide%204.jpg?updatedAt=1772881117224
----
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Height%20Veda/Slide%201.jpg?updatedAt=1772881270518
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Height%20Veda/Slide%202.jpg?updatedAt=1772881270183
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Height%20Veda/Slide%203.jpg?updatedAt=1772881270194
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Height%20Veda/Slide%204.jpg?updatedAt=1772881270245
------
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Masai%2023/Slide%201.jpg?updatedAt=1772881302127
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Masai%2023/Slide%202.jpg?updatedAt=1772881302158
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Masai%2023/Slide%203.jpg?updatedAt=1772881302527
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Masai%2023/Slide%204.jpg?updatedAt=1772881302160
------
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Gut%20Amrit/Slide%201.jpg?updatedAt=1772881235796
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Gut%20Amrit/Slide%202.jpg?updatedAt=1772881235819
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Gut%20Amrit/Slide%203.jpg?updatedAt=1772881235741
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Gut%20Amrit/Slide%204.jpg?updatedAt=1772881235609
--------
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Play%20More/Graphical%20Representation.jpg?updatedAt=1772881348038
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Play%20More/Problem%20Solution.jpg?updatedAt=1772881348034
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Play%20More/Benefits.jpg?updatedAt=1772881347796
https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Play%20More/Before%20&%20After.jpg?updatedAt=1772881347770
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/Info%20Graphics%20/Play%20More/Effect_Works%20Over%20Time.jpg?updatedAt=1772881347716
---------
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V7.jpg?updatedAt=1772101223224
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V2.jpg?updatedAt=1772101222906
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V9.jpg?updatedAt=1772101222654
https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V6.jpg?updatedAt=1772101222013
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V11.jpg?updatedAt=1772101221910
https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V4.jpg?updatedAt=1772101221773
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V12.jpg?updatedAt=1772101221379
https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20(%2026%20January%20V1.jpg?updatedAt=1772101220562
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V14.jpg
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V15.jpg
*https://ik.imagekit.io/pravindawar28/Fauji%20360/Fauji%20360%20Social%20Media%20Post%20V16.jpg
______
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V11.jpg?updatedAt=1772101223127
*https://ik.imagekit.io/pravindawar28/HV/Height%20Veda%20(%20Pay%20Day%20)%20V2-1.jpg?updatedAt=1772101223178
*https://ik.imagekit.io/pravindawar28/HV/HV%20Holi%20Ad%20V1.jpg?updatedAt=1772101223436
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V13.jpg?updatedAt=1772101222922
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V12.jpg?updatedAt=1772101222885
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V10.jpg?updatedAt=1772101222701
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%2026%20January%20V1.jpg?updatedAt=1772101222172
*https://ik.imagekit.io/pravindawar28/HV/HV%20(%20Social%20Media%2026%20January.jpg?updatedAt=1772101221698
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V15.jpg?updatedAt=1772101220677
*https://ik.imagekit.io/pravindawar28/HV/Heightveda%20Normal%20Post%20V1.jpg?updatedAt=1772101220442
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20Pack%20of%202%20(%20V1.jpg?updatedAt=1772101219562
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V5.jpg?updatedAt=1772101219540
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V4.jpg?updatedAt=1772101219469
*https://ik.imagekit.io/pravindawar28/HV/HeightVeda%20(%20Social%20Media%20V14.jpg?updatedAt=1772101222196
-------
*https://ik.imagekit.io/pravindawar28/ES/Eye%20Sutra%20Website%20Banner%20IMG%20V1.jpg?updatedAt=1772101219296
____
*https://ik.imagekit.io/pravindawar28/AS/Allergy%20Saffa%20Poster%20(%20V2.jpg?updatedAt=1772101218863
*https://ik.imagekit.io/pravindawar28/AS/Allergy%20Saffa%20Poster%20(%20V1.jpg?updatedAt=1772101221357
*https://ik.imagekit.io/pravindawar28/AS/Allergy%20Saffa%20Normal%20Poster%20(%20V7.jpg?updatedAt=1772101218602
________
*https://ik.imagekit.io/pravindawar28/GA/Gut%20Amrit%20Social%20Media%20V.jpg?updatedAt=1772101222432
*https://ik.imagekit.io/pravindawar28/GA/Gut%20Amrit%20Poster%20(%20V1-1.jpg?updatedAt=1772101221168
*https://ik.imagekit.io/pravindawar28/GA/GutAmrit%20(%20Social%20Media%20V2.jpg?updatedAt=1772101220322
*https://ik.imagekit.io/pravindawar28/GA/Gut%20Amrit%20(%20Google%20Ad%20)%20RR%20Normal%20V1%20(1%C3%971).jpg?updatedAt=1772101220127
*https://ik.imagekit.io/pravindawar28/GA/GutAmrit%20(%20Social%20Media%20V4.jpg?updatedAt=1772101220015
*https://ik.imagekit.io/pravindawar28/GA/GutAmrit%20(%20Social%20Media%20V3.jpg?updatedAt=1772101219553
*https://ik.imagekit.io/pravindawar28/GA/GutAmrit%20(%20Social%20Media%20V5.jpg?updatedAt=1772101219504
*https://ik.imagekit.io/pravindawar28/GA/GutAmrit%20(%20Social%20Media%20V6.jpg?updatedAt=1772101219370
________
*https://ik.imagekit.io/pravindawar28/Masai%2023/Masai%2023%20Social%20Media%20Post%20V1.jpg?updatedAt=1772101221870
*https://ik.imagekit.io/pravindawar28/Masai%2023/Masai-23%20Ad%20IMG%20V4.jpg?updatedAt=1772101221722
*https://ik.imagekit.io/pravindawar28/Masai%2023/Masai%2023%20Social%20Media%20Post%20V4.jpg?updatedAt=1772101221062
*https://ik.imagekit.io/pravindawar28/Masai%2023/Masai-23%20Ad%20IMG%20V3.jpg?updatedAt=1772101220975
*https://ik.imagekit.io/pravindawar28/Masai%2023/Masai%2023%20Social%20Media%20Post%20V3.jpg?updatedAt=1772101220957
*https://ik.imagekit.io/pravindawar28/Masai%2023/Masai-23%20FB%20Cover%20Image%20V1.jpg?updatedAt=1772101219675
_____________
A+
*https://ik.imagekit.io/pravindawar28/Masai%2023/A+/Slide%204.jpg?updatedAt=1772101223099
*https://ik.imagekit.io/pravindawar28/Masai%2023/A+/Slide%202.jpg?updatedAt=1772101223114
*https://ik.imagekit.io/pravindawar28/Masai%2023/A+/Slide%203.jpg?updatedAt=1772101222801
_____
Fauji360 ( A+
* https://ik.imagekit.io/pravindawar28/Fauji%20360/A+/Slide%201.jpg?updatedAt=1772119962933
*https://ik.imagekit.io/pravindawar28/Fauji%20360/A+/Slide%202.jpg?updatedAt=1772119962980
*https://ik.imagekit.io/pravindawar28/Fauji%20360/A+/Slide%203.jpg?updatedAt=1772119962940
*https://ik.imagekit.io/pravindawar28/Fauji%20360/A+/Slide%204.jpg?updatedAt=1772119962930
________________
PM AD
*https://ik.imagekit.io/pravindawar28/PM/Google%20A/V4/PM%20GDA%20V4%20(%201%C3%971%20).jpg?updatedAt=1772101223688
*https://ik.imagekit.io/pravindawar28/PM/Google%20A/V3/PM%20GDA%20V3%20(%201%C3%971%20).jpg?updatedAt=1772101224175
*https://ik.imagekit.io/pravindawar28/PM/Google%20A/V2/PM%20GDA%20V2%20(%201%C3%971%20).jpg?updatedAt=1772101223927
__________
*https://ik.imagekit.io/pravindawar28/PM/Carousel%20/S%201.jpg?updatedAt=1773384280152
*https://ik.imagekit.io/pravindawar28/PM/Carousel%20/S%202.jpg?updatedAt=1773384280165
*https://ik.imagekit.io/pravindawar28/PM/Carousel%20/S%203.jpg?updatedAt=1773384280241
*https://ik.imagekit.io/pravindawar28/PM/Carousel%20/S%204.jpg?updatedAt=1773384280147
*https://ik.imagekit.io/pravindawar28/PM/Carousel%20/S%205.jpg?updatedAt=1773384280297
___
*https://ik.imagekit.io/pravindawar28/PM/Pm%20Pay%20Day%20V1.jpg
____
Thank You Card ( Play More ) 
Back - https://ik.imagekit.io/pravindawar28/PM/TQ%20Card/PM%20Card%20Back.jpg
Front - https://ik.imagekit.io/pravindawar28/PM/TQ%20Card/PM%20Card%20Front.jpg
_________
Story Carrousel ( Play More )
Slide 1 - https://ik.imagekit.io/pravindawar28/PM/Story%20Carousel%20/Slide%201.jpg
Slide 2 - https://ik.imagekit.io/pravindawar28/PM/Story%20Carousel%20/Slide%202.jpg
Slide 3 - https://ik.imagekit.io/pravindawar28/PM/Story%20Carousel%20/Slide%203.jpg
Slide 4 - https://ik.imagekit.io/pravindawar28/PM/Story%20Carousel%20/Slide%204.jpg
Slide 5 -  https://ik.imagekit.io/pravindawar28/PM/Story%20Carousel%20/Slide%205.jpg
Slide 6 - https://ik.imagekit.io/pravindawar28/PM/Story%20Carousel%20/Slide%206.jpg
_______
* https://ik.imagekit.io/pravindawar28/PM/Play%20More%20Web%20Popup%20IMG%20V6.jpg
____
Banner image 
* https://ik.imagekit.io/pravindawar28/Herbal%20Deck/HD%20Full%20Width%20Banner%20IMG%20V2.jpg
* https://ik.imagekit.io/pravindawar28/Herbal%20Deck/HD%20Full%20Width%20Banner%20IMG%20V3.jpg
* https://ik.imagekit.io/pravindawar28/Herbal%20Deck/HD%20Brand%20Store%20IMG%20Gallery%20V2.jpg
* https://ik.imagekit.io/pravindawar28/Herbal%20Deck/HD%20Brand%20Store%20IMG%20Gallery%20V3.jpg
*https://ik.imagekit.io/pravindawar28/Herbal%20Deck/HD%20New%20Website%20Hero%20Banner%20IMG%20V1.jpg
_______________
Label Design
Fauji 360 - https://ik.imagekit.io/pravindawar28/Label%20/Fauji%20360%20Label%20Open%20Final%20(247%C3%9787)-1.jpg
U-Stone - https://ik.imagekit.io/pravindawar28/Label%20/U-Stone%20Main%20Label.jpg
Sugar Saar - https://ik.imagekit.io/pravindawar28/Label%20/Sugar%20Saar%20Main%20Label%20with%20HD%20Logo.png
`;

const lines = text.split('\n');
const groups = [];
let currentGroup = [];

for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    if (line.startsWith('___') || line.startsWith('---')) {
        if (currentGroup.length > 0) {
            groups.push(currentGroup);
            currentGroup = [];
        }
    } else {
        currentGroup.push(line);
    }
}
if (currentGroup.length > 0) {
    groups.push(currentGroup);
}

let htmlOutput = `
    <!-- Image Gallery Section -->
    <section id="gallery" class="section">
        <div class="container">
            <h2 class="section-title reveal">Image Gallery</h2>
            <div class="image-gallery">
`;

function getTitleFromUrl(url) {
    try {
        const parsed = new URL(url);
        const pathParts = decodeURIComponent(parsed.pathname).split('/');
        const filename = pathParts[pathParts.length - 1];
        const name = filename.split('.')[0];
        const folder = pathParts.length > 1 ? pathParts[pathParts.length - 2] : '';
        
        if (name.toLowerCase().startsWith('slide') || ['s 1', 's 2', 's 3', 's 4', 's 5', 's 6'].includes(name.toLowerCase())) {
            return folder + " " + name;
        }
        return name;
    } catch (e) {
        return "Image";
    }
}

for (const group of groups) {
    const urls = [];
    let groupTitle = "";
    
    for (let line of group) {
        if (line.includes("http")) {
            const match = line.match(/(https?:\/\/[^\s]+)/);
            if (match) urls.push(match[1]);
        } else {
            const cleanLine = line.replace(/\*/g, '').trim();
            if (cleanLine && !groupTitle) groupTitle = cleanLine;
        }
    }

    if (urls.length === 0) continue;

    let isSlider = false;
    if (urls.length > 1) {
        if (urls.some(u => getTitleFromUrl(u).includes('Slide') || u.includes('Carousel') || getTitleFromUrl(u).includes('S '))) {
            isSlider = true;
        }
        if (groupTitle && (groupTitle.includes('Carousel') || groupTitle.includes('A+') || groupTitle.includes('Card'))) {
            isSlider = true;
        }
        
        if (groupTitle.includes('Play More') && !groupTitle.includes('Carousel') && !groupTitle.includes('Card')) isSlider = false;
        if (groupTitle.includes('Fauji 360') && !groupTitle.includes('A+')) isSlider = false;
        if (groupTitle.includes('HV') && !groupTitle.includes('A+')) isSlider = false;
        if (groupTitle.includes('AS')) isSlider = false;
        if (groupTitle.includes('GA')) isSlider = false;
        if (groupTitle.includes('Masai 23') && !groupTitle.includes('A+')) isSlider = false;
        if (groupTitle.includes('PM AD')) isSlider = false;
        if (groupTitle.includes('Banner image')) isSlider = false;
        if (groupTitle.includes('Label Design')) isSlider = false;
        
        if (urls.some(u => u.includes('Slide'))) isSlider = true;
    }

    if (isSlider) {
        urls.sort();
        const firstUrlTitle = getTitleFromUrl(urls[0]);
        let sliderTitle = groupTitle ? groupTitle : firstUrlTitle.split('Slide')[0].trim();
        if (!sliderTitle) sliderTitle = "Infographic Slider";
        
        htmlOutput += `
                <div class="gallery-item slider-item reveal">
                    <div class="gallery-slider" data-current="0">\n`;
        
        urls.forEach((url, i) => {
            const activeClass = i === 0 ? "active" : "";
            htmlOutput += `                        <img src="${url}" class="slide ${activeClass}" alt="${sliderTitle} - Slide ${i+1}" loading="lazy">\n`;
        });
        
        htmlOutput += `                        <button class="slider-btn prev"><i class="fas fa-chevron-left"></i></button>
                        <button class="slider-btn next"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div class="gallery-caption">${sliderTitle}</div>
                </div>`;
    } else {
        for (const url of urls) {
            const title = getTitleFromUrl(url);
            htmlOutput += `
                <div class="gallery-item reveal">
                    <img src="${url}" alt="${title}" loading="lazy">
                    <div class="gallery-caption">${title}</div>
                </div>`;
        }
    }
}

htmlOutput += `
            </div>
        </div>
    </section>`;

fs.writeFileSync('gallery.html', htmlOutput);
