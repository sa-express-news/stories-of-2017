import { generateWCMPhotoSize } from './util';

const stories = [
    {
        link: '/news/local/article/A-day-of-death-and-heroism-in-Sutherland-Springs-12348306.php',
        image: "http://ww1.hdnux.com/photos/67/32/74/14528268/5/rawImage.jpg",
        headline: "Sutherland Springs mass shooting",
        chatter: "A gunman opens fire during worship services at the First Baptist Church in Sutherland Springs, a small rural community east of San Antonio. He kills 26 people (including an unborn child) and wounds 20."
    },
    {
        link: '/news/local/article/What-Hurricane-Harvey-would-have-done-to-San-12361127.php',
        image: "http://ww1.hdnux.com/photos/65/35/20/14013472/11/rawImage.jpg",
        headline: "Hurricane Harvey",
        chatter: "Harvey smashes into the Corpus Christi area as a Category 4 hurricane, then works its way up the Texas as a tropical storm dropping record amounts of rainfall from Victoria to Beaumont."
    },
    {
        link: '/news/local/article/Immigrants-on-deadly-journey-huddled-around-11351129.php',
        image: "http://ww4.hdnux.com/photos/62/54/51/13290079/6/rawImage.jpg",
        headline: "Trailer of Death",
        chatter: "Responding to call in the early hours of July 23rd, police find 39 undocumented immigrants in a trailer in a Walmart parking lot. Eight are dead at the scene, two later die of heat-related injuries."
    },
    {
        link: '/news/local/article/A-bus-crash-in-God-s-country-11043967.php',
        image: "http://ww2.hdnux.com/photos/60/14/56/12635061/6/rawImage.jpg",
        headline: "Church bus crash",
        chatter: "Thirteen members of a New Braunfels church are killed in a collision when the oncoming driver crashed his truck head-on into their bus. The 20-year-old truck driver was later indicted on multiple charges alleging intoxication manslaughter, among others."
    },
    {
        link: '/news/local/article/Nirenberg-converted-former-rival-s-supporters-11220989.php',
        image: "http://ww3.hdnux.com/photos/61/74/26/13092270/3/rawImage.jpg",
        headline: "Nirenberg elected mayor",
        chatter: "Councilman Ron Nirenberg is elected mayor in an increasingly bitter runoff against incumbent Mayor Ivy Taylor."
    },
    {
        link: '/business/local/article/BREAKING-Texas-state-Sen-Uresti-turns-himself-11152908.php',
        image: "http://ww1.hdnux.com/photos/61/22/43/12921036/51/rawImage.jpg",
        headline: 'Uresti arrested',
        chatter: "Texas Sen. Carlos Uresti is arrested in May on 13 counts of bribery and fraud concerning his involvement in a now-defunct San Antonio oil field services company accused of defrauding investors. Three former associates in the company plead guilty to conspiracy charges and are cooperating with the Justice Department's investigation."
    },
    {
        link: '/news/local/article/Controversial-Alamo-master-plan-gets-council-11139430.php',
        image: "http://ww2.hdnux.com/photos/60/37/43/12712161/8/rawImage.jpg",
        headline: "Council approves Alamo makeover",
        chatter: "In May, City Council approves a seven-year makeover of Alamo Plaza that would include the relocation of the Cenotaph and several street closures."
    },
    {
        link: '/news/local/article/Special-session-affected-retired-teachers-11944788.php',
        image: "http://ww3.hdnux.com/photos/62/45/52/13261450/23/rawImage.jpg",
        headline: "The special legislative session",
        chatter: "An anticipated power struggle between the more conservative and moderate parts of the GOP came to pass, represented by Gov. Abbott and Lt. Governor Patrick on one side and House Speaker Joe Straus on the other. A ban on sanctuary cities was the major victory for conservatives in the special session while school vouchers and a “bathroom bill” failed. Abbott called a special session to take another crack at conservative priorities, but Straus held firm."
    },
    {
        link: '/news/local/article/After-string-of-tragedies-programs-aid-police-11291513.php',
        image: "http://ww4.hdnux.com/photos/62/33/30/13219351/7/rawImage.jpg",
        headline: "Fallen heroes",
        chatter: "A massive fire rips through a Northwest Side strip mall in May, killing firefighter Scott Deem, a 31-year old father with two children and a baby on the way. Weeks later, A routine traffic stop turned into a gunfight that killed Officer Miguel Moreno, 32."
    },
    {
        link: '/news/local/article/News-of-DACA-s-end-hits-South-Texas-immigrants-12174278.php',
        image: "http://ww4.hdnux.com/photos/65/47/32/14055087/5/rawImage.jpg",
        headline: "Trump axes DACA",
        chatter: "In early September, President Donald Trump rescinds the Deferred Action for Childhood Arrivals program, giving Congress six months to pass a new plan before DACA protections expire. More than 120,000 Texans had received two-year renewable work permits and reprieves from deportation under the DACA."
    },
];

const imageSetStories = stories.map((story) => {
    return Object.assign({}, story, { image: generateWCMPhotoSize(story.image) })
})

export default imageSetStories;