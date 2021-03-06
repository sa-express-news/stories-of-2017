import { generateWCMPhotoSize } from './util';

const stories = [
    {
        link: '/news/local/article/A-day-of-death-and-heroism-in-Sutherland-Springs-12348306.php',
        image: "http://ww4.hdnux.com/photos/67/24/03/14500071/15/rawImage.jpg",
        headline: "1. Sutherland Springs mass shooting",
        chatter: "A gunman opened fire during worship services at the First Baptist Church in Sutherland Springs, a small rural community east of San Antonio. He killed 26 people (including an unborn child) and wounded 20."
    },
    {
        link: '/news/local/article/What-Hurricane-Harvey-would-have-done-to-San-12361127.php',
        image: "http://ww1.hdnux.com/photos/65/35/20/14013472/11/rawImage.jpg",
        headline: "2. Hurricane Harvey",
        chatter: "Harvey smashed into the Corpus Christi area as a Category 4 hurricane, then worked its way up the Texas coast as a tropical storm dropping record amounts of rainfall from Victoria to Beaumont."
    },
    {
        link: '/news/local/article/Immigrants-on-deadly-journey-huddled-around-11351129.php',
        image: "http://ww4.hdnux.com/photos/62/54/51/13290079/6/rawImage.jpg",
        headline: "3. The deadly journey",
        chatter: "Responding to call in the early hours of July 23rd, police found 39 undocumented immigrants in a trailer in a Walmart parking lot. Eight were dead at the scene; two later died of heat-related injuries. The driver pleaded guilty to smuggling and could face life in prison."
    },
    {
        link: '/news/local/article/A-bus-crash-in-God-s-country-11043967.php',
        image: "http://ww2.hdnux.com/photos/60/14/56/12635061/6/rawImage.jpg",
        headline: "4. Church bus crash",
        chatter: "Thirteen members of a New Braunfels church were killed in a head-on collision when the oncoming driver crashed his truck into their bus. The 20-year-old truck driver was later indicted on multiple charges, including intoxication and manslaughter."
    },
    {
        link: '/news/local/article/Nirenberg-converted-former-rival-s-supporters-11220989.php',
        image: "http://ww3.hdnux.com/photos/61/74/26/13092270/3/rawImage.jpg",
        headline: "5. Nirenberg elected mayor",
        chatter: "Councilman Ron Nirenberg was elected mayor in an increasingly bitter runoff against incumbent Mayor Ivy Taylor."
    },
    {
        link: '/business/local/article/BREAKING-Texas-state-Sen-Uresti-turns-himself-11152908.php',
        image: "http://ww1.hdnux.com/photos/61/22/43/12921036/51/rawImage.jpg",
        headline: '6. Uresti arrested',
        chatter: "Texas Sen. Carlos Uresti was arrested in May on 13 counts of bribery and fraud concerning his involvement in a now-defunct San Antonio oil field services company accused of defrauding investors. Three former associates in the company pleaded guilty to conspiracy charges and are cooperating with the Justice Department's investigation."
    },
    {
        link: '/news/local/article/Controversial-Alamo-master-plan-gets-council-11139430.php',
        image: "http://ww3.hdnux.com/photos/51/45/05/10899778/3/rawImage.jpg",
        headline: "7. Council approves Alamo makeover",
        chatter: "In May, City Council approved a seven-year makeover of Alamo Plaza that would include the relocation of the Cenotaph and several street closures."
    },
    {
        link: '/news/local/article/Special-session-affected-retired-teachers-11944788.php',
        image: "http://ww3.hdnux.com/photos/62/45/52/13261450/23/rawImage.jpg",
        headline: "8. The special legislative session",
        chatter: "An anticipated power struggle between the more conservative and moderate parts of the GOP came to pass, represented by Gov. Abbott and Lt. Governor Patrick on one side and House Speaker Joe Straus on the other. A ban on sanctuary cities was the major victory for conservatives, while school vouchers and a “bathroom bill” failed. Abbott called a special session to take another crack at conservative priorities, but Straus held firm."
    },
    {
        link: '/news/local/article/After-string-of-tragedies-programs-aid-police-11291513.php',
        image: "http://ww4.hdnux.com/photos/62/33/30/13219351/7/rawImage.jpg",
        headline: "9. Fallen heroes",
        chatter: "A massive fire ripped through a Northwest Side strip mall in May, killing firefighter Scott Deem, a 31-year old father with two children and a baby on the way. Weeks later, a routine traffic stop turned into a gunfight, killing Officer Miguel Moreno, 32."
    },
    {
        link: '/news/local/article/News-of-DACA-s-end-hits-South-Texas-immigrants-12174278.php',
        image: "http://ww4.hdnux.com/photos/65/47/32/14055087/5/rawImage.jpg",
        headline: "10. Trump axes DACA",
        chatter: "In early September, President Donald Trump rescinded the Deferred Action for Childhood Arrivals program, giving Congress six months to pass a new plan before DACA protections expire. More than 120,000 Texans had received two-year renewable work permits and reprieves from deportation under DACA."
    },
];

const imageSetStories = stories.map((story) => {
    return Object.assign({}, story, { image: generateWCMPhotoSize(story.image) })
}).reverse();

export default imageSetStories;